"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center select-none"
        >

          <div className="absolute text-white/[0.03] text-[18vw] font-serif font-black pointer-events-none">
            伝説の誕生
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-bebas text-6xl md:text-7xl tracking-widest text-white flex items-center gap-3"
            >
              ANIMEX <span className="text-[#ff6b00]">.</span>
            </motion.div>

            <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff6b00] to-[#4f46e5]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-4 text-sm font-orbitron tracking-widest text-white/60">
              <span>LOADING PORTFOLIO</span>
              <span className="text-[#ff6b00] font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
