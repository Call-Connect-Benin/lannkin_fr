"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeInUp } from "@/presentation/animations/variants";

import { Badge } from "./Badge";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant="default" size="sm">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}
