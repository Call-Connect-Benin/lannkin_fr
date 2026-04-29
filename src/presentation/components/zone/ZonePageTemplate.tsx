import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Star } from "lucide-react";

import { Container } from "@/presentation/components/ui/Container";
import { Button } from "@/presentation/components/ui/Button";
import { Breadcrumb } from "@/presentation/components/seo/Breadcrumb";
import { InternalLinks } from "@/presentation/components/seo/InternalLinks";
import { TestimonialsSection } from "@/presentation/components/home/TestimonialsSection";
import type { Zone } from "@/domain/entities/zone";

// ---------------------------------------------------------------------------
// Service label map
// ---------------------------------------------------------------------------

const SERVICE_META: Record<string, { label: string; desc: string }> = {
  "google-ads":                { label: "Google Ads",                desc: "Campagnes Search, Display, Shopping et Performance Max" },
  "facebook-ads":              { label: "Facebook & Instagram Ads",  desc: "Publicités Meta ciblées pour maximiser votre portée" },
  "seo":                       { label: "Référencement SEO",         desc: "Positionnement organique durable sur Google" },
  "conception-web":            { label: "Conception Web",            desc: "Sites web modernes, rapides et convertissants" },
  "lead-generation":           { label: "Génération de Leads",       desc: "Systèmes de capture et de nurturing de prospects" },
  "google-my-business":        { label: "Google My Business",        desc: "Fiche Google optimisée pour la visibilité locale" },
  "graphisme":                 { label: "Graphisme & Design",        desc: "Identité visuelle et créations qui marquent les esprits" },
  "linkedin-ads":              { label: "LinkedIn Ads",              desc: "Publicités B2B sur le réseau professionnel #1" },
  "tiktok-ads":                { label: "TikTok Ads",                desc: "Publicités vidéo sur la plateforme à plus forte croissance" },
  "native-ads":                { label: "Native Ads",                desc: "Publicités intégrées au contenu, Taboola, Outbrain" },
  "bing-ads":                  { label: "Microsoft Ads",             desc: "Campagnes Search sur Bing, CPC 30% moins cher que Google" },
  "developpement-saas":        { label: "Développement SaaS",        desc: "Applications web sur mesure, APIs et produits SaaS" },
  "intelligence-artificielle": { label: "Intelligence Artificielle", desc: "Automatisation et outils IA pour votre marketing" },
  "montage-video":             { label: "Montage Vidéo",             desc: "Contenus vidéo professionnels pour vos campagnes" },
};

const WHY_LANNKIN = [
  {
    title: "Certifié Google Partner",
    desc: "Expertise Google Ads validée officiellement. Votre budget géré par des spécialistes certifiés.",
  },
  {
    title: "+10 ans d'expérience",
    desc: "Depuis 2015, nous accompagnons les PME françaises dans leur croissance digitale.",
  },
  {
    title: "Scripts anti-fraude propriétaires",
    desc: "Nos scripts bloquent les clics frauduleux en temps réel et protègent votre budget.",
  },
  {
    title: "+100K€/mois de budget géré",
    desc: "Un volume qui nous permet de négocier les meilleurs CPM et d'accéder aux bêtas en avant-première.",
  },
  {
    title: "ROI moyen de 4×",
    desc: "Chaque dollar investi génère en moyenne 4 dollars de retour pour nos clients.",
  },
  {
    title: "4.95 ★ sur Google",
    desc: "54 avis vérifiés. La satisfaction client est notre priorité absolue.",
  },
];

const NEARBY_ZONES = [
  { name: "Paris",      href: "/zone/agence-web-paris/",       detail: "Siège social" },
  { name: "Lyon",       href: "/zone/agence-web-lyon/",        detail: "Auvergne-Rhône-Alpes" },
  { name: "Marseille",  href: "/zone/agence-web-marseille/",   detail: "PACA" },
  { name: "Toulouse",   href: "/zone/agence-web-toulouse/",    detail: "Occitanie" },
  { name: "Nantes",     href: "/zone/agence-web-nantes/",      detail: "Pays de la Loire" },
  { name: "Lille",      href: "/zone/agence-web-lille/",       detail: "Hauts-de-France" },
];

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ZonePageTemplateProps {
  zone: Zone;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ZonePageTemplate({ zone }: ZonePageTemplateProps) {
  const currentPath = `/zone/${zone.slug}/`;
  const isParis = zone.city === "Paris";

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb currentPath={currentPath} />
      </section>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium" style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#2d2d2d" }}>
            <MapPin className="h-3.5 w-3.5" />
            {zone.city}, France
          </div>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
            {zone.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed" style={{ color: "#6B7280" }}>
            {zone.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/devis-gratuit/">
              <Button variant="primary" size="lg">
                Devis gratuit sous 24h
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact/">
              <Button variant="secondary" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 text-sm" style={{ color: "#6B7280" }}>
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" style={{ color: "#498f6d" }} /> 4.95 / 5 — 54 avis Google
            </span>
            <span>Certifié Google Partner</span>
            <span>Sans engagement</span>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ borderTop: "1px solid rgba(45,45,45,0.10)", backgroundColor: "#ede9e1" }}
      >
        <Container>
          <h2 className="font-heading mb-3 text-3xl font-bold text-[#2d2d2d]">
            Nos services à {zone.city}
          </h2>
          <p className="mb-10 max-w-2xl text-base" style={{ color: "#6B7280" }}>
            {isParis
              ? "Basés à Paris depuis 2015, nous proposons une gamme complète de services marketing digital pour les entreprises de la région."
              : `Depuis notre siège à Paris, nous desservons les entreprises de ${zone.city} avec une expertise 360° en marketing digital.`}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zone.relatedServices.map((slug) => {
              const meta = SERVICE_META[slug];
              if (!meta) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}/`}
                  className="group rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#498f6d]/30"
                  style={{ backgroundColor: "#ffffff", borderColor: "rgba(45,45,45,0.10)" }}
                >
                  <p className="font-semibold text-[#2d2d2d] transition-colors group-hover:text-[#498f6d]">
                    {meta.label}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "#6B7280" }}>
                    {meta.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium" style={{ color: "#498f6d" }}>
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Pourquoi Lannkin ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ borderTop: "1px solid rgba(45,45,45,0.10)" }}>
        <Container>
          <h2 className="font-heading mb-3 text-3xl font-bold text-[#2d2d2d]">
            Pourquoi choisir Lannkin à {zone.city} ?
          </h2>
          <p className="mb-10 max-w-2xl text-base" style={{ color: "#6B7280" }}>
            Plus de 10 ans d&apos;expertise au service des entreprises françaises.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_LANNKIN.map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.10)" }}
              >
                <div className="mb-2 flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#498f6d" }} />
                  <h3 className="font-heading text-base font-semibold text-[#2d2d2d]">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Zones desservies ─────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ borderTop: "1px solid rgba(45,45,45,0.10)", backgroundColor: "#ede9e1" }}
      >
        <Container>
          <h2 className="font-heading mb-3 text-3xl font-bold text-[#2d2d2d]">
            Zone de service
          </h2>
          <p className="mb-8 max-w-2xl text-base" style={{ color: "#6B7280" }}>
            Basés à Paris, nous desservons l&apos;ensemble de la France.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {NEARBY_ZONES.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="rounded-lg p-4 text-center transition-colors hover:border-[#498f6d]/30"
                style={{ border: "1px solid rgba(45,45,45,0.10)", backgroundColor: "#ffffff" }}
              >
                <span className="block font-heading font-semibold text-[#2d2d2d]">{z.name}</span>
                <span className="mt-0.5 block text-xs" style={{ color: "#6B7280" }}>{z.detail}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Témoignages ──────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(45,45,45,0.10)" }}>
        <TestimonialsSection />
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ borderTop: "1px solid rgba(45,45,45,0.10)" }}>
        <Container>
          <div
            className="rounded-2xl p-10 text-center"
            style={{ backgroundColor: "rgba(73,143,109,0.07)", border: "1px solid rgba(73,143,109,0.15)" }}
          >
            <h2 className="font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
              Prêt à développer votre présence à {zone.city} ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base" style={{ color: "#6B7280" }}>
              Devis gratuit sous 24h — Certifié Google Partner — Sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/devis-gratuit/">
                <Button variant="primary" size="lg">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact/">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Schema.org LocalBusiness ──────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Lannkin S.A.S.",
            description: zone.description,
            url: `https://lannkin.com/zone/${zone.slug}/`,
            telephone: "+1-438-944-6129",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressRegion: "QC",
              addressCountry: "CA",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.95",
              reviewCount: "54",
            },
            areaServed: [
              { "@type": "City", name: zone.city },
              { "@type": "City", name: "Paris" },
              { "@type": "City", name: "Paris" },
            ],
          }),
        }}
      />

      {/* ── Internal links ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <InternalLinks currentPath={currentPath} />
      </section>
    </main>
  );
}

