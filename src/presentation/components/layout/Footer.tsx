"use client";

import { motion } from "framer-motion";
import { Facebook, Globe, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import { FOOTER_NAVIGATION } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Social links config
// ---------------------------------------------------------------------------

const SOCIAL_LINKS = [
  { label: "Facebook", href: SITE_CONFIG.social.facebook, icon: Facebook },
  { label: "Instagram", href: SITE_CONFIG.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: SITE_CONFIG.social.linkedin, icon: Linkedin },
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
              <Link
                href="/"
                className="inline-flex items-center gap-0.5 font-heading text-xl font-bold tracking-tight text-white"
              >
                LANNKIN
                <span className="text-accent">.</span>
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
