import type { Metadata } from "next";

import { ArrowRight, BookOpen, Gauge, GraduationCap, Lock } from "lucide-react";
import Link from "next/link";

import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Ressources gratuites | Lannkin — Outils, Ebooks & Formations",
  description:
    "Accédez gratuitement aux outils, ebooks et formations de Lannkin : audit Google Ads, guides SEO, formations marketing digital. Tout pour booster votre croissance.",
  alternates: { canonical: "https://lannkin.ca/ressources-gratuites/" },
};

// ─── Données des ressources ───────────────────────────────────────────────────

type ResourceType = "outil" | "ebook" | "formation";

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
    image: "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
    tag: "Disponible",
    available: true,
  },
  {
    type: "ebook",
    label: "Ebook PDF",
    title: "Guide SEO Local Québec 2025",
    description:
      "Tout ce qu'il faut savoir pour dominer les résultats de recherche dans votre ville : Google Business Profile, citations locales, avis clients et contenu géo-ciblé.",
    image: "/images/rendu3D/rendu3d-diamant-cubes-flottants.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "ebook",
    label: "Ebook PDF",
    title: "Guide Google Ads pour débutants",
    description:
      "De la création du compte à votre première campagne rentable : structure, enchères, ciblage, extensions et suivi des conversions expliqués simplement.",
    image: "/images/rendu3D/rendu3d-flatlay-fond-vert.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "formation",
    label: "Formation vidéo",
    title: "Formation Google Ads — Niveau 1",
    description:
      "Apprenez à gérer vos campagnes Google Ads de A à Z. Modules vidéo, exercices pratiques et accès à notre communauté d'entraide.",
    image: "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "formation",
    label: "Formation vidéo",
    title: "Formation SEO & Contenu — Niveau 1",
    description:
      "Maîtrisez les fondamentaux du référencement naturel : audit technique, recherche de mots-clés, rédaction optimisée et création de liens.",
    image: "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
    tag: "Bientôt",
    available: false,
  },
  {
    type: "outil",
    label: "Outil gratuit",
    title: "Calculateur ROI publicitaire",
    description:
      "Estimez le retour sur investissement de vos campagnes publicitaires en quelques clics. Comparaison Google Ads, Meta Ads, SEO et Native Ads.",
    image: "/images/rendu3D/rendu3d-cubes-lateral-angle.webp",
    tag: "Bientôt",
    available: false,
  },
];

const TYPE_CONFIG: Record<ResourceType, { icon: React.ElementType; color: string; bg: string }> = {
  outil: { icon: Gauge, color: "#498f6d", bg: "rgba(73,143,109,0.12)" },
  ebook: { icon: BookOpen, color: "#7C6CF0", bg: "rgba(124,108,240,0.12)" },
  formation: { icon: GraduationCap, color: "#E88C3A", bg: "rgba(232,140,58,0.12)" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RessourcesGratuitesPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO — dark + 3D background
      ═══════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">

        {/* Image 3D en fond, côté droit en diagonale */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[65%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.22 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(108deg, #0C0C0C 18%, rgba(12,12,12,0.65) 40%, transparent 62%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #0C0C0C 0%, transparent 20%, transparent 80%, #0C0C0C 100%)",
              }}
            />
          </div>
        </div>

        {/* Halo vert */}
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73, 143, 109, 0.09)" }}
          aria-hidden
        />

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Badge */}
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
              <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>
                100 % gratuit — sans engagement
              </span>
            </div>

            <h1
              className="font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]"
              style={{ color: "#FFFFFF" }}
            >
              Ressources{" "}
              <span style={{ color: "#498f6d" }}>gratuites</span>
            </h1>

            <div
              className="mt-5 h-px w-14"
              style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
            />

            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Outils pratiques, ebooks et formations pour développer votre
              présence en ligne. Créés par notre équipe, disponibles sans
              inscription.
            </p>

            {/* Stats rapides */}
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "1", label: "outil disponible" },
                { value: "5+", label: "ressources à venir" },
                { value: "0 $", label: "coût total" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-heading text-3xl font-bold"
                    style={{ color: "#498f6d" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
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
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
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
              style={{ background: "linear-gradient(to right, transparent, #0C0C0C)" }}
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
              style={{ color: "#FFFFFF" }}
            >
              Vous avez un projet ?
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Ces ressources vous ont aidé ? Discutons de votre stratégie
              marketing — consultation gratuite, sans engagement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
              >
                Parler à un expert
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tarifs/"
                className="inline-flex items-center gap-2 rounded-lg border px-8 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.70)" }}
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
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </h2>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
          {description}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} resource={resource} />
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
        className="relative mb-5 h-36 overflow-hidden rounded-xl"
        style={{ backgroundColor: "#161616" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resource.image}
          alt=""
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: resource.available ? 0.60 : 0.30 }}
        />
        {/* Gradient sur l'image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(22,22,22,0.8) 0%, transparent 60%)",
          }}
        />
        {/* Tag coin supérieur droit */}
        <div className="absolute right-3 top-3">
          <span
            className="rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
            style={
              resource.available
                ? { backgroundColor: "rgba(73,143,109,0.25)", color: "#498f6d" }
                : { backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }
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
        style={{ color: resource.available ? "#FFFFFF" : "rgba(255,255,255,0.55)" }}
      >
        {resource.title}
      </h3>
      <p
        className="mt-2.5 flex-1 text-sm leading-relaxed"
        style={{ color: "rgba(255,255,255,0.42)" }}
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
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <Lock className="h-3 w-3" />
            Bientôt disponible
          </span>
        )}
      </div>
    </>
  );

  const cardStyle = {
    backgroundColor: "#111111",
    border: resource.available
      ? "1px solid rgba(73,143,109,0.15)"
      : "1px solid rgba(255,255,255,0.05)",
  };

  const hoverClass =
    "group flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]";

  if (resource.available && resource.href) {
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
