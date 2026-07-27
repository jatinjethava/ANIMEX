"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingSword() {
  const groupRef = useRef<THREE.Group>(null);

  const bladeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#c0c0c0",
        emissive: "#6366f1",
        emissiveIntensity: 0.8,
        metalness: 0.95,
        roughness: 0.1,
      }),
    []
  );

  const handleMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a2e",
        emissive: "#a855f7",
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.4,
      }),
    []
  );

  const guardMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffd700",
        emissive: "#ff8c00",
        emissiveIntensity: 0.5,
        metalness: 0.9,
        roughness: 0.2,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.3 + 1;
      groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.1 + 0.3;
      groupRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[6, 1, -3]} rotation={[0, 0, 0.3]}>
      {/* Blade */}
      <mesh position={[0, 1.8, 0]} material={bladeMaterial}>
        <boxGeometry args={[0.08, 3.2, 0.02]} />
      </mesh>
      {/* Blade edge glow */}
      <mesh position={[0.05, 1.8, 0]}>
        <boxGeometry args={[0.01, 3.2, 0.005]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={4}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Blade tip */}
      <mesh position={[0, 3.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.08, 0.08, 0.02]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#a855f7"
          emissiveIntensity={3}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Guard (tsuba) */}
      <mesh position={[0, 0.1, 0]} material={guardMaterial}>
        <boxGeometry args={[0.6, 0.08, 0.15]} />
      </mesh>
      {/* Handle (tsuka) */}
      <mesh position={[0, -0.6, 0]} material={handleMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 1.2, 8]} />
      </mesh>
      {/* Handle wrap pattern */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[0, -0.15 - i * 0.17, 0]}
          rotation={[0, i * 0.5, 0]}
        >
          <torusGeometry args={[0.07, 0.015, 4, 8]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={1}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}
      {/* Pommel */}
      <mesh position={[0, -1.25, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ff8c00"
          emissiveIntensity={1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Blade aura */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[0.3, 3.4, 0.1]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1}
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
