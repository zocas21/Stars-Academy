import React, { useState, useEffect } from "react";
import { Logo, LogoMark } from "./Logo";
import { ACADEMY_CONFIG } from "../data/academyData";
import { Send, Menu, X, ArrowUpRight, Phone, UserCheck, LayoutDashboard } from "lucide-react";
import confetti from "canvas-confetti";
import { StudentUser } from "../types";

interface NavbarProps {
  onOpenAiChat?: () => void;
  onStartLearning?: () => void;
  currentUser?: StudentUser | null;
  onOpenDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAiChat,
  onStartLearning,
  currentUser,
  onOpenDashboard,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerEnrollConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ["#00f0ff", "#ffffff", "#38bdf8", "#ca8a04"],
    });
  };

  const handleStartLearningClick = () => {
    triggerEnrollConfetti();
    if (currentUser && onOpenDashboard) {
      onOpenDashboard();
    } else if (onStartLearning) {
      onStartLearning();
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Results", href: "#results" },
    { label: "What We Teach", href: "#curriculum" },
    { label: "Showcase", href: "#showcase" },
    { label: "Instructors", href: "#instructors" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Slot with Logo */}
        <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
          <Logo size="sm" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center gap-3" id="desktop-header-actions">
          {/* AI Advisor Button */}
          <button
            onClick={onOpenAiChat}
            id="header-ai-advisor-btn"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-cyan-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/40 rounded-full transition-all duration-200 cursor-pointer"
            title="Ask Stars AI Advisor"
          >
            <LogoMark className="w-4 h-4" />
            <span>AI Advisor</span>
          </button>

          {/* Direct Telegram */}
          <a
            href={ACADEMY_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-telegram-btn"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 rounded-full transition-all"
          >
            <Send className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden xl:inline">Telegram</span>
          </a>

          {/* Primary CTA (Opens Auth Modal or Student Dashboard) */}
          <button
            type="button"
            onClick={handleStartLearningClick}
            id="header-start-learning-btn"
            className="group relative inline-flex items-center justify-center px-5 py-2 text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 cursor-pointer"
          >
            {currentUser ? (
              <>
                <LayoutDashboard className="w-3.5 h-3.5 mr-1 text-black" />
                <span>My Portal</span>
              </>
            ) : (
              <>
                <span>Start Learning</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAiChat}
            className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-full cursor-pointer"
            aria-label="Open AI Chat"
          >
            <LogoMark className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0e0e11] border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-zinc-300 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleStartLearningClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider text-black bg-cyan-400 rounded-full font-display cursor-pointer"
            >
              {currentUser ? (
                <>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>My Student Portal</span>
                </>
              ) : (
                <>
                  <span>Start Learning</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={ACADEMY_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-full"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram</span>
              </a>
              <a
                href={ACADEMY_CONFIG.phoneTelLink}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
