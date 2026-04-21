"use client";

import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RealisationCategory = "tous" | "multipages" | "onepage" | "ecommerce" | "international";

interface RealisationsBannerProps {
  currentCategory: RealisationCategory;
  title: string;
  description: string;
  stats?: Array<{ value: string; label: string }>;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const CATEGORIES: Array<{ slug: RealisationCategory; label: string; href: string }> = [
  { slug: "tous", label: "Tous les projets", href: "/realisations/" },
  { slug: "multipages", label: "Sites multipages", href: "/realisations/multipages/" },
  { slug: "onepage", label: "Sites onepage", href: "/realisations/onepage/" },
  { slug: "ecommerce", label: "E-commerce", href: "/realisations/ecommerce/" },
  { slug: "international", label: "International", href: "/realisations/international/" },
];

const CATEGORY_3D: Record<RealisationCategory, string> = {
  tous: "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp",
  multipages: "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  onepage: "/images/rendu3D/rendu3d-cube-vert-rocket-embed.webp",
  ecommerce: "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
  international: "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
};

function getCategoryCount(slug: RealisationCategory): number {
  if (slug === "tous") return PORTFOLIO_PROJECTS.length;
  return PORTFOLIO_PROJECTS.filter((p) => p.category === slug).length;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function RealisationsBanner({
  currentCategory,
  title,
  description,
  stats,
}: RealisationsBannerProps) {
  const bg3d = CATEGORY_3D[currentCategory];

  return (
    <section
      className="relative overflow-hidden pb-14 pt-10"
      style={{ backgroundColor: "#f7f5f0" }}
    >
      {/* 3D background diagonal */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-y-0 right-0 w-[62%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bg3d}
            alt=""
            className="h-full w-full object-cover object-center"
            style={{ opacity: 0.13 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(108deg, #f7f5f0 16%, rgba(247,245,240,0.7) 38%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #f7f5f0 0%, transparent 20%, transparent 80%, #f7f5f0 100%)",
            }}
          />
        </div>
      </div>

      {/* Halo */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full blur-[130px] sm:h-[500px] sm:w-[500px]"
        style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
        aria-hidden
      />

      <Container className="relative z-10">
        {/* Breadcrumb — sous-catégories seulement */}
        {currentCategory !== "tous" && (
          <nav
            className="mb-5 flex items-center gap-2 text-sm"
            style={{ color: "rgba(45,45,45,0.45)" }}
          >
            <Link href="/realisations/" className="transition-colors hover:text-[#2d2d2d]" style={{ color: "inherit" }}>
              Réalisations
            </Link>
            <span>/</span>
            <span style={{ color: "rgba(45,45,45,0.75)" }}>{title}</span>
          </nav>
        )}

        {/* Badge */}
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
          style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
              style={{ backgroundColor: "#498f6d" }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
          </span>
          <span className="font-mono text-xs font-medium" style={{ color: "#2d2d2d" }}>
            {getCategoryCount(currentCategory)} projet{getCategoryCount(currentCategory) > 1 ? "s" : ""} · Paris, France
          </span>
        </div>

        {/* Title */}
        <h1
          className="max-w-2xl font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: "#2d2d2d" }}
        >
          {title}
        </h1>

        {/* Ligne déco */}
        <div
          className="mt-4 h-px w-14"
          style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
        />

        {/* Description */}
        <p
          className="mt-4 max-w-xl text-base leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          {description}
        </p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold" style={{ color: "#2d2d2d" }}>
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs" style={{ color: "#6B7280" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Filtres catégories */}
        <div
          className="mt-10 flex flex-wrap gap-2 border-t pt-6"
          style={{ borderColor: "rgba(45,45,45,0.10)" }}
        >
          {CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat.slug);
            const isActive = cat.slug === currentCategory;
            return (
              <Link
                key={cat.slug}
                href={cat.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                )}
                style={
                  isActive
                    ? { backgroundColor: "#498f6d", color: "#fff" }
                    : {
                        backgroundColor: "rgba(45,45,45,0.05)",
                        color: "#6B7280",
                        border: "1px solid rgba(45,45,45,0.10)",
                      }
                }
              >
                {cat.label}{" "}
                <span style={{ opacity: isActive ? 0.8 : 0.45 }}>({count})</span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
