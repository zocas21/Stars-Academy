import React from "react";
import { INSTRUCTORS, ACADEMY_CONFIG } from "../data/academyData";
import { Users, Send, Youtube, Instagram, Linkedin, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export const InstructorsSection: React.FC = () => {
  return (
    <section id="instructors" className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>WORLD-CLASS MENTORS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            LEARN DIRECTLY FROM <br />
            <span className="text-chrome">ACTIVE COMMERCIAL DIRECTORS</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Our faculty members have cut Super Bowl campaigns, international music videos, viral creator hits, and award-winning festival films.
          </p>
        </div>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((instructor, idx) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    {instructor.id === "michael-moges" ? "Lead Mentor" : "Senior Faculty"}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                    {instructor.name}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mt-1 mb-3">
                    {instructor.title}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {instructor.bio}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-900">
                    {instructor.credits.map((credit, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-medium">
                        <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{credit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="px-6 py-4 border-t border-zinc-900 bg-zinc-900/30 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-zinc-500">
                  Connect / Follow
                </span>
                <div className="flex items-center gap-3 text-zinc-400">
                  <a
                    href={instructor.socials?.telegram || ACADEMY_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors"
                    aria-label="Telegram"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={instructor.socials?.youtube || "https://youtube.com/@mikistar21"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={instructor.socials?.instagram || "https://www.instagram.com/mikistar21"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
