import type { Metadata } from "next";
import {
  Check,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/presentation/components/ui/Container";
import { DevisForm } from "@/presentation/components/forms/DevisForm";

export const metadata: Metadata = {
  title: "Devis Gratuit Site Web & Marketing | Ekolink",
  description:
    "Chiffrons votre projet web ou marketing à Paris : retour personnalisé sous 24h, aucun engagement. Soumettez votre brief à l'équipe Ekolink.",
};

const TRUST_POINTS = [
  { icon: Clock, text: "Retour en moins de 24h" },
  { icon: Shield, text: "Sans engagement, sans frais cachés" },
  { icon: Check, text: "Analyse adaptée à votre contexte" },
];

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    title: "1. Décrivez votre besoin",
    description:
      "Quelques minutes suffisent pour cadrer votre projet via notre formulaire guidé.",
  },
  {
    icon: Send,
    title: "2. Échangeons",
    description:
      "Un expert reprend votre brief et revient vers vous sous 24h avec les bonnes questions.",
  },
  {
    icon: Sparkles,
    title: "3. Recevez votre plan",
    description:
      "Proposition chiffrée, calendrier indicatif et recommandations sur-mesure — sans pression.",
  },
];

export default function DevisGratuitPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>

      {/* ═══════════════════════════════════════════════════════
          1. HERO
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, #f7f5f0 18%, rgba(247,245,240,0.65) 40%, transparent 62%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #f7f5f0 0%, transparent 22%, transparent 78%, #f7f5f0 100%)" }} />
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
              <span className="font-mono text-xs font-medium" style={{ color: "#2d2d2d" }}>
                Sans engagement · Réponse sous 24h
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]" style={{ color: "#2d2d2d" }}>
              Votre projet <span style={{ color: "#498f6d" }}>chiffré en 24h</span>.
            </h1>
            <div className="mt-5 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(45,45,45,0.65)" }}>
              Partagez votre contexte en quelques minutes. Un expert Ekolink
              analyse votre projet et revient vers vous avec une proposition
              sur-mesure — sans engagement, sans discours commercial.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. PROCESS — 3 étapes
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-14 pt-4">
        <div className="mb-10 h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.08), transparent)" }} />
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              Comment ça se passe
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              Trois étapes, zéro friction.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold" style={{ color: "#2d2d2d" }}>{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. FORM + SIDEBAR
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-24 pt-4">
        <div className="mb-10 h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.08), transparent)" }} />
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Form — 2/3 */}
            <div className="-mx-4 sm:mx-0 lg:col-span-2">
              <div
                className="rounded-2xl p-4 sm:p-6 lg:p-8"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.07)" }}
              >
                <DevisForm />
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-5">

              {/* Rating — preuve sociale en premier */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.07)" }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: "#2d2d2d" }}>
                    {SITE_CONFIG.stats.googleRating}
                  </span>
                </div>
                <p className="mt-1.5 text-xs" style={{ color: "rgba(45,45,45,0.55)" }}>
                  Note moyenne sur {SITE_CONFIG.stats.googleReviews} avis Google &middot;{" "}
                  Plus de {SITE_CONFIG.stats.yearsExperience} années d&apos;expertise
                </p>
              </div>

              {/* Trust Points — engagements */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.07)" }}
              >
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
                  Nos engagements
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
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.80)" }}>
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info — alternatives */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.07)" }}
              >
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
                  Une autre voie
                </h3>
                <ul className="space-y-3.5">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0" style={{ color: "rgba(45,45,45,0.40)" }} />
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm transition-colors hover:text-[#498f6d]"
                      style={{ color: "rgba(45,45,45,0.70)" }}
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0" style={{ color: "rgba(45,45,45,0.40)" }} />
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm transition-colors hover:text-[#498f6d]"
                      style={{ color: "rgba(45,45,45,0.70)" }}
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0" style={{ color: "rgba(45,45,45,0.40)" }} />
                    <span className="text-sm" style={{ color: "rgba(45,45,45,0.70)" }}>
                      {SITE_CONFIG.location.city}, {SITE_CONFIG.location.province}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Certifications — partenaires officiels */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.07)" }}
              >
                <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
                  Partenaires officiels
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        border: "1px solid rgba(73,143,109,0.25)",
                        backgroundColor: "rgba(73,143,109,0.08)",
                        color: "#2d2d2d",
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
