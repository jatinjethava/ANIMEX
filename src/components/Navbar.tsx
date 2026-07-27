"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Volume2, VolumeX, Menu, X, Sparkles } from "lucide-react";
import { CHARACTERS } from "@/data/characters";

interface NavbarProps {
  onSelectCharacter?: (id: string) => void;
}

export default function Navbar({ onSelectCharacter }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCharacters = CHARACTERS.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.anime.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-4 ${isScrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#4f46e5] p-[1px] shadow-[0_0_20px_rgba(255,107,0,0.4)]">
              <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center font-bebas text-xl text-white group-hover:bg-gradient-to-br group-hover:from-[#ff6b00] group-hover:to-[#4f46e5] transition-all">
                A
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-widest text-white group-hover:text-[#ff6b00] transition-colors">
                ANIMEX
              </span>
              <span className="text-[9px] font-orbitron tracking-widest text-white/50 -mt-1">
                アニメ・ポルトフォリオ
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 glass-panel px-8 py-2.5 rounded-full">
            <a href="#hero" className="text-sm font-medium text-white/80 hover:text-[#ff6b00] transition-colors">
              Home
            </a>
            <a href="#characters" className="text-sm font-medium text-white/80 hover:text-[#ff6b00] transition-colors">
              Characters
            </a>
            <a href="#power-ranking" className="text-sm font-medium text-white/80 hover:text-[#ff6b00] transition-colors">
              Power Ranking
            </a>
            <a href="#timeline" className="text-sm font-medium text-white/80 hover:text-[#ff6b00] transition-colors">
              Timeline
            </a>
            <a href="#collections" className="text-sm font-medium text-white/80 hover:text-[#ff6b00] transition-colors">
              Collections
            </a>
            <a href="#gallery" className="text-sm font-medium text-white/80 hover:text-[#ff6b00] transition-colors">
              Gallery
            </a>
          </nav>

          <div className="flex items-center gap-4">

            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl glass-card hover:border-[#ff6b00] text-white/80 hover:text-white transition-all"
              aria-label="Search Characters"
            >
              <Search size={18} />
            </button>

            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-2.5 rounded-xl glass-card transition-all ${isPlayingAudio ? "border-[#ff6b00] text-[#ff6b00] shadow-[0_0_15px_rgba(255,107,0,0.3)]" : "text-white/80"
                }`}
              aria-label="Audio Ambience"
            >
              {isPlayingAudio ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl glass-card text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl flex items-start justify-center pt-24 px-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl glass-panel p-6 rounded-3xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3 w-full">
                  <Search size={20} className="text-[#ff6b00]" />
                  <input
                    type="text"
                    placeholder="Search character, anime, or power..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-white text-lg w-full placeholder:text-white/40"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-white/60 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-4 max-h-96 overflow-y-auto space-y-2 pr-2">
                {filteredCharacters.map((char) => (
                  <div
                    key={char.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      if (onSelectCharacter) onSelectCharacter(char.id);
                    }}
                    className="p-3 rounded-2xl glass-card hover:bg-white/10 flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={char.portrait}
                        alt={char.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h4 className="font-bebas text-lg tracking-wider text-white group-hover:text-[#ff6b00] transition-colors">
                          {char.name}
                        </h4>
                        <p className="text-xs text-white/50">{char.anime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-orbitron px-2.5 py-1 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30">
                        {char.tier} Tier
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-50 bg-[#050505] p-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="font-bebas text-2xl text-white">ANIMEX</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/80"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-center my-auto">
              <a
                href="#hero"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bebas text-3xl text-white hover:text-[#ff6b00]"
              >
                Home
              </a>
              <a
                href="#characters"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bebas text-3xl text-white hover:text-[#ff6b00]"
              >
                Characters
              </a>
              <a
                href="#power-ranking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bebas text-3xl text-white hover:text-[#ff6b00]"
              >
                Power Ranking
              </a>
              <a
                href="#timeline"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bebas text-3xl text-white hover:text-[#ff6b00]"
              >
                Timeline
              </a>
              <a
                href="#collections"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bebas text-3xl text-white hover:text-[#ff6b00]"
              >
                Collections
              </a>
              <a
                href="#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bebas text-3xl text-white hover:text-[#ff6b00]"
              >
                Gallery
              </a>
            </nav>

            <div className="text-center text-xs text-white/40 font-orbitron">
              ANIMEX ARCHIVE © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
