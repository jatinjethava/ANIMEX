"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Kanji Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] text-[20vw] sm:text-[28vw] font-serif font-black pointer-events-none select-none z-0">
        {current.kanji}
      </div>

      <div className="relative z-10 glass-panel p-5 sm:p-8 md:p-16 rounded-3xl space-y-5 sm:space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest">
            <Quote size={18} />
            <span>LEGENDARY QUOTES</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-full glass-card hover:bg-white/10 text-white"
              aria-label="Previous Quote"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-full glass-card hover:bg-white/10 text-white"
              aria-label="Next Quote"
            >
              <ChevronRight size={18} />
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
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="font-bebas text-2xl sm:text-4xl md:text-5xl text-white italic leading-snug">
              "{current.quote}"
            </h3>
            <p className="text-xs sm:text-sm font-orbitron text-white/50 italic">
              "{current.japaneseQuote}"
            </p>

            <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
              <img
                src={current.portrait}
                alt={current.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover"
              />
              <div>
                <h4 className="font-bebas text-xl sm:text-2xl text-white">{current.name}</h4>
                <p className="text-[10px] sm:text-xs font-orbitron text-[#ff6b00]">{current.anime} • {current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
