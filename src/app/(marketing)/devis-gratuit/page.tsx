import type { Metadata } from "next";
import {
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/presentation/components/ui/Container";
import { DevisForm } from "@/presentation/components/forms/DevisForm";

export const metadata: Metadata = {
  title: "Devis Gratuit Site Web & Marketing | Lannkin",
  description:
    "Devis gratuit pour votre site web ou marketing digital à Laval. Sans engagement, réponse sous 24h. Soumission web personnalisée par Lannkin.",
};

const TRUST_POINTS = [
  { icon: Clock, text: "Réponse sous 24h" },
  { icon: Shield, text: "100% gratuit, sans engagement" },
  { icon: Check, text: "Conseils personnalisés" },
];

export default function DevisGratuitPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-10 pt-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[58%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-trio-cubes-flottants.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.20 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, #0C0C0C 18%, rgba(12,12,12,0.65) 40%, transparent 62%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0C0C0C 0%, transparent 22%, transparent 78%, #0C0C0C 100%)" }} />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="max-w-xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#498f6d" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
              </span>
              <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>
                Gratuit · Sans engagement
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]" style={{ color: "#FFFFFF" }}>
              Votre <span style={{ color: "#498f6d" }}>devis gratuit</span>
            </h1>
            <div className="mt-5 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Décrivez votre projet et recevez une proposition personnalisée sous 24h.
              Nos experts analysent votre situation et vous conseillent gratuitement.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FORM + SIDEBAR
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-24 pt-4">
        <div className="mb-10 h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-6 lg:p-8"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <DevisForm />
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-5">

              {/* Trust Points */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
                  Pourquoi nous choisir
                </h3>
                <ul className="space-y-4">
                  {TRUST_POINTS.map((point) => (
                    <li key={point.text} className="flex items-start gap-3">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                      >
                        <point.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                    {SITE_CONFIG.stats.googleRating}
                  </span>
                </div>
                <p className="mt-1.5 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {SITE_CONFIG.stats.googleReviews} avis Google &middot;{" "}
                  {SITE_CONFIG.stats.yearsExperience}+ ans d&apos;expérience
                </p>
              </div>

              {/* Contact Info */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
                  Nous joindre
                </h3>
                <ul className="space-y-3.5">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0" style={{ color: "rgba(255,255,255,0.30)" }} />
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm transition-colors hover:text-[#498f6d]"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0" style={{ color: "rgba(255,255,255,0.30)" }} />
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm transition-colors hover:text-[#498f6d]"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0" style={{ color: "rgba(255,255,255,0.30)" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {SITE_CONFIG.location.city}, {SITE_CONFIG.location.province}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        border: "1px solid rgba(73,143,109,0.25)",
                        backgroundColor: "rgba(73,143,109,0.08)",
                        color: "#498f6d",
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
