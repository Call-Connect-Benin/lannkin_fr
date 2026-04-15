"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  before: string;
  after: string;
}

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  metrics: Metric[];
  className?: string;
}

export function CaseStudyCard({
  title,
  industry,
  description,
  metrics,
  className,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-surface/50 p-6 lg:p-8",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
        style={{ borderColor: "rgba(73,143,109,0.3)", color: "#fff" }}>
        {industry}
      </div>
      <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {metrics.map((metric, i) => (
          <div key={i} className="rounded-lg bg-black/30 px-4 py-3">
            <p className="text-xs text-muted">{metric.label}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm text-white/50 line-through">
                {metric.before}
              </span>
              <ArrowUpRight className="h-3 w-3 text-accent" />
              <span className="font-heading text-lg font-bold text-accent">
                {metric.after}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
