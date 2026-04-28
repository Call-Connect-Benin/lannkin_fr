import { Facebook, Globe, Instagram, Linkedin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FOOTER_NAVIGATION } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GoogleMapsWidget } from "./GoogleMapsWidget";

// ---------------------------------------------------------------------------
// TikTok SVG icon (not available in lucide-react)
// ---------------------------------------------------------------------------

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Social links config
// ---------------------------------------------------------------------------

const SOCIAL_LINKS = [
  { label: "Facebook", href: SITE_CONFIG.social.facebook, icon: Facebook },
  { label: "Instagram", href: SITE_CONFIG.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: SITE_CONFIG.social.linkedin, icon: Linkedin },
  { label: "YouTube", href: SITE_CONFIG.social.youtube, icon: Youtube },
  { label: "TikTok", href: SITE_CONFIG.social.tiktok, icon: TikTokIcon },
  { label: "Google", href: SITE_CONFIG.social.google, icon: Globe },
] as const;

// ---------------------------------------------------------------------------
// Footer column sections
// ---------------------------------------------------------------------------

const FOOTER_SECTIONS = [
  FOOTER_NAVIGATION.services,
  FOOTER_NAVIGATION.company,
  FOOTER_NAVIGATION.resources,
  FOOTER_NAVIGATION.legal,
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-[#2d2d2d]/8" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="rounded-t-[32px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top section: Logo + columns */}
          <div className="grid gap-12 pb-12 pt-10 lg:grid-cols-6">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/images/logo-lannkin-2026.svg"
                  alt="LANNKIN"
                  width={127}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Paris", "Ile-de-France", "France"].map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-[#2d2d2d]/8 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#498f6d]"
                  >
                    {market}
                  </span>
                ))}
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#2d2d2d]/75">
                Agence de marketing digital et de d&eacute;veloppement web
                pour les entreprises en France. Sites, acquisition,
                R&amp;D et croissance mesurable depuis {SITE_CONFIG.founded}.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-lg",
                      "bg-[#2d2d2d]/[0.05] text-[#2d2d2d]/70 transition-all duration-200",
                      "hover:bg-accent/10 hover:text-accent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Phone */}
              <div className="mt-5">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[\s()]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-[#2d2d2d]/75 transition-colors hover:text-accent"
                  aria-label={`Appeler ${SITE_CONFIG.phone}`}
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Google reviews badge */}
              <div className="mt-3">
                <GoogleMapsWidget />
              </div>
            </div>

            {/* Navigation columns */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#2d2d2d]/75 transition-colors duration-150 hover:text-[#2d2d2d]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-[#2d2d2d]/70 sm:flex-row">
            <p>
              &copy; {SITE_CONFIG.founded}&ndash;2026{" "}
              {SITE_CONFIG.legalName} &middot; Tous droits r&eacute;serv&eacute;s
            </p>
            <p>
              <Link
                href="/politique-de-confidentialite/"
                className="transition-colors hover:text-[#2d2d2d]"
              >
                Confidentialit&eacute;
              </Link>
              <span className="mx-2">&middot;</span>
              <Link
                href="/conditions-generales/"
                className="transition-colors hover:text-[#2d2d2d]"
              >
                Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
