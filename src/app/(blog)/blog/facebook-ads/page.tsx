import type { Metadata } from "next";

import { ArrowRight, BookOpen, Globe, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

import { getBlogCategoryBySlug } from "@/data/blog-categories";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Blog Facebook Ads | Stratégies Meta | Ekolink",
  description:
    "Articles et guides Facebook Ads et Instagram Ads. Stratégies de ciblage, optimisation créatifs, Pixel Meta, retargeting avancé et API Conversions.",
};

const FACEBOOK_ADS_ARTICLES = [
  {
    slug: "meta-pixel-installation-api-conversions-2026",
    title: "Meta Pixel en 2026 : installation, événements et API Conversions",
    excerpt:
      "Guide complet pour installer le Pixel Meta correctement, configurer les événements standards et implémenter l'API Conversions pour pallier aux restrictions iOS et navigateurs.",
    readTime: "10 min",
    tags: ["Pixel", "API Conversions", "Tracking"],
    difficulty: "Intermédiaire",
  },
  {
    slug: "ciblage-facebook-ads-audiences-personnalisees-similaires",
    title: "Ciblage Facebook Ads : audiences personnalisées vs similaires",
    excerpt:
      "Construisez des audiences personnalisées efficaces depuis vos données CRM et créez des Lookalike Audiences pour toucher de nouveaux prospects qualifiés en France.",
    readTime: "8 min",
    tags: ["Ciblage", "Audiences", "Lookalike"],
    difficulty: "Débutant",
  },
  {
    slug: "budget-facebook-ads-pme-quebec",
    title: "Budget Facebook Ads : combien investir pour une PME française ?",
    excerpt:
      "Comment allouer votre budget Meta Ads selon votre industrie, vos objectifs et la taille de votre audience cible en France. Exemples de campagnes réelles inclus.",
    readTime: "6 min",
    tags: ["Budget", "PME", "ROI"],
    difficulty: "Débutant",
  },
  {
    slug: "meilleurs-formats-publicitaires-meta-ads-2026",
    title: "Les meilleurs formats publicitaires Meta en 2026",
    excerpt:
      "Reels Ads, Stories, Collection, Carrousel ou Lead Gen — quel format choisir selon votre objectif ? Comparatif basé sur les benchmarks français du marché.",
    readTime: "9 min",
    tags: ["Créatifs", "Formats", "Reels"],
    difficulty: "Intermédiaire",
  },
  {
    slug: "retargeting-meta-strategie-complete",
    title: "Retargeting Meta : stratégie complète pour récupérer vos visiteurs",
    excerpt:
      "Mettez en place des séquences de retargeting : visiteurs du site, panier abandonné, vues vidéo et liste clients. Augmentez votre taux de conversion de façon significative.",
    readTime: "12 min",
    tags: ["Retargeting", "Conversion", "Entonnoir"],
    difficulty: "Avancé",
  },
  {
    slug: "analyser-resultats-facebook-ads-meta-business-suite",
    title: "Comment analyser vos résultats Meta Ads avec Business Suite",
    excerpt:
      "Maîtrisez les métriques clés : ROAS, CPM, CTR, fréquence et attribution. Identifiez ce qui fonctionne et ce qu'il faut optimiser dans vos campagnes Meta.",
    readTime: "7 min",
    tags: ["Analytics", "ROAS", "Métriques"],
    difficulty: "Intermédiaire",
  },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Débutant: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Intermédiaire: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Avancé: "text-red-400 bg-red-400/10 border-red-400/20",
};

const TOPICS = [
  "Pixel Meta & API Conversions",
  "Ciblage & Audiences personnalisées",
  "Gestion et optimisation de budget",
  "Formats publicitaires Meta 2026",
  "Retargeting & Remarketing",
  "Créatifs & Copywriting pub",
  "Facebook Shop & Catalogue produits",
  "Stratégies B2B sur Meta",
  "Reporting & Analytics",
  "Automatisation des campagnes",
];

export default function BlogFacebookAdsPage() {
  const category = getBlogCategoryBySlug("facebook-ads");
  const categoryColor = category?.color ?? "#1877F2";

  return (
    <main>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-lateral-angle.webp" overlay={0.6} />
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full blur-[120px]"
              style={{ backgroundColor: `${categoryColor}10` }}
            />
          </div>
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              {/* Breadcrumb */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <Link href="/blog/" className="text-sm text-muted transition-colors hover:text-white">
                  Blog
                </Link>
                <span className="text-muted">/</span>
                <span className="text-sm" style={{ color: categoryColor }}>
                  Facebook &amp; Meta Ads
                </span>
              </div>

              <span
                className="mb-4 inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium"
                style={{
                  color: categoryColor,
                  borderColor: `${categoryColor}30`,
                  backgroundColor: `${categoryColor}10`,
                }}
              >
                <Globe className="mr-1.5 h-3 w-3" />
                {FACEBOOK_ADS_ARTICLES.length} articles
              </span>

              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Blog{" "}
                <span style={{ color: categoryColor }}>Facebook</span>{" "}
                &amp; Meta Ads
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#CCCCCC]">
                Stratégies, guides pratiques et conseils d&apos;experts pour maîtriser
                la publicité sur Facebook, Instagram et Messenger. Du débutant au
                gestionnaire avancé.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats rapides */}
      <section className="border-y border-white/5 bg-surface-light py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Articles disponibles", value: "6+", icon: BookOpen },
              { label: "Portée réseau Meta", value: "3,2M", icon: Users },
              { label: "Annonceurs actifs", value: "10M+", icon: Globe },
              { label: "ROAS moyen e-comm.", value: "3,5×", icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                <div className="font-heading text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-0.5 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Articles + Sidebar */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Liste d'articles */}
            <div className="flex-1">
              <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                Articles récents
              </h2>
              <p className="mb-10 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Maîtrisez Meta Ads
              </p>

              <div className="flex flex-col gap-6">
                {FACEBOOK_ADS_ARTICLES.map((article) => (
                  <article
                    key={article.slug}
                    className="group glass flex flex-col gap-4 rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)] sm:flex-row"
                  >
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${DIFFICULTY_COLORS[article.difficulty]}`}
                        >
                          {article.difficulty}
                        </span>
                        <span className="text-xs text-muted">{article.readTime} de lecture</span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-end sm:items-center">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                        Lire
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-muted">
                Articles complets bientôt disponibles — abonnez-vous pour être notifié.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 xl:w-80">
              {/* Sujets couverts */}
              <div className="glass rounded-xl p-6">
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                  Sujets couverts
                </h3>
                <ul className="space-y-2">
                  {TOPICS.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/50" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA service */}
              <div
                className="mt-6 rounded-xl border p-6"
                style={{
                  borderColor: `${categoryColor}20`,
                  backgroundColor: `${categoryColor}08`,
                }}
              >
                <h3 className="font-heading text-lg font-semibold text-white">
                  Vous gérez vos Meta Ads ?
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Ekolink gère des comptes Facebook Ads dès 500€/mois. Ciblage
                  avancé, créatifs et reporting inclus.
                </p>
                <Link
                  href="/services/facebook-ads/"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                  style={{ backgroundColor: categoryColor }}
                >
                  Voir nos services Meta Ads
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs/facebook-ads/"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Consulter les tarifs
                </Link>
              </div>

              {/* Autres catégories */}
              <div className="glass mt-6 rounded-xl p-6">
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                  Autres catégories
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Google Ads", slug: "google-ads" },
                    { name: "Réseaux Sociaux", slug: "reseaux-sociaux" },
                    { name: "Marketing Digital", slug: "marketing-digital" },
                  ].map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog/${cat.slug}/`}
                      className="group flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-2.5 transition-all duration-200 hover:border-accent/20"
                    >
                      <span className="text-sm font-medium text-white group-hover:text-accent">
                        {cat.name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" />
                    </Link>
                  ))}
                  <Link
                    href="/blog/"
                    className="mt-1 text-center text-xs text-muted transition-colors hover:text-accent"
                  >
                    Voir toutes les catégories →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* CTA bas de page */}
      <section className="py-24">
        <Container>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à booster vos Meta Ads ?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Notre équipe certifiée Meta gère vos campagnes Facebook et Instagram
              pour maximiser votre retour sur investissement.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Obtenir une stratégie gratuite
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/tarifs/facebook-ads/"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
