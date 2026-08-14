import React from "react";
import { motion } from "motion/react";
import { Compass, Flame, Film, Award, Layers, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const milestones = [
    {
      year: "PHASE 01",
      title: "The Frustration with Shallow Tutorials",
      desc: "Stars Academy was born from a simple reality: watching passive 10-minute software videos doesn't turn you into an editor studios trust with $50k budgets."
    },
    {
      year: "PHASE 02",
      title: "The 1-on-1 Critique Engine",
      desc: "We built an academy founded on deliberate practice. Every cut, color node, and keyframe is personally reviewed by working industry directors."
    },
    {
      year: "PHASE 03",
      title: "Real RAW Studio Assets",
      desc: "Our students train on multi-camera cinema plates, uncompressed RED/Arri footage, and unedited multi-track stems from real commercial sets."
    },
    {
      year: "PHASE 04",
      title: "Global Studio Placements",
      desc: "Over 4,800+ graduates now editing high-impact commercials, music videos, broadcast documentaries, and viral creator channels worldwide."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0d0d10] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + Headline + Payoff */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ORIGIN & MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            WE DON'T JUST TEACH SOFTWARE BUTTONS. <br className="hidden sm:inline" />
            <span className="text-chrome">WE BUILD CAREER-READY DIRECTORS OF THE EDIT.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-6 leading-relaxed">
            Founded by veteran commercial filmmakers, Stars Academy is an elite training ground designed to bridge the gap between knowing how a tool works and mastering the psychological rhythm, tension, and visual finesse demanded by top creative studios.
          </p>
        </div>

        {/* 2-Column Grid: Manifesto & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: The 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Cinematic Pedagogy
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Learn how to construct tension, manipulate time with J/L cuts, balance dialogue dynamics, and color grade with scientific accuracy.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Portfolio-First Deliverables
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                You won't finish with boring homework exercises. You leave with broadcast-ready spec commercials, title sequences, and music videos.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Lifelong Mentorship & Network
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Join an active private ecosystem of editors, colorists, and motion directors who share client leads, critiques, and industry insights daily.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline of Milestones */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Flame className="w-32 h-32 text-cyan-400" />
            </div>

            <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white mb-8">
              THE STARS EVOLUTION
            </h3>

            <div className="space-y-8 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-zinc-800">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-zinc-950 -translate-x-1/2" />
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certified Master Trainers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live Feedback Engine</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Global Alumni Roster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
