"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 600;
const SAKURA_COUNT = 80;

export default function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const sakuraRef = useRef<THREE.Points>(null);

  const particleData = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);

    const colorPalette = [
      new THREE.Color("#a855f7"),
      new THREE.Color("#3b82f6"),
      new THREE.Color("#ec4899"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, colors, speeds };
  }, []);

  const sakuraData = useMemo(() => {
    const positions = new Float32Array(SAKURA_COUNT * 3);
    const colors = new Float32Array(SAKURA_COUNT * 3);
    const speeds = new Float32Array(SAKURA_COUNT);

    const pinkShades = [
      new THREE.Color("#ffb7c5"),
      new THREE.Color("#ffc0cb"),
      new THREE.Color("#ff91a4"),
      new THREE.Color("#ffa6c9"),
    ];

    for (let i = 0; i < SAKURA_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = Math.random() * 20 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const color = pinkShades[Math.floor(Math.random() * pinkShades.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = Math.random() * 0.3 + 0.05;
    }

    return { positions, colors, speeds };
  }, []);

  const particleGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(particleData.positions, 3)
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleData.colors, 3)
    );
    return geo;
  }, [particleData]);

  const sakuraGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(sakuraData.positions, 3)
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(sakuraData.colors, 3)
    );
    return geo;
  }, [sakuraData]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const speed = particleData.speeds[i];
        positions[i * 3 + 1] += Math.sin(t * speed + i) * 0.002;
        positions[i * 3] += Math.cos(t * speed * 0.5 + i * 0.7) * 0.001;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (sakuraRef.current) {
      const positions = sakuraRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < SAKURA_COUNT; i++) {
        const speed = sakuraData.speeds[i];
        positions[i * 3 + 1] -= speed * 0.02;
        positions[i * 3] += Math.sin(t * 0.5 + i) * 0.005;
        positions[i * 3 + 2] += Math.cos(t * 0.3 + i * 0.5) * 0.003;

        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 15 + Math.random() * 5;
          positions[i * 3] = (Math.random() - 0.5) * 30;
        }
      }
      sakuraRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Energy particles */}
      <points ref={pointsRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Sakura petals */}
      <points ref={sakuraRef} geometry={sakuraGeometry}>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}
