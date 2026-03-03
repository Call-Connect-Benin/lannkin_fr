import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SERVICE_HUBS } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Tous nos services | Lannkin — Agence Marketing Digital Laval",
  description:
    "Découvrez tous nos services : conception web, SaaS, 3D immersif, Google Ads, Facebook Ads, SEO, graphisme, IA et plus. Agence marketing digital à Laval.",
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
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-lateral-angle.png" overlay={0.55} />
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
          </div>
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                20+ expertises
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                Tous nos{" "}
                <span className="text-accent">services</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#CCCCCC]">
                De la conception web au marketing digital, en passant par l&apos;IA et la 3D
                immersive — nous couvrons tout ce dont votre entreprise a besoin pour
                dominer en ligne.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

      {/* Services Grid by Category */}
      <section className="bg-white pb-24 pt-24">
        <Container>
          <div className="space-y-20">
            {Object.entries(grouped).map(([category, services]) => (
              <div key={category}>
                <h2 className="mb-8 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                  {CATEGORY_LABELS[category] ?? category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      className="group glass rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
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
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-black/[0.06] bg-gray-50 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Besoin d&apos;un service sur mesure?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Chaque projet est unique. Contactez-nous pour discuter de vos objectifs
              et obtenir une proposition personnalisée en 24h.
            </p>
            <Link
              href="/devis-gratuit/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
