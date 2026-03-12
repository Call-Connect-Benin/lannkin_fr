"use client";

import { useRef } from "react";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = "#498f6d";

type Category = string;

function ServiceGeometry({ category }: { category: Category }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.35;
    meshRef.current.rotation.x += delta * 0.12;
  });

  const geo = (() => {
    switch (category) {
      case "conception-web":
        return <boxGeometry args={[1.8, 1.8, 1.8]} />;
      case "vibe-coding":
        return <icosahedronGeometry args={[1.6, 2]} />;
      case "odoo":
        return <dodecahedronGeometry args={[1.6, 0]} />;
      case "google-ads":
        return <octahedronGeometry args={[1.6, 0]} />;
      case "facebook-ads":
        return <icosahedronGeometry args={[1.6, 0]} />;
      case "native-ads":
        return <dodecahedronGeometry args={[1.5, 0]} />;
      case "reseaux-sociaux":
        return <torusKnotGeometry args={[1.1, 0.35, 80, 12]} />;
      case "seo":
        return <icosahedronGeometry args={[1.6, 1]} />;
      case "google-my-business":
        return <coneGeometry args={[1.2, 2.4, 6, 1]} />;
      case "graphisme":
        return <tetrahedronGeometry args={[1.8, 0]} />;
      case "montage-video":
        return <torusGeometry args={[1.2, 0.5, 20, 40]} />;
      default:
        return <icosahedronGeometry args={[1.6, 1]} />;
    }
  })();

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
      <mesh ref={meshRef}>
        {geo}
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.9} />
      </mesh>
    </Float>
  );
}

export function ServiceHeroScene({ category }: { category: Category }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} color={ACCENT} intensity={1.5} />
      <pointLight position={[-3, -3, -3]} color={ACCENT} intensity={0.4} />
      <ServiceGeometry category={category} />
    </>
  );
}
