"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Character, CHARACTERS } from "@/data/characters";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCharacter from "@/components/FeaturedCharacter";
import CharacterShowcase from "@/components/CharacterShowcase";
import PowerRanking from "@/components/PowerRanking";
import CharacterTimeline from "@/components/CharacterTimeline";
import CollectionsSection from "@/components/CollectionsSection";
import GallerySection from "@/components/GallerySection";
import QuotesSection from "@/components/QuotesSection";
import Footer from "@/components/Footer";
import CharacterModal from "@/components/CharacterModal";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const Loader = dynamic(() => import("@/components/Loader"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export default function Home() {
  const [selectedModalCharacter, setSelectedModalCharacter] = useState<Character | null>(null);

  const handleSelectCharacterById = (id: string) => {
    const found = CHARACTERS.find((c) => c.id === id);
    if (found) setSelectedModalCharacter(found);
  };

  return (
    <SmoothScroll>
      <CustomCursor />
      <Loader />
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#ff6b00] selection:text-black">
        <Navbar onSelectCharacter={handleSelectCharacterById} />
        
        <main>
          <Hero onOpenCharacterModal={setSelectedModalCharacter} />
          <FeaturedCharacter onOpenCharacterModal={setSelectedModalCharacter} />
          <CharacterShowcase onOpenModal={setSelectedModalCharacter} />
          <PowerRanking onOpenModal={setSelectedModalCharacter} />
          <CharacterTimeline />
          <CollectionsSection />
          <GallerySection />
          <QuotesSection />
        </main>

        <Footer />

        {/* Fullscreen Interactive Character Lore Modal */}
        <CharacterModal
          character={selectedModalCharacter}
          onClose={() => setSelectedModalCharacter(null)}
        />
      </div>
    </SmoothScroll>
  );
}
