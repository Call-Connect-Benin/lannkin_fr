import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  HERO,
  SERVICES_OVERVIEW,
  STATS,
  WHY_EKOLINK,
  FEATURED_SERVICES,
  TESTIMONIALS,
  PRICING_PREVIEW,
  SECTORS_PREVIEW,
  BLOG_PREVIEW,
  CTA_SECTION,
  PAID_LANDSCAPE,
  NATIVE_ADS,
  SHORT_FORM_VIDEO,
  COMMUNITY,
} from "@/data/homepage";
import { GoogleMapsWidget } from "@/presentation/components/layout/GoogleMapsWidget";
import { LeadCaptureForm } from "@/presentation/components/forms/LeadCaptureForm";
import { Container } from "@/presentation/components/ui/Container";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import ShowcaseCards from "@/presentation/components/home/ShowcaseCards";


export const metadata: Metadata = {
  title: "Agence Marketing Digital Paris | Ekolink",
  description:
    "Agence marketing digital basée à Paris. Référencement, Google Ads, création web et IA pour les PME françaises. Devis gratuit sous 24h, résultats mesurables. Parlons de votre projet avec Ekolink.",
};

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>

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
              style={{ background: "linear-gradient(108deg, #f7f5f0 16%, rgba(247,245,240,0.7) 38%, transparent 60%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, #f7f5f0 0%, transparent 18%, transparent 82%, #f7f5f0 100%)" }}
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Rue+Vulpian+75013+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 transition-colors hover:brightness-110"
                style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
                aria-label="Voir Ekolink sur Google Maps"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#498f6d" }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
                </span>
                <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>{HERO.badge}</span>
              </a>

              <h1
                className="mt-2 font-heading text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
                style={{ color: "#2d2d2d" }}
              >
                On accélère la croissance digitale{" "}
                des <span style={{ color: "#498f6d" }}>PME françaises</span>.
              </h1>
              <div className="mt-5 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
              <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                {HERO.subtitle}
              </p>

              <div className="mt-8 flex flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href={HERO.cta.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110 sm:px-7 sm:py-3.5"
                  style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
                >
                  {HERO.cta.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={HERO.cta.secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-colors sm:px-7 sm:py-3.5"
                  style={{ borderColor: "rgba(45,45,45,0.18)", color: "rgba(45,45,45,0.75)" }}
                >
                  {HERO.cta.secondary.label}
                </Link>
              </div>

              {/* Stats */}
              <div
                className="mt-10 grid grid-cols-2 gap-5 border-t pt-8 sm:grid-cols-4"
                style={{ borderColor: "rgba(45,45,45,0.12)" }}
              >
                {HERO.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-2xl font-bold" style={{ color: "#498f6d" }}>{stat.value}</div>
                    <div className="mt-0.5 text-xs" style={{ color: "rgba(45,45,45,0.55)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t pt-6" style={{ borderColor: "rgba(45,45,45,0.12)" }}>
                <GoogleMapsWidget variant="light" />
              </div>
            </div>

            {/* Formulaire */}
            <div className="-mx-4 sm:mx-0 lg:col-span-5">
              <LeadCaptureForm
                title="Recevez votre devis sur-mesure"
                subtitle="Une réponse personnalisée en moins de 24h par un expert de notre équipe."
              />
            </div>

          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. LOGOS + BADGES
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-16"
        style={{ backgroundColor: "#ede9e1" }}
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
              style={{ background: "linear-gradient(105deg, #ede9e1 20%, rgba(237,233,225,0.6) 42%, transparent 62%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, #ede9e1 0%, transparent 18%, transparent 82%, #ede9e1 100%)" }}
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
                Ils travaillent avec nous
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
                className="h-14 w-full object-contain opacity-60 brightness-0 transition-all duration-300 hover:opacity-100"
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 pt-10" style={{ borderTop: "1px solid rgba(45,45,45,0.10)" }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(45,45,45,0.40)" }}>
              Nos accréditations
            </span>
            {/* Google Partner */}
            <div className="flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ backgroundColor: "rgba(45,45,45,0.05)", border: "1px solid rgba(45,45,45,0.10)" }}>
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M45.5 24.5c0-1.5-.1-3-.4-4.5H24v8.5h12.1c-.5 2.7-2 5-4.3 6.5v5.4h7c4.1-3.8 6.7-9.4 6.7-15.9z"/>
                <path fill="#34A853" d="M24 46c6.1 0 11.2-2 14.9-5.5l-7-5.4c-2 1.3-4.5 2.1-7.9 2.1-6.1 0-11.2-4.1-13.1-9.6H3.6v5.6C7.3 41.1 15 46 24 46z"/>
                <path fill="#FBBC05" d="M10.9 27.6A14.8 14.8 0 0 1 10.9 20.4V14.8H3.6A22 22 0 0 0 2 24c0 3.5.8 6.8 2.3 9.7l7.6-6.1z"/>
                <path fill="#EA4335" d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.6-6.6C35.2 2.5 30 0 24 0 15 0 7.3 4.9 3.6 12.2l7.3 5.6C12.8 12.6 17.9 9.5 24 9.5z"/>
              </svg>
              <span className="text-sm font-semibold text-[#2d2d2d]">Google Partner</span>
            </div>
            {/* Meta Business Partner */}
            <div className="flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ backgroundColor: "rgba(45,45,45,0.05)", border: "1px solid rgba(45,45,45,0.10)" }}>
              <svg width="22" height="14" viewBox="0 0 60 38" aria-hidden="true" fill="none">
                <path d="M30 18.3C27 11.5 22.5 7 17.5 7 10.6 7 5 14.2 5 23c0 5.3 2.3 9 5.5 9 2.4 0 4.5-1.6 7.5-6.5l2.2-3.8c2.2-3.8 4.7-6 7.3-6.3C27.5 15.9 28.7 17 30 18.3z" fill="#0866FF"/>
                <path d="M30 18.3c1.3-1.3 2.5-2.4 3.5-3C36 15.8 38.5 18 40.8 21.7l2.2 3.8c3 4.9 5.1 6.5 7.5 6.5 3.2 0 5.5-3.7 5.5-9 0-8.8-5.6-16-12.5-16-5 0-9.5 4.5-12.5 11.3z" fill="#0866FF"/>
                <path d="M22.5 29.5C20 34.5 17.5 37 13.5 37c-5 0-8.5-5-8.5-14 0-8.8 5.6-16 12.5-16 5 0 9.5 4.5 12.5 11.3C30 18.3 33 11.5 42.5 7 49.4 7 55 14.2 55 23c0 9-3.5 14-8.5 14-4 0-6.5-2.5-9-7.5" stroke="#0866FF" strokeWidth="0" fill="#0866FF"/>
              </svg>
              <span className="text-sm font-semibold text-[#2d2d2d]">Meta Business Partner</span>
            </div>
            {/* Shopify Partners */}
            <div className="flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ backgroundColor: "rgba(45,45,45,0.05)", border: "1px solid rgba(45,45,45,0.10)" }}>
              <svg width="18" height="20" viewBox="0 0 50 57" aria-hidden="true" fill="none">
                <path d="M42.8 10.8c0-.3-.3-.5-.6-.5l-4.4-.4-.3-.3C36.1 8.2 34 7.5 32 7c-.4-1.2-1-2.3-1.8-3.2C28.8 2.2 27.2 1.5 25.4 1.5c-.1 0-.3 0-.4.1-.1-.1-.2-.2-.3-.3-1.1-1-2.5-1.3-4.1-.8-3.2 1-6.3 3.8-8.8 8.2-.8 1.5-1.5 3.1-2 4.7l-7.2 2.2c-2.1.7-2.2.7-2.4 2.7L.2 45.7 34.3 52 50 48.4 42.8 10.8z" fill="#95BF47"/>
                <path d="M32 7c-.4-1.2-1-2.3-1.8-3.2C28.8 2.2 27.2 1.5 25.4 1.5c-.1 0-.3 0-.4.1V52l8.9-2.4L42.2 11.3l-4.4-.4L32 7z" fill="#5E8E3E"/>
                <path d="M25 14.8l-2.2 6.6s-2-1-4.3-1c-3.4 0-3.6 2.2-3.6 2.7 0 3 7.7 4.1 7.7 11 0 5.4-3.5 8.9-8.1 8.9-5.6 0-8.4-3.5-8.4-3.5l1.5-4.9s2.9 2.5 5.4 2.5c1.6 0 2.3-1.3 2.3-2.2 0-3.9-6.3-4.1-6.3-10.4 0-5.3 3.8-10.5 11.6-10.5 3 0 4.4.9 4.4.9z" fill="#FFF"/>
              </svg>
              <span className="text-sm font-semibold text-[#2d2d2d]">Shopify Partners</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. STATS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #f7f5f0 60%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-12 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {STATS.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {STATS.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.items.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold" style={{ color: "#498f6d" }}>{stat.value}</div>
                <div className="mt-2 text-xs leading-relaxed" style={{ color: "rgba(45,45,45,0.55)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #f7f5f0 55%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {TESTIMONIALS.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {TESTIMONIALS.title}
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(45,45,45,0.55)" }}>{TESTIMONIALS.subtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {TESTIMONIALS.items.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div className="mb-4 flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#f59e0b" }}>★</span>
                  ))}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#2d2d2d" }}>{testimonial.name}</div>
                  <div className="text-xs" style={{ color: "rgba(45,45,45,0.55)" }}>
                    {testimonial.company} · {testimonial.sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. SERVICES PHARES
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {FEATURED_SERVICES.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
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
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
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
                    <div className="text-xs" style={{ color: "rgba(45,45,45,0.50)" }}>{svc.stat.label}</div>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold transition-colors group-hover:text-[#498f6d]" style={{ color: "#2d2d2d" }}>
                  {svc.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.65)" }}>
                  {svc.description}
                </p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ border: "1px solid rgba(73,143,109,0.25)" }} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. PAID LANDSCAPE (Native / SEA / Social)
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {PAID_LANDSCAPE.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {PAID_LANDSCAPE.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
              {PAID_LANDSCAPE.subtitle}
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {PAID_LANDSCAPE.categories.map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <LucideIcon name={cat.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold" style={{ color: "#2d2d2d" }}>{cat.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
                  {cat.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.75)" }}>
                  {cat.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 pt-5" style={{ borderTop: "1px solid rgba(45,45,45,0.08)" }}>
                  {cat.platforms.map((p) => (
                    <span
                      key={p.name}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d", border: "1px solid rgba(45,45,45,0.08)" }}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. NATIVE ADS EXPERTISE
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
                {NATIVE_ADS.badge}
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
                {NATIVE_ADS.title}
              </h2>
              <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                {NATIVE_ADS.subtitle}
              </p>
              <ul className="mt-6 space-y-3">
                {NATIVE_ADS.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "rgba(45,45,45,0.80)" }}>
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(73,143,109,0.14)", color: "#498f6d" }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href={NATIVE_ADS.cta.href}
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
                >
                  {NATIVE_ADS.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "linear-gradient(135deg, rgba(73,143,109,0.06) 0%, rgba(73,143,109,0.02) 100%)",
                border: "1px solid rgba(73,143,109,0.15)",
              }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(45,45,45,0.55)" }}>
                Ils nous ont fait confiance
              </p>
              <div className="mt-5 space-y-4">
                {NATIVE_ADS.trustedBy.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-4 rounded-xl p-4"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.06)" }}
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(73,143,109,0.14)", color: "#498f6d" }}
                    >
                      <LucideIcon name="Building2" className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-sm font-semibold" style={{ color: "#2d2d2d" }}>
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. PRICING PREVIEW
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {PRICING_PREVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {PRICING_PREVIEW.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
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
                    backgroundColor: "#ffffff",
                    border: highlighted ? "1px solid rgba(73,143,109,0.30)" : "1px solid rgba(45,45,45,0.07)",
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
                  <div className="font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>{plan.name}</div>
                  <div className="mt-2 font-heading text-2xl font-bold" style={{ color: "#498f6d" }}>{plan.price}</div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.65)" }}>{plan.description}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ border: "1px solid rgba(73,143,109,0.22)" }} />
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={PRICING_PREVIEW.cta.href}
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-semibold transition-all"
              style={{ borderColor: "rgba(45,45,45,0.18)", color: "rgba(45,45,45,0.75)" }}
            >
              {PRICING_PREVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. POURQUOI EKOLINK
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, #f7f5f0 60%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {WHY_EKOLINK.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {WHY_EKOLINK.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-4 max-w-xl text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
              {WHY_EKOLINK.subtitle}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_EKOLINK.points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <LucideIcon name={point.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.65)" }}>{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10. SHOWCASE CARDS (style Shopify Partners)
      ═══════════════════════════════════════════════════════ */}
      <ShowcaseCards />

      {/* ═══════════════════════════════════════════════════════
          11. SHORT-FORM VIDEO
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10 text-center">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
            >
              ● {SHORT_FORM_VIDEO.badge}
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {SHORT_FORM_VIDEO.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
              {SHORT_FORM_VIDEO.subtitle}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {SHORT_FORM_VIDEO.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <LucideIcon name={feat.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>{feat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(45,45,45,0.50)" }}>
              Plateformes couvertes
            </span>
            {SHORT_FORM_VIDEO.platforms.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium"
                style={{ backgroundColor: "#ffffff", color: "#2d2d2d", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={SHORT_FORM_VIDEO.cta.href}
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-sm font-semibold transition-all"
              style={{ borderColor: "rgba(45,45,45,0.18)", color: "#2d2d2d" }}
            >
              {SHORT_FORM_VIDEO.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          12. SECTEURS
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {SECTORS_PREVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {SECTORS_PREVIEW.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
              {SECTORS_PREVIEW.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SECTORS_PREVIEW.featured.map((sector) => (
              <Link
                key={sector.name}
                href={sector.href}
                className="group flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.10)", color: "#498f6d" }}
                >
                  <LucideIcon name={sector.icon} className="h-5 w-5" />
                </div>
                <span
                  className="font-heading text-sm font-semibold transition-colors group-hover:text-[#498f6d]"
                  style={{ color: "rgba(45,45,45,0.80)" }}
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
              style={{ borderColor: "rgba(45,45,45,0.18)", color: "rgba(45,45,45,0.75)" }}
            >
              {SECTORS_PREVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10. SERVICES OVERVIEW
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {SERVICES_OVERVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {SERVICES_OVERVIEW.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-4 max-w-xl text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
              {SERVICES_OVERVIEW.subtitle}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {SERVICES_OVERVIEW.categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <h3 className="mb-5 font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.services.map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        className="flex items-center gap-2.5 text-sm transition-colors hover:text-[#498f6d]"
                        style={{ color: "rgba(45,45,45,0.70)" }}
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
              style={{ borderColor: "rgba(45,45,45,0.18)", color: "rgba(45,45,45,0.75)" }}
            >
              {SERVICES_OVERVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          11. RESSOURCES
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #f7f5f0 55%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              {BLOG_PREVIEW.badge}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {BLOG_PREVIEW.title}
            </h2>
            <div className="mt-4 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-4 max-w-xl text-base" style={{ color: "rgba(45,45,45,0.65)" }}>
              {BLOG_PREVIEW.subtitle}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {BLOG_PREVIEW.resources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.href}
                className="group flex gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
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
                      style={{ color: "#2d2d2d" }}
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
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.65)" }}>
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
              style={{ borderColor: "rgba(45,45,45,0.18)", color: "rgba(45,45,45,0.75)" }}
            >
              {BLOG_PREVIEW.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          15. COMMUNITY (YouTube & Discord)
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div
            className="mx-auto max-w-5xl rounded-2xl p-10 sm:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(73,143,109,0.08) 0%, rgba(73,143,109,0.03) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
                  {COMMUNITY.badge}
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
                  {COMMUNITY.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                  {COMMUNITY.subtitle}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={COMMUNITY.cta.youtube.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                    style={{ backgroundColor: "#FF0000", color: "#FFFFFF" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    {COMMUNITY.cta.youtube.label}
                  </a>
                  <a
                    href={COMMUNITY.cta.discord.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                    style={{ backgroundColor: "#5865F2", color: "#FFFFFF" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                    {COMMUNITY.cta.discord.label}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {COMMUNITY.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-4 text-center"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
                  >
                    <div className="font-heading text-lg font-bold" style={{ color: "#498f6d" }}>{s.value}</div>
                    <div className="mt-1 text-xs" style={{ color: "rgba(45,45,45,0.60)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          16. CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-4 lg:pb-14">
        <div
          className="mb-8 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, #f7f5f0 18%, rgba(247,245,240,0.65) 40%, transparent 62%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #f7f5f0 0%, transparent 20%, transparent 80%, #f7f5f0 100%)" }} />
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
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              {CTA_SECTION.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed" style={{ color: "rgba(45,45,45,0.65)" }}>
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
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "rgba(45,45,45,0.70)" }}
              >
                {CTA_SECTION.cta.secondary.label}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs" style={{ color: "rgba(45,45,45,0.55)" }}>
              {CTA_SECTION.trust.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
