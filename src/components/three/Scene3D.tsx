"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lights3D from "./Lights3D";
import Particles3D from "./Particles3D";
import Environment3D from "./Environment3D";
import Character3D from "./Character3D";
import Effects3D from "./Effects3D";

interface Scene3DProps {
  imageSrc: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function Scene3D({
  imageSrc,
  primaryColor = "#ff6b00",
  secondaryColor = "#4f46e5",
}: Scene3DProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 18]} />

        <Suspense fallback={null}>
          <Lights3D primaryColor={primaryColor} secondaryColor={secondaryColor} />
          <Environment3D primaryColor={primaryColor} />
          <Character3D imageSrc={imageSrc} primaryColor={primaryColor} />
          <Particles3D />
          <Effects3D />
        </Suspense>
      </Canvas>
    </div>
  );
}
