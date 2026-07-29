import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, BadgeCheck, Sparkles, UserRound } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hub-serif",
});

import {
  getAllHubSlugs,
  getHubBySlug,
  getSubServices,
  getServiceBySlug,
} from "@/data/services";
import { Container } from "@/presentation/components/ui";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { InternalLinks } from "@/presentation/components/seo";

const FEATURE_BULLETS = [
  {
    icon: "Rocket",
    title: "Solutions sur mesure",
    description: "Adaptées à vos objectifs",
  },
  {
    icon: "ShieldCheck",
    title: "Technologies modernes",
    description: "Fiables, rapides, évolutives",
  },
  {
    icon: "Headset",
    title: "Accompagnement dédié",
    description: "De la stratégie à la mise en ligne",
  },
];

const SPECTRUM_FEATURES = [
  {
    icon: "ShieldCheck",
    title: "Approche sur mesure",
    description: "Chaque projet est unique",
  },
  {
    icon: "Rocket",
    title: "Technologies modernes",
    description: "Stack performant et évolutif",
  },
  {
    icon: "Headset",
    title: "Accompagnement dédié",
    description: "De la stratégie à la mise en ligne",
  },
  {
    icon: "TrendingUp",
    title: "Résultats mesurables",
    description: "Performance et croissance",
  },
];

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
      <section className="relative overflow-hidden pb-10 pt-10 lg:pb-16 lg:pt-10">
        <div className="relative z-10">
          <Container>
            <div className="grid items-start gap-10 lg:block lg:relative lg:min-h-[560px]">
              <div className="max-w-3xl lg:relative lg:z-10 lg:max-w-[540px]">
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
                    Hub de service structuré pour la décision
                  </span>
                </div>

                <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  En pratique
                </p>

                <h1
                  className={`${playfair.variable} mt-3 text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-[4rem] lg:leading-[1.05]`}
                  style={{ fontFamily: "var(--font-hub-serif)" }}
                >
                  {(() => {
                    const words = hub.name.split(" ");
                    const last = words.pop();
                    return words.length > 0 ? (
                      <>
                        {words.join(" ")}{" "}
                        <span
                          className="bg-clip-text text-transparent"
                          style={{ backgroundImage: "linear-gradient(135deg, #2d2d2d 0%, #498f6d 100%)" }}
                        >
                          {last}
                        </span>
                      </>
                    ) : (
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(135deg, #2d2d2d 0%, #498f6d 100%)" }}
                      >
                        {last}
                      </span>
                    );
                  })()}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                  {hub.shortDescription}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {hub.pricingLink ? (
                    <Link
                      href={hub.pricingLink}
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent py-2 pl-2 pr-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                      Découvrir les tarifs
                    </Link>
                  ) : (
                    <Link
                      href="/devis-gratuit/"
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent py-2 pl-2 pr-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                      Demander un devis
                    </Link>
                  )}
                  <Link
                    href="/services/"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[rgba(45,45,45,0.14)] bg-white/72 py-2 pl-2 pr-6 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(45,45,45,0.06)]">
                      <UserRound className="h-4 w-4" />
                    </span>
                    Revenir aux expertises
                  </Link>
                </div>

                <div
                  className="mt-10 flex w-full max-w-full flex-col gap-4 rounded-[1.5rem] border py-3.5 pl-3.5 pr-5 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-4 sm:gap-y-3 xl:flex-nowrap xl:items-center"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  {FEATURE_BULLETS.map((bullet) => (
                    <div key={bullet.title} className="min-w-0 flex flex-1 items-center gap-2 xl:min-w-[0]">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <LucideIcon name={bullet.icon} className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-semibold leading-tight text-[#2d2d2d]">
                          {bullet.title}
                        </span>
                        <span className="block text-[11px] leading-snug text-[#2d2d2d]/56">
                          {bullet.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg pt-8 lg:absolute lg:inset-0 lg:mx-0 lg:max-w-none lg:pt-0">
                <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[3rem] lg:absolute lg:left-[52%] lg:top-[205px] lg:aspect-auto lg:h-[295px] lg:w-[520px] lg:overflow-hidden lg:rounded-xl lg:z-0">
                  <div
                    className="pointer-events-none absolute inset-[6%] rounded-full lg:hidden"
                    style={{ background: "radial-gradient(circle, rgba(73,143,109,0.10) 0%, transparent 70%)" }}
                    aria-hidden
                  />
                  <Image
                    src={HUB_PARALLAX_IMAGES[hub.slug] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
                    alt=""
                    fill
                    className="object-contain p-6 lg:object-cover lg:p-0"
                    sizes="(min-width: 1024px) 520px, 90vw"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 lg:hidden"
                    style={{
                      background:
                        "radial-gradient(ellipse 68% 70% at 50% 50%, transparent 25%, #f7f5f0 92%)",
                    }}
                    aria-hidden
                  />
                </div>

                <div
                  className="absolute -top-2 right-0 w-[46%] max-w-[280px] rounded-[1.5rem] border p-4 shadow-[0_24px_60px_rgba(45,45,45,0.12)] sm:-right-2 sm:p-5 lg:top-6 lg:right-0 lg:w-[260px] lg:max-w-[260px] lg:rounded-[22px] lg:p-5 lg:z-20"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(247,245,240,0.99) 100%)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/12 text-accent">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    En pratique
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-xs leading-relaxed text-[#2d2d2d]/72">
                        Une vision globale de l&apos;expertise, de ses promesses et de ses ramifications.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-xs leading-relaxed text-[#2d2d2d]/72">
                        Une navigation claire vers les sous-services quand le besoin devient plus spécifique.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-xs leading-relaxed text-[#2d2d2d]/72">
                        L&apos;objectif n&apos;est pas de vous noyer dans l&apos;offre, mais de vous
                        amener vite vers le bon niveau de précision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="pb-10 pt-2 lg:pb-14">
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
        <section className="pb-10 pt-2 lg:pb-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Sous-services
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold leading-tight tracking-tight text-[#2d2d2d] sm:text-4xl">
                  Tout le spectre
                  <br />
                  {(() => {
                    const words = hub.name.split(" ");
                    const last = words.pop();
                    return words.length > 0 ? (
                      <>
                        {words.join(" ")} <span className="text-accent">{last}</span>
                      </>
                    ) : (
                      <span className="text-accent">{last}</span>
                    );
                  })()}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[#2d2d2d]/68">
                  {hub.shortDescription}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {hub.pricingLink ? (
                    <Link
                      href={hub.pricingLink}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Découvrir les tarifs
                    </Link>
                  ) : (
                    <Link
                      href="/devis-gratuit/"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    >
                      Demander un devis
                    </Link>
                  )}
                  <Link
                    href="/services/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/72 px-5 py-3 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    Revenir aux expertises
                  </Link>
                </div>

                <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/images/section.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </div>

                <div
                  className="mt-6 inline-flex max-w-full flex-wrap gap-x-5 gap-y-4 rounded-[1.5rem] border p-4"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  {SPECTRUM_FEATURES.map((feature) => (
                    <div key={feature.title} className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <LucideIcon name={feature.icon} className="h-3.5 w-3.5" />
                      </span>
                      <span>
                        <span className="block whitespace-nowrap text-[13px] font-semibold leading-tight text-[#2d2d2d]">
                          {feature.title}
                        </span>
                        <span className="block whitespace-nowrap text-[11px] leading-snug text-[#2d2d2d]/56">
                          {feature.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {subServices.map((sub, index) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${hub.slug}/${sub.slug}/`}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-[1.5rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/24 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.1rem] bg-accent/10 text-accent">
                      <LucideIcon name={sub.icon} className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="flex items-baseline gap-2 font-heading text-xl font-bold leading-snug text-[#2d2d2d] transition-colors group-hover:text-accent">
                        <span className="font-mono text-sm font-normal text-accent/70">
                          0{index + 1}
                        </span>
                        {sub.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#2d2d2d]/68">
                        {sub.shortDescription}
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="pb-10 pt-2 lg:pb-14">
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

      <section className="pb-12 pt-4">
        <Container size="md">
          <div className="relative overflow-hidden rounded-[2rem] border p-8 text-center sm:p-12">
            <Image
              src="/images/rendu3D/rendu3d-diamant-cubes-flottants.webp"
              alt=""
              fill
              aria-hidden
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 46% 60% at 50% 50%, #f7f5f0 40%, transparent 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
                Prêt à activer {hub.name.toLowerCase()} dans votre stratégie ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#2d2d2d]/68">
                Recevez une proposition claire, adaptée à votre contexte et à votre
                niveau d&apos;urgence, sans discours commercial inutile.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Obtenir mon devis
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
          </div>
        </Container>
      </section>

      <Container>
        <InternalLinks currentPath={currentPath} />
      </Container>
    </main>
  );
}
