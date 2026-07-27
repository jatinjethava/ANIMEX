"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { CHARACTERS } from "@/data/characters";

export default function QuotesSection() {
  const [index, setIndex] = useState(0);
  const current = CHARACTERS[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % CHARACTERS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Kanji Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] text-[28vw] font-serif font-black pointer-events-none select-none">
        {current.kanji}
      </div>

      <div className="relative z-10 glass-panel p-8 md:p-16 rounded-3xl space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest">
            <Quote size={18} />
            <span>LEGENDARY QUOTES</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full glass-card hover:bg-white/10 text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full glass-card hover:bg-white/10 text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-bebas text-3xl md:text-5xl text-white italic leading-snug">
              "{current.quote}"
            </h3>
            <p className="text-sm font-orbitron text-white/50 italic">
              "{current.japaneseQuote}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <img
                src={current.portrait}
                alt={current.name}
                className="w-14 h-14 rounded-2xl object-cover"
              />
              <div>
                <h4 className="font-bebas text-2xl text-white">{current.name}</h4>
                <p className="text-xs font-orbitron text-[#ff6b00]">{current.anime} • {current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
