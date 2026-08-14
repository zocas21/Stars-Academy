import React, { useState } from "react";
import { SOFTWARE_TOOLS } from "../data/academyData";
import { motion } from "motion/react";
import { Sparkles, Command, CheckCircle2 } from "lucide-react";

export const FloatingToolsBar: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string>("stars-core");

  const activeTool = SOFTWARE_TOOLS.find((t) => t.id === activeToolId) || SOFTWARE_TOOLS[2];

  return (
    <section className="py-16 bg-[#0a0a0a] border-b border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>INDUSTRY ARSENAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
            MASTER THE TOOLS OF HOLLYWOOD & VIRAL CREATORS
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mt-2">
            Click any software below to inspect the curriculum capabilities and keyboard shortcuts taught at Stars Academy.
          </p>
        </div>

        {/* Software Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-6">
          {SOFTWARE_TOOLS.map((tool, index) => {
            const isCenter = tool.id === "stars-core";
            const isActive = tool.id === activeToolId;

            return (
              <motion.button
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                whileHover={{ y: -6, scale: 1.05 }}
                animate={
                  isCenter
                    ? { y: [0, -6, 0] }
                    : { y: [0, index % 2 === 0 ? -3 : 3, 0] }
                }
                transition={{
                  repeat: Infinity,
                  duration: isCenter ? 3.5 : 4 + index * 0.5,
                  ease: "easeInOut",
                }}
                id={`software-tool-btn-${tool.id}`}
                className={`relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                  isCenter
                    ? "w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-b from-cyan-950/80 to-zinc-950 border-2 border-cyan-400 shadow-xl shadow-cyan-500/20"
                    : isActive
                    ? "w-20 h-20 sm:w-24 sm:h-24 bg-zinc-800/90 border-2 border-zinc-300 shadow-lg shadow-white/10"
                    : "w-20 h-20 sm:w-24 sm:h-24 bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/70"
                }`}
              >
                {/* Tool Icon Abbreviation or Graphic */}
                {tool.id === "premiere" && (
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#9999FF]">Pr</span>
                )}
                {tool.id === "after-effects" && (
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#D291FF]">Ae</span>
                )}
                {tool.id === "stars-core" && (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black font-display text-cyan-400 tracking-tighter">★</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">STARS</span>
                  </div>
                )}
                {tool.id === "davinci" && (
                  <div className="flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-black font-display text-[#FF8080]">Dv</span>
                  </div>
                )}
                {tool.id === "capcut" && (
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#38BDF8]">Cc</span>
                )}

                <span className="text-[11px] font-bold text-zinc-300 mt-1 sm:mt-1.5 whitespace-nowrap">
                  {tool.name}
                </span>

                {isActive && (
                  <div className="absolute -bottom-2 w-3 h-1.5 bg-cyan-400 rounded-full" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Tool Details Box */}
        <motion.div
          key={activeTool.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800"
                  style={{ color: activeTool.accentHex }}
                >
                  {activeTool.category}
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Command className="w-3 h-3" /> Shortcut focus: <span className="text-zinc-200">{activeTool.shortcut}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                {activeTool.name} Mastery at Stars Academy
              </h3>
              <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                {activeTool.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 min-w-[200px] border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                Core Competencies:
              </span>
              <div className="space-y-1.5">
                {activeTool.keySkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
