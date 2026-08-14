import React from "react";
import { motion } from "motion/react";
import { ACADEMY_CONFIG } from "../data/academyData";
import { Logo } from "./Logo";
import { Play, ArrowRight, Star, ShieldCheck, Video, Flame, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface HeroSectionProps {
  onWatchReel: () => void;
  onOpenAiChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onWatchReel, onOpenAiChat }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00f0ff", "#ffffff", "#38bdf8", "#ca8a04"]
    });
  };

  const headlineWords = ["BECOME", "THE", "EDITOR", "EVERY", "STUDIO", "WANTS"];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Cinematic Background Glows and Keyframe Grid Elements */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Floating Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cross-star / Lens Flare Decorative SVG Accents */}
      <div className="absolute top-24 right-1/4 opacity-20 pointer-events-none hidden md:block">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 20 0 L 20 40 M 0 20 L 40 20" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-1/5 opacity-20 pointer-events-none hidden md:block">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path d="M 16 0 L 16 32 M 0 16 L 32 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Prominent Stars Academy Logo in Hero Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 cursor-pointer"
        >
          <Logo size="xl" />
        </motion.div>

        {/* Small Yellow/Electric Accent Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-black tracking-widest uppercase mb-6 shadow-lg shadow-cyan-950/40"
        >
          <Flame className="w-3.5 h-3.5 text-cyan-400" />
          <span>PORTFOLIO-FIRST VIDEO EDITING & MOTION DESIGN TRAINING</span>
        </motion.div>

        {/* Massive School-of-Motion Style Headline Typography */}
        <h1
          id="hero-main-title"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-tight text-white uppercase leading-[0.92] max-w-5xl my-4 text-center select-none"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.08,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={`inline-block mr-3 sm:mr-4 ${
                word === "EDITOR" || word === "WANTS" ? "text-chrome" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Punchy Subheadline Payoff */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mt-6 mb-10 font-normal leading-relaxed text-center"
        >
          Master <span className="text-zinc-200 font-semibold">Premiere Pro</span>,{" "}
          <span className="text-zinc-200 font-semibold">After Effects</span>,{" "}
          <span className="text-zinc-200 font-semibold">DaVinci Resolve</span>, and{" "}
          <span className="text-zinc-200 font-semibold">CapCut</span>. Learn with real RAW 6K studio footage, client-ready briefs, and{" "}
          <span className="text-cyan-300 font-semibold">1-on-1 personalized video critiques</span> from industry directors.
        </motion.p>

        {/* High-Impact CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href={ACADEMY_CONFIG.externalPlatformUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerConfetti}
            id="hero-cta-start-learning"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: Watch Reel */}
          <button
            onClick={onWatchReel}
            id="hero-cta-watch-reel"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 hover:border-zinc-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-black/50"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Our Story (Showcase Reel)</span>
          </button>
        </motion.div>

        {/* Trust Badges & Social Proof Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-zinc-200">4.9 / 5.0</span>
            <span className="text-zinc-500">(1,200+ Reviews)</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-300 font-medium">30-Day Money-Back Guarantee</span>
          </div>

          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-cyan-400" />
            <span className="text-zinc-300 font-medium">1-on-1 Video Critiques Included</span>
          </div>

          <button
            onClick={onOpenAiChat}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-semibold underline underline-offset-4 decoration-cyan-500/40 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Need course advice? Ask Nova AI</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
