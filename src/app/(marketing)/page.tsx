import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  HERO,
  SERVICES_OVERVIEW,
  STATS,
  WHY_LANNKIN,
  FEATURED_SERVICES,
  TESTIMONIALS,
  PRICING_PREVIEW,
  SECTORS_PREVIEW,
  BLOG_PREVIEW,
  CTA_SECTION,
} from "@/data/homepage";
import { GoogleMapsWidget } from "@/presentation/components/layout/GoogleMapsWidget";
import { LeadCaptureForm } from "@/presentation/components/forms/LeadCaptureForm";
import { Container } from "@/presentation/components/ui/Container";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import ShowcaseCards from "@/presentation/components/home/ShowcaseCards";


export const metadata: Metadata = {
  title: "Agence Marketing Digital Laval | Lannkin",
  description:
    "Agence marketing digital à Laval. SEO, Google Ads, conception web et IA pour PME québécoises. Devis gratuit, résultats concrets. Contactez Lannkin.",
};

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>

      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-16 pt-12 lg:pt-20">
        {/* 3D bg — diagonal right-side placement */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[62%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.22 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(108deg, #0C0C0C 16%, rgba(12,12,12,0.7) 38%, transparent 60%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, #0C0C0C 0%, transparent 18%, transparent 82%, #0C0C0C 100%)" }}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.08)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">

            {/* Copie */}
            <div className="lg:col-span-7">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#498f6d" }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
                </span>
                <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>{HERO.badge}</span>
              </div>

              <h1
                className="mt-2 font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]"
                style={{ color: "#FFFFFF" }}
              >
                On fait grandir les{" "}
                <span style={{ color: "#498f6d" }}>PME québécoises</span>{" "}
                sur le web.
              </h1>
              <div className="mt-5 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
              <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                {HERO.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={HERO.cta.primary.href}
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
                >
                  {HERO.cta.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={HERO.cta.secondary.href}
                  className="inline-flex items-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-medium transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.75)" }}
                >
                  {HERO.cta.secondary.label}
                </Link>
              </div>

              {/* Stats */}
              <div
                className="mt-10 grid grid-cols-2 gap-5 border-t pt-8 sm:grid-cols-4"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                {HERO.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-2xl font-bold" style={{ color: "#498f6d" }}>{stat.value}</div>
                    <div className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <GoogleMapsWidget variant="dark" />
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-6 lg:p-8"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <LeadCaptureForm
                  title="Obtenez votre devis gratuit"
                  subtitle="Réponse en moins de 24h par un expert Lannkin."
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SERVICES OVERVIEW
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {SERVICES_OVERVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {SERVICES_OVERVIEW.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-4 max-w-xl text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              {SERVICES_OVERVIEW.subtitle}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {SERVICES_OVERVIEW.categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <h3 className="mb-5 font-heading text-base font-bold" style={{ color: "#FFFFFF" }}>{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.services.map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        className="flex items-center gap-2.5 text-sm transition-colors hover:text-[#498f6d]"
                        style={{ color: "rgba(255,255,255,0.70)" }}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "rgba(73,143,109,0.55)" }} />
                        {svc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={SERVICES_OVERVIEW.cta.href}
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-semibold transition-all"
              style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.75)" }}
            >
              {SERVICES_OVERVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. STATS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[45%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-diamant-cubes-flottants.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.09 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #0C0C0C 60%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-12 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {STATS.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {STATS.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.items.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold" style={{ color: "#498f6d" }}>{stat.value}</div>
                <div className="mt-2 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. POURQUOI LANNKIN
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 left-0 w-[45%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-lateral-angle-2.webp"
              alt=""
              className="h-full w-full object-cover object-right"
              style={{ opacity: 0.10 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, #0C0C0C 60%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {WHY_LANNKIN.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {WHY_LANNKIN.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-4 max-w-xl text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              {WHY_LANNKIN.subtitle}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_LANNKIN.points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <LucideIcon name={point.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold" style={{ color: "#FFFFFF" }}>{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. SERVICES PHARES
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {FEATURED_SERVICES.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {FEATURED_SERVICES.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURED_SERVICES.services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                  >
                    <LucideIcon name={svc.icon} className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-2xl font-bold" style={{ color: "#498f6d" }}>{svc.stat.value}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>{svc.stat.label}</div>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold transition-colors group-hover:text-[#498f6d]" style={{ color: "#FFFFFF" }}>
                  {svc.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {svc.description}
                </p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ border: "1px solid rgba(73,143,109,0.25)" }} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6b. SHOWCASE CARDS (style Shopify Partners)
      ═══════════════════════════════════════════════════════ */}
      <ShowcaseCards />

      {/* ═══════════════════════════════════════════════════════
          7. TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[40%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-flatlay-fond-vert.webp"
              alt=""
              className="h-full w-full object-cover"
              style={{ opacity: 0.09 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #0C0C0C 55%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {TESTIMONIALS.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {TESTIMONIALS.title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{TESTIMONIALS.subtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {TESTIMONIALS.items.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div className="mb-4 flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#f59e0b" }}>★</span>
                  ))}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>{testimonial.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {testimonial.company} · {testimonial.sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7b. LOGOS + BADGES
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-16"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[55%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.28 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(105deg, #0C0C0C 20%, rgba(12,12,12,0.6) 42%, transparent 62%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, #0C0C0C 0%, transparent 18%, transparent 82%, #0C0C0C 100%)" }}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-[30%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(73, 143, 109, 0.07)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="mb-10 flex justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.30)", backgroundColor: "rgba(73,143,109,0.10)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ backgroundColor: "#498f6d" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
              </span>
              <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>
                Ils nous font confiance
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {Array.from({ length: 29 }, (_, i) => `logo-client-${String(i + 1).padStart(2, "0")}.png`).map((file) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={file}
                src={`/images/logo-client/${file}`}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-14 w-full object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.50)" }}>
              Certifications &amp; partenariats
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/badges/badge-google-partner.svg" alt="Google Partner" loading="lazy" decoding="async" className="h-12 w-auto rounded-lg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/badges/badge-facebook-partner.webp" alt="Meta Business Partner" loading="lazy" decoding="async" className="h-12 w-auto rounded-lg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/badges/badge-shopify-partner.webp" alt="Shopify Partner" loading="lazy" decoding="async" className="h-12 w-auto rounded-lg" />
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. PRICING PREVIEW
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {PRICING_PREVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {PRICING_PREVIEW.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              {PRICING_PREVIEW.subtitle}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {PRICING_PREVIEW.featured.map((plan) => {
              const highlighted = "highlighted" in plan && plan.highlighted;
              return (
                <Link
                  key={plan.name}
                  href={plan.href}
                  className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#141414",
                    border: highlighted ? "1px solid rgba(73,143,109,0.30)" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: highlighted ? "0 0 30px rgba(73,143,109,0.08)" : undefined,
                  }}
                >
                  {highlighted && (
                    <span
                      className="mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ backgroundColor: "rgba(73,143,109,0.14)", color: "#498f6d" }}
                    >
                      Populaire
                    </span>
                  )}
                  <div className="font-heading text-base font-bold" style={{ color: "#FFFFFF" }}>{plan.name}</div>
                  <div className="mt-2 font-heading text-2xl font-bold" style={{ color: "#498f6d" }}>{plan.price}</div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{plan.description}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ border: "1px solid rgba(73,143,109,0.22)" }} />
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={PRICING_PREVIEW.cta.href}
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-semibold transition-all"
              style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.75)" }}
            >
              {PRICING_PREVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. SECTEURS
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {SECTORS_PREVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {SECTORS_PREVIEW.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              {SECTORS_PREVIEW.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SECTORS_PREVIEW.featured.map((sector) => (
              <Link
                key={sector.name}
                href={sector.href}
                className="group flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.10)", color: "#498f6d" }}
                >
                  <LucideIcon name={sector.icon} className="h-5 w-5" />
                </div>
                <span
                  className="font-heading text-sm font-semibold transition-colors group-hover:text-[#498f6d]"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  {sector.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={SECTORS_PREVIEW.cta.href}
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-semibold transition-all"
              style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.75)" }}
            >
              {SECTORS_PREVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10. RESSOURCES
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[40%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-trio-cubes-flottants.webp"
              alt=""
              className="h-full w-full object-cover"
              style={{ opacity: 0.09 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #0C0C0C 55%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {BLOG_PREVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {BLOG_PREVIEW.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-4 max-w-xl text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              {BLOG_PREVIEW.subtitle}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {BLOG_PREVIEW.resources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.href}
                className="group flex gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors"
                  style={{ backgroundColor: "rgba(73,143,109,0.10)", color: "#498f6d" }}
                >
                  <LucideIcon name={resource.icon} className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <span
                      className="font-heading text-sm font-semibold transition-colors group-hover:text-[#498f6d]"
                      style={{ color: "#FFFFFF" }}
                    >
                      {resource.name}
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{ border: "1px solid rgba(73,143,109,0.25)", color: "#498f6d", backgroundColor: "rgba(73,143,109,0.08)" }}
                    >
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {resource.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={BLOG_PREVIEW.cta.href}
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-semibold transition-all"
              style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.75)" }}
            >
              {BLOG_PREVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          11. CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[55%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.22 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, #0C0C0C 18%, rgba(12,12,12,0.65) 40%, transparent 62%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0C0C0C 0%, transparent 20%, transparent 80%, #0C0C0C 100%)" }} />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
          aria-hidden
        />
        <Container className="relative z-10">
          <div
            className="mx-auto max-w-2xl rounded-2xl p-10 text-center sm:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(73,143,109,0.09) 0%, rgba(73,143,109,0.03) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              {CTA_SECTION.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {CTA_SECTION.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={CTA_SECTION.cta.primary.href}
                className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
              >
                {CTA_SECTION.cta.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={CTA_SECTION.cta.secondary.href}
                className="inline-flex items-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.70)" }}
              >
                {CTA_SECTION.cta.secondary.label}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              {CTA_SECTION.trust.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          12. ÉCOSYSTÈME
      ═══════════════════════════════════════════════════════ */}

    </main>
  );
}
