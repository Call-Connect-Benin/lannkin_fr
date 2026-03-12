"use client";

import { useMemo, useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT_COLOR = "#498f6d";
const CONNECTION_DIST = 2.2;
const MAX_LINES = 150;

interface PricingBgSceneProps {
  count?: number;
  spread?: number;
}

function generateParticles(count: number, spread: number) {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * spread;
    positions[i3 + 1] = (Math.random() - 0.5) * spread;
    positions[i3 + 2] = (Math.random() - 0.5) * 4;
    velocities[i3] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 2] = 0;
  }
  return { positions, velocities };
}

export function PricingBgScene({ count = 80, spread = 14 }: PricingBgSceneProps) {
  const { size } = useThree();
  // Reduce count on small screens for performance
  const resolvedCount = size.width < 768 ? Math.floor(count * 0.5) : count;

  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, velocities } = useMemo(
    () => generateParticles(resolvedCount, spread),
    [resolvedCount, spread],
  );

  const linePositions = useMemo(() => new Float32Array(MAX_LINES * 6), []);
  const lineColors = useMemo(() => new Float32Array(MAX_LINES * 6), []);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    geom.setDrawRange(0, 0);
    return geom;
  }, [linePositions, lineColors]);

  const accentColor = useMemo(() => new THREE.Color(ACCENT_COLOR), []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes["position"] as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;
    const half = spread / 2;

    for (let i = 0; i < resolvedCount; i++) {
      const i3 = i * 3;
      posArray[i3] = (posArray[i3] ?? 0) + (velocities[i3] ?? 0);
      posArray[i3 + 1] = (posArray[i3 + 1] ?? 0) + (velocities[i3 + 1] ?? 0);
      if ((posArray[i3] ?? 0) > half) posArray[i3] = -half;
      if ((posArray[i3] ?? 0) < -half) posArray[i3] = half;
      if ((posArray[i3 + 1] ?? 0) > half) posArray[i3 + 1] = -half;
      if ((posArray[i3 + 1] ?? 0) < -half) posArray[i3 + 1] = half;
    }
    posAttr.needsUpdate = true;

    let lineIdx = 0;
    for (let i = 0; i < resolvedCount && lineIdx < MAX_LINES; i++) {
      const i3 = i * 3;
      const ax = posArray[i3] ?? 0;
      const ay = posArray[i3 + 1] ?? 0;
      const az = posArray[i3 + 2] ?? 0;
      for (let j = i + 1; j < resolvedCount && lineIdx < MAX_LINES; j++) {
        const j3 = j * 3;
        const dx = ax - (posArray[j3] ?? 0);
        const dy = ay - (posArray[j3 + 1] ?? 0);
        const dz = az - (posArray[j3 + 2] ?? 0);
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.5;
          const li = lineIdx * 6;
          linePositions[li] = ax; linePositions[li + 1] = ay; linePositions[li + 2] = az;
          linePositions[li + 3] = posArray[j3] ?? 0;
          linePositions[li + 4] = posArray[j3 + 1] ?? 0;
          linePositions[li + 5] = posArray[j3 + 2] ?? 0;
          lineColors[li] = accentColor.r * alpha; lineColors[li + 1] = accentColor.g * alpha; lineColors[li + 2] = accentColor.b * alpha;
          lineColors[li + 3] = accentColor.r * alpha; lineColors[li + 4] = accentColor.g * alpha; lineColors[li + 5] = accentColor.b * alpha;
          lineIdx++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    (lineGeometry.attributes["position"] as THREE.BufferAttribute).needsUpdate = true;
    (lineGeometry.attributes["color"] as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={ACCENT_COLOR}
          size={0.035}
          transparent
          opacity={0.45}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.18} depthWrite={false} />
      </lineSegments>
    </group>
  );
}
