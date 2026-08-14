import React, { useState } from "react";
import { ACADEMY_CONFIG } from "../data/academyData";
import { Send, Phone, MessageSquare, ArrowUpRight, CheckCircle2, ShieldCheck, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    softwareInterest: "Premiere Pro & After Effects",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#00f0ff", "#ffffff", "#38bdf8", "#ca8a04"]
    });
  };

  const triggerEnrollConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.8 },
      colors: ["#00f0ff", "#ffffff", "#38bdf8", "#ca8a04"]
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0d0d11] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>JOIN THE ACADEMY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            READY TO ELEVATE <br />
            <span className="text-chrome">YOUR EDITING CAREER?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Reach out to our admissions team directly via Telegram, phone, or enroll directly on our course platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Channels & Quick CTA */}
          <div className="lg:col-span-5 space-y-6">
            {/* Telegram Card */}
            <a
              href={ACADEMY_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-telegram-card"
              className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-sky-400/60 transition-all duration-300 flex items-start justify-between group shadow-xl block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                  <Send className="w-4 h-4" />
                  <span>Instant Telegram Support</span>
                </div>
                <h3 className="text-2xl font-black font-display text-white group-hover:text-sky-300 transition-colors">
                  {ACADEMY_CONFIG.telegramHandle}
                </h3>
                <p className="text-xs text-zinc-400">
                  Direct message our lead admissions advisor for instant answers.
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>

            {/* Phone & WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Phone className="w-4 h-4" />
                <span>Direct Phone & WhatsApp</span>
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                {ACADEMY_CONFIG.phoneNumber}
              </h3>
              <p className="text-xs text-zinc-400">
                Available Monday - Saturday (9:00 AM - 8:00 PM EAT) for call consultations and WhatsApp messaging.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={ACADEMY_CONFIG.phoneTelLink}
                  id="contact-phone-call-btn"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct Call</span>
                </a>
                <a
                  href={ACADEMY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/80 rounded-full transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Repeated Primary CTA Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-950/80 via-zinc-950 to-black border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/50 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                <ShieldCheck className="w-4 h-4" />
                <span>RISK-FREE 30-DAY ENROLLMENT</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Start Learning on the Course Platform
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Instant access to all modules, project footage downloads, software project files, and the Discord community.
              </p>
              <a
                href={ACADEMY_CONFIG.externalPlatformUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerEnrollConfetti}
                id="contact-enroll-direct-btn"
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/30 font-display active:scale-95"
              >
                <span>Go to Course Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
            <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white mb-2">
              APPLY FOR ADMISSIONS EVALUATION
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-8">
              Fill out this quick form and our lead creative advisor will get back to you with recommended tracks within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-400 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Application Received!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. An admissions mentor will review your details and reach out via email or Telegram shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-cyan-400 underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="admissions-inquiry-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dawit Bekele"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Track / Software Focus
                  </label>
                  <select
                    value={formData.softwareInterest}
                    onChange={(e) => setFormData({ ...formData, softwareInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Premiere Pro & After Effects">Premiere Pro: The Cinematic Cut</option>
                    <option value="After Effects Kinetic Motion">After Effects: 3D & Kinetic Motion Design</option>
                    <option value="DaVinci Resolve Color Science">DaVinci Resolve: Hollywood Color Grading</option>
                    <option value="CapCut Viral Short-Form">Viral Short-Form & CapCut Dominance</option>
                    <option value="All-Access Full Career Track">The Complete All-Access Career Bootcamp</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Tell us about your current experience or goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you've edited before, your current equipment, or specific career goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-application-btn"
                  className="w-full py-4 rounded-full text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-display shadow-lg shadow-cyan-500/25 active:scale-95"
                >
                  Submit Application for Review
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
