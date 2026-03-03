"use client";

import { useMemo, useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT_COLOR = new THREE.Color("#498f6d");
const GRID_SIZE = 8;
const SPACING = 0.8;
const CUBE_SIZE = 0.12;

interface FloatingGridProps {
  rows?: number;
  cols?: number;
}

export function FloatingGrid({
  rows = GRID_SIZE,
  cols = GRID_SIZE,
}: FloatingGridProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = rows * cols;
  const tempObject = useMemo(() => new THREE.Object3D(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  const { offsets, basePositions } = useMemo(() => {
    const o = new Float32Array(count);
    const bp = new Float32Array(count * 3);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const idx = i * cols + j;
        o[idx] = Math.random() * Math.PI * 2;
        const i3 = idx * 3;
        bp[i3] = (j - (cols - 1) / 2) * SPACING;
        bp[i3 + 1] = 0;
        bp[i3 + 2] = (i - (rows - 1) / 2) * SPACING;
      }
    }
    return { offsets: o, basePositions: bp };
  }, [rows, cols, count]);

  const colorArray = useMemo(() => {
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      tempColor
        .copy(ACCENT_COLOR)
        .multiplyScalar(0.3 + Math.random() * 0.7)
        .toArray(colors, i * 3);
    }
    return colors;
  }, [count, tempColor]);

  const pointer = useThree((state) => state.pointer);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = basePositions[i3] ?? 0;
      const bz = basePositions[i3 + 2] ?? 0;
      const offset = offsets[i] ?? 0;

      const mouseInfluenceX = pointer.x * 0.3;
      const mouseInfluenceY = pointer.y * 0.3;

      const floatY = Math.sin(time * 0.8 + offset) * 0.2;

      tempObject.position.set(
        bx + mouseInfluenceX * 0.1,
        floatY + mouseInfluenceY * 0.1,
        bz,
      );
      tempObject.rotation.set(
        time * 0.3 + offset,
        time * 0.2 + offset,
        0,
      );
      tempObject.scale.setScalar(
        0.8 + Math.sin(time + offset) * 0.2,
      );
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Set initial instance colors
  useMemo(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      tempColor.fromArray(colorArray, i * 3);
      meshRef.current.setColorAt(i, tempColor);
    }
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [count, colorArray, tempColor]);

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
    >
      <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
      <meshStandardMaterial
        color={ACCENT_COLOR}
        transparent
        opacity={0.4}
        toneMapped={false}
      />
    </instancedMesh>
  );
}
