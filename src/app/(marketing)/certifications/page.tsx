import type { Metadata } from "next";

import { Check, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Agence Certifiée Google Partner Paris | Ekolink",
  description:
    "Ekolink : agence certifiée Google Partner, Meta Partner et Shopify Partner à Paris. Certifications en marketing digital et développement web en France.",
};

const PARTNERS = [
  {
    id: "google",
    name: "Google Partner",
    badge: "🔵",
    badgeImg: "/images/badges/badge-google-partner.svg",
    description:
      "Certifiée Google Partner, Ekolink démontre son expertise en campagnes Google Ads : Search, Display, Shopping, YouTube et Performance Max. Nos gestionnaires passent régulièrement les examens Google pour maintenir la certification.",
    certifications: [
      "Google Ads Search",
      "Google Ads Display",
      "Google Ads Shopping",
      "Google Ads Video (YouTube)",
      "Google Analytics 4",
      "Google Tag Manager",
    ],
  },
  {
    id: "meta",
    name: "Meta Business Partner",
    badge: "🔷",
    description:
      "Notre statut Meta Business Partner atteste de notre maîtrise de la publicité sur Facebook et Instagram. Nous gérons des budgets publicitaires importants sur les plateformes Meta avec des résultats mesurables.",
    certifications: [
      "Meta Blueprint — Facebook Ads",
      "Meta Blueprint — Instagram Ads",
      "Meta Pixel & Conversions API",
      "Meta Business Manager",
      "Audiences personnalisées & lookalike",
      "Catalogue produits Meta",
    ],
  },
  {
    id: "shopify",
    name: "Shopify Partner",
    badge: "🟢",
    description:
      "En tant que Shopify Partner, Ekolink crée et optimise des boutiques e-commerce performantes pour ses clients. Nous maîtrisons Shopify, Shopify Plus, le langage Liquid et les intégrations tierces.",
    certifications: [
      "Shopify Partner Program",
      "Shopify — Business Fundamentals",
      "Shopify — Product Fundamentals",
      "Shopify Plus",
      "Développement Liquid & thèmes",
      "Apps & intégrations Shopify",
    ],
  },
];

const YOUTUBE_VIDEO_IDS = [
  "7-roIfvYlz4",
  "1owrwmEiPIg",
  "F0yg_aHoWe0",
  "8x2GnzA-IWA",
  "jAowTOGtOaQ",
  "sQMtifmaRiI",
];

export default function CertificationsPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-14 lg:py-20">
        <ParallaxBg src="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp" overlay={0.72} />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "#2d2d2d" }}>
                Nos Certifications
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                Google Partner, Meta Business Partner, Shopify Partner — Ekolink est certifiée par
                les plus grandes plateformes digitales pour garantir des résultats à la hauteur de
                vos ambitions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "#6B7280" }}>
                  <span className="text-accent">★</span> 4,9/5 sur Google
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "#6B7280" }}>
                  <span className="text-accent">✓</span> Certifié depuis 2015
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "#6B7280" }}>
                  <span className="text-accent">◆</span> +10 ans d&apos;expérience
                </span>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Loom Video Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#ede9e1" }}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Découvrez Ekolink en vidéo
            </h2>
            <p className="mb-8 text-center text-[#6B7280]">
              Une présentation de notre agence, notre équipe et notre façon de travailler.
            </p>
            <div className="relative aspect-video overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(45,45,45,0.08)" }}>
              <iframe
                src="https://www.loom.com/embed/7ec57b70b78b467981787c1ed174903c"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                title="Présentation Ekolink"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Partner Badges */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Nos partenariats officiels
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="rounded-2xl border p-6 text-center"
                  style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.68)" }}
                >
                  {"badgeImg" in partner ? (
                    <img src={(partner as { badgeImg: string }).badgeImg} alt={partner.name} className="mx-auto h-16 w-16" />
                  ) : (
                    <span className="text-4xl">{partner.badge}</span>
                  )}
                  <h3 className="mt-3 font-heading text-lg font-bold text-[#2d2d2d]">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Partner Details */}
            <div className="mt-10 space-y-8">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="rounded-2xl border p-8"
                  style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.72)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {"badgeImg" in partner ? (
                      <img src={(partner as { badgeImg: string }).badgeImg} alt={partner.name} className="h-10 w-10 shrink-0" />
                    ) : (
                      <span className="text-3xl">{partner.badge}</span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">{partner.name}</h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-[#6B7280]">{partner.description}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {partner.certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-[#5f6b63]">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* YouTube Channel */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#ede9e1" }}>
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
                Notre chaîne YouTube
              </h2>
              <p className="mt-3 text-[#6B7280]">
                Des tutoriels, conseils et stratégies marketing directement depuis notre équipe.
              </p>
              <a
                href="https://www.youtube.com/@AlbertLanneAds"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold text-[#2d2d2d]/75 transition-colors hover:border-accent/30 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.10)", backgroundColor: "rgba(255,255,255,0.66)" }}
              >
                Voir la chaîne YouTube
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {YOUTUBE_VIDEO_IDS.map((id) => (
                <div
                  key={id}
                  className="overflow-hidden rounded-xl border"
                  style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.72)" }}
                >
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title="Vidéo Ekolink"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-[#2d2d2d]">
              Travaillez avec une agence certifiée
            </h2>
            <p className="mt-4 text-[#6B7280]">
              Nos certifications sont le reflet de notre engagement envers l&apos;excellence. Contactez-nous
              pour démarrer votre projet avec une équipe experte et certifiée.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/devis-gratuit/"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
              >
                Devis gratuit
              </Link>
              <Link
                href="/a-propos/"
                className="rounded-lg border px-6 py-3 text-sm font-semibold text-[#2d2d2d] transition-all duration-200 hover:border-accent/30 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.10)", backgroundColor: "rgba(255,255,255,0.66)" }}
              >
                À propos de Ekolink
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
