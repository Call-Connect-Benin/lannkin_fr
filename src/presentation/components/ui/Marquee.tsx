"use client";

import { type ReactNode, useId } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = false,
  className,
}: MarqueeProps) {
  const id = useId();
  const animName = `marquee-${id.replace(/:/g, "")}`;
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={cn("group overflow-hidden", className)}
      aria-hidden="true"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes ${animName}{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`,
        }}
      />
      <div
        className={cn(
          "flex w-max gap-8",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{
          animation: `${animName} ${speed}s linear infinite`,
          animationDirection,
        }}
      >
        <div className="flex shrink-0 gap-8">{children}</div>
        <div className="flex shrink-0 gap-8">{children}</div>
      </div>
    </div>
  );
}
