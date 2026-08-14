import React from "react";
import { VALUE_PILLS } from "../data/academyData";
import { Sparkles } from "lucide-react";

export const FeaturePillStrip: React.FC = () => {
  const doublePills = [...VALUE_PILLS, ...VALUE_PILLS, ...VALUE_PILLS];

  return (
    <div className="relative w-full py-5 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-y border-zinc-800/80 overflow-hidden select-none">
      {/* Left/Right Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8">
        {doublePills.map((pill, index) => (
          <div
            key={`${pill}-${index}`}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-cyan-400 flex-shrink-0" />
            <span className="text-xs font-black tracking-widest text-zinc-300 uppercase whitespace-nowrap font-display">
              {pill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
