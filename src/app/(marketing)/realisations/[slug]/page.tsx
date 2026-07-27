import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";

interface Props {
  params: Promise<{ slug: string }>;
}

type PortfolioProject = (typeof PORTFOLIO_PROJECTS)[number];

const CATEGORY_ACCENTS: Record<string, string> = {
  multipages: "#498f6d",
  onepage: "#85353e",
  ecommerce: "#498f6d",
  international: "#b96d2f",
};

const CATEGORY_BACKGROUNDS: Record<string, string> = {
  multipages:
    "radial-gradient(circle at 12% 16%, rgba(73,143,109,0.12), transparent 28%), radial-gradient(circle at 85% 15%, rgba(73,143,109,0.08), transparent 24%)",
  onepage:
    "radial-gradient(circle at 15% 18%, rgba(133,53,62,0.12), transparent 30%), radial-gradient(circle at 82% 18%, rgba(73,143,109,0.08), transparent 22%)",
  ecommerce:
    "radial-gradient(circle at 12% 18%, rgba(73,143,109,0.14), transparent 28%), radial-gradient(circle at 86% 12%, rgba(133,53,62,0.08), transparent 24%)",
  international:
    "radial-gradient(circle at 14% 16%, rgba(185,109,47,0.12), transparent 28%), radial-gradient(circle at 84% 14%, rgba(73,143,109,0.08), transparent 24%)",
};

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.seoDescription,
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const related = PORTFOLIO_PROJECTS.filter(
    (item) => item.slug !== project.slug && item.category === project.category,
  ).slice(0, 3);

  const accent = CATEGORY_ACCENTS[project.category] ?? "#498f6d";
  const heroBackground = CATEGORY_BACKGROUNDS[project.category] ?? CATEGORY_BACKGROUNDS.ecommerce;

  return (
    <main className="overflow-x-hidden bg-[#f7f5f0] text-[#2d2d2d]">
      <section className="relative overflow-hidden border-b border-[#d8d5ce] bg-[#f8fafc] pb-12 pt-8 lg:pb-16 lg:pt-12">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{ background: heroBackground }}
        />

        <Container className="relative z-10">
          <Link
            href="/realisations/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#5f6a63] transition-colors hover:text-[#498f6d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux réalisations
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="rounded-full border bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ borderColor: `${accent}33`, color: accent }}
                >
                  {project.categoryLabel}
                </span>
                <span className="text-sm text-[#67736d]">{project.sector}</span>
                <span className="text-sm text-[#9aa39d]">· {project.year}</span>
              </div>

              <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
                {project.name}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d655f]">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#d8d5ce] bg-white/88 px-4 py-2 text-sm font-medium text-[#38413c]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    style={{ backgroundColor: accent }}
                  >
                    Voir le projet
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.12)] bg-white/84 px-6 py-3.5 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-[#498f6d]/30 hover:text-[#498f6d]"
                >
                  Demander un devis similaire
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <ProjectVisual project={project} accent={accent} />
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {buildHighlights(project).map((item, index) => (
              <div
                key={item}
                className="rounded-[1.6rem] border p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="font-heading text-4xl font-bold" style={{ color: `${accent}40` }}>
                  0{index + 1}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#54605a]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-2 lg:pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="space-y-8">
              <ProjectTextBlock
                accent={accent}
                eyebrow="Contexte"
                title={buildContextTitle(project)}
                body={project.description}
              />
              <ProjectTextBlock
                accent={accent}
                eyebrow="Défi"
                title={buildChallengeTitle(project)}
                body={project.challenge}
              />
              <ProjectTextBlock
                accent={accent}
                eyebrow="Réponse"
                title={buildSolutionTitle(project)}
                body={project.solution}
              />

              {project.slug === "kosmopellis" ? (
                <KosmopellisSection accent={accent} />
              ) : null}
              {project.slug === "montecarlo-designs" ? (
                <MontecarloSection accent={accent} />
              ) : null}
              {project.slug === "montaigne-optique" ? (
                <MontaigneSection accent={accent} />
              ) : null}
            </div>

            <div className="space-y-5">
              <ResultsCard project={project} accent={accent} />
              <TechCard project={project} />
              <DetailsCard project={project} />
              <CtaCard accent={accent} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#ddd8cf] bg-[#ede9e1] py-14 lg:py-16">
        <Container size="md">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>
              Lecture du cas
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
              {buildSeoHeading(project)}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#5b655f]">
              {buildSeoParagraph(project)}
            </p>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="py-14 lg:py-16">
          <Container>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>
                  Autres projets
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-[#2d2d2d]">
                  Dans la même famille
                </h2>
              </div>
              <Link
                href={categoryHref(project.category)}
                className="text-sm font-semibold text-[#2d2d2d] transition-colors hover:text-[#498f6d]"
              >
                Voir plus de projets similaires
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/realisations/${item.slug}/`}
                  className="group overflow-hidden rounded-[1.6rem] border border-[rgba(45,45,45,0.08)] bg-white/88 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#498f6d]/24 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)]"
                >
                  {item.previewImage ? (
                    <div className="overflow-hidden border-b border-[rgba(45,45,45,0.06)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.previewImage}
                        alt={item.name}
                        className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#7a857f]">{item.sector}</p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d] transition-colors group-hover:text-[#498f6d]">
                      {item.name}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#59655f]">
                      {item.shortDescription}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>
                      Voir le projet
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}

function ProjectVisual({
  project,
  accent,
}: {
  project: PortfolioProject;
  accent: string;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -right-4 -top-4 hidden h-32 w-32 rounded-full blur-3xl lg:block"
        style={{ backgroundColor: `${accent}20` }}
      />
      <div className="overflow-hidden rounded-[2rem] border border-[rgba(45,45,45,0.08)] bg-white p-3 shadow-[0_28px_70px_rgba(45,45,45,0.08)]">
        {project.previewImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.previewImage}
            alt={`Aperçu de ${project.name}`}
            className="h-auto w-full rounded-[1.3rem] object-cover object-top"
          />
        ) : (
          <div
            className="flex aspect-[4/3] items-center justify-center rounded-[1.3rem]"
            style={{ background: `linear-gradient(135deg, ${accent}22, rgba(45,45,45,0.05))` }}
          >
            <span className="font-heading text-7xl font-bold" style={{ color: `${accent}55` }}>
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectTextBlock({
  accent,
  eyebrow,
  title,
  body,
}: {
  accent: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section
      className="rounded-[1.9rem] border p-7 sm:p-8"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(247,245,240,0.98) 100%)",
        borderColor: "rgba(45,45,45,0.08)",
      }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[#55615b]">{body}</p>
    </section>
  );
}

function ResultsCard({
  project,
  accent,
}: {
  project: PortfolioProject;
  accent: string;
}) {
  return (
    <div
      className="rounded-[1.75rem] border p-6"
      style={{
        background: `linear-gradient(145deg, ${accent}1f, rgba(255,255,255,0.76))`,
        borderColor: `${accent}33`,
      }}
    >
      <div className="mb-5 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: accent }}
        >
          <TrendingUp className="h-5 w-5" />
        </span>
        <h2 className="font-heading text-xl font-bold text-[#2d2d2d]">Résultats clés</h2>
      </div>
      <ul className="space-y-3">
        {project.results.map((result) => (
          <li key={result} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${accent}24`, color: accent }}
            >
              <Check className="h-3 w-3" />
            </span>
            <span className="text-sm leading-relaxed text-[#44514a]">{result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white/84 p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#498f6d]">Stack</p>
      <h2 className="mt-2 font-heading text-xl font-bold text-[#2d2d2d]">
        Technologies utilisées
      </h2>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#d8d5ce] bg-[#f7f5f0] px-3.5 py-2 text-sm font-medium text-[#3f4943]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailsCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white/84 p-6">
      <h2 className="font-heading text-xl font-bold text-[#2d2d2d]">Détails du projet</h2>
      <dl className="mt-5 space-y-3">
        {[
          { label: "Client", value: project.client },
          { label: "Secteur", value: project.sector },
          { label: "Année", value: String(project.year) },
          { label: "Type", value: project.categoryLabel },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-start justify-between gap-4 border-b border-[#ece8e0] pb-3 last:border-b-0 last:pb-0"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a938d]">
              {label}
            </dt>
            <dd className="text-right text-sm font-semibold text-[#2d2d2d]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CtaCard({ accent }: { accent: string }) {
  return (
    <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white/84 p-6">
      <h2 className="font-heading text-xl font-bold text-[#2d2d2d]">Un projet similaire ?</h2>
      <p className="mt-3 text-sm leading-relaxed text-[#5b665f]">
        Nous analysons votre contexte, votre marché et votre niveau d’ambition
        pour vous proposer une trajectoire réaliste, claire et orientée résultats.
      </p>
      <div className="mt-5 space-y-2.5">
        <Link
          href="/devis-gratuit/"
          className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
          style={{ backgroundColor: accent }}
        >
          Demander un devis
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact/"
          className="flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.10)] bg-[#f7f5f0] px-5 py-3 text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-[#498f6d]/30 hover:text-[#498f6d]"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}

function KosmopellisSection({ accent }: { accent: string }) {
  return (
    <section className="space-y-8">
      <ProjectTextBlock
        accent={accent}
        eyebrow="Conversion"
        title="Une boutique Shopify pensée comme une machine à panier moyen"
        body="Pour Kosmopellis, nous avons travaillé chaque étape du parcours d’achat pour maximiser la conversion. Des pages produits repensées comme de vraies landing pages, une stratégie d’upsell de packs intégrée directement au checkout Shopify, et une architecture de catalogue pensée pour augmenter le panier moyen."
      />

      <ShowcaseImage
        src="/images/services/conception de site web/shopify/kosmopellis-a.png"
        alt="Kosmopellis avant après pages produits"
        caption="Refonte complète des pages produits avec structure de landing page, bénéfices clairs et preuves sociales."
      />

      <ShowcaseImage
        src="/images/services/conception de site web/shopify/kosmopellis-upsells.png"
        alt="Kosmopellis upsells checkout Shopify"
        caption="Intégration d’upsells de packs directement au checkout Shopify pour augmenter le panier moyen."
      />

      <div className="flex flex-wrap gap-3">
        <InlineServiceLink href="/services/conception-web/site-shopify/" label="Agence web Shopify" accent={accent} />
        <InlineServiceLink href="/services/seo/" label="SEO & Référencement" accent={accent} />
        <InlineServiceLink href="/services/facebook-ads/" label="Facebook Ads" accent={accent} />
      </div>
    </section>
  );
}

function MontecarloSection({ accent }: { accent: string }) {
  return (
    <section className="space-y-8">
      <ProjectTextBlock
        accent={accent}
        eyebrow="3D & SEO"
        title="Une expérience premium où la modélisation sert aussi le référencement"
        body="Chaque table en marbre du catalogue Montecarlo Designs a été entièrement modélisée avec Blender. Les modèles sont ensuite exportés au format GLB/glTF, un format que Google peut indexer, ce qui transforme un travail 3D haut de gamme en avantage SEO concret."
      />

      <ShowcaseImage
        src="/images/services/conception de site web/shopify/rendu3Dmonaco.webp"
        alt="Rendu 3D Blender Montecarlo Designs"
        caption="Rendu 3D photoréaliste réalisé avec Blender pour exprimer la qualité perçue du mobilier."
      />

      <ShowcaseImage
        src="/images/services/conception de site web/shopify/montecarloglb.png"
        alt="Modèles GLB indexés par Google"
        caption="Le format WebGL/GLB permet d’étendre la valeur du projet jusqu’aux résultats de recherche Google."
      />

      <ShowcaseImage
        src="/images/services/conception de site web/shopify/monacoboutique.png"
        alt="Boutique Montecarlo Designs à Monaco"
        caption="Le projet digital devait refléter le même niveau de prestige que la boutique physique."
      />

      <div
        className="overflow-hidden rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white"
      >
        <div
          className="relative"
          style={{ paddingBottom: "64.98%", height: 0 }}
        >
          <iframe
            src="https://www.loom.com/embed/eda0796b3cd04b789299b1eb2bbef965"
            className="absolute left-0 top-0 h-full w-full border-0"
            allowFullScreen
            title="Présentation du projet Montecarlo Designs"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <InlineServiceLink href="/services/sites-immersifs-3d/" label="Sites immersifs 3D" accent={accent} />
        <InlineServiceLink href="/services/conception-web/site-shopify/" label="Agence web Shopify" accent={accent} />
      </div>
    </section>
  );
}

function MontaigneSection({ accent }: { accent: string }) {
  return (
    <section className="space-y-8">
      <ProjectTextBlock
        accent={accent}
        eyebrow="WordPress"
        title="Un e-commerce WordPress calibré pour un univers de luxe très codé"
        body="Pour Montaigne Optique, nous avons développé une boutique WordPress avec WooCommerce adaptée à un catalogue de grandes marques et à un positionnement premium. L’objectif était autant commercial qu’image : transposer en ligne le niveau de prestige attendu Avenue Montaigne."
      />

      <div className="flex flex-wrap gap-3">
        <InlineServiceLink href="/services/conception-web/site-wordpress/" label="Nos services WordPress" accent={accent} />
        <InlineServiceLink href="/services/seo/" label="SEO & Référencement" accent={accent} />
        <InlineServiceLink href="/services/google-ads/" label="Google Ads" accent={accent} />
      </div>

      <ShowcaseImage
        src="/images/services/conception de site web/shopify/montaigneoptique.png"
        alt="Montaigne Optique façade Avenue Montaigne"
        caption="Le projet digital prolongeait un ancrage physique fort et une clientèle haut de gamme."
      />
    </section>
  );
}

function ShowcaseImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white">
      <Image src={src} alt={alt} width={1200} height={675} className="w-full object-cover" />
      {caption ? (
        <p className="border-t border-[rgba(45,45,45,0.06)] px-5 py-4 text-sm leading-relaxed text-[#5c6760]">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

function InlineServiceLink({
  href,
  label,
  accent,
}: {
  href: string;
  label: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-lg border bg-white px-4 py-2 text-sm font-medium transition-colors hover:brightness-95"
      style={{ borderColor: `${accent}3d`, color: accent }}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

function buildHighlights(project: PortfolioProject): string[] {
  return [
    `${project.categoryLabel} structuré pour rendre l’offre plus lisible et plus crédible.`,
    `${project.services.join(", ")} articulés autour d’un même objectif business.`,
    `Dispositif pensé pour produire des résultats mesurables, pas seulement une belle présence en ligne.`,
  ];
}

function buildContextTitle(project: PortfolioProject): string {
  return `Un projet ${project.categoryLabel.toLowerCase()} aligné sur les enjeux réels de ${project.client}`;
}

function buildChallengeTitle(project: PortfolioProject): string {
  return `Le point de friction principal à résoudre pour ${project.client}`;
}

function buildSolutionTitle(project: PortfolioProject): string {
  return "La réponse construite par Lannkin";
}

function buildSeoHeading(project: PortfolioProject): string {
  switch (project.categoryLabel) {
    case "E-commerce":
      return "Un cas e-commerce piloté par la structure, l’acquisition et la lisibilité";
    case "Multipages":
      return "Un projet multipage pensé pour la clarté, la crédibilité et la conversion";
    case "Onepage":
      return "Une page unique conçue pour concentrer le message et accélérer la décision";
    case "International":
      return "Un projet international où l’exécution devait tenir compte du positionnement et du marché";
    default:
      return "Un projet structuré autour d’objectifs concrets et mesurables";
  }
}

function buildSeoParagraph(project: PortfolioProject): string {
  return `${project.client} illustre bien notre approche actuelle : un projet digital devient performant quand le design, le contenu, le référencement et la logique de conversion tirent dans la même direction. Sur ce cas, le travail ne consistait pas seulement à livrer une présence en ligne, mais à rendre l’offre plus compréhensible, plus désirable et plus facile à activer.`;
}

function categoryHref(category: string): string {
  switch (category) {
    case "multipages":
      return "/realisations/multipages/";
    case "onepage":
      return "/realisations/onepage/";
    case "ecommerce":
      return "/realisations/ecommerce/";
    case "international":
      return "/realisations/international/";
    default:
      return "/realisations/";
  }
}
