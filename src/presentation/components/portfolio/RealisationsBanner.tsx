"use client";

import { CalendarDays, FolderOpen, MessageCircleMore, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "@/presentation/components/ui/Container";

export type RealisationCategory =
  | "tous"
  | "multipages"
  | "onepage"
  | "ecommerce"
  | "international";

interface RealisationsBannerProps {
  currentCategory: RealisationCategory;
  title: string;
  description: string;
}

const CATEGORIES: Array<{
  slug: RealisationCategory;
  label: string;
  href: string;
  featuredCount: number;
}> = [
  { slug: "tous", label: "Tous les projets", href: "/realisations/", featuredCount: 38 },
  { slug: "multipages", label: "Sites multipages", href: "/realisations/multipages/", featuredCount: 17 },
  { slug: "onepage", label: "Sites onepage", href: "/realisations/onepage/", featuredCount: 6 },
  { slug: "ecommerce", label: "E-commerce", href: "/realisations/ecommerce/", featuredCount: 7 },
  { slug: "international", label: "International", href: "/realisations/international/", featuredCount: 8 },
];

const HERO_STATS = [
  { icon: Star, value: "4,9/5", label: "sur Google" },
  { icon: FolderOpen, value: "38", label: "projets réalisés" },
  { icon: CalendarDays, value: "+10 ans", label: "d'expérience" },
] as const;

function getCategoryCount(slug: RealisationCategory): number {
  if (slug === "tous") return PORTFOLIO_PROJECTS.length;
  return PORTFOLIO_PROJECTS.filter((project) => project.category === slug).length;
}

function getHeroCount(slug: RealisationCategory): number {
  const category = CATEGORIES.find((item) => item.slug === slug);
  return category?.featuredCount ?? getCategoryCount(slug);
}

export function RealisationsBanner({
  currentCategory,
  title,
  description,
}: RealisationsBannerProps) {
  const projectCount = getHeroCount(currentCategory);
  const isRootPage = currentCategory === "tous";

  return (
    <section
      className="relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      style={{ backgroundColor: "#f7f5f0" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-[-8%] top-[-10%] h-64 w-64 rounded-full blur-[110px] sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem]"
          style={{ background: "rgba(255,255,255,0.72)" }}
        />
        <div
          className="absolute right-[-12%] top-[10%] h-72 w-72 rounded-full blur-[120px] sm:h-[26rem] sm:w-[26rem] lg:h-[38rem] lg:w-[38rem]"
          style={{ background: "rgba(73,143,109,0.08)" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(520px,0.98fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(640px,1fr)]">
          <div className="max-w-[47rem]">
            {!isRootPage && (
              <nav
                className="mb-6 flex items-center gap-2 text-sm"
                style={{ color: "rgba(45,45,45,0.5)" }}
              >
                <Link
                  href="/realisations/"
                  className="transition-colors hover:text-[#2d2d2d]"
                  style={{ color: "inherit" }}
                >
                  Realisations
                </Link>
                <span>/</span>
                <span style={{ color: "rgba(45,45,45,0.76)" }}>{title}</span>
              </nav>
            )}

            <div
              className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm shadow-[0_10px_24px_rgba(73,143,109,0.08)] sm:px-5 sm:py-2.5 sm:text-[1.06rem]"
              style={{
                borderColor: "rgba(73,143,109,0.14)",
                background: "rgba(242,247,241,0.88)",
                color: "#2d2d2d",
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "#498f6d", boxShadow: "0 0 0 6px rgba(73,143,109,0.10)" }}
              />
              <span className="font-medium">
                {projectCount} projets <span className="mx-1.5 opacity-50">.</span> Paris, France
              </span>
            </div>

            <h1
              className="mt-8 max-w-[11ch] font-heading text-[3.25rem] font-bold leading-[0.95] tracking-[-0.055em] text-[#2d2d2d] sm:text-[4.5rem] lg:text-[5.3rem] xl:text-[6rem]"
            >
              {title}
            </h1>

            <div
              className="mt-7 h-[3px] w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(73,143,109,1) 0%, rgba(73,143,109,0.22) 100%)",
              }}
            />

            <p
              className="mt-8 max-w-[38rem] text-lg leading-[1.65] text-[#5f6471] sm:text-[1.55rem] lg:text-[1.08rem] xl:text-[1.12rem]"
            >
              {description}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-[42rem]">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="flex min-h-[6.25rem] items-center gap-4 rounded-[1.35rem] border px-5 py-4 shadow-[0_14px_34px_rgba(45,45,45,0.04)]"
                    style={{
                      borderColor: "rgba(45,45,45,0.08)",
                      background: "rgba(255,255,255,0.74)",
                    }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                      style={{
                        border: "1px solid rgba(73,143,109,0.14)",
                        background: "linear-gradient(180deg, rgba(238,245,239,0.96) 0%, rgba(230,240,233,0.88) 100%)",
                      }}
                    >
                      <Icon className="h-5 w-5 text-[#498f6d]" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-heading text-[2rem] font-bold leading-none tracking-[-0.04em] text-[#2d2d2d]">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm leading-snug text-[#5f6471]">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projets"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-[1.05rem] px-7 text-base font-semibold text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "#498f6d",
                  boxShadow: "0 18px 40px rgba(73,143,109,0.22)",
                }}
              >
                Voir les projets
              </Link>
              <Link
                href="/devis-gratuit/"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-[1.05rem] border px-7 text-base font-semibold transition-colors duration-200 hover:border-[#498f6d] hover:text-[#498f6d]"
                style={{
                  borderColor: "rgba(73,143,109,0.45)",
                  background: "rgba(255,255,255,0.62)",
                  color: "#498f6d",
                }}
              >
                Parler de votre projet
                <MessageCircleMore className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[48rem] lg:max-w-none">
            <div className="relative aspect-[770/894] min-h-[19rem] w-full sm:min-h-[24rem] lg:min-h-[39rem]">
              <Image
                src="/images/visuel_realisations_lannkin.png"
                alt="Selection de projets Lannkin"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-8 h-px w-full sm:mt-10 lg:mt-12"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(45,45,45,0.12) 14%, rgba(45,45,45,0.12) 86%, transparent 100%)",
          }}
        />

        <div className="mt-6 flex flex-wrap gap-3">
          {CATEGORIES.map((category) => {
            const isActive = category.slug === currentCategory;
            const count = getHeroCount(category.slug);

            return (
              <Link
                key={category.slug}
                href={category.href}
                className={cn(
                  "inline-flex min-h-12 items-center rounded-full border px-5 text-sm font-semibold transition-all duration-200",
                  isActive && "shadow-[0_14px_28px_rgba(73,143,109,0.18)]",
                )}
                style={
                  isActive
                    ? {
                        backgroundColor: "#498f6d",
                        borderColor: "#498f6d",
                        color: "#ffffff",
                      }
                    : {
                        backgroundColor: "rgba(255,255,255,0.78)",
                        borderColor: "rgba(45,45,45,0.1)",
                        color: "#2d2d2d",
                      }
                }
              >
                {category.label} <span className="ml-1.5 opacity-80">({count})</span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
