import type { Metadata } from "next";
import Link from "next/link";

import { getZoneBySlug } from "@/data/zones";
import { Breadcrumb } from "@/presentation/components/seo/Breadcrumb";
import { InternalLinks } from "@/presentation/components/seo/InternalLinks";

const zone = getZoneBySlug("agence-traffic-laval");

export const metadata: Metadata = {
  title: "Agence Traffic à Laval | Acquisition de Trafic Web | Lannkin",
  description:
    "Experts en acquisition de trafic web à Laval. Google Ads, Facebook Ads, Native Ads (Taboola, Outbrain, Traffic Factory), SEO et stratégie multi-canal. Devis gratuit.",
  keywords: [
    "agence traffic laval",
    "acquisition trafic web laval",
    "agence google ads laval",
    "agence facebook ads laval",
    "native ads laval",
    "traffic factory laval",
    "agence paid media laval",
    "gestion campagnes publicitaires laval",
  ],
  alternates: {
    canonical: "https://lannkin.ca/zone/agence-traffic-laval/",
  },
};

const TRAFFIC_SERVICES = [
  {
    name: "Google Ads",
    href: "/services/google-ads/",
    description:
      "Campagnes Search, Display, Shopping, YouTube et Performance Max. Scripts anti-fraude propriétaires pour maximiser votre ROI.",
    icon: "Target",
  },
  {
    name: "Facebook / Meta Ads",
    href: "/services/facebook-ads/",
    description:
      "Campagnes Facebook et Instagram. Pixel, API Conversions, retargeting dynamique et Meta Advantage+ pour un ciblage optimal.",
    icon: "Facebook",
  },
  {
    name: "Native Ads",
    href: "/services/native-ads/",
    description:
      "Taboola, Outbrain, Traffic Factory et Revcontent. Articles sponsorisés et contenu natif pour une acquisition de trafic non-intrusif.",
    icon: "Newspaper",
  },
  {
    name: "TikTok Ads",
    href: "/services/tiktok-ads/",
    description:
      "Campagnes vidéo courtes et virales. Ciblage Gen Z et Millennials pour des marques qui veulent se démarquer.",
    icon: "Music",
  },
  {
    name: "LinkedIn Ads",
    href: "/services/linkedin-ads/",
    description:
      "Campagnes B2B ciblées par titre de poste, industrie et taille d'entreprise. Sponsored Content, InMail et Lead Gen Forms.",
    icon: "Linkedin",
  },
  {
    name: "Bing / Microsoft Ads",
    href: "/services/bing-ads/",
    description:
      "Campagnes Search et Shopping sur le réseau Microsoft. CPC souvent 30 % moins cher que Google avec un public à haut pouvoir d'achat.",
    icon: "Search",
  },
  {
    name: "SEO / Référencement naturel",
    href: "/services/seo/",
    description:
      "Trafic organique durable. Audit technique, backlinks, maillage interne et contenu optimisé pour dominer Google à long terme.",
    icon: "TrendingUp",
  },
  {
    name: "Lead Generation",
    href: "/services/lead-generation/",
    description:
      "Landing pages, tunnels de vente et formulaires optimisés pour transformer votre trafic en leads qualifiés.",
    icon: "Magnet",
  },
];

const TRAFFIC_FACTORY_SECTION = {
  title: "Traffic Factory — Notre Expertise Exclusive",
  description:
    "Lannkin est une des rares agences au Québec à maîtriser Traffic Factory, la régie publicitaire native premium. Avec des milliards d'impressions mensuelles sur des sites premium, Traffic Factory offre un reach massif à des CPM compétitifs.",
  advantages: [
    "Accès à un inventaire premium de +100 millions de visiteurs/jour",
    "Ciblage géographique précis (ville, région, pays)",
    "Formats natifs non-intrusifs avec CTR supérieurs",
    "CPM compétitifs vs Google Display et Facebook",
    "Retargeting cross-device avancé",
    "Reporting détaillé et transparent",
  ],
};

const WHY_LAVAL = [
  {
    title: "Siège social à Laval",
    description:
      "Nous sommes basés à Laval depuis 2015. Rencontres en personne, connaissance du marché local et proximité avec nos clients.",
  },
  {
    title: "Expertise multi-plateforme",
    description:
      "Un seul interlocuteur pour Google Ads, Facebook Ads, Native Ads, SEO et tous vos canaux d'acquisition de trafic.",
  },
  {
    title: "Scripts anti-fraude propriétaires",
    description:
      "Nos scripts exclusifs détectent et bloquent les clics frauduleux en temps réel, protégeant votre budget publicitaire.",
  },
  {
    title: "Certifications officielles",
    description:
      "Google Partner, Microsoft Advertising Partner et Facebook/Meta Partner. Votre budget est géré par des experts certifiés.",
  },
  {
    title: "+100K$/mois de budget géré",
    description:
      "Nous gérons plus de 100 000 $ de budget publicitaire par mois à travers toutes les plateformes pour nos clients.",
  },
  {
    title: "4.95 étoiles Google",
    description:
      "54 avis vérifiés avec une note de 4.95/5. La satisfaction client est au cœur de notre approche.",
  },
];

const CURRENT_PATH = "/zone/agence-traffic-laval/";

export default function AgenceTrafficLavalPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb currentPath={CURRENT_PATH} />
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-[#498f6d]/10 px-4 py-1.5 font-mono text-sm text-[#498f6d]">
            Laval, Québec
          </span>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Agence Traffic à Laval
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#888888]">
            Experts en acquisition de trafic web à Laval. Google Ads, Facebook
            Ads, Native Ads (Taboola, Outbrain, Traffic Factory), SEO et
            stratégie multi-canal pour maximiser votre visibilité en ligne et
            générer des leads qualifiés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/devis-gratuit/"
              className="inline-flex items-center rounded-lg bg-[#498f6d] px-6 py-3 font-semibold text-[#0A0A0A] transition-shadow hover:shadow-[0_0_30px_rgba(73,143,109,0.3)]"
            >
              Devis gratuit
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-lg border-2 border-accent/60 bg-transparent px-6 py-3 font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Services d'acquisition de trafic */}
      <section className="border-t border-white/5 bg-[#1A1A1A]/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white">
            Nos services d&apos;acquisition de trafic
          </h2>
          <p className="mb-12 max-w-2xl text-[#888888]">
            Une approche multi-canal pour maximiser votre visibilité et votre
            ROI. Chaque plateforme a ses forces — nous les combinons pour des
            résultats exceptionnels.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRAFFIC_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="glass group rounded-xl border border-white/5 p-6 transition-all hover:border-[#498f6d]/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.05)]"
              >
                <h3 className="mb-2 font-heading text-lg font-semibold text-white transition-colors group-hover:text-[#498f6d]">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-[#888888]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Traffic Factory Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl border border-[#498f6d]/10 p-8 lg:p-12">
            <span className="mb-4 inline-block rounded-full bg-[#85353e]/10 px-4 py-1.5 font-mono text-sm text-[#85353e]">
              Expertise exclusive
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-white">
              {TRAFFIC_FACTORY_SECTION.title}
            </h2>
            <p className="mb-8 max-w-3xl text-[#888888]">
              {TRAFFIC_FACTORY_SECTION.description}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {TRAFFIC_FACTORY_SECTION.advantages.map((adv) => (
                <li key={adv} className="flex items-start gap-3 text-white">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#498f6d]" />
                  {adv}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/services/native-ads/traffic-factory/"
                className="inline-flex items-center font-semibold text-[#498f6d] transition-opacity hover:opacity-80"
              >
                En savoir plus sur Traffic Factory →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Lannkin à Laval */}
      <section className="border-t border-white/5 bg-[#1A1A1A]/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white">
            Pourquoi choisir Lannkin pour votre trafic à Laval ?
          </h2>
          <p className="mb-12 max-w-2xl text-[#888888]">
            Plus de 10 ans d&apos;expertise en acquisition de trafic web pour
            les entreprises de Laval, Montréal et du Québec.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_LAVAL.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/5 bg-[#2A2A2A]/30 p-6"
              >
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888888]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone de service */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white">
            Zone de service
          </h2>
          <p className="mb-8 max-w-2xl text-[#888888]">
            Basés à Laval, nous desservons l&apos;ensemble du Grand Montréal et
            du Québec pour vos campagnes d&apos;acquisition de trafic.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Laval",
                href: "/zone/agence-web-laval/",
                detail: "Siège social",
              },
              {
                name: "Montréal",
                href: "/zone/agence-web-montreal/",
                detail: "Grand Montréal",
              },
              {
                name: "Rive-Nord",
                href: "/zone/agence-web-rive-nord/",
                detail: "Terrebonne, Blainville, St-Jérôme",
              },
              {
                name: "Rive-Sud",
                href: "/zone/agence-web-rive-sud/",
                detail: "Longueuil, Brossard, St-Jean",
              },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="rounded-lg border border-white/5 bg-[#2A2A2A]/30 p-4 transition-colors hover:border-[#498f6d]/20"
              >
                <span className="font-heading font-semibold text-white">
                  {z.name}
                </span>
                <span className="mt-1 block text-sm text-[#888888]">
                  {z.detail}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#1A1A1A]/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Prêt à générer plus de trafic qualifié ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[#888888]">
            Obtenez un devis gratuit personnalisé en 24 heures. Nos experts en
            acquisition de trafic à Laval sont prêts à propulser votre
            visibilité en ligne.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/devis-gratuit/"
              className="inline-flex items-center rounded-lg bg-[#498f6d] px-8 py-4 text-lg font-semibold text-[#0A0A0A] transition-shadow hover:shadow-[0_0_30px_rgba(73,143,109,0.3)]"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-lg border-2 border-accent/60 bg-transparent px-8 py-4 text-lg font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              Nous contacter
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[#888888]">
            <span>Devis gratuit en 24h</span>
            <span>Aucun engagement</span>
            <span>Certifié Google & Meta Partner</span>
          </div>
        </div>
      </section>

      {/* Structured Data — LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Lannkin S.A.",
            description: zone?.description,
            url: "https://lannkin.ca/zone/agence-traffic-laval/",
            telephone: "+1-438-944-6129",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Laval",
              addressRegion: "QC",
              addressCountry: "CA",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.95",
              reviewCount: "54",
            },
            areaServed: [
              { "@type": "City", name: "Laval" },
              { "@type": "City", name: "Montréal" },
            ],
          }),
        }}
      />

      {/* Internal Links */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <InternalLinks currentPath={CURRENT_PATH} />
      </section>
    </main>
  );
}
