"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Flame, Swords, Radio, Sparkles, Eye } from "lucide-react";
import { CHARACTERS, Character } from "@/data/characters";

interface FeaturedProps {
  onOpenCharacterModal: (character: Character) => void;
}

export default function FeaturedCharacter({ onOpenCharacterModal }: FeaturedProps) {
  const featured = CHARACTERS.find((c) => c.id === "satoru-gojo") || CHARACTERS[0];
  const [activeTab, setActiveTab] = useState<"technique" | "domain" | "stats">("domain");
  const [isDomainActive, setIsDomainActive] = useState(false);

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Kanji Watermark */}
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 text-white/[0.02] text-[30vw] font-serif font-black pointer-events-none select-none">
        無下限
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Interactive Visual Card */}
        <div className="lg:col-span-6 relative">
          <div
            className={`relative rounded-3xl overflow-hidden glass-card p-4 transition-all duration-700 ${
              isDomainActive ? "shadow-[0_0_80px_rgba(0,210,255,0.6)] border-[#00d2ff]" : ""
            }`}
          >
            <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
              <img
                src={featured.wallpaper}
                alt={featured.name}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isDomainActive ? "scale-110 filter brightness-125 saturate-150" : "scale-100"
                }`}
              />

              {/* Domain Overlay Visual Effect */}
              {isDomainActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#00d2ff]/40 via-purple-900/30 to-transparent backdrop-blur-[2px] animate-pulse" />
              )}

              {/* Character Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-xs font-orbitron tracking-widest text-[#00d2ff] uppercase">
                  {featured.japaneseName} • SPECIAL GRADE
                </span>
                <h3 className="font-bebas text-5xl text-white tracking-wider mt-1">
                  {featured.name}
                </h3>
                <p className="text-sm text-white/70 italic mt-2">
                  "{featured.quote}"
                </p>
              </div>

              {/* Domain Expansion Toggle Trigger */}
              <button
                onClick={() => setIsDomainActive(!isDomainActive)}
                className={`absolute top-6 right-6 px-4 py-2 rounded-xl text-xs font-orbitron font-bold tracking-widest transition-all ${
                  isDomainActive
                    ? "bg-[#00d2ff] text-black shadow-[0_0_25px_#00d2ff]"
                    : "glass-panel text-white hover:bg-white/20"
                }`}
              >
                {isDomainActive ? "DOMAIN ACTIVE: UNLIMITED VOID" : "ACTIVATE DOMAIN EXPANSION"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Deep-Dive Controls & Stats */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest">
              <Sparkles size={14} />
              <span>SPOTLIGHT ANALYSIS</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-tight">
              THE UNTOUCHABLE <span className="text-gradient-orange">HONORED ONE</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {featured.story}
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-3 p-1.5 rounded-2xl glass-panel w-fit">
            <button
              onClick={() => setActiveTab("domain")}
              className={`px-5 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all ${
                activeTab === "domain" ? "bg-[#ff6b00] text-black font-bold" : "text-white/70 hover:text-white"
              }`}
            >
              DOMAIN EXPANSION
            </button>
            <button
              onClick={() => setActiveTab("technique")}
              className={`px-5 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all ${
                activeTab === "technique" ? "bg-[#ff6b00] text-black font-bold" : "text-white/70 hover:text-white"
              }`}
            >
              ABILITIES
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`px-5 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all ${
                activeTab === "stats" ? "bg-[#ff6b00] text-black font-bold" : "text-white/70 hover:text-white"
              }`}
            >
              COMBAT STATS
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === "domain" && (
                <motion.div
                  key="domain"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-card p-6 rounded-3xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bebas text-2xl text-white tracking-wider">
                      {featured.abilities[0].name}
                    </h4>
                    <span className="text-xs font-orbitron text-[#00d2ff] border border-[#00d2ff]/30 px-3 py-1 rounded-full bg-[#00d2ff]/10">
                      {featured.abilities[0].kanji}
                    </span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {featured.abilities[0].description}
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-xs font-orbitron text-white/50">
                    <span>TYPE: DOMAIN EXPANSION</span>
                    <span>•</span>
                    <span>RANGE: INFINITE</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "technique" && (
                <motion.div
                  key="technique"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  {featured.abilities.slice(1).map((ab, idx) => (
                    <div key={idx} className="glass-card p-4 rounded-2xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bebas text-lg text-white">{ab.name}</span>
                        <span className="text-xs font-orbitron text-[#ff6b00]">{ab.kanji}</span>
                      </div>
                      <p className="text-xs text-white/60">{ab.description}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "stats" && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-card p-6 rounded-3xl space-y-4"
                >
                  {Object.entries(featured.stats).map(([statName, val]) => (
                    <div key={statName} className="space-y-1">
                      <div className="flex justify-between text-xs font-orbitron text-white/70 uppercase">
                        <span>{statName}</span>
                        <span className="text-[#ff6b00] font-bold">{val} / 100</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#ff6b00] to-[#4f46e5] rounded-full"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => onOpenCharacterModal(featured)}
            className="glass-button px-8 py-3.5 rounded-2xl font-orbitron text-sm tracking-wider flex items-center gap-3 w-full justify-center"
          >
            <Eye size={18} />
            VIEW FULL ARCHIVE LORE
          </button>
        </div>
      </div>
    </section>
  );
}
