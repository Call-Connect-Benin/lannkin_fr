"use client";

import { useEffect, useRef, useCallback } from "react";

const FRAME_COUNT = 120;

function getFrameSrc(index: number) {
  const num = String(Math.min(Math.max(index, 1), FRAME_COUNT)).padStart(3, "0");
  return `/videos/frames-webp/frame-${num}.webp`;
}

export function HeroVideoScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  }, []);

  useEffect(() => {
    // Preload all frames
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      if (i === 1) {
        img.onload = () => drawFrame(0);
      }
      images.push(img);
    }
    imagesRef.current = images;

    const handleScroll = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight - window.innerHeight;
      const scrollProgress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);

      // Map scroll to frame index
      const frameIndex = Math.min(
        Math.floor(scrollProgress * FRAME_COUNT),
        FRAME_COUNT - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }

      // Fade out content during first 25% of scroll (visible at start, disappears as animation plays)
      if (content) {
        const fadeEnd = 0.25;
        const contentOpacity = Math.max(1 - scrollProgress / fadeEnd, 0);
        content.style.opacity = String(contentOpacity);
        content.style.transform = `translateY(${(1 - contentOpacity) * -20}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl px-4" style={{ height: "300vh" }}>
      <div className="sticky top-[15vh] overflow-hidden rounded-2xl" style={{ height: "60vh" }}>
        {/* Canvas for frame rendering */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ backgroundColor: "#f7f5f0" }}
        />

        {/* Light overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(247, 245, 240, 0.3)" }}
        />

        {/* Hero content fading in */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center"
          style={{ opacity: 1 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
