"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { CHARACTERS, Character } from "@/data/characters";

interface RankingProps {
  onOpenModal: (character: Character) => void;
}

export default function PowerRanking({ onOpenModal }: RankingProps) {
  const sorted = [...CHARACTERS].sort((a, b) => b.powerLevel - a.powerLevel);

  return (
    <section id="power-ranking" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest mb-2">
            <Trophy size={14} />
            <span>GLOBAL LEADERBOARD</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            POWER <span className="text-gradient-orange">RANKINGS</span>
          </h2>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {sorted.map((char, index) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => onOpenModal(char)}
            className="glass-card p-3.5 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 cursor-pointer hover:border-[#ff6b00]/60 transition-all group"
          >
            <div className="flex items-center gap-3 sm:gap-6">
              <span className={`font-bebas text-2xl sm:text-4xl w-7 sm:w-10 text-center ${
                index === 0 ? "text-[#ffd166]" : index === 1 ? "text-slate-300" : index === 2 ? "text-amber-600" : "text-white/40"
              }`}>
                #{index + 1}
              </span>
              <img
                src={char.portrait}
                alt={char.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-bebas text-xl sm:text-2xl text-white group-hover:text-[#ff6b00] transition-colors truncate">
                  {char.name}
                </h4>
                <p className="text-[10px] sm:text-xs font-orbitron text-white/50 truncate">
                  {char.anime} • {char.japaneseName}
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 space-y-1 sm:space-y-1.5">
              <div className="flex justify-between text-[10px] sm:text-xs font-orbitron text-white/60">
                <span>COMBAT POWER</span>
                <span className="text-[#ff6b00] font-bold">{char.powerLevel} / 100</span>
              </div>
              <div className="w-full h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#ff6b00] to-[#4f46e5] rounded-full"
                  style={{ width: `${char.powerLevel}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-[10px] sm:text-xs font-orbitron px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 font-bold">
                {char.tier} TIER
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
