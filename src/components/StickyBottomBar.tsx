import React from "react";
import { ACADEMY_CONFIG } from "../data/academyData";
import { ArrowUpRight, ShieldCheck, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface StickyBottomBarProps {
  onStartLearning?: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onStartLearning }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.9 },
      colors: ["#00f0ff", "#ffffff", "#38bdf8", "#ca8a04"]
    });
  };

  const handleStartLearningClick = () => {
    triggerConfetti();
    if (onStartLearning) {
      onStartLearning();
    }
  };

  return (
    <aside
      id="persistent-sticky-bottom-bar"
      aria-label="Quick Enrollment Action Bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-zinc-800/90 py-2.5 px-4 sm:px-6 shadow-2xl shadow-black"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Side: Trust & Value Proposition Line */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs text-zinc-300 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold text-white font-display">Stars Academy All-Access</span>
          </div>

          <span className="text-zinc-600 hidden md:inline">•</span>

          <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>30-Day Guarantee</span>
          </div>

          <span className="text-zinc-600 hidden lg:inline">•</span>

          <div className="hidden lg:flex items-center gap-1.5 text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>1-on-1 Video Critiques Included</span>
          </div>
        </div>

        {/* Right Side: Quick Action Pill */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a
            href={ACADEMY_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all"
          >
            <Send className="w-3 h-3 text-sky-400" />
            <span>Telegram</span>
          </a>

          <button
            type="button"
            onClick={handleStartLearningClick}
            id="sticky-bar-start-learning-btn"
            className="group inline-flex items-center justify-center px-5 sm:px-6 py-2 text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Start Learning</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
