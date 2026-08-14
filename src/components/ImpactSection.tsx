import React, { useState, useEffect, useRef } from "react";
import { STATS } from "../data/academyData";
import { TrendingUp, Globe2, Award, Eye } from "lucide-react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-black tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const ImpactSection: React.FC = () => {
  const icons = [Award, TrendingUp, Globe2, Eye];

  return (
    <section id="impact" className="py-24 sm:py-32 bg-[#0c0c0f] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>GLOBAL FOOTPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            OUR IMPACT IN NUMBERS
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Measuring the real-world results and careers launched across the globe.
          </p>
        </div>

        {/* 4 Big Animated Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-2xl group text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-chrome mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
