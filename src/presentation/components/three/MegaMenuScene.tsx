"use client";

import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT_COLOR = "#498f6d";
const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 2.0;
const MAX_CONNECTIONS = 120;

function generateData(count: number) {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 5;
    positions[i3 + 2] = (Math.random() - 0.5) * 3;

    velocities[i3] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.003;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;
  }

  return { positions, velocities };
}

function MegaMenuParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, velocities } = useMemo(
    () => generateData(PARTICLE_COUNT),
    [],
  );

  const linePositions = useMemo(
    () => new Float32Array(MAX_CONNECTIONS * 6),
    [],
  );
  const lineColors = useMemo(
    () => new Float32Array(MAX_CONNECTIONS * 6),
    [],
  );

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3),
    );
    geom.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3),
    );
    geom.setDrawRange(0, 0);
    return geom;
  }, [linePositions, lineColors]);

  const color = useMemo(() => new THREE.Color(ACCENT_COLOR), []);

  useFrame(() => {
    if (!pointsRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes[
      "position"
    ] as THREE.BufferAttribute | undefined;
    if (!posAttr) return;

    const posArray = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      posArray[i3] = (posArray[i3] ?? 0) + (velocities[i3] ?? 0);
      posArray[i3 + 1] = (posArray[i3 + 1] ?? 0) + (velocities[i3 + 1] ?? 0);
      posArray[i3 + 2] = (posArray[i3 + 2] ?? 0) + (velocities[i3 + 2] ?? 0);

      if (Math.abs(posArray[i3] ?? 0) > 5) velocities[i3] = (velocities[i3] ?? 0) * -1;
      if (Math.abs(posArray[i3 + 1] ?? 0) > 2.5) velocities[i3 + 1] = (velocities[i3 + 1] ?? 0) * -1;
      if (Math.abs(posArray[i3 + 2] ?? 0) > 1.5) velocities[i3 + 2] = (velocities[i3 + 2] ?? 0) * -1;
    }

    posAttr.needsUpdate = true;

    let lineIdx = 0;
    for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_CONNECTIONS; i++) {
      const i3 = i * 3;
      const ax = posArray[i3] ?? 0;
      const ay = posArray[i3 + 1] ?? 0;
      const az = posArray[i3 + 2] ?? 0;

      for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_CONNECTIONS; j++) {
        const j3 = j * 3;
        const dx = ax - (posArray[j3] ?? 0);
        const dy = ay - (posArray[j3 + 1] ?? 0);
        const dz = az - (posArray[j3 + 2] ?? 0);
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.6;
          const li = lineIdx * 6;

          linePositions[li] = ax;
          linePositions[li + 1] = ay;
          linePositions[li + 2] = az;
          linePositions[li + 3] = posArray[j3] ?? 0;
          linePositions[li + 4] = posArray[j3 + 1] ?? 0;
          linePositions[li + 5] = posArray[j3 + 2] ?? 0;

          lineColors[li] = color.r * alpha;
          lineColors[li + 1] = color.g * alpha;
          lineColors[li + 2] = color.b * alpha;
          lineColors[li + 3] = color.r * alpha;
          lineColors[li + 4] = color.g * alpha;
          lineColors[li + 5] = color.b * alpha;

          lineIdx++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    const linePosAttr = lineGeometry.attributes[
      "position"
    ] as THREE.BufferAttribute | undefined;
    const lineColorAttr = lineGeometry.attributes[
      "color"
    ] as THREE.BufferAttribute | undefined;
    if (linePosAttr) linePosAttr.needsUpdate = true;
    if (lineColorAttr) lineColorAttr.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={ACCENT_COLOR}
          size={0.05}
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export { MegaMenuParticles };
