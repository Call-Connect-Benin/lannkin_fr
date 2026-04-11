"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_SECTOR_FILTERS,
  getSectorSlug,
  type PortfolioCategory,
  type PortfolioProject,
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

const CATEGORY_TABS: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "multipages", label: "Multipages" },
  { id: "onepage", label: "Onepage" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "international", label: "International" },
];

// Map nom de service (générique) → href de hub /services/{slug}/
// Utilisé comme fallback quand on n'a pas de sous-service plus précis.
const SERVICE_HREF_MAP: Record<string, string> = {
  "Conception Web": "/services/conception-web/",
  "SEO": "/services/seo/",
  "Google Ads": "/services/google-ads/",
  "Facebook Ads": "/services/facebook-ads/",
  "TikTok Ads": "/services/tiktok-ads/",
  "LinkedIn Ads": "/services/linkedin-ads/",
  "Bing Ads": "/services/bing-ads/",
  "Amazon Ads": "/services/amazon-ads/",
  "Native Ads": "/services/native-ads/",
  "Graphisme": "/services/graphisme/",
  "Modélisation 3D": "/services/sites-immersifs-3d/",
  "Montage Vidéo": "/services/montage-video/",
  "Google My Business": "/services/google-my-business/",
  "Vibe Coding": "/services/vibe-coding/",
  "Odoo": "/services/odoo/",
  "Lead Generation": "/services/lead-generation/",
};

interface ServiceTag {
  label: string;
  href: string | null;
}

/**
 * Résout le tag "Conception Web" vers la sous-page la plus précise possible
 * en analysant les technologies du projet.
 */
function resolveConceptionWebTag(project: PortfolioProject): ServiceTag {
  const techs = project.technologies.map((t) => t.toLowerCase());

  if (techs.some((t) => t.includes("shopify"))) {
    return { label: "Shopify", href: "/services/conception-web/site-shopify/" };
  }
  if (techs.some((t) => /next\.?js/.test(t))) {
    return { label: "Next.js", href: "/services/conception-web/site-nextjs/" };
  }
  if (techs.some((t) => /sanity|strapi|contentful/.test(t))) {
    return { label: "Headless CMS", href: "/services/conception-web/site-headless-cms/" };
  }
  if (techs.some((t) => /wordpress|woocommerce|elementor/.test(t))) {
    return { label: "WordPress", href: "/services/conception-web/site-wordpress/" };
  }
  return { label: "Conception Web", href: "/services/conception-web/" };
}

/**
 * Résout "Modélisation 3D" vers la sous-page 3D la plus précise.
 */
function resolveModelisation3dTag(project: PortfolioProject): ServiceTag {
  const techs = project.technologies.map((t) => t.toLowerCase());

  if (techs.some((t) => /webgl|glb|gltf/.test(t))) {
    return { label: "WebGL / GLB", href: "/services/sites-immersifs-3d/experience-webgl/" };
  }
  if (techs.some((t) => /three\.?js|r3f|react three fiber/.test(t))) {
    return { label: "Three.js", href: "/services/sites-immersifs-3d/site-threejs/" };
  }
  if (techs.some((t) => t.includes("blender"))) {
    return { label: "Modélisation 3D", href: "/services/sites-immersifs-3d/" };
  }
  return { label: "Modélisation 3D", href: "/services/sites-immersifs-3d/" };
}

/**
 * Transforme le nom générique d'un service en tag contextuel (label + href précis).
 */
function resolveServiceTag(serviceName: string, project: PortfolioProject): ServiceTag {
  if (serviceName === "Conception Web") {
    return resolveConceptionWebTag(project);
  }
  if (serviceName === "Modélisation 3D") {
    return resolveModelisation3dTag(project);
  }
  return {
    label: serviceName,
    href: SERVICE_HREF_MAP[serviceName] ?? null,
  };
}

interface PortfolioGridProps {
  initialFilter?: PortfolioCategory | "all";
  initialSectorFilter?: string;
  /** Show interactive filter tabs (main page). Default: false */
  showFilters?: boolean;
}

export function PortfolioGrid({
  initialFilter = "all",
  initialSectorFilter,
  showFilters = false,
}: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "all">(initialFilter);
  const [activeSector, setActiveSector] = useState<string>(initialSectorFilter ?? "all");

  const filtered = PORTFOLIO_PROJECTS.filter((p) => {
    const categoryOk = activeCategory === "all" || p.category === activeCategory;
    const sectorOk = activeSector === "all" || getSectorSlug(p.sector) === activeSector;
    return categoryOk && sectorOk;
  });

  return (
    <section style={{ backgroundColor: "#0C0C0C" }} className="pb-20 pt-10">
      <Container>
        {/* Séparateur */}
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        {/* Filter tabs — shown only on main page */}
        {showFilters && (
          <div className="mb-8 space-y-4">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveCategory(tab.id); setActiveSector("all"); }}
                    className="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200"
                    style={
                      isActive
                        ? { backgroundColor: "#498f6d", color: "#fff" }
                        : { backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.07)" }
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Sector tags — rendered as <Link> for SEO crawlability */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSector("all")}
                className="rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200"
                style={
                  activeSector === "all"
                    ? { backgroundColor: "rgba(73,143,109,0.2)", color: "#498f6d", border: "1px solid rgba(73,143,109,0.3)" }
                    : { backgroundColor: "transparent", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.07)" }
                }
              >
                Tous les secteurs
              </button>
              {PORTFOLIO_SECTOR_FILTERS.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200"
                  style={{ backgroundColor: "transparent", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        )}

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
                  {/* Preview image — cliquable vers la page projet */}
                  {project.previewImage && (
                    <Link
                      href={`/realisations/${project.slug}/`}
                      aria-label={`Voir le projet ${project.name}`}
                      className="relative mb-4 block aspect-video w-full overflow-hidden rounded-xl"
                    >
                      <Image
                        src={project.previewImage}
                        alt={`Preview ${project.name}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ opacity: 0.85 }}
                      />
                    </Link>
                  )}

                  {/* Category badge + year */}
                  <div className="mb-3.5 flex items-center justify-between">
                    <Link
                      href={`/realisations/${project.category}/`}
                      aria-label={`Voir toutes les réalisations ${project.categoryLabel}`}
                      className="rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold transition-all duration-200 hover:brightness-125"
                      style={{ backgroundColor: badge.bg, color: badge.color }}
                    >
                      {project.categoryLabel}
                    </Link>
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

                    {/* Service tags — enrichis selon la tech du projet, cliquables vers la sous-page la plus précise */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map((s) => {
                        const tag = resolveServiceTag(s, project);
                        if (tag.href) {
                          return (
                            <Link
                              key={s}
                              href={tag.href}
                              aria-label={`Voir le service ${tag.label}`}
                              className="rounded-md px-2 py-0.5 text-xs transition-all duration-200 hover:border-[rgba(73,143,109,0.40)] hover:text-[#498f6d]"
                              style={{
                                border: "1px solid rgba(255,255,255,0.10)",
                                color: "rgba(255,255,255,0.50)",
                              }}
                            >
                              {tag.label}
                            </Link>
                          );
                        }
                        return (
                          <span
                            key={s}
                            className="rounded-md px-2 py-0.5 text-xs"
                            style={{
                              border: "1px solid rgba(255,255,255,0.07)",
                              color: "rgba(255,255,255,0.38)",
                            }}
                          >
                            {tag.label}
                          </span>
                        );
                      })}
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
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:text-[#498f6d]"
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
                          className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:text-white"
                          style={{ color: "rgba(255,255,255,0.40)" }}
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
