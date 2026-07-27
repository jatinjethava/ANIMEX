"use client";

import { useRef, useState, type MouseEvent } from "react";
import { Star, Play } from "lucide-react";

interface AnimeCardProps {
  title: string;
  rating: number;
  episodes: number;
  genre: string;
  imageIndex: number;
  delay?: number;
}

// Using gradient overlays as visual cards since image generation is unavailable
const cardGradients = [
  "linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #5b21b6 100%)",
  "linear-gradient(135deg, #0c0a1a 0%, #1e1b4b 40%, #3730a3 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #4c1d95 40%, #7c3aed 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0ea5e9 100%)",
  "linear-gradient(135deg, #1a0a1a 0%, #831843 40%, #ec4899 100%)",
  "linear-gradient(135deg, #0a1a1a 0%, #134e4a 40%, #14b8a6 100%)",
  "linear-gradient(135deg, #1a1a0a 0%, #854d0e 40%, #f59e0b 100%)",
  "linear-gradient(135deg, #1a0f0a 0%, #9a3412 40%, #f97316 100%)",
];

const kanji = ["剣", "龍", "風", "魂", "光", "影", "炎", "月"];

export default function AnimeCard({
  title,
  rating,
  episodes,
  genre,
  imageIndex,
  delay = 0,
}: AnimeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  const gradient = cardGradients[imageIndex % cardGradients.length];
  const symbol = kanji[imageIndex % kanji.length];

  return (
    <div
      ref={cardRef}
      className="anime-card group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="anime-card-inner gradient-border rounded-2xl overflow-hidden w-[260px] sm:w-[280px]"
        style={{
          transform: transform || "perspective(1000px) rotateX(0) rotateY(0)",
          transition: transform ? "none" : "transform 0.6s ease",
        }}
      >
        {/* Image Area */}
        <div className="relative h-[360px] overflow-hidden">
          <div
            className="anime-card-image absolute inset-0 transition-transform duration-700 flex items-center justify-center"
            style={{ background: gradient }}
          >
            {/* Large kanji character as visual element */}
            <span
              className="text-[120px] font-bold opacity-20 select-none"
              style={{
                textShadow: "0 0 40px rgba(255,255,255,0.3)",
              }}
            >
              {symbol}
            </span>
          </div>

          {/* Hover play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Play size={24} className="fill-white text-white ml-1" />
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            {rating.toFixed(1)}
          </div>

          {/* Genre tag */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-purple-600/60 backdrop-blur-sm text-xs font-medium">
            {genre}
          </div>
        </div>

        {/* Info overlay */}
        <div className="p-4 bg-gray-900/80 backdrop-blur-sm">
          <h3 className="font-semibold text-sm mb-1 truncate">{title}</h3>
          <p className="text-xs text-gray-400">{episodes} Episodes</p>
        </div>
      </div>
    </div>
  );
}
