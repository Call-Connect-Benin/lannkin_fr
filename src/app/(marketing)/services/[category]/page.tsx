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
    return { title: "Service introuvable | Lannkin" };
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
    <main>
      {/* Breadcrumb */}
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-16 lg:py-24">
        <ParallaxBg
          src={HUB_PARALLAX_IMAGES[hub.slug] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
          overlay={0.62}
        />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="default" size="sm" className="mb-6">
                <LucideIcon name={hub.icon} className="h-5 w-5" />
              </Badge>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hub.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed sm:text-xl" style={{ color: "#DDDDDD" }}>
                {hub.shortDescription}
              </p>
              {hub.pricingLink && (
                <div className="mt-8">
                  <Button href={hub.pricingLink} variant="primary" size="lg">
                    Voir les tarifs
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </div>
      </section>

      {/* Sub-services grid */}
      {subServices.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-white sm:text-4xl">
              Nos services {hub.name}
            </h2>
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
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                    {sub.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {sub.shortDescription}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related services */}
      {hub.relatedServices.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-bold text-white">
              Services complémentaires
            </h2>
            <div className="flex flex-wrap gap-3">
              {hub.relatedServices.map((relSlug) => {
                const related = getServiceBySlug(relSlug);
                if (!related) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/services/${relSlug}/`}
                    className="rounded-lg border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {related.name}
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <Container size="md">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mt-4 text-muted">
              Obtenez un devis gratuit et personnalisé pour vos besoins en{" "}
              {hub.name.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/devis-gratuit/" variant="primary" size="lg">
                Devis gratuit
              </Button>
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
