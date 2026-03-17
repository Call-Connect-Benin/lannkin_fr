import type { Metadata } from "next";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SERVICE_HUBS } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Services Marketing Digital Laval | Lannkin",
  description:
    "Services marketing digital à Laval : conception web, SEO, Google Ads, Facebook Ads, graphisme et IA. Découvrez nos forfaits et obtenez un devis gratuit.",
};

const CATEGORY_LABELS: Record<string, string> = {
  web: "Web & Développement",
  tech: "Tech & SaaS",
  ads: "Publicité en ligne",
  seo: "SEO & Référencement",
  creative: "Créatif & Design",
  ai: "Intelligence Artificielle",
  local: "Marketing Local",
  growth: "Croissance & Leads",
};

function groupByCategory(services: typeof SERVICE_HUBS) {
  const groups: Record<string, typeof SERVICE_HUBS> = {};
  for (const s of services) {
    const cat = s.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(s);
  }
  return groups;
}

export default function ServicesPage() {
  const grouped = groupByCategory(SERVICE_HUBS);

  return (
    <main>
      {/* Hero — compact */}
      <section className="parallax-section relative overflow-hidden py-12 sm:py-16">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-lateral-angle.webp" overlay={0.55} />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                20+ expertises
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                Tous nos{" "}
                <span className="text-accent">services</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#CCCCCC]">
                De la conception web au marketing digital, en passant par l&apos;IA et la 3D
                immersive — nous couvrons tout ce dont votre entreprise a besoin pour
                dominer en ligne.
              </p>
              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
                >
                  Devis gratuit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-[#FFFFFF] backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Services — two-column layout */}
      <section className="pb-20 pt-12" style={{ backgroundColor: "#0C0C0C" }}>
        <Container>
          <div className="flex gap-10 lg:items-start">

            {/* ── STICKY SIDEBAR ── */}
            <aside className="hidden lg:flex lg:w-72 xl:w-80 flex-shrink-0 flex-col gap-5 sticky top-24 self-start">

              {/* CTA card with 3D render background */}
              <div className="relative overflow-hidden rounded-2xl min-h-[260px]">
                <Image
                  src="/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp"
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                {/* Gradient overlay — darker at bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A]/85" />
                <div className="relative z-10 flex flex-col p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
                    Sur mesure
                  </span>
                  <h3 className="font-heading text-base font-bold leading-snug text-[#FFFFFF]">
                    Besoin d&apos;un service sur mesure ?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#CCCCCC]">
                    Chaque projet est unique. Contactez-nous pour discuter de vos objectifs
                    et obtenir une proposition personnalisée en 24h.
                  </p>
                  <Link
                    href="/devis-gratuit/"
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                  >
                    Demander un devis gratuit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* TOC */}
              <nav className="rounded-xl p-5" style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                  Sommaire
                </p>
                <ul className="space-y-1.5">
                  {Object.entries(grouped).map(([category]) => (
                    <li key={category}>
                      <a
                        href={`#${category}`}
                        className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                        {CATEGORY_LABELS[category] ?? category}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <div className="min-w-0 flex-1 space-y-14">
              {Object.entries(grouped).map(([category, services]) => (
                <div key={category} id={category} className="scroll-mt-28">
                  <h2 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                    {CATEGORY_LABELS[category] ?? category}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}/`}
                        className="group rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                        style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <span className="text-lg font-bold">
                              {service.name.charAt(0)}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-accent">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted">
                          {service.shortDescription}
                        </p>
                        {service.subServices && service.subServices.length > 0 && (
                          <p className="mt-3 text-xs text-accent/70">
                            {service.subServices.length} sous-services
                          </p>
                        )}
                        <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                          En savoir plus
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile CTA — visible only on small screens */}
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 lg:hidden">
                <h3 className="font-heading text-base font-bold text-white">
                  Besoin d&apos;un service sur mesure ?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Chaque projet est unique. Contactez-nous pour une proposition en 24h.
                </p>
                <Link
                  href="/devis-gratuit/"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Demander un devis gratuit
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
