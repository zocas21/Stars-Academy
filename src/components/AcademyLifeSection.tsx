import React from "react";
import { ACADEMY_LIFE_MOMENTS } from "../data/academyData";
import { Camera, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const AcademyLifeSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0f] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>BEHIND THE CURTAIN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            ACADEMY LIFE: <br />
            <span className="text-chrome">THE CREATIVE ECOSYSTEM</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Inside our masterclass breakdowns, collaborative editing lounges, and live Discord critique sessions.
          </p>
        </div>

        {/* 4-Image Grid with Hover Overlays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_LIFE_MOMENTS.map((moment, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    {moment.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
