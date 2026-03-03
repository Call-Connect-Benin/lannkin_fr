"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  staggerContainer,
  staggerItem,
} from "@/presentation/animations/variants";
import { useInView } from "@/presentation/hooks";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: string;
  category?: string;
}

interface TechStackProps {
  items: TechItem[];
  columns?: number;
  className?: string;
}

const columnClasses: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
};

export function TechStack({
  items,
  columns = 4,
  className,
}: TechStackProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const gridClass = columnClasses[columns] ?? columnClasses[4];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={cn("grid gap-4", gridClass, className)}
    >
      {items.map((item) => (
        <motion.div
          key={item.name}
          variants={staggerItem}
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass group flex flex-col items-center gap-3 rounded-xl p-6 transition-colors hover:border-accent/30"
        >
          <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={item.icon}
              alt={item.name}
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className="text-center font-body text-sm text-white">
            {item.name}
          </span>
          {item.category && (
            <span className="text-center font-mono text-xs text-muted">
              {item.category}
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
