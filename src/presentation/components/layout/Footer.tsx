"use client";

import { motion } from "framer-motion";
import { Facebook, Globe, Instagram, Linkedin, Youtube } from "lucide-react";
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

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06]">
      {/* Glass background */}
      <div className="glass rounded-t-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top section: Logo + columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-12 pb-12 pt-16 lg:grid-cols-6"
          >
            {/* Brand column */}
            <motion.div variants={columnVariants} className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-lannkin-2026.svg"
                  alt="LANNKIN"
                  className="h-7 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                Agence de marketing digital et de
                d&eacute;veloppement web au Qu&eacute;bec. Nous
                accompagnons les entreprises dans leur croissance
                en ligne depuis {SITE_CONFIG.founded}.
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
                      "bg-white/[0.05] text-muted transition-all duration-200",
                      "hover:bg-accent/10 hover:text-accent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Google reviews badge */}
              <div className="mt-5">
                <GoogleMapsWidget />
              </div>
            </motion.div>

            {/* Navigation columns */}
            {FOOTER_SECTIONS.map((section) => (
              <motion.div key={section.title} variants={columnVariants}>
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 text-xs text-muted sm:flex-row">
            <p>
              &copy; {SITE_CONFIG.founded}&ndash;2026{" "}
              {SITE_CONFIG.legalName} &middot; NEQ {SITE_CONFIG.neq} &middot;
              Tous droits r&eacute;serv&eacute;s
            </p>
            <p>
              <Link
                href="/politique-de-confidentialite/"
                className="transition-colors hover:text-white"
              >
                Confidentialit&eacute;
              </Link>
              <span className="mx-2">&middot;</span>
              <Link
                href="/conditions-generales/"
                className="transition-colors hover:text-white"
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
