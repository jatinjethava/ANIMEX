"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sword,
  Heart,
  Rocket,
  Wand2,
  Skull,
  Laugh,
  Drama,
  Music,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: "Action",
    icon: Sword,
    color: "#ef4444",
    gradient: "from-red-600/20 to-red-900/20",
    count: 1240,
  },
  {
    name: "Romance",
    icon: Heart,
    color: "#ec4899",
    gradient: "from-pink-600/20 to-pink-900/20",
    count: 890,
  },
  {
    name: "Sci-Fi",
    icon: Rocket,
    color: "#3b82f6",
    gradient: "from-blue-600/20 to-blue-900/20",
    count: 650,
  },
  {
    name: "Fantasy",
    icon: Wand2,
    color: "#a855f7",
    gradient: "from-purple-600/20 to-purple-900/20",
    count: 1100,
  },
  {
    name: "Horror",
    icon: Skull,
    color: "#64748b",
    gradient: "from-slate-600/20 to-slate-900/20",
    count: 420,
  },
  {
    name: "Comedy",
    icon: Laugh,
    color: "#f59e0b",
    gradient: "from-amber-600/20 to-amber-900/20",
    count: 980,
  },
  {
    name: "Drama",
    icon: Drama,
    color: "#06b6d4",
    gradient: "from-cyan-600/20 to-cyan-900/20",
    count: 760,
  },
  {
    name: "Music",
    icon: Music,
    color: "#10b981",
    gradient: "from-emerald-600/20 to-emerald-900/20",
    count: 340,
  },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelector(".section-header"),
      { opacity: 0, y: 40 },
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

    const cards = cardsRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="section-header mb-8 md:mb-12">
        <p className="text-sm text-purple-400 font-medium tracking-widest uppercase mb-2">
          Explore
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Browse by{" "}
          <span className="gradient-text">Genre</span>
        </h2>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <a
              key={cat.name}
              href="#"
              className={`group relative rounded-2xl overflow-hidden p-6 md:p-8 bg-gradient-to-br ${cat.gradient} border border-gray-800/50 hover:border-gray-700/80 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: `${cat.color}20`,
                  boxShadow: `0 0 20px ${cat.color}15`,
                }}
              >
                <Icon size={24} style={{ color: cat.color }} />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-400">{cat.count}+ titles</p>

              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"
                style={{ background: cat.color }}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
