import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { MDXRemote } from "next-mdx-remote/rsc";

import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { Container } from "@/presentation/components/ui/Container";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Lannkin`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-white/[0.06] py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} de lecture</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-6 text-xl leading-relaxed text-muted">{post.excerpt}</p>
            )}
          </div>
        </Container>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="border-b border-white/[0.06]">
          <Container>
            <div className="mx-auto max-w-3xl py-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-64 w-full rounded-2xl object-cover sm:h-80"
              />
            </div>
          </Container>
        </div>
      )}

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:text-white prose-h3:text-xl prose-h3:text-white/90 prose-p:text-muted prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface-light prose-pre:border prose-pre:border-white/[0.06] prose-blockquote:border-l-accent prose-blockquote:text-muted prose-ul:text-muted prose-ol:text-muted prose-li:marker:text-accent prose-table:text-sm prose-th:text-white prose-td:text-muted prose-hr:border-white/10">
              <MDXRemote source={post.content} />
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-white/[0.06] pt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[0.08] px-3 py-1 text-xs text-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
