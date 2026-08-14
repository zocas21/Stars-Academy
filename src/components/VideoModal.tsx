import React from "react";
import { ShowcaseVideo } from "../types";
import { X, Play, Clock, Eye, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VideoModalProps {
  video: ShowcaseVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-zinc-950 border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-bold uppercase tracking-wider">
                {video.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-display line-clamp-1">
                {video.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Box */}
          <div className="relative aspect-video w-full bg-black">
            {video.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-8">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 filter blur-sm"
                />
                <div className="relative z-10 space-y-4 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center mx-auto shadow-2xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    {video.title}
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Created by {video.creator} ({video.role}) using Stars Academy project assets.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Info */}
          <div className="p-6 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {video.description}
              </p>
              <span className="text-xs text-cyan-400 font-mono mt-1 block">
                Editor: {video.creator} • {video.role}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 flex-shrink-0">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" /> {video.duration}
              </span>
              {video.views && (
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-emerald-400" /> {video.views} Views
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
