"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "@/presentation/animations/variants";
import { useInView } from "@/presentation/hooks";
import { cn } from "@/lib/utils";

const variantMap: Record<VariantName, Variants> = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

type VariantName =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn";

interface AnimatedRevealProps {
  children: ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
}

export function AnimatedReveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  className,
}: AnimatedRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
