import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllHubSlugs,
  getHubBySlug,
  getSubServices,
  getServiceBySlug,
} from "@/data/services";
import { Container, Card, Badge, Button } from "@/presentation/components/ui";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { Breadcrumb, InternalLinks } from "@/presentation/components/seo";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

const HUB_PARALLAX_IMAGES: Record<string, string> = {
  "conception-web":          "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  "vibe-coding":             "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
  "odoo":                    "/images/rendu3D/rendu3d-cube-vert-macro.webp",
  "google-ads":              "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
  "facebook-ads":            "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "tiktok-ads":              "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "linkedin-ads":            "/images/rendu3D/rendu3d-cubes-overhead.webp",
  "snapchat-ads":            "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "pinterest-ads":           "/images/rendu3D/rendu3d-flatlay-fond-vert.webp",
  "native-ads":              "/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp",
  "bing-ads":                "/images/rendu3D/rendu3d-rocket-cubes-gris.webp",
  "amazon-ads":              "/images/rendu3D/rendu3d-cubes-rocket-closeup.webp",
  "waze-ads":                "/images/rendu3D/rendu3d-trio-cubes-flottants.webp",
  "seo":                     "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp",
  "google-my-business":      "/images/rendu3D/rendu3d-cube-vert-minimaliste.webp",
  "graphisme":               "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "lead-generation":         "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
  "intelligence-artificielle": "/images/rendu3D/rendu3d-diamant-cubes-flottants.webp",
  "developpement-saas":      "/images/rendu3D/rendu3d-rocket-sur-cube-rouge.webp",
  "sites-immersifs-3d":      "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "montage-video":           "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
};

const WHY_POINTS = [
  {
    icon: "UserCheck",
    title: "Un expert dédié",
    description: "Un interlocuteur unique qui connaît votre dossier sur le bout des doigts.",
  },
  {
    icon: "Eye",
    title: "Pilotage transparent",
    description: "Accès direct à vos comptes, reporting clair, aucun jargon superflu.",
  },
  {
    icon: "TrendingUp",
    title: "Performances mesurées",
    description: "Chaque action se traduit en chiffres, avec des objectifs partagés dès le départ.",
  },
  {
    icon: "Shield",
    title: "Sans engagement",
    description: "Pas de contrat piège. Nous restons parce que les résultats parlent pour nous.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Cadrer votre besoin",
    description: "On comprend votre contexte, vos objectifs et les contraintes avant toute proposition.",
  },
  {
    num: "02",
    title: "Proposition sur-mesure",
    description: "Un plan d'action détaillé avec budget, calendrier et KPIs clairs.",
  },
  {
    num: "03",
    title: "Lancement & pilotage",
    description: "On déploie, on suit la performance au quotidien et on ajuste en continu.",
  },
];

// ---------------------------------------------------------------------------
// Static params — pre-render all 20 hub pages
// ---------------------------------------------------------------------------

export function generateStaticParams(): { category: string }[] {
  return getAllHubSlugs().map((slug) => ({ category: slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const hub = getHubBySlug(category);

  if (!hub) {
    return { title: "Service introuvable | Ekolink" };
  }

  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    keywords: hub.keywords,
    alternates: {
      canonical: `/services/${hub.slug}/`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function ServiceHubPage({ params }: PageProps) {
  const { category } = await params;
  const hub = getHubBySlug(category);

  if (!hub) {
    notFound();
  }

  const subServices = getSubServices(hub.slug);
  const currentPath = `/services/${hub.slug}/`;

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* Breadcrumb */}
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="parallax-section relative overflow-hidden py-16 lg:py-24">
        <ParallaxBg
          src={HUB_PARALLAX_IMAGES[hub.slug] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
          overlay={0.85}
        />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="default" size="sm" className="mb-6">
                <LucideIcon name={hub.icon} className="h-5 w-5" />
              </Badge>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
                {hub.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed sm:text-xl" style={{ color: "rgba(45,45,45,0.75)" }}>
                {hub.shortDescription}
              </p>
              {hub.pricingLink && (
                <div className="mt-8">
                  <Button href={hub.pricingLink} variant="primary" size="lg">
                    Découvrir les tarifs
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. POURQUOI NOUS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16">
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              Notre approche
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              Quatre engagements, une même exigence.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <LucideIcon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SUB-SERVICES (dynamique)
      ═══════════════════════════════════════════════════════ */}
      {subServices.length > 0 && (
        <section className="py-16">
          <Container>
            <div className="mb-12 text-center">
              <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
                Nos prestations
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
                Tout le spectre {hub.name}.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subServices.map((sub) => (
                <Card
                  key={sub.slug}
                  hover
                  href={`/services/${hub.slug}/${sub.slug}/`}
                >
                  <div className="mb-3 text-accent">
                    <LucideIcon name={sub.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-[#2d2d2d]">
                    {sub.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2d2d2d]/70">
                    {sub.shortDescription}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          4. PROCESS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16">
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              Comment on travaille
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              Une collaboration en trois temps.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                <div
                  className="font-heading text-3xl font-bold tabular-nums"
                  style={{ color: "rgba(73,143,109,0.35)" }}
                >
                  {step.num}
                </div>
                <h3 className="mt-2 font-heading text-lg font-bold" style={{ color: "#2d2d2d" }}>{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. EXPERTISES ASSOCIÉES (dynamique)
      ═══════════════════════════════════════════════════════ */}
      {hub.relatedServices.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-bold text-[#2d2d2d]">
              Expertises associées
            </h2>
            <div className="flex flex-wrap gap-3">
              {hub.relatedServices.map((relSlug) => {
                const related = getServiceBySlug(relSlug);
                if (!related) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/services/${relSlug}/`}
                    className="rounded-lg border border-[#2d2d2d]/[0.10] px-4 py-2 text-sm text-[#2d2d2d]/70 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {related.name}
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          6. CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16">
        <Container size="md">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="mt-4 text-[#2d2d2d]/70">
              Recevez sous 24h une proposition sur-mesure pour vos besoins en{" "}
              {hub.name.toLowerCase()}. Sans engagement, sans discours commercial.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/devis-gratuit/" variant="primary" size="lg">
                Obtenir mon devis
              </Button>
              <Button href="/contact/" variant="secondary" size="lg">
                Prendre contact
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Internal links */}
      <Container>
        <InternalLinks currentPath={currentPath} />
      </Container>
    </main>
  );
}
