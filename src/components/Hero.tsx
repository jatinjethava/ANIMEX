"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Play, Sparkles, ChevronDown, Flame, Shield, Zap } from "lucide-react";
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 select-none"
    >

      <Scene3D
        imageSrc={selectedChar.image}
        primaryColor={selectedChar.primaryColor}
        secondaryColor={selectedChar.secondaryColor}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] text-[25vw] font-serif font-black pointer-events-none select-none">
        {selectedChar.kanji}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 w-fit"
          >
            <Sparkles size={14} className="text-[#ff6b00]" />
            <span className="text-xs font-orbitron tracking-widest text-white/90">
              FEATURED LEGEND — {selectedChar.anime.toUpperCase()}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="font-bebas text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight text-white uppercase drop-shadow-2xl">
              {selectedChar.name.split(" ")[0]}
              <br />
              <span className="text-gradient-orange">
                {selectedChar.name.split(" ")[1] || selectedChar.japaneseName}
              </span>
            </h1>
            <p className="font-orbitron text-sm md:text-base text-white/60 tracking-widest pt-2">
              {selectedChar.japaneseName} • {selectedChar.role}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-base md:text-lg italic font-light max-w-xl border-l-2 border-[#ff6b00] pl-4 py-1"
          >
            "{selectedChar.quote}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 pt-2"
          >
            <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-xl">
              <Flame size={16} className="text-[#ff6b00]" />
              <span className="text-xs font-orbitron text-white/60">POWER LEVEL</span>
              <span className="text-base font-bebas text-white">{selectedChar.powerLevel}/100</span>
            </div>
            <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-xl">
              <Zap size={16} className="text-[#4f46e5]" />
              <span className="text-xs font-orbitron text-white/60">TIER</span>
              <span className="text-base font-bebas text-[#ff6b00]">{selectedChar.tier}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => onOpenCharacterModal(selectedChar)}
              className="glass-button px-8 py-3.5 rounded-2xl font-orbitron font-semibold text-sm tracking-wider flex items-center gap-3 shadow-lg"
            >
              <Play size={18} className="fill-current" />
              EXPLORE CHARACTER LORE
            </button>
            <a
              href="#characters"
              className="glass-panel px-6 py-3.5 rounded-2xl font-orbitron text-sm tracking-wider text-white/80 hover:text-white hover:border-white/30 transition-all"
            >
              VIEW ALL LEGENDS
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-end justify-center">
          <div className="glass-panel p-6 rounded-3xl w-full max-w-sm space-y-4">
            <h3 className="text-xs font-orbitron text-white/50 tracking-widest uppercase border-b border-white/10 pb-3">
              SELECT FEATURED LEGEND
            </h3>

            <div className="space-y-3">
              {featuredList.map((char) => (
                <div
                  key={char.id}
                  onClick={() => setSelectedChar(char)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all flex items-center gap-4 ${selectedChar.id === char.id
                    ? "bg-gradient-to-r from-[#ff6b00]/30 to-[#4f46e5]/30 border border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                    : "glass-card hover:bg-white/10"
                    }`}
                >
                  <img
                    src={char.portrait}
                    alt={char.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bebas text-lg text-white tracking-wider">
                      {char.name}
                    </h4>
                    <p className="text-xs text-white/50">{char.anime}</p>
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-[10px] font-orbitron tracking-widest uppercase">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
