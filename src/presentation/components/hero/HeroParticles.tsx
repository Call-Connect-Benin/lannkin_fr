"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NUM = 120;
const DIST = 9;
const MAX_LINES = NUM * 6;

export function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = containerRef.current;
    if (!wrap) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a140b, 1);

    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    renderer.setSize(W, H);
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 0, 28);

    // Particles
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    const geo = new THREE.BufferGeometry();
    const posArr = new Float32Array(NUM * 3);
    const colArr = new Float32Array(NUM * 3);

    for (let i = 0; i < NUM; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 20;
      positions.push(new THREE.Vector3(x, y, z));
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.005
        )
      );
      posArr[i * 3] = x;
      posArr[i * 3 + 1] = y;
      posArr[i * 3 + 2] = z;
      const g = 0.4 + Math.random() * 0.6;
      colArr[i * 3] = 0.05;
      colArr[i * 3 + 1] = g;
      colArr[i * 3 + 2] = 0.1 + Math.random() * 0.2;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colArr, 3));

    const ptMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    scene.add(new THREE.Points(geo, ptMat));

    // Lines
    const lineGeo = new THREE.BufferGeometry();
    const linePosArr = new Float32Array(MAX_LINES * 6);
    const lineColArr = new Float32Array(MAX_LINES * 6);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePosArr, 3));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColArr, 3));
    lineGeo.setDrawRange(0, 0);
    scene.add(
      new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.35,
        })
      )
    );

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    wrap.addEventListener("mousemove", onMouseMove);

    let t = 0;
    let animId: number;

    function animate() {
      animId = requestAnimationFrame(animate);
      t += 0.005;

      for (let i = 0; i < NUM; i++) {
        positions[i].add(velocities[i]);
        if (Math.abs(positions[i].x) > 26) velocities[i].x *= -1;
        if (Math.abs(positions[i].y) > 16) velocities[i].y *= -1;
        if (Math.abs(positions[i].z) > 12) velocities[i].z *= -1;
        posArr[i * 3] = positions[i].x;
        posArr[i * 3 + 1] = positions[i].y;
        posArr[i * 3 + 2] = positions[i].z;
      }
      geo.attributes.position.needsUpdate = true;

      // Update lines
      let lineCount = 0;
      for (let i = 0; i < NUM && lineCount < MAX_LINES - 1; i++) {
        for (let j = i + 1; j < NUM && lineCount < MAX_LINES - 1; j++) {
          const d = positions[i].distanceTo(positions[j]);
          if (d < DIST) {
            const tVal = 1 - d / DIST;
            const idx = lineCount * 6;
            linePosArr[idx] = positions[i].x;
            linePosArr[idx + 1] = positions[i].y;
            linePosArr[idx + 2] = positions[i].z;
            linePosArr[idx + 3] = positions[j].x;
            linePosArr[idx + 4] = positions[j].y;
            linePosArr[idx + 5] = positions[j].z;
            lineColArr[idx] = 0.05;
            lineColArr[idx + 1] = 0.5 * tVal;
            lineColArr[idx + 2] = 0.05;
            lineColArr[idx + 3] = 0.05;
            lineColArr[idx + 4] = 0.5 * tVal;
            lineColArr[idx + 5] = 0.05;
            lineCount++;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;
      lineGeo.setDrawRange(0, lineCount * 2);

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      scene.rotation.y = Math.sin(t * 0.3) * 0.06;

      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      wrap.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      wrap.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto absolute inset-0"
      aria-hidden
    />
  );
}
