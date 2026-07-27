"use client";

import { motion } from "framer-motion";
import { Film, Award } from "lucide-react";

const STUDIOS = [
  {
    name: "MAPPA Studio",
    japanese: "株式会社MAPPA",
    iconic: "Jujutsu Kaisen, Attack on Titan, Chainsaw Man",
    established: "2011",
    awards: "Awwwards Animation 2023",
    color: "#ff6b00",
    image: "https://leisurebyte.com/wp-content/uploads/2023/11/MAPPA-Studio-Animes--696x392.jpg",
  },
  {
    name: "Ufotable",
    japanese: "ユーフォーテーブル",
    iconic: "Demon Slayer: Kimetsu no Yaiba, Fate/stay night",
    established: "2000",
    awards: "Best Visual Effects 2022",
    color: "#00d2ff",
    image: "https://www.ufotable.co.jp/bar/mocktail_bar_ginza/ogimage_03.jpg",
  },
  {
    name: "WIT Studio",
    japanese: "株式会社ウィットスタジオ",
    iconic: "Attack on Titan (S1-S3), Spy x Family, Vinland Saga",
    established: "2012",
    awards: "Studio of the Year 2020",
    color: "#4f46e5",
    image: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/06/10-greatest-wit-studio-anime-of-all-time-ranked.jpg",
  },
  {
    name: "Studio Pierrot",
    japanese: "株式会社ぴえろ",
    iconic: "Bleach: TYBW, Naruto Shippuden, Tokyo Ghoul",
    established: "1979",
    awards: "Legendary Pioneer",
    color: "#ffd166",
    image: "https://comicbook.com/wp-content/uploads/sites/4/2024/05/9b9f626e-4939-4e6d-b6a9-b7d9c1387fbb.png?w=1024",
  },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-xs font-orbitron text-[#ff6b00] tracking-widest mb-2">
          <Film size={14} />
          <span>PRODUCTION HOUSES</span>
        </div>
        <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
          ANIMATION <span className="text-gradient-orange">STUDIOS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STUDIOS.map((studio, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between h-80 sm:h-96"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={studio.image}
                alt={studio.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-25 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-orbitron text-white/50">{studio.japanese}</span>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#ff6b00] transition-colors">
                {studio.name}
              </h3>
            </div>

            <div className="relative z-10 space-y-2.5 sm:space-y-3 pt-4 sm:pt-6 border-t border-white/10">
              <div>
                <span className="text-[9px] sm:text-[10px] font-orbitron text-white/40">FLAGSHIP ANIME</span>
                <p className="text-xs font-semibold text-white/90 line-clamp-2">{studio.iconic}</p>
              </div>

              <div className="flex items-center justify-between text-xs font-orbitron text-[#ff6b00]">
                <span>EST. {studio.established}</span>
                <Award size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
