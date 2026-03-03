"use client";

import { cn } from "@/lib/utils";

interface GrainOverlayProps {
  opacity?: number;
  className?: string;
}

export function GrainOverlay({ opacity = 0.05, className }: GrainOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50",
        className,
      )}
      style={{ opacity, mixBlendMode: "overlay" }}
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#grain-filter)"
        />
      </svg>
    </div>
  );
}
