"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import Effects from "./Effects";
import ToriiGate from "./ToriiGate";
import NeonRings from "./NeonRings";
import Particles from "./Particles";
import FloatingSword from "./FloatingSword";
import MagicCircles from "./MagicCircles";
import Lanterns from "./Lanterns";

function CameraController() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame(() => {
    const targetX = mouseRef.current.x * 0.5;
    const targetY = mouseRef.current.y * 0.3 + 1;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -5);
  });

  // Attach mouse listener on mount
  if (typeof window !== "undefined") {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handler, { passive: true });
    }
  }

  return null;
}

function SceneContent() {
  return (
    <>
      <CameraController />
      <Lights />
      <fog attach="fog" args={["#000010", 10, 50]} />
      <ToriiGate />
      <NeonRings />
      <Particles />
      <FloatingSword />
      <MagicCircles />
      <Lanterns />
      <Environment preset="night" />
      <Effects />
    </>
  );
}

export default function Scene() {
  return (
    <div className="three-canvas" style={{ zIndex: 5 }}>
      <Canvas
        camera={{ position: [0, 1, 8], fov: 60, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
