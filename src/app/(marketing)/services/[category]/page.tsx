import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import {
  getAllHubSlugs,
  getHubBySlug,
  getSubServices,
  getServiceBySlug,
} from "@/data/services";
import { Container } from "@/presentation/components/ui";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { Breadcrumb, InternalLinks } from "@/presentation/components/seo";
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

const WHY_POINTS = [
  {
    icon: "UserCheck",
    title: "Un expert dedie",
    description: "Un interlocuteur unique qui connait votre dossier et porte l'execution de bout en bout.",
  },
  {
    icon: "Eye",
    title: "Pilotage transparent",
    description: "Des priorites claires, un reporting lisible et aucune zone grise dans le suivi.",
  },
  {
    icon: "TrendingUp",
    title: "Performances mesurees",
    description: "Les actions sont reliees a des objectifs concrets, pas a une simple production decorative.",
  },
  {
    icon: "Shield",
    title: "Cadre sain",
    description: "Pas de contrat piege ni d'empilement inutile. On structure ce qui sert vraiment votre projet.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Cadrer votre besoin",
    description: "On clarifie le contexte, les objectifs, les contraintes et le niveau d'ambition avant toute proposition.",
  },
  {
    num: "02",
    title: "Proposition sur mesure",
    description: "On transforme le besoin en feuille de route: livrables, budget, calendrier et priorites.",
  },
  {
    num: "03",
    title: "Lancement & pilotage",
    description: "On execute, on suit la performance et on ajuste le dispositif sans perdre de vitesse.",
  },
];

export function generateStaticParams(): { category: string }[] {
  return getAllHubSlugs().map((slug) => ({ category: slug }));
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
      <Container className="pt-8">
        <Breadcrumb currentPath={currentPath} />
      </Container>

      <section className="parallax-section relative overflow-hidden pb-16 pt-10 lg:pb-20 lg:pt-16">
        <ParallaxBg
          src={HUB_PARALLAX_IMAGES[hub.slug] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
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
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                  style={{
                    borderColor: "rgba(73,143,109,0.24)",
                    backgroundColor: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span className="font-mono text-xs font-medium text-[#2d2d2d]">
                    Hub de service structure pour la decision
                  </span>
                </div>

                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-accent/10 text-accent">
                  <LucideIcon name={hub.icon} className="h-7 w-7" />
                </div>

                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
                  {hub.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                  {hub.shortDescription}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {hub.pricingLink ? (
                    <Link
                      href={hub.pricingLink}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Decouvrir les tarifs
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Link
                      href="/devis-gratuit/"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Demander un devis
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                  <Link
                    href="/services/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/72 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    Revenir aux expertises
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
                  En pratique
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                  Ce que vous trouvez ici
                </h2>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                    <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                      Une vision globale de l&apos;expertise, de ses promesses et de ses ramifications.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                    <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                      Une navigation claire vers les sous-services quand le besoin devient plus specifique.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-accent/14 bg-accent/8 p-4">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                        L&apos;objectif n&apos;est pas de vous noyer dans l&apos;offre, mais de vous
                        amener vite vers le bon niveau de precision.
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-[1.5rem] border p-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <LucideIcon name={point.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2d2d2d]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/68">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {subServices.length > 0 && (
        <section className="pb-16 pt-2 lg:pb-24">
          <Container>
            <div
              className="overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_60px_rgba(45,45,45,0.06)] sm:p-6"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,245,240,0.96) 100%)",
                borderColor: "rgba(45,45,45,0.08)",
              }}
            >
              <div className="mb-6 flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Sous-services
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d]">
                    Tout le spectre {hub.name}
                  </h2>
                </div>
                <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/76 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/44">
                    Niveau de detail
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                    {subServices.length} entrees specialisees
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {subServices.map((sub, index) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${hub.slug}/${sub.slug}/`}
                    className="group block rounded-[1.75rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/24 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)] sm:p-6"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    <div className="grid gap-5 lg:grid-cols-[64px_minmax(0,1fr)_auto] lg:items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-accent/10 text-accent">
                        <LucideIcon name={sub.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1 text-[11px] font-medium text-[#2d2d2d]/56">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="mt-3 font-heading text-3xl font-bold leading-[1.02] text-[#2d2d2d] transition-colors group-hover:text-accent">
                          {sub.name}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#2d2d2d]/68 sm:text-base">
                          {sub.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                        <span className="text-sm font-medium text-[#2d2d2d]/58">
                          Voir la page
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

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

      {hub.relatedServices.length > 0 && (
        <section className="pb-16 pt-2">
          <Container>
            <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white/76 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Pour aller plus loin
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                Expertises associees
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {hub.relatedServices.map((relSlug) => {
                  const related = getServiceBySlug(relSlug);
                  if (!related) return null;
                  return (
                    <Link
                      key={relSlug}
                      href={`/services/${relSlug}/`}
                      className="rounded-full border border-[rgba(45,45,45,0.10)] bg-[#ede9e1]/72 px-4 py-2 text-sm font-medium text-[#2d2d2d]/70 transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      {related.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="pb-20 pt-4">
        <Container size="md">
          <div className="rounded-[2rem] border p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
              Pret a activer {hub.name.toLowerCase()} dans votre strategie ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#2d2d2d]/68">
              Recevez une proposition claire, adaptee a votre contexte et a votre
              niveau d&apos;urgence, sans discours commercial inutile.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              >
                Obtenir mon devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              {hub.pricingLink ? (
                <Link
                  href={hub.pricingLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                >
                  Voir les tarifs
                </Link>
              ) : null}
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
