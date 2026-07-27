"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Play, Sparkles, ChevronDown, Flame, Zap } from "lucide-react";
import { CHARACTERS, Character } from "@/data/characters";

const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
  ssr: false,
});

interface HeroProps {
  onOpenCharacterModal: (character: Character) => void;
}

export default function Hero({ onOpenCharacterModal }: HeroProps) {
  const featuredList = CHARACTERS.filter((c) => c.featured);
  const [selectedChar, setSelectedChar] = useState<Character>(featuredList[0]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-12 select-none"
    >
      {/* Interactive 3D WebGL Background Canvas */}
      <Scene3D
        imageSrc={selectedChar.image}
        primaryColor={selectedChar.primaryColor}
        secondaryColor={selectedChar.secondaryColor}
      />

      {/* Massive Background Kanji Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] text-[18vw] sm:text-[22vw] lg:text-[25vw] font-serif font-black pointer-events-none select-none z-0">
        {selectedChar.kanji}
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Character Meta & Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 text-left">
          {/* Anime Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 w-fit"
          >
            <Sparkles size={14} className="text-[#ff6b00]" />
            <span className="text-[10px] sm:text-xs font-orbitron tracking-widest text-white/90">
              FEATURED LEGEND — {selectedChar.anime.toUpperCase()}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] tracking-tight text-white uppercase drop-shadow-2xl">
              {selectedChar.name.split(" ")[0]}
              <br />
              <span className="text-gradient-orange">
                {selectedChar.name.split(" ")[1] || selectedChar.japaneseName}
              </span>
            </h1>
            <p className="font-orbitron text-xs sm:text-sm md:text-base text-white/60 tracking-widest pt-2">
              {selectedChar.japaneseName} • {selectedChar.role}
            </p>
          </motion.div>

          {/* Quote Block */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-sm sm:text-base md:text-lg italic font-light max-w-xl border-l-2 border-[#ff6b00] pl-4 py-1"
          >
            "{selectedChar.quote}"
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 sm:gap-6 pt-2 flex-wrap"
          >
            <div className="flex items-center gap-2 glass-panel px-3.5 py-2 rounded-xl">
              <Flame size={16} className="text-[#ff6b00]" />
              <span className="text-[10px] sm:text-xs font-orbitron text-white/60">POWER LEVEL</span>
              <span className="text-sm sm:text-base font-bebas text-white">{selectedChar.powerLevel}/100</span>
            </div>
            <div className="flex items-center gap-2 glass-panel px-3.5 py-2 rounded-xl">
              <Zap size={16} className="text-[#4f46e5]" />
              <span className="text-[10px] sm:text-xs font-orbitron text-white/60">TIER</span>
              <span className="text-sm sm:text-base font-bebas text-[#ff6b00]">{selectedChar.tier}</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4"
          >
            <button
              onClick={() => onOpenCharacterModal(selectedChar)}
              className="glass-button w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl font-orbitron font-semibold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-3 shadow-lg"
            >
              <Play size={18} className="fill-current" />
              EXPLORE CHARACTER LORE
            </button>
            <a
              href="#characters"
              className="glass-panel w-full sm:w-auto px-6 py-3.5 rounded-2xl font-orbitron text-xs sm:text-sm tracking-wider text-center text-white/80 hover:text-white hover:border-white/30 transition-all"
            >
              VIEW ALL LEGENDS
            </a>
          </motion.div>
        </div>

        {/* Right Column: Featured Character Selector Box */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
          <div className="glass-panel p-4 sm:p-6 rounded-3xl w-full max-w-md space-y-3 sm:space-y-4">
            <h3 className="text-[10px] sm:text-xs font-orbitron text-white/50 tracking-widest uppercase border-b border-white/10 pb-2.5">
              SELECT FEATURED LEGEND
            </h3>

            {/* Horizontal Scroll on Mobile, Vertical Stack on Desktop */}
            <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
              {featuredList.map((char) => (
                <div
                  key={char.id}
                  onClick={() => setSelectedChar(char)}
                  className={`p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all flex items-center gap-3 sm:gap-4 shrink-0 min-w-[220px] lg:min-w-0 lg:w-full ${
                    selectedChar.id === char.id
                      ? "bg-gradient-to-r from-[#ff6b00]/30 to-[#4f46e5]/30 border border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                      : "glass-card hover:bg-white/10"
                  }`}
                >
                  <img
                    src={char.portrait}
                    alt={char.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bebas text-base sm:text-lg text-white tracking-wider truncate">
                      {char.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-white/50 truncate">{char.anime}</p>
                  </div>
                  <span className="text-xs font-orbitron text-[#ff6b00] font-bold">
                    {char.powerLevel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/40 animate-bounce pointer-events-none">
        <span className="text-[9px] sm:text-[10px] font-orbitron tracking-widest uppercase">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
