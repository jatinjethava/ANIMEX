"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring({
  radius,
  color,
  speed,
  axis,
  position,
}: {
  radius: number;
  color: string;
  speed: number;
  axis: [number, number, number];
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed;
      ref.current.rotation.x = axis[0] * t;
      ref.current.rotation.y = axis[1] * t;
      ref.current.rotation.z = axis[2] * t;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.03, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2.5}
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function NeonRings() {
  return (
    <group position={[0, 1, -4]}>
      <Ring
        radius={3}
        color="#a855f7"
        speed={0.3}
        axis={[1, 0.5, 0]}
        position={[0, 0, 0]}
      />
      <Ring
        radius={3.5}
        color="#3b82f6"
        speed={0.2}
        axis={[0, 1, 0.3]}
        position={[0, 0, 0]}
      />
      <Ring
        radius={4}
        color="#ec4899"
        speed={0.15}
        axis={[0.3, 0, 1]}
        position={[0, 0, 0]}
      />
      <Ring
        radius={2.2}
        color="#06b6d4"
        speed={0.4}
        axis={[0.5, 1, 0.5]}
        position={[0, 0, 0]}
      />
    </group>
  );
}
