import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import {
  getAllSubSlugs,
  getServiceBySlug,
  getHubBySlug,
} from "@/data/services";
import { Container } from "@/presentation/components/ui";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { Breadcrumb, InternalLinks } from "@/presentation/components/seo";
import { ShopifyCaseStudies } from "@/presentation/components/seo/ShopifyCaseStudies";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

const HUB_PARALLAX_IMAGES: Record<string, string> = {
  "conception-web": "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  "vibe-coding": "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
  odoo: "/images/rendu3D/rendu3d-cube-vert-macro.webp",
  "google-ads": "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
  "facebook-ads": "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "tiktok-ads": "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "linkedin-ads": "/images/rendu3D/rendu3d-cubes-overhead.webp",
  "snapchat-ads": "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "pinterest-ads": "/images/rendu3D/rendu3d-flatlay-fond-vert.webp",
  "native-ads": "/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp",
  "bing-ads": "/images/rendu3D/rendu3d-rocket-cubes-gris.webp",
  "amazon-ads": "/images/rendu3D/rendu3d-cubes-rocket-closeup.webp",
  "waze-ads": "/images/rendu3D/rendu3d-trio-cubes-flottants.webp",
  seo: "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp",
  "google-my-business": "/images/rendu3D/rendu3d-cube-vert-minimaliste.webp",
  graphisme: "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "lead-generation": "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
  "intelligence-artificielle": "/images/rendu3D/rendu3d-diamant-cubes-flottants.webp",
  "developpement-saas": "/images/rendu3D/rendu3d-rocket-sur-cube-rouge.webp",
  "sites-immersifs-3d": "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "montage-video": "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
};

export function generateStaticParams(): { category: string; slug: string }[] {
  return getAllSubSlugs();
}

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

const BENEFITS = [
  {
    icon: "Target",
    title: "Cadre sur vos objectifs",
    description: "On part de vos priorites business et du niveau de maturite reel de votre projet.",
  },
  {
    icon: "Zap",
    title: "Execution nette",
    description: "Des cycles courts, des livrables concrets et une trajectoire facile a relire.",
  },
  {
    icon: "MessageSquare",
    title: "Interlocuteur unique",
    description: "Un expert dedie qui connait votre contexte et prend les bonnes decisions avec vous.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Audit express",
    description: "On capte l'existant, les angles morts, les priorites et les contraintes du projet.",
  },
  {
    num: "02",
    title: "Plan d'action",
    description: "On structure une feuille de route avec livrables, budget, tempo et points de controle.",
  },
  {
    num: "03",
    title: "Execution & suivi",
    description: "On lance, on mesure et on ajuste sans casser la dynamique du projet.",
  },
];

export default async function ServiceSubPage({ params }: PageProps) {
  const { category, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.parentSlug !== category) {
    notFound();
  }

  const parentHub = service.parentSlug ? getHubBySlug(service.parentSlug) : undefined;
  const currentPath = `/services/${category}/${slug}/`;

  const relatedServices = service.relatedServices
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  const sectorLabels: Record<string, string> = {
    "restaurant-restauration": "Restaurant & Restauration",
    immobilier: "Immobilier",
    sante: "Sante & Bien-etre",
    construction: "Construction & Renovation",
    "commerce-detail": "Commerce de detail",
    "services-professionnels": "Services professionnels",
    beaute: "Beaute & Esthetique",
    automobile: "Automobile",
    ecommerce: "E-commerce",
    education: "Education & Formation",
    tourisme: "Tourisme & Hotellerie",
    juridique: "Juridique",
  };

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      <section className="parallax-section relative overflow-hidden pb-16 pt-10 lg:pb-20 lg:pt-16">
        <ParallaxBg
          src={HUB_PARALLAX_IMAGES[service.parentSlug ?? category] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
          overlay={0.84}
        />

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-[rgba(133,53,62,0.06)] blur-[120px]" />
          <div className="absolute right-[8%] top-0 h-[28rem] w-[28rem] rounded-full bg-[rgba(73,143,109,0.10)] blur-[150px]" />
        </div>

        <div className="relative z-10">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_24rem]">
              <div className="max-w-3xl">
                {parentHub ? (
                  <Link
                    href={`/services/${parentHub.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(45,45,45,0.10)] bg-white/72 px-3.5 py-1.5 text-sm text-[#2d2d2d]/70 transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    <span aria-hidden>&larr;</span>
                    {parentHub.name}
                  </Link>
                ) : null}

                <div
                  className="mt-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                  style={{
                    borderColor: "rgba(73,143,109,0.24)",
                    backgroundColor: "rgba(255,255,255,0.55)",
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span className="font-mono text-xs font-medium text-[#2d2d2d]">
                    Sous-service detaille, cadre pour une demande precise
                  </span>
                </div>

                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-accent/10 text-accent">
                  <LucideIcon name={service.icon} className="h-7 w-7" />
                </div>

                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
                  {service.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                  {service.shortDescription}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {service.pricingLink ? (
                    <Link
                      href={service.pricingLink}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Decouvrir les tarifs
                    </Link>
                  ) : (
                    <Link
                      href="/devis-gratuit/"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Obtenir mon devis
                    </Link>
                  )}
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/72 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    Prendre contact
                  </Link>
                </div>
              </div>

              <div
                className="rounded-[1.75rem] border p-5 shadow-[0_24px_60px_rgba(45,45,45,0.08)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.94) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Point de repere
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                  Quand cette page est utile
                </h2>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                    <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                      Quand vous avez deja un besoin bien nomme et que vous cherchez le bon niveau de precision.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                    <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                      Quand vous voulez verifier rapidement les gains attendus, la methode et les complementarites.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-accent/14 bg-accent/8 p-4">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                        Vous n&apos;avez pas besoin de tout lire: cette page sert surtout a confirmer rapidement la pertinence du service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="pb-16 pt-2 lg:pb-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[1.5rem] border p-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <LucideIcon name={benefit.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2d2d2d]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/68">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 pt-2 lg:pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-[1.5rem] border p-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="font-heading text-4xl font-bold tabular-nums text-accent/30">
                  {step.num}
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold text-[#2d2d2d]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/68">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {slug === "site-shopify" && <ShopifyCaseStudies />}

      {category === "sites-immersifs-3d" && (
        <section className="pb-16 pt-2 lg:pb-24">
          <Container>
            <div className="overflow-hidden rounded-[2rem] border">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px] bg-[#ede9e1]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/services/conception de site web/shopify/rendu3Dmonaco.webp"
                    alt="Rendu 3D Blender — Montecarlo Designs Monaco"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Etude de cas 3D
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-bold text-[#2d2d2d]">
                    Montecarlo Designs — mobilier de luxe a Monaco
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#2d2d2d]/70 sm:text-base">
                    Modelisation complete sous Blender, integration WebGL/GLB et
                    rendu premium pour un e-commerce haut de gamme. Un projet
                    qui montre bien ce que la 3D peut apporter quand elle est
                    pensee comme levier commercial, pas comme simple effet.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/realisations/montecarlo-designs/"
                      className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Voir le projet
                    </Link>
                    <Link
                      href="/services/sites-immersifs-3d/"
                      className="inline-flex items-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/80 px-5 py-3 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      Revenir au hub 3D
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="pb-16 pt-2">
          <Container>
            <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white/76 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Extensions utiles
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                Pour aller plus loin
              </h2>
              <div className="mt-5 space-y-4">
                {relatedServices.map((related) => {
                  const relHref = related.parentSlug
                    ? `/services/${related.parentSlug}/${related.slug}/`
                    : `/services/${related.slug}/`;

                  return (
                    <Link
                      key={related.slug}
                      href={relHref}
                      className="group block rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-[#ede9e1]/72 p-5 transition-all duration-300 hover:border-accent/24 hover:bg-white/80"
                    >
                      <div className="grid gap-4 lg:grid-cols-[56px_minmax(0,1fr)_auto] lg:items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-accent/10 text-accent">
                          <LucideIcon name={related.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-[#2d2d2d] transition-colors group-hover:text-accent">
                            {related.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/68">
                            {related.shortDescription}
                          </p>
                        </div>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {service.relatedSectors.length > 0 && (
        <section className="pb-16 pt-2">
          <Container>
            <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white/76 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Contextes d'usage
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                Secteurs accompagnes
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.relatedSectors.map((sectorSlug) => (
                  <Link
                    key={sectorSlug}
                    href={`/secteurs/${sectorSlug}/`}
                    className="rounded-full border border-[rgba(45,45,45,0.10)] bg-[#ede9e1]/72 px-4 py-2 text-sm font-medium text-[#2d2d2d]/70 transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {sectorLabels[sectorSlug] ?? sectorSlug}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="pb-20 pt-4">
        <Container size="md">
          <div className="rounded-[2rem] border p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
              On parle de votre projet {service.name.toLowerCase()} ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#2d2d2d]/68">
              Recevez une proposition claire et personnalisee, sans couche de
              jargon ni promesse floue.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {service.pricingLink ? (
                <Link
                  href={service.pricingLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Decouvrir les tarifs
                </Link>
              ) : (
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Obtenir mon devis
                </Link>
              )}
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
              >
                Prendre contact
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <InternalLinks currentPath={currentPath} />
      </Container>
    </main>
  );
}
