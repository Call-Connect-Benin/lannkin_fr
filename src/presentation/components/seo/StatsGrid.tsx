"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
}

interface StatsGridProps {
  items: StatItem[];
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  }),
};

export function StatsGrid({ items, className }: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-4",
        className
      )}
    >
      {items.map((stat, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center rounded-xl border px-4 py-8 text-center"
          style={{
            borderColor: "rgba(45,45,45,0.08)",
            backgroundColor: "rgba(255,255,255,0.62)",
          }}
        >
          <span className="font-heading text-3xl font-bold text-accent lg:text-4xl">
            {stat.value}
          </span>
          <span className="mt-2 text-sm text-[#6B7280]">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
