import React from "react";
import { ACADEMY_CONFIG } from "../data/academyData";
import { Send, Youtube, Instagram, Share2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const SocialSection: React.FC = () => {
  const socialChannels = [
    {
      name: "Telegram Community",
      handle: "@starsacadamey21",
      url: ACADEMY_CONFIG.telegramUrl,
      desc: "Instant announcements, daily edit breakdowns, admissions Q&A, and free asset drops.",
      icon: Send,
      color: "from-sky-500/20 to-zinc-950",
      accent: "text-sky-400",
      border: "hover:border-sky-500/50"
    },
    {
      name: "YouTube Masterclasses",
      handle: "@starsacademy",
      url: "https://youtube.com/@starsacademy",
      desc: "Weekly timeline breakdowns, free color grading tutorials, and student project highlights.",
      icon: Youtube,
      color: "from-red-500/20 to-zinc-950",
      accent: "text-red-400",
      border: "hover:border-red-500/50"
    },
    {
      name: "TikTok Viral Lab",
      handle: "@starsacademy_edits",
      url: "https://tiktok.com",
      desc: "Short-form retention breakdowns, kinetic subtitle tricks, and fast editing hacks.",
      icon: Share2,
      color: "from-cyan-500/20 to-zinc-950",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50"
    },
    {
      name: "Instagram Showcase",
      handle: "@starsacademy",
      url: "https://instagram.com",
      desc: "Behind-the-scenes studio moments, motion graphics snippets, and graduate highlights.",
      icon: Instagram,
      color: "from-pink-500/20 to-zinc-950",
      accent: "text-pink-400",
      border: "hover:border-pink-500/50"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>COMMUNITY CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            JOIN THE CONVERSATION <br />
            <span className="text-chrome">ACROSS OUR SOCIAL SPACES</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Connect with over 45,000+ creators across our official channels for free project files and live breakdowns.
          </p>
        </div>

        {/* 4 Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className={`p-8 rounded-3xl bg-gradient-to-b ${social.color} border border-zinc-800/90 ${social.border} transition-all duration-300 flex flex-col justify-between group shadow-xl`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center ${social.accent} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1">
                    {social.name}
                  </h3>
                  <span className={`text-xs font-mono font-bold ${social.accent} block mb-3`}>
                    {social.handle}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {social.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Open Channel</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
