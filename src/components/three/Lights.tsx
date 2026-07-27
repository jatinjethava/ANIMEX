"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Lights() {
  const purpleRef = useRef<THREE.PointLight>(null);
  const blueRef = useRef<THREE.PointLight>(null);
  const pinkRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (purpleRef.current) {
      purpleRef.current.position.x = Math.sin(t * 0.5) * 8;
      purpleRef.current.position.y = Math.cos(t * 0.3) * 4 + 3;
      purpleRef.current.intensity = 2 + Math.sin(t * 0.8) * 0.5;
    }
    if (blueRef.current) {
      blueRef.current.position.x = Math.cos(t * 0.4) * 6;
      blueRef.current.position.z = Math.sin(t * 0.6) * 8;
      blueRef.current.intensity = 2 + Math.cos(t * 0.7) * 0.5;
    }
    if (pinkRef.current) {
      pinkRef.current.position.z = Math.sin(t * 0.3) * 10;
      pinkRef.current.position.y = Math.cos(t * 0.5) * 3 + 2;
      pinkRef.current.intensity = 1.5 + Math.sin(t * 0.9) * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} color="#1a1a2e" />
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.3}
        color="#a855f7"
      />
      <pointLight
        ref={purpleRef}
        position={[5, 3, 0]}
        color="#a855f7"
        intensity={2}
        distance={25}
        decay={2}
      />
      <pointLight
        ref={blueRef}
        position={[-5, 2, 5]}
        color="#3b82f6"
        intensity={2}
        distance={25}
        decay={2}
      />
      <pointLight
        ref={pinkRef}
        position={[0, 4, -5]}
        color="#ec4899"
        intensity={1.5}
        distance={20}
        decay={2}
      />
      <spotLight
        position={[0, 15, 0]}
        angle={0.4}
        penumbra={1}
        intensity={0.5}
        color="#6366f1"
        castShadow={false}
      />
    </>
  );
}
