import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SECTORS } from "@/data/sectors";
import { getHubBySlug } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Marketing Digital par Secteur | Lannkin",
  description:
    "Marketing digital adapté à votre secteur : restaurant, immobilier, santé, construction, e-commerce et plus. Expertise sectorielle à Paris et en France.",
};

export default function SecteursPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              {SECTORS.length} secteurs
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
              Expertise{" "}
              <span className="text-accent">sectorielle</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
              Chaque industrie a ses réalités. Nous adaptons nos stratégies
              marketing digital aux spécificités de votre secteur pour des
              résultats concrets et mesurables.
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
                href="/services/"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-base font-medium text-[#2d2d2d] transition-colors hover:border-accent/40 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.10)", backgroundColor: "rgba(255,255,255,0.68)" }}
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 lg:py-28" style={{ borderTop: "1px solid rgba(45,45,45,0.08)", backgroundColor: "#f7f5f0" }}>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => {
              const relatedHubs = sector.relatedServices
                .slice(0, 3)
                .map((slug) => getHubBySlug(slug))
                .filter(Boolean);

              return (
                <Link
                  key={sector.slug}
                  href={`/secteurs/${sector.slug}/`}
                  className="group glass rounded-xl p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.06)]"
                >
                  <h3 className="font-heading text-xl font-semibold text-[#2d2d2d] transition-colors group-hover:text-accent">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                    {sector.description}
                  </p>
                  {relatedHubs.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {relatedHubs.map((hub) =>
                        hub ? (
                          <span
                            key={hub.slug}
                            className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent"
                          >
                            {hub.name}
                          </span>
                        ) : null
                      )}
                      {sector.relatedServices.length > 3 && (
                        <span className="rounded-full border px-2.5 py-0.5 text-xs text-[#6B7280]" style={{ borderColor: "rgba(45,45,45,0.10)", backgroundColor: "rgba(255,255,255,0.66)" }}>
                          +{sector.relatedServices.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                    En savoir plus
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Votre secteur n&apos;est pas listé?
            </h2>
            <p className="mt-4 text-lg text-[#6B7280]">
              Nous travaillons avec tous les secteurs d&apos;activité.
              Contactez-nous pour discuter de vos objectifs et obtenir une
              stratégie sur mesure.
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
