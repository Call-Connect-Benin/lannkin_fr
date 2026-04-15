import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllSubSlugs,
  getServiceBySlug,
  getHubBySlug,
} from "@/data/services";
import { Container, Card, Badge, Button } from "@/presentation/components/ui";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { Breadcrumb, InternalLinks } from "@/presentation/components/seo";
import { ShopifyCaseStudies } from "@/presentation/components/seo/ShopifyCaseStudies";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

const HUB_PARALLAX_IMAGES: Record<string, string> = {
  "conception-web":            "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  "vibe-coding":               "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
  "odoo":                      "/images/rendu3D/rendu3d-cube-vert-macro.webp",
  "google-ads":                "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
  "facebook-ads":              "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "tiktok-ads":                "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "linkedin-ads":              "/images/rendu3D/rendu3d-cubes-overhead.webp",
  "snapchat-ads":              "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "pinterest-ads":             "/images/rendu3D/rendu3d-flatlay-fond-vert.webp",
  "native-ads":                "/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp",
  "bing-ads":                  "/images/rendu3D/rendu3d-rocket-cubes-gris.webp",
  "amazon-ads":                "/images/rendu3D/rendu3d-cubes-rocket-closeup.webp",
  "waze-ads":                  "/images/rendu3D/rendu3d-trio-cubes-flottants.webp",
  "seo":                       "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp",
  "google-my-business":        "/images/rendu3D/rendu3d-cube-vert-minimaliste.webp",
  "graphisme":                 "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "lead-generation":           "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
  "intelligence-artificielle": "/images/rendu3D/rendu3d-diamant-cubes-flottants.webp",
  "developpement-saas":        "/images/rendu3D/rendu3d-rocket-sur-cube-rouge.webp",
  "sites-immersifs-3d":        "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "montage-video":             "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
};

// ---------------------------------------------------------------------------
// Static params — pre-render all 126 sub-pages with their parent category
// ---------------------------------------------------------------------------

export function generateStaticParams(): { category: string; slug: string }[] {
  return getAllSubSlugs();
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service introuvable | Ekolink" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.parentSlug ?? ""}/${service.slug}/`,
    },
  };
}

// ---------------------------------------------------------------------------
// Static content (shared across all sub-service pages)
// ---------------------------------------------------------------------------

const BENEFITS = [
  {
    icon: "Target",
    title: "Cadré sur vos objectifs",
    description: "On part de vos priorités business, pas d'un gabarit générique.",
  },
  {
    icon: "Zap",
    title: "Exécution rapide",
    description: "Des cycles courts, des livrables concrets à chaque étape.",
  },
  {
    icon: "MessageSquare",
    title: "Interlocuteur unique",
    description: "Un expert dédié qui porte votre dossier de bout en bout.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Audit express",
    description: "On analyse l'existant, on écoute vos enjeux et on détecte les angles morts.",
  },
  {
    num: "02",
    title: "Plan d'action",
    description: "Une feuille de route claire : livrables, budget, calendrier et KPIs partagés.",
  },
  {
    num: "03",
    title: "Exécution & suivi",
    description: "On met en œuvre, on mesure et on ajuste en continu. Vous gardez la main.",
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function ServiceSubPage({ params }: PageProps) {
  const { category, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.parentSlug !== category) {
    notFound();
  }

  const parentHub = service.parentSlug
    ? getHubBySlug(service.parentSlug)
    : undefined;

  const currentPath = `/services/${category}/${slug}/`;

  // Resolve related services
  const relatedServices = service.relatedServices
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter(
      (s): s is NonNullable<typeof s> => s !== undefined,
    );

  // Resolve related sectors
  const sectorLabels: Record<string, string> = {
    "restaurant-restauration": "Restaurant & Restauration",
    immobilier: "Immobilier",
    sante: "Santé & Bien-être",
    construction: "Construction & Rénovation",
    "commerce-detail": "Commerce de détail",
    "services-professionnels": "Services professionnels",
    beaute: "Beauté & Esthétique",
    automobile: "Automobile",
    ecommerce: "E-commerce",
    education: "Éducation & Formation",
    tourisme: "Tourisme & Hôtellerie",
    juridique: "Juridique",
  };

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* Breadcrumb */}
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-16 lg:py-24">
        <ParallaxBg
          src={HUB_PARALLAX_IMAGES[service.parentSlug ?? category] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
          overlay={0.85}
        />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              {parentHub && (
                <Link
                  href={`/services/${parentHub.slug}/`}
                  className="mb-4 inline-flex items-center gap-2 text-sm text-[#2d2d2d]/70 transition-colors hover:text-accent"
                >
                  <span aria-hidden>&larr;</span>
                  {parentHub.name}
                </Link>
              )}
              <Badge variant="default" size="sm" className="mb-6">
                <LucideIcon name={service.icon} className="h-5 w-5" />
              </Badge>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
                {service.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed sm:text-xl" style={{ color: "rgba(45,45,45,0.75)" }}>
                {service.shortDescription}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16">
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              Ce que vous y gagnez
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              Un accompagnement taillé pour votre projet.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                >
                  <LucideIcon name={b.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-bold" style={{ color: "#2d2d2d" }}>{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.70)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              Comment on démarre
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#2d2d2d" }}>
              Trois étapes, zéro flou.
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

      {/* Shopify case studies */}
      {slug === "site-shopify" && <ShopifyCaseStudies />}

      {/* 3D case study — Montecarlo Designs (on all sites-immersifs-3d sub-pages) */}
      {category === "sites-immersifs-3d" && (
        <section className="py-16">
          <Container>
            <div className="glass rounded-2xl overflow-hidden lg:flex">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:w-2/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/services/conception de site web/shopify/rendu3Dmonaco.webp"
                  alt="Rendu 3D Blender — Montecarlo Designs Monaco"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 lg:flex lg:w-3/5 lg:flex-col lg:justify-center lg:p-10">
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                  Étude de cas 3D
                </p>
                <h3 className="font-heading text-2xl font-bold text-[#2d2d2d]">
                  Montecarlo Designs — Mobilier de luxe à Monaco
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/70">
                  Modélisation 3D complète de tables en marbre avec Blender, intégration
                  WebGL/GLB pour le SEO Google, et e-commerce premium. Un projet qui
                  illustre la puissance de la 3D pour le e-commerce de luxe.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/realisations/montecarlo-designs/"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    Voir le projet
                    <span aria-hidden>&rarr;</span>
                  </Link>
                  <Link
                    href="/services/sites-immersifs-3d/"
                    className="inline-flex items-center gap-1.5 text-sm text-[#2d2d2d]/70 transition-colors hover:text-[#2d2d2d]"
                  >
                    Nos services 3D
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-bold text-[#2d2d2d]">
              Pour aller plus loin
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => {
                const relHref = related.parentSlug
                  ? `/services/${related.parentSlug}/${related.slug}/`
                  : `/services/${related.slug}/`;
                return (
                  <Card key={related.slug} hover href={relHref}>
                    <div className="mb-3 text-accent">
                      <LucideIcon name={related.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-[#2d2d2d]">
                      {related.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#2d2d2d]/70">
                      {related.shortDescription}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Related sectors */}
      {service.relatedSectors.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-bold text-[#2d2d2d]">
              Secteurs accompagnés
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.relatedSectors.map((sectorSlug) => (
                <Link
                  key={sectorSlug}
                  href={`/secteurs/${sectorSlug}/`}
                  className="rounded-lg border border-[#2d2d2d]/[0.10] px-4 py-2 text-sm text-[#2d2d2d]/70 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {sectorLabels[sectorSlug] ?? sectorSlug}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <Container size="md">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              On parle de votre projet {service.name.toLowerCase()}&nbsp;?
            </h2>
            <p className="mt-4 text-[#2d2d2d]/70">
              Recevez sous 24h une proposition claire et personnalisée. Sans engagement,
              sans discours commercial — juste des réponses concrètes à vos questions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {service.pricingLink ? (
                <Button
                  href={service.pricingLink}
                  variant="primary"
                  size="lg"
                >
                  Découvrir les tarifs
                </Button>
              ) : (
                <Button href="/devis-gratuit/" variant="primary" size="lg">
                  Obtenir mon devis
                </Button>
              )}
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
