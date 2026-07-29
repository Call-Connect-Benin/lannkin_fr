import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Globe,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { LeadCaptureForm } from "@/presentation/components/forms/LeadCaptureForm";
import { TestimonialsSection } from "@/presentation/components/home/TestimonialsSection";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Agence Web Paris France | À Propos | Lannkin",
  description:
    "Lannkin accompagne les PME françaises avec une approche exigeante du marketing digital, de la conception web et de l'acquisition. Découvrez notre méthode, notre positionnement et notre équipe.",
  alternates: { canonical: "https://lannkin.com/a-propos/" },
};

const INTRO_STATS = [
  { value: "2015", label: "année de fondation" },
  { value: `${SITE_CONFIG.stats.yearsExperience}+`, label: "années de terrain" },
  { value: `${Math.round(SITE_CONFIG.stats.monthlyAdBudget / 1000)}K€+`, label: "pilotés chaque mois" },
  { value: `${SITE_CONFIG.stats.googleReviews}`, label: "avis Google vérifiés" },
] as const;

const PRINCIPLES = [
  {
    title: "Une agence compacte",
    description:
      "Nous préférons une structure resserrée, plus lisible, plus réactive et plus exigeante sur la qualité des décisions.",
    icon: Sparkles,
  },
  {
    title: "Une logique business",
    description:
      "Les choix créatifs, techniques et médias sont toujours reliés à un objectif concret: plus de demande, plus de marge ou une meilleure lisibilité de l'offre.",
    icon: Target,
  },
  {
    title: "Une relation directe",
    description:
      "Moins de couches, moins d'intermédiaires, moins de bruit. Vous échangez avec des personnes qui portent vraiment l'exécution.",
    icon: Zap,
  },
] as const;

const TIMELINE = [
  {
    year: "2015",
    title: "Lancement de Lannkin",
    description:
      "Départ avec un positionnement très orienté acquisition et présence web pour les petites structures qui ont besoin de résultats visibles rapidement.",
  },
  {
    year: "2019",
    title: "Montée en gamme sur l'exécution",
    description:
      "Affinage des méthodes de travail, meilleure sélection des projets et plus forte exigence sur le lien entre stratégie, production et performance.",
  },
  {
    year: "2023",
    title: "Accélération R&D",
    description:
      "Développement de scripts internes, meilleure lecture des signaux de campagnes et structuration d'une logique plus propriétaire sur certains leviers.",
  },
  {
    year: "2026",
    title: "Nouvelle direction France",
    description:
      "Refonte du positionnement, clarification de l'offre et mise en cohérence de l'écosystème autour d'une agence plus nette, plus premium et plus sélective.",
  },
] as const;

const FOOTPRINT = [
  {
    label: "Paris",
    detail: "Siège, relation client, cadrage, arbitrages.",
    image: "/images/a-propos/shutterstock_667548661v2-1024x683-1.webp",
    alt: "Paris, ancrage de Lannkin",
  },
  {
    label: "Île-de-France",
    detail: "Proximité PME, accompagnement local, enjeux de visibilité concrète.",
    image: "/images/a-propos/shutterstock_667548661v2-1024x683-1.webp",
    alt: "Île-de-France, zone de service Lannkin",
  },
  {
    label: "France entière",
    detail: "Exécution nationale pour les projets où le marché et l'offre sont clairement définis.",
    image: "/images/a-propos/suisse-paysage-ville.webp",
    alt: "France, couverture nationale Lannkin",
  },
] as const;

const EXPERTISE_PILLARS = [
  {
    title: "Acquisition payante",
    copy:
      "Google Ads, Meta, Native Ads, social ads et structuration des tunnels de conversion. Le sujet n'est pas seulement d'acheter du trafic, mais d'acheter le bon trafic dans le bon cadre.",
    links: [
      { label: "Google Ads", href: "/services/google-ads/" },
      { label: "Native Ads", href: "/services/native-ads/" },
      { label: "Lead Generation", href: "/services/lead-generation/" },
    ],
  },
  {
    title: "Conception web",
    copy:
      "Sites vitrines, Shopify, WordPress, Next.js et expériences plus immersives. La forme compte, mais elle doit servir le message, la lisibilité et la conversion.",
    links: [
      { label: "Conception Web", href: "/services/conception-web/" },
      { label: "Vibe Coding", href: "/services/vibe-coding/" },
      { label: "Sites 3D", href: "/services/sites-immersifs-3d/" },
    ],
  },
  {
    title: "SEO & structure",
    copy:
      "Le référencement n'est pas traité comme une couche finale. Il se construit avec l'architecture, les contenus, le maillage et la qualité de lecture de l'offre.",
    links: [
      { label: "SEO", href: "/services/seo/" },
      { label: "Google My Business", href: "/services/google-my-business/" },
      { label: "Réalisations", href: "/realisations/" },
    ],
  },
] as const;

const WORK_MODEL = [
  {
    title: "1. Cadrage",
    description:
      "Nous clarifions d'abord l'offre, le contexte, la cible, le niveau d'urgence et les contraintes réelles avant de produire quoi que ce soit.",
  },
  {
    title: "2. Architecture",
    description:
      "Nous transformons le besoin en système lisible: pages, messages, offres, priorités médias, séquences de conversion et ordre d'exécution.",
  },
  {
    title: "3. Production",
    description:
      "Nous livrons vite quand il faut aller vite, mais sans perdre la cohérence du dispositif. Les arbitrages se font au service du résultat, pas du folklore.",
  },
  {
    title: "4. Pilotage",
    description:
      "Le suivi repose sur des signaux utiles: leads, ventes, structure de compte, rendement des pages, friction dans le parcours et zones de fuite.",
  },
] as const;

const CHANNELS = [
  {
    title: "Native Ads",
    description:
      "Des volumes importants, des CPC souvent plus faibles, mais une exigence forte sur l'offre, la page et le tunnel. C'est un levier qui punit les approches molles.",
    icon: Globe,
  },
  {
    title: "SEA",
    description:
      "L'intention est forte, la concurrence aussi. Le vrai travail ne se limite pas aux enchères: il commence au niveau de la structure, du tracking et de la qualité de page.",
    icon: Target,
  },
  {
    title: "Social Ads",
    description:
      "Sur Meta, TikTok ou LinkedIn, la créa seule ne suffit pas. Il faut une offre claire, une promesse lisible et un parcours propre derrière le clic.",
    icon: TrendingUp,
  },
] as const;

const RD_SCRIPTS = [
  {
    title: "Script Google Ads anti-fraude",
    description:
      "Un outil interne qui aide à isoler les clics suspects et à structurer les demandes de remboursement pour protéger le budget média.",
    result: "Moins de pertes invisibles",
    image: "/images/a-propos/script-clic-export-google-ads.webp",
    alt: "Script Google Ads anti-fraude Lannkin",
  },
  {
    title: "Lecture avancée des campagnes performantes",
    description:
      "Un angle d'analyse qui permet d'aller chercher des signaux moins visibles dans les interfaces classiques pour accélérer les décisions d'optimisation.",
    result: "Décisions plus fines",
    image: "/images/a-propos/script-pmaw-analys.webp",
    alt: "Analyse avancée des campagnes Google Ads",
  },
] as const;

const TRUST_POINTS = [
  "Google Partner, Microsoft Advertising Partner et Facebook/Meta Partner.",
  "Accès direct à vos comptes et à vos résultats, sans opacité inutile.",
  "Approche sélective: nous ne cherchons pas à convenir à tout le monde.",
  "Recommandations franches, y compris quand il faut réduire, recentrer ou simplifier.",
] as const;

const CONTACT_ITEMS: ReadonlyArray<{
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}> = [
  {
    label: "Téléphone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/[\s()]/g, "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
  },
  {
    label: "Localisation",
    value: "Paris, France",
    icon: MapPin,
  },
];

export default function AProposPage() {
  return (
    <main className="overflow-x-clip bg-[#f7f5f0] text-[#2d2d2d]">
      <section className="relative overflow-hidden border-b border-[#d8d5ce] bg-[#f8fafc] pb-14 pt-10 lg:pb-18 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 12% 16%, rgba(73,143,109,0.14), transparent 28%), radial-gradient(circle at 84% 14%, rgba(133,53,62,0.08), transparent 24%)",
          }}
        />
        <div className="pointer-events-none absolute right-[8%] top-10 hidden h-72 w-72 rounded-full bg-[rgba(73,143,109,0.10)] blur-[120px] lg:block" aria-hidden />

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_22rem] lg:items-start">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bfd5c8] bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#498f6d] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#498f6d]" />
                Fondée en {SITE_CONFIG.founded} à Paris
              </div>

              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-[4.35rem] lg:leading-[0.98]">
                Une agence plus
                <span className="text-[#498f6d]"> lisible</span>,
                <br className="hidden sm:block" /> plus directe, plus utile.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#58645d] sm:text-[1.1rem]">
                Lannkin accompagne les PME françaises avec une logique simple:
                clarifier l'offre, construire les bons points d'entrée, piloter
                l'acquisition avec lucidité et produire des dispositifs web qui
                servent vraiment la croissance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#498f6d] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Démarrer un projet
                </Link>
                <Link
                  href="/realisations/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.12)] bg-white/84 px-6 py-3.5 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-[#498f6d]/30 hover:text-[#498f6d]"
                >
                  Voir les réalisations
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {INTRO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.4rem] border p-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.72)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    <p className="font-heading text-3xl font-bold text-[#2d2d2d]">{stat.value}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6c7671]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {PRINCIPLES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(247,245,240,0.98) 100%)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#498f6d]/12 text-[#498f6d]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-[#2d2d2d]">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5d6862]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
                Positionnement
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Une agence de croissance, pas une usine à production.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#5b6760]">
                Nous ne cherchons pas à empiler les prestations ni à flatter les
                clients avec des couches de complexité. Nous cherchons à rendre
                les systèmes plus lisibles, les décisions plus nettes et les
                projets plus performants.
              </p>
            </div>

            <div className="space-y-4">
              {TIMELINE.map((step) => (
                <div
                  key={step.year}
                  className="rounded-[1.75rem] border p-6"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-5">
                    <div className="font-heading text-4xl font-bold text-[#498f6d]/28">{step.year}</div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#2d2d2d]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5b6760]">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#ddd8cf] bg-[#ede9e1] py-14 lg:py-16">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
              Ancrage
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Un ancrage parisien, une exécution pensée pour le marché français.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5d6761]">
              Nous parlons à des entreprises qui veulent de la clarté, une
              bonne lecture de leur marché et une exécution sans folklore. Le
              terrain compte, mais la cohérence du dispositif compte encore plus.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {FOOTPRINT.map((item) => (
              <div
                key={item.label}
                className="group overflow-hidden rounded-[1.75rem] border bg-white/84"
                style={{ borderColor: "rgba(45,45,45,0.08)" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,12,0.72)] to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-heading text-2xl font-bold text-white">{item.label}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-[#5f6a64]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
                Expertise
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Trois blocs de compétences, une seule logique d'ensemble.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#5a6660]">
                Nous ne découpons pas artificiellement le marketing, le site et
                le SEO comme trois mondes séparés. Quand le système est bien
                conçu, chaque brique renforce les autres.
              </p>
            </div>

            <div className="space-y-4">
              {EXPERTISE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.75rem] border p-6"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  <h3 className="font-heading text-2xl font-bold text-[#2d2d2d]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5e6863]">{pillar.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {pillar.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#bfd5c8] bg-white px-4 py-2 text-sm font-medium text-[#498f6d] transition-colors hover:bg-[#498f6d]/5"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#ddd8cf] bg-[#ede9e1] py-14 lg:py-16">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
              Méthode
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Comment nous travaillons quand un projet mérite d'être bien traité.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#59655f]">
              Notre méthode n'a rien de spectaculaire, et c'est précisément son
              intérêt. Elle évite les faux départs, les surproductions et les
              décisions décoratives.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {WORK_MODEL.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.65rem] border p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.84)", borderColor: "rgba(45,45,45,0.08)" }}
              >
                <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6a64]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
                Lecture marché
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Nous connaissons les leviers. Nous savons aussi quand ils sont mal utilisés.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#5a6660]">
                Le problème n'est souvent pas le canal lui-même. Le problème,
                c'est le décalage entre la plateforme, l'offre, la page et le
                niveau de maturité du projet.
              </p>
            </div>

            <div className="grid gap-4">
              {CHANNELS.map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-[1.6rem] border p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                    borderColor: "rgba(45,45,45,0.08)",
                  }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#498f6d]/12 text-[#498f6d]">
                    <channel.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">{channel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f6964]">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#ddd8cf] bg-[#ede9e1] py-14 lg:py-16">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
              Pôle R&D
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Une innovation utile, pas une vitrine pour faire impression.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#59655f]">
              Chez Lannkin, la R&D sert à réduire les angles morts, protéger le
              budget, mieux lire la performance et gagner du temps sur les
              décisions importantes.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {RD_SCRIPTS.map((script) => (
              <div
                key={script.title}
                className="overflow-hidden rounded-[1.75rem] border bg-white/86"
                style={{ borderColor: "rgba(45,45,45,0.08)" }}
              >
                <div className="relative h-64 overflow-hidden border-b border-[rgba(45,45,45,0.06)]">
                  <Image
                    src={script.image}
                    alt={script.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-[#498f6d]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#498f6d]">
                    {script.result}
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-[#2d2d2d]">{script.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f6964]">{script.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">
                Confiance
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Ce que nous voulons rendre visible dès le départ.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#5b6760]">
                La confiance ne vient pas d'un discours gonflé. Elle vient d'un
                cadre lisible, d'une bonne tenue dans le temps et de signaux
                simples à vérifier.
              </p>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-[1.75rem] border p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#498f6d]/12 text-[#498f6d]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">
                    Certifications et cadre de travail
                  </h3>
                </div>
                <ul className="space-y-3">
                  {TRUST_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#498f6d]/14 text-[#498f6d]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-[#5d6762]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {SITE_CONFIG.certifications.map((certification) => (
                  <div
                    key={certification}
                    className="rounded-[1.4rem] border p-4 text-center"
                    style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.84)" }}
                  >
                    <p className="font-heading text-base font-bold text-[#2d2d2d]">{certification}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-y border-[#ddd8cf] bg-[#ede9e1]">
        <TestimonialsSection />
      </div>

      <section className="relative overflow-hidden py-14 lg:py-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 85% 18%, rgba(73,143,109,0.10), transparent 24%), radial-gradient(circle at 15% 85%, rgba(133,53,62,0.06), transparent 22%)",
          }}
        />
        <Container className="relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
            <div className="lg:py-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bfd5c8] bg-white/84 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#498f6d]">
                <span className="h-2 w-2 rounded-full bg-[#498f6d]" />
                Réponse rapide
              </div>

              <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl">
                Travaillons ensemble.
              </h2>
              <p className="mt-5 max-w-[420px] text-base leading-relaxed text-[#5d6762]">
                Si le projet est sérieux et que le sujet mérite d'être bien
                construit, nous serons ravis d'en parler. Vous recevez une
                réponse claire, sans détour, et sans couche commerciale inutile.
              </p>

              <ul className="mt-8 space-y-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#498f6d]/12 text-[#498f6d]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b8580]">
                          {label}
                        </p>
                        <p className="text-sm font-medium text-[#2d2d2d]">{value}</p>
                      </div>
                    </>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="inline-flex items-center gap-3.5">
                          {content}
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-3.5">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-[1.9rem] border border-[rgba(45,45,45,0.08)] bg-white/84 p-3 shadow-[0_24px_60px_rgba(45,45,45,0.06)] sm:p-4">
              <LeadCaptureForm
                title="Parlez-nous de votre projet"
                subtitle="Nous vous répondons avec un premier retour utile, pas avec une réponse générique."
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
