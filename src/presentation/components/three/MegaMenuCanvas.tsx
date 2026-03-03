"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import { MegaMenuParticles } from "./MegaMenuScene";

export default function MegaMenuCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <MegaMenuParticles />
      </Suspense>
    </Canvas>
  );
}
