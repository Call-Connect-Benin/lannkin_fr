"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  href?: string;
}

export function Card({ className, children, hover = false, href }: CardProps) {
  const classes = cn(
    "glass rounded-xl p-6 transition-colors duration-300",
    hover && "hover:border-accent/20",
    className
  );

  const content = (
    <motion.div
      className={classes}
      {...(hover
        ? {
            whileHover: {
              scale: 1.02,
              boxShadow: "0 0 30px rgba(73, 143, 109, 0.1)",
            },
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }
        : {})}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
