"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MagicCircle({
  radius,
  y,
  color,
  speed,
  direction,
}: {
  radius: number;
  y: number;
  color: string;
  speed: number;
  direction: 1 | -1;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed * direction;
      ref.current.position.y = y + Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function InnerRune({
  radius,
  y,
  color,
  segments,
  speed,
}: {
  radius: number;
  y: number;
  color: string;
  segments: number;
  speed: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = -clock.getElapsedTime() * speed;
    }
  });

  return (
    <group ref={groupRef} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
      {[...Array(segments)].map((_, i) => {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius * 0.7;
        const z = Math.sin(angle) * radius * 0.7;
        return (
          <mesh key={i} position={[x, z, 0]}>
            <boxGeometry args={[0.04, 0.15, 0.01]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={3}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function MagicCircles() {
  return (
    <group position={[-5, -1, -5]}>
      <MagicCircle radius={2} y={0} color="#a855f7" speed={0.3} direction={1} />
      <MagicCircle radius={1.6} y={0.05} color="#ec4899" speed={0.5} direction={-1} />
      <MagicCircle radius={1.2} y={0.1} color="#3b82f6" speed={0.4} direction={1} />
      <InnerRune radius={1.8} y={0.02} color="#a855f7" segments={12} speed={0.2} />
      <InnerRune radius={1.3} y={0.07} color="#ec4899" segments={8} speed={0.35} />
    </group>
  );
}
