import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";
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
// Categories config (computed at module load — server-safe)
// ---------------------------------------------------------------------------

const CATEGORIES: Array<{ slug: RealisationCategory; label: string; href: string }> = [
  { slug: "tous", label: "Tous les projets", href: "/realisations/" },
  { slug: "multipages", label: "Sites multipages", href: "/realisations/multipages/" },
  { slug: "onepage", label: "Sites onepage", href: "/realisations/onepage/" },
  { slug: "ecommerce", label: "E-commerce", href: "/realisations/ecommerce/" },
  { slug: "international", label: "International", href: "/realisations/international/" },
];

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
  return (
    <section className="parallax-section relative overflow-hidden py-12 lg:py-16">
      <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.png" overlay={0.6} />
      <div className="relative z-10">
        <Container>
          <div className="max-w-3xl rounded-2xl bg-[#FFFFFF] p-6 shadow-xl sm:p-8">

            {/* Breadcrumb — hidden on root */}
            {currentCategory !== "tous" && (
              <nav className="mb-3 flex items-center gap-2 text-sm text-[#6B7280]">
                <Link href="/realisations/" className="transition-colors hover:text-accent">
                  Réalisations
                </Link>
                <span>/</span>
                <span className="text-[#1A1A1A] font-medium">{title}</span>
              </nav>
            )}

            {/* Title */}
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
              {description}
            </p>

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span className="font-bold text-accent">{stat.value}</span>
                    <span className="text-sm text-[#6B7280]">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Category navigation */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-[#E5E7EB] pt-5">
              {CATEGORIES.map((cat) => {
                const count = getCategoryCount(cat.slug);
                const isActive = cat.slug === currentCategory;
                return (
                  <Link
                    key={cat.slug}
                    href={cat.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-accent text-white shadow-md"
                        : "bg-[#F3F4F6] text-[#374151] hover:bg-accent/10 hover:text-accent"
                    )}
                  >
                    {cat.label}{" "}
                    <span className={cn("ml-1 text-xs", isActive ? "opacity-80" : "opacity-50")}>
                      ({count})
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
