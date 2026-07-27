"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Lantern({
  position,
  color,
  delay,
}: {
  position: [number, number, number];
  color: string;
  delay: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() + delay;
      groupRef.current.position.y = position[1] + Math.sin(t * 0.4) * 0.2;
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.05;
      groupRef.current.rotation.x = Math.cos(t * 0.2) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Lantern body */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.25, 0.5, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Top cap */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.18, 0.12, 8]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      {/* Bottom cap */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.22, 0.08, 0.1, 8]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      {/* Hanging cord */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.4, 4]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      {/* Inner glow */}
      <pointLight
        position={[0, 0, 0]}
        color={color}
        intensity={0.8}
        distance={4}
        decay={2}
      />
    </group>
  );
}

export default function Lanterns() {
  return (
    <>
      <Lantern position={[-7, 4, -6]} color="#ff6b35" delay={0} />
      <Lantern position={[-4, 5, -8]} color="#ff4444" delay={1} />
      <Lantern position={[7, 3.5, -7]} color="#ff6b35" delay={2} />
      <Lantern position={[5, 5.5, -10]} color="#ff4444" delay={3} />
      <Lantern position={[-2, 6, -12]} color="#ff8c00" delay={4} />
      <Lantern position={[3, 4, -5]} color="#ff6b35" delay={1.5} />
    </>
  );
}
