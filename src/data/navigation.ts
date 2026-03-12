// ============================================================
// NAVIGATION — Mega-menu 3 colonnes
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface MegaMenuItem {
  label: string;
  href: string;
  groups: NavGroup[];
  cta?: {
    label: string;
    href: string;
    description: string;
  };
}

export interface SimpleNavItem {
  label: string;
  href: string;
  target?: string;
}

export type NavigationItem = MegaMenuItem | SimpleNavItem;

function isMegaMenu(item: NavigationItem): item is MegaMenuItem {
  return "groups" in item;
}

export { isMegaMenu };

// ============================================================
// MEGA-MENU SERVICES — 3 colonnes
// ============================================================

export const NAV_SERVICES: MegaMenuItem = {
  label: "Services",
  href: "/services/",
  groups: [
    {
      title: "Web & Développement",
      items: [
        {
          label: "Conception Web",
          href: "/services/conception-web/",
          description: "Sites vitrine, WordPress, Shopify, Next.js",
          icon: "Monitor",
        },
        {
          label: "Vibe Coding & CMS IA",
          href: "/services/vibe-coding/",
          description: "Lovable, Bolt, Cursor, Claude Code, v0",
          icon: "Sparkles",
        },
        {
          label: "Odoo",
          href: "/services/odoo/",
          description: "Site web, ERP, CRM, e-commerce",
          icon: "Building2",
        },
        {
          label: "Développement SaaS",
          href: "/services/developpement-saas/",
          description: "Web apps, mobile, MVP startup",
          icon: "Rocket",
        },
        {
          label: "Sites immersifs 3D",
          href: "/services/sites-immersifs-3d/",
          description: "Three.js, WebGL, configurateurs",
          icon: "Box",
        },
      ],
    },
    {
      title: "Publicité en ligne",
      items: [
        {
          label: "Google Ads",
          href: "/services/google-ads/",
          description: "Search, Display, Shopping, YouTube",
          icon: "Target",
        },
        {
          label: "Facebook / Meta Ads",
          href: "/services/facebook-ads/",
          description: "Facebook, Instagram, Messenger",
          icon: "Facebook",
        },
        {
          label: "TikTok Ads",
          href: "/services/tiktok-ads/",
          description: "Vidéos courtes et virales",
          icon: "Music",
        },
        {
          label: "LinkedIn Ads",
          href: "/services/linkedin-ads/",
          description: "B2B, recrutement, notoriété",
          icon: "Linkedin",
        },
        {
          label: "Native Ads",
          href: "/services/native-ads/",
          description: "Taboola, Outbrain, Traffic Factory",
          icon: "Newspaper",
        },
        {
          label: "Toutes les plateformes →",
          href: "/services/",
          description: "Snapchat, Pinterest, Bing, Amazon, Waze",
          icon: "MoreHorizontal",
        },
      ],
    },
    {
      title: "SEO & Créatif",
      items: [
        {
          label: "SEO",
          href: "/services/seo/",
          description: "Référencement naturel complet",
          icon: "Search",
        },
        {
          label: "Google My Business",
          href: "/services/google-my-business/",
          description: "Fiche GMB, avis, local SEO",
          icon: "MapPin",
        },
        {
          label: "Graphisme",
          href: "/services/graphisme/",
          description: "Logo, identité visuelle, print",
          icon: "Palette",
        },
        {
          label: "Montage Vidéo",
          href: "/services/montage-video/",
          description: "YouTube, TikTok, Shorts, corporate",
          icon: "Video",
        },
        {
          label: "Lead Generation",
          href: "/services/lead-generation/",
          description: "Landing pages, tunnels de vente",
          icon: "Magnet",
        },
        {
          label: "Intelligence Artificielle",
          href: "/services/intelligence-artificielle/",
          description: "Agents IA, chatbots, automatisation",
          icon: "Brain",
        },
      ],
    },
  ],
  cta: {
    label: "Devis gratuit",
    href: "/devis-gratuit/",
    description: "Obtenez une proposition personnalisée en 24h",
  },
};

// ============================================================
// MEGA-MENU TARIFS — 3 colonnes
// ============================================================

export const NAV_TARIFS: MegaMenuItem = {
  label: "Tarifs",
  href: "/tarifs/",
  groups: [
    {
      title: "Web & Tech",
      items: [
        {
          label: "Conception Web",
          href: "/tarifs/conception-web/",
          description: "À partir de 99 $/mois",
          icon: "Monitor",
        },
        {
          label: "Vibe Coding & CMS IA",
          href: "/tarifs/vibe-coding/",
          description: "À partir de 149 $/mois",
          icon: "Sparkles",
        },
        {
          label: "Odoo",
          href: "/tarifs/odoo/",
          description: "À partir de 199 $/mois",
          icon: "Building2",
        },
      ],
    },
    {
      title: "Publicité",
      items: [
        {
          label: "Google Ads",
          href: "/tarifs/google-ads/",
          description: "À partir de 250 $ (tags)",
          icon: "Target",
        },
        {
          label: "Facebook Ads",
          href: "/tarifs/facebook-ads/",
          description: "À partir de 199 $ (page)",
          icon: "Facebook",
        },
        {
          label: "Native Ads",
          href: "/tarifs/native-ads/",
          description: "À partir de 250 $ (tags)",
          icon: "Newspaper",
        },
        {
          label: "Réseaux Sociaux",
          href: "/tarifs/reseaux-sociaux/",
          description: "À partir de 500 $/mois",
          icon: "Share2",
        },
      ],
    },
    {
      title: "SEO & Design",
      items: [
        {
          label: "SEO",
          href: "/tarifs/seo/",
          description: "À partir de 300 $ (audit)",
          icon: "Search",
        },
        {
          label: "Google My Business",
          href: "/tarifs/google-my-business/",
          description: "À partir de 50 $/mois",
          icon: "MapPin",
        },
        {
          label: "Graphisme",
          href: "/tarifs/graphisme/",
          description: "À partir de 450 $",
          icon: "Palette",
        },
        {
          label: "Montage Vidéo",
          href: "/tarifs/montage-video/",
          description: "À partir de 119 $/vidéo",
          icon: "Video",
        },
      ],
    },
  ],
  cta: {
    label: "Comparer les forfaits",
    href: "/tarifs/",
    description: "Trouvez le forfait parfait pour votre entreprise",
  },
};

// ============================================================
// NAVIGATION PRINCIPALE
// ============================================================

export const MAIN_NAVIGATION: NavigationItem[] = [
  NAV_SERVICES,
  NAV_TARIFS,
  { label: "Réalisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
  { label: "Ressources gratuites", href: "/ressources-gratuites/audit-google-ads/", target: "_blank" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Contact", href: "/contact/" },
];

// ============================================================
// FOOTER NAVIGATION
// ============================================================

export const FOOTER_NAVIGATION = {
  services: {
    title: "Services",
    links: [
      { label: "Conception Web", href: "/services/conception-web/" },
      { label: "Vibe Coding & CMS IA", href: "/services/vibe-coding/" },
      { label: "Odoo", href: "/services/odoo/" },
      { label: "Google Ads", href: "/services/google-ads/" },
      { label: "Facebook Ads", href: "/services/facebook-ads/" },
      { label: "SEO", href: "/services/seo/" },
      { label: "Graphisme", href: "/services/graphisme/" },
      { label: "Montage Vidéo", href: "/services/montage-video/" },
      { label: "Intelligence Artificielle", href: "/services/intelligence-artificielle/" },
      { label: "Tous les services →", href: "/services/" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/a-propos/" },
      { label: "Réalisations", href: "/realisations/" },
      { label: "Certifications", href: "/certifications/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  resources: {
    title: "Ressources",
    links: [
      { label: "Tarifs", href: "/tarifs/" },
      { label: "Devis gratuit", href: "/devis-gratuit/" },
      { label: "Audit Google Ads gratuit", href: "/ressources-gratuites/audit-google-ads/" },
      { label: "Secteurs d'activité", href: "/secteurs/" },
      { label: "Zones desservies", href: "/zone/" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" },
      { label: "Conditions générales", href: "/conditions-generales/" },
      { label: "Mentions légales", href: "/mentions-legales/" },
    ],
  },
} as const;

// ============================================================
// MOBILE NAVIGATION
// ============================================================

export const MOBILE_NAVIGATION: SimpleNavItem[] = [
  { label: "Services", href: "/services/" },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Réalisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
  { label: "Ressources gratuites", href: "/ressources-gratuites/audit-google-ads/", target: "_blank" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Contact", href: "/contact/" },
  { label: "Devis gratuit", href: "/devis-gratuit/" },
];
