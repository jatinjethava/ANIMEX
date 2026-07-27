"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { CHARACTERS } from "@/data/characters";

export default function CharacterTimeline() {
  const charactersWithTimeline = CHARACTERS.filter((c) => c.timelineArcs && c.timelineArcs.length > 0);
  const [selectedChar, setSelectedChar] = useState(charactersWithTimeline[0]);

  return (
    <section id="timeline" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest mb-2">
            <Clock size={14} />
            <span>CHARACTER EVOLUTION</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            STORY <span className="text-gradient-orange">TIMELINE</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full no-scrollbar">
          {charactersWithTimeline.map((char) => (
            <button
              key={char.id}
              onClick={() => setSelectedChar(char)}
              className={`px-3.5 py-2 rounded-xl text-[10px] sm:text-xs font-orbitron tracking-wider transition-all whitespace-nowrap ${
                selectedChar.id === char.id
                  ? "bg-[#ff6b00] text-black font-bold"
                  : "glass-panel text-white/70 hover:text-white"
              }`}
            >
              {char.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative">
        {selectedChar.timelineArcs.map((arc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl space-y-3 sm:space-y-4 relative border-t-2 border-[#ff6b00]"
          >
            <span className="text-[10px] sm:text-xs font-orbitron text-[#ff6b00] font-bold">
              {arc.year} • {arc.arc}
            </span>
            <h4 className="font-bebas text-xl sm:text-2xl text-white tracking-wider">
              {arc.title}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {arc.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
