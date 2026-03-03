"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { getRelatedBlogCategories } from "@/lib/internal-links";

interface RelatedBlogPostsProps {
  serviceSlug: string;
  className?: string;
}

export function RelatedBlogPosts({
  serviceSlug,
  className = "",
}: RelatedBlogPostsProps) {
  const categories = getRelatedBlogCategories(serviceSlug);

  return (
    <section className={`py-12 ${className}`}>
      <h2 className="mb-6 font-heading text-2xl font-bold">
        Articles de blog associés
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog/${category}/`}
            className="glass group rounded-md p-6 transition-all hover:border-accent/20"
          >
            <span className="flex items-center justify-between">
              <span className="font-heading font-semibold capitalize">
                {category.replace(/-/g, " ")}
              </span>
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-2 block text-sm text-muted">
              Voir les articles →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
