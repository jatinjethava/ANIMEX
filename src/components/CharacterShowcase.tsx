"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CHARACTERS, Character } from "@/data/characters";
import CharacterCard from "./CharacterCard";

interface ShowcaseProps {
  onOpenModal: (character: Character) => void;
}

const CATEGORIES = [
  "ALL",
  "Jujutsu Kaisen",
  "Demon Slayer",
  "Attack on Titan",
  "Bleach",
  "One Piece",
];

export default function CharacterShowcase({ onOpenModal }: ShowcaseProps) {
  const [selectedCat, setSelectedCat] = useState("ALL");

  const filtered =
    selectedCat === "ALL"
      ? CHARACTERS
      : CHARACTERS.filter((c) => c.category === selectedCat);

  return (
    <section id="characters" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest mb-2">
            <Sparkles size={14} />
            <span>ARCHIVE CATALOG</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-tight">
            POPULAR <span className="text-gradient-orange">LEGENDS</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron tracking-wider whitespace-nowrap transition-all ${
                selectedCat === cat
                  ? "bg-[#ff6b00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                  : "glass-panel text-white/70 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filtered.map((character) => (
            <motion.div
              key={character.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <CharacterCard character={character} onOpenModal={onOpenModal} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
