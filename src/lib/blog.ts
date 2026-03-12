import fs from "fs";
import path from "path";

import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  readTime: string;
  coverImage?: string;
  content: string;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = ensureBlogDir();

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        category: data.category ?? "Général",
        tags: data.tags ?? [],
        author: data.author ?? "Équipe Lannkin",
        readTime: data.readTime ?? "5 min",
        coverImage: data.coverImage,
      } satisfies BlogPostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = ensureBlogDir();
  const filename = files.find((f) => f.startsWith(slug + "."));
  if (!filename) return null;

  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    category: data.category ?? "Général",
    tags: data.tags ?? [],
    author: data.author ?? "Équipe Lannkin",
    readTime: data.readTime ?? "5 min",
    coverImage: data.coverImage,
    content,
  };
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
