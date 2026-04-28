"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  isMegaMenu,
  MAIN_NAVIGATION,
  type MegaMenuItem,
  type NavigationItem,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// LogoGif — Plays the GIF once, then freezes on the last frame via canvas
// ---------------------------------------------------------------------------

function LogoImg({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-lannkin-2026.svg"
      alt="LANNKIN"
      width={145}
      height={32}
      priority
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

const mobileSubmenuVariants = {
  hidden: { x: 24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    x: -24,
    opacity: 0,
    transition: { duration: 0.16, ease: "easeInOut" as const },
  },
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
      className="fixed left-1/2 top-[72px] z-50 w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 pt-2"
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

interface MobileSubmenuPanelProps {
  item: MegaMenuItem;
  onBack: () => void;
  onNavigate: () => void;
}

function MobileSubmenuPanel({
  item,
  onBack,
  onNavigate,
}: MobileSubmenuPanelProps) {
  return (
    <motion.div
      key={item.label}
      variants={mobileSubmenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex h-full flex-col bg-[rgba(255,255,255,0.99)]"
    >
      <div
        className="flex items-center gap-3 border-b px-4 py-4"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1A1A1A]"
          aria-label={`Retour vers le menu principal depuis ${item.label}`}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#498f6d]">
            {item.label}
          </p>
          <p className="truncate text-sm text-[#6B7280]">
            Choisissez une sous-page
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-5">
          {item.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 px-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-[#498f6d]">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((navItem) => (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    onClick={onNavigate}
                    className="block rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-[#F0F0EC]"
                  >
                    <span className="block text-sm font-medium text-[#1A1A1A]">
                      {navItem.label}
                    </span>
                    {navItem.description && (
                      <span className="mt-1 block text-xs text-[#6B7280]">
                        {navItem.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {item.cta && (
        <div
          className="border-t p-4"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          <Link
            href={item.cta.href}
            onClick={onNavigate}
            className="block rounded-xl bg-[#F0F0EC] px-4 py-3"
          >
            <span className="block text-sm font-semibold text-[#1A1A1A]">
              {item.cta.label}
            </span>
            <span className="mt-1 block text-xs text-[#6B7280]">
              {item.cta.description}
            </span>
          </Link>
        </div>
      )}
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
          className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200"
          aria-expanded={isOpen}
          style={{ color: isActive ? "#498f6d" : "#1A1A1A" }}
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
      {...("target" in item && item.target ? { target: item.target, rel: "noopener noreferrer" } : {})}
      className="px-3 py-2 text-sm font-medium transition-colors duration-200"
      aria-current={isActive ? "page" : undefined}
      style={{ color: isActive ? "#498f6d" : "#1A1A1A" }}
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
  const [mobileSubmenu, setMobileSubmenu] = useState<MegaMenuItem | null>(null);
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

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
    setActiveMenu(null);
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
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.7)",
        backdropFilter: scrolled ? "blur(24px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(24px)" : undefined,
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
            className="hidden rounded-full px-5 py-2 text-sm font-semibold shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110 lg:inline-flex"
            style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
            aria-label="Demander un devis gratuit"
          >
            Devis gratuit
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden"
            style={{ color: "#1A1A1A" }}
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
              className="fixed inset-0 top-[72px] z-40 backdrop-blur-sm lg:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.nav
              key="mobile-panel"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 top-[72px] z-50 flex w-[85vw] max-w-72 flex-col backdrop-blur-xl lg:hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.97)" }}
              aria-label="Menu mobile"
            >
              <div className="relative flex flex-1 flex-col overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {mobileSubmenu ? (
                    <MobileSubmenuPanel
                      key={mobileSubmenu.label}
                      item={mobileSubmenu}
                      onBack={() => setMobileSubmenu(null)}
                      onNavigate={() => {
                        setMobileSubmenu(null);
                        setMobileOpen(false);
                      }}
                    />
                  ) : (
                    <motion.div
                      key="mobile-root"
                      variants={mobileSubmenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
                    >
                      {MAIN_NAVIGATION.map((item, i) => (
                        <motion.div
                          key={item.label}
                          custom={i}
                          variants={mobileItemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {isMegaMenu(item) ? (
                            <button
                              type="button"
                              onClick={() => setMobileSubmenu(item)}
                              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-colors duration-150"
                              style={
                                pathname.startsWith(item.href)
                                  ? { backgroundColor: "rgba(73,143,109,0.10)", color: "#498f6d" }
                                  : { color: "#1A1A1A" }
                              }
                            >
                              <span>{item.label}</span>
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              {...("target" in item && item.target ? { target: item.target, rel: "noopener noreferrer" } : {})}
                              className="block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-150"
                              style={
                                pathname.startsWith(item.href)
                                  ? { backgroundColor: "rgba(73,143,109,0.10)", color: "#498f6d" }
                                  : { color: "#1A1A1A" }
                              }
                            >
                              {item.label}
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
