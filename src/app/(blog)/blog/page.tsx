import type { Metadata } from "next";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { BLOG_CATEGORIES } from "@/data/blog-categories";
import { formatDate, getAllPosts } from "@/lib/blog";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog | Lannkin — Marketing Digital, SEO, Web & IA",
  description:
    "Blog Lannkin : articles, guides et conseils en marketing digital, SEO, développement web, IA et publicité en ligne. Restez à jour sur les tendances.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-16 pt-12">

        {/* 3D background — diamants flottants côté droit */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[60%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-diamant-cubes-flottants.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.20 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(108deg, #0C0C0C 18%, rgba(12,12,12,0.65) 40%, transparent 62%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #0C0C0C 0%, transparent 18%, transparent 82%, #0C0C0C 100%)",
              }}
            />
          </div>
        </div>

        {/* Halo */}
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
            >
              <BookOpen className="h-3.5 w-3.5" style={{ color: "#498f6d" }} />
              <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>
                {BLOG_CATEGORIES.length} catégories · Mis à jour régulièrement
              </span>
            </div>

            <h1
              className="font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]"
              style={{ color: "#FFFFFF" }}
            >
              Le{" "}
              <span style={{ color: "#498f6d" }}>blog</span>{" "}
              Lannkin
            </h1>

            <div
              className="mt-5 h-px w-14"
              style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
            />

            <p
              className="mt-5 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Articles, guides et conseils pratiques en marketing digital, SEO,
              développement web, IA et publicité en ligne. Par des experts,
              pour des entrepreneurs.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ARTICLES
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-20 pt-4">
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />
        <Container>
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              À la une
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight" style={{ color: "#FFFFFF" }}>
              Derniers articles
            </h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-xs font-medium"
                      style={{ backgroundColor: "rgba(73,143,109,0.14)", color: "#498f6d" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-heading text-base font-semibold leading-snug transition-colors group-hover:text-[#498f6d]"
                    style={{ color: "#FFFFFF" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
                      {formatDate(post.date)}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-medium opacity-0 transition-all duration-200 group-hover:opacity-100"
                      style={{ color: "#498f6d" }}
                    >
                      Lire l&apos;article
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div
              className="rounded-2xl p-12 text-center"
              style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <BookOpen className="mx-auto mb-3 h-8 w-8" style={{ color: "rgba(73,143,109,0.40)" }} />
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                Articles bientôt disponibles — revenez prochainement.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CATÉGORIES
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-20">
        {/* 3D bg gauche — cube vert overhead */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 left-0 w-[40%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-overhead.webp"
              alt=""
              className="h-full w-full object-cover object-right"
              style={{ opacity: 0.10 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent, #0C0C0C)" }}
            />
          </div>
        </div>

        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
        />

        <Container className="relative z-10">
          <div className="mb-10">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "#498f6d" }}>
              Explorer par catégorie
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight" style={{ color: "#FFFFFF" }}>
              Trouvez ce qui vous intéresse
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}/`}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold"
                  style={{
                    backgroundColor: `${cat.color}18`,
                    color: cat.color,
                  }}
                >
                  {cat.name.charAt(0)}
                </div>
                <h3
                  className="font-heading text-base font-semibold transition-colors group-hover:text-[#498f6d]"
                  style={{ color: "#FFFFFF" }}
                >
                  {cat.name}
                </h3>
                <p
                  className="mt-2 line-clamp-2 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {cat.description}
                </p>
                <div
                  className="mt-4 inline-flex items-center gap-1 text-xs font-medium opacity-0 transition-all duration-200 group-hover:opacity-100"
                  style={{ color: "#498f6d" }}
                >
                  Voir les articles
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA NEWSLETTER
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-24">
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
        />
        <Container>
          <div
            className="mx-auto max-w-3xl rounded-2xl p-10 text-center sm:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(73,143,109,0.09) 0%, rgba(73,143,109,0.03) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            {/* 3D miniature */}
            <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-2xl opacity-60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/rendu3D/rendu3d-cube-vert-minimaliste.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <h2
              className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#FFFFFF" }}
            >
              Ne manquez rien
            </h2>
            <p
              className="mx-auto mt-4 max-w-md text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              Recevez nos meilleurs articles directement dans votre boîte mail.
              Pas de spam — juste du contenu utile, une fois par semaine.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
              >
                S&apos;abonner au blog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
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
