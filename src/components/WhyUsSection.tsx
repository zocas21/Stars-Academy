import React from "react";
import { motion } from "motion/react";
import { UserCheck, Briefcase, Trophy, Sparkles, Sliders, ArrowUpRight } from "lucide-react";
import { ACADEMY_CONFIG } from "../data/academyData";

export const WhyUsSection: React.FC = () => {
  const differentiators = [
    {
      id: "diff-1",
      icon: UserCheck,
      badge: "ACTIVE DIRECTORS",
      title: "Mentorship From Editors in the Field",
      desc: "Our instructors aren't retired professors or full-time course marketers. They are active commercial editors, colorists, and VFX directors working on international campaigns every week.",
      gradient: "from-cyan-500/10 via-zinc-900 to-zinc-950",
      accentBorder: "group-hover:border-cyan-500/50",
      iconColor: "text-cyan-400"
    },
    {
      id: "diff-2",
      icon: Briefcase,
      badge: "REAL RAW 6K ASSETS",
      title: "Practice on Uncut Studio Sets",
      desc: "Forget generic stock footage. You get multi-camera RED RAW, ARRI ProRes 4444, and multi-track audio stems from actual high-budget commercial shoots.",
      gradient: "from-purple-500/10 via-zinc-900 to-zinc-950",
      accentBorder: "group-hover:border-purple-500/50",
      iconColor: "text-purple-400"
    },
    {
      id: "diff-3",
      icon: Sliders,
      badge: "1-ON-1 VIDEO REVIEWS",
      title: "Frame-by-Frame Timeline Critiques",
      desc: "Every cut you export receives a private 5-10 minute screen-recorded video critique. Your mentor inspects your sound design waveforms, pacing rhythm, and color node graphs.",
      gradient: "from-amber-500/10 via-zinc-900 to-zinc-950",
      accentBorder: "group-hover:border-amber-500/50",
      iconColor: "text-amber-400"
    },
    {
      id: "diff-4",
      icon: Trophy,
      badge: "CAREER LAUNCHPAD",
      title: "Client-Ready Showreel & Job Leads",
      desc: "We don't just teach you the craft — we teach rate negotiation, client pitch proposals, file handoff protocols, and connect top students with studio hiring calls.",
      gradient: "from-emerald-500/10 via-zinc-900 to-zinc-950",
      accentBorder: "group-hover:border-emerald-500/50",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + Huge Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE STARS ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            WHY STARS ACADEMY STANDS ALONE
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            The difference between an amateur hobbyist and a 6-figure commercial editor comes down to feedback quality, real studio assets, and high-pressure repetition.
          </p>
        </div>

        {/* 4 Chunky Rounded Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {differentiators.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b ${card.gradient} border border-zinc-800/90 ${card.accentBorder} transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-display text-white mb-4 group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Ready to see how your cuts would be critiqued?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Submit your current demo reel for a free admissions evaluation.
            </p>
          </div>

          <a
            href={ACADEMY_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all font-display whitespace-nowrap shadow-lg shadow-cyan-500/20"
          >
            Request Free Reel Review
          </a>
        </div>
      </div>
    </section>
  );
};
