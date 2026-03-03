"use client";

import { type ComponentRef, useRef } from "react";

import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type DistortMaterialRef = ComponentRef<typeof MeshDistortMaterial>;

const ACCENT_PRIMARY = "#498f6d";
const ACCENT_SECONDARY = "#85353e";

interface GradientSphereProps {
  radius?: number;
  distortSpeed?: number;
  distortFactor?: number;
}

export function GradientSphere({
  radius = 2,
  distortSpeed = 2,
  distortFactor = 0.4,
}: GradientSphereProps) {
  const materialRef = useRef<DistortMaterialRef>(null);
  const colorA = useRef(new THREE.Color(ACCENT_PRIMARY));
  const colorB = useRef(new THREE.Color(ACCENT_SECONDARY));
  const lerpedColor = useRef(new THREE.Color(ACCENT_PRIMARY));

  useFrame((state) => {
    if (materialRef.current) {
      const t = (Math.sin(state.clock.elapsedTime * 0.5) + 1) / 2;
      lerpedColor.current
        .copy(colorA.current)
        .lerp(colorB.current, t);
      materialRef.current.color.copy(lerpedColor.current);
      materialRef.current.emissive.copy(lerpedColor.current).multiplyScalar(0.15);
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[radius, 64, 64]} />
      <MeshDistortMaterial
        ref={materialRef}
        color={ACCENT_PRIMARY}
        emissive={ACCENT_PRIMARY}
        emissiveIntensity={0.15}
        metalness={0.3}
        roughness={0.4}
        transparent
        opacity={0.85}
        speed={distortSpeed}
        factor={distortFactor}
        toneMapped={false}
      />
    </mesh>
  );
}
