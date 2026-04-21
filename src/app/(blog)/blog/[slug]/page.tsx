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
    title: `${post.title} | Blog Ekolink`,
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
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* Hero */}
      <section className="py-16" style={{ borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} de lecture</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-6 text-xl leading-relaxed text-[#6B7280]">{post.excerpt}</p>
            )}
          </div>
        </Container>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div style={{ borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
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
            <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:text-[#2d2d2d] prose-h3:text-xl prose-h3:text-[#2d2d2d] prose-p:text-[#5f6b63] prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-[#2d2d2d] prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#ede9e1] prose-pre:border prose-pre:border-[#2d2d2d]/10 prose-blockquote:border-l-accent prose-blockquote:text-[#6B7280] prose-ul:text-[#5f6b63] prose-ol:text-[#5f6b63] prose-li:marker:text-accent prose-table:text-sm prose-th:text-[#2d2d2d] prose-td:text-[#5f6b63] prose-hr:border-[#2d2d2d]/10">
              <MDXRemote source={post.content} />
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 pt-8" style={{ borderTop: "1px solid rgba(45,45,45,0.08)" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border px-3 py-1 text-xs text-[#6B7280]"
                    style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.6)" }}
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
