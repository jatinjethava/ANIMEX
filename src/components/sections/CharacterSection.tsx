"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Play, Tv, Mic } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Power", value: 92, color: "#ef4444" },
  { label: "Speed", value: 88, color: "#3b82f6" },
  { label: "Intelligence", value: 95, color: "#a855f7" },
  { label: "Endurance", value: 78, color: "#10b981" },
  { label: "Charisma", value: 85, color: "#f59e0b" },
];

export default function CharacterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      sectionRef.current.querySelector(".char-visual"),
      { opacity: 0, x: -60, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      sectionRef.current.querySelector(".char-info"),
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    if (statsRef.current) {
      const bars = statsRef.current.querySelectorAll(".stat-bar-fill");
      tl.fromTo(
        bars,
        { width: "0%" },
        {
          width: (i: number) => `${stats[i].value}%`,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12"
    >
      <div className="mb-8 md:mb-12">
        <p className="text-sm text-purple-400 font-medium tracking-widest uppercase mb-2">
          Character Spotlight
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Featured{" "}
          <span className="gradient-text">Character</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Character Visual */}
        <div className="char-visual relative w-full lg:w-1/2 max-w-lg">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
            {/* Gradient background as character visual */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #1a0533 0%, #4c1d95 30%, #7c3aed 60%, #a855f7 100%)",
              }}
            >
              <span
                className="text-[200px] md:text-[280px] font-bold opacity-30 select-none"
                style={{
                  textShadow:
                    "0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(168,85,247,0.2)",
                }}
              >
                侍
              </span>
            </div>

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm font-medium">9.4 Rating</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Takeshi Yamamoto
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                The Shadow Ronin
              </p>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        {/* Character Info */}
        <div className="char-info flex-1 w-full lg:w-1/2">
          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Tv size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Appears In
                </span>
              </div>
              <p className="font-semibold text-lg">Neon Blade Chronicles</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Mic size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Voice Actor
                </span>
              </div>
              <p className="font-semibold text-lg">Yuki Kaji</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-8 leading-relaxed">
            A legendary ronin who walks between worlds of light and shadow.
            Armed with the ancient Neon Blade, Takeshi seeks to restore
            balance to a fractured dimension where technology and ancient
            magic have fused into chaos.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="space-y-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <span className="text-sm text-gray-400 w-24">
                  {stat.label}
                </span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="stat-bar-fill h-full rounded-full"
                    style={{
                      background: stat.color,
                      boxShadow: `0 0 10px ${stat.color}60`,
                      width: "0%",
                    }}
                  />
                </div>
                <span className="text-sm font-mono text-gray-500 w-8">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="ripple flex items-center gap-2 bg-white text-black rounded-full font-medium px-6 py-2.5 hover:bg-gray-200 transition-colors">
              <Play size={16} className="fill-black" />
              Watch Trailer
            </button>
            <button className="ripple flex items-center gap-2 rounded-full font-medium liquid-glass px-6 py-2.5 hover:bg-white/5 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
