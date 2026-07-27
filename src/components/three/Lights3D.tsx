"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface LightsProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export default function Lights3D({
  primaryColor = "#ff6b00",
  secondaryColor = "#4f46e5",
}: LightsProps) {
  const primaryLight = useRef<THREE.PointLight>(null);
  const secondaryLight = useRef<THREE.PointLight>(null);
  const rimLight = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (primaryLight.current) {
      primaryLight.current.position.x = Math.sin(t * 0.7) * 5;
      primaryLight.current.position.y = Math.cos(t * 0.5) * 3 + 2;
      primaryLight.current.intensity = 3 + Math.sin(t * 1.2) * 0.8;
    }

    if (secondaryLight.current) {
      secondaryLight.current.position.x = Math.cos(t * 0.6) * 6;
      secondaryLight.current.position.z = Math.sin(t * 0.8) * 5;
      secondaryLight.current.intensity = 2.5 + Math.cos(t * 1.1) * 0.5;
    }

    if (rimLight.current) {
      rimLight.current.position.x = Math.sin(t * 0.4) * 8;
      rimLight.current.position.z = -5 + Math.cos(t * 0.3) * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 7]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      <pointLight
        ref={primaryLight}
        position={[3, 2, 4]}
        intensity={3}
        color={primaryColor}
        distance={15}
      />
      <pointLight
        ref={secondaryLight}
        position={[-3, -1, 3]}
        intensity={2.5}
        color={secondaryColor}
        distance={15}
      />
      <spotLight
        ref={rimLight}
        position={[0, 5, -5]}
        intensity={4}
        color={primaryColor}
        angle={0.6}
        penumbra={1}
      />
    </>
  );
}
