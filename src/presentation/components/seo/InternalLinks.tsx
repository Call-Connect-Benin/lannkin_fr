"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { type InternalLink, getInternalLinks } from "@/lib/internal-links";

interface InternalLinksProps {
  currentPath: string;
  title?: string;
  maxLinks?: number;
  className?: string;
}

export function InternalLinks({
  currentPath,
  title = "Découvrez aussi",
  maxLinks = 12,
  className = "",
}: InternalLinksProps) {
  const links = getInternalLinks(currentPath, { maxLinks });

  if (links.length === 0) return null;

  const grouped = groupByType(links);

  return (
    <section className={`py-12 ${className}`}>
      <h2 className="mb-8 font-heading text-2xl font-bold">{title}</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {grouped.map(([type, typeLinks]) => (
          <div key={type}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              {getTypeLabel(type)}
            </h3>
            <ul className="space-y-2">
              {typeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors hover:text-accent"
                  >
                    <ArrowRight className="h-3 w-3 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function groupByType(links: InternalLink[]): [string, InternalLink[]][] {
  const groups = new Map<string, InternalLink[]>();

  for (const link of links) {
    const existing = groups.get(link.type) ?? [];
    existing.push(link);
    groups.set(link.type, existing);
  }

  return Array.from(groups.entries());
}

function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    service: "Services complémentaires",
    "sub-service": "Sous-services",
    parent: "Navigation",
    pricing: "Tarifs",
    sector: "Secteurs d'activité",
    zone: "Zones desservies",
    blog: "Articles associés",
    cta: "Passez à l'action",
    "cross-cocon": "Explorez aussi",
  };
  return labels[type] ?? type;
}
