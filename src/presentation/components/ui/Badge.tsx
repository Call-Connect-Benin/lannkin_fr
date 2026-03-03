"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const variants = {
  default: "bg-accent/15 text-accent border border-accent/20",
  secondary:
    "bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/20",
  outline: "bg-transparent text-white border border-white/20",
  muted: "bg-muted/15 text-muted border border-muted/20",
} as const;

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
} as const;

type BadgeVariant = keyof typeof variants;
type BadgeSize = keyof typeof sizes;

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  className,
  children,
}: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center rounded-full font-mono font-medium leading-none whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.span>
  );
}
