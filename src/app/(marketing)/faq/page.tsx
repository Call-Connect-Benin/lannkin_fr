"use client";

import { ChevronDown } from "lucide-react";

function YoutubeSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
import { useState } from "react";

import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

const FAQ_ITEMS = [
  // --- Sites web en abonnement ---
  {
    category: "Sites web en abonnement",
    q: "C'est quoi un site web en abonnement ?",
    a: "Au lieu de payer un gros montant en une seule fois (souvent 3 000 $ à 10 000 $), vous payez un abonnement mensuel abordable. Ekolink conçoit, héberge et maintient votre site web. Tant que vous êtes abonné, vous avez un site professionnel, rapide et à jour. Pas de surprise, pas d'investissement massif au départ.",
  },
  {
    category: "Sites web en abonnement",
    q: "Qu'est-ce qui est inclus dans l'abonnement ?",
    a: "L'abonnement inclut : la conception du site, l'hébergement haute performance, le nom de domaine, les mises à jour de sécurité, le support technique, et les modifications de contenu de base. Selon le forfait, cela peut aussi inclure le SEO de base, un formulaire de contact, et l'intégration Google Maps.",
  },
  {
    category: "Sites web en abonnement",
    q: "Je peux annuler mon abonnement à n'importe quel moment ?",
    a: "Oui. Il n'y a aucun contrat à long terme imposé. Si vous résiliez, votre site est retiré de nos serveurs. Nous recommandons toutefois de prévoir au minimum 12 mois pour bénéficier pleinement du retour sur investissement SEO et marketing.",
  },
  {
    category: "Sites web en abonnement",
    q: "Est-ce que je possède le site si je m'abonne ?",
    a: "Dans un modèle d'abonnement, Ekolink reste propriétaire du code et de l'hébergement tant que le contrat est actif. Si vous souhaitez posséder entièrement votre site, nous offrons aussi la création de site à l'achat unique. Contactez-nous pour explorer les deux options.",
  },
  {
    category: "Sites web en abonnement",
    q: "Combien de temps pour avoir mon site en ligne ?",
    a: "La plupart de nos sites sont livrés en 7 à 14 jours ouvrables après réception de vos informations (textes, logo, photos). Pour des projets plus complexes avec des fonctionnalités sur mesure, prévoir 3 à 6 semaines.",
  },
  {
    category: "Sites web en abonnement",
    q: "Est-ce que vous faites des modifications après la livraison ?",
    a: "Oui. Les abonnés peuvent demander des modifications de contenu (textes, images, prix) incluses dans le forfait. Les modifications structurelles importantes (nouvelles pages, nouvelles fonctionnalités) peuvent être facturées séparément selon l'ampleur.",
  },
  // --- Tarifs & paiement ---
  {
    category: "Tarifs & paiement",
    q: "Quels sont vos forfaits de site web en abonnement ?",
    a: "Nous offrons plusieurs niveaux selon vos besoins : site one-page pour les solopreneurs, site multipages pour les PME, et site e-commerce pour la vente en ligne. Chaque forfait inclut hébergement, domaine, SSL et support. Consultez notre page /tarifs/ pour les prix détaillés.",
  },
  {
    category: "Tarifs & paiement",
    q: "Y a-t-il des frais cachés ?",
    a: "Non. Le prix affiché est le prix tout inclus : hébergement, domaine (.com ou .ca), certificat SSL, mises à jour et support. La seule exception sont les licences de photos ou illustrations premium si vous en avez besoin — nous vous informons avant tout achat.",
  },
  {
    category: "Tarifs & paiement",
    q: "Acceptez-vous les cartes de crédit et Interac ?",
    a: "Oui. Nous acceptons les paiements par carte de crédit (Visa, Mastercard), virement Interac et chèque d'entreprise. La facturation est mensuelle ou annuelle (avec rabais sur l'annuel).",
  },
  // --- Services marketing ---
  {
    category: "Services marketing",
    q: "Faites-vous aussi la publicité (Google Ads, Facebook Ads) ?",
    a: "Absolument. En plus des sites web, Ekolink est une agence Google Partner certifiée. Nous gérons des campagnes Google Ads, Facebook Ads, Instagram, TikTok et LinkedIn. Nous pouvons prendre en charge l'ensemble de votre présence numérique.",
  },
  {
    category: "Services marketing",
    q: "Quel budget publicitaire minimum recommandez-vous ?",
    a: "Pour Google Ads et Facebook Ads, nous recommandons un budget minimum de 500 €/mois en publicité (en plus des frais de gestion). En dessous de ce seuil, les données sont insuffisantes pour optimiser correctement les campagnes. Pour certains marchés locaux de niche, 300 €/mois peut suffire.",
  },
  {
    category: "Services marketing",
    q: "Travaillez-vous avec des entreprises hors de Paris et Paris ?",
    a: "Oui, nous travaillons avec des entreprises partout en France, au Canada et même à l'international. Toutes nos réunions peuvent se faire en visioconférence. Nos clients au Maroc, en France et en Europe témoignent de notre flexibilité géographique.",
  },
  {
    category: "Services marketing",
    q: "Mon site sera-t-il bien référencé sur Google (SEO) ?",
    a: "Chaque site livré par Ekolink inclut les bases du SEO technique : balises méta optimisées, structure URL propre, vitesse de chargement, responsive mobile et schema markup. Pour un SEO avancé (rédaction de contenu, netlinking, stratégie de mots-clés), nous proposons des forfaits SEO dédiés.",
  },
  // --- Technique ---
  {
    category: "Technique",
    q: "Sur quelle plateforme sont construits vos sites ?",
    a: "Nos sites sont construits sur Next.js (React) pour les performances maximales et le SEO, ou sur WordPress/Elementor selon les besoins. Nous choisissons la technologie adaptée à votre projet — pas de solution unique imposée.",
  },
  {
    category: "Technique",
    q: "Mon site sera-t-il responsive (mobile) ?",
    a: "Oui, tous nos sites sont 100 % responsive. Avec plus de 65 % du trafic web provenant des mobiles, c'est une priorité absolue. Nous testons chaque site sur mobile, tablette et desktop avant la livraison.",
  },
  {
    category: "Technique",
    q: "Qu'est-ce qui se passe si mon site tombe en panne ?",
    a: "Nos sites sont hébergés sur une infrastructure cloud haute disponibilité avec un SLA de 99,9 % d'uptime. En cas de problème, notre équipe technique est alertée automatiquement et intervient rapidement. Les abonnés ont accès au support par courriel et par téléphone.",
  },
];

const CATEGORIES = Array.from(new Set(FAQ_ITEMS.map((f) => f.category)));

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="last:border-0" style={{ borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-base font-semibold text-[#2d2d2d] sm:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="leading-relaxed text-[#6B7280]">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-16 lg:py-20">
        <ParallaxBg
          src="/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp"
          overlay={0.62}
        />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                {FAQ_ITEMS.length} questions répondues
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
                Questions{" "}
                <span className="text-accent">fréquentes</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                Tout ce que vous devez savoir sur nos sites web en abonnement,
                nos services marketing et notre façon de travailler.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* FAQ by category */}
      <section className="py-20">
        <Container size="md">
          <div className="space-y-16">
            {CATEGORIES.map((cat) => (
              <div key={cat}>
                <h2 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                  {cat}
                </h2>
                <div className="glass rounded-2xl px-6 sm:px-8">
                  {FAQ_ITEMS.filter((f) => f.category === cat).map((item) => {
                    const globalIndex = FAQ_ITEMS.indexOf(item);
                    return (
                      <AccordionItem
                        key={globalIndex}
                        q={item.q}
                        a={item.a}
                        isOpen={openIndex === globalIndex}
                        onToggle={() =>
                          setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* YouTube CTA */}
      <section className="py-20" style={{ borderTop: "1px solid rgba(45,45,45,0.08)" }}>
        <Container size="md">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
              <YoutubeSvg className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Vous avez encore des questions ?
            </h2>
            <p className="mt-4 text-lg text-[#6B7280]">
              On répond à vos questions en vidéo sur notre chaîne YouTube.
              Tutoriels Google Ads, conseils SEO, stratégies marketing — tout y est.
            </p>
            <a
              href="https://www.youtube.com/@AlbertLanneAds"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-200 hover:bg-red-500"
            >
              <YoutubeSvg className="h-6 w-6" />
              Voir la chaîne YouTube
            </a>
            <p className="mt-4 text-sm text-[#6B7280]">
              Ou{" "}
              <a
                href="/contact/"
                className="text-accent underline underline-offset-2 hover:text-accent/80"
              >
                contactez-nous directement
              </a>{" "}
              — on répond en moins de 24h.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
