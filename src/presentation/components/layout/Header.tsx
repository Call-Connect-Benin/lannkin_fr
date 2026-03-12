"use client";

import { useCallback, useEffect, useRef, useState } from "react";


import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isMegaMenu,
  MAIN_NAVIGATION,
  MOBILE_NAVIGATION,
  type MegaMenuItem,
  type NavigationItem,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// LogoGif — Plays the GIF once, then freezes on the last frame via canvas
// ---------------------------------------------------------------------------

function LogoImg({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-lannkin-2026.svg"
      alt="LANNKIN"
      className={cn("h-8 w-auto", className)}
    />
  );
}

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const megaMenuVariants = {
  hidden: { opacity: 0, y: 8, scaleY: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 8,
    scaleY: 0.96,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, duration: 0.25, ease: "easeOut" as const },
  }),
};

// ---------------------------------------------------------------------------
// MegaMenuPanel
// ---------------------------------------------------------------------------

interface MegaMenuPanelProps {
  item: MegaMenuItem;
}

function MegaMenuPanel({ item }: MegaMenuPanelProps) {
  return (
    <motion.div
      variants={megaMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed left-1/2 top-16 z-50 w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 pt-2"
      style={{ originY: 0 }}
    >
      <div className="rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] p-6 shadow-2xl">
        {/* 3-column grid */}
        <div className="grid grid-cols-3 gap-8">
          {item.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.items.map((navItem) => (
                  <li key={navItem.href}>
                    <Link
                      href={navItem.href}
                      className="group/link block rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-[#F0F0EC]"
                    >
                      <span className="block text-sm font-medium text-[#1A1A1A] transition-colors group-hover/link:text-accent">
                        {navItem.label}
                      </span>
                      {navItem.description && (
                        <span className="block text-xs text-[#6B7280]">
                          {navItem.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        {item.cta && (
          <div className="mt-6 flex items-center justify-between rounded-lg bg-[#F0F0EC] px-5 py-3">
            <p className="text-sm text-[#6B7280]">{item.cta.description}</p>
            <Link
              href={item.cta.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:brightness-110"
            >
              {item.cta.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// DesktopNavItem
// ---------------------------------------------------------------------------

interface DesktopNavItemProps {
  item: NavigationItem;
  activeMenu: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
  pathname: string;
}

function DesktopNavItem({
  item,
  activeMenu,
  onEnter,
  onLeave,
  pathname,
}: DesktopNavItemProps) {
  const isActive = pathname.startsWith(item.href);
  const isOpen = activeMenu === item.label;

  if (isMegaMenu(item)) {
    return (
      <div
        className="relative"
        onMouseEnter={() => onEnter(item.label)}
        onMouseLeave={onLeave}
      >
        <Link
          href={item.href}
          className={cn(
            "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200",
            isActive ? "text-accent" : "text-white/80 hover:text-white"
          )}
        >
          {item.label}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </Link>
        <AnimatePresence>
          {isOpen && <MegaMenuPanel item={item} />}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors duration-200",
        isActive ? "text-accent" : "text-white/80 hover:text-white"
      )}
    >
      {item.label}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll for glass effect
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMenuEnter = useCallback((label: string) => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    setActiveMenu(label);
  }, []);

  const handleMenuLeave = useCallback(() => {
    leaveTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoImg className="h-8" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {MAIN_NAVIGATION.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              activeMenu={activeMenu}
              onEnter={handleMenuEnter}
              onLeave={handleMenuLeave}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/devis-gratuit/"
            className="hidden rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110 lg:inline-flex"
          >
            Devis gratuit
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 z-40 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.nav
              key="mobile-panel"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 top-16 z-50 flex w-72 flex-col bg-surface/95 backdrop-blur-xl lg:hidden"
              aria-label="Menu mobile"
            >
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {MOBILE_NAVIGATION.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-150",
                        pathname.startsWith(item.href)
                          ? "bg-accent/10 text-accent"
                          : "text-white hover:bg-white/[0.05]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-white/[0.08] p-4">
                <Link
                  href="/devis-gratuit/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
                >
                  Devis gratuit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
