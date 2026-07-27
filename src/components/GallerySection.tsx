"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Maximize2, X } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, title: "Unlimited Void Domain", anime: "Jujutsu Kaisen", url: "https://i.pinimg.com/control1/1200x/5b/1c/47/5b1c4728e120ac1ab1d37086361f5841.jpg" },
  { id: 2, title: "Hinokami Kagura Dance", anime: "Demon Slayer", url: "https://i.pinimg.com/736x/90/8c/af/908caff8e1978e34c8b4e84b8f4446da.jpg" },
  { id: 3, title: "Ackerman Blade Blitz", anime: "Attack on Titan", url: "https://i.pinimg.com/control1/1200x/59/e4/86/59e4868bb6bf33f43ce8518004ec2e38.jpg" },
  { id: 4, title: "The Rumbling Titans", anime: "Attack on Titan", url: "https://i.pinimg.com/1200x/74/9d/34/749d34b37b3ac372f9fa906358b4542c.jpg" },
  { id: 5, title: "Flame Hashira Rengoku", anime: "Demon Slayer", url: "https://i.pinimg.com/736x/6a/50/6d/6a506d03b9716cfbe9f5ddc40e182e13.jpg" },
  { id: 6, title: "Bankai Tensa Zangetsu", anime: "Bleach", url: "https://i.pinimg.com/1200x/99/3c/91/993c91aaf2200d3065a9282246317661.jpg" },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest mb-2">
          <ImageIcon size={14} />
          <span>VISUAL ARCHIVE</span>
        </div>
        <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
          ARTWORK <span className="text-gradient-orange">GALLERY</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_IMAGES.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImg(img)}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card h-60 sm:h-72 cursor-pointer"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay visible by default on mobile touch, hover on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 size={16} />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-orbitron text-[#ff6b00]">{img.anime}</span>
                <h4 className="font-bebas text-xl sm:text-2xl text-white">{img.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass-panel p-3 sm:p-5 rounded-3xl space-y-3 sm:space-y-4"
            >
              <div className="flex items-center justify-between px-2 sm:px-4 pt-1">
                <div>
                  <h4 className="font-bebas text-2xl sm:text-3xl text-white">{selectedImg.title}</h4>
                  <p className="text-[10px] sm:text-xs font-orbitron text-white/50">{selectedImg.anime}</p>
                </div>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="p-2 text-white/60 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center">
                <img src={selectedImg.url} alt={selectedImg.title} className="w-full h-full max-h-[70vh] object-contain rounded-xl" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
