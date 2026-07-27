"use client";

import { Send, ArrowUp, Share2, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-white/10">
        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#4f46e5] p-[1px]">
              <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center font-bebas text-xl text-white">
                A
              </div>
            </div>
            <span className="font-bebas text-2xl sm:text-3xl tracking-widest text-white">
              ANIMEX <span className="text-[#ff6b00]">.</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
            An Awwwards-inspired luxury anime character showcase. Built with Next.js, WebGL Three.js, GSAP, and Tailwind CSS. Celebrating legendary anime icons.
          </p>

          {/* Newsletter Input */}
          <div className="flex items-center gap-2 glass-panel p-1.5 rounded-2xl max-w-md w-full">
            <input
              type="email"
              placeholder="Subscribe to Legend Archives..."
              className="bg-transparent border-none outline-none text-xs text-white px-3 sm:px-4 w-full placeholder:text-white/40 font-orbitron"
            />
            <button
              className="p-3 bg-[#ff6b00] text-black rounded-xl hover:bg-[#ff6b00]/80 transition-colors shrink-0"
              aria-label="Subscribe"
            >
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h4 className="font-orbitron text-xs text-[#ff6b00] tracking-widest mb-3 sm:mb-4">EXPLORE</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Home Hero</a></li>
              <li><a href="#characters" className="hover:text-white transition-colors">All Characters</a></li>
              <li><a href="#power-ranking" className="hover:text-white transition-colors">Power Rankings</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Evolution Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-xs text-[#ff6b00] tracking-widest mb-3 sm:mb-4">FRANCHISES</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/70">
              <li><a href="#characters" className="hover:text-white transition-colors">Jujutsu Kaisen</a></li>
              <li><a href="#characters" className="hover:text-white transition-colors">Demon Slayer</a></li>
              <li><a href="#characters" className="hover:text-white transition-colors">Attack on Titan</a></li>
              <li><a href="#characters" className="hover:text-white transition-colors">Bleach & One Piece</a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-orbitron text-xs text-[#ff6b00] tracking-widest mb-3 sm:mb-4">SOCIALS</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-xl glass-card text-white/70 hover:text-[#ff6b00] hover:border-[#ff6b00]/40 transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-xl glass-card text-white/70 hover:text-[#ff6b00] hover:border-[#ff6b00]/40 transition-all">
                <Share2 size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-xl glass-card text-white/70 hover:text-[#ff6b00] hover:border-[#ff6b00]/40 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Scroll Top */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-orbitron text-white/40 text-center sm:text-left">
        <p>© 2026 ANIMEX PORTFOLIO. INSPIRED BY AWWWARDS & APPLE.</p>
        
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white/70 hover:text-[#ff6b00] transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
