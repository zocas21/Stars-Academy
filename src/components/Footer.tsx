import React from "react";
import { Logo } from "./Logo";
import { ACADEMY_CONFIG } from "../data/academyData";
import { Send, Phone, ArrowUp, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-28 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Logo & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
              Stars Academy is the premier training ground for professional video editors, colorists, and motion designers. Portfolio-first curriculum with 1-on-1 industry critiques.
            </p>
            <div className="flex items-center gap-2 text-zinc-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>30-Day Money-Back Guarantee on All Tracks</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
              Curriculum & Academy
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#curriculum" className="hover:text-cyan-400 transition-colors">Premiere Pro Track</a></li>
              <li><a href="#curriculum" className="hover:text-cyan-400 transition-colors">After Effects Motion Design</a></li>
              <li><a href="#curriculum" className="hover:text-cyan-400 transition-colors">DaVinci Resolve Color Science</a></li>
              <li><a href="#curriculum" className="hover:text-cyan-400 transition-colors">CapCut & Viral Short-Form</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">Student Showcase Reel</a></li>
              <li><a href="#instructors" className="hover:text-cyan-400 transition-colors">Faculty & Mentors</a></li>
            </ul>
          </div>

          {/* Direct Support & External Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
              Official Admissions Channels
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram:</span>
                <a
                  href={ACADEMY_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-sky-300 font-bold"
                >
                  {ACADEMY_CONFIG.telegramHandle}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Phone / WhatsApp:</span>
                <a href={ACADEMY_CONFIG.phoneTelLink} className="text-white hover:text-emerald-300 font-bold">
                  {ACADEMY_CONFIG.phoneNumber}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={ACADEMY_CONFIG.externalPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-300 hover:text-white hover:border-cyan-500 text-xs font-bold transition-all"
                >
                  Course Platform Portal →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} Stars Academy. All rights reserved. Professional Video Editing & Motion Design Training.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
