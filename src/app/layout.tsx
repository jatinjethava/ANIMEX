import type { Metadata } from "next";
import { Inter, Bebas_Neue, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ANIMEX — Interactive Anime Character Portfolio & Showcase",
  description:
    "An Awwwards-inspired, cinematic 3D anime character showcase featuring immersive WebGL graphics, power rankings, character lore, and interactive showcases.",
  keywords: [
    "Anime Characters",
    "WebGL",
    "Three.js",
    "Satoru Gojo",
    "Tanjiro Kamado",
    "Awwwards",
    "Cinematic",
    "3D Showcase",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${orbitron.variable} h-full antialiased dark`}
    >
      <body
        className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-[family-name:var(--font-inter)] selection:bg-[#ff6b00] selection:text-black"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
