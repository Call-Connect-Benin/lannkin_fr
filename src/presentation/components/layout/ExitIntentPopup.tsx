"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Phone, Star, X } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let storage: Storage | null = null;
    try { storage = window.localStorage; } catch { /* private mode / blocked */ }

    if (storage?.getItem("exitPopupShown")) return;

    const show = () => {
      if (storage?.getItem("exitPopupShown")) return;
      setVisible(true);
      try { storage?.setItem("exitPopupShown", "1"); } catch { /* ignore */ }
    };

    let ready = false;
    // Wait 3s before activating exit-intent (avoids accidental trigger on load)
    const warmup = setTimeout(() => {
      ready = true;
    }, 3000);

    // Desktop: mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (ready && e.clientY <= 0) show();
    };

    // Mobile: user switches away from the tab/app
    const handleVisibility = () => {
      if (ready && document.visibilityState === "hidden") show();
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearTimeout(warmup);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        >
          <motion.div
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.06] bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent stripe top */}
            <div className="h-1 w-full bg-accent" />

            <div className="p-5 sm:p-8">
              <button
                onClick={() => setVisible(false)}
                className="absolute right-4 top-4 rounded-lg p-1 text-muted transition-colors hover:text-white"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                {/* Stars */}
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <h3 className="font-heading text-2xl font-bold text-white">
                  Avant de partir…
                </h3>
                <p className="mt-2 text-base text-muted">
                  Vous avez des questions ? Notre équipe répond{" "}
                  <strong className="text-white">en moins de 2 minutes.</strong>
                </p>

                {/* Phone CTA */}
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s|\(|\)/g, "")}`}
                  className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 font-bold text-on-accent shadow-[0_0_24px_rgba(73,143,109,0.2)] transition-all hover:brightness-110"
                >
                  <Phone className="h-5 w-5" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>

                {/* Secondary CTA */}
                <a
                  href="/devis-gratuit/"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:border-accent/30 hover:text-accent"
                >
                  <MessageSquare className="h-4 w-4" />
                  Envoyer un message
                </a>

                {/* Trust row */}
                <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted">
                  <span>★ 4.954/5 Google</span>
                  <span>·</span>
                  <span>Certifié Google Partner</span>
                  <span>·</span>
                  <span>+10 ans d'expérience</span>
                </div>

                <button
                  onClick={() => setVisible(false)}
                  className="mt-4 text-xs text-muted/50 underline-offset-2 hover:text-muted"
                >
                  Non merci, je continue de naviguer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
