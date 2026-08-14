import React, { useState } from "react";
import { COURSE_TRACKS, ACADEMY_CONFIG } from "../data/academyData";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, CheckCircle, Clock, Sparkles, FolderDown, Film, ArrowUpRight, ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";

export const WhatWeTeachSection: React.FC = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(COURSE_TRACKS[0].id);

  const activeTrack = COURSE_TRACKS.find((t) => t.id === selectedTrackId) || COURSE_TRACKS[0];

  const triggerEnrollConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.7 },
      colors: ["#00f0ff", "#ffffff", "#38bdf8", "#ca8a04"]
    });
  };

  return (
    <section id="curriculum" className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CURRICULUM ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            WHAT WE TEACH: <br />
            <span className="text-chrome">THE MASTER TRACKS</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Every course at Stars Academy is built around real-world studio deliverables, structured milestones, and uncompressed production assets.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10 pb-2 overflow-x-auto select-none">
          {COURSE_TRACKS.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                id={`track-tab-${track.id}`}
                className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                <span>{track.title.split(":")[0]}</span>
                {isSelected && <ChevronRight className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>

        {/* Active Track Comprehensive Deep Dive Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Track Info & Highlights */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono font-bold text-cyan-400">
                    {activeTrack.software}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {activeTrack.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-amber-400">
                    Level: {activeTrack.level}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
                  {activeTrack.title}
                </h3>

                <p className="text-base text-zinc-300 font-medium">
                  {activeTrack.tagline}
                </p>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {activeTrack.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-zinc-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    What you will master:
                  </h4>
                  {activeTrack.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Project & Assets Callout */}
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Film className="w-4 h-4 text-purple-400" />
                    <span>Graduation Portfolio Piece:</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-mono pl-6">
                    {activeTrack.projectDeliverable}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-white pt-2 border-t border-zinc-800">
                    <FolderDown className="w-4 h-4 text-cyan-400" />
                    <span>Included Production Assets:</span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-6">
                    {activeTrack.rawAssetsIncluded}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={ACADEMY_CONFIG.externalPlatformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={triggerEnrollConfetti}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/25 active:scale-95 font-display"
                  >
                    <span>Enroll in This Track</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Weekly Breakdown Modules */}
              <div className="lg:col-span-6 bg-zinc-900/50 p-6 sm:p-8 rounded-3xl border border-zinc-800/90 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-black font-display uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Syllabus & Milestones</span>
                  </h4>

                  <div className="space-y-5">
                    {activeTrack.weeklyBreakdown.map((module, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                            {module.week}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-zinc-500">
                            1-on-1 Feedback Included
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-zinc-100 mb-1">
                          {module.title}
                        </h5>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                  <span>Questions about track fit?</span>
                  <a
                    href={ACADEMY_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline"
                  >
                    Ask on Telegram @starsacadamey21
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
