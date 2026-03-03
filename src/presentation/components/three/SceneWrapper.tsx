"use client";

import { Suspense } from "react";

import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface SceneWrapperProps {
  children: React.ReactNode;
  className?: string;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
}

export function SceneWrapper({
  children,
  className = "",
  camera = { position: [0, 0, 5], fov: 75 },
}: SceneWrapperProps) {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas
        camera={camera}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
