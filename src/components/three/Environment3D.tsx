"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface EnvironmentProps {
  primaryColor?: string;
}

export default function Environment3D({ primaryColor = "#ff6b00" }: EnvironmentProps) {
  const ring1 = useRef<THREE.Group>(null);
  const ring2 = useRef<THREE.Group>(null);
  const toriiGroup = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.z = t * 0.15;
      ring1.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.25;
      ring2.current.rotation.y = Math.cos(t * 0.3) * 0.15;
    }
    if (toriiGroup.current) {
      toriiGroup.current.position.y = Math.sin(t * 0.4) * 0.15 - 0.5;
    }
  });

  return (
    <group>

      <group ref={toriiGroup} position={[0, -0.5, -6]}>

        <mesh position={[-3.5, 2, 0]}>
          <cylinderGeometry args={[0.2, 0.28, 6, 16]} />
          <meshStandardMaterial color="#181824" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[3.5, 2, 0]}>
          <cylinderGeometry args={[0.2, 0.28, 6, 16]} />
          <meshStandardMaterial color="#181824" roughness={0.3} metalness={0.8} />
        </mesh>


        <mesh position={[0, 4.8, 0]}>
          <boxGeometry args={[9, 0.35, 0.5]} />
          <meshStandardMaterial
            color={primaryColor}
            emissive={primaryColor}
            emissiveIntensity={2.5}
          />
        </mesh>


        <mesh position={[0, 3.8, 0]}>
          <boxGeometry args={[8, 0.25, 0.35]} />
          <meshStandardMaterial color="#27273a" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>


      <group ref={ring1} position={[0, 0, -4]}>
        <mesh>
          <torusGeometry args={[4.5, 0.03, 16, 100]} />
          <meshBasicMaterial color={primaryColor} transparent opacity={0.6} />
        </mesh>
      </group>

      <group ref={ring2} position={[0, 0, -3.5]}>
        <mesh>
          <torusGeometry args={[3.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#4f46e5" transparent opacity={0.5} />
        </mesh>
      </group>


      <gridHelper args={[50, 50, primaryColor, "#1e1e2e"]} position={[0, -4, 0]} />
    </group>
  );
}
