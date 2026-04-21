import type { Metadata } from "next";

import { ArrowRight, CheckCircle, Globe, Mail, MapPin, Phone, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SITE_CONFIG } from "@/lib/constants";
import { LeadCaptureForm } from "@/presentation/components/forms/LeadCaptureForm";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Agence Web Paris France | À Propos | Ekolink",
  description:
    "Agence web à Paris, certifiée Google Partner. +10 ans d'expertise en marketing digital pour PME en France et Suisse. Découvrez l'équipe Ekolink.",
  alternates: { canonical: "https://ekolink.fr/a-propos/" },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const OFFICES = [
  {
    country: "EKOLINK CANADA",
    image: "/images/a-propos/Canada-e1556023963820-2500x1406-1-850x560.jpg.webp",
    alt: "Skyline de Toronto — Ekolink Canada",
  },
  {
    country: "EKOLINK FRANCE",
    image: "/images/a-propos/shutterstock_667548661v2-1024x683-1.webp",
    alt: "Tour Eiffel à Paris — Ekolink France",
  },
  {
    country: "EKOLINK SUISSE",
    image: "/images/a-propos/suisse-paysage-ville.webp",
    alt: "Paysage de ville suisse — Ekolink Suisse",
  },
];

const CERTIFICATIONS = ["Réseau de recherche", "Display", "Video", "Shopping"];

const AD_CHANNELS = [
  {
    category: "Régies natives (Native Ads)",
    description: "CPC très faible et très gros volumes — nécessite un tunnel complexe.",
    platforms: [
      { label: "Taboola Ads", href: "/services/native-ads/" },
      { label: "Outbrain Ads", href: "/services/native-ads/" },
      { label: "Criteo Ads", href: "/services/native-ads/" },
      { label: "Propeller Ads", href: "/services/native-ads/" },
    ],
    icon: Globe,
    color: "#498f6d",
  },
  {
    category: "Campagnes SEA",
    description: "Forte intention de recherche, mais forte concurrence.",
    platforms: [
      { label: "Google Ads", href: "/services/google-ads/" },
      { label: "Microsoft Ads", href: "/services/bing-ads/" },
    ],
    icon: Zap,
    color: "#4285F4",
  },
  {
    category: "Social Media Marketing",
    description: "CPC élevé — nécessite une bonne offre marketing et gros volume.",
    platforms: [
      { label: "TikTok Ads", href: "/services/tiktok-ads/" },
      { label: "LinkedIn Ads", href: "/services/linkedin-ads/" },
      { label: "Facebook Ads", href: "/services/facebook-ads/" },
      { label: "Instagram Ads", href: "/services/facebook-ads/" },
    ],
    icon: Shield,
    color: "#1877F2",
  },
];

const RD_SCRIPTS = [
  {
    title: "Script Google Ads anti-fraude",
    description:
      "Il identifie les clics frauduleux et vous permet de soumettre des demandes de remboursement auprès de Google, garantissant ainsi une utilisation optimale de votre budget publicitaire.",
    image: "/images/a-propos/script-clic-export-google-ads.webp",
    alt: "Export script clics frauduleux Google Ads",
  },
  {
    title: "Script d'analyse des campagnes performantes",
    description:
      "Ce script unique accède à des données masquées, permettant une analyse approfondie pour ajuster vos campagnes avec précision, bien au-delà des outils traditionnels.",
    image: "/images/a-propos/script-pmaw-analys.webp",
    alt: "Script PMAW analyse campagnes Google Ads",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AProposPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-12 pt-10 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-20">

        {/* 3D background — rocket cubes côté droit */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[62%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"
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
                  "linear-gradient(to bottom, #f7f5f0 0%, transparent 18%, transparent 82%, #f7f5f0 100%)",
              }}
            />
          </div>
        </div>

        {/* Halo */}
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.08)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-end">
            <div
              className="rounded-[2rem] border px-6 py-8 shadow-[0_24px_80px_rgba(73,143,109,0.08)] sm:px-8 sm:py-10 lg:px-10"
              style={{
                borderColor: "rgba(45,45,45,0.08)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.54))",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ backgroundColor: "#498f6d" }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
                </span>
                <span className="font-mono text-xs font-medium uppercase tracking-[0.22em]" style={{ color: "#2d2d2d" }}>
                  Fondée en 2015 · Paris, France
                </span>
              </div>

              <div className="max-w-3xl">
                <p
                  className="font-mono text-xs uppercase tracking-[0.28em]"
                  style={{ color: "rgba(73,143,109,0.9)" }}
                >
                  Agence indépendante
                </p>

                <h1
                  className="mt-4 font-heading text-5xl font-bold tracking-tight sm:text-[3.6rem] sm:leading-[0.98] lg:text-[4.25rem]"
                  style={{ color: "#2d2d2d" }}
                >
                  Une agence de croissance
                  <br className="hidden sm:block" /> pensée pour les PME.
                </h1>

                <p
                  className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-[1.1rem]"
                  style={{ color: "#5f6b63" }}
                >
                  Ekolink accompagne les entreprises francophones avec une approche directe:
                  acquisition, conception web, automatisation et pilotage marketing dans un cadre
                  exigeant mais lisible.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#498f6d", color: "#f7f5f0" }}
                >
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/realisations/"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{
                    borderColor: "rgba(45,45,45,0.10)",
                    backgroundColor: "rgba(255,255,255,0.56)",
                    color: "#2d2d2d",
                  }}
                >
                  Voir les réalisations
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "2015", label: "année de fondation" },
                  { value: "+10 ans", label: "d'expérience cumulée" },
                  { value: "3 pays", label: "France · Suisse · Canada" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border px-5 py-4"
                    style={{
                      borderColor: "rgba(45,45,45,0.08)",
                      backgroundColor: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <p className="font-heading text-3xl font-bold" style={{ color: "#2d2d2d" }}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-6" style={{ color: "#6B7280" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div
                className="rounded-[2rem] border p-6"
                style={{
                  borderColor: "rgba(45,45,45,0.08)",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.75), rgba(237,233,225,0.72))",
                  boxShadow: "0 20px 60px rgba(45,45,45,0.06)",
                }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.26em]"
                  style={{ color: "#7a847d" }}
                >
                  Positionnement
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight" style={{ color: "#2d2d2d" }}>
                  Une agence compacte, pas une usine à production.
                </h2>
                <p className="mt-3 text-sm leading-7" style={{ color: "#6B7280" }}>
                  Nous privilégions les mandats où la stratégie, l'exécution et la qualité du
                  suivi comptent davantage que le volume.
                </p>
              </div>

              <div
                className="rounded-[2rem] border p-6"
                style={{
                  borderColor: "rgba(45,45,45,0.08)",
                  backgroundColor: "rgba(255,255,255,0.62)",
                }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.26em]"
                  style={{ color: "#7a847d" }}
                >
                  Ce que cela change
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    "Conseil plus direct et recommandations plus nettes.",
                    "Moins de couches, donc plus de réactivité sur les projets.",
                    "Une logique orientée résultats avant les effets de présentation.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 rounded-2xl p-2.5"
                        style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-6" style={{ color: "#6B7280" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="hidden mb-6 items-center gap-2 rounded-full border px-3.5 py-1.5"
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
                Fondée en 2015 · Paris, France
              </span>
            </div>

            <h1
              className="hidden font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]"
              style={{ color: "#2d2d2d" }}
            >
              À Propos —{" "}
              <span style={{ color: "#2d2d2d" }}>Ekolink</span>
            </h1>

            <div
              className="hidden mt-5 h-px w-14"
              style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
            />

            <p
              className="hidden mt-5 max-w-xl text-base leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              L&apos;agence web au service des TPE et PME francophones. France, Suisse, Canada —
              une expertise internationale, un accompagnement de proximité.
            </p>

            {/* Stats */}
            <div className="hidden mt-10 flex-wrap gap-8">
              {[
                { value: "2015", label: "Année de fondation" },
                { value: "+10 ans", label: "D'expérience" },
                { value: "3 pays", label: "France · Suisse · Canada" },
              ].map((stat) => (
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
          </div>
        </Container>
      </section>

      {/* ─── 3 BUREAUX ────────────────────────────────────────────────── */}
      <section className="pb-20 pt-4">
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
              Présence internationale
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight" style={{ color: "#2d2d2d" }}>
              3 pays, 1 vision
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {OFFICES.map((office) => (
              <div
                key={office.country}
                className="group overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#ede9e1", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ opacity: 0.75 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />
                  <p className="absolute bottom-3 left-4 font-heading text-base font-bold" style={{ color: "#ffffff" }}>
                    {office.country}
                  </p>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-xs font-semibold" style={{ color: "#2d2d2d" }}>
                      Certification Google Ads
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {CERTIFICATIONS.map((cert) => (
                      <span
                        key={cert}
                        className="rounded px-2.5 py-1 text-xs"
                        style={{ border: "1px solid rgba(45,45,45,0.12)", color: "#6B7280" }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        {/* 3D bg — flatlay fond vert, très subtil */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[55%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-flatlay-fond-vert.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.12 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, transparent, #f7f5f0 55%)" }}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#2d2d2d" }}
            >
              Ekolink, l&apos;agence web au service des{" "}
              <span style={{ color: "#2d2d2d" }}>TPE et PME francophones</span>
            </h2>
            <div
              className="mx-auto mt-5 h-px w-14"
              style={{ background: "linear-gradient(to right, transparent, rgba(73,143,109,0.6), transparent)" }}
            />
            <p
              className="mt-6 text-base leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Ekolink, basée à Paris et dans tous les pays francophones, accompagne les TPE et PME
              avec des stratégies marketing globales et création de site web sur-mesure. Grâce à
              notre expertise internationale, nous vous offrons des solutions adaptées à chaque
              business, vous donnant une longueur d&apos;avance sur vos concurrents, avec
              l&apos;assurance d&apos;un accompagnement de proximité et un support téléphonique
              constant.
            </p>
            <div className="mt-8">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#fff" }}
              >
                Contactez-nous
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FONDATEURS ───────────────────────────────────────────────── */}
      <section className="pb-20">
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_360px] lg:items-start">
            <div
              className="relative overflow-hidden rounded-[2rem] border p-8 shadow-[0_24px_70px_rgba(45,45,45,0.08)] sm:p-10"
              style={{
                borderColor: "rgba(45,45,45,0.08)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(247,245,240,0.96))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(73,143,109,0.08), rgba(73,143,109,0))",
                }}
                aria-hidden
              />
              <div className="relative">
                <span
                  className="mb-4 inline-flex rounded-full border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.32em]"
                  style={{
                    borderColor: "rgba(73,143,109,0.18)",
                    backgroundColor: "rgba(255,255,255,0.72)",
                    color: "#6B7280",
                  }}
                >
                  Notre histoire
                </span>
                <h2
                  className="max-w-3xl font-heading text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{ color: "#2d2d2d" }}
                >
                  Deux expertises complémentaires, une même exigence de résultat.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: "#6B7280" }}>
                  Lanne et Kinani associés est née de la rencontre entre une culture acquisition
                  très orientée performance et une approche technique pensée pour durer.
                </p>

                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                  <article
                    className="rounded-[1.6rem] border p-6"
                    style={{
                      borderColor: "rgba(45,45,45,0.08)",
                      backgroundColor: "rgba(255,255,255,0.72)",
                    }}
                  >
                    <div
                      className="mb-4 inline-flex rounded-2xl p-3"
                      style={{ backgroundColor: "rgba(73,143,109,0.10)" }}
                    >
                      <Zap className="h-5 w-5" style={{ color: "#498f6d" }} />
                    </div>
                    <p
                      className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: "#9CA3AF" }}
                    >
                      Acquisition
                    </p>
                    <h3 className="mt-3 text-xl font-semibold" style={{ color: "#2d2d2d" }}>
                      Albert Lanne
                    </h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: "#6B7280" }}>
                      Expert en marketing et stratégie d&apos;acquisition, il conçoit des dispositifs
                      capables de performer dans des environnements concurrentiels, avec des tunnels
                      solides et un marketing 360 pensé pour convertir.
                    </p>
                  </article>

                  <article
                    className="rounded-[1.6rem] border p-6"
                    style={{
                      borderColor: "rgba(45,45,45,0.08)",
                      backgroundColor: "rgba(255,255,255,0.72)",
                    }}
                  >
                    <div
                      className="mb-4 inline-flex rounded-2xl p-3"
                      style={{ backgroundColor: "rgba(133,53,62,0.08)" }}
                    >
                      <Shield className="h-5 w-5" style={{ color: "#85353e" }} />
                    </div>
                    <p
                      className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: "#9CA3AF" }}
                    >
                      Technique
                    </p>
                    <h3 className="mt-3 text-xl font-semibold" style={{ color: "#2d2d2d" }}>
                      Kevin Kinani
                    </h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: "#6B7280" }}>
                      Spécialiste des scripts, de l&apos;automatisation, du growth hacking et de la
                      cybersécurité, il structure la couche technique avec une logique R&amp;D pour
                      rendre les projets plus robustes, plus rapides et plus sûrs.
                    </p>
                  </article>
                </div>

                <div
                  className="mt-6 rounded-[1.6rem] border p-6"
                  style={{
                    borderColor: "rgba(45,45,45,0.08)",
                    backgroundColor: "rgba(237,233,225,0.65)",
                  }}
                >
                  <p
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
                    style={{ color: "#9CA3AF" }}
                  >
                    Vision commune
                  </p>
                  <p className="mt-3 text-sm leading-7" style={{ color: "#6B7280" }}>
                    Ensemble, ils ont construit une agence qui vise des résultats concrets et
                    durables : des stratégies éprouvées, des expertises pointues et une ambition
                    simple pour les clients, gagner en visibilité, en demandes qualifiées et en
                    parts de marché.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services/"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#498f6d" }}
                  >
                    Découvrir nos services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/realisations/"
                    className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors duration-200"
                    style={{ borderColor: "rgba(45,45,45,0.10)", color: "#2d2d2d" }}
                  >
                    Voir nos réalisations
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-[1.8rem] border p-6"
                style={{
                  borderColor: "rgba(45,45,45,0.08)",
                  backgroundColor: "rgba(255,255,255,0.82)",
                }}
              >
                <p
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: "#9CA3AF" }}
                >
                  Ce que l&apos;on réunit
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    "Marketing de performance",
                    "Automatisation et scripts propriétaires",
                    "Cybersécurité et fiabilité technique",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex rounded-full p-1"
                        style={{ backgroundColor: "rgba(73,143,109,0.12)" }}
                      >
                        <CheckCircle className="h-4 w-4" style={{ color: "#498f6d" }} />
                      </span>
                      <p className="text-sm leading-6" style={{ color: "#4B5563" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[1.8rem] border p-6"
                style={{
                  borderColor: "rgba(45,45,45,0.08)",
                  backgroundColor: "rgba(237,233,225,0.7)",
                }}
              >
                <p
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: "#9CA3AF" }}
                >
                  Promesse
                </p>
                <p className="mt-4 text-base leading-7" style={{ color: "#2d2d2d" }}>
                  Une agence indépendante capable d&apos;aligner stratégie, production et performance
                  sans perdre la qualité d&apos;exécution.
                </p>
              </div>
            </div>

            <div className="hidden">
              <span
                className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#6B7280" }}
              >
                Notre histoire
              </span>
              <h2
                className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "#2d2d2d" }}
              >
                Albert Lanne et Kevin Kinani fondent{" "}
                <span style={{ color: "#2d2d2d" }}>Lanne et Kinani associés</span>
              </h2>
              <div className="mt-6 space-y-5" style={{ color: "#6B7280" }}>
                <p className="text-sm leading-relaxed">
                  <strong style={{ color: "#2d2d2d" }}>Albert Lanne</strong>, expert en marketing et
                  stratégie d&apos;acquisition, excelle dans les environnements très concurrentiels.
                  Il gère de gros volumes de demandes et crée des tunnels avec un marketing 360°.
                </p>
                <p className="text-sm leading-relaxed">
                  <strong style={{ color: "#2d2d2d" }}>Kevin Kinani</strong>, quant à lui, excelle
                  dans les scripts, le growth hacking, la cybersécurité et l&apos;automatisation.
                  Il a mis en place des scripts propriétaires grâce à un pôle de recherche et
                  développement, offrant des solutions techniques innovantes qui optimisent les
                  performances et la sécurité des projets.
                </p>
                <p className="text-sm leading-relaxed">
                  Ensemble, leur vision est claire : Ekolink, c&apos;est l&apos;assurance de vous
                  propulser en tête de votre marché en{" "}
                  <strong style={{ color: "#2d2d2d" }}>1ʳᵉ position sur Google</strong> avec des
                  stratégies éprouvées, portées par des experts dans chaque domaine, pour des
                  résultats concrets et durables.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{ borderColor: "#498f6d", color: "#498f6d" }}
                >
                  Nos services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ─── SE DÉMARQUER ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        {/* 3D bg — cubes latéraux, côté gauche */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 left-0 w-[50%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-lateral-angle-2.webp"
              alt=""
              className="h-full w-full object-cover object-right"
              style={{ opacity: 0.11 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent, #f7f5f0 60%)" }}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(73,143,109,0.06)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#2d2d2d" }}
            >
              Se démarquer, c&apos;est choisir une agence qui vous offre{" "}
              <span style={{ color: "#2d2d2d" }}>plus que les agences classiques</span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Alors que la plupart des agences web se concentrent uniquement sur Google et Facebook
              Ads, nous allons bien plus loin. Ekolink vous offre une gamme élargie de services et
              l&apos;accès à des régies publicitaires premium.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {AD_CHANNELS.map((channel) => (
              <div
                key={channel.category}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ede9e1", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${channel.color}18` }}
                >
                  <channel.icon className="h-5 w-5" style={{ color: channel.color }} />
                </div>
                <h3 className="font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>
                  {channel.category}
                </h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                  {channel.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {channel.platforms.map((platform) => (
                    <li key={platform.label} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0" style={{ color: "#498f6d" }} />
                      <Link
                        href={platform.href}
                        className="text-xs transition-colors hover:underline"
                        style={{ color: "#6B7280" }}
                      >
                        {platform.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/devis-gratuit/"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: "#498f6d", color: "#fff" }}
            >
              Je me lance !
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── R&D / SCRIPTS EXCLUSIFS ──────────────────────────────────── */}
      <section className="pb-20">
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span
              className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#6B7280" }}
            >
              Pôle Recherche &amp; Développement
            </span>
            <h2
              className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#2d2d2d" }}
            >
              Ekolink : l&apos;innovation au cœur de votre{" "}
              <span style={{ color: "#2d2d2d" }}>performance digitale</span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Notre pôle R&amp;D n&apos;est pas juste un plus — c&apos;est l&apos;assurance que vos
              campagnes publicitaires bénéficient des dernières avancées technologiques.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {RD_SCRIPTS.map((script) => (
              <div
                key={script.title}
                className="overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#ede9e1", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div
                  className="relative h-52 w-full"
                  style={{ backgroundColor: "#e5e0d8" }}
                >
                  <Image
                    src={script.image}
                    alt={script.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold" style={{ color: "#2d2d2d" }}>
                    {script.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "#6B7280" }}
                  >
                    {script.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20">
        {/* 3D bg — rocket launch côté droit */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[60%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.13 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, #f7f5f0 20%, rgba(247,245,240,0.6) 42%, transparent 62%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #f7f5f0 0%, transparent 18%, transparent 82%, #f7f5f0 100%)",
              }}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-[28%] top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
          aria-hidden
        />

        <Container className="relative z-10 pt-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div className="lg:py-4">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{ borderColor: "rgba(73,143,109,0.30)", backgroundColor: "rgba(73,143,109,0.10)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ backgroundColor: "#498f6d" }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#498f6d" }} />
                </span>
                <span className="font-mono text-xs font-medium" style={{ color: "#2d2d2d" }}>
                  En ligne — réponse en moins de 2 min
                </span>
              </div>

              <h2
                className="mt-6 font-heading text-4xl font-bold tracking-tight"
                style={{ color: "#2d2d2d" }}
              >
                Travaillons{" "}
                <span style={{ color: "#2d2d2d" }}>ensemble</span>
              </h2>
              <div
                className="mt-5 h-px w-14"
                style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
              />
              <p
                className="mt-5 max-w-[380px] text-base leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                Vous avez un projet, une question ou simplement envie de discuter ? Notre équipe
                vous répond rapidement, sans engagement.
              </p>

              <ul className="mt-10 space-y-4">
                {[
                  { icon: Phone, label: "Téléphone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/[\s()]/g, "")}` },
                  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { icon: MapPin, label: "Localisation", value: "Paris, France" },
                ].map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#2d2d2d" }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6B7280" }}>
                          {label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: "#2d2d2d" }}>
                          {value}
                        </p>
                      </div>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="inline-flex items-center gap-3.5">{inner}</a>
                      ) : (
                        <div className="inline-flex items-center gap-3.5">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <LeadCaptureForm
                title="Envoyez-nous un message"
                subtitle="Nous vous répondons dans les plus brefs délais."
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
