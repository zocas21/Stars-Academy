import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  X,
  UploadCloud,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Send,
  PhoneCall,
  LogOut,
  AlertCircle,
  FileImage,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Building2,
  Smartphone,
} from "lucide-react";
import { LogoMark } from "./Logo";
import { StudentUser, Submission, ChannelChoice, SubmissionStatus } from "../types";
import {
  getSubmissionForUser,
  createSubmission,
  signOut,
  updateSubmissionStatusLocally,
} from "../lib/supabase";
import confetti from "canvas-confetti";

interface StudentDashboardProps {
  user: StudentUser;
  onClose: () => void;
  onLogout: () => void;
}

const CHANNELS: { id: ChannelChoice; label: string; icon: React.FC<{ className?: string }>; placeholder: string }[] = [
  { id: "Email", label: "Email", icon: Mail, placeholder: "your-email@domain.com" },
  { id: "WhatsApp", label: "WhatsApp", icon: MessageSquare, placeholder: "+251 9... or +1..." },
  { id: "Telegram", label: "Telegram", icon: Send, placeholder: "@your_telegram_handle" },
  { id: "SMS", label: "SMS", icon: PhoneCall, placeholder: "+251 9... (mobile number)" },
];

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  user,
  onClose,
  onLogout,
}) => {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Form State
  const [chosenChannel, setChosenChannel] = useState<ChannelChoice>("Telegram");
  const [contactDetail, setContactDetail] = useState<string>("");
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadSubmission();
  }, [user.id]);

  const loadSubmission = async () => {
    setLoading(true);
    try {
      const sub = await getSubmissionForUser(user.id);
      setSubmission(sub);
    } catch (e) {
      console.error("Error loading submission:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please upload a valid image file (PNG, JPG, JPEG, WEBP).");
      return;
    }
    setScreenshotFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setErrorMsg("");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!screenshotFile && !previewUrl) {
      setErrorMsg("Please upload a screenshot of your payment transfer.");
      return;
    }

    setSubmitting(true);
    try {
      const newSub = await createSubmission({
        user_id: user.id,
        full_name: user.fullName || "Student",
        chosen_channel: chosenChannel,
        contact_detail: contactDetail || user.email,
        screenshot_file: screenshotFile || previewUrl,
      });

      setSubmission(newSub);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#38bdf8", "#ffffff"],
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err.message || "Failed to submit verification. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSimulateStatusChange = (status: SubmissionStatus) => {
    const updated = updateSubmissionStatusLocally(user.id, status);
    if (updated) {
      setSubmission(updated);
      if (status === "approved") {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#10b981", "#34d399", "#00f0ff"],
        });
      }
    }
  };

  const handleSignOutClick = async () => {
    await signOut();
    onLogout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex flex-col justify-start">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 w-full bg-zinc-950/90 border-b border-zinc-800 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <LogoMark className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white tracking-tight">Stars Academy Student Portal</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold">
                PRO PORTAL
              </span>
            </div>
            <span className="text-xs text-zinc-400">Welcome, {user.fullName}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSignOutClick}
            id="student-logout-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
          <button
            onClick={onClose}
            id="close-student-dashboard-btn"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close Portal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {loading ? (
          <div className="py-24 text-center">
            <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-zinc-400 font-mono">Loading your student enrollment status...</p>
          </div>
        ) : !submission ? (
          /* =========================================================
             STATE A: NO SUBMISSION YET -> SHOW PAYMENT UPLOAD FORM
             ========================================================= */
          <div className="space-y-8">
            {/* Header Banner */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Step 2 of 2: Payment Verification
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Submit Your Payment Verification
              </h1>
              <p className="text-sm text-zinc-400 mt-2">
                Upload your payment receipt screenshot below and choose how you would like to receive your exclusive course invitation link.
              </p>
            </div>

            {/* Payment Method Quick Reference Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Telebirr / CBE Mobile Banking</span>
                </div>
                <p className="text-zinc-300 font-mono">Telebirr: <strong className="text-white">+251 96 787 6067</strong></p>
                <p className="text-zinc-300 font-mono mt-1">CBE Account: <strong className="text-white">1000632598214</strong></p>
                <p className="text-zinc-400 mt-2 text-[11px]">Account Name: <span className="text-zinc-200">Stars Academy / Michael Moges</span></p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                  <CreditCard className="w-4 h-4" />
                  <span>International & Direct Wire</span>
                </div>
                <p className="text-zinc-300">For PayPal, Remitly, Wise, or Crypto payments:</p>
                <p className="text-zinc-300 font-mono mt-1">Telegram Advisor: <strong className="text-cyan-300">@starsacadamey21</strong></p>
                <p className="text-zinc-400 mt-2 text-[11px]">Our team verifies all transfers within 1-2 business hours.</p>
              </div>
            </div>

            {/* Submission Form */}
            <form
              onSubmit={handleSubmit}
              id="payment-submission-form"
              className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl space-y-6"
            >
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 1. Channel Choice Selection */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  1. Choose Channel for Your Course Invite Link <span className="text-cyan-400">*</span>
                </label>
                <p className="text-xs text-zinc-400 mb-3">
                  Select where you want our admissions team to deliver your verified course access link.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {CHANNELS.map((ch) => {
                    const Icon = ch.icon;
                    const isSelected = chosenChannel === ch.id;
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setChosenChannel(ch.id)}
                        className={`p-3.5 rounded-2xl border text-left flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-cyan-950/50 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-400"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                      >
                        <div className={`p-2 rounded-xl ${isSelected ? "bg-cyan-400 text-black" : "bg-zinc-800 text-zinc-400"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold">{ch.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Contact Detail Field */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Your {chosenChannel} Details / Username / Phone <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactDetail}
                  onChange={(e) => setContactDetail(e.target.value)}
                  placeholder={
                    CHANNELS.find((c) => c.id === chosenChannel)?.placeholder || "Contact details"
                  }
                  className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl text-sm text-white placeholder-zinc-500 outline-none transition-all"
                />
              </div>

              {/* 3. Screenshot Upload Area */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  2. Upload Payment Screenshot <span className="text-cyan-400">*</span>
                </label>

                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative p-6 sm:p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                    previewUrl
                      ? "border-cyan-500/50 bg-zinc-900/50"
                      : "border-zinc-800 hover:border-cyan-500/50 bg-zinc-900/40 hover:bg-zinc-900/80"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileSelect(e.target.files[0]);
                      }
                    }}
                  />

                  {previewUrl ? (
                    <div className="flex flex-col items-center">
                      <div className="relative max-w-xs max-h-56 rounded-xl overflow-hidden border border-zinc-700 shadow-xl mb-3">
                        <img
                          src={previewUrl}
                          alt="Uploaded Payment Receipt"
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/80 text-[10px] text-cyan-300 font-mono font-bold">
                          Ready to submit
                        </div>
                      </div>
                      <p className="text-xs text-zinc-300 font-medium">
                        {screenshotFile?.name || "Payment screenshot attached"}
                      </p>
                      <p className="text-[11px] text-cyan-400 mt-1 hover:underline">
                        Click or drop another image to replace
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-4">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-cyan-400 mb-3">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-white">
                        Click to upload receipt, or drag and drop image here
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">
                        Supported formats: PNG, JPG, JPEG, WEBP (Max 15MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                id="submit-payment-btn"
                className="w-full py-3.5 px-6 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-300 text-black font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-50 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Uploading & Submitting Payment Proof...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>Submit Payment Verification</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* =========================================================
             STATE B: SUBMISSION EXISTS -> SHOW STATUS DASHBOARD
             ========================================================= */
          <div className="space-y-8">
            {/* Status Card Banner */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden ${
                submission.status === "approved"
                  ? "bg-emerald-950/20 border-emerald-500/40 shadow-emerald-950/30"
                  : "bg-amber-950/20 border-amber-500/40 shadow-amber-950/30"
              }`}
            >
              {/* Header Status Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      submission.status === "approved"
                        ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30"
                        : "bg-amber-500 text-black shadow-lg shadow-amber-500/30"
                    }`}
                  >
                    {submission.status === "approved" ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Enrollment Status
                    </span>
                    <h2
                      id="submission-status-badge"
                      className={`text-2xl font-black font-display tracking-wide ${
                        submission.status === "approved" ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      {submission.status === "approved" ? "APPROVED" : "PENDING"}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span>Submitted:</span>
                  <span className="text-zinc-200">
                    {new Date(submission.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Exact Status Messages according to prompt requirements */}
              <div className="pt-6 space-y-4">
                {submission.status === "pending" ? (
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl font-semibold text-zinc-100">
                      Your payment screenshot is under review by our team.
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                      Our admissions faculty is currently verifying your bank transaction proof. Once approved, your exclusive invite link will be sent to your chosen channel (<span className="text-cyan-300 font-semibold">{submission.chosen_channel}</span>).
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl font-semibold text-emerald-300">
                      Your payment is verified! Your Skool course invite link will be sent to your chosen channel:{" "}
                      <span className="text-white font-bold underline decoration-emerald-400">
                        {submission.chosen_channel}
                      </span>
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                      Welcome to the Stars Academy Creator Cohort! Please check your {submission.chosen_channel} messages ({submission.contact_detail || user.email}) for your unique personalized access key and onboarding guide.
                    </p>
                  </div>
                )}
              </div>

              {/* Submission Information Details */}
              <div className="mt-8 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-zinc-500 block mb-1">Registered Student</span>
                  <span className="text-white font-semibold">{submission.full_name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-1">Chosen Delivery Channel</span>
                  <span className="text-cyan-300 font-semibold">{submission.chosen_channel} ({submission.contact_detail || user.email})</span>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-1">Receipt Proof</span>
                  {submission.screenshot_url ? (
                    <a
                      href={submission.screenshot_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <FileImage className="w-3.5 h-3.5" />
                      <span>View Uploaded Image</span>
                    </a>
                  ) : (
                    <span className="text-zinc-400">Verified</span>
                  )}
                </div>
              </div>
            </div>

            {/* Reviewer / Admin Simulator Controls for Testing */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-zinc-300">Live Status Switcher (Testing & Review):</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSimulateStatusChange("pending")}
                    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all cursor-pointer ${
                      submission.status === "pending"
                        ? "bg-amber-950 text-amber-300 border-amber-500"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                    }`}
                  >
                    Set Pending
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSimulateStatusChange("approved")}
                    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all cursor-pointer ${
                      submission.status === "approved"
                        ? "bg-emerald-950 text-emerald-300 border-emerald-500"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                    }`}
                  >
                    Simulate Approval
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
