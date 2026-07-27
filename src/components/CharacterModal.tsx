"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Swords, UserCheck, Image as ImageIcon, Volume2, Sparkles } from "lucide-react";
import { Character } from "@/data/characters";

interface ModalProps {
  character: Character | null;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "abilities" | "relationships" | "gallery">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!character) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl overflow-y-auto flex items-center justify-center p-4 md:p-8"
      >
        {/* Main Modal Glass Panel */}
        <motion.div
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl glass-panel rounded-3xl overflow-hidden shadow-2xl my-auto border border-white/10"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-orbitron px-3 py-1 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 font-bold">
                {character.tier} TIER
              </span>
              <span className="text-xs font-orbitron text-white/50">
                {character.anime}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl glass-card text-white/70 hover:text-white transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Artwork Showcase */}
            <div className="lg:col-span-5 relative h-80 lg:h-auto min-h-[400px]">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-orbitron text-[#ff6b00] tracking-widest uppercase">
                  {character.japaneseName}
                </span>
                <h3 className="font-bebas text-4xl text-white tracking-wider">
                  {character.name}
                </h3>
              </div>
            </div>

            {/* Right Column: Tabbed Content */}
            <div className="lg:col-span-7 p-6 md:p-8 space-y-6 flex flex-col justify-between">
              {/* Tab Navigation */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all whitespace-nowrap ${activeTab === "overview"
                      ? "bg-[#ff6b00] text-black font-bold"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  OVERVIEW
                </button>
                <button
                  onClick={() => setActiveTab("abilities")}
                  className={`px-4 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all whitespace-nowrap ${activeTab === "abilities"
                      ? "bg-[#ff6b00] text-black font-bold"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  TECHNIQUES ({character.abilities.length})
                </button>
                <button
                  onClick={() => setActiveTab("relationships")}
                  className={`px-4 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all whitespace-nowrap ${activeTab === "relationships"
                      ? "bg-[#ff6b00] text-black font-bold"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  RELATIONSHIPS
                </button>
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`px-4 py-2 rounded-xl text-xs font-orbitron tracking-wider transition-all whitespace-nowrap ${activeTab === "gallery"
                      ? "bg-[#ff6b00] text-black font-bold"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  GALLERY
                </button>
              </div>

              {/* Tab Bodies */}
              <div className="min-h-[280px]">
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <p className="text-sm text-white/80 leading-relaxed">
                      {character.story}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="glass-card p-3.5 rounded-2xl">
                        <span className="text-[10px] font-orbitron text-white/50">WEAPON</span>
                        <p className="text-xs font-bold text-white mt-1">{character.weapon}</p>
                      </div>
                      <div className="glass-card p-3.5 rounded-2xl">
                        <span className="text-[10px] font-orbitron text-white/50">VOICE ACTOR</span>
                        <p className="text-xs font-bold text-[#ff6b00] mt-1">{character.voiceActor} ({character.japaneseVoiceActor})</p>
                      </div>
                      <div className="glass-card p-3.5 rounded-2xl">
                        <span className="text-[10px] font-orbitron text-white/50">AFFILIATION</span>
                        <p className="text-xs font-bold text-white mt-1">{character.affiliation}</p>
                      </div>
                      <div className="glass-card p-3.5 rounded-2xl">
                        <span className="text-[10px] font-orbitron text-white/50">HEIGHT & AGE</span>
                        <p className="text-xs font-bold text-white mt-1">{character.height} • {character.age} yrs</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "abilities" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {character.abilities.map((ab, idx) => (
                      <div key={idx} className="glass-card p-4 rounded-2xl border-l-2 border-[#ff6b00]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bebas text-xl text-white">{ab.name}</span>
                          <span className="text-xs font-orbitron text-[#ff6b00]">{ab.kanji}</span>
                        </div>
                        <p className="text-xs text-white/70">{ab.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "relationships" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {character.relationships.map((rel, idx) => (
                      <div key={idx} className="glass-card p-3.5 rounded-2xl flex items-center gap-4">
                        <img src={rel.avatar} alt={rel.name} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <h5 className="font-bebas text-lg text-white">{rel.name}</h5>
                          <p className="text-xs text-[#ff6b00]">{rel.relation}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "gallery" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {character.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Gallery ${idx}`}
                        className="w-full h-32 rounded-2xl object-cover glass-card"
                      />
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Quote Footer Bar */}
              <div className="p-4 rounded-2xl glass-card flex items-center justify-between">
                <p className="text-xs text-white/80 italic pr-4">"{character.quote}"</p>
                <button className="p-2 rounded-xl bg-[#ff6b00] text-black font-bold text-xs flex items-center gap-1 shrink-0">
                  <Volume2 size={14} /> AUDIO
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
