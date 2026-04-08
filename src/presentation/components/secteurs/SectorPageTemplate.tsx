import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Container } from "@/presentation/components/ui/Container";
import { Button } from "@/presentation/components/ui/Button";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { TestimonialsSection } from "@/presentation/components/home/TestimonialsSection";
import type { Sector } from "@/domain/entities/sector";

// ---------------------------------------------------------------------------
// Service label + description map (hub slugs only)
// ---------------------------------------------------------------------------

const SERVICE_META: Record<string, { label: string; desc: string }> = {
  "google-ads":                { label: "Google Ads",                desc: "Campagnes Search, Display, Shopping et Performance Max" },
  "facebook-ads":              { label: "Facebook & Instagram Ads",  desc: "Publicités Meta ciblées pour maximiser votre portée" },
  "seo":                       { label: "Référencement SEO",         desc: "Positionnement organique durable sur Google" },
  "conception-web":            { label: "Conception Web",            desc: "Sites web modernes, rapides et convertissants" },
  "lead-generation":           { label: "Génération de Leads",       desc: "Systèmes de capture et de nurturing de prospects" },
  "google-my-business":        { label: "Google My Business",        desc: "Fiche Google optimisée pour la visibilité locale" },
  "graphisme":                 { label: "Graphisme & Design",        desc: "Identité visuelle et créations qui marquent les esprits" },
  "linkedin-ads":              { label: "LinkedIn Ads",              desc: "Publicités B2B sur le réseau professionnel #1" },
  "tiktok-ads":                { label: "TikTok Ads",                desc: "Publicités vidéo sur la plateforme à plus forte croissance" },
  "native-ads":                { label: "Native Ads",                desc: "Publicités intégrées au contenu pour capter l'attention" },
  "amazon-ads":                { label: "Amazon Ads",                desc: "Campagnes sponsorisées et Display sur Amazon" },
  "intelligence-artificielle": { label: "Intelligence Artificielle", desc: "Automatisation et outils IA pour votre marketing" },
  "montage-video":             { label: "Montage Vidéo",             desc: "Contenus vidéo professionnels pour vos campagnes" },
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface SectorPageTemplateProps {
  sector: Sector;
  benefits: string[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SectorPageTemplate({ sector, benefits }: SectorPageTemplateProps) {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="pb-20 pt-28"
        style={{ background: "linear-gradient(145deg, #070d16 0%, #0d1b2a 65%, #111 100%)" }}
      >
        <Container>
          <div className="max-w-3xl">
            {/* Sector badge */}
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: "rgba(73,143,109,0.12)",
                color: "#498f6d",
                border: "1px solid rgba(73,143,109,0.20)",
              }}
            >
              <LucideIcon name={sector.icon ?? "Building2"} className="h-3.5 w-3.5" />
              Secteur — {sector.title}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
              Marketing digital pour{" "}
              <span style={{ color: "#498f6d" }}>{sector.title}</span>{" "}
              à Laval &amp; Montréal
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {sector.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact/">
                <Button variant="primary" size="lg">
                  Devis gratuit sous 24h
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/realisations/">
                <Button variant="secondary" size="lg">
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services recommandés ──────────────────────────────────── */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Container>
          <h2 className="font-heading mb-2 text-2xl font-bold text-white">
            Services recommandés pour {sector.title}
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Nos experts sélectionnent les leviers les plus rentables pour votre secteur.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sector.relatedServices.map((slug) => {
              const meta = SERVICE_META[slug];
              if (!meta) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}/`}
                  className="group rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="font-semibold text-white transition-colors group-hover:text-[#498f6d]">
                    {meta.label}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {meta.desc}
                  </p>
                  <span
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color: "#498f6d" }}
                  >
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Pourquoi Lannkin ─────────────────────────────────────── */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#498f6d" }}
              >
                Pourquoi Lannkin
              </p>
              <h2 className="font-heading text-3xl font-bold text-white">
                Notre expertise dans le secteur {sector.title}
              </h2>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Depuis 2015, nous avons accompagné des centaines d'entreprises à Laval et Montréal.
                Notre approche data-driven s'adapte aux spécificités de chaque secteur.
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "+1 000", label: "Projets livrés" },
                  { value: "10 ans", label: "D'expérience" },
                  { value: "4×", label: "ROI moyen" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg p-4 text-center"
                    style={{
                      backgroundColor: "rgba(73,143,109,0.08)",
                      border: "1px solid rgba(73,143,109,0.15)",
                    }}
                  >
                    <p
                      className="font-heading text-2xl font-bold"
                      style={{ color: "#498f6d" }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-4 pt-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "#498f6d" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Témoignages ──────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <TestimonialsSection />
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Container>
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              backgroundColor: "rgba(73,143,109,0.07)",
              border: "1px solid rgba(73,143,109,0.15)",
            }}
          >
            <h2 className="font-heading text-3xl font-bold text-white">
              Prêt à développer votre activité {sector.title} ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base" style={{ color: "rgba(255,255,255,0.60)" }}>
              Devis gratuit sous 24h — Certifiés Google Partner — Sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact/">
                <Button variant="primary" size="lg">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/realisations/">
                <Button variant="secondary" size="lg">
                  Voir nos projets
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
