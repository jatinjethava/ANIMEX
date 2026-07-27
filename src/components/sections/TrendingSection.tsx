"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimeCard from "../AnimeCard";

gsap.registerPlugin(ScrollTrigger);

const trendingAnime = [
  { title: "Neon Blade Chronicles", rating: 9.2, episodes: 24, genre: "Action" },
  { title: "Celestial Mech Wars", rating: 8.8, episodes: 12, genre: "Sci-Fi" },
  { title: "Shrine of Whispers", rating: 9.5, episodes: 26, genre: "Fantasy" },
  { title: "Starfall Command", rating: 8.6, episodes: 48, genre: "Space" },
  { title: "Dragon's Decree", rating: 9.1, episodes: 36, genre: "Fantasy" },
  { title: "Abyss Requiem", rating: 8.9, episodes: 13, genre: "Horror" },
  { title: "Solar Ronin", rating: 9.3, episodes: 24, genre: "Action" },
  { title: "Moonlit Serenade", rating: 8.7, episodes: 12, genre: "Romance" },
];

export default function TrendingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12 opacity-0"
    >
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p className="text-sm text-purple-400 font-medium tracking-widest uppercase mb-2">
            Trending Now
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Most Popular{" "}
            <span className="gradient-text">This Season</span>
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={scrollRef} className="horizontal-scroll">
        {trendingAnime.map((anime, i) => (
          <AnimeCard
            key={anime.title}
            {...anime}
            imageIndex={i}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
}
