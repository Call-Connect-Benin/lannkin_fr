import type { Metadata } from "next";
import Image from "next/image";

import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import Link from "next/link";

import { SERVICE_HUBS } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Nos expertises digitales a Paris | Lannkin",
  description:
    "Conception web, SEO, Google Ads, Facebook Ads, IA, 3D immersive : explorez les expertises Lannkin et demandez une proposition sur-mesure.",
};

const CATEGORY_LABELS: Record<string, string> = {
  web: "Web & Developpement",
  tech: "Tech & SaaS",
  ads: "Publicite en ligne",
  seo: "SEO & Referencement",
  creative: "Creatif & Design",
  ai: "Intelligence Artificielle",
  local: "Marketing Local",
  growth: "Croissance & Leads",
};

function groupByCategory(services: typeof SERVICE_HUBS) {
  const groups: Record<string, typeof SERVICE_HUBS> = {};
  for (const service of services) {
    const category = service.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(service);
  }
  return groups;
}

const groupedServices = groupByCategory(SERVICE_HUBS);

const HERO_STATS = [
  { value: `${SERVICE_HUBS.length}+`, label: "expertises structurees" },
  { value: `${Object.keys(groupedServices).length}`, label: "grandes familles" },
  { value: "24h", label: "pour une premiere reponse" },
  { value: "360°", label: "vision acquisition + produit" },
];

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <section className="parallax-section relative overflow-hidden pb-16 pt-10 lg:pb-20 lg:pt-16">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-lateral-angle.webp" overlay={0.84} />

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-[rgba(133,53,62,0.06)] blur-[120px]" />
          <div className="absolute right-[6%] top-0 h-[28rem] w-[28rem] rounded-full bg-[rgba(73,143,109,0.10)] blur-[150px]" />
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
                    Plus qu&apos;une liste de services: un repertoire de croissance
                  </span>
                </div>

                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-[4.15rem] lg:leading-[0.96]">
                  Toutes les expertises utiles pour faire grandir un projet
                  <span className="text-accent"> sans disperser l&apos;execution</span>.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                  Conception web, acquisition payante, SEO, IA, 3D, automatisation
                  et accompagnement business: nous avons organise nos expertises comme
                  un terrain de jeu clair, navigable et concret.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/devis-gratuit/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/tarifs/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/72 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    Voir les tarifs
                  </Link>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {HERO_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border p-4"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.54)",
                        borderColor: "rgba(45,45,45,0.08)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                    >
                      <p className="font-heading text-2xl font-bold text-[#2d2d2d]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/48">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[1.75rem] border p-5 shadow-[0_24px_60px_rgba(45,45,45,0.08)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.94) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      Lecture rapide
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                      Comment parcourir la page
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent">
                    <Layers3 className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Chaque famille regroupe des offres coherentes entre elles.",
                    "Les hubs vous donnent une vision large d'une expertise.",
                    "Les sous-pages detaillees servent a cadrer un besoin precis.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
                          0{index + 1}
                        </div>
                        <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="pb-20 pt-2 lg:pb-24">
        <Container>
          <div className="flex gap-10 lg:items-start">
            <aside className="sticky top-24 hidden self-start lg:flex lg:w-72 xl:w-80 flex-shrink-0 flex-col gap-5">
              <div className="relative overflow-hidden rounded-[1.75rem] min-h-[280px]">
                <Image
                  src="/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp"
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/58 via-[#0A0A0A]/72 to-[#0A0A0A]/86" />
                <div className="relative z-10 flex h-full flex-col p-6">
                  <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    Sur mesure
                  </span>
                  <h3 className="font-heading text-xl font-bold leading-snug text-white">
                    Votre besoin ne rentre dans aucune case ?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/78">
                    C&apos;est souvent le signe d&apos;un projet interessant. On recadre,
                    on assemble les briques utiles et on vous renvoie une proposition
                    claire sous 24h.
                  </p>
                  <Link
                    href="/devis-gratuit/"
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                  >
                    Obtenir mon devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <nav
                className="rounded-[1.75rem] border p-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Sommaire
                </p>
                <ul className="space-y-2">
                  {Object.entries(groupedServices).map(([category]) => (
                    <li key={category}>
                      <a
                        href={`#${category}`}
                        className="flex items-center gap-2 text-sm text-[#2d2d2d]/68 transition-colors hover:text-accent"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        {CATEGORY_LABELS[category] ?? category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0 flex-1 space-y-14">
              {Object.entries(groupedServices).map(([category, services]) => (
                <section key={category} id={category} className="scroll-mt-28">
                  <div className="mb-6 flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                        Famille de services
                      </p>
                      <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d]">
                        {CATEGORY_LABELS[category] ?? category}
                      </h2>
                    </div>
                    <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/76 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/44">
                        Volume
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                        {services.length} expertise{services.length > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}/`}
                        className="group relative block overflow-hidden rounded-[1.75rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/24 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)] sm:p-6"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                          borderColor: "rgba(45,45,45,0.08)",
                        }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden
                          style={{
                            background:
                              "radial-gradient(circle at top right, rgba(73,143,109,0.10), transparent 34%), radial-gradient(circle at bottom left, rgba(133,53,62,0.05), transparent 28%)",
                          }}
                        />

                        <div className="relative z-10 grid gap-5 lg:grid-cols-[72px_minmax(0,1fr)_auto] lg:items-center">
                          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[1.5rem] bg-accent/10 text-accent">
                            <span className="font-heading text-2xl font-bold">
                              {service.name.charAt(0)}
                            </span>
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1 text-[11px] font-medium text-[#2d2d2d]/56">
                                0{index + 1}
                              </span>
                              {service.subServices && service.subServices.length > 0 ? (
                                <span className="rounded-full border border-[rgba(73,143,109,0.18)] bg-accent/8 px-3 py-1 text-[11px] font-medium text-accent">
                                  {service.subServices.length} sous-services
                                </span>
                              ) : null}
                            </div>
                            <h3 className="mt-3 font-heading text-3xl font-bold leading-[1.02] text-[#2d2d2d] transition-colors group-hover:text-accent">
                              {service.name}
                            </h3>
                            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#2d2d2d]/68 sm:text-base">
                              {service.shortDescription}
                            </p>
                          </div>

                          <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                            <span className="text-sm font-medium text-[#2d2d2d]/58">
                              Ouvrir le hub
                            </span>
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:translate-x-1">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}

              <div className="rounded-[1.75rem] border border-accent/16 bg-accent/6 p-6 lg:hidden">
                <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">
                  Besoin d&apos;une combinaison specifique ?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/68">
                  Decrivez-nous vos objectifs, on vous aide a choisir les bonnes
                  expertises sans surcharger le projet.
                </p>
                <Link
                  href="/devis-gratuit/"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Obtenir mon devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
