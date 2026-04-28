import { Star } from "lucide-react";
import Link from "next/link";

import { SITE_CONFIG } from "@/lib/constants";

interface GoogleMapsWidgetProps {
  variant?: "dark" | "light";
}

export function GoogleMapsWidget({ variant = "light" }: GoogleMapsWidgetProps) {
  const isDark = variant === "dark";
  const rating = SITE_CONFIG.stats.googleRating.toFixed(1).replace(".", ",");

  return (
    <Link
      href="https://www.google.com/maps/search/?api=1&query=7+Rue+Vulpian+75013+Paris"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 sm:flex-nowrap"
      style={{
        border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.10)",
        backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.03)",
      }}
      aria-label={`Voir Lannkin sur Google Maps — ${rating} étoiles (${SITE_CONFIG.stats.googleReviews} avis)`}
    >
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: isDark ? "#FFFFFF" : "#F3F4F6" }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
      </div>

      <div className="min-w-0 flex flex-col">
        <span className="text-xs font-semibold" style={{ color: isDark ? "#FFFFFF" : "#1A1A1A" }}>
          Agence web Lannkin
        </span>
        <div className="flex min-w-0 flex-wrap items-center gap-1">
          <div className="flex" aria-label={`${rating} étoiles sur 5`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-3 w-3 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
          <span className="min-w-0 text-xs" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.60)" }}>
            {rating}{" "}
            <span style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.40)" }}>
              ({SITE_CONFIG.stats.googleReviews} avis)
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
