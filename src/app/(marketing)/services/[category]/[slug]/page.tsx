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
    return { title: "Service introuvable | Lannkin" };
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
    <main>
      {/* Breadcrumb */}
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-16 lg:py-24">
        <ParallaxBg
          src={HUB_PARALLAX_IMAGES[service.parentSlug ?? category] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
          overlay={0.62}
        />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              {parentHub && (
                <Link
                  href={`/services/${parentHub.slug}/`}
                  className="mb-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <span aria-hidden>&larr;</span>
                  {parentHub.name}
                </Link>
              )}
              <Badge variant="default" size="sm" className="mb-6">
                <LucideIcon name={service.icon} className="h-5 w-5" />
              </Badge>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed sm:text-xl" style={{ color: "#DDDDDD" }}>
                {service.shortDescription}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-bold text-white">
              Services connexes
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
                    <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                      {related.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
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
            <h2 className="mb-8 font-heading text-2xl font-bold text-white">
              Secteurs d&apos;activite
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.relatedSectors.map((sectorSlug) => (
                <Link
                  key={sectorSlug}
                  href={`/secteurs/${sectorSlug}/`}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
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
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Besoin d&apos;un expert en {service.name.toLowerCase()}&nbsp;?
            </h2>
            <p className="mt-4 text-muted">
              Contactez notre equipe pour un devis gratuit et personnalise.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {service.pricingLink ? (
                <Button
                  href={service.pricingLink}
                  variant="primary"
                  size="lg"
                >
                  Voir les tarifs
                </Button>
              ) : (
                <Button href="/devis-gratuit/" variant="primary" size="lg">
                  Devis gratuit
                </Button>
              )}
              <Button href="/contact/" variant="secondary" size="lg">
                Nous contacter
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
