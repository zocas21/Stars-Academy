import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Sliders, Sparkles, TrendingUp, DollarSign, Clock, Volume2, CheckCircle2 } from "lucide-react";

export const StudentResultsSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) handleSliderMove(e.touches[0].clientX);
  };

  const transformationMetrics = [
    {
      label: "Average Freelance Hourly Rate",
      before: "$15 - $25 / hr",
      after: "$65 - $125 / hr",
      increase: "+380% Increase"
    },
    {
      label: "Commercial Project Turnaround Speed",
      before: "3 - 5 Days per Cut",
      after: "24 Hours Delivery",
      increase: "3x Timeline Velocity"
    },
    {
      label: "Client Retention & Re-Hires",
      before: "35% Repeat Rate",
      after: "92% Retainer Conversion",
      increase: "Studio Standard Quality"
    }
  ];

  return (
    <section id="results" className="py-24 sm:py-32 bg-[#0d0d11] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>MEASURABLE TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            SEE THE DIFFERENCE: <br />
            <span className="text-chrome">RAW LOG TO HOLLYWOOD FINISH</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Drag the interactive slider below to inspect the transformation from flat unedited camera log to our color-managed, sound-designed, and motion-polished master timeline.
          </p>
        </div>

        {/* Interactive Before / After Comparison Slider Component */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-2xl select-none mb-16">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] cursor-ew-resize overflow-hidden"
          >
            {/* AFTER Image (Background Layer - Color Graded & Polished) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
                alt="Stars Academy Master Color Graded Edit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* After Badges */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/90 border border-cyan-400 text-cyan-300 text-xs font-black uppercase tracking-widest shadow-xl">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AFTER: STARS MASTER EDIT (GRADE + SFX + VFX)</span>
              </div>

              {/* Lower HUD stats */}
              <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-700 text-xs text-zinc-300">
                <span className="text-cyan-400 font-mono">DaVinci Node Tree: 12 Nodes</span>
                <span>•</span>
                <span className="text-emerald-400 font-mono">Audio LUFS: -14 Broadcast</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped Overlay Layer - Raw Flat Log) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
                alt="Raw Unedited Camera Log"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-50 brightness-110 saturate-50"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%", maxWidth: "none" }}
              />
              <div className="absolute inset-0 bg-zinc-900/30" />

              {/* Before Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-400 text-xs font-bold uppercase tracking-widest shadow-xl">
                <span>BEFORE: RAW CAMERA LOG (UNCUT)</span>
              </div>

              <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-700 text-xs text-zinc-400 font-mono">
                <span>Flat Profile • No Sound Layering • Rough Pacing</span>
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-xl shadow-cyan-500/50">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="font-mono flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              Interactive Timeline Split-Screen
            </span>
            <span className="italic">Click or drag anywhere on the viewer to compare</span>
          </div>
        </div>

        {/* Career & Rate Transformation Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {transformationMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                  {item.label}
                </span>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>Self-taught / Before:</span>
                    <span className="line-through">{item.before}</span>
                  </div>
                  <div className="flex items-center justify-between text-base sm:text-lg font-bold text-white">
                    <span className="text-zinc-300">Stars Graduate:</span>
                    <span className="text-cyan-400">{item.after}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                <span>{item.increase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
