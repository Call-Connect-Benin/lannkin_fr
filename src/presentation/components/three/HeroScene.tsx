"use client";

import { useMemo, useRef } from "react";

import { Float, PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

const ACCENT_COLOR = "#498f6d";
const PARTICLE_COUNT = 200;

function generateParticlePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  return positions;
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color={ACCENT_COLOR}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function AnimatedParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(
    () => generateParticlePositions(PARTICLE_COUNT),
    [],
  );

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={ACCENT_COLOR}
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color={ACCENT_COLOR} intensity={1.5} />
      <pointLight
        position={[-5, -5, -5]}
        color={ACCENT_COLOR}
        intensity={0.5}
      />

      <FloatingIcosahedron />
      <AnimatedParticles />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={1.5}
        />
      </EffectComposer>
    </>
  );
}
