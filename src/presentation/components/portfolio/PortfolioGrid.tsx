"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "@/presentation/components/ui/Container";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const CATEGORY_COLORS: Record<PortfolioCategory, string> = {
  multipages: "bg-accent/10 text-accent",
  onepage: "bg-[#85353e]/10 text-[#85353e]",
  ecommerce: "bg-blue-500/10 text-blue-600",
  international: "bg-purple-500/10 text-purple-500",
};

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | "all">("all");

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-surface pb-20 pt-12 lg:pb-28">
      <Container>
        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                activeFilter === cat.id
                  ? "bg-accent text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)]"
                  : "border border-white/[0.12] bg-surface text-white/70 hover:border-accent/30 hover:text-white",
              )}
            >
              {cat.label}
              {cat.id !== "all" && (
                <span className="ml-2 text-xs opacity-60">
                  ({PORTFOLIO_PROJECTS.filter((p) => p.category === cat.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-surface p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_8px_32px_rgba(73,143,109,0.06)]"
              >
                {/* Category badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold",
                      CATEGORY_COLORS[project.category],
                    )}
                  >
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-muted">{project.year}</span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                    {project.sector}
                  </p>
                  <h2 className="font-heading text-lg font-bold text-white">
                    {project.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.shortDescription}
                  </p>

                  {/* Services tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/[0.08] px-2 py-0.5 text-xs text-white/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Key result */}
                  {project.results[0] && (
                    <p className="mt-4 border-t border-white/[0.06] pt-4 text-sm font-semibold text-accent">
                      {project.results[0]}
                    </p>
                  )}

                  {/* Link */}
                  {project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-accent"
                    >
                      Visiter le site
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={`/realisations/${project.slug}/`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-accent"
                    >
                      Voir le projet
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <p className="mt-8 text-center text-sm text-muted">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiché
          {filtered.length > 1 ? "s" : ""}
        </p>
      </Container>
    </section>
  );
}
