import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LEGACY_LANDING_PAGES, getLegacyLandingPageBySlug } from "@/data/legacy-landing-pages";
import { LegacyLandingPageView } from "@/presentation/components/landing/LegacyLandingPage";

export function generateStaticParams(): { slug: string }[] {
  return LEGACY_LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyLandingPageBySlug(slug);

  if (!page) {
    return { title: "Page introuvable | Lannkin" };
  }

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: {
      canonical: `/${page.slug}/`,
    },
  };
}

export default async function LegacyLandingRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getLegacyLandingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <LegacyLandingPageView page={page} />;
}
