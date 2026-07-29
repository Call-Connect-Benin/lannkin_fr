"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_SECTOR_FILTERS,
  getSectorSlug,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as const,
      delay: i * 0.04,
    },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.24, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.18, ease: "easeInOut" as const },
  },
};

const CATEGORY_BADGE: Record<PortfolioCategory, { bg: string; color: string }> = {
  multipages: { bg: "rgba(73,143,109,0.14)", color: "#2d2d2d" },
  onepage: { bg: "rgba(133,53,62,0.14)", color: "#85353e" },
  ecommerce: { bg: "rgba(59,130,246,0.14)", color: "#2563eb" },
  international: { bg: "rgba(168,85,247,0.14)", color: "#7c3aed" },
};

const CATEGORY_TABS: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "multipages", label: "Multipages" },
  { id: "onepage", label: "Onepage" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "international", label: "International" },
];

const SERVICE_HREF_MAP: Record<string, string> = {
  "Conception Web": "/services/conception-web/",
  SEO: "/services/seo/",
  "Google Ads": "/services/google-ads/",
  "Facebook Ads": "/services/facebook-ads/",
  "TikTok Ads": "/services/tiktok-ads/",
  "LinkedIn Ads": "/services/linkedin-ads/",
  "Bing Ads": "/services/bing-ads/",
  "Amazon Ads": "/services/amazon-ads/",
  "Native Ads": "/services/native-ads/",
  Graphisme: "/services/graphisme/",
  "Modélisation 3D": "/services/sites-immersifs-3d/",
  "Montage Vidéo": "/services/montage-video/",
  "Google My Business": "/services/google-my-business/",
  "Vibe Coding": "/services/vibe-coding/",
  Odoo: "/services/odoo/",
  "Lead Generation": "/services/lead-generation/",
};

interface ServiceTag {
  label: string;
  href: string | null;
}

function resolveConceptionWebTag(project: PortfolioProject): ServiceTag {
  const techs = project.technologies.map((tech) => tech.toLowerCase());

  if (techs.some((tech) => tech.includes("shopify"))) {
    return { label: "Shopify", href: "/services/conception-web/site-shopify/" };
  }
  if (techs.some((tech) => /next\.?js/.test(tech))) {
    return { label: "Next.js", href: "/services/conception-web/site-nextjs/" };
  }
  if (techs.some((tech) => /sanity|strapi|contentful/.test(tech))) {
    return {
      label: "Headless CMS",
      href: "/services/conception-web/site-headless-cms/",
    };
  }
  if (techs.some((tech) => /wordpress|woocommerce|elementor/.test(tech))) {
    return {
      label: "WordPress",
      href: "/services/conception-web/site-wordpress/",
    };
  }
  return { label: "Conception Web", href: "/services/conception-web/" };
}

function resolveModelisation3dTag(project: PortfolioProject): ServiceTag {
  const techs = project.technologies.map((tech) => tech.toLowerCase());

  if (techs.some((tech) => /webgl|glb|gltf/.test(tech))) {
    return {
      label: "WebGL / GLB",
      href: "/services/sites-immersifs-3d/experience-webgl/",
    };
  }
  if (techs.some((tech) => /three\.?js|r3f|react three fiber/.test(tech))) {
    return {
      label: "Three.js",
      href: "/services/sites-immersifs-3d/site-threejs/",
    };
  }
  return { label: "Modélisation 3D", href: "/services/sites-immersifs-3d/" };
}

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
  showFilters?: boolean;
  showQuickView?: boolean;
  showTopDivider?: boolean;
}

function ProjectQuickView({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const badge = CATEGORY_BADGE[project.category];
  const tags = project.services.slice(0, 4).map((service) => resolveServiceTag(service, project));

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(17,17,17,0.42)] px-4 py-6 backdrop-blur-[6px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,245,240,0.98) 100%)",
            borderColor: "rgba(45,45,45,0.10)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.18)",
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fiche projet"
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(45,45,45,0.10)] bg-white/88 text-[#2d2d2d] transition-colors hover:text-accent"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="max-h-[92vh] overflow-y-auto">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[300px] bg-[#ede9e1]">
                {project.previewImage ? (
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src={project.previewImage}
                      alt={`Preview ${project.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                  </div>
                ) : null}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ backgroundColor: badge.bg, color: badge.color }}
                  >
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1 text-[11px] font-medium text-[#2d2d2d]/56">
                    {project.year}
                  </span>
                  <span className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1 text-[11px] font-medium text-[#2d2d2d]/56">
                    {project.sector}
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.02] text-[#2d2d2d] sm:text-4xl">
                  {project.name}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-[#2d2d2d]/72">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white/78 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/72">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white/78 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/72">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-[#ede9e1]/72 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    Resultats
                  </p>
                  <ul className="mt-3 space-y-2">
                    {project.results.map((result) => (
                      <li key={result} className="text-sm leading-relaxed text-[#2d2d2d]/76">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) =>
                    tag.href ? (
                      <Link
                        key={`${project.id}-${tag.label}`}
                        href={tag.href}
                        className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1.5 text-xs font-medium text-[#2d2d2d]/72 transition-colors hover:border-accent/30 hover:text-accent"
                      >
                        {tag.label}
                      </Link>
                    ) : (
                      <span
                        key={`${project.id}-${tag.label}`}
                        className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1.5 text-xs font-medium text-[#2d2d2d]/72"
                      >
                        {tag.label}
                      </span>
                    ),
                  )}
                </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href={`/realisations/${project.slug}/`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                          >
                            Voir le projet
                          </Link>
                          {project.externalUrl ? (
                            <a
                              href={project.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/80 px-5 py-3.5 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                            >
                              Visiter
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : null}
                        </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PortfolioGrid({
  initialFilter = "all",
  initialSectorFilter,
  showFilters = false,
  showQuickView = true,
  showTopDivider = true,
}: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "all">(initialFilter);
  const [activeSector, setActiveSector] = useState<string>(initialSectorFilter ?? "all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filtered = PORTFOLIO_PROJECTS.filter((project) => {
    const categoryOk = activeCategory === "all" || project.category === activeCategory;
    const sectorOk = activeSector === "all" || getSectorSlug(project.sector) === activeSector;
    return categoryOk && sectorOk;
  });

  return (
    <>
      <section style={{ backgroundColor: "#f7f5f0" }} className="pb-20 pt-8 lg:pb-24">
        <Container>
          {showTopDivider && (
            <div
              className="mb-8 h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)",
              }}
            />
          )}

          {showFilters && (
            <div className="mb-10 space-y-3">
              <div className="flex flex-wrap gap-2">
                {CATEGORY_TABS.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveCategory(tab.id);
                        setActiveSector("all");
                      }}
                      className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                      style={
                        isActive
                          ? { backgroundColor: "#498f6d", color: "#fff" }
                          : {
                              backgroundColor: "rgba(255,255,255,0.78)",
                              color: "#6B7280",
                              border: "1px solid rgba(45,45,45,0.10)",
                            }
                      }
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSector("all")}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200"
                  style={
                    activeSector === "all"
                      ? {
                          backgroundColor: "rgba(73,143,109,0.18)",
                          color: "#2d2d2d",
                          border: "1px solid rgba(73,143,109,0.28)",
                        }
                      : {
                          backgroundColor: "rgba(255,255,255,0.7)",
                          color: "#6B7280",
                          border: "1px solid rgba(45,45,45,0.10)",
                        }
                  }
                >
                  Tous les secteurs
                </button>
                {PORTFOLIO_SECTOR_FILTERS.map((sector) => (
                  <Link
                    key={sector.slug}
                    href={sector.href}
                    className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.7)",
                      color: "#6B7280",
                      border: "1px solid rgba(45,45,45,0.10)",
                    }}
                  >
                    {sector.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => {
                const tags = project.services.slice(0, 3).map((service) => resolveServiceTag(service, project));
                const openProject = showQuickView
                  ? () => setSelectedProject(project)
                  : undefined;

                return (
                  <motion.article
                    key={project.id}
                    layout
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/24 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    {showQuickView ? (
                      <button
                        type="button"
                        onClick={openProject}
                        className="relative block aspect-[4/3] w-full overflow-hidden text-left"
                        aria-label={`Ouvrir la fiche du projet ${project.name}`}
                      >
                        {project.previewImage ? (
                          <>
                            <Image
                              src={project.previewImage}
                              alt={`Preview ${project.name}`}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                          </>
                        ) : null}
                      </button>
                    ) : (
                      <Link
                        href={`/realisations/${project.slug}/`}
                        className="relative block aspect-[4/3] w-full overflow-hidden text-left"
                        aria-label={`Voir le projet ${project.name}`}
                      >
                        {project.previewImage ? (
                          <>
                            <Image
                              src={project.previewImage}
                              alt={`Preview ${project.name}`}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                          </>
                        ) : null}
                      </Link>
                    )}

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        <span
                          className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent"
                          style={{ backgroundColor: "rgba(73,143,109,0.12)" }}
                        >
                          {project.categoryLabel}
                        </span>
                        <span className="ml-auto text-[11px] font-medium text-[#2d2d2d]/48">
                          {project.year}
                        </span>
                      </div>

                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2d2d2d]/56">
                        {project.sector}
                      </p>

                      {showQuickView ? (
                        <button type="button" onClick={openProject} className="mt-1.5 block text-left">
                          <h2 className="font-heading text-xl font-bold leading-tight text-[#2d2d2d] transition-colors group-hover:text-accent">
                            {project.name}
                          </h2>
                        </button>
                      ) : (
                        <Link href={`/realisations/${project.slug}/`} className="mt-1.5 block text-left">
                          <h2 className="font-heading text-xl font-bold leading-tight text-[#2d2d2d] transition-colors hover:text-accent">
                            {project.name}
                          </h2>
                        </Link>
                      )}

                      <p className="mt-2.5 text-sm leading-relaxed text-[#2d2d2d]/68">
                        {project.shortDescription}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {tags.map((tag) =>
                          tag.href ? (
                            <Link
                              key={`${project.id}-${tag.label}`}
                              href={tag.href}
                              className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-2.5 py-1 text-[11px] font-medium text-[#2d2d2d]/72 transition-all duration-200 hover:border-accent/30 hover:text-accent"
                            >
                              {tag.label}
                            </Link>
                          ) : (
                            <span
                              key={`${project.id}-${tag.label}`}
                              className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-2.5 py-1 text-[11px] font-medium text-[#2d2d2d]/72"
                            >
                              {tag.label}
                            </span>
                          ),
                        )}
                      </div>

                      <div
                        className="mt-4 border-t pt-3 text-sm font-medium text-accent"
                        style={{ borderColor: "rgba(45,45,45,0.08)" }}
                      >
                        {project.results[0] ?? "Projet livré avec une exécution soignée."}
                      </div>

                      <div className="mt-3 flex items-center gap-4 text-sm">
                        {showQuickView ? (
                          <button
                            type="button"
                            onClick={openProject}
                            className="inline-flex items-center gap-1.5 font-semibold text-[#2d2d2d] transition-colors hover:text-accent"
                          >
                            Voir le projet
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        ) : (
                          <Link
                            href={`/realisations/${project.slug}/`}
                            className="inline-flex items-center gap-1.5 font-semibold text-[#2d2d2d] transition-colors hover:text-accent"
                          >
                            Voir le projet
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                        {project.externalUrl ? (
                          <a
                            href={project.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#2d2d2d]/52 transition-colors hover:text-[#2d2d2d]"
                          >
                            Visiter
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <p className="mt-8 text-center text-xs text-[#6B7280]">
            {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiche
            {filtered.length > 1 ? "s" : ""}
          </p>
        </Container>
      </section>

      {showQuickView && selectedProject ? (
        <ProjectQuickView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  );
}
