// ============================================================
// Internal Links System — Maillage interne automatique
// Objectif: 8-15 liens internes contextuels par page minimum
// ============================================================

export interface InternalLink {
  href: string;
  label: string;
  anchor: string;
  type: LinkType;
}

export type LinkType =
  | "service"
  | "sub-service"
  | "parent"
  | "pricing"
  | "sector"
  | "zone"
  | "blog"
  | "cta"
  | "cross-cocon";

// ============================================================
// SERVICE HUBS — Slugs
// ============================================================

const SERVICE_HUBS = [
  "conception-web",
  "vibe-coding",
  "odoo",
  "google-ads",
  "facebook-ads",
  "tiktok-ads",
  "linkedin-ads",
  "snapchat-ads",
  "pinterest-ads",
  "native-ads",
  "bing-ads",
  "amazon-ads",
  "waze-ads",
  "seo",
  "google-my-business",
  "graphisme",
  "lead-generation",
  "intelligence-artificielle",
  "developpement-saas",
  "sites-immersifs-3d",
] as const;

type ServiceSlug = (typeof SERVICE_HUBS)[number];

// ============================================================
// CONTEXTUAL LINK MAP — Related services per service
// ============================================================

const RELATED_SERVICES: Record<ServiceSlug, ServiceSlug[]> = {
  "conception-web": [
    "vibe-coding",
    "seo",
    "graphisme",
    "sites-immersifs-3d",
    "developpement-saas",
    "odoo",
  ],
  "vibe-coding": [
    "conception-web",
    "developpement-saas",
    "intelligence-artificielle",
    "sites-immersifs-3d",
    "odoo",
  ],
  odoo: [
    "conception-web",
    "seo",
    "lead-generation",
    "vibe-coding",
    "graphisme",
  ],
  "google-ads": [
    "facebook-ads",
    "seo",
    "bing-ads",
    "native-ads",
    "lead-generation",
    "google-my-business",
  ],
  "facebook-ads": [
    "google-ads",
    "tiktok-ads",
    "linkedin-ads",
    "lead-generation",
    "graphisme",
  ],
  "tiktok-ads": [
    "facebook-ads",
    "snapchat-ads",
    "google-ads",
    "lead-generation",
    "graphisme",
  ],
  "linkedin-ads": [
    "google-ads",
    "facebook-ads",
    "lead-generation",
    "seo",
  ],
  "snapchat-ads": [
    "tiktok-ads",
    "facebook-ads",
    "google-ads",
    "lead-generation",
  ],
  "pinterest-ads": [
    "facebook-ads",
    "google-ads",
    "graphisme",
    "lead-generation",
  ],
  "native-ads": [
    "google-ads",
    "facebook-ads",
    "lead-generation",
    "seo",
    "bing-ads",
  ],
  "bing-ads": [
    "google-ads",
    "native-ads",
    "seo",
    "lead-generation",
  ],
  "amazon-ads": [
    "google-ads",
    "conception-web",
    "seo",
    "facebook-ads",
  ],
  "waze-ads": [
    "google-ads",
    "google-my-business",
    "seo",
    "lead-generation",
  ],
  seo: [
    "google-ads",
    "google-my-business",
    "conception-web",
    "lead-generation",
    "odoo",
    "vibe-coding",
  ],
  "google-my-business": [
    "seo",
    "google-ads",
    "waze-ads",
    "lead-generation",
    "graphisme",
  ],
  graphisme: [
    "conception-web",
    "facebook-ads",
    "google-ads",
    "lead-generation",
    "sites-immersifs-3d",
  ],
  "lead-generation": [
    "google-ads",
    "facebook-ads",
    "seo",
    "conception-web",
    "native-ads",
    "odoo",
  ],
  "intelligence-artificielle": [
    "vibe-coding",
    "developpement-saas",
    "conception-web",
    "lead-generation",
    "seo",
  ],
  "developpement-saas": [
    "vibe-coding",
    "intelligence-artificielle",
    "conception-web",
    "sites-immersifs-3d",
  ],
  "sites-immersifs-3d": [
    "conception-web",
    "vibe-coding",
    "graphisme",
    "developpement-saas",
    "intelligence-artificielle",
  ],
};

// ============================================================
// VIBE-CODING SUB-PAGES — Sibling interconnections
// Key: sub-page slug, Value: array of related sibling slugs
// ============================================================

const VIBE_CODING_SUB_PAGES = [
  "lovable",
  "bolt-new",
  "cursor-ai",
  "claude-code",
  "v0-vercel",
  "windsurf",
  "replit",
  "accompagnement-vibe-coding",
  "maintenance-app-vibe-coding",
  "formation-vibe-coding",
  "audit-code-ia",
  "migration-vibe-code-production",
] as const;

type VibeCodingSubSlug = (typeof VIBE_CODING_SUB_PAGES)[number];

const VIBE_CODING_RELATED: Record<VibeCodingSubSlug, VibeCodingSubSlug[]> = {
  lovable: [
    "bolt-new",
    "cursor-ai",
    "v0-vercel",
    "windsurf",
    "replit",
    "formation-vibe-coding",
  ],
  "bolt-new": [
    "lovable",
    "cursor-ai",
    "v0-vercel",
    "replit",
    "accompagnement-vibe-coding",
  ],
  "cursor-ai": [
    "claude-code",
    "v0-vercel",
    "windsurf",
    "audit-code-ia",
    "formation-vibe-coding",
  ],
  "claude-code": [
    "cursor-ai",
    "windsurf",
    "audit-code-ia",
    "maintenance-app-vibe-coding",
  ],
  "v0-vercel": [
    "lovable",
    "bolt-new",
    "cursor-ai",
    "formation-vibe-coding",
  ],
  windsurf: [
    "cursor-ai",
    "claude-code",
    "lovable",
    "maintenance-app-vibe-coding",
  ],
  replit: [
    "lovable",
    "bolt-new",
    "formation-vibe-coding",
    "accompagnement-vibe-coding",
  ],
  "accompagnement-vibe-coding": [
    "formation-vibe-coding",
    "audit-code-ia",
    "lovable",
    "cursor-ai",
  ],
  "maintenance-app-vibe-coding": [
    "audit-code-ia",
    "migration-vibe-code-production",
    "accompagnement-vibe-coding",
  ],
  "formation-vibe-coding": [
    "accompagnement-vibe-coding",
    "lovable",
    "cursor-ai",
    "claude-code",
    "v0-vercel",
  ],
  "audit-code-ia": [
    "maintenance-app-vibe-coding",
    "migration-vibe-code-production",
    "formation-vibe-coding",
  ],
  "migration-vibe-code-production": [
    "maintenance-app-vibe-coding",
    "audit-code-ia",
    "accompagnement-vibe-coding",
  ],
};

const VIBE_CODING_SUB_TITLES: Record<VibeCodingSubSlug, string> = {
  lovable: "Lovable — Développement IA",
  "bolt-new": "Bolt.new — Prototypage IA",
  "cursor-ai": "Cursor AI — Éditeur IA",
  "claude-code": "Claude Code — Codage IA",
  "v0-vercel": "v0 by Vercel — UI IA",
  windsurf: "Windsurf — IDE IA",
  replit: "Replit — Développement cloud IA",
  "accompagnement-vibe-coding": "Accompagnement Vibe Coding",
  "maintenance-app-vibe-coding": "Maintenance App Vibe Coding",
  "formation-vibe-coding": "Formation Vibe Coding",
  "audit-code-ia": "Audit Code IA",
  "migration-vibe-code-production": "Migration Vibe Code en Production",
};

// ============================================================
// ODOO SUB-PAGES — Sibling interconnections
// ============================================================

const ODOO_SUB_PAGES = [
  "creation-site-odoo",
  "odoo-erp-integration",
  "odoo-crm",
  "odoo-ecommerce",
  "referencement-seo-odoo",
  "maintenance-odoo",
  "migration-odoo",
  "formation-odoo",
] as const;

type OdooSubSlug = (typeof ODOO_SUB_PAGES)[number];

const ODOO_RELATED: Record<OdooSubSlug, OdooSubSlug[]> = {
  "creation-site-odoo": [
    "referencement-seo-odoo",
    "odoo-ecommerce",
    "maintenance-odoo",
  ],
  "odoo-erp-integration": [
    "odoo-crm",
    "odoo-ecommerce",
    "formation-odoo",
    "migration-odoo",
  ],
  "odoo-crm": [
    "odoo-erp-integration",
    "odoo-ecommerce",
    "formation-odoo",
  ],
  "odoo-ecommerce": [
    "creation-site-odoo",
    "odoo-crm",
    "referencement-seo-odoo",
    "odoo-erp-integration",
  ],
  "referencement-seo-odoo": [
    "creation-site-odoo",
    "odoo-ecommerce",
    "maintenance-odoo",
  ],
  "maintenance-odoo": [
    "migration-odoo",
    "formation-odoo",
    "creation-site-odoo",
  ],
  "migration-odoo": [
    "formation-odoo",
    "odoo-erp-integration",
    "maintenance-odoo",
  ],
  "formation-odoo": [
    "odoo-crm",
    "odoo-erp-integration",
    "migration-odoo",
  ],
};

const ODOO_SUB_TITLES: Record<OdooSubSlug, string> = {
  "creation-site-odoo": "Création de site Odoo",
  "odoo-erp-integration": "Intégration ERP Odoo",
  "odoo-crm": "CRM Odoo",
  "odoo-ecommerce": "E-commerce Odoo",
  "referencement-seo-odoo": "SEO & Référencement Odoo",
  "maintenance-odoo": "Maintenance Odoo",
  "migration-odoo": "Migration Odoo",
  "formation-odoo": "Formation Odoo",
};

// ============================================================
// SUB-PAGE TITLES — Unified lookup for breadcrumbs & labels
// ============================================================

const SUB_PAGE_TITLES: Record<string, string> = {
  ...VIBE_CODING_SUB_TITLES,
  ...ODOO_SUB_TITLES,
};

// ============================================================
// CROSS-COCON LINKS — Strategic cross-linking between cocoons
// ============================================================

const CROSS_COCON_LINKS: Record<string, InternalLink[]> = {
  // --- Vibe-coding hub ---
  "vibe-coding": [
    {
      href: "/services/conception-web/",
      label: "Conception web professionnelle",
      anchor: "conception de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/developpement-saas/mvp-startup/",
      label: "Créer un MVP avec le vibe coding",
      anchor: "développement MVP startup",
      type: "cross-cocon",
    },
    {
      href: "/services/intelligence-artificielle/",
      label: "Solutions IA sur mesure",
      anchor: "intelligence artificielle",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/",
      label: "Solutions Odoo pour entreprises",
      anchor: "intégration Odoo",
      type: "cross-cocon",
    },
  ],
  // --- Vibe-coding sub-pages → conception-web & odoo ---
  "vibe-coding/lovable": [
    {
      href: "/services/conception-web/",
      label: "Conception web sur mesure",
      anchor: "conception de sites web professionnels",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/creation-site-odoo/",
      label: "Création de site Odoo",
      anchor: "site web Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/bolt-new": [
    {
      href: "/services/conception-web/",
      label: "Conception web professionnelle",
      anchor: "création de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/odoo-ecommerce/",
      label: "E-commerce Odoo",
      anchor: "boutique en ligne Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/cursor-ai": [
    {
      href: "/services/conception-web/",
      label: "Développement web professionnel",
      anchor: "développement web",
      type: "cross-cocon",
    },
    {
      href: "/services/intelligence-artificielle/",
      label: "Solutions IA avancées",
      anchor: "intelligence artificielle",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/claude-code": [
    {
      href: "/services/intelligence-artificielle/",
      label: "Intelligence artificielle sur mesure",
      anchor: "solutions IA",
      type: "cross-cocon",
    },
    {
      href: "/services/developpement-saas/",
      label: "Développement SaaS",
      anchor: "développement SaaS",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/v0-vercel": [
    {
      href: "/services/conception-web/",
      label: "Conception web et design UI",
      anchor: "conception de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/graphisme/",
      label: "Graphisme & Design",
      anchor: "graphisme et design",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/windsurf": [
    {
      href: "/services/developpement-saas/",
      label: "Développement SaaS",
      anchor: "développement SaaS",
      type: "cross-cocon",
    },
    {
      href: "/services/conception-web/",
      label: "Conception web professionnelle",
      anchor: "création de sites web",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/replit": [
    {
      href: "/services/conception-web/",
      label: "Conception web professionnelle",
      anchor: "création de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/formation-odoo/",
      label: "Formation Odoo",
      anchor: "formation Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/accompagnement-vibe-coding": [
    {
      href: "/services/conception-web/",
      label: "Conception web professionnelle",
      anchor: "création de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/",
      label: "Solutions Odoo",
      anchor: "intégration Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/maintenance-app-vibe-coding": [
    {
      href: "/services/conception-web/",
      label: "Maintenance de sites web",
      anchor: "maintenance web",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/maintenance-odoo/",
      label: "Maintenance Odoo",
      anchor: "maintenance Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/formation-vibe-coding": [
    {
      href: "/services/conception-web/",
      label: "Apprendre la conception web",
      anchor: "conception web",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/formation-odoo/",
      label: "Formation Odoo",
      anchor: "formation Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/audit-code-ia": [
    {
      href: "/services/intelligence-artificielle/",
      label: "Intelligence artificielle",
      anchor: "solutions IA",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/migration-odoo/",
      label: "Migration Odoo",
      anchor: "migration Odoo",
      type: "cross-cocon",
    },
  ],
  "vibe-coding/migration-vibe-code-production": [
    {
      href: "/services/developpement-saas/",
      label: "Développement SaaS professionnel",
      anchor: "développement SaaS",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/migration-odoo/",
      label: "Migration Odoo",
      anchor: "migration Odoo",
      type: "cross-cocon",
    },
  ],
  // --- Odoo hub ---
  odoo: [
    {
      href: "/services/conception-web/",
      label: "Conception web alternative à Odoo",
      anchor: "création de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/seo/",
      label: "Référencement SEO pour Odoo",
      anchor: "référencement naturel",
      type: "cross-cocon",
    },
    {
      href: "/services/lead-generation/crm-integration/",
      label: "Intégration CRM et lead generation",
      anchor: "intégration CRM",
      type: "cross-cocon",
    },
    {
      href: "/services/vibe-coding/",
      label: "Vibe Coding & outils IA",
      anchor: "vibe coding",
      type: "cross-cocon",
    },
  ],
  // --- Odoo sub-pages → conception-web & vibe-coding ---
  "odoo/creation-site-odoo": [
    {
      href: "/services/conception-web/",
      label: "Conception web sur mesure",
      anchor: "conception de sites web",
      type: "cross-cocon",
    },
    {
      href: "/services/vibe-coding/lovable/",
      label: "Lovable — Créer un site avec l'IA",
      anchor: "créer un site avec Lovable",
      type: "cross-cocon",
    },
    {
      href: "/services/graphisme/",
      label: "Graphisme & Design",
      anchor: "graphisme et design",
      type: "cross-cocon",
    },
  ],
  "odoo/odoo-erp-integration": [
    {
      href: "/services/vibe-coding/claude-code/",
      label: "Claude Code pour intégrations",
      anchor: "intégration avec Claude Code",
      type: "cross-cocon",
    },
    {
      href: "/services/developpement-saas/",
      label: "Développement SaaS",
      anchor: "développement SaaS",
      type: "cross-cocon",
    },
    {
      href: "/services/intelligence-artificielle/",
      label: "Intelligence artificielle",
      anchor: "intelligence artificielle",
      type: "cross-cocon",
    },
  ],
  "odoo/odoo-crm": [
    {
      href: "/services/lead-generation/",
      label: "Lead Generation",
      anchor: "génération de leads",
      type: "cross-cocon",
    },
    {
      href: "/services/vibe-coding/",
      label: "Vibe Coding & CMS IA",
      anchor: "vibe coding",
      type: "cross-cocon",
    },
  ],
  "odoo/odoo-ecommerce": [
    {
      href: "/services/conception-web/",
      label: "Conception web e-commerce",
      anchor: "création de boutique en ligne",
      type: "cross-cocon",
    },
    {
      href: "/services/seo/",
      label: "SEO pour e-commerce",
      anchor: "référencement e-commerce",
      type: "cross-cocon",
    },
    {
      href: "/services/vibe-coding/bolt-new/",
      label: "Bolt.new — Prototypage rapide",
      anchor: "prototypage avec Bolt.new",
      type: "cross-cocon",
    },
  ],
  "odoo/referencement-seo-odoo": [
    {
      href: "/services/seo/",
      label: "SEO & Référencement Naturel",
      anchor: "référencement naturel",
      type: "cross-cocon",
    },
    {
      href: "/services/conception-web/",
      label: "Conception web optimisée SEO",
      anchor: "conception web SEO",
      type: "cross-cocon",
    },
    {
      href: "/services/google-my-business/",
      label: "Google My Business",
      anchor: "fiche Google My Business",
      type: "cross-cocon",
    },
  ],
  "odoo/maintenance-odoo": [
    {
      href: "/services/vibe-coding/maintenance-app-vibe-coding/",
      label: "Maintenance App Vibe Coding",
      anchor: "maintenance d'applications IA",
      type: "cross-cocon",
    },
    {
      href: "/services/conception-web/",
      label: "Maintenance web professionnelle",
      anchor: "maintenance de sites web",
      type: "cross-cocon",
    },
  ],
  "odoo/migration-odoo": [
    {
      href: "/services/vibe-coding/migration-vibe-code-production/",
      label: "Migration Vibe Code en Production",
      anchor: "migration de code en production",
      type: "cross-cocon",
    },
    {
      href: "/services/developpement-saas/",
      label: "Développement SaaS",
      anchor: "développement SaaS",
      type: "cross-cocon",
    },
  ],
  "odoo/formation-odoo": [
    {
      href: "/services/vibe-coding/formation-vibe-coding/",
      label: "Formation Vibe Coding",
      anchor: "formation vibe coding",
      type: "cross-cocon",
    },
    {
      href: "/services/conception-web/",
      label: "Conception web professionnelle",
      anchor: "conception de sites web",
      type: "cross-cocon",
    },
  ],
  // --- Conception-web → vibe-coding & odoo ---
  "conception-web": [
    {
      href: "/services/vibe-coding/",
      label: "Vibe Coding — Développement IA",
      anchor: "développement avec l'IA",
      type: "cross-cocon",
    },
    {
      href: "/services/vibe-coding/lovable/",
      label: "Lovable — Créer un site avec l'IA",
      anchor: "créer un site avec Lovable",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/",
      label: "Solutions Odoo pour entreprises",
      anchor: "solutions Odoo",
      type: "cross-cocon",
    },
    {
      href: "/services/odoo/creation-site-odoo/",
      label: "Création de site Odoo",
      anchor: "site web Odoo",
      type: "cross-cocon",
    },
  ],
  // --- Other existing ---
  "native-ads": [
    {
      href: "/services/lead-generation/",
      label: "Génération de leads avec Native Ads",
      anchor: "lead generation",
      type: "cross-cocon",
    },
    {
      href: "/zone/agence-traffic-laval/",
      label: "Agence Traffic à Laval",
      anchor: "agence traffic Laval",
      type: "cross-cocon",
    },
  ],
  "bing-ads": [
    {
      href: "/services/google-ads/",
      label: "Google Ads vs Bing Ads",
      anchor: "campagnes Google Ads",
      type: "cross-cocon",
    },
  ],
  "amazon-ads": [
    {
      href: "/services/conception-web/site-shopify/",
      label: "Boutique Shopify + Amazon",
      anchor: "création site Shopify",
      type: "cross-cocon",
    },
  ],
};

// ============================================================
// SERVICE TITLES — Human-readable labels
// ============================================================

const SERVICE_TITLES: Record<ServiceSlug, string> = {
  "conception-web": "Conception Web",
  "vibe-coding": "Vibe Coding & CMS IA",
  odoo: "Odoo",
  "google-ads": "Google Ads",
  "facebook-ads": "Facebook / Meta Ads",
  "tiktok-ads": "TikTok Ads",
  "linkedin-ads": "LinkedIn Ads",
  "snapchat-ads": "Snapchat Ads",
  "pinterest-ads": "Pinterest Ads",
  "native-ads": "Native Ads",
  "bing-ads": "Bing / Microsoft Ads",
  "amazon-ads": "Amazon Ads",
  "waze-ads": "Waze Ads",
  seo: "SEO / Référencement Naturel",
  "google-my-business": "Google My Business",
  graphisme: "Graphisme & Design",
  "lead-generation": "Lead Generation",
  "intelligence-artificielle": "Intelligence Artificielle",
  "developpement-saas": "Développement SaaS",
  "sites-immersifs-3d": "Sites Immersifs & 3D",
};

// ============================================================
// PRICING MAPPING — Service to pricing page
// ============================================================

const SERVICE_TO_PRICING: Partial<Record<ServiceSlug, string>> = {
  "conception-web": "/tarifs/conception-web/",
  "vibe-coding": "/tarifs/vibe-coding/",
  odoo: "/tarifs/odoo/",
  "google-ads": "/tarifs/google-ads/",
  "facebook-ads": "/tarifs/facebook-ads/",
  "native-ads": "/tarifs/native-ads/",
  seo: "/tarifs/seo/",
  "google-my-business": "/tarifs/google-my-business/",
  graphisme: "/tarifs/graphisme/",
  "tiktok-ads": "/tarifs/reseaux-sociaux/",
  "linkedin-ads": "/tarifs/reseaux-sociaux/",
  "snapchat-ads": "/tarifs/reseaux-sociaux/",
  "pinterest-ads": "/tarifs/reseaux-sociaux/",
};

// ============================================================
// SUB-PAGE PRICING — Sub-pages inherit parent pricing
// ============================================================

const SUB_PAGE_TO_PRICING: Record<string, string> = {
  // Vibe-coding sub-pages → parent pricing
  "vibe-coding/lovable": "/tarifs/vibe-coding/",
  "vibe-coding/bolt-new": "/tarifs/vibe-coding/",
  "vibe-coding/cursor-ai": "/tarifs/vibe-coding/",
  "vibe-coding/claude-code": "/tarifs/vibe-coding/",
  "vibe-coding/v0-vercel": "/tarifs/vibe-coding/",
  "vibe-coding/windsurf": "/tarifs/vibe-coding/",
  "vibe-coding/replit": "/tarifs/vibe-coding/",
  "vibe-coding/accompagnement-vibe-coding": "/tarifs/vibe-coding/",
  "vibe-coding/maintenance-app-vibe-coding": "/tarifs/vibe-coding/",
  "vibe-coding/formation-vibe-coding": "/tarifs/vibe-coding/",
  "vibe-coding/audit-code-ia": "/tarifs/vibe-coding/",
  "vibe-coding/migration-vibe-code-production": "/tarifs/vibe-coding/",
  // Odoo sub-pages → parent pricing
  "odoo/creation-site-odoo": "/tarifs/odoo/",
  "odoo/odoo-erp-integration": "/tarifs/odoo/",
  "odoo/odoo-crm": "/tarifs/odoo/",
  "odoo/odoo-ecommerce": "/tarifs/odoo/",
  "odoo/referencement-seo-odoo": "/tarifs/odoo/",
  "odoo/maintenance-odoo": "/tarifs/odoo/",
  "odoo/migration-odoo": "/tarifs/odoo/",
  "odoo/formation-odoo": "/tarifs/odoo/",
};

// ============================================================
// SECTORS
// ============================================================

const SECTORS = [
  { slug: "restaurant-restauration", label: "Restaurant & Restauration" },
  { slug: "immobilier", label: "Immobilier" },
  { slug: "sante-clinique", label: "Santé & Clinique" },
  { slug: "construction-renovation", label: "Construction & Rénovation" },
  { slug: "commerce-detail", label: "Commerce de détail" },
  { slug: "services-professionnels", label: "Services professionnels" },
  { slug: "beaute-esthetique", label: "Beauté & Esthétique" },
  { slug: "automobile", label: "Automobile" },
  { slug: "ecommerce-en-ligne", label: "E-commerce" },
  { slug: "education-formation", label: "Éducation & Formation" },
  { slug: "tourisme-hotellerie", label: "Tourisme & Hôtellerie" },
  { slug: "juridique-avocats", label: "Juridique & Avocats" },
] as const;

// ============================================================
// SECTORS PER SERVICE — Which sectors are most relevant
// ============================================================

const SERVICE_SECTORS: Partial<Record<ServiceSlug, string[]>> = {
  "conception-web": [
    "restaurant-restauration",
    "immobilier",
    "commerce-detail",
    "services-professionnels",
  ],
  "google-ads": [
    "immobilier",
    "sante-clinique",
    "construction-renovation",
    "automobile",
  ],
  "facebook-ads": [
    "beaute-esthetique",
    "restaurant-restauration",
    "commerce-detail",
    "tourisme-hotellerie",
  ],
  seo: [
    "juridique-avocats",
    "sante-clinique",
    "immobilier",
    "services-professionnels",
  ],
  "google-my-business": [
    "restaurant-restauration",
    "sante-clinique",
    "beaute-esthetique",
    "automobile",
  ],
  graphisme: [
    "restaurant-restauration",
    "beaute-esthetique",
    "commerce-detail",
  ],
  "intelligence-artificielle": [
    "services-professionnels",
    "ecommerce-en-ligne",
    "education-formation",
  ],
  odoo: [
    "commerce-detail",
    "services-professionnels",
    "construction-renovation",
  ],
  "vibe-coding": [
    "ecommerce-en-ligne",
    "education-formation",
    "services-professionnels",
  ],
};

// ============================================================
// DEFAULT ZONES — Always link to Laval
// ============================================================

const DEFAULT_ZONES: InternalLink[] = [
  {
    href: "/zone/agence-web-laval/",
    label: "Agence web à Laval",
    anchor: "agence web Laval",
    type: "zone",
  },
  {
    href: "/zone/agence-marketing-laval/",
    label: "Agence marketing à Laval",
    anchor: "agence marketing Laval",
    type: "zone",
  },
];

// ============================================================
// CTA LINKS — Always present
// ============================================================

const CTA_LINKS: InternalLink[] = [
  {
    href: "/devis-gratuit/",
    label: "Demander un devis gratuit",
    anchor: "devis gratuit",
    type: "cta",
  },
  {
    href: "/contact/",
    label: "Contactez-nous",
    anchor: "contactez notre équipe",
    type: "cta",
  },
];

// ============================================================
// PAID MEDIA SERVICES — Link to /zone/agence-traffic-laval/
// ============================================================

const PAID_MEDIA_SERVICES: ServiceSlug[] = [
  "google-ads",
  "facebook-ads",
  "tiktok-ads",
  "linkedin-ads",
  "snapchat-ads",
  "pinterest-ads",
  "native-ads",
  "bing-ads",
  "amazon-ads",
  "waze-ads",
];

// ============================================================
// MAIN FUNCTION — Get contextual links for a page
// ============================================================

export function getInternalLinks(
  currentPath: string,
  options?: { maxLinks?: number },
): InternalLink[] {
  const maxLinks = options?.maxLinks ?? 15;
  const links: InternalLink[] = [];
  const addedHrefs = new Set<string>();

  const addLink = (link: InternalLink) => {
    if (
      link.href !== currentPath &&
      !addedHrefs.has(link.href) &&
      links.length < maxLinks
    ) {
      links.push(link);
      addedHrefs.add(link.href);
    }
  };

  // Determine context from path
  const pathParts = currentPath.replace(/^\/|\/$/g, "").split("/");
  const isServicePage = pathParts[0] === "services";
  const serviceSlug = isServicePage ? (pathParts[1] as ServiceSlug) : null;
  const isSubService = isServicePage && pathParts.length > 2;
  const subServiceSlug = isSubService ? pathParts[2] : null;
  const subPageKey =
    serviceSlug && subServiceSlug
      ? `${serviceSlug}/${subServiceSlug}`
      : null;

  // 1. Parent link (sub-page → hub)
  if (isSubService && serviceSlug) {
    addLink({
      href: `/services/${serviceSlug}/`,
      label: SERVICE_TITLES[serviceSlug] ?? serviceSlug,
      anchor: `nos services ${SERVICE_TITLES[serviceSlug]?.toLowerCase() ?? serviceSlug}`,
      type: "parent",
    });
  }

  if (isServicePage && pathParts.length > 1) {
    addLink({
      href: "/services/",
      label: "Tous nos services",
      anchor: "tous nos services",
      type: "parent",
    });
  }

  // 2. Sub-page sibling links (vibe-coding and odoo sub-pages)
  if (isSubService && serviceSlug && subServiceSlug) {
    if (
      serviceSlug === "vibe-coding" &&
      subServiceSlug in VIBE_CODING_RELATED
    ) {
      const siblings =
        VIBE_CODING_RELATED[subServiceSlug as VibeCodingSubSlug];
      if (siblings) {
        for (const sibSlug of siblings) {
          const title = VIBE_CODING_SUB_TITLES[sibSlug];
          if (title) {
            addLink({
              href: `/services/vibe-coding/${sibSlug}/`,
              label: title,
              anchor: title.toLowerCase(),
              type: "sub-service",
            });
          }
        }
      }
    }

    if (serviceSlug === "odoo" && subServiceSlug in ODOO_RELATED) {
      const siblings = ODOO_RELATED[subServiceSlug as OdooSubSlug];
      if (siblings) {
        for (const sibSlug of siblings) {
          const title = ODOO_SUB_TITLES[sibSlug];
          if (title) {
            addLink({
              href: `/services/odoo/${sibSlug}/`,
              label: title,
              anchor: title.toLowerCase(),
              type: "sub-service",
            });
          }
        }
      }
    }
  }

  // 3. Related services (hub-level)
  if (serviceSlug && serviceSlug in RELATED_SERVICES) {
    const related = RELATED_SERVICES[serviceSlug];
    if (related) {
      for (const relSlug of related) {
        const title = SERVICE_TITLES[relSlug];
        if (title) {
          addLink({
            href: `/services/${relSlug}/`,
            label: title,
            anchor: title.toLowerCase(),
            type: "service",
          });
        }
      }
    }
  }

  // 4. Cross-cocon links (check sub-page key first, then hub)
  if (subPageKey && subPageKey in CROSS_COCON_LINKS) {
    const crossLinks = CROSS_COCON_LINKS[subPageKey];
    if (crossLinks) {
      for (const link of crossLinks) {
        addLink(link);
      }
    }
  } else if (serviceSlug && serviceSlug in CROSS_COCON_LINKS) {
    const crossLinks = CROSS_COCON_LINKS[serviceSlug];
    if (crossLinks) {
      for (const link of crossLinks) {
        addLink(link);
      }
    }
  }

  // 5. Pricing link (sub-page first, then hub)
  if (subPageKey && subPageKey in SUB_PAGE_TO_PRICING) {
    const pricingHref = SUB_PAGE_TO_PRICING[subPageKey];
    if (pricingHref) {
      const pricingLabel = serviceSlug
        ? SERVICE_TITLES[serviceSlug] ?? serviceSlug
        : serviceSlug;
      addLink({
        href: pricingHref,
        label: `Tarifs ${pricingLabel}`,
        anchor: `tarifs ${typeof pricingLabel === "string" ? pricingLabel.toLowerCase() : ""}`,
        type: "pricing",
      });
    }
  } else if (serviceSlug && serviceSlug in SERVICE_TO_PRICING) {
    const pricingHref = SERVICE_TO_PRICING[serviceSlug];
    if (pricingHref) {
      addLink({
        href: pricingHref,
        label: `Tarifs ${SERVICE_TITLES[serviceSlug] ?? serviceSlug}`,
        anchor: `tarifs ${SERVICE_TITLES[serviceSlug]?.toLowerCase() ?? serviceSlug}`,
        type: "pricing",
      });
    }
  }

  // 6. Sector links
  if (serviceSlug && serviceSlug in SERVICE_SECTORS) {
    const sectors = SERVICE_SECTORS[serviceSlug];
    if (sectors) {
      for (const sectorSlug of sectors.slice(0, 3)) {
        const sector = SECTORS.find((s) => s.slug === sectorSlug);
        if (sector) {
          addLink({
            href: `/secteurs/${sector.slug}/`,
            label: sector.label,
            anchor: `marketing pour ${sector.label.toLowerCase()}`,
            type: "sector",
          });
        }
      }
    }
  }

  // 7. Paid media → Traffic Laval
  if (serviceSlug && PAID_MEDIA_SERVICES.includes(serviceSlug)) {
    addLink({
      href: "/zone/agence-traffic-laval/",
      label: "Agence Traffic à Laval",
      anchor: "agence traffic Laval",
      type: "zone",
    });
  }

  // 8. Zone links (always)
  for (const zone of DEFAULT_ZONES) {
    addLink(zone);
  }

  // 9. CTA links (always)
  for (const cta of CTA_LINKS) {
    addLink(cta);
  }

  return links;
}

// ============================================================
// BREADCRUMB GENERATOR
// ============================================================

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function getBreadcrumbs(currentPath: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: "Accueil", href: "/" }];
  const parts = currentPath.replace(/^\/|\/$/g, "").split("/");

  let currentHref = "";
  for (const part of parts) {
    currentHref += `/${part}`;

    let label = part
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    // Override with known titles (hub-level)
    if (part in SERVICE_TITLES) {
      label = SERVICE_TITLES[part as ServiceSlug];
    }

    // Override with sub-page titles
    if (part in SUB_PAGE_TITLES) {
      label = SUB_PAGE_TITLES[part] ?? label;
    }

    const knownLabels: Record<string, string> = {
      services: "Services",
      tarifs: "Tarifs",
      blog: "Blog",
      secteurs: "Secteurs",
      zone: "Zones",
      "a-propos": "À propos",
      contact: "Contact",
      realisations: "Réalisations",
      certifications: "Certifications",
      faq: "FAQ",
      "devis-gratuit": "Devis gratuit",
    };

    if (part in knownLabels) {
      label = knownLabels[part]!;
    }

    crumbs.push({ label, href: `${currentHref}/` });
  }

  return crumbs;
}

// ============================================================
// RELATED BLOG POSTS — Get blog categories related to a service
// ============================================================

const SERVICE_TO_BLOG_CATEGORY: Partial<Record<ServiceSlug, string[]>> = {
  "conception-web": ["conception-web", "vibe-coding"],
  "vibe-coding": ["vibe-coding", "conception-web", "intelligence-artificielle"],
  odoo: ["odoo", "conception-web"],
  "google-ads": ["google-ads", "marketing-digital"],
  "facebook-ads": ["facebook-ads", "reseaux-sociaux"],
  "tiktok-ads": ["reseaux-sociaux"],
  "linkedin-ads": ["reseaux-sociaux"],
  seo: ["seo", "marketing-digital"],
  "google-my-business": ["google-my-business", "seo"],
  graphisme: ["graphisme"],
  "intelligence-artificielle": ["intelligence-artificielle", "vibe-coding"],
  "sites-immersifs-3d": ["conception-web"],
  "native-ads": ["marketing-digital"],
};

export function getRelatedBlogCategories(serviceSlug: string): string[] {
  return SERVICE_TO_BLOG_CATEGORY[serviceSlug as ServiceSlug] ?? ["marketing-digital"];
}

// ============================================================
// VALIDATION — Verify internal link health
// ============================================================

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalPages: number;
    pagesWithMinLinks: number;
    averageOutLinks: number;
  };
}

export function validateInternalLinks(
  allPages: string[],
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const incomingLinks = new Map<string, number>();
  const outgoingLinks = new Map<string, number>();

  // Initialize counters
  for (const page of allPages) {
    incomingLinks.set(page, 0);
    outgoingLinks.set(page, 0);
  }

  const allPagesSet = new Set(allPages);

  // Count links
  for (const page of allPages) {
    const links = getInternalLinks(page);
    outgoingLinks.set(page, links.length);

    for (const link of links) {
      // Check for dead links
      if (!allPagesSet.has(link.href)) {
        errors.push(`Dead link: ${page} → ${link.href}`);
      } else {
        incomingLinks.set(
          link.href,
          (incomingLinks.get(link.href) ?? 0) + 1,
        );
      }
    }

    // Check minimum outgoing links
    if (links.length < 8) {
      warnings.push(
        `${page} has only ${links.length} outgoing links (min 8)`,
      );
    }
  }

  // Check minimum incoming links
  for (const [page, count] of incomingLinks) {
    if (count < 3 && page !== "/") {
      warnings.push(
        `${page} has only ${count} incoming links (min 3)`,
      );
    }
  }

  // Calculate stats
  let pagesWithMinLinks = 0;
  let totalOutLinks = 0;

  for (const [, count] of outgoingLinks) {
    totalOutLinks += count;
    if (count >= 8) pagesWithMinLinks++;
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalPages: allPages.length,
      pagesWithMinLinks,
      averageOutLinks:
        allPages.length > 0 ? totalOutLinks / allPages.length : 0,
    },
  };
}
