import type { Metadata } from "next";

import { ArrowRight, BookOpen, Gauge, GraduationCap, Lock, Youtube } from "lucide-react";
import Link from "next/link";

import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Ressources Marketing Digital Gratuites | Lannkin",
  description:
    "Outils SEO gratuits, guides Google Ads et formations marketing digital. Accédez aux ressources Lannkin pour booster votre croissance en ligne.",
  alternates: { canonical: "https://lannkin.com/ressources-gratuites/" },
};

// ─── Données des ressources ───────────────────────────────────────────────────

type ResourceType = "outil" | "ebook" | "formation" | "video";

interface Resource {
  type: ResourceType;
  label: string;
  title: string;
  description: string;
  href?: string;
  image: string;
  tag?: string;
  available: boolean;
}

const RESOURCES: Resource[] = [
  {
    type: "outil",
    label: "Outil gratuit",
    title: "Audit Google Ads — Clics frauduleux",
    description:
      "Analysez 90 jours de données et découvrez combien vous perdez en clics robots, trafic hors zone et budget gaspillé. Récupérez votre argent via Google.",
    href: "/ressources-gratuites/audit-google-ads/",
    image: "/images/ressources/audit-google-ads.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "ebook",
    label: "Ebook PDF",
    title: "Guide SEO Local France 2025",
    description:
      "Tout ce qu'il faut savoir pour dominer les résultats de recherche dans votre ville : Google Business Profile, citations locales, avis clients et contenu géo-ciblé.",
    href: "https://drive.google.com/drive/folders/1xO5RMK2Aa5163y6fOrdJA6DaOCMk-z0Q",
    image: "/images/ressources/guide-seo-local.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "ebook",
    label: "Ebook PDF",
    title: "Guide Google Ads pour débutants",
    description:
      "De la création du compte à votre première campagne rentable : structure, enchères, ciblage, extensions et suivi des conversions expliqués simplement.",
    href: "https://drive.google.com/drive/folders/1xO5RMK2Aa5163y6fOrdJA6DaOCMk-z0Q",
    image: "/images/ressources/guide-google-ads.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "formation",
    label: "Formation vidéo",
    title: "Formation Google Ads — Niveau 1",
    description:
      "Apprenez à gérer vos campagnes Google Ads de A à Z. Modules vidéo, exercices pratiques et accès à notre communauté d'entraide.",
    image: "/images/ressources/formation-google-ads.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "formation",
    label: "Formation vidéo",
    title: "Formation SEO & Contenu — Niveau 1",
    description:
      "Maîtrisez les fondamentaux du référencement naturel : audit technique, recherche de mots-clés, rédaction optimisée et création de liens.",
    image: "/images/ressources/formation-seo-contenu.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "outil",
    label: "Outil gratuit",
    title: "Calculateur ROI publicitaire",
    description:
      "Estimez le retour sur investissement de vos campagnes publicitaires en quelques clics. Comparaison Google Ads, Meta Ads, SEO et Native Ads.",
    image: "/images/ressources/calculateur-roi.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "outil",
    label: "Outil gratuit",
    title: "Checklist CRO",
    description:
      "Checklist complète pour optimiser le taux de conversion de votre site web. Parcourez chaque point et améliorez vos performances.",
    href: "https://docs.google.com/spreadsheets/d/19aLnQvIRFY1QkCwVlrK6_ySEPj5PIBzK/edit",
    image: "/images/ressources/checklist-cro.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "outil",
    label: "Outil gratuit",
    title: "Optimisation fiche Google My Business",
    description:
      "Guide complet pour optimiser votre fiche Google Business Profile : catégories, descriptions, photos, avis et astuces pour le SEO local.",
    href: "https://docs.google.com/spreadsheets/d/1ezdD5MJo-I-pNU6wtDqALF7Sp4HxpH7IOaBbBMJMj6A/edit",
    image: "/images/ressources/optimisation-gmb.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "ebook",
    label: "Ebook PDF",
    title: "Collection Ebooks Lannkin",
    description:
      "Accédez à tous nos ebooks et guides PDF sur le marketing digital : SEO, Google Ads, réseaux sociaux et plus encore.",
    href: "https://drive.google.com/drive/folders/1xO5RMK2Aa5163y6fOrdJA6DaOCMk-z0Q",
    image: "/images/ressources/collection-ebooks.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "video",
    label: "Chaîne YouTube",
    title: "Albert Lanne Ads",
    description:
      "Tutoriels Google Ads, stratégies publicitaires et conseils pratiques pour optimiser vos campagnes.",
    href: "https://www.youtube.com/@AlbertLanneAds",
    image: "/images/ressources/albert-lanne-ads.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "video",
    label: "Chaîne YouTube",
    title: "Lannkin France - Strat??gie digitale",
    description:
      "Stratégies web, marketing digital et croissance pour les entreprises canadiennes.",
    href: "https://www.youtube.com/@LannkinFrance",
    image: "/images/ressources/lannkin-france.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "video",
    label: "Chaîne YouTube",
    title: "Lannkin France",
    description:
      "Conseils marketing digital, tutoriels et analyses pour le marché français.",
    href: "https://www.youtube.com/@LannkinFrance",
    image: "/images/ressources/lannkin-france.webp",
    tag: "Disponible",
    available: true,
  },
];

const TYPE_CONFIG: Record<ResourceType, { icon: React.ElementType; color: string; bg: string }> = {
  outil: { icon: Gauge, color: "#498f6d", bg: "rgba(73,143,109,0.12)" },
  ebook: { icon: BookOpen, color: "#7C6CF0", bg: "rgba(124,108,240,0.12)" },
  formation: { icon: GraduationCap, color: "#E88C3A", bg: "rgba(232,140,58,0.12)" },
  video: { icon: Youtube, color: "#FF0000", bg: "rgba(255,0,0,0.12)" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RessourcesGratuitesPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO — dark + 3D background
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-8 pt-10 sm:pb-12 sm:pt-14 lg:pb-16 lg:pt-20">

        {/* Image 3D en fond, côté droit en diagonale */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[65%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.13 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(108deg, #f7f5f0 18%, rgba(247,245,240,0.65) 40%, transparent 62%)",
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

        {/* Halo vert */}
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73, 143, 109, 0.09)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_360px] lg:items-end">
            <div
              className="rounded-[2rem] border px-6 py-8 shadow-[0_24px_80px_rgba(73,143,109,0.08)] sm:px-8 sm:py-10 lg:px-10"
              style={{
                borderColor: "rgba(45,45,45,0.08)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.78), rgba(255,255,255,0.52))",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{ borderColor: "rgba(73,143,109,0.30)", backgroundColor: "rgba(73,143,109,0.10)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ backgroundColor: "#498f6d" }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#498f6d" }}
                  />
                </span>
                <span
                  className="font-mono text-xs font-medium uppercase tracking-[0.24em]"
                  style={{ color: "#2d2d2d" }}
                >
                  100 % gratuit, sans engagement
                </span>
              </div>

              <div className="max-w-3xl">
                <p
                  className="font-mono text-xs uppercase tracking-[0.28em]"
                  style={{ color: "rgba(73,143,109,0.9)" }}
                >
                  Bibliothèque marketing
                </p>

                <h1
                  className="mt-4 font-heading text-5xl font-bold tracking-tight sm:text-[3.6rem] sm:leading-[0.98] lg:text-[4.35rem]"
                  style={{ color: "#2d2d2d" }}
                >
                  Des ressources utiles,
                  <br className="hidden sm:block" /> vraiment prêtes à l&apos;emploi.
                </h1>

                <p
                  className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-[1.15rem]"
                  style={{ color: "#5f6b63" }}
                >
                  Outils pratiques, checklists, ebooks et contenus de formation pour accélérer
                  votre présence en ligne sans passer par un tunnel de capture.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#outils"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#498f6d", color: "#f7f5f0" }}
                >
                  Explorer les ressources
                </a>
                <a
                  href="#youtube"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{
                    borderColor: "rgba(45,45,45,0.10)",
                    backgroundColor: "rgba(255,255,255,0.56)",
                    color: "#2d2d2d",
                  }}
                >
                  Voir les contenus vidéo
                  <Youtube className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "9", label: "ressources déjà disponibles" },
                  { value: "2", label: "nouvelles sorties prévues" },
                  { value: "0 $", label: "barrière d'entrée" },
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
                <div
                  className="inline-flex rounded-2xl p-3"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <BookOpen className="h-5 w-5" />
                </div>
                <p
                  className="mt-5 font-mono text-[11px] uppercase tracking-[0.26em]"
                  style={{ color: "#7a847d" }}
                >
                  Lecture rapide
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight" style={{ color: "#2d2d2d" }}>
                  Un hero plus utile qu&apos;un simple bandeau.
                </h2>
                <p className="mt-3 text-sm leading-7" style={{ color: "#6B7280" }}>
                  Chaque bloc met en avant un bénéfice clair, une porte d&apos;entrée concrète
                  et les formats les plus utiles pour vos prochains chantiers marketing.
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
                  Ce que vous trouverez
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    {
                      icon: Gauge,
                      title: "Outils concrets",
                      text: "Audits, calculateurs et checklists actionnables.",
                    },
                    {
                      icon: GraduationCap,
                      title: "Formats pédagogiques",
                      text: "Guides, ebooks et bases de formation pour aller plus vite.",
                    },
                    {
                      icon: Lock,
                      title: "Accès libre",
                      text: "Pas d'abonnement, pas d'espace membre obligatoire.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 rounded-2xl p-2.5"
                          style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#2d2d2d" }}>
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-6" style={{ color: "#6B7280" }}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Badge */}
            <div
              className="hidden mb-6 items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.30)", backgroundColor: "rgba(73,143,109,0.10)" }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: "#498f6d" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#498f6d" }}
                />
              </span>
              <span className="font-mono text-xs font-medium" style={{ color: "#2d2d2d" }}>
                100 % gratuit — sans engagement
              </span>
            </div>

            <h1
              className="hidden font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]"
              style={{ color: "#2d2d2d" }}
            >
              Ressources{" "}
              <span style={{ color: "#2d2d2d" }}>gratuites</span>
            </h1>

            <div
              className="hidden mt-5 h-px w-14"
              style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
            />

            <p
              className="hidden mt-5 text-lg leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Outils pratiques, ebooks et formations pour développer votre
              présence en ligne. Créés par notre équipe, disponibles sans
              inscription.
            </p>

            {/* Stats rapides */}
            <div className="hidden mt-10 flex-wrap gap-8">
              {[
                { value: "9", label: "ressources disponibles" },
                { value: "2", label: "ressources à venir" },
                { value: "0 $", label: "coût total" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-heading text-3xl font-bold"
                    style={{ color: "#2d2d2d" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm" style={{ color: "#6B7280" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GRILLE DES RESSOURCES
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pb-24 pt-4">
        {/* Ligne de séparation subtile */}
        <div
          className="mb-16 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(45,45,45,0.10), transparent)" }}
        />

        <Container>
          {/* Section : Outils */}
          <ResourceSection
            id="outils"
            title="Outils gratuits"
            description="Analysez, mesurez et optimisez vos performances marketing."
            resources={RESOURCES.filter((r) => r.type === "outil")}
          />

          {/* Section : Ebooks */}
          <ResourceSection
            id="ebooks"
            title="Ebooks & Guides"
            description="Des guides complets pour maîtriser chaque levier du marketing digital."
            resources={RESOURCES.filter((r) => r.type === "ebook")}
          />

          {/* Section : Formations */}
          <ResourceSection
            id="formations"
            title="Formations vidéo"
            description="Apprenez à votre rythme avec nos formations pratiques et actionnables."
            resources={RESOURCES.filter((r) => r.type === "formation")}
          />

          {/* Section : YouTube */}
          <ResourceSection
            id="youtube"
            title="Chaînes YouTube"
            description="Suivez nos chaînes pour des tutoriels, analyses et stratégies marketing en vidéo."
            resources={RESOURCES.filter((r) => r.type === "video")}
          />
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-24">
        {/* 3D bg subtil */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 left-0 w-[50%] opacity-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-trio-cubes-flottants.webp"
              alt=""
              className="h-full w-full object-cover object-right"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent, #f7f5f0)" }}
            />
          </div>
        </div>

        <Container className="relative z-10">
          <div
            className="rounded-2xl p-10 text-center sm:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(73,143,109,0.08) 0%, rgba(73,143,109,0.03) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            <h2
              className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#2d2d2d" }}
            >
              Vous avez un projet ?
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              Ces ressources vous ont aidé ? Discutons de votre stratégie
              marketing — consultation gratuite, sans engagement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#fff" }}
              >
                Parler à un expert
              </Link>
              <Link
                href="/tarifs/"
                className="inline-flex items-center gap-2 rounded-lg border px-8 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// ─── Composant section ────────────────────────────────────────────────────────

function ResourceSection({
  id,
  title,
  description,
  resources,
}: {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}) {
  return (
    <div id={id} className="mb-20">
      <div className="mb-8">
        <h2
          className="font-heading text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: "#2d2d2d" }}
        >
          {title}
        </h2>
        <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>
          {description}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <ResourceCard key={`${id}-${resource.href ?? "local"}-${resource.title}-${index}`} resource={resource} />
        ))}
      </div>
    </div>
  );
}

// ─── Composant carte ─────────────────────────────────────────────────────────

function ResourceCard({ resource }: { resource: Resource }) {
  const config = TYPE_CONFIG[resource.type];
  const Icon = config.icon as React.FC<{ className?: string }>;

  const cardContent = (
    <>
      {/* Image 3D miniature */}
      <div
        className="relative mb-5 h-36 overflow-hidden rounded-lg"
        style={{ backgroundColor: "#e5e0d8" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resource.image}
          alt=""
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: resource.available ? 0.90 : 0.30 }}
        />
        {/* Gradient sur l'image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(229,224,216,0.6) 0%, transparent 40%)",
          }}
        />
        {/* Tag coin supérieur droit */}
        <div className="absolute right-3 top-3">
          <span
            className="rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
            style={
              resource.available
                ? { backgroundColor: "rgba(73,143,109,0.18)", color: "#2d2d2d" }
                : { backgroundColor: "rgba(45,45,45,0.08)", color: "#6B7280" }
            }
          >
            {resource.tag}
          </span>
        </div>
        {/* Icône type en bas gauche */}
        <div className="absolute bottom-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="text-[11px] font-medium">{resource.label}</span>
          </span>
        </div>
      </div>

      {/* Contenu */}
      <h3
        className="font-heading text-base font-semibold leading-snug transition-colors"
        style={{ color: resource.available ? "#2d2d2d" : "#6B7280" }}
      >
        {resource.title}
      </h3>
      <p
        className="mt-2.5 flex-1 text-sm leading-relaxed"
        style={{ color: "#6B7280" }}
      >
        {resource.description}
      </p>

      {/* CTA */}
      <div className="mt-5">
        {resource.available ? (
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
            style={{ color: "#498f6d" }}
          >
            Accéder gratuitement
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 text-sm"
            style={{ color: "#6B7280" }}
          >
            <Lock className="h-3 w-3" />
            Bientôt disponible
          </span>
        )}
      </div>
    </>
  );

  const cardStyle = {
    backgroundColor: "#ede9e1",
    border: resource.available
      ? "1px solid rgba(73,143,109,0.20)"
      : "1px solid rgba(45,45,45,0.08)",
  };

  const hoverClass =
    "group flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]";

  if (resource.available && resource.href) {
    const isExternal = resource.href.startsWith("http");
    if (isExternal) {
      return (
        <a href={resource.href} target="_blank" rel="noopener noreferrer" className={hoverClass} style={cardStyle}>
          {cardContent}
        </a>
      );
    }
    return (
      <Link href={resource.href} className={hoverClass} style={cardStyle}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={hoverClass} style={{ ...cardStyle, cursor: "default" }}>
      {cardContent}
    </div>
  );
}

