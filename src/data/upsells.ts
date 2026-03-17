import type { UpsellOffer } from "@/domain/entities/upsell";

// ============================================================
// UPSELLS — Services complémentaires proposés après paiement
// Chaque catégorie de service achetée propose 2-3 upsells
// d'autres catégories pour maximiser la valeur client.
//
// IMPORTANT : Remplacer les stripePriceId "price_TODO_*" par
// les vrais Price IDs créés dans le dashboard Stripe.
// ============================================================

const UPSELL_MAP: Record<string, UpsellOffer[]> = {
  "conception-web": [
    {
      id: "upsell-seo-backlinks",
      name: "SEO Backlinks",
      description:
        "Boostez le référencement de votre nouveau site avec 10 backlinks qualité/mois.",
      price: 400,
      priceUnit: "month",
      stripePriceId: "price_TODO_seo_backlinks",
      icon: "Search",
      highlight: "Recommandé",
    },
    {
      id: "upsell-gmb-creation",
      name: "Pack Google My Business",
      description:
        "Créez et optimisez votre fiche Google pour être trouvé localement.",
      price: 75,
      priceUnit: "month",
      stripePriceId: "price_TODO_gmb_creation",
      icon: "MapPin",
    },
    {
      id: "upsell-logo-essentiel",
      name: "Pack Logo Essentiel",
      description:
        "3 propositions de logos uniques pour votre nouveau site.",
      price: 500,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_graph_logo_essentiel",
      icon: "Palette",
    },
  ],

  "vibe-coding": [
    {
      id: "upsell-seo-backlinks",
      name: "SEO Backlinks",
      description:
        "Boostez le référencement de votre application avec 10 backlinks qualité/mois.",
      price: 400,
      priceUnit: "month",
      stripePriceId: "price_TODO_seo_backlinks",
      icon: "Search",
      highlight: "Recommandé",
    },
    {
      id: "upsell-gmb-base",
      name: "Google My Business",
      description:
        "Gestion de votre fiche Google pour une visibilité locale.",
      price: 50,
      priceUnit: "month",
      stripePriceId: "price_TODO_gmb_base",
      icon: "MapPin",
    },
    {
      id: "upsell-gads-medium",
      name: "Google Ads Medium",
      description:
        "Attirez du trafic qualifié vers votre nouvelle application.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_gads_medium",
      icon: "Target",
    },
  ],

  odoo: [
    {
      id: "upsell-vibe-formation",
      name: "Formation Vibe Coding",
      description:
        "Apprenez à créer vos propres outils IA en complément d'Odoo.",
      price: 500,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_vibe_formation",
      icon: "Sparkles",
    },
    {
      id: "upsell-seo-backlinks",
      name: "SEO Backlinks",
      description: "Améliorez la visibilité de votre site Odoo en ligne.",
      price: 400,
      priceUnit: "month",
      stripePriceId: "price_TODO_seo_backlinks",
      icon: "Search",
      highlight: "Recommandé",
    },
    {
      id: "upsell-gmb-creation",
      name: "Pack Google My Business",
      description:
        "Soyez trouvé localement grâce à votre fiche Google optimisée.",
      price: 75,
      priceUnit: "month",
      stripePriceId: "price_TODO_gmb_creation",
      icon: "MapPin",
    },
  ],

  "google-ads": [
    {
      id: "upsell-seo-audit",
      name: "Audit SEO",
      description:
        "Complétez vos campagnes Google Ads avec un audit SEO complet.",
      price: 300,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_seo_audit",
      icon: "Search",
      highlight: "Recommandé",
    },
    {
      id: "upsell-fb-standard",
      name: "Facebook Ads Standard",
      description:
        "Étendez votre portée avec des campagnes Facebook et Instagram.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_fb_standard",
      icon: "Share2",
    },
    {
      id: "upsell-gmb-creation",
      name: "Pack Google My Business",
      description:
        "Renforcez votre présence locale en complément de Google Ads.",
      price: 75,
      priceUnit: "month",
      stripePriceId: "price_TODO_gmb_creation",
      icon: "MapPin",
    },
  ],

  "facebook-ads": [
    {
      id: "upsell-gads-medium",
      name: "Google Ads Medium",
      description:
        "Captez aussi les intentions de recherche avec Google Ads.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_gads_medium",
      icon: "Target",
      highlight: "Recommandé",
    },
    {
      id: "upsell-sma-tiktok",
      name: "TikTok Ads",
      description:
        "Touchez une audience plus jeune avec des campagnes TikTok.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_sma_tiktok",
      icon: "Video",
    },
    {
      id: "upsell-fb-gestion-page",
      name: "Gestion de page",
      description:
        "Confiez-nous la gestion quotidienne de votre page professionnelle.",
      price: 299,
      priceUnit: "month",
      stripePriceId: "price_TODO_fb_gestion_page",
      icon: "Share2",
    },
  ],

  "native-ads": [
    {
      id: "upsell-gads-medium",
      name: "Google Ads Medium",
      description:
        "Complétez vos campagnes natives avec du Search Google.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_gads_medium",
      icon: "Target",
      highlight: "Recommandé",
    },
    {
      id: "upsell-fb-standard",
      name: "Facebook Ads Standard",
      description:
        "Ajoutez les réseaux sociaux à votre stratégie publicitaire.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_fb_standard",
      icon: "Share2",
    },
    {
      id: "upsell-seo-backlinks",
      name: "SEO Backlinks",
      description: "Renforcez votre autorité de domaine en parallèle.",
      price: 400,
      priceUnit: "month",
      stripePriceId: "price_TODO_seo_backlinks",
      icon: "Search",
    },
  ],

  "reseaux-sociaux": [
    {
      id: "upsell-fb-standard",
      name: "Facebook Ads Standard",
      description:
        "Boostez vos publications avec des campagnes Facebook Ads.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_fb_standard",
      icon: "Target",
      highlight: "Recommandé",
    },
    {
      id: "upsell-logo-premium",
      name: "Pack Logo Premium",
      description:
        "Créez un logo professionnel pour vos réseaux sociaux.",
      price: 700,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_graph_logo_premium",
      icon: "Palette",
    },
    {
      id: "upsell-gmb-creation",
      name: "Pack Google My Business",
      description: "Complétez votre présence digitale avec Google.",
      price: 75,
      priceUnit: "month",
      stripePriceId: "price_TODO_gmb_creation",
      icon: "MapPin",
    },
  ],

  seo: [
    {
      id: "upsell-gads-medium",
      name: "Google Ads Medium",
      description:
        "Obtenez du trafic immédiat pendant que le SEO monte en puissance.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_gads_medium",
      icon: "Target",
      highlight: "Recommandé",
    },
    {
      id: "upsell-gmb-creation",
      name: "Pack Google My Business",
      description:
        "Renforcez votre SEO local avec une fiche Google optimisée.",
      price: 75,
      priceUnit: "month",
      stripePriceId: "price_TODO_gmb_creation",
      icon: "MapPin",
    },
    {
      id: "upsell-web-launch",
      name: "Site Web Launch",
      description:
        "Un site vitrine optimisé SEO pour maximiser votre investissement.",
      price: 99,
      priceUnit: "month",
      stripePriceId: "price_TODO_web_launch",
      icon: "Monitor",
    },
  ],

  "google-my-business": [
    {
      id: "upsell-seo-backlinks",
      name: "SEO Backlinks",
      description:
        "Renforcez votre référencement avec des backlinks de qualité.",
      price: 400,
      priceUnit: "month",
      stripePriceId: "price_TODO_seo_backlinks",
      icon: "Search",
      highlight: "Recommandé",
    },
    {
      id: "upsell-gads-medium",
      name: "Google Ads Medium",
      description:
        "Apparaissez aussi dans les résultats sponsorisés de Google.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_gads_medium",
      icon: "Target",
    },
    {
      id: "upsell-fb-page-pro",
      name: "Page Facebook Pro",
      description:
        "Complétez votre présence Google avec une page Facebook pro.",
      price: 199,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_fb_page_pro",
      icon: "Share2",
    },
  ],

  graphisme: [
    {
      id: "upsell-web-presence",
      name: "Site Web Présence+",
      description:
        "Mettez en valeur votre nouvelle identité avec un site web.",
      price: 199,
      priceUnit: "month",
      stripePriceId: "price_TODO_web_presence",
      icon: "Monitor",
      highlight: "Recommandé",
    },
    {
      id: "upsell-fb-page-pro",
      name: "Page Facebook Pro",
      description:
        "Déployez votre image de marque sur les réseaux sociaux.",
      price: 199,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_fb_page_pro",
      icon: "Share2",
    },
    {
      id: "upsell-graph-brochure",
      name: "Brochure Commerciale",
      description:
        "Créez une brochure professionnelle assortie à votre identité.",
      price: 450,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_graph_brochure",
      icon: "Palette",
    },
  ],

  "montage-video": [
    {
      id: "upsell-fb-standard",
      name: "Facebook Ads Standard",
      description:
        "Diffusez vos vidéos en campagnes Facebook et Instagram.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_fb_standard",
      icon: "Target",
      highlight: "Recommandé",
    },
    {
      id: "upsell-sma-tiktok",
      name: "TikTok Ads",
      description:
        "Publiez vos vidéos en campagnes TikTok ciblées.",
      price: 500,
      priceUnit: "month",
      stripePriceId: "price_TODO_sma_tiktok",
      icon: "Video",
    },
    {
      id: "upsell-logo-premium",
      name: "Pack Logo Premium",
      description:
        "Ajoutez un logo professionnel à vos vidéos de marque.",
      price: 700,
      priceUnit: "one-shot",
      stripePriceId: "price_TODO_graph_logo_premium",
      icon: "Palette",
    },
  ],
};

export function getUpsellsForCategory(category: string): UpsellOffer[] {
  return UPSELL_MAP[category] ?? [];
}
