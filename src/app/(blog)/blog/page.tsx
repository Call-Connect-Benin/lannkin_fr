import type { Metadata } from "next";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { BLOG_CATEGORIES } from "@/data/blog-categories";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Blog | Lannkin — Marketing Digital, SEO, Web & IA",
  description:
    "Blog Lannkin : articles, guides et conseils en marketing digital, SEO, développement web, IA et publicité en ligne. Restez à jour sur les tendances.",
};

const FEATURED_TOPICS = [
  {
    title: "Comment choisir entre Google Ads et Facebook Ads en 2026?",
    excerpt:
      "Comparez ROI, ciblage et coûts pour investir votre budget pub au bon endroit selon votre industrie.",
    category: "Marketing Digital",
    readTime: "8 min",
    href: "/blog/",
  },
  {
    title: "Vibe Coding : le futur du développement web est arrivé",
    excerpt:
      "Lovable, Bolt, Cursor, Claude Code — comment l'IA révolutionne la création de sites web en 2026.",
    category: "Vibe Coding",
    readTime: "12 min",
    href: "/blog/",
  },
  {
    title: "SEO local au Québec : guide complet pour PME",
    excerpt:
      "Google Business Profile, citations, avis — tout ce qu'il faut pour dominer les recherches locales à Laval et Montréal.",
    category: "SEO",
    readTime: "15 min",
    href: "/blog/",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-diamant-cubes-flottants.webp" overlay={0.55} />
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
          </div>
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                <BookOpen className="mr-1.5 h-3 w-3" />
                {BLOG_CATEGORIES.length} catégories
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                Le <span className="text-accent">blog</span> Lannkin
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#CCCCCC]">
                Articles, guides et conseils pratiques en marketing digital,
                SEO, développement web, IA et publicité en ligne. Par des experts,
                pour des entrepreneurs.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            À la une
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Articles populaires
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {FEATURED_TOPICS.map((article, index) => (
              <article
                key={index}
                className="group glass flex flex-col rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted">{article.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {article.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Lire l&apos;article
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Articles complets bientôt disponibles — abonnez-vous pour être notifié.
          </p>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="bg-surface-light border-y border-white/5 py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Explorer par catégorie
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trouvez ce qui vous intéresse
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}/`}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
                  style={{
                    backgroundColor: `${cat.color}15`,
                    color: cat.color,
                  }}
                >
                  {cat.name.charAt(0)}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-accent">
                  {cat.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {cat.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Voir les articles
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <Container>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ne manquez rien
            </h2>
            <p className="mt-4 text-lg text-muted">
              Recevez nos meilleurs articles directement dans votre boîte mail.
              Pas de spam — juste du contenu utile, une fois par semaine.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                S&apos;abonner au blog
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
