import React, { useState } from "react";
import { SHOWCASE_VIDEOS, ACADEMY_CONFIG } from "../data/academyData";
import { ShowcaseVideo } from "../types";
import { Film, Play, Sparkles, Eye, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface StudentShowcaseSectionProps {
  onPlayVideo: (video: ShowcaseVideo) => void;
}

export const StudentShowcaseSection: React.FC<StudentShowcaseSectionProps> = ({ onPlayVideo }) => {
  const [isPlayingFeatured, setIsPlayingFeatured] = useState<boolean>(false);
  const featuredVideo = SHOWCASE_VIDEOS[0];
  const gridVideos = SHOWCASE_VIDEOS.slice(1);

  return (
    <section id="showcase" className="py-24 sm:py-32 bg-[#0c0c0f] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>STUDENT SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
            WORK PRODUCED BY OUR STUDENTS & MENTORS
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
            Real commercial campaigns, music videos, and viral social edits graded, cut, and composited by Stars Academy creators.
          </p>
        </div>

        {/* PROMINENT FEATURED REEL EMBED: https://youtu.be/8n2O1hPe7aQ */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-2xl mb-16 group">
          <div className="relative w-full aspect-video bg-black">
            {isPlayingFeatured ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${ACADEMY_CONFIG.featuredYoutubeVideoId}?autoplay=1&rel=0`}
                title="Stars Academy Official Master Showcase Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div
                onClick={() => setIsPlayingFeatured(true)}
                className="relative w-full h-full cursor-pointer overflow-hidden"
              >
                {/* Background video poster */}
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />

                {/* Custom Metallic Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/80 backdrop-blur-md border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:bg-cyan-400 group-hover:text-black transition-colors"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                  </motion.div>
                  <span className="mt-4 text-xs sm:text-sm font-black font-display uppercase tracking-widest text-zinc-200 group-hover:text-cyan-300 transition-colors">
                    Click to Play Featured Reel (2025)
                  </span>
                </div>

                {/* Info Bar at Bottom of Poster */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>OFFICIAL SHOWCASE REEL</span>
                    </div>
                    <h3 className="text-xl sm:text-3xl font-black font-display text-white">
                      {featuredVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                      {featuredVideo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-300 flex-shrink-0">
                    <span className="px-3 py-1.5 rounded-lg bg-black/70 border border-zinc-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> {featuredVideo.duration}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-black/70 border border-zinc-700 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" /> {featuredVideo.views}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Student Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridVideos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -6 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all flex flex-col justify-between"
              onClick={() => onPlayVideo(video)}
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                    {video.category}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-zinc-300">
                    {video.duration}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1">
                    {video.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mb-3">
                    By <span className="text-zinc-200 font-semibold">{video.creator}</span> ({video.role})
                  </p>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 group-hover:text-cyan-400">
                <span className="font-mono text-[11px]">{video.views} Views</span>
                <div className="flex items-center gap-1 font-bold">
                  <span>Watch Cut</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
