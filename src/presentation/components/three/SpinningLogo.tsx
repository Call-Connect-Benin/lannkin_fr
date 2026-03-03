"use client";

import { useRef } from "react";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT_COLOR = "#498f6d";

interface SpinningLogoProps {
  speed?: number;
  scale?: number;
}

export function SpinningLogo({ speed = 0.5, scale = 1 }: SpinningLogoProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <meshStandardMaterial
          color={ACCENT_COLOR}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}
