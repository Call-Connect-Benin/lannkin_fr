import type { Metadata } from "next";

import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BLOG_CATEGORIES } from "@/data/blog-categories";
import { formatDate, getAllPosts } from "@/lib/blog";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog Marketing Digital France | Lannkin",
  description:
    "Conseils SEO, tendances web et guides marketing digital en France. Articles par les experts Lannkin sur le SEO, Google Ads, IA et developpement web.",
};

const BLOG_STATS = [
  { value: `${BLOG_CATEGORIES.length}`, label: "categories editoriales" },
  { value: "12", label: "lectures recentes affichees" },
  { value: "SEO", label: "pub, web, IA et croissance" },
  { value: "utile", label: "contenu pense pour decider" },
];

export default function BlogPage() {
  const posts = getAllPosts().slice(0, 12);
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);
  const remainingPosts = posts.slice(4);

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <section className="relative overflow-hidden pb-16 pt-10 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[58%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-diamant-cubes-flottants.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.16 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(108deg, #f7f5f0 14%, rgba(247,245,240,0.72) 38%, transparent 64%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #f7f5f0 0%, transparent 18%, transparent 82%, #f7f5f0 100%)",
              }}
            />
          </div>
          <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[rgba(133,53,62,0.08)] blur-[120px]" />
          <div className="absolute right-[18%] top-12 h-[30rem] w-[30rem] rounded-full bg-[rgba(73,143,109,0.08)] blur-[140px]" />
        </div>

        <Container className="relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_24rem]">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{
                  borderColor: "rgba(73,143,109,0.24)",
                  backgroundColor: "rgba(73,143,109,0.08)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono text-xs font-medium text-[#2d2d2d]">
                  Veille, guides et retours terrain pour mieux decider
                </span>
              </div>

              <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-[#2d2d2d] lg:text-[4.2rem] lg:leading-[0.96]">
                Le blog Lannkin, pense comme une
                <span className="text-accent"> revue de travail</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                Pas une simple accumulation d&apos;articles, mais un espace
                editorial pour clarifier le SEO, la pub, le web, l&apos;IA et la
                croissance digitale avec un angle concret et actionnable.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#articles"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Lire les derniers articles
                </a>
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/72 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                >
                  Explorer nos services
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {BLOG_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border p-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.56)",
                      borderColor: "rgba(45,45,45,0.08)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                  >
                    <p className="font-heading text-2xl font-bold text-[#2d2d2d]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/48">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[1.75rem] border p-5 shadow-[0_24px_60px_rgba(45,45,45,0.08)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.94) 100%)",
                borderColor: "rgba(45,45,45,0.08)",
              }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Ligne editoriale
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                Ce que vous trouvez ici
              </h2>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                  <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                    Des articles classes, recents et faciles a scanner.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                  <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                    Un ton plus utile que demonstratif, tourne vers la prise de decision.
                  </p>
                </div>
                <div className="rounded-2xl border border-accent/14 bg-accent/8 p-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                      Le blog sert d&apos;extension editoriale au site, pas de simple zone de contenu en plus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="articles" className="pb-20 pt-2">
        <Container>
          <div className="mb-6 flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Articles recents
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d]">
                Les lectures a commencer maintenant
              </h2>
            </div>
            <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/76 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/44">
                Volume
              </p>
              <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                {posts.length} article{posts.length > 1 ? "s" : ""} visible
                {posts.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {featuredPost ? (
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Link
                href={`/blog/${featuredPost.slug}/`}
                className="group overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:border-accent/26 hover:shadow-[0_24px_60px_rgba(45,45,45,0.10)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={featuredPost.coverImage || "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp"}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/12 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#2d2d2d]">
                      {featuredPost.category}
                    </span>
                    <span className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/76 px-3 py-1 text-[11px] font-medium text-[#2d2d2d]/54">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-3xl font-bold leading-[1.04] text-[#2d2d2d] transition-colors group-hover:text-accent sm:text-4xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#2d2d2d]/64">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[rgba(45,45,45,0.08)] pt-4">
                    <span className="text-sm text-[#2d2d2d]/42">
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d2d2d]">
                      Lire l&apos;article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>

              <div className="space-y-4">
                {secondaryPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="group block overflow-hidden rounded-[1.75rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/24 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-[112px_minmax(0,1fr)] sm:items-center">
                      <div className="overflow-hidden rounded-[1.25rem]">
                        <div className="relative aspect-[1/1]">
                          <Image
                            src={post.coverImage || "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp"}
                            alt={post.title}
                            fill
                            sizes="112px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#ede9e1] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#2d2d2d]/62">
                            {post.category}
                          </span>
                          <span className="text-[11px] text-[#2d2d2d]/34">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="mt-3 font-heading text-xl font-bold leading-[1.08] text-[#2d2d2d] transition-colors group-hover:text-accent">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/56">
                          {post.excerpt}
                        </p>
                        <p className="mt-3 text-xs text-[#2d2d2d]/34">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="rounded-[2rem] border p-12 text-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                borderColor: "rgba(45,45,45,0.08)",
              }}
            >
              <BookOpen className="mx-auto mb-4 h-8 w-8 text-accent/60" />
              <p className="text-sm text-[#2d2d2d]/46">
                Articles bientot disponibles — revenez prochainement.
              </p>
            </div>
          )}

          {remainingPosts.length > 0 ? (
            <div className="mt-12">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-heading text-2xl font-bold text-[#2d2d2d]">
                  Plus d&apos;articles
                </h2>
              </div>

              <div className="space-y-4">
                {remainingPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="group block overflow-hidden rounded-[1.75rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-[0_16px_40px_rgba(45,45,45,0.08)] sm:p-6"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    <div className="grid gap-5 lg:grid-cols-[72px_minmax(0,1fr)_auto] lg:items-center">
                      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[1.2rem] bg-[#ede9e1] font-mono text-sm font-semibold text-[#2d2d2d]/56">
                        0{index + 5}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#2d2d2d]">
                            {post.category}
                          </span>
                          <span className="text-[11px] text-[#2d2d2d]/34">
                            {post.readTime}
                          </span>
                          <span className="text-[11px] text-[#2d2d2d]/34">
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <h3 className="mt-3 font-heading text-2xl font-bold leading-[1.06] text-[#2d2d2d] transition-colors group-hover:text-accent">
                          {post.title}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#2d2d2d]/58 sm:text-base">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                        <span className="text-sm font-medium text-[#2d2d2d]/46">
                          Ouvrir l&apos;article
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="relative overflow-hidden pb-20">
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
              style={{ background: "linear-gradient(to right, transparent, #f7f5f0)" }}
            />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="mb-6 flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Explorer par categorie
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d]">
                Des portes d&apos;entree plus claires
              </h2>
            </div>
            <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/76 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/44">
                Navigation
              </p>
              <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                {BLOG_CATEGORIES.length} themes disponibles
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}/`}
                className="group overflow-hidden rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/22 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(247,245,240,0.98) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                }}
              >
                <div className="relative aspect-[2.2/1] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/26 via-black/8 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold text-[#2d2d2d] transition-colors group-hover:text-accent">
                      {category.name}
                    </h3>
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/56">
                    {category.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d2d2d]">
                    Voir les articles
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div
            className="mx-auto max-w-4xl rounded-[2rem] border p-8 text-center sm:p-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(73,143,109,0.12) 0%, rgba(73,143,109,0.04) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-[1.5rem] opacity-80">
              <div className="relative h-full w-full">
                <Image
                  src="/images/rendu3D/rendu3d-cube-vert-minimaliste.webp"
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Ne manquez pas les prochaines lectures utiles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#2d2d2d]/58">
              Recevez nos meilleurs contenus directement dans votre boite mail.
              Pas de bruit, juste de quoi vous aider a mieux comprendre et mieux choisir.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              >
                S&apos;abonner au blog
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/72 px-8 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
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
