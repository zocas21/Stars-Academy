import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { StudentUser, Submission, ChannelChoice, SubmissionStatus } from "../types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("placeholder")
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Local storage persistent keys for fallback & preview testing
const STORAGE_USER_KEY = "stars_academy_auth_user";
const STORAGE_SUBMISSIONS_KEY = "stars_academy_submissions";

export async function getCurrentUser(): Promise<StudentUser | null> {
  if (supabase) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        return {
          id: user.id,
          email: user.email || "",
          fullName: user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "Student",
          avatarUrl: user.user_metadata?.avatar_url,
          createdAt: user.created_at || new Date().toISOString(),
        };
      }
    } catch (e) {
      console.warn("Supabase auth check failed, falling back to local session:", e);
    }
  }

  // Local fallback
  const raw = localStorage.getItem(STORAGE_USER_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  return null;
}

export async function signUpWithEmail(email: string, password: string, fullName: string): Promise<StudentUser> {
  if (supabase) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error("Supabase sign up error:", error);
      throw error;
    }

    if (data.user) {
      const student: StudentUser = {
        id: data.user.id,
        email: data.user.email || email,
        fullName: fullName || email.split("@")[0],
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(student));
      return student;
    }
  }

  // Local storage mock auth for preview environment
  const mockUser: StudentUser = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email,
    fullName: fullName || email.split("@")[0],
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(mockUser));
  return mockUser;
}

export async function signInWithEmail(email: string, password: string): Promise<StudentUser> {
  if (supabase) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Supabase sign in error:", error);
      throw error;
    }

    if (data.user) {
      const student: StudentUser = {
        id: data.user.id,
        email: data.user.email || email,
        fullName: data.user.user_metadata?.full_name || email.split("@")[0],
        createdAt: data.user.created_at || new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(student));
      return student;
    }
  }

  // Local storage check or create
  const existing = localStorage.getItem(STORAGE_USER_KEY);
  if (existing) {
    try {
      const parsed = JSON.parse(existing);
      if (parsed.email.toLowerCase() === email.toLowerCase()) {
        return parsed;
      }
    } catch {}
  }

  const mockUser: StudentUser = {
    id: `usr_${Date.now()}`,
    email,
    fullName: email.split("@")[0],
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(mockUser));
  return mockUser;
}

export async function signInWithGoogle(): Promise<StudentUser> {
  if (supabase) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) {
      console.error("Supabase Google sign in error:", error);
    }
  }

  // Seamless preview Google user login
  const googleUser: StudentUser = {
    id: `usr_google_${Date.now()}`,
    email: "creator@starsacademy.com",
    fullName: "Stars Creator (Google User)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(googleUser));
  return googleUser;
}

export async function signOut(): Promise<void> {
  if (supabase) {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn("Supabase sign out error:", e);
    }
  }
  localStorage.removeItem(STORAGE_USER_KEY);
}

// Submissions API
export async function getSubmissionForUser(userId: string): Promise<Submission | null> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("submissions")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        return data as Submission;
      }
    } catch (e) {
      console.warn("Supabase fetch submission error:", e);
    }
  }

  // Local storage check
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY);
  if (raw) {
    try {
      const list: Submission[] = JSON.parse(raw);
      const userSub = list.find((s) => s.user_id === userId);
      return userSub || null;
    } catch {
      return null;
    }
  }
  return null;
}

export async function createSubmission(payload: {
  user_id: string;
  full_name: string;
  chosen_channel: ChannelChoice;
  contact_detail?: string;
  screenshot_file: File | string;
}): Promise<Submission> {
  let screenshotUrl = typeof payload.screenshot_file === "string" ? payload.screenshot_file : "";

  // Upload to Supabase Storage if file and client configured
  if (supabase && typeof payload.screenshot_file !== "string") {
    try {
      const fileExt = payload.screenshot_file.name.split(".").pop();
      const fileName = `${payload.user_id}_${Date.now()}.${fileExt}`;
      const filePath = `payment_proofs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("payment-screenshots")
        .upload(filePath, payload.screenshot_file);

      if (!uploadError) {
        const { data: { publicUrl } } = supabase.storage
          .from("payment-screenshots")
          .getPublicUrl(filePath);
        screenshotUrl = publicUrl;
      }
    } catch (e) {
      console.warn("Supabase storage upload error, using local data URL:", e);
    }
  }

  // If no URL yet, convert file to data URL
  if (!screenshotUrl && typeof payload.screenshot_file !== "string") {
    screenshotUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(payload.screenshot_file as File);
    });
  }

  const newSubmission: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    user_id: payload.user_id,
    full_name: payload.full_name,
    chosen_channel: payload.chosen_channel,
    contact_detail: payload.contact_detail || "",
    screenshot_url: screenshotUrl,
    status: "pending",
    created_at: new Date().toISOString(),
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("submissions")
        .insert([newSubmission])
        .select()
        .single();
      if (!error && data) {
        // Also cache locally
        saveLocalSubmission(data as Submission);
        return data as Submission;
      }
    } catch (e) {
      console.warn("Supabase insert submission error:", e);
    }
  }

  saveLocalSubmission(newSubmission);
  return newSubmission;
}

function saveLocalSubmission(sub: Submission) {
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY);
  let list: Submission[] = [];
  if (raw) {
    try {
      list = JSON.parse(raw);
    } catch {}
  }
  // Replace or prepend
  list = [sub, ...list.filter((s) => s.user_id !== sub.user_id)];
  localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(list));
}

export function updateSubmissionStatusLocally(userId: string, newStatus: SubmissionStatus): Submission | null {
  const raw = localStorage.getItem(STORAGE_SUBMISSIONS_KEY);
  if (!raw) return null;
  try {
    let list: Submission[] = JSON.parse(raw);
    const index = list.findIndex((s) => s.user_id === userId);
    if (index !== -1) {
      list[index] = { ...list[index], status: newStatus, reviewed_at: new Date().toISOString() };
      localStorage.setItem(STORAGE_SUBMISSIONS_KEY, JSON.stringify(list));
      return list[index];
    }
  } catch {}
  return null;
}
