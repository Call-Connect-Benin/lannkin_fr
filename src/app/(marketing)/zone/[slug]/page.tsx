import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllZoneSlugs, getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

const SPECIAL_STATIC_ZONE_SLUGS = new Set(["agence-traffic-paris"]);

export function generateStaticParams(): { slug: string }[] {
  return getAllZoneSlugs()
    .filter((slug) => !SPECIAL_STATIC_ZONE_SLUGS.has(slug))
    .map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);

  if (!zone || SPECIAL_STATIC_ZONE_SLUGS.has(slug)) {
    return { title: { absolute: "Zone introuvable | Lannkin" } };
  }

  return {
    title: { absolute: `${zone.title} | Lannkin` },
    description: zone.description,
    alternates: {
      canonical: `/zone/${zone.slug}/`,
    },
    openGraph: {
      title: `${zone.title} | Lannkin`,
      description: zone.description,
      url: `https://lannkin.com/zone/${zone.slug}/`,
    },
  };
}

export default async function ZoneDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);

  if (!zone || SPECIAL_STATIC_ZONE_SLUGS.has(slug)) {
    notFound();
  }

  return <ZonePageTemplate zone={zone} />;
}
