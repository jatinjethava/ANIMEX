"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Character3DProps {
  imageSrc: string;
  primaryColor?: string;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800";

export default function Character3D({
  imageSrc,
  primaryColor = "#ff6b00",
}: Character3DProps) {
  const characterGroup = useRef<THREE.Group>(null);
  const katanaRef = useRef<THREE.Group>(null);
  const auraRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    if (!imageSrc) return;

    let isMounted = true;
    const loader = new THREE.TextureLoader();

    // Use our internal server proxy for external HTTP/HTTPS URLs to guarantee open CORS headers for WebGL
    const textureUrl = imageSrc.startsWith("http")
      ? `/api/proxy-image?url=${encodeURIComponent(imageSrc)}`
      : imageSrc;

    loader.load(
      textureUrl,
      (loadedTex) => {
        if (!isMounted) return;
        loadedTex.colorSpace = THREE.SRGBColorSpace;
        setTexture(loadedTex);
      },
      undefined,
      () => {
        // Fallback to internal proxy of FALLBACK_IMAGE if original URL fails
        loader.load(
          `/api/proxy-image?url=${encodeURIComponent(FALLBACK_IMAGE)}`,
          (fallbackTex) => {
            if (!isMounted) return;
            fallbackTex.colorSpace = THREE.SRGBColorSpace;
            setTexture(fallbackTex);
          }
        );
      }
    );

    return () => {
      isMounted = false;
    };
  }, [imageSrc]);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();

    if (characterGroup.current) {
      // Gentle breathing animation
      characterGroup.current.position.y = Math.sin(t * 1.5) * 0.08 - 0.2;
      characterGroup.current.scale.x = 1 + Math.sin(t * 1.5) * 0.01;
      characterGroup.current.scale.y = 1 + Math.cos(t * 1.5) * 0.01;

      // Mouse tracking parallax tilt
      characterGroup.current.rotation.y = THREE.MathUtils.lerp(
        characterGroup.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      characterGroup.current.rotation.x = THREE.MathUtils.lerp(
        characterGroup.current.rotation.x,
        -pointer.y * 0.2,
        0.05
      );
    }

    if (katanaRef.current) {
      katanaRef.current.position.y = Math.sin(t * 2) * 0.15 + 0.2;
      katanaRef.current.rotation.z = Math.cos(t * 1.2) * 0.1 + 0.3;
    }

    if (auraRef.current) {
      const mat = auraRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.35 + Math.sin(t * 3) * 0.15;
    }
  });

  return (
    <group ref={characterGroup} position={[0, -0.2, 0]}>
      {/* Energy Aura Backplane */}
      <mesh ref={auraRef} position={[0, 0.2, -0.2]}>
        <planeGeometry args={[4.2, 5.2]} />
        <meshBasicMaterial
          color={primaryColor}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Main Character Texture Card */}
      <mesh position={[0, 0.2, 0]}>
        <planeGeometry args={[3.8, 4.8]} />
        <meshStandardMaterial
          map={texture}
          transparent
          roughness={0.2}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Procedural Anime Katana Weapon */}
      <group ref={katanaRef} position={[1.8, 0.2, 0.5]} rotation={[0, 0, 0.4]}>
        {/* Blade */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[0.04, 2.2, 0.02]} />
          <meshStandardMaterial
            color="#e2e8f0"
            metalness={0.95}
            roughness={0.1}
            emissive={primaryColor}
            emissiveIntensity={0.6}
          />
        </mesh>
        {/* Guard (Tsuba) */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.03, 16]} />
          <meshStandardMaterial color={primaryColor} metalness={0.8} />
        </mesh>
        {/* Hilt */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.7, 16]} />
          <meshStandardMaterial color="#1e1e2e" />
        </mesh>
      </group>
    </group>
  );
}
