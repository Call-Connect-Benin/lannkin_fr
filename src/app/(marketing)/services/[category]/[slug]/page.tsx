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
    "sante-clinique": "Sante & Clinique",
    "construction-renovation": "Construction & Renovation",
    "commerce-detail": "Commerce de detail",
    "services-professionnels": "Services professionnels",
    "beaute-esthetique": "Beaute & Esthetique",
    automobile: "Automobile",
    "ecommerce-en-ligne": "E-commerce",
    "education-formation": "Education & Formation",
    "tourisme-hotellerie": "Tourisme & Hotellerie",
    "juridique-avocats": "Juridique & Avocats",
  };

  return (
    <main>
      {/* Breadcrumb */}
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      {/* Hero */}
      <section className="py-16 lg:py-24">
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
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              {service.shortDescription}
            </p>
          </div>
        </Container>
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
