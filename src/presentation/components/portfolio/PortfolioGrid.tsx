"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
} from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] as const, delay: i * 0.06 },
  }),
};

const CATEGORY_BADGE: Record<PortfolioCategory, { bg: string; color: string }> = {
  multipages: { bg: "rgba(73,143,109,0.14)", color: "#498f6d" },
  onepage: { bg: "rgba(133,53,62,0.14)", color: "#85353e" },
  ecommerce: { bg: "rgba(59,130,246,0.14)", color: "#60a5fa" },
  international: { bg: "rgba(168,85,247,0.14)", color: "#c084fc" },
};

export function PortfolioGrid({ initialFilter = "all" }: { initialFilter?: PortfolioCategory | "all" }) {
  const filtered =
    initialFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === initialFilter);

  return (
    <section style={{ backgroundColor: "#0C0C0C" }} className="pb-20 pt-10">
      <Container>
        {/* Séparateur */}
        <div
          className="mb-10 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const badge = CATEGORY_BADGE[project.category];
              return (
                <motion.article
                  key={project.id}
                  layout
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="group relative flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Preview image */}
                  {project.previewImage && (
                    <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.previewImage}
                        alt={`Preview ${project.name}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ opacity: 0.85 }}
                      />
                    </div>
                  )}

                  {/* Category badge + year */}
                  <div className="mb-3.5 flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold"
                      style={{ backgroundColor: badge.bg, color: badge.color }}
                    >
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <p
                      className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.30)" }}
                    >
                      {project.sector}
                    </p>
                    <h2
                      className="font-heading text-base font-bold transition-colors group-hover:text-[#498f6d]"
                      style={{ color: "#FFFFFF" }}
                    >
                      {project.name}
                    </h2>
                    <p
                      className="mt-2 flex-1 text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.42)" }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Service tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded-md px-2 py-0.5 text-xs"
                          style={{
                            border: "1px solid rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.38)",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Key result */}
                    {project.results[0] && (
                      <p
                        className="mt-4 border-t pt-4 text-xs font-semibold"
                        style={{
                          borderColor: "rgba(255,255,255,0.06)",
                          color: "#498f6d",
                        }}
                      >
                        {project.results[0]}
                      </p>
                    )}

                    {/* Links */}
                    <div className="mt-4 flex items-center gap-4">
                      <Link
                        href={`/realisations/${project.slug}/`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      >
                        Voir le projet
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                      {project.externalUrl && (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          Visiter
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <p
          className="mt-8 text-center text-xs"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiché
          {filtered.length > 1 ? "s" : ""}
        </p>
      </Container>
    </section>
  );
}
