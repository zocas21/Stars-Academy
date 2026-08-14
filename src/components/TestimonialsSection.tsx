import React from "react";
import { TESTIMONIALS } from "../data/academyData";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ALUMNI VOICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            WHAT OUR GRADUATES SAY <br />
            <span className="text-chrome">ABOUT THE EXPERIENCE</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Real stories from editors who transformed their technique, raised their rates, and landed commercial contracts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    Verified Graduate
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    Career Milestone:
                  </span>
                  <p className="text-xs text-zinc-300 font-medium">
                    {t.outcome}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-900">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {t.name}
                    </h4>
                    <span className="text-xs text-zinc-400 block">
                      {t.role}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {t.course}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
