import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showGlow = true,
}) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-11",
    lg: "h-16",
    xl: "h-24 md:h-32",
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Background radial glow */}
      {showGlow && (
        <div className="absolute inset-0 -z-10 blur-xl opacity-30 bg-gradient-to-r from-cyan-500/20 via-zinc-200/20 to-blue-500/20 rounded-full scale-125 pointer-events-none" />
      )}

      <svg
        viewBox="0 0 500 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        aria-label="Stars Academy Logo"
      >
        <defs>
          {/* Chrome / Brushed Silver Gradient */}
          <linearGradient id="silverChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#c4c4c8" />
            <stop offset="50%" stopColor="#f4f4f6" />
            <stop offset="75%" stopColor="#8e8e93" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Secondary Silver Highlight */}
          <linearGradient id="silverSubGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a1a1aa" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>

          {/* Orbit Arc Gradient */}
          <linearGradient id="orbitGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#71717a" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#e4e4e7" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="85%" stopColor="#00f0ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>

          {/* Ellipse Underline Gradient */}
          <linearGradient id="ellipseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="30%" stopColor="#e4e4e7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="80%" stopColor="#a1a1aa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#71717a" stopOpacity="0" />
          </linearGradient>

          {/* Chrome Drop Shadow Filter */}
          <filter id="metallicSheen" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#ffffff" floodOpacity="0.3" />
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#00f0ff" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dynamic Swooping Orbit Arc above STARS */}
        <path
          d="M 120 120 C 180 35, 340 30, 460 90"
          stroke="url(#orbitGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#metallicSheen)"
        />

        {/* Orbit Inner Echo Line */}
        <path
          d="M 160 105 C 210 50, 310 48, 430 85"
          stroke="url(#silverChromeGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* "STARS" Wordmark */}
        <text
          x="250"
          y="105"
          textAnchor="middle"
          fill="url(#silverChromeGrad)"
          fontSize="68"
          fontWeight="900"
          fontFamily="'Syne', 'Outfit', sans-serif"
          letterSpacing="4"
          filter="url(#metallicSheen)"
        >
          STARS
        </text>

        {/* "ACADEMY" Wordmark */}
        <text
          x="250"
          y="148"
          textAnchor="middle"
          fill="url(#silverSubGrad)"
          fontSize="28"
          fontWeight="800"
          fontFamily="'Syne', 'Outfit', sans-serif"
          letterSpacing="10"
        >
          ACADEMY
        </text>

        {/* Ellipse Underline beneath */}
        <ellipse
          cx="250"
          cy="158"
          rx="175"
          ry="22"
          fill="none"
          stroke="url(#ellipseGrad)"
          strokeWidth="2.5"
          filter="url(#metallicSheen)"
        />

        {/* Subtle decorative cross-stars on orbit */}
        <g transform="translate(420, 68) scale(0.6)">
          <path d="M 0,-15 L 0,15 M -15,0 L 15,0" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
        </g>
        <g transform="translate(140, 110) scale(0.4)">
          <path d="M 0,-12 L 0,12 M -12,0 L 12,0" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export const LogoMark: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stars Academy Icon"
    >
      <defs>
        <linearGradient id="markChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#c4c4c8" />
          <stop offset="70%" stopColor="#8e8e93" />
          <stop offset="100%" stopColor="#00f0ff" />
        </linearGradient>
        <linearGradient id="markArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#71717a" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="90%" stopColor="#00f0ff" />
        </linearGradient>
      </defs>

      {/* Swooping Arc */}
      <path
        d="M 15 65 C 28 20, 72 18, 90 45"
        stroke="url(#markArcGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Stylized 'S' Star Core */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="url(#markChromeGrad)"
        fontSize="44"
        fontWeight="900"
        fontFamily="'Syne', 'Outfit', sans-serif"
      >
        S
      </text>

      {/* Ellipse underline */}
      <ellipse
        cx="50"
        cy="78"
        rx="36"
        ry="7"
        fill="none"
        stroke="url(#markChromeGrad)"
        strokeWidth="2.5"
      />

      {/* Sparkle cross */}
      <g transform="translate(84, 40) scale(0.5)">
        <path d="M 0,-10 L 0,10 M -10,0 L 10,0" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />
      </g>
    </svg>
  );
};
