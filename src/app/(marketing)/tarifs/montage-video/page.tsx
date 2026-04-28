import type { Metadata } from "next";

import { PRICING_MONTAGE_VIDEO, VIDEO_OPTIONS } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Montage Vidéo | Lannkin",
  description:
    "Montage vidéo professionnel dès 119$/vidéo. YouTube, TikTok, Shorts, Reels, corporate. Script, voix-off, effets inclus. Packs et abonnements illimités disponibles.",
};

export default function TarifsMontageVideoPage() {
  return (
    <>
      <PricingPageContent
        title="Tarifs Montage Vidéo"
        subtitle="Du montage YouTube au contenu TikTok viral, choisissez la formule adaptée à vos besoins. Script, voix-off et effets visuels inclus dans chaque vidéo."
        plans={PRICING_MONTAGE_VIDEO}
        serviceHref="/services/montage-video/"
        parallaxImage="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp"
      />

      {/* Options supplémentaires */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#1A1A1A]">
          Options supplémentaires
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_OPTIONS.map((option) => (
            <div
              key={option.name}
              className="flex items-center justify-between rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] px-4 py-3"
            >
              <span className="text-sm text-[#374151]">{option.name}</span>
              <span className="whitespace-nowrap font-semibold text-accent">
                {option.price} ${option.unit ? ` ${option.unit}` : ""}
              </span>
            </div>
          ))}
        </div>

        {/* YouTube channel promo */}
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#FF0000]/20 bg-[#FF0000]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">📺 Inspirez-vous sur notre chaîne YouTube</h3>
            <p className="mt-1 text-sm text-[#374151]">
              Des exemples de montages, tutoriels et coulisses de production sur{" "}
              <strong>@AlbertLanneAds</strong>.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@AlbertLanneAds"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-[#FF0000] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Voir la chaîne →
          </a>
        </div>

        {/* Instagram + TikTok */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/lannkin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#E1306C]/20 bg-[#E1306C]/5 px-4 py-2 text-sm font-semibold text-[#E1306C] transition-opacity hover:opacity-80"
          >
            📷 @lannkin sur Instagram
          </a>
          <a
            href="https://tiktok.com/@lannkin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#1A1A1A]/10 bg-surface-light/5 px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition-opacity hover:opacity-80"
          >
            🎵 @lannkin sur TikTok
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h3 className="mb-3 text-lg font-semibold text-[#1A1A1A]">
            Comment ça marche ?
          </h3>
          <ol className="space-y-2 text-sm text-[#374151]">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-[#FFFFFF]">1</span>
              <span>Contactez-nous pour discuter de vos idées vidéo et définir vos besoins.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-[#FFFFFF]">2</span>
              <span>Nous établissons un devis personnalisé puis la facturation.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-[#FFFFFF]">3</span>
              <span>Partagez vos vidéos brutes ou données via un drive. Notre équipe s'occupe du reste.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-[#FFFFFF]">4</span>
              <span>Nous réalisons un script et une proposition vidéo complète (2 révisions incluses).</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-[#FFFFFF]">5</span>
              <span>Après votre feedback, nous finalisons et livrons votre vidéo prête à publier.</span>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
