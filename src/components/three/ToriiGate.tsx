"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ToriiGate() {
  const groupRef = useRef<THREE.Group>(null);

  const pillarMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8b0000",
        emissive: "#ff1a1a",
        emissiveIntensity: 0.3,
        metalness: 0.6,
        roughness: 0.3,
      }),
    []
  );

  const topMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8b0000",
        emissive: "#ff3333",
        emissiveIntensity: 0.4,
        metalness: 0.7,
        roughness: 0.2,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 0.3) * 0.15 - 1;
      groupRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, -8]} scale={1.2}>

      <mesh position={[-2.5, 0, 0]} material={pillarMaterial}>
        <cylinderGeometry args={[0.2, 0.25, 6, 16]} />
      </mesh>

      <mesh position={[2.5, 0, 0]} material={pillarMaterial}>
        <cylinderGeometry args={[0.2, 0.25, 6, 16]} />
      </mesh>

      <mesh position={[0, 3.2, 0]} material={topMaterial}>
        <boxGeometry args={[7, 0.3, 0.5]} />
      </mesh>

      <mesh position={[0, 2.2, 0]} material={topMaterial}>
        <boxGeometry args={[5.5, 0.2, 0.35]} />
      </mesh>

      <mesh position={[-3.3, 3.35, 0]} rotation={[0, 0, 0.3]} material={topMaterial}>
        <boxGeometry args={[0.8, 0.25, 0.5]} />
      </mesh>
      <mesh position={[3.3, 3.35, 0]} rotation={[0, 0, -0.3]} material={topMaterial}>
        <boxGeometry args={[0.8, 0.25, 0.5]} />
      </mesh>

      <mesh position={[0, 2.7, 0.1]} material={topMaterial}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
      </mesh>

      <mesh position={[-2.5, -2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.05, 8, 32]} />
        <meshStandardMaterial
          color="#ff4444"
          emissive="#ff0000"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh position={[2.5, -2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.05, 8, 32]} />
        <meshStandardMaterial
          color="#ff4444"
          emissive="#ff0000"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
