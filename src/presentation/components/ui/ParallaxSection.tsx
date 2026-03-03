"use client";

/**
 * ParallaxBg — Absolutely positioned background image with parallax effect.
 * Drop inside any `relative overflow-hidden` section. Content next to it
 * needs `relative z-10` to sit above the overlay.
 */
export interface ParallaxBgProps {
  src: string;
  overlay?: number;
}

export function ParallaxBg({ src, overlay = 0.6 }: ParallaxBgProps) {
  return (
    <>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#0A0A0A", opacity: overlay }}
        aria-hidden="true"
      />
    </>
  );
}

/**
 * @deprecated Use ParallaxBg inside a section instead.
 */
export const ParallaxSection = ParallaxBg;
