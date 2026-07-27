"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Flame, ArrowUpRight, Zap } from "lucide-react";
import { Character } from "@/data/characters";

interface CardProps {
  character: Character;
  onOpenModal: (character: Character) => void;
}

export default function CharacterCard({ character, onOpenModal }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(character)}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 select-none h-[420px] flex flex-col justify-between p-6"
    >
      {/* Background Image with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src={character.portrait}
          alt={character.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      {/* Kanji Watermark */}
      <div className="absolute top-4 right-4 z-10 text-white/10 text-6xl font-serif font-black pointer-events-none group-hover:text-white/20 transition-colors">
        {character.kanji}
      </div>

      {/* Top Meta Badges */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-orbitron px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#ff6b00] border border-[#ff6b00]/30">
          {character.tier} TIER
        </span>

        <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#ff6b00] group-hover:text-black transition-all">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Bottom Character Info */}
      <div className="relative z-10 space-y-3 pt-12">
        <div>
          <span className="text-xs font-orbitron text-white/60 tracking-widest uppercase">
            {character.anime}
          </span>
          <h3 className="font-bebas text-3xl text-white tracking-wider group-hover:text-[#ff6b00] transition-colors">
            {character.name}
          </h3>
          <p className="text-xs text-white/70 line-clamp-1 italic">
            "{character.quote}"
          </p>
        </div>

        {/* Power Level Gauge */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame size={14} className="text-[#ff6b00]" />
            <span className="text-xs font-orbitron text-white/60">POWER</span>
          </div>
          <span className="text-sm font-bebas text-[#ff6b00] font-bold">
            {character.powerLevel} / 100
          </span>
        </div>
      </div>
    </motion.div>
  );
}
