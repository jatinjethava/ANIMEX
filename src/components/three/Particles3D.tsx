"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;
const SAKURA_COUNT = 150;

export default function Particles3D() {
  const pointsRef = useRef<THREE.Points>(null);
  const sakuraRef = useRef<THREE.Points>(null);

  const energyData = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);

    const palette = [
      new THREE.Color("#ff6b00"),
      new THREE.Color("#ff9e43"),
      new THREE.Color("#4f46e5"),
      new THREE.Color("#ffd166"),
      new THREE.Color("#00d2ff"),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = Math.random() * 0.4 + 0.1;
    }

    return { positions, colors, speeds };
  }, []);

  const sakuraData = useMemo(() => {
    const positions = new Float32Array(SAKURA_COUNT * 3);
    const colors = new Float32Array(SAKURA_COUNT * 3);
    const speeds = new Float32Array(SAKURA_COUNT);

    const pinkPalette = [
      new THREE.Color("#ffb7c5"),
      new THREE.Color("#ff91a4"),
      new THREE.Color("#ffa6c9"),
    ];

    for (let i = 0; i < SAKURA_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = Math.random() * 20 + 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const color = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      speeds[i] = Math.random() * 0.25 + 0.05;
    }

    return { positions, colors, speeds };
  }, []);

  const energyGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(energyData.positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(energyData.colors, 3));
    return geo;
  }, [energyData]);

  const sakuraGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(sakuraData.positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(sakuraData.colors, 3));
    return geo;
  }, [sakuraData]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const speed = energyData.speeds[i];
        positions[i * 3 + 1] += Math.sin(t * speed + i) * 0.003;
        positions[i * 3] += Math.cos(t * speed * 0.5 + i * 0.7) * 0.002;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (sakuraRef.current) {
      const positions = sakuraRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < SAKURA_COUNT; i++) {
        const speed = sakuraData.speeds[i];
        positions[i * 3 + 1] -= speed * 0.02;
        positions[i * 3] += Math.sin(t * 0.5 + i) * 0.005;

        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 15;
          positions[i * 3] = (Math.random() - 0.5) * 25;
        }
      }
      sakuraRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef} geometry={energyGeometry}>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <points ref={sakuraRef} geometry={sakuraGeometry}>
        <pointsMaterial
          size={0.14}
          vertexColors
          transparent
          opacity={0.65}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}
