"use client";

import { useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects3D() {
  const gl = useThree((state) => state.gl);

  // Safely guard against uninitialized WebGL context during Next.js Turbopack HMR & hydration
  if (!gl || typeof gl.getContext !== "function" || !gl.getContext()) {
    return null;
  }

  return (
    <EffectComposer enableNormalPass={false}>
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0015, 0.0015]}
      />
      <Vignette eskil={false} offset={0.2} darkness={0.8} />
    </EffectComposer>
  );
}
