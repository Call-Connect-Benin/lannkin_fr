import type { Metadata } from "next";

import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "À Propos | Lannkin — Agence Marketing Digital Laval",
  description:
    "Découvrez Lannkin : agence marketing digital et création web pour TPE et PME francophones. Basée à Laval, présente au Canada, en France et en Suisse. +10 ans d'expérience, certifiée Google Partner.",
  alternates: { canonical: "https://lannkin.ca/a-propos/" },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const OFFICES = [
  {
    country: "LANNKIN CANADA",
    image: "/images/a-propos/Canada-e1556023963820-2500x1406-1-850x560.jpg.png",
    alt: "Skyline de Toronto — Lannkin Canada",
  },
  {
    country: "LANNKIN FRANCE",
    image: "/images/a-propos/shutterstock_667548661v2-1024x683-1.jpg",
    alt: "Tour Eiffel à Paris — Lannkin France",
  },
  {
    country: "LANNKIN SUISSE",
    image: "/images/a-propos/suisse-paysage-ville.jpg",
    alt: "Paysage de ville suisse — Lannkin Suisse",
  },
];

const CERTIFICATIONS = ["Réseau de recherche", "Display", "Video", "Shopping"];

const AD_CHANNELS = [
  {
    category: "Régies natives (Native Ads)",
    description: "CPC très faible et très gros volumes — nécessite un tunnel complexe.",
    platforms: ["Taboola Ads", "Outbrain Ads", "Criteo Ads", "Propeller Ads"],
    icon: Globe,
    color: "#498f6d",
  },
  {
    category: "Campagnes SEA",
    description: "Forte intention de recherche, mais forte concurrence.",
    platforms: ["Google Ads", "Microsoft Ads"],
    icon: Zap,
    color: "#4285F4",
  },
  {
    category: "Social Media Marketing",
    description: "CPC élevé — nécessite une bonne offre marketing et gros volume.",
    platforms: ["TikTok Ads", "LinkedIn Ads", "Facebook Ads", "Instagram Ads"],
    icon: Shield,
    color: "#1877F2",
  },
];

const RD_SCRIPTS = [
  {
    title: "Script Google Ads anti-fraude",
    description:
      "Il identifie les clics frauduleux et vous permet de soumettre des demandes de remboursement auprès de Google, garantissant ainsi une utilisation optimale de votre budget publicitaire.",
    image: "/images/a-propos/script-clic-export-google-ads.png",
    alt: "Export script clics frauduleux Google Ads",
  },
  {
    title: "Script d'analyse des campagnes performantes",
    description:
      "Ce script unique accède à des données masquées, permettant une analyse approfondie pour ajuster vos campagnes avec précision, bien au-delà des outils traditionnels.",
    image: "/images/a-propos/script-pmaw-analys.png",
    alt: "Script PMAW analyse campagnes Google Ads",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AProposPage() {
  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="parallax-section relative overflow-hidden py-20 sm:py-28">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.png" overlay={0.6} />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full border border-[rgba(73,143,109,0.4)] bg-[rgba(73,143,109,0.15)] px-4 py-1.5 font-mono text-xs font-medium text-[#498f6d]">
                Fondée en 2015 · Laval, Québec
              </span>
              <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl">
                À Propos —{" "}
                <span className="text-[#498f6d]">Lannkin</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#CCCCCC]">
                L&apos;agence web au service des TPE et PME francophones. Canada, France, Suisse —
                une expertise internationale, un accompagnement de proximité.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ─── 3 BUREAUX / CERTIFICATIONS ───────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {OFFICES.map((office) => (
              <div
                key={office.country}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
                  <p className="absolute bottom-3 left-4 font-heading text-lg font-bold text-white">
                    {office.country}
                  </p>
                </div>

                {/* Certifications */}
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    {/* Google G mini */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-semibold text-[#498f6d]">Certification Google Ads</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATIONS.map((cert) => (
                      <span
                        key={cert}
                        className="rounded border border-[#E5E7EB] px-2.5 py-1 text-xs text-[#374151]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────────────── */}
      <section className="bg-[#F0F0EC] py-16 lg:py-20">
        <Container size="md">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Lannkin, l&apos;agence web au service des{" "}
              <span className="text-[#498f6d]">TPE et PME francophones</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
              Lannkin, basée à Laval et dans tous les pays francophones, accompagne les TPE et PME
              avec des stratégies marketing globales et création de site web sur-mesure. Grâce à
              notre expertise internationale, nous vous offrons des solutions adaptées à chaque
              business, vous donnant une longueur d&apos;avance sur vos concurrents, avec
              l&apos;assurance d&apos;un accompagnement de proximité et un support téléphonique
              constant.
            </p>
            <div className="mt-8">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg bg-[#498f6d] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FONDATEURS ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[#498f6d]">
                Notre histoire
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Albert Lanne et Kevin Kinani fondent{" "}
                <span className="text-[#498f6d]">Lanne et Kinani associés</span>
              </h2>
              <div className="mt-6 space-y-5 text-[#4B5563]">
                <p className="leading-relaxed">
                  <strong className="text-[#1A1A1A]">Albert Lanne</strong>, expert en marketing et
                  stratégie d&apos;acquisition, excelle dans les environnements très concurrentiels.
                  Il gère de gros volumes de demandes et crée des tunnels avec un marketing 360°.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#1A1A1A]">Kevin Kinani</strong>, quant à lui, excelle
                  dans les scripts, le growth hacking, la cybersécurité et l&apos;automatisation.
                  Il a mis en place des scripts propriétaires grâce à un pôle de recherche et
                  développement, offrant des solutions techniques innovantes qui optimisent les
                  performances et la sécurité des projets.
                </p>
                <p className="leading-relaxed">
                  Ensemble, leur vision est claire : Lannkin, c&apos;est l&apos;assurance de vous
                  propulser en tête de votre marché en{" "}
                  <strong className="text-[#1A1A1A]">1ʳᵉ position sur Google</strong> avec des
                  stratégies éprouvées, portées par des experts dans chaque domaine, pour des
                  résultats concrets et durables.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#498f6d] px-6 py-3 font-semibold text-[#498f6d] transition-all duration-200 hover:bg-[#498f6d] hover:text-white"
                >
                  Nos services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Trophy image */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-4 shadow-lg">
                <div className="relative h-80 w-full overflow-hidden rounded-xl sm:h-96">
                  <Image
                    src="/images/a-propos/imgtrophe20M.png"
                    alt="Albert Lanne avec le trophée ClickFunnels 20M — remporté par CPM Consulting"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    Albert Lanne — Trophée ClickFunnels 20M
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                    Ce trophée, remporté par CPM Consulting avec l&apos;aide de Lannkin, représente
                    un accomplissement unique dans la francophonie — aucun autre acteur
                    n&apos;ayant atteint un tel niveau de performance avec ClickFunnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── SE DÉMARQUER ─────────────────────────────────────────────── */}
      <section className="bg-[#F0F0EC] py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Se démarquer, c&apos;est choisir une agence qui vous offre{" "}
              <span className="text-[#498f6d]">plus que les agences web classiques</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
              Alors que la plupart des agences web se concentrent uniquement sur Google et Facebook
              Ads, nous allons bien plus loin. Lannkin vous offre une gamme élargie de services et
              l&apos;accès à des régies publicitaires premium, vous permettant de vous démarquer
              efficacement dans un marché saturé.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AD_CHANNELS.map((channel) => (
              <div
                key={channel.category}
                className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <channel.icon className="h-5 w-5" style={{ color: channel.color }} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A]">
                  {channel.category}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280]">{channel.description}</p>
                <ul className="mt-4 space-y-2">
                  {channel.platforms.map((platform) => (
                    <li key={platform} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0 text-[#498f6d]" />
                      <span className="text-sm text-[#374151]">{platform}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/devis-gratuit/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#498f6d] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110"
            >
              Je me lance !
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── R&D / SCRIPTS EXCLUSIFS ──────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-[#498f6d]">
              Pôle Recherche &amp; Développement
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Lannkin : l&apos;innovation au cœur de votre{" "}
              <span className="text-[#498f6d]">performance digitale</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
              Notre pôle R&amp;D n&apos;est pas juste un plus — c&apos;est l&apos;assurance que vos
              campagnes publicitaires bénéficient des dernières avancées technologiques. Grâce à nos
              scripts exclusifs, vous disposez d&apos;un avantage concurrentiel unique.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {RD_SCRIPTS.map((script) => (
              <div
                key={script.title}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm"
              >
                <div className="relative h-56 w-full bg-[#F8F8F5]">
                  <Image
                    src={script.image}
                    alt={script.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#1A1A1A]">{script.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                    {script.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="bg-[#F0F0EC] py-16 lg:py-20">
        <Container size="md">
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-8 text-center shadow-sm sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Transformez votre présence en ligne !
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Parlez à un expert dès aujourd&apos;hui pour créer un site web qui attire vos clients.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-lg bg-[#498f6d] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110"
              >
                Obtenir un devis gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#498f6d] px-8 py-4 text-lg font-semibold text-[#498f6d] transition-all duration-200 hover:bg-[#498f6d] hover:text-white"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
