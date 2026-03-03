"use client";

import { type ReactNode, type ElementType } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type GlowTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

const colorMap: Record<string, string> = {
  accent: "#498f6d",
  "accent-secondary": "#85353e",
  white: "#FFFFFF",
  muted: "#888888",
};

interface GlowTextProps {
  children: ReactNode;
  as?: GlowTag;
  className?: string;
  color?: keyof typeof colorMap | string;
}

export function GlowText({
  children,
  as: Tag = "span",
  className,
  color = "accent",
}: GlowTextProps) {
  const resolvedColor = colorMap[color] ?? color;
  const MotionTag = motion.create(Tag as ElementType);

  return (
    <MotionTag
      className={cn("relative inline-block", className)}
      style={{ color: resolvedColor }}
      animate={{
        textShadow: [
          `0 0 8px ${resolvedColor}40, 0 0 20px ${resolvedColor}20`,
          `0 0 16px ${resolvedColor}80, 0 0 40px ${resolvedColor}40, 0 0 60px ${resolvedColor}20`,
          `0 0 8px ${resolvedColor}40, 0 0 20px ${resolvedColor}20`,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </MotionTag>
  );
}
