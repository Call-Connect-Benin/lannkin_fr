"use client";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { getBreadcrumbs } from "@/lib/internal-links";

interface BreadcrumbProps {
  currentPath: string;
}

export function Breadcrumb({ currentPath }: BreadcrumbProps) {
  const crumbs = getBreadcrumbs(currentPath);

  return (
    <nav aria-label="Fil d'Ariane" className="py-4">
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-muted"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {crumbs.map((crumb, index) => (
          <li
            key={crumb.href}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight className="h-3 w-3 text-muted" aria-hidden />
            )}
            {index === crumbs.length - 1 ? (
              <span className="text-white" itemProp="name">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="transition-colors hover:text-accent"
                itemProp="item"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
