import type { Metadata } from "next";

import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import { ZONES } from "@/data/zones";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Zones desservies | Agence Web & Marketing Digital | Lannkin",
  description:
    "Lannkin dessert les entreprises partout en France : Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Strasbourg, Nice, Rennes. Trouvez notre agence près de chez vous.",
};

function groupZonesByCity() {
  const order: string[] = [];
  const groups = new Map<string, { region: string; zones: typeof ZONES }>();

  for (const zone of ZONES) {
    if (!groups.has(zone.city)) {
      groups.set(zone.city, { region: zone.region, zones: [] });
      order.push(zone.city);
    }
    groups.get(zone.city)!.zones.push(zone);
  }

  return order.map((city) => {
    const group = groups.get(city)!;
    return { city, region: group.region, zones: group.zones };
  });
}

export default function ZonePage() {
  const cityGroups = groupZonesByCity();

  return (
    <main>
      {/* Hero */}
      <section className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              {ZONES.length} zones desservies
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
              Une agence <span className="text-accent">près de chez vous</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
              Basés à Paris, nous accompagnons des entreprises partout en
              France. Retrouvez notre expertise locale dans votre ville.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Devis gratuit
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

      {/* Zones by city */}
      <section className="py-20 lg:py-28" style={{ borderTop: "1px solid rgba(45,45,45,0.08)", backgroundColor: "#f7f5f0" }}>
        <Container>
          <div className="space-y-14">
            {cityGroups.map(({ city, region, zones }) => (
              <div key={city}>
                <h2 className="font-heading text-2xl font-bold text-[#2d2d2d]">
                  {city}
                  <span className="ml-2 text-base font-normal text-[#6B7280]">
                    {region}
                  </span>
                </h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {zones.map((zone) => (
                    <Link
                      key={zone.slug}
                      href={`/zone/${zone.slug}/`}
                      className="group glass rounded-xl p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.06)]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-[#2d2d2d] transition-colors group-hover:text-accent">
                        {zone.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                        {zone.description}
                      </p>
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
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Votre ville n&apos;est pas listée?
            </h2>
            <p className="mt-4 text-lg text-[#6B7280]">
              Nous accompagnons des entreprises partout en France, à distance
              comme en présentiel. Contactez-nous pour en discuter.
            </p>
            <Link
              href="/devis-gratuit/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
