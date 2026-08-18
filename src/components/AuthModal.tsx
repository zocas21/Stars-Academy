import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Lock, Mail, User, ArrowRight, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { LogoMark } from "./Logo";
import { signUpWithEmail, signInWithEmail, signInWithGoogle } from "../lib/supabase";
import { StudentUser } from "../types";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: StudentUser) => void;
  initialTab?: "signup" | "signin";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialTab = "signup",
}) => {
  const [tab, setTab] = useState<"signup" | "signin">(initialTab);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      if (tab === "signup") {
        if (!fullName.trim()) {
          throw new Error("Please enter your full name.");
        }
        if (password.length < 6) {
          throw new Error("Password must be at least 6 characters.");
        }
        const user = await signUpWithEmail(email, password, fullName);
        onSuccess(user);
      } else {
        const user = await signInWithEmail(email, password);
        onSuccess(user);
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      setErrorMsg(err.message || "Failed to authenticate. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setErrorMsg("");
    setGoogleLoading(true);
    try {
      const user = await signInWithGoogle();
      onSuccess(user);
    } catch (err: any) {
      console.error("Google Auth error:", err);
      setErrorMsg(err.message || "Google authentication failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          id="auth-modal-dialog"
          className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 z-10 overflow-hidden"
        >
          {/* Subtle Top Glow Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            id="close-auth-modal-btn"
            className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-6 pt-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-inner mb-3">
              <LogoMark className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold font-display text-white tracking-tight">
              {tab === "signup" ? "Start Your Journey" : "Welcome Back"}
            </h2>
            <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
              {tab === "signup"
                ? "Join Stars Academy and submit your payment verification to unlock full course access."
                : "Sign in to access your student portal and payment status."}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-zinc-900 rounded-xl border border-zinc-800 mb-6">
            <button
              type="button"
              onClick={() => {
                setTab("signup");
                setErrorMsg("");
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                tab === "signup"
                  ? "bg-zinc-800 text-cyan-300 shadow-sm border border-cyan-500/20"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => {
                setTab("signin");
                setErrorMsg("");
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                tab === "signin"
                  ? "bg-zinc-800 text-cyan-300 shadow-sm border border-cyan-500/20"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 mb-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-medium"
            >
              {errorMsg}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === "signup" && (
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Michael Moges"
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="editor@starsacademy.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl text-sm text-white placeholder-zinc-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl text-sm text-white placeholder-zinc-500 outline-none transition-all"
                />
              </div>
              {tab === "signup" && (
                <p className="text-[11px] text-zinc-500 mt-1">Minimum 6 characters</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading}
              id="auth-submit-btn"
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-300 text-black font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-50 cursor-pointer mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{tab === "signup" ? "Creating Account..." : "Signing In..."}</span>
                </>
              ) : (
                <>
                  <span>{tab === "signup" ? "Create Account & Continue" : "Sign In to Portal"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <span className="relative px-3 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-500">
              Or continue with
            </span>
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={googleLoading || loading}
            id="google-oauth-btn"
            className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            {googleLoading ? (
              <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.7 0 3 .6 4 1.5l3-3C17.2 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2c0 2.8.7 5.5 1.9 7.9l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
                />
              </svg>
            )}
            <span>Continue with Google</span>
          </button>

          {/* Footer note */}
          <div className="mt-6 text-center text-[11px] text-zinc-500">
            {tab === "signup" ? (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setTab("signin");
                    setErrorMsg("");
                  }}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setTab("signup");
                    setErrorMsg("");
                  }}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
