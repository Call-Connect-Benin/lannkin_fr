import type { ServiceCategory } from "@/domain/entities/service";

// ============================================================
// ServiceData — Structure complète pour chaque service
// ============================================================

export interface ServiceData {
  slug: string;
  name: string;
  category: ServiceCategory;
  parentSlug: string | null;
  icon: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedServices: string[];
  relatedSectors: string[];
  relatedBlogCategories: string[];
  pricingLink: string | null;
  stripeLinks: string[];
  subServices?: string[];
}

// ============================================================
// 1. CONCEPTION WEB
// ============================================================

const conceptionWeb: ServiceData = {
  slug: "conception-web",
  name: "Conception Web",
  category: "web",
  parentSlug: null,
  icon: "Monitor",
  shortDescription: "Sites web performants sur mesure : vitrine, WordPress, Shopify, Next.js, headless CMS et refonte complète.",
  metaTitle: "Conception Web à Laval | Agence Web Québec",
  metaDescription: "Agence de conception web à Laval. Sites vitrine, WordPress, Shopify, Next.js, headless CMS. Design moderne et SEO-friendly. Devis gratuit.",
  keywords: ["conception web laval", "agence web montréal", "création site web québec", "développeur web laval", "site internet laval", "agence web rive-nord"],
  relatedServices: ["vibe-coding", "seo", "graphisme", "sites-immersifs-3d", "odoo", "developpement-saas"],
  relatedSectors: ["restaurant-restauration", "immobilier", "commerce-detail", "services-professionnels"],
  relatedBlogCategories: ["conception-web", "vibe-coding"],
  pricingLink: "/tarifs/conception-web/",
  stripeLinks: [],
  subServices: ["site-vitrine", "site-wordpress", "site-shopify", "site-nextjs", "site-headless-cms", "refonte-site-web"],
};

const conceptionWebSubs: ServiceData[] = [
  {
    slug: "site-vitrine",
    name: "Site Vitrine",
    category: "web",
    parentSlug: "conception-web",
    icon: "Globe",
    shortDescription: "Site vitrine professionnel pour présenter votre entreprise, vos services et générer des contacts qualifiés.",
    metaTitle: "Création Site Vitrine à Laval | LANNKIN",
    metaDescription: "Création de site vitrine professionnel à Laval et Montréal. Design moderne, responsive, SEO-optimisé. À partir de 99$/mois.",
    keywords: ["site vitrine laval", "création site vitrine montréal", "site web professionnel québec", "site vitrine prix", "site vitrine pas cher"],
    relatedServices: ["site-wordpress", "site-nextjs", "refonte-site-web", "seo", "graphisme"],
    relatedSectors: ["services-professionnels", "restaurant-restauration", "beaute-esthetique"],
    relatedBlogCategories: ["conception-web"],
    pricingLink: "/tarifs/conception-web/",
    stripeLinks: [],
  },
  {
    slug: "site-wordpress",
    name: "Site WordPress",
    category: "web",
    parentSlug: "conception-web",
    icon: "FileCode",
    shortDescription: "Sites WordPress sur mesure avec thèmes custom, plugins optimisés et administration simplifiée.",
    metaTitle: "Création Site WordPress Laval | LANNKIN",
    metaDescription: "Agence WordPress à Laval. Sites WordPress sur mesure, responsive et SEO-friendly. Thèmes custom et plugins optimisés.",
    keywords: ["site wordpress laval", "agence wordpress montréal", "développeur wordpress québec", "création wordpress", "wordpress sur mesure"],
    relatedServices: ["site-vitrine", "site-shopify", "seo", "refonte-site-web", "odoo"],
    relatedSectors: ["services-professionnels", "immobilier", "restaurant-restauration"],
    relatedBlogCategories: ["conception-web"],
    pricingLink: "/tarifs/conception-web/",
    stripeLinks: [],
  },
  {
    slug: "site-shopify",
    name: "Site Shopify",
    category: "web",
    parentSlug: "conception-web",
    icon: "ShoppingBag",
    shortDescription: "Boutiques Shopify clé en main : design, configuration, paiements, livraison et optimisation conversion.",
    metaTitle: "Création Boutique Shopify Laval | LANNKIN",
    metaDescription: "Agence Shopify à Laval. Création de boutiques e-commerce Shopify performantes. Design, SEO, paiements, livraison.",
    keywords: ["shopify laval", "agence shopify montréal", "boutique shopify québec", "création shopify", "expert shopify canada"],
    relatedServices: ["site-wordpress", "amazon-ads", "google-ads", "facebook-ads", "seo"],
    relatedSectors: ["commerce-detail", "ecommerce-en-ligne", "beaute-esthetique"],
    relatedBlogCategories: ["conception-web", "ecommerce"],
    pricingLink: "/tarifs/conception-web/",
    stripeLinks: [],
  },
  {
    slug: "site-nextjs",
    name: "Site Next.js",
    category: "web",
    parentSlug: "conception-web",
    icon: "Zap",
    shortDescription: "Applications web Next.js haute performance avec React, SSR/SSG et déploiement Vercel.",
    metaTitle: "Développement Next.js Laval | LANNKIN",
    metaDescription: "Développement Next.js à Laval. Applications web React performantes, SSR, API routes. Expertise TypeScript et Vercel.",
    keywords: ["nextjs laval", "développeur next.js montréal", "agence react québec", "next.js sur mesure", "développeur react canada"],
    relatedServices: ["site-headless-cms", "developpement-saas", "vibe-coding", "sites-immersifs-3d"],
    relatedSectors: ["ecommerce-en-ligne", "services-professionnels", "education-formation"],
    relatedBlogCategories: ["conception-web", "vibe-coding"],
    pricingLink: "/tarifs/conception-web/",
    stripeLinks: [],
  },
  {
    slug: "site-headless-cms",
    name: "Site Headless CMS",
    category: "web",
    parentSlug: "conception-web",
    icon: "Layers",
    shortDescription: "Architecture headless CMS découplée pour performance maximale et flexibilité totale.",
    metaTitle: "Headless CMS Laval | Strapi, Sanity | LANNKIN",
    metaDescription: "Développement headless CMS à Laval. Strapi, Sanity, Contentful avec frontend Next.js. Performance et flexibilité.",
    keywords: ["headless cms laval", "strapi montréal", "sanity québec", "cms découplé", "jamstack canada", "headless wordpress"],
    relatedServices: ["site-nextjs", "developpement-saas", "seo", "vibe-coding"],
    relatedSectors: ["ecommerce-en-ligne", "education-formation", "services-professionnels"],
    relatedBlogCategories: ["conception-web"],
    pricingLink: "/tarifs/conception-web/",
    stripeLinks: [],
  },
  {
    slug: "refonte-site-web",
    name: "Refonte de Site Web",
    category: "web",
    parentSlug: "conception-web",
    icon: "RefreshCw",
    shortDescription: "Refonte complète de votre site : nouveau design, migration de contenu, SEO préservé et performances boostées.",
    metaTitle: "Refonte Site Web Laval & Montréal | LANNKIN",
    metaDescription: "Refonte de site web à Laval. Nouveau design, migration SEO, performances optimisées. Gardez vos positions Google.",
    keywords: ["refonte site web laval", "refonte site internet montréal", "redesign site québec", "migration site web", "modernisation site"],
    relatedServices: ["site-vitrine", "site-nextjs", "seo", "vibe-coding", "odoo"],
    relatedSectors: ["services-professionnels", "immobilier", "restaurant-restauration", "commerce-detail"],
    relatedBlogCategories: ["conception-web", "seo"],
    pricingLink: "/tarifs/conception-web/",
    stripeLinks: [],
  },
];

// ============================================================
// 2. VIBE CODING & CMS IA
// ============================================================

const vibeCoding: ServiceData = {
  slug: "vibe-coding",
  name: "Vibe Coding & CMS IA",
  category: "web",
  parentSlug: null,
  icon: "Sparkles",
  shortDescription: "Créez votre app avec l'IA : Lovable, Bolt, Cursor, Claude Code, v0, Windsurf, Replit. Accompagnement expert.",
  metaTitle: "Vibe Coding & CMS IA à Laval | Expert Québec",
  metaDescription: "Experts vibe coding à Laval. Lovable, Bolt, Cursor, Claude Code, v0, Windsurf, Replit. Accompagnement, maintenance, formation.",
  keywords: ["vibe coding laval", "cms ia montréal", "lovable expert québec", "cursor ai canada", "bolt.new agence", "développement ia"],
  relatedServices: ["conception-web", "developpement-saas", "intelligence-artificielle", "sites-immersifs-3d", "odoo"],
  relatedSectors: ["ecommerce-en-ligne", "education-formation", "services-professionnels"],
  relatedBlogCategories: ["vibe-coding", "conception-web", "intelligence-artificielle"],
  pricingLink: "/tarifs/vibe-coding/",
  stripeLinks: [],
  subServices: ["lovable", "bolt-new", "cursor-ai", "claude-code", "v0-vercel", "windsurf", "replit", "accompagnement-vibe-coding", "maintenance-app-vibe-coding", "formation-vibe-coding", "audit-code-ia", "migration-vibe-code-production"],
};

const vibeCodingSubs: ServiceData[] = [
  {
    slug: "lovable",
    name: "Lovable",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Heart",
    shortDescription: "Expert Lovable : créez des apps complètes par chat. Supabase backend, déploiement Vercel.",
    metaTitle: "Expert Lovable à Laval | Apps IA | LANNKIN",
    metaDescription: "Expert Lovable à Laval. Création d'apps sans code par IA. Configuration, personnalisation, intégration API et déploiement.",
    keywords: ["expert lovable", "agence lovable québec", "lovable développeur canada", "lovable app builder", "lovable supabase"],
    relatedServices: ["bolt-new", "cursor-ai", "accompagnement-vibe-coding", "conception-web", "developpement-saas"],
    relatedSectors: ["ecommerce-en-ligne", "services-professionnels", "education-formation"],
    relatedBlogCategories: ["vibe-coding", "intelligence-artificielle"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "bolt-new",
    name: "Bolt.new",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Zap",
    shortDescription: "Prototypage ultra-rapide avec Bolt.new. Node.js in-browser, déploiement Netlify instantané.",
    metaTitle: "Expert Bolt.new | Prototypage IA | LANNKIN",
    metaDescription: "Expert Bolt.new à Laval. Prototypage rapide d'applications IA. Hackathons, MVPs, business apps. Accompagnement expert.",
    keywords: ["bolt new développeur", "bolt.new agence", "prototypage ia laval", "bolt new expert", "bolt new canada"],
    relatedServices: ["lovable", "replit", "accompagnement-vibe-coding", "developpement-saas", "conception-web"],
    relatedSectors: ["ecommerce-en-ligne", "education-formation"],
    relatedBlogCategories: ["vibe-coding"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "cursor-ai",
    name: "Cursor AI",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "MousePointer",
    shortDescription: "IDE augmenté par IA pour développeurs pro. Multi-model, tab autocomplete, agent mode.",
    metaTitle: "Expert Cursor AI | IDE IA | LANNKIN Laval",
    metaDescription: "Expert Cursor AI à Laval. IDE augmenté par IA pour développeurs. Setup, configuration, optimisation workflow.",
    keywords: ["cursor ai expert", "cursor ide québec", "cursor ai développeur", "ide ia canada", "cursor ai agence"],
    relatedServices: ["claude-code", "v0-vercel", "windsurf", "developpement-saas", "intelligence-artificielle"],
    relatedSectors: ["services-professionnels", "education-formation"],
    relatedBlogCategories: ["vibe-coding", "intelligence-artificielle"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Terminal",
    shortDescription: "Agent terminal IA d'Anthropic. 93% de réussite benchmarks. Refactoring complexe, gros codebases.",
    metaTitle: "Expert Claude Code | Agent IA | LANNKIN",
    metaDescription: "Expert Claude Code à Laval. Agent terminal IA d'Anthropic pour refactoring, gros codebases. Deep reasoning.",
    keywords: ["claude code expert", "claude code agence", "anthropic claude québec", "agent ia terminal", "claude code canada"],
    relatedServices: ["cursor-ai", "windsurf", "intelligence-artificielle", "developpement-saas"],
    relatedSectors: ["services-professionnels"],
    relatedBlogCategories: ["vibe-coding", "intelligence-artificielle"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "v0-vercel",
    name: "v0 by Vercel",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Component",
    shortDescription: "Générateur de composants React/Next.js par IA. Templates, intégration Vercel native.",
    metaTitle: "Expert v0 Vercel | Composants React IA | LANNKIN",
    metaDescription: "Expert v0 by Vercel. Génération de composants React et Next.js par IA. Templates et déploiement Vercel.",
    keywords: ["v0 vercel expert", "v0 développeur", "v0 react québec", "vercel agence canada", "composants ia"],
    relatedServices: ["cursor-ai", "site-nextjs", "conception-web", "lovable"],
    relatedSectors: ["ecommerce-en-ligne", "services-professionnels"],
    relatedBlogCategories: ["vibe-coding", "conception-web"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Wind",
    shortDescription: "IDE IA avec agent autonome. Tests automatiques, auto-fix, pair programming IA.",
    metaTitle: "Expert Windsurf IDE IA | LANNKIN Laval",
    metaDescription: "Expert Windsurf à Laval. IDE avec agent IA autonome. Tests automatiques et corrections intelligentes.",
    keywords: ["windsurf ide", "windsurf expert", "windsurf ia québec", "ide agent autonome", "windsurf canada"],
    relatedServices: ["cursor-ai", "claude-code", "developpement-saas", "accompagnement-vibe-coding"],
    relatedSectors: ["services-professionnels"],
    relatedBlogCategories: ["vibe-coding"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "replit",
    name: "Replit",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Cloud",
    shortDescription: "IDE cloud avec agents IA autonomes. Collaboration, éducation, prototypage rapide.",
    metaTitle: "Expert Replit | Dev Full-Stack IA | LANNKIN",
    metaDescription: "Expert Replit à Laval. IDE cloud avec agents IA autonomes. Collaboration, prototypage rapide, formation.",
    keywords: ["replit expert", "replit agence", "replit québec", "ide cloud ia", "replit agent canada"],
    relatedServices: ["bolt-new", "lovable", "formation-vibe-coding", "accompagnement-vibe-coding"],
    relatedSectors: ["education-formation", "services-professionnels"],
    relatedBlogCategories: ["vibe-coding"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "accompagnement-vibe-coding",
    name: "Accompagnement Vibe Coding",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Users",
    shortDescription: "Accompagnement sur mesure pour vos projets vibe coding. Audit, debug, optimisation, déploiement.",
    metaTitle: "Accompagnement Vibe Coding | Expert Laval",
    metaDescription: "Accompagnement vibe coding sur mesure à Laval. Debug, optimisation, déploiement. Experts Lovable, Bolt, Cursor.",
    keywords: ["accompagnement vibe coding", "expert vibe coding québec", "consultant ia développement", "aide lovable bolt cursor"],
    relatedServices: ["lovable", "bolt-new", "cursor-ai", "audit-code-ia", "maintenance-app-vibe-coding"],
    relatedSectors: ["services-professionnels", "ecommerce-en-ligne"],
    relatedBlogCategories: ["vibe-coding"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "maintenance-app-vibe-coding",
    name: "Maintenance App Vibe Coding",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "Wrench",
    shortDescription: "Maintenance continue pour apps construites avec Lovable, Bolt, Cursor. Mises à jour, bugs, sécurité.",
    metaTitle: "Maintenance App Vibe Coding | LANNKIN",
    metaDescription: "Maintenance d'applications vibe coding. Mises à jour, corrections bugs, optimisation performances et sécurité.",
    keywords: ["maintenance app ia", "maintenance lovable", "support bolt.new", "maintenance vibe coding", "support application ia"],
    relatedServices: ["accompagnement-vibe-coding", "audit-code-ia", "migration-vibe-code-production", "refonte-site-web"],
    relatedSectors: ["services-professionnels", "ecommerce-en-ligne"],
    relatedBlogCategories: ["vibe-coding"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "formation-vibe-coding",
    name: "Formation Vibe Coding",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "GraduationCap",
    shortDescription: "Formations Lovable, Cursor, Bolt pour entrepreneurs et équipes. Présentiel Laval ou visio.",
    metaTitle: "Formation Vibe Coding Laval | LANNKIN",
    metaDescription: "Formation vibe coding à Laval. Apprenez Lovable, Cursor, Bolt. Entrepreneurs et équipes. Présentiel ou visio.",
    keywords: ["formation vibe coding", "formation lovable québec", "formation cursor ai", "cours ia développement", "formation bolt new"],
    relatedServices: ["lovable", "cursor-ai", "bolt-new", "accompagnement-vibe-coding"],
    relatedSectors: ["education-formation", "services-professionnels"],
    relatedBlogCategories: ["vibe-coding", "intelligence-artificielle"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "audit-code-ia",
    name: "Audit Code IA",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "ShieldCheck",
    shortDescription: "Audit de code généré par IA : sécurité, qualité, performance. Le code IA a 2.74x plus de vulnérabilités.",
    metaTitle: "Audit Code IA | Sécurité & Qualité | LANNKIN",
    metaDescription: "Audit de code généré par IA. Revue sécurité, tests performance, recommandations. Le code IA a 1.7x plus de bugs.",
    keywords: ["audit code ia", "sécurité code ia", "qualité code lovable", "audit vibe coding", "revue code ia"],
    relatedServices: ["accompagnement-vibe-coding", "migration-vibe-code-production", "maintenance-app-vibe-coding"],
    relatedSectors: ["services-professionnels"],
    relatedBlogCategories: ["vibe-coding", "intelligence-artificielle"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
  {
    slug: "migration-vibe-code-production",
    name: "Migration Vibe Code → Production",
    category: "web",
    parentSlug: "vibe-coding",
    icon: "ArrowUpRight",
    shortDescription: "Migration de prototypes Lovable/Bolt vers stack production : Next.js, tests, CI/CD, monitoring, scaling.",
    metaTitle: "Migration App IA → Production | LANNKIN",
    metaDescription: "Migration de prototypes vibe coding vers production. Next.js, tests, CI/CD, monitoring. Stack robuste et scalable.",
    keywords: ["migration lovable production", "migration bolt next.js", "prototype vers production", "scaling app ia", "migration vibe coding"],
    relatedServices: ["site-nextjs", "developpement-saas", "audit-code-ia", "accompagnement-vibe-coding"],
    relatedSectors: ["ecommerce-en-ligne", "services-professionnels"],
    relatedBlogCategories: ["vibe-coding", "conception-web"],
    pricingLink: "/tarifs/vibe-coding/",
    stripeLinks: [],
  },
];

// ============================================================
// 3. ODOO
// ============================================================

const odoo: ServiceData = {
  slug: "odoo",
  name: "Odoo",
  category: "web",
  parentSlug: null,
  icon: "Blocks",
  shortDescription: "Intégrateur Odoo au Québec : site web, ERP, CRM, e-commerce. Écosystème tout-en-un pour PME.",
  metaTitle: "Expert Odoo Laval & Montréal | ERP CRM | LANNKIN",
  metaDescription: "Intégrateur Odoo à Laval. Site web, ERP, CRM, e-commerce tout-en-un. Configuration, migration, formation. Devis gratuit.",
  keywords: ["odoo laval", "intégrateur odoo montréal", "odoo québec", "erp odoo canada", "odoo pme", "agence odoo"],
  relatedServices: ["conception-web", "seo", "lead-generation", "vibe-coding", "graphisme"],
  relatedSectors: ["commerce-detail", "services-professionnels", "construction-renovation"],
  relatedBlogCategories: ["odoo", "conception-web"],
  pricingLink: "/tarifs/odoo/",
  stripeLinks: [],
  subServices: ["creation-site-odoo", "odoo-erp-integration", "odoo-crm", "odoo-ecommerce", "referencement-seo-odoo", "maintenance-odoo", "migration-odoo", "formation-odoo"],
};

const odooSubs: ServiceData[] = [
  {
    slug: "creation-site-odoo",
    name: "Création Site Odoo",
    category: "web",
    parentSlug: "odoo",
    icon: "Globe",
    shortDescription: "Site web Odoo connecté à votre ERP. CMS intégré, CRM, facturation et inventaire.",
    metaTitle: "Création Site Web Odoo à Laval | LANNKIN",
    metaDescription: "Création de site web Odoo à Laval. CMS connecté ERP, CRM et facturation. Design responsive et SEO-friendly.",
    keywords: ["création site odoo", "odoo website laval", "agence odoo québec", "site web odoo", "odoo cms"],
    relatedServices: ["conception-web", "odoo-erp-integration", "referencement-seo-odoo", "graphisme"],
    relatedSectors: ["commerce-detail", "services-professionnels"],
    relatedBlogCategories: ["odoo", "conception-web"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
  {
    slug: "odoo-erp-integration",
    name: "Odoo ERP Intégration",
    category: "web",
    parentSlug: "odoo",
    icon: "Settings",
    shortDescription: "Intégration ERP Odoo complète : ventes, achats, inventaire, facturation, comptabilité, RH.",
    metaTitle: "Intégration Odoo ERP pour PME | LANNKIN",
    metaDescription: "Intégration Odoo ERP à Laval. Ventes, achats, inventaire, facturation, comptabilité, RH. Audit et formation inclus.",
    keywords: ["odoo erp intégration", "erp pme québec", "odoo erp laval", "intégrateur erp montréal", "odoo modules"],
    relatedServices: ["odoo-crm", "odoo-ecommerce", "maintenance-odoo", "formation-odoo"],
    relatedSectors: ["commerce-detail", "construction-renovation", "services-professionnels"],
    relatedBlogCategories: ["odoo"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
  {
    slug: "odoo-crm",
    name: "Odoo CRM",
    category: "web",
    parentSlug: "odoo",
    icon: "UserCheck",
    shortDescription: "CRM Odoo : pipeline visuel, lead scoring, automatisation emails, intégration ERP complète.",
    metaTitle: "CRM Odoo | Gestion Client | LANNKIN Laval",
    metaDescription: "CRM Odoo à Laval. Pipeline visuel, lead scoring, automatisation. Intégré à votre ERP. Alternative HubSpot/Salesforce.",
    keywords: ["odoo crm", "crm odoo laval", "crm pme québec", "odoo pipeline ventes", "crm erp intégré"],
    relatedServices: ["odoo-erp-integration", "lead-generation", "intelligence-artificielle", "crm-integration"],
    relatedSectors: ["services-professionnels", "immobilier", "commerce-detail"],
    relatedBlogCategories: ["odoo"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
  {
    slug: "odoo-ecommerce",
    name: "Odoo E-commerce",
    category: "web",
    parentSlug: "odoo",
    icon: "ShoppingCart",
    shortDescription: "Boutique e-commerce Odoo connectée inventaire, facturation et livraison. Tout-en-un.",
    metaTitle: "E-commerce Odoo | Boutique Connectée ERP",
    metaDescription: "Boutique e-commerce Odoo à Laval. Connectée inventaire, facturation, livraison. Alternative Shopify tout-en-un.",
    keywords: ["odoo ecommerce", "boutique odoo", "odoo e-commerce québec", "odoo vs shopify", "ecommerce erp"],
    relatedServices: ["site-shopify", "odoo-erp-integration", "seo", "google-ads"],
    relatedSectors: ["commerce-detail", "ecommerce-en-ligne"],
    relatedBlogCategories: ["odoo", "ecommerce"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
  {
    slug: "referencement-seo-odoo",
    name: "Référencement SEO Odoo",
    category: "seo",
    parentSlug: "odoo",
    icon: "TrendingUp",
    shortDescription: "SEO spécialisé pour sites Odoo. Optimisation URLs, meta, vitesse, structured data.",
    metaTitle: "SEO Odoo | Référencement Site Odoo | LANNKIN",
    metaDescription: "SEO spécialisé Odoo à Laval. Optimisation URLs, meta tags, vitesse, structured data. Dépassez les limites SEO d'Odoo.",
    keywords: ["seo odoo", "référencement site odoo", "odoo seo québec", "optimisation odoo", "seo erp"],
    relatedServices: ["seo", "audit-seo", "seo-technique", "creation-site-odoo"],
    relatedSectors: ["commerce-detail", "services-professionnels"],
    relatedBlogCategories: ["odoo", "seo"],
    pricingLink: "/tarifs/seo/",
    stripeLinks: [],
  },
  {
    slug: "maintenance-odoo",
    name: "Maintenance Odoo",
    category: "web",
    parentSlug: "odoo",
    icon: "Wrench",
    shortDescription: "Maintenance préventive Odoo : mises à jour, support technique, monitoring, sauvegardes.",
    metaTitle: "Maintenance Odoo | Support & MAJ | LANNKIN",
    metaDescription: "Maintenance Odoo à Laval. Mises à jour, support technique, monitoring et sauvegardes. À partir de 199$/mois.",
    keywords: ["maintenance odoo", "support odoo québec", "odoo maintenance laval", "mise à jour odoo", "support technique erp"],
    relatedServices: ["odoo-erp-integration", "formation-odoo", "migration-odoo"],
    relatedSectors: ["commerce-detail", "services-professionnels"],
    relatedBlogCategories: ["odoo"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
  {
    slug: "migration-odoo",
    name: "Migration Odoo",
    category: "web",
    parentSlug: "odoo",
    icon: "ArrowRightLeft",
    shortDescription: "Migration vers Odoo depuis WordPress, Shopify ou ERP legacy. Données sécurisées, zéro interruption.",
    metaTitle: "Migration vers Odoo | WordPress → Odoo | LANNKIN",
    metaDescription: "Migration vers Odoo à Laval. Depuis WordPress, Shopify, ERP legacy. Mapping données, tests, go-live sans interruption.",
    keywords: ["migration odoo", "wordpress vers odoo", "migration erp québec", "shopify vers odoo", "migration données odoo"],
    relatedServices: ["odoo-erp-integration", "creation-site-odoo", "maintenance-odoo"],
    relatedSectors: ["commerce-detail", "services-professionnels"],
    relatedBlogCategories: ["odoo"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
  {
    slug: "formation-odoo",
    name: "Formation Odoo",
    category: "web",
    parentSlug: "odoo",
    icon: "GraduationCap",
    shortDescription: "Formations Odoo : admin, utilisateurs, développeurs. Présentiel Laval ou visio.",
    metaTitle: "Formation Odoo Entreprises | LANNKIN Laval",
    metaDescription: "Formation Odoo à Laval. Admin, utilisateurs, développeurs. Modules personnalisés. Présentiel ou visio. 600$.",
    keywords: ["formation odoo", "formation odoo québec", "cours odoo laval", "formation erp montréal", "apprentissage odoo"],
    relatedServices: ["odoo-erp-integration", "odoo-crm", "maintenance-odoo"],
    relatedSectors: ["education-formation", "services-professionnels"],
    relatedBlogCategories: ["odoo"],
    pricingLink: "/tarifs/odoo/",
    stripeLinks: [],
  },
];

// ============================================================
// 4. GOOGLE ADS
// ============================================================

const googleAds: ServiceData = {
  slug: "google-ads",
  name: "Google Ads",
  category: "paid-media",
  parentSlug: null,
  icon: "Target",
  shortDescription: "Campagnes Google Ads certifié Google Partner. Search, Display, Shopping, YouTube, PMax, Maps. +100K$/mois géré.",
  metaTitle: "Agence Google Ads Laval & Montréal | LANNKIN",
  metaDescription: "Agence Google Ads certifiée Google Partner à Laval. Search, Display, Shopping, YouTube, PMax. +100K$/mois de budget géré.",
  keywords: ["google ads laval", "agence google ads montréal", "google ads québec", "sem laval", "ppc montréal", "adwords agence"],
  relatedServices: ["facebook-ads", "seo", "bing-ads", "native-ads", "lead-generation", "google-my-business"],
  relatedSectors: ["immobilier", "sante-clinique", "construction-renovation", "automobile"],
  relatedBlogCategories: ["google-ads", "marketing-digital"],
  pricingLink: "/tarifs/google-ads/",
  stripeLinks: [],
  subServices: ["campagne-search", "campagne-display", "campagne-shopping", "campagne-youtube", "campagne-discovery", "campagne-performance-max", "campagne-google-maps", "audit-google-ads", "installation-tracking", "remarketing-google"],
};

const googleAdsSubs: ServiceData[] = [
  { slug: "campagne-search", name: "Campagne Search", category: "paid-media", parentSlug: "google-ads", icon: "Search", shortDescription: "Annonces textuelles Search sur Google. Captez l'intention de recherche au bon moment.", metaTitle: "Google Ads Search Laval | Campagne PPC", metaDescription: "Campagnes Google Search Ads à Laval. Annonces textuelles ciblées par mots-clés. CTR optimisé, CPA maîtrisé. Google Partner.", keywords: ["google search ads laval", "campagne search montréal", "annonces google québec", "ppc search", "sem search"], relatedServices: ["campagne-display", "campagne-shopping", "seo", "remarketing-google", "bing-ads"], relatedSectors: ["immobilier", "sante-clinique", "services-professionnels"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "campagne-display", name: "Campagne Display", category: "paid-media", parentSlug: "google-ads", icon: "Image", shortDescription: "Bannières visuelles sur le réseau Display Google. Notoriété et retargeting à grande échelle.", metaTitle: "Google Display Ads Laval | Bannières Pub", metaDescription: "Campagnes Google Display à Laval. Bannières visuelles sur 2M+ de sites. Notoriété, retargeting. Google Partner certifié.", keywords: ["google display laval", "bannière publicitaire montréal", "display ads québec", "réseau display", "publicité visuelle"], relatedServices: ["campagne-search", "remarketing-google", "facebook-ads", "native-ads"], relatedSectors: ["commerce-detail", "tourisme-hotellerie", "beaute-esthetique"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "campagne-shopping", name: "Campagne Shopping", category: "paid-media", parentSlug: "google-ads", icon: "ShoppingBag", shortDescription: "Google Shopping pour e-commerce. Photos produits, prix et avis directement dans les résultats.", metaTitle: "Google Shopping Ads Laval | E-commerce", metaDescription: "Campagnes Google Shopping à Laval. Photos produits dans les résultats Google. Flux produits optimisé. ROAS garanti.", keywords: ["google shopping laval", "shopping ads montréal", "publicité e-commerce québec", "flux produits google", "pla ads"], relatedServices: ["campagne-performance-max", "campagne-search", "amazon-ads", "site-shopify"], relatedSectors: ["commerce-detail", "ecommerce-en-ligne"], relatedBlogCategories: ["google-ads", "ecommerce"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "campagne-youtube", name: "Campagne YouTube", category: "paid-media", parentSlug: "google-ads", icon: "Play", shortDescription: "Publicités vidéo YouTube. Pre-roll, in-stream, bumper ads. Ciblage par audience et intention.", metaTitle: "YouTube Ads Laval & Montréal | Vidéo Pub", metaDescription: "Campagnes YouTube Ads à Laval. Publicités vidéo pre-roll, in-stream, bumper. Ciblage précis par audience.", keywords: ["youtube ads laval", "publicité youtube montréal", "vidéo ads québec", "youtube advertising", "pre-roll ads"], relatedServices: ["campagne-display", "campagne-discovery", "facebook-ads", "tiktok-ads"], relatedSectors: ["tourisme-hotellerie", "beaute-esthetique", "automobile"], relatedBlogCategories: ["google-ads", "reseaux-sociaux"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "campagne-discovery", name: "Campagne Discovery", category: "paid-media", parentSlug: "google-ads", icon: "Compass", shortDescription: "Annonces Discovery sur Gmail, YouTube et Discover. Format natif, audience en phase de découverte.", metaTitle: "Google Discovery Ads | LANNKIN Laval", metaDescription: "Campagnes Discovery Ads à Laval. Annonces natives sur Gmail, YouTube, Discover. Audiences en phase de découverte.", keywords: ["discovery ads laval", "google discovery montréal", "annonces discover", "gmail ads québec"], relatedServices: ["campagne-display", "campagne-youtube", "native-ads"], relatedSectors: ["tourisme-hotellerie", "commerce-detail"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "campagne-performance-max", name: "Campagne Performance Max", category: "paid-media", parentSlug: "google-ads", icon: "Rocket", shortDescription: "Performance Max : une campagne, tous les canaux Google. IA optimise en temps réel.", metaTitle: "Performance Max Ads Laval | PMax Expert", metaDescription: "Campagnes Performance Max à Laval. Tous les canaux Google en une campagne. Optimisation IA en temps réel.", keywords: ["performance max laval", "pmax montréal", "performance max québec", "campagne pmax", "google pmax expert"], relatedServices: ["campagne-search", "campagne-shopping", "campagne-youtube", "campagne-display"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail", "automobile"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "campagne-google-maps", name: "Campagne Google Maps", category: "paid-media", parentSlug: "google-ads", icon: "MapPin", shortDescription: "Publicités Google Maps et Local Ads. Attirez les clients à proximité de votre commerce.", metaTitle: "Google Maps Ads Laval | Local Ads Expert", metaDescription: "Campagnes Google Maps à Laval. Publicités locales pour drive-to-store. Attirez les clients proches de chez vous.", keywords: ["google maps ads laval", "publicité locale montréal", "local ads québec", "drive to store", "google local"], relatedServices: ["google-my-business", "waze-ads", "seo", "campagne-search"], relatedSectors: ["restaurant-restauration", "commerce-detail", "beaute-esthetique", "automobile"], relatedBlogCategories: ["google-ads", "google-my-business"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "audit-google-ads", name: "Audit Google Ads", category: "paid-media", parentSlug: "google-ads", icon: "ClipboardCheck", shortDescription: "Audit complet de vos campagnes Google Ads. Identifiez les fuites de budget et optimisez le ROAS.", metaTitle: "Audit Google Ads Gratuit | LANNKIN Laval", metaDescription: "Audit Google Ads gratuit à Laval. Analyse de vos campagnes, fuites de budget, recommandations d'optimisation ROAS.", keywords: ["audit google ads", "audit sem laval", "analyse google ads", "optimisation google ads montréal", "audit ppc"], relatedServices: ["campagne-search", "installation-tracking", "remarketing-google", "seo"], relatedSectors: ["services-professionnels", "immobilier", "sante-clinique"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "installation-tracking", name: "Installation Tracking", category: "paid-media", parentSlug: "google-ads", icon: "BarChart3", shortDescription: "Installation Google Tag Manager, GA4, conversions Google Ads. Tracking précis de chaque action.", metaTitle: "Installation Tracking GTM GA4 | LANNKIN", metaDescription: "Installation tracking à Laval. GTM, GA4, conversions Google Ads. Suivi précis de chaque conversion. 250$ one-shot.", keywords: ["installation tracking", "gtm laval", "google tag manager montréal", "ga4 installation", "conversion tracking"], relatedServices: ["audit-google-ads", "campagne-search", "installation-pixel-facebook"], relatedSectors: ["services-professionnels", "ecommerce-en-ligne"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
  { slug: "remarketing-google", name: "Remarketing Google", category: "paid-media", parentSlug: "google-ads", icon: "RotateCcw", shortDescription: "Remarketing Google Ads pour reconvertir vos visiteurs. Audiences personnalisées et dynamiques.", metaTitle: "Remarketing Google Ads Laval | Retargeting", metaDescription: "Remarketing Google Ads à Laval. Reconvertissez vos visiteurs. Audiences personnalisées et annonces dynamiques.", keywords: ["remarketing google laval", "retargeting google ads", "remarketing montréal", "rlsa québec", "audiences remarketing"], relatedServices: ["campagne-display", "campagne-search", "retargeting-facebook", "installation-tracking"], relatedSectors: ["ecommerce-en-ligne", "services-professionnels"], relatedBlogCategories: ["google-ads"], pricingLink: "/tarifs/google-ads/", stripeLinks: [] },
];

// ============================================================
// 5. FACEBOOK / META ADS
// ============================================================

const facebookAds: ServiceData = {
  slug: "facebook-ads",
  name: "Facebook / Meta Ads",
  category: "paid-media",
  parentSlug: null,
  icon: "Share2",
  shortDescription: "Campagnes Facebook et Instagram Ads. Certifié Meta Partner. Ciblage avancé et retargeting.",
  metaTitle: "Agence Facebook Ads Laval | Meta Partner",
  metaDescription: "Agence Facebook Ads certifiée Meta Partner à Laval. Campagnes Facebook, Instagram, Messenger. Ciblage avancé et ROAS.",
  keywords: ["facebook ads laval", "agence facebook ads montréal", "instagram ads québec", "meta ads", "publicité facebook", "agence meta"],
  relatedServices: ["google-ads", "tiktok-ads", "linkedin-ads", "lead-generation", "graphisme"],
  relatedSectors: ["beaute-esthetique", "restaurant-restauration", "commerce-detail", "tourisme-hotellerie"],
  relatedBlogCategories: ["facebook-ads", "reseaux-sociaux"],
  pricingLink: "/tarifs/facebook-ads/",
  stripeLinks: [],
  subServices: ["campagne-facebook", "campagne-instagram", "installation-pixel-facebook", "creation-page-professionnelle", "retargeting-facebook", "publicite-messenger", "campagne-meta-advantage"],
};

const facebookAdsSubs: ServiceData[] = [
  { slug: "campagne-facebook", name: "Campagne Facebook", category: "paid-media", parentSlug: "facebook-ads", icon: "ThumbsUp", shortDescription: "Publicités Facebook : lead gen, trafic, conversions. Ciblage démographique et comportemental.", metaTitle: "Publicité Facebook Laval | Meta Partner", metaDescription: "Campagnes publicitaires Facebook à Laval. Lead gen, trafic, conversions. Ciblage précis. Meta Partner certifié.", keywords: ["publicité facebook laval", "facebook ads montréal", "campagne facebook québec", "pub facebook"], relatedServices: ["campagne-instagram", "retargeting-facebook", "google-ads", "lead-generation"], relatedSectors: ["beaute-esthetique", "restaurant-restauration", "commerce-detail"], relatedBlogCategories: ["facebook-ads"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
  { slug: "campagne-instagram", name: "Campagne Instagram", category: "paid-media", parentSlug: "facebook-ads", icon: "Camera", shortDescription: "Publicités Instagram : stories, reels, feed, explore. Visuels impactants pour conversions.", metaTitle: "Publicité Instagram Laval | Reels & Stories", metaDescription: "Campagnes Instagram Ads à Laval. Stories, Reels, feed, explore. Visuels créatifs pour engagement et conversions.", keywords: ["instagram ads laval", "publicité instagram montréal", "reels ads québec", "stories instagram pub"], relatedServices: ["campagne-facebook", "tiktok-ads", "graphisme", "retargeting-facebook"], relatedSectors: ["beaute-esthetique", "restaurant-restauration", "tourisme-hotellerie"], relatedBlogCategories: ["facebook-ads", "reseaux-sociaux"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
  { slug: "installation-pixel-facebook", name: "Installation Pixel Facebook", category: "paid-media", parentSlug: "facebook-ads", icon: "Code", shortDescription: "Installation Pixel Meta et API Conversions. Suivi précis pour optimisation des campagnes.", metaTitle: "Installation Pixel Facebook | LANNKIN", metaDescription: "Installation Pixel Meta et API Conversions à Laval. Suivi précis de chaque conversion Facebook et Instagram. 250$.", keywords: ["pixel facebook", "installation pixel meta", "api conversions facebook", "capi meta", "pixel meta laval"], relatedServices: ["campagne-facebook", "installation-tracking", "retargeting-facebook"], relatedSectors: ["ecommerce-en-ligne"], relatedBlogCategories: ["facebook-ads"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
  { slug: "creation-page-professionnelle", name: "Création Page Professionnelle", category: "paid-media", parentSlug: "facebook-ads", icon: "UserPlus", shortDescription: "Création et optimisation de page Facebook professionnelle. Branding, contenu et stratégie.", metaTitle: "Création Page Facebook Pro | LANNKIN Laval", metaDescription: "Création de page Facebook professionnelle à Laval. Branding, couverture, contenu, stratégie. 199$ one-shot.", keywords: ["création page facebook", "page facebook pro laval", "page entreprise facebook", "facebook business"], relatedServices: ["campagne-facebook", "graphisme", "google-my-business"], relatedSectors: ["restaurant-restauration", "beaute-esthetique", "commerce-detail"], relatedBlogCategories: ["facebook-ads", "reseaux-sociaux"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
  { slug: "retargeting-facebook", name: "Retargeting Facebook", category: "paid-media", parentSlug: "facebook-ads", icon: "RotateCcw", shortDescription: "Retargeting Facebook et Instagram. Audiences personnalisées, lookalike, catalogue dynamique.", metaTitle: "Retargeting Facebook Laval | Remarketing", metaDescription: "Retargeting Facebook à Laval. Audiences personnalisées, lookalike et catalogue dynamique. Reconvertissez vos visiteurs.", keywords: ["retargeting facebook laval", "remarketing instagram", "audiences lookalike", "facebook retargeting"], relatedServices: ["campagne-facebook", "installation-pixel-facebook", "remarketing-google"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail"], relatedBlogCategories: ["facebook-ads"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
  { slug: "publicite-messenger", name: "Publicité Messenger", category: "paid-media", parentSlug: "facebook-ads", icon: "MessageCircle", shortDescription: "Publicités Messenger : conversations automatisées, lead gen et support client via chatbot.", metaTitle: "Pub Messenger Laval | Chatbot Facebook", metaDescription: "Publicité Messenger à Laval. Conversations automatisées, lead gen et chatbot. Engagement direct avec vos prospects.", keywords: ["publicité messenger", "messenger ads laval", "chatbot facebook", "pub messenger québec"], relatedServices: ["campagne-facebook", "intelligence-artificielle", "lead-generation"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["facebook-ads"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
  { slug: "campagne-meta-advantage", name: "Campagne Meta Advantage+", category: "paid-media", parentSlug: "facebook-ads", icon: "Cpu", shortDescription: "Meta Advantage+ : campagnes automatisées par IA. Shopping, App, Audiences élargies.", metaTitle: "Meta Advantage+ Ads | Expert LANNKIN", metaDescription: "Campagnes Meta Advantage+ à Laval. Automatisation IA pour Shopping, App et audiences. Optimisation ROAS maximale.", keywords: ["meta advantage", "advantage+ ads", "meta advantage laval", "facebook advantage shopping"], relatedServices: ["campagne-facebook", "campagne-instagram", "campagne-performance-max"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail"], relatedBlogCategories: ["facebook-ads"], pricingLink: "/tarifs/facebook-ads/", stripeLinks: [] },
];

// ============================================================
// 6-9. SMA : TIKTOK, LINKEDIN, SNAPCHAT, PINTEREST
// ============================================================

const tiktokAds: ServiceData = {
  slug: "tiktok-ads", name: "TikTok Ads", category: "paid-media", parentSlug: null, icon: "Music",
  shortDescription: "Campagnes TikTok Ads. Touchez une audience jeune et engagée avec du contenu vidéo viral.",
  metaTitle: "Agence TikTok Ads Laval & Montréal", metaDescription: "Agence TikTok Ads à Laval. Campagnes vidéo virales pour audience jeune et engagée. CPC compétitif. 500$/mois.",
  keywords: ["tiktok ads laval", "publicité tiktok montréal", "agence tiktok québec", "tiktok marketing", "pub tiktok"],
  relatedServices: ["facebook-ads", "snapchat-ads", "google-ads", "lead-generation", "graphisme"],
  relatedSectors: ["beaute-esthetique", "restaurant-restauration", "commerce-detail", "tourisme-hotellerie"],
  relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [],
  subServices: ["campagne-tiktok"],
};

const tiktokAdsSubs: ServiceData[] = [
  { slug: "campagne-tiktok", name: "Campagne TikTok", category: "paid-media", parentSlug: "tiktok-ads", icon: "Play", shortDescription: "Création et gestion de campagnes TikTok : in-feed, branded hashtag, spark ads.", metaTitle: "Campagne TikTok Ads Laval | LANNKIN", metaDescription: "Création de campagnes TikTok Ads à Laval. In-feed, branded hashtag, spark ads. CPC 0.20-1$. Résultats garantis.", keywords: ["campagne tiktok laval", "tiktok in-feed ads", "spark ads", "tiktok pub montréal"], relatedServices: ["campagne-instagram", "campagne-snapchat", "graphisme"], relatedSectors: ["beaute-esthetique", "commerce-detail"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [] },
];

const linkedinAds: ServiceData = {
  slug: "linkedin-ads", name: "LinkedIn Ads", category: "paid-media", parentSlug: null, icon: "Briefcase",
  shortDescription: "Campagnes LinkedIn Ads B2B. Ciblage par poste, entreprise, secteur et compétences.",
  metaTitle: "Agence LinkedIn Ads Laval | B2B Expert", metaDescription: "Agence LinkedIn Ads à Laval. Campagnes B2B ciblées par poste, entreprise et secteur. Lead gen qualifié. 700$/mois.",
  keywords: ["linkedin ads laval", "publicité linkedin montréal", "linkedin b2b québec", "linkedin marketing", "linkedin lead gen"],
  relatedServices: ["google-ads", "facebook-ads", "lead-generation", "seo"],
  relatedSectors: ["services-professionnels", "education-formation", "immobilier"],
  relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [],
  subServices: ["campagne-linkedin"],
};

const linkedinAdsSubs: ServiceData[] = [
  { slug: "campagne-linkedin", name: "Campagne LinkedIn", category: "paid-media", parentSlug: "linkedin-ads", icon: "Users", shortDescription: "Sponsored content, InMail, lead gen forms LinkedIn. Ciblage B2B ultra-précis.", metaTitle: "Campagne LinkedIn Ads Laval | B2B", metaDescription: "Campagnes LinkedIn Ads à Laval. Sponsored content, InMail, lead gen forms. Ciblage B2B ultra-précis.", keywords: ["campagne linkedin laval", "linkedin sponsored content", "inmail ads", "linkedin b2b montréal"], relatedServices: ["google-ads", "lead-generation", "facebook-ads"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [] },
];

const snapchatAds: ServiceData = {
  slug: "snapchat-ads", name: "Snapchat Ads", category: "paid-media", parentSlug: null, icon: "Ghost",
  shortDescription: "Campagnes Snapchat Ads. Filtres AR, stories ads et collection ads pour audience 18-34 ans.",
  metaTitle: "Agence Snapchat Ads Laval | AR & Stories", metaDescription: "Agence Snapchat Ads à Laval. Filtres AR, stories ads, collection ads. Audience 18-34 ans. 700$/mois.",
  keywords: ["snapchat ads laval", "publicité snapchat montréal", "snapchat marketing québec", "filtres ar snap"],
  relatedServices: ["tiktok-ads", "facebook-ads", "google-ads", "lead-generation"],
  relatedSectors: ["beaute-esthetique", "restaurant-restauration", "commerce-detail"],
  relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [],
  subServices: ["campagne-snapchat"],
};

const snapchatAdsSubs: ServiceData[] = [
  { slug: "campagne-snapchat", name: "Campagne Snapchat", category: "paid-media", parentSlug: "snapchat-ads", icon: "Camera", shortDescription: "Snap ads, collection ads, filtres AR sponsorisés. Engagement audience jeune.", metaTitle: "Campagne Snapchat Ads Laval | LANNKIN", metaDescription: "Campagnes Snapchat Ads à Laval. Snap ads, collection ads, filtres AR. Audience jeune et engagée.", keywords: ["campagne snapchat laval", "snap ads montréal", "filtre ar sponsorisé", "snapchat pub"], relatedServices: ["campagne-tiktok", "campagne-instagram"], relatedSectors: ["beaute-esthetique", "commerce-detail"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [] },
];

const pinterestAds: ServiceData = {
  slug: "pinterest-ads", name: "Pinterest Ads", category: "paid-media", parentSlug: null, icon: "Pin",
  shortDescription: "Campagnes Pinterest Ads. Épingles sponsorisées pour trafic qualifié en phase d'inspiration.",
  metaTitle: "Agence Pinterest Ads Laval | LANNKIN", metaDescription: "Agence Pinterest Ads à Laval. Épingles sponsorisées, Shopping ads. Trafic qualifié en phase d'inspiration. 700$/mois.",
  keywords: ["pinterest ads laval", "publicité pinterest montréal", "pinterest marketing québec", "épingles sponsorisées"],
  relatedServices: ["facebook-ads", "google-ads", "graphisme", "lead-generation"],
  relatedSectors: ["beaute-esthetique", "commerce-detail", "tourisme-hotellerie"],
  relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [],
  subServices: ["campagne-pinterest"],
};

const pinterestAdsSubs: ServiceData[] = [
  { slug: "campagne-pinterest", name: "Campagne Pinterest", category: "paid-media", parentSlug: "pinterest-ads", icon: "Image", shortDescription: "Épingles sponsorisées, shopping pins et vidéo pins. Audience en phase d'achat.", metaTitle: "Campagne Pinterest Ads Laval | LANNKIN", metaDescription: "Campagnes Pinterest Ads à Laval. Épingles sponsorisées, shopping pins. Audience en phase d'achat et d'inspiration.", keywords: ["campagne pinterest laval", "shopping pins", "pinterest ads montréal", "épingles pub"], relatedServices: ["campagne-instagram", "graphisme", "facebook-ads"], relatedSectors: ["beaute-esthetique", "commerce-detail"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/reseaux-sociaux/", stripeLinks: [] },
];

// ============================================================
// 10. NATIVE ADS
// ============================================================

const nativeAds: ServiceData = {
  slug: "native-ads", name: "Native Ads", category: "paid-media", parentSlug: null, icon: "Newspaper",
  shortDescription: "Publicité native : Taboola, Outbrain, Traffic Factory, Revcontent. CPC compétitif, volumes massifs.",
  metaTitle: "Agence Native Ads Laval | Taboola Outbrain", metaDescription: "Agence native ads à Laval. Taboola, Outbrain, Traffic Factory, Revcontent. CPC compétitif et volumes massifs.",
  keywords: ["native ads laval", "taboola montréal", "outbrain québec", "publicité native", "traffic factory canada", "native advertising"],
  relatedServices: ["google-ads", "facebook-ads", "lead-generation", "seo", "bing-ads"],
  relatedSectors: ["ecommerce-en-ligne", "services-professionnels", "tourisme-hotellerie"],
  relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [],
  subServices: ["campagne-taboola", "campagne-outbrain", "traffic-factory", "revcontent", "installation-tags-natifs", "strategie-native-advertising"],
};

const nativeAdsSubs: ServiceData[] = [
  { slug: "campagne-taboola", name: "Campagne Taboola", category: "paid-media", parentSlug: "native-ads", icon: "Newspaper", shortDescription: "Campagnes Taboola : recommandation de contenu natif sur les plus grands médias mondiaux.", metaTitle: "Campagne Taboola Laval | Native Ads", metaDescription: "Campagnes Taboola à Laval. Publicité native sur les plus grands médias. CPC compétitif et volumes massifs.", keywords: ["taboola laval", "campagne taboola montréal", "taboola ads québec", "publicité native taboola"], relatedServices: ["campagne-outbrain", "traffic-factory", "google-ads", "lead-generation"], relatedSectors: ["ecommerce-en-ligne", "services-professionnels"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [] },
  { slug: "campagne-outbrain", name: "Campagne Outbrain", category: "paid-media", parentSlug: "native-ads", icon: "ScrollText", shortDescription: "Campagnes Outbrain : ciblage contextuel avancé et audiences lookalike sur médias premium.", metaTitle: "Campagne Outbrain Laval | Ciblage Contextuel", metaDescription: "Campagnes Outbrain à Laval. Ciblage contextuel avancé, audiences lookalike. Médias premium. CPC compétitif.", keywords: ["outbrain laval", "outbrain ads montréal", "publicité outbrain québec", "ciblage contextuel natif"], relatedServices: ["campagne-taboola", "traffic-factory", "facebook-ads", "lead-generation"], relatedSectors: ["ecommerce-en-ligne", "tourisme-hotellerie"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [] },
  { slug: "traffic-factory", name: "Traffic Factory", category: "paid-media", parentSlug: "native-ads", icon: "Flame", shortDescription: "Expert Traffic Factory au Canada. Campagnes sur réseau adulte : display, native, pop-under. CPC ultra-compétitif.", metaTitle: "Expert Traffic Factory Canada | LANNKIN", metaDescription: "Expert Traffic Factory au Canada. +7 ans d'expertise. Campagnes réseau adulte : display, native, pop-under. CPC compétitif.", keywords: ["traffic factory canada", "expert traffic factory", "publicité site adulte", "native ads adulte", "traffic factory laval", "agence traffic factory"],
    relatedServices: ["campagne-taboola", "campagne-outbrain", "revcontent", "native-ads", "lead-generation"], relatedSectors: [], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [] },
  { slug: "revcontent", name: "Revcontent", category: "paid-media", parentSlug: "native-ads", icon: "FileText", shortDescription: "Campagnes Revcontent : CPC compétitif, formats natifs premium, alternative Taboola/Outbrain.", metaTitle: "Campagne Revcontent | Native Ads | LANNKIN", metaDescription: "Campagnes Revcontent à Laval. CPC compétitif, formats premium. Alternative performante à Taboola et Outbrain.", keywords: ["revcontent ads", "revcontent québec", "revcontent campagne", "native ads alternative"], relatedServices: ["campagne-taboola", "campagne-outbrain", "traffic-factory"], relatedSectors: ["ecommerce-en-ligne"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [] },
  { slug: "installation-tags-natifs", name: "Installation Tags Natifs", category: "paid-media", parentSlug: "native-ads", icon: "Code", shortDescription: "Installation des tags de conversion Taboola, Outbrain, Traffic Factory, Revcontent.", metaTitle: "Installation Tags Natifs | LANNKIN", metaDescription: "Installation tags de conversion pour Taboola, Outbrain, Traffic Factory, Revcontent. Suivi précis. 250$.", keywords: ["installation tags natifs", "tracking taboola", "tag outbrain", "conversion native ads"], relatedServices: ["installation-tracking", "campagne-taboola", "campagne-outbrain"], relatedSectors: [], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [] },
  { slug: "strategie-native-advertising", name: "Stratégie Native Advertising", category: "paid-media", parentSlug: "native-ads", icon: "Lightbulb", shortDescription: "Stratégie globale native ads : choix réseau, budget, créatifs, A/B testing, scaling.", metaTitle: "Stratégie Native Advertising | Expert Québec", metaDescription: "Stratégie native advertising à Laval. Choix réseau, budget, créatifs, A/B testing. Expert multi-plateformes.", keywords: ["stratégie native advertising", "native ads stratégie", "plan media natif", "consultant native ads"], relatedServices: ["campagne-taboola", "campagne-outbrain", "traffic-factory", "lead-generation"], relatedSectors: ["ecommerce-en-ligne", "services-professionnels"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/native-ads/", stripeLinks: [] },
];

// ============================================================
// 11. BING / MICROSOFT ADS
// ============================================================

const bingAds: ServiceData = {
  slug: "bing-ads", name: "Bing / Microsoft Ads", category: "paid-media", parentSlug: null, icon: "Search",
  shortDescription: "Campagnes Bing/Microsoft Ads. Audience Microsoft Edge, CPC souvent inférieur à Google. Certifié Microsoft Partner.",
  metaTitle: "Agence Bing Ads Laval | Microsoft Partner", metaDescription: "Agence Bing/Microsoft Ads à Laval. CPC inférieur à Google, audience qualifiée. Certifié Microsoft Advertising Partner.",
  keywords: ["bing ads laval", "microsoft ads montréal", "bing advertising québec", "alternative google ads", "microsoft partner"],
  relatedServices: ["google-ads", "native-ads", "seo", "lead-generation"],
  relatedSectors: ["services-professionnels", "immobilier", "automobile"],
  relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [],
  subServices: ["campagne-bing-search", "campagne-bing-shopping", "bing-ads-vs-google-ads"],
};

const bingAdsSubs: ServiceData[] = [
  { slug: "campagne-bing-search", name: "Campagne Bing Search", category: "paid-media", parentSlug: "bing-ads", icon: "Search", shortDescription: "Annonces Bing Search. Audience Microsoft Edge et partenaires. CPC 20-40% inférieur à Google.", metaTitle: "Bing Search Ads Laval | CPC Compétitif", metaDescription: "Campagnes Bing Search Ads à Laval. CPC 20-40% inférieur à Google. Audience Microsoft Edge qualifiée.", keywords: ["bing search ads laval", "campagne bing montréal", "bing ppc québec", "microsoft search ads"], relatedServices: ["campagne-search", "campagne-bing-shopping", "seo"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [] },
  { slug: "campagne-bing-shopping", name: "Campagne Bing Shopping", category: "paid-media", parentSlug: "bing-ads", icon: "ShoppingBag", shortDescription: "Bing Shopping Ads. Complémentaire à Google Shopping. Catalogues produits sur Bing.", metaTitle: "Bing Shopping Ads | E-commerce | LANNKIN", metaDescription: "Campagnes Bing Shopping Ads à Laval. Complémentaire Google Shopping. CPC compétitif pour votre e-commerce.", keywords: ["bing shopping ads", "microsoft shopping", "bing e-commerce", "bing product ads"], relatedServices: ["campagne-shopping", "amazon-ads", "site-shopify"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail"], relatedBlogCategories: ["marketing-digital", "ecommerce"], pricingLink: null, stripeLinks: [] },
  { slug: "bing-ads-vs-google-ads", name: "Bing Ads vs Google Ads", category: "paid-media", parentSlug: "bing-ads", icon: "Scale", shortDescription: "Comparatif Bing vs Google Ads. Avantages, inconvénients, quand utiliser chaque plateforme.", metaTitle: "Bing Ads vs Google Ads | Comparatif 2025", metaDescription: "Bing Ads vs Google Ads : comparatif complet. CPC, audience, avantages et inconvénients. Guide pour choisir.", keywords: ["bing vs google ads", "microsoft vs google", "comparatif bing google", "bing ads avantages"], relatedServices: ["campagne-bing-search", "campagne-search", "google-ads"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["marketing-digital", "google-ads"], pricingLink: null, stripeLinks: [] },
];

// ============================================================
// 12. AMAZON ADS
// ============================================================

const amazonAds: ServiceData = {
  slug: "amazon-ads", name: "Amazon Ads", category: "paid-media", parentSlug: null, icon: "Package",
  shortDescription: "Campagnes Amazon Ads : Sponsored Products, Sponsored Brands. Visibilité sur la marketplace #1.",
  metaTitle: "Agence Amazon Ads Laval | Expert Québec", metaDescription: "Agence Amazon Ads à Laval. Sponsored Products et Brands. Visibilité sur Amazon. Stratégie PPC e-commerce.",
  keywords: ["amazon ads laval", "publicité amazon montréal", "amazon advertising québec", "amazon ppc", "sponsored products"],
  relatedServices: ["google-ads", "site-shopify", "seo", "facebook-ads"],
  relatedSectors: ["ecommerce-en-ligne", "commerce-detail"],
  relatedBlogCategories: ["ecommerce", "marketing-digital"], pricingLink: null, stripeLinks: [],
  subServices: ["amazon-sponsored-products", "amazon-sponsored-brands", "strategie-amazon-advertising"],
};

const amazonAdsSubs: ServiceData[] = [
  { slug: "amazon-sponsored-products", name: "Amazon Sponsored Products", category: "paid-media", parentSlug: "amazon-ads", icon: "Tag", shortDescription: "Sponsored Products Amazon. Ciblage par produit et mots-clés. Bidding optimisé.", metaTitle: "Amazon Sponsored Products | Expert LANNKIN", metaDescription: "Amazon Sponsored Products à Laval. Ciblage produit, keywords, bidding optimisé. Augmentez vos ventes Amazon.", keywords: ["amazon sponsored products", "ppc amazon", "publicité produit amazon", "amazon ads produit"], relatedServices: ["amazon-sponsored-brands", "campagne-shopping", "seo"], relatedSectors: ["ecommerce-en-ligne"], relatedBlogCategories: ["ecommerce"], pricingLink: null, stripeLinks: [] },
  { slug: "amazon-sponsored-brands", name: "Amazon Sponsored Brands", category: "paid-media", parentSlug: "amazon-ads", icon: "Award", shortDescription: "Sponsored Brands Amazon. Bannières marque, vidéo, store spotlight. Visibilité premium.", metaTitle: "Amazon Sponsored Brands | Visibilité Marque", metaDescription: "Amazon Sponsored Brands à Laval. Bannières, vidéo, store spotlight. Visibilité premium pour votre marque.", keywords: ["amazon sponsored brands", "amazon brand ads", "publicité marque amazon", "amazon brand visibility"], relatedServices: ["amazon-sponsored-products", "strategie-amazon-advertising", "graphisme"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail"], relatedBlogCategories: ["ecommerce"], pricingLink: null, stripeLinks: [] },
  { slug: "strategie-amazon-advertising", name: "Stratégie Amazon Advertising", category: "paid-media", parentSlug: "amazon-ads", icon: "Lightbulb", shortDescription: "Stratégie Amazon Ads globale. Quand et comment utiliser Amazon comme canal d'acquisition.", metaTitle: "Stratégie Amazon Ads | Expert Québec", metaDescription: "Stratégie Amazon Advertising à Laval. Plan PPC Amazon complet. Quand et comment utiliser Amazon Ads efficacement.", keywords: ["stratégie amazon ads", "amazon advertising plan", "consultant amazon québec", "amazon marketing"], relatedServices: ["amazon-sponsored-products", "amazon-sponsored-brands", "google-ads", "site-shopify"], relatedSectors: ["ecommerce-en-ligne"], relatedBlogCategories: ["ecommerce"], pricingLink: null, stripeLinks: [] },
];

// ============================================================
// 13. WAZE ADS
// ============================================================

const wazeAds: ServiceData = {
  slug: "waze-ads", name: "Waze Ads", category: "paid-media", parentSlug: null, icon: "Navigation",
  shortDescription: "Publicité Waze pour drive-to-store. Ciblage géo ultra-local. Pins, takeover, search.",
  metaTitle: "Publicité Waze Ads Laval & Montréal", metaDescription: "Publicité Waze Ads à Laval et Montréal. Drive-to-store local. Pins, takeover, search. Idéal commerces et restaurants.",
  keywords: ["waze ads laval", "publicité waze montréal", "drive to store québec", "waze advertising", "publicité locale waze"],
  relatedServices: ["google-ads", "google-my-business", "seo", "lead-generation", "campagne-google-maps"],
  relatedSectors: ["restaurant-restauration", "commerce-detail", "beaute-esthetique", "automobile", "sante-clinique"],
  relatedBlogCategories: ["marketing-digital", "google-my-business"], pricingLink: null, stripeLinks: [],
};

// ============================================================
// 14. SEO
// ============================================================

const seo: ServiceData = {
  slug: "seo", name: "SEO / Référencement Naturel", category: "seo", parentSlug: null, icon: "TrendingUp",
  shortDescription: "Référencement naturel SEO complet : audit, on-page, technique, backlinks, local, e-commerce, migration.",
  metaTitle: "Agence SEO Laval & Montréal | Référencement", metaDescription: "Agence SEO à Laval. Audit, on-page, technique, backlinks, SEO local. +10 ans d'expérience. Résultats mesurables.",
  keywords: ["seo laval", "agence seo montréal", "référencement naturel québec", "expert seo", "seo local laval", "agence référencement"],
  relatedServices: ["google-ads", "google-my-business", "conception-web", "lead-generation", "odoo", "vibe-coding"],
  relatedSectors: ["juridique-avocats", "sante-clinique", "immobilier", "services-professionnels"],
  relatedBlogCategories: ["seo", "marketing-digital"], pricingLink: "/tarifs/seo/", stripeLinks: [],
  subServices: ["audit-seo", "referencement-local", "strategie-backlinks", "optimisation-maillage-interne", "seo-technique", "seo-on-page", "seo-ecommerce", "migration-seo"],
};

const seoSubs: ServiceData[] = [
  { slug: "audit-seo", name: "Audit SEO", category: "seo", parentSlug: "seo", icon: "ClipboardCheck", shortDescription: "Audit SEO complet : technique, contenu, backlinks, UX. Recommandations prioritisées.", metaTitle: "Audit SEO Complet Laval | 300$ | LANNKIN", metaDescription: "Audit SEO complet à Laval. Analyse technique, contenu, backlinks, UX. Recommandations prioritisées. 300$ one-shot.", keywords: ["audit seo laval", "audit référencement montréal", "analyse seo québec", "audit site web", "diagnostic seo"], relatedServices: ["seo-technique", "seo-on-page", "strategie-backlinks", "referencement-local"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["seo"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "referencement-local", name: "Référencement Local", category: "seo", parentSlug: "seo", icon: "MapPin", shortDescription: "SEO local pour apparaître dans Google Maps et le pack local. NAP, citations, avis.", metaTitle: "SEO Local Laval & Montréal | LANNKIN", metaDescription: "Référencement local à Laval. Google Maps, pack local, NAP, citations, avis Google. Attirez les clients proches.", keywords: ["seo local laval", "référencement local montréal", "google maps seo", "pack local google", "seo local québec"], relatedServices: ["google-my-business", "waze-ads", "campagne-google-maps", "audit-seo"], relatedSectors: ["restaurant-restauration", "sante-clinique", "beaute-esthetique", "automobile"], relatedBlogCategories: ["seo", "google-my-business"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "strategie-backlinks", name: "Stratégie Backlinks", category: "seo", parentSlug: "seo", icon: "Link", shortDescription: "Acquisition de backlinks de qualité. Link building éthique, outreach, guest blogging.", metaTitle: "Backlinks SEO Laval | Link Building", metaDescription: "Stratégie backlinks à Laval. Link building éthique, outreach, guest blogging. Améliorez votre autorité de domaine.", keywords: ["backlinks laval", "link building montréal", "stratégie backlinks québec", "acquisition liens", "outreach seo"], relatedServices: ["audit-seo", "seo-on-page", "seo-technique"], relatedSectors: ["services-professionnels", "juridique-avocats"], relatedBlogCategories: ["seo"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "optimisation-maillage-interne", name: "Optimisation Maillage Interne", category: "seo", parentSlug: "seo", icon: "Network", shortDescription: "Optimisation du maillage interne. Cocon sémantique, siloing, distribution du PageRank.", metaTitle: "Maillage Interne SEO | Expert LANNKIN", metaDescription: "Optimisation maillage interne à Laval. Cocon sémantique, siloing, PageRank. Boostez le crawl et le ranking.", keywords: ["maillage interne seo", "cocon sémantique", "siloing seo", "liens internes", "architecture seo"], relatedServices: ["seo-on-page", "seo-technique", "audit-seo", "strategie-backlinks"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["seo"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "seo-technique", name: "SEO Technique", category: "seo", parentSlug: "seo", icon: "Settings", shortDescription: "SEO technique : Core Web Vitals, crawlabilité, indexation, schema markup, vitesse.", metaTitle: "SEO Technique Laval | Core Web Vitals", metaDescription: "SEO technique à Laval. Core Web Vitals, crawlabilité, indexation, schema markup. Site rapide et bien indexé.", keywords: ["seo technique laval", "core web vitals", "vitesse site web", "crawlabilité", "schema markup seo"], relatedServices: ["audit-seo", "seo-on-page", "conception-web", "site-nextjs"], relatedSectors: ["services-professionnels", "ecommerce-en-ligne"], relatedBlogCategories: ["seo"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "seo-on-page", name: "SEO On-Page", category: "seo", parentSlug: "seo", icon: "FileText", shortDescription: "SEO on-page : balises title, meta, headings, contenu, images, URL. Optimisation page par page.", metaTitle: "SEO On-Page Laval | Contenu Optimisé", metaDescription: "SEO on-page à Laval. Balises title, meta, headings, contenu, images. Optimisation page par page pour Google.", keywords: ["seo on-page laval", "optimisation contenu montréal", "balises meta seo", "rédaction seo", "optimisation on-page"], relatedServices: ["audit-seo", "seo-technique", "strategie-backlinks", "optimisation-maillage-interne"], relatedSectors: ["services-professionnels", "juridique-avocats"], relatedBlogCategories: ["seo"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "seo-ecommerce", name: "SEO E-commerce", category: "seo", parentSlug: "seo", icon: "ShoppingCart", shortDescription: "SEO spécialisé e-commerce. Fiches produits, catégories, rich snippets, vitesse.", metaTitle: "SEO E-commerce Laval | Shopify WordPress", metaDescription: "SEO e-commerce à Laval. Fiches produits, catégories, rich snippets. Shopify, WooCommerce, Odoo. Plus de ventes.", keywords: ["seo ecommerce laval", "référencement boutique en ligne", "seo shopify", "seo woocommerce", "seo produits"], relatedServices: ["site-shopify", "amazon-ads", "google-ads", "odoo-ecommerce"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail"], relatedBlogCategories: ["seo", "ecommerce"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
  { slug: "migration-seo", name: "Migration SEO", category: "seo", parentSlug: "seo", icon: "ArrowRightLeft", shortDescription: "Migration SEO sans perte de trafic. Redirections 301, mapping URLs, suivi positions.", metaTitle: "Migration SEO Sans Perte | LANNKIN Laval", metaDescription: "Migration SEO à Laval. Redirections 301, mapping URLs, préservation positions. Zéro perte de trafic organique.", keywords: ["migration seo", "migration site sans perte seo", "redirections 301", "migration url seo", "refonte seo"], relatedServices: ["refonte-site-web", "audit-seo", "seo-technique", "migration-odoo"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["seo"], pricingLink: "/tarifs/seo/", stripeLinks: [] },
];

// ============================================================
// 15. GOOGLE MY BUSINESS
// ============================================================

const googleMyBusiness: ServiceData = {
  slug: "google-my-business", name: "Google My Business", category: "seo", parentSlug: null, icon: "Store",
  shortDescription: "Optimisation Google My Business. Fiche GMB, avis, contenu, QR code, Google Maps marketing.",
  metaTitle: "Google My Business Laval | Avis & GMB", metaDescription: "Optimisation Google My Business à Laval. Fiche GMB, collecte avis, contenu, QR code. 4.9/5 sur 54 avis.",
  keywords: ["google my business laval", "gmb montréal", "fiche google québec", "avis google", "google business profile"],
  relatedServices: ["seo", "google-ads", "waze-ads", "lead-generation", "graphisme"],
  relatedSectors: ["restaurant-restauration", "sante-clinique", "beaute-esthetique", "automobile"],
  relatedBlogCategories: ["google-my-business", "seo"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [],
  subServices: ["optimisation-fiche-gmb", "strategie-contenu-gmb", "collecte-avis-google", "gestion-avis-negatifs", "google-maps-marketing", "qr-code-avis"],
};

const gmbSubs: ServiceData[] = [
  { slug: "optimisation-fiche-gmb", name: "Optimisation Fiche GMB", category: "seo", parentSlug: "google-my-business", icon: "CheckCircle", shortDescription: "Optimisation complète de votre fiche Google Business. Catégories, attributs, photos, horaires.", metaTitle: "Optimisation Fiche Google | GMB Laval", metaDescription: "Optimisation fiche Google My Business à Laval. Catégories, attributs, photos, horaires. Apparaissez dans le pack local.", keywords: ["optimisation gmb laval", "fiche google optimisée", "google business profile", "gmb optimisation"], relatedServices: ["strategie-contenu-gmb", "collecte-avis-google", "seo", "referencement-local"], relatedSectors: ["restaurant-restauration", "sante-clinique"], relatedBlogCategories: ["google-my-business"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [] },
  { slug: "strategie-contenu-gmb", name: "Stratégie Contenu GMB", category: "seo", parentSlug: "google-my-business", icon: "PenTool", shortDescription: "Publication régulière de posts Google Business. Offres, événements, produits, mises à jour.", metaTitle: "Contenu Google Business | GMB Posts", metaDescription: "Stratégie de contenu Google Business à Laval. Posts réguliers, offres, événements. Améliorez votre visibilité locale.", keywords: ["contenu gmb", "posts google business", "google posts", "contenu fiche google"], relatedServices: ["optimisation-fiche-gmb", "collecte-avis-google", "graphisme"], relatedSectors: ["restaurant-restauration", "beaute-esthetique"], relatedBlogCategories: ["google-my-business"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [] },
  { slug: "collecte-avis-google", name: "Collecte Avis Google", category: "seo", parentSlug: "google-my-business", icon: "Star", shortDescription: "Stratégie de collecte d'avis Google. Automatisation, QR codes, suivi réputation.", metaTitle: "Collecte Avis Google | 4.9/5 | LANNKIN", metaDescription: "Collecte d'avis Google à Laval. Stratégie automatisée, QR codes, suivi réputation. Comme nous : 4.9/5 sur 54 avis.", keywords: ["collecte avis google", "avis google laval", "obtenir avis google", "stratégie avis", "achatavis"], relatedServices: ["optimisation-fiche-gmb", "qr-code-avis", "gestion-avis-negatifs"], relatedSectors: ["restaurant-restauration", "sante-clinique", "automobile"], relatedBlogCategories: ["google-my-business"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [] },
  { slug: "gestion-avis-negatifs", name: "Gestion Avis Négatifs", category: "seo", parentSlug: "google-my-business", icon: "ShieldAlert", shortDescription: "Gestion professionnelle des avis négatifs. Réponses stratégiques, médiation, amélioration.", metaTitle: "Gestion Avis Négatifs Google | LANNKIN", metaDescription: "Gestion des avis négatifs Google à Laval. Réponses stratégiques, médiation, amélioration de votre e-réputation.", keywords: ["gestion avis négatifs", "répondre avis google", "e-réputation", "avis négatifs solutions"], relatedServices: ["collecte-avis-google", "optimisation-fiche-gmb"], relatedSectors: ["restaurant-restauration", "sante-clinique"], relatedBlogCategories: ["google-my-business"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [] },
  { slug: "google-maps-marketing", name: "Google Maps Marketing", category: "seo", parentSlug: "google-my-business", icon: "Map", shortDescription: "Marketing Google Maps. Visibilité locale maximale sur Maps, itinéraires, clicks-to-call.", metaTitle: "Google Maps Marketing Laval | Local SEO", metaDescription: "Google Maps marketing à Laval. Visibilité locale maximale. Itinéraires, clicks-to-call, photos. Pack local garanti.", keywords: ["google maps marketing laval", "marketing maps montréal", "visibilité google maps", "pack local maps"], relatedServices: ["referencement-local", "waze-ads", "campagne-google-maps"], relatedSectors: ["restaurant-restauration", "automobile", "commerce-detail"], relatedBlogCategories: ["google-my-business", "seo"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [] },
  { slug: "qr-code-avis", name: "QR Code Avis", category: "seo", parentSlug: "google-my-business", icon: "QrCode", shortDescription: "QR codes personnalisés pour faciliter la collecte d'avis Google en point de vente.", metaTitle: "QR Code Avis Google | 200$ | LANNKIN", metaDescription: "QR codes personnalisés pour avis Google à Laval. Facilitez la collecte d'avis en point de vente. 200$ one-shot.", keywords: ["qr code avis google", "qr code google review", "qr avis laval", "collecte avis qr"], relatedServices: ["collecte-avis-google", "optimisation-fiche-gmb", "graphisme"], relatedSectors: ["restaurant-restauration", "commerce-detail", "beaute-esthetique"], relatedBlogCategories: ["google-my-business"], pricingLink: "/tarifs/google-my-business/", stripeLinks: [] },
];

// ============================================================
// 16. GRAPHISME
// ============================================================

const graphisme: ServiceData = {
  slug: "graphisme", name: "Graphisme & Design", category: "creative", parentSlug: null, icon: "Palette",
  shortDescription: "Design graphique : logo, identité visuelle, brochure, flyer, print. Créatifs qui convertissent.",
  metaTitle: "Graphisme & Design Laval | Logo & Print", metaDescription: "Agence graphisme à Laval. Logo, identité visuelle, brochure, flyer, campagne print. Design qui convertit.",
  keywords: ["graphisme laval", "design graphique montréal", "logo québec", "identité visuelle", "graphiste laval", "brochure design"],
  relatedServices: ["conception-web", "facebook-ads", "google-ads", "lead-generation", "sites-immersifs-3d"],
  relatedSectors: ["restaurant-restauration", "beaute-esthetique", "commerce-detail"],
  relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [],
  subServices: ["creation-logo", "identite-visuelle", "brochure-commerciale", "flyer-publicitaire", "campagne-print", "carte-de-visite"],
};

const graphismeSubs: ServiceData[] = [
  { slug: "creation-logo", name: "Création Logo", category: "creative", parentSlug: "graphisme", icon: "Hexagon", shortDescription: "Création de logo professionnel. Recherche, concepts, déclinaisons, charte graphique.", metaTitle: "Création Logo Laval | À partir de 500$", metaDescription: "Création de logo professionnel à Laval. Recherche, concepts, déclinaisons. Logo Essentiel 500$ | Premium 700$.", keywords: ["création logo laval", "logo montréal", "designer logo québec", "logo professionnel", "logo entreprise"], relatedServices: ["identite-visuelle", "graphisme", "carte-de-visite", "conception-web"], relatedSectors: ["restaurant-restauration", "beaute-esthetique", "commerce-detail"], relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [] },
  { slug: "identite-visuelle", name: "Identité Visuelle", category: "creative", parentSlug: "graphisme", icon: "Brush", shortDescription: "Identité visuelle complète : logo, palette, typo, charte, déclinaisons supports.", metaTitle: "Identité Visuelle Laval | Branding | 1000$", metaDescription: "Création d'identité visuelle complète à Laval. Logo, palette, typo, charte graphique. Branding cohérent. 1000$.", keywords: ["identité visuelle laval", "branding montréal", "charte graphique québec", "image de marque", "design branding"], relatedServices: ["creation-logo", "conception-web", "carte-de-visite", "brochure-commerciale"], relatedSectors: ["services-professionnels", "beaute-esthetique"], relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [] },
  { slug: "brochure-commerciale", name: "Brochure Commerciale", category: "creative", parentSlug: "graphisme", icon: "BookOpen", shortDescription: "Design de brochures commerciales impactantes. Mise en page, photos, impression.", metaTitle: "Brochure Commerciale Laval | Design Print", metaDescription: "Design de brochures commerciales à Laval. Mise en page professionnelle, photos, impression. 450$ par brochure.", keywords: ["brochure commerciale laval", "design brochure montréal", "brochure entreprise", "brochure publicitaire"], relatedServices: ["identite-visuelle", "flyer-publicitaire", "campagne-print"], relatedSectors: ["immobilier", "services-professionnels", "tourisme-hotellerie"], relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [] },
  { slug: "flyer-publicitaire", name: "Flyer Publicitaire", category: "creative", parentSlug: "graphisme", icon: "FileImage", shortDescription: "Design de flyers publicitaires percutants. Format, visuels, CTA, impression.", metaTitle: "Flyer Publicitaire Laval | Design Print", metaDescription: "Design de flyers publicitaires à Laval. Visuels percutants, CTA efficaces, impression incluse sur demande.", keywords: ["flyer publicitaire laval", "flyer design montréal", "dépliant publicitaire", "prospectus design"], relatedServices: ["brochure-commerciale", "campagne-print", "identite-visuelle"], relatedSectors: ["restaurant-restauration", "commerce-detail", "beaute-esthetique"], relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [] },
  { slug: "campagne-print", name: "Campagne Print", category: "creative", parentSlug: "graphisme", icon: "Printer", shortDescription: "Design pour campagnes print : affiches, bannières, signalétique, PLV.", metaTitle: "Campagne Print Laval | Affichage Design", metaDescription: "Design pour campagnes print à Laval. Affiches, bannières, signalétique, PLV. Du concept à l'impression.", keywords: ["campagne print laval", "affichage publicitaire", "design affiche montréal", "plv design", "signalétique"], relatedServices: ["brochure-commerciale", "flyer-publicitaire", "identite-visuelle"], relatedSectors: ["commerce-detail", "restaurant-restauration"], relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [] },
  { slug: "carte-de-visite", name: "Carte de Visite", category: "creative", parentSlug: "graphisme", icon: "CreditCard", shortDescription: "Design de cartes de visite professionnelles. Finitions premium, impression qualité.", metaTitle: "Carte de Visite Design Laval | LANNKIN", metaDescription: "Design de cartes de visite professionnelles à Laval. Finitions premium, impression haute qualité. Cohérence de marque.", keywords: ["carte de visite laval", "design carte visite montréal", "carte visite pro", "carte professionnelle"], relatedServices: ["creation-logo", "identite-visuelle"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["graphisme"], pricingLink: "/tarifs/graphisme/", stripeLinks: [] },
];

// ============================================================
// 17. LEAD GENERATION
// ============================================================

const leadGeneration: ServiceData = {
  slug: "lead-generation", name: "Lead Generation", category: "tech", parentSlug: null, icon: "UserPlus",
  shortDescription: "Solutions de génération de leads : landing pages, formulaires, tunnels de vente, lead scoring, CRM.",
  metaTitle: "Lead Generation Laval | Capture de Leads", metaDescription: "Agence lead generation à Laval. Landing pages, formulaires, tunnels de vente, lead scoring, intégration CRM.",
  keywords: ["lead generation laval", "génération de leads montréal", "capture leads québec", "landing page conversion", "tunnel de vente"],
  relatedServices: ["google-ads", "facebook-ads", "seo", "conception-web", "native-ads", "odoo"],
  relatedSectors: ["immobilier", "services-professionnels", "sante-clinique"],
  relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [],
  subServices: ["landing-page-conversion", "formulaire-lead-capture", "tunnel-de-vente", "lead-scoring", "crm-integration"],
};

const leadGenSubs: ServiceData[] = [
  { slug: "landing-page-conversion", name: "Landing Page Conversion", category: "tech", parentSlug: "lead-generation", icon: "MousePointerClick", shortDescription: "Landing pages optimisées pour la conversion. A/B testing, UX, copywriting.", metaTitle: "Landing Page Conversion Laval | CRO", metaDescription: "Landing pages optimisées conversion à Laval. A/B testing, UX, copywriting. Taux de conversion +40%.", keywords: ["landing page laval", "page de conversion", "landing page optimisée", "cro montréal", "page atterrissage"], relatedServices: ["google-ads", "facebook-ads", "conception-web", "formulaire-lead-capture"], relatedSectors: ["immobilier", "services-professionnels"], relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [] },
  { slug: "formulaire-lead-capture", name: "Formulaire Lead Capture", category: "tech", parentSlug: "lead-generation", icon: "FormInput", shortDescription: "Formulaires de capture de leads optimisés. Multi-step, validation, intégration CRM.", metaTitle: "Formulaire Lead Capture | LANNKIN Laval", metaDescription: "Formulaires de capture de leads à Laval. Multi-step, validation, intégration CRM. Maximisez vos conversions.", keywords: ["formulaire lead capture", "formulaire conversion", "formulaire lead", "capture email", "lead form"], relatedServices: ["landing-page-conversion", "crm-integration", "conception-web"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [] },
  { slug: "tunnel-de-vente", name: "Tunnel de Vente", category: "tech", parentSlug: "lead-generation", icon: "GitBranch", shortDescription: "Tunnels de vente automatisés. Email sequences, upsell, downsell, nurturing.", metaTitle: "Tunnel de Vente Laval | Automatisation", metaDescription: "Tunnels de vente automatisés à Laval. Email sequences, upsell, downsell, nurturing. Convertissez plus.", keywords: ["tunnel de vente laval", "sales funnel montréal", "automatisation marketing", "funnel conversion"], relatedServices: ["landing-page-conversion", "lead-scoring", "facebook-ads", "google-ads"], relatedSectors: ["ecommerce-en-ligne", "services-professionnels"], relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [] },
  { slug: "lead-scoring", name: "Lead Scoring", category: "tech", parentSlug: "lead-generation", icon: "BarChart3", shortDescription: "Lead scoring automatisé. Qualifiez vos leads par score comportemental et démographique.", metaTitle: "Lead Scoring Automatisé | LANNKIN Laval", metaDescription: "Lead scoring automatisé à Laval. Score comportemental et démographique. Priorisez vos meilleurs prospects.", keywords: ["lead scoring", "qualification leads", "scoring automatisé", "lead scoring crm", "priorisation leads"], relatedServices: ["crm-integration", "tunnel-de-vente", "intelligence-artificielle"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [] },
  { slug: "crm-integration", name: "Intégration CRM", category: "tech", parentSlug: "lead-generation", icon: "Database", shortDescription: "Intégration CRM : HubSpot, Salesforce, Pipedrive, Odoo. Synchronisation leads automatique.", metaTitle: "Intégration CRM Laval | HubSpot Salesforce", metaDescription: "Intégration CRM à Laval. HubSpot, Salesforce, Pipedrive, Odoo. Synchronisation automatique de vos leads.", keywords: ["intégration crm laval", "hubspot montréal", "salesforce québec", "crm integration", "odoo crm"], relatedServices: ["lead-scoring", "odoo-crm", "intelligence-artificielle", "landing-page-conversion"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["marketing-digital"], pricingLink: null, stripeLinks: [] },
];

// ============================================================
// 18. INTELLIGENCE ARTIFICIELLE (28 sous-pages)
// ============================================================

const intelligenceArtificielle: ServiceData = {
  slug: "intelligence-artificielle", name: "Intelligence Artificielle", category: "ai", parentSlug: null, icon: "Brain",
  shortDescription: "Solutions IA sur mesure : agents IA, chatbots, RAG, automatisation, support client, data analysis.",
  metaTitle: "Intelligence Artificielle Laval | Agents IA", metaDescription: "Solutions IA sur mesure à Laval. Agents IA, chatbots, RAG, automatisation, support client multicanal. Expert Québec.",
  keywords: ["intelligence artificielle laval", "ia montréal", "agent ia québec", "chatbot ia", "automatisation ia", "ia entreprise"],
  relatedServices: ["vibe-coding", "developpement-saas", "conception-web", "lead-generation", "seo"],
  relatedSectors: ["services-professionnels", "ecommerce-en-ligne", "education-formation"],
  relatedBlogCategories: ["intelligence-artificielle", "vibe-coding"], pricingLink: null, stripeLinks: [],
  subServices: ["agents-ia-sur-mesure", "automatisation-ia-nocode-api", "chatbot-ia-conversationnelle", "integration-ia-crm", "rag-ia-documentaire", "support-client-ia-multicanal", "agent-ia-ecommerce", "agent-ia-saas", "agent-ia-centre-appels", "agent-ia-slack-teams", "externalisation-ia-cle-en-main", "modele-hybride-humain-ia", "prompt-engineer-offshore", "data-analyst-ia", "ai-trainer-data-labeling", "agent-ia-prospection-commerciale", "consultant-ia-transformation-digitale", "pack-ia-pme-eti", "pourquoi-externaliser-ia", "assistant-ia-vs-employe", "cas-usage-ia-rentables", "etudes-de-cas-ia", "methodologie-deploiement-ia-30-jours", "securite-conformite-ia", "ia-transforme-bpo", "voicebot-ia", "ia-generative-contenu", "formation-ia-entreprise"],
};

const iaSubs: ServiceData[] = [
  { slug: "agents-ia-sur-mesure", name: "Agents IA sur Mesure", category: "ai", parentSlug: "intelligence-artificielle", icon: "Bot", shortDescription: "Agents IA personnalisés pour automatiser vos processus métier spécifiques.", metaTitle: "Agents IA sur Mesure Laval | LANNKIN", metaDescription: "Agents IA sur mesure à Laval. Automatisez vos processus métier avec des agents IA personnalisés. Expert Québec.", keywords: ["agent ia sur mesure", "ia personnalisée", "agent ia québec", "automatisation ia laval", "agent intelligent"], relatedServices: ["chatbot-ia-conversationnelle", "automatisation-ia-nocode-api", "support-client-ia-multicanal", "vibe-coding"], relatedSectors: ["services-professionnels", "ecommerce-en-ligne"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "automatisation-ia-nocode-api", name: "Automatisation IA No-Code & API", category: "ai", parentSlug: "intelligence-artificielle", icon: "Workflow", shortDescription: "Automatisation IA via no-code (Make, Zapier) et API custom. Sans développeur.", metaTitle: "Automatisation IA No-Code | LANNKIN Laval", metaDescription: "Automatisation IA no-code à Laval. Make, Zapier, API custom. Automatisez sans développeur. Gain de temps 80%.", keywords: ["automatisation ia", "no-code ia", "make zapier ia", "api ia", "automatisation processus"], relatedServices: ["agents-ia-sur-mesure", "integration-ia-crm", "chatbot-ia-conversationnelle"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "chatbot-ia-conversationnelle", name: "Chatbot IA Conversationnelle", category: "ai", parentSlug: "intelligence-artificielle", icon: "MessageSquare", shortDescription: "Chatbots IA conversationnels pour site web, WhatsApp, Messenger. Support 24/7.", metaTitle: "Chatbot IA Laval | Support 24/7 | LANNKIN", metaDescription: "Chatbot IA conversationnel à Laval. Support client 24/7 sur site, WhatsApp, Messenger. Réponses intelligentes.", keywords: ["chatbot ia laval", "chatbot conversationnel", "ia support client", "chatbot whatsapp", "chatbot site web"], relatedServices: ["support-client-ia-multicanal", "agents-ia-sur-mesure", "publicite-messenger"], relatedSectors: ["ecommerce-en-ligne", "services-professionnels", "sante-clinique"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "integration-ia-crm", name: "Intégration IA + CRM", category: "ai", parentSlug: "intelligence-artificielle", icon: "Database", shortDescription: "Intégration IA dans votre CRM. Lead scoring IA, prédictions, recommandations automatiques.", metaTitle: "IA + CRM Laval | Lead Scoring IA | LANNKIN", metaDescription: "Intégration IA dans votre CRM à Laval. Lead scoring IA, prédictions de vente, recommandations automatiques.", keywords: ["ia crm", "lead scoring ia", "crm intelligence artificielle", "ia salesforce", "ia hubspot"], relatedServices: ["crm-integration", "odoo-crm", "agents-ia-sur-mesure", "lead-scoring"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "rag-ia-documentaire", name: "RAG IA Documentaire", category: "ai", parentSlug: "intelligence-artificielle", icon: "FileSearch", shortDescription: "RAG (Retrieval-Augmented Generation) pour exploiter vos documents internes par IA.", metaTitle: "RAG IA Documentaire | Base de Connaissance", metaDescription: "RAG IA documentaire à Laval. Exploitez vos documents internes par IA. Base de connaissance intelligente.", keywords: ["rag ia", "retrieval augmented generation", "ia documentaire", "base connaissance ia", "rag québec"], relatedServices: ["agents-ia-sur-mesure", "chatbot-ia-conversationnelle", "support-client-ia-multicanal"], relatedSectors: ["services-professionnels", "juridique-avocats"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "support-client-ia-multicanal", name: "Support Client IA Multicanal", category: "ai", parentSlug: "intelligence-artificielle", icon: "Headphones", shortDescription: "Support client IA sur tous les canaux : chat, email, téléphone, WhatsApp, réseaux sociaux.", metaTitle: "Support Client IA Multicanal | LANNKIN", metaDescription: "Support client IA multicanal à Laval. Chat, email, téléphone, WhatsApp. Réponses 24/7 intelligentes.", keywords: ["support client ia", "ia multicanal", "service client ia", "support automatisé", "ia centre contact"], relatedServices: ["chatbot-ia-conversationnelle", "voicebot-ia", "agent-ia-centre-appels"], relatedSectors: ["ecommerce-en-ligne", "services-professionnels", "sante-clinique"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "agent-ia-ecommerce", name: "Agent IA E-commerce", category: "ai", parentSlug: "intelligence-artificielle", icon: "ShoppingCart", shortDescription: "Agents IA pour e-commerce : recommandations produits, SAV automatisé, pricing dynamique.", metaTitle: "Agent IA E-commerce | Automatisation Ventes", metaDescription: "Agent IA e-commerce à Laval. Recommandations produits, SAV automatisé, pricing dynamique. Boostez vos ventes.", keywords: ["agent ia ecommerce", "ia e-commerce", "recommandation produit ia", "pricing dynamique ia"], relatedServices: ["site-shopify", "odoo-ecommerce", "chatbot-ia-conversationnelle"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail"], relatedBlogCategories: ["intelligence-artificielle", "ecommerce"], pricingLink: null, stripeLinks: [] },
  { slug: "agent-ia-saas", name: "Agent IA SaaS", category: "ai", parentSlug: "intelligence-artificielle", icon: "Cloud", shortDescription: "Agents IA intégrés à votre SaaS. Onboarding, support, analytics, automatisation.", metaTitle: "Agent IA pour SaaS | Intégration | LANNKIN", metaDescription: "Agents IA pour SaaS à Laval. Onboarding automatisé, support in-app, analytics prédictif. Réduisez le churn.", keywords: ["agent ia saas", "ia saas", "automatisation saas", "support ia saas", "onboarding ia"], relatedServices: ["developpement-saas", "agents-ia-sur-mesure", "chatbot-ia-conversationnelle"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "agent-ia-centre-appels", name: "Agent IA Centre d'Appels", category: "ai", parentSlug: "intelligence-artificielle", icon: "Phone", shortDescription: "IA pour centres d'appels : routage intelligent, transcription, analyse sentiments, coaching.", metaTitle: "IA Centre d'Appels | Routage Intelligent", metaDescription: "Agent IA centre d'appels à Laval. Routage intelligent, transcription, analyse sentiments. Productivité +50%.", keywords: ["ia centre appels", "agent ia téléphone", "routage intelligent ia", "transcription ia", "call center ia"], relatedServices: ["voicebot-ia", "support-client-ia-multicanal", "agents-ia-sur-mesure"], relatedSectors: ["services-professionnels", "sante-clinique"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "agent-ia-slack-teams", name: "Agent IA Slack & Teams", category: "ai", parentSlug: "intelligence-artificielle", icon: "MessageSquare", shortDescription: "Agents IA pour Slack et Microsoft Teams. Automatisation interne et base de connaissances.", metaTitle: "Agent IA Slack Teams | Productivité", metaDescription: "Agent IA pour Slack et Microsoft Teams. Automatisation interne, base de connaissances, productivité d'équipe.", keywords: ["agent ia slack", "bot slack ia", "agent ia teams", "ia productivité interne", "chatbot slack"], relatedServices: ["agents-ia-sur-mesure", "rag-ia-documentaire", "automatisation-ia-nocode-api"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "externalisation-ia-cle-en-main", name: "Externalisation IA Clé en Main", category: "ai", parentSlug: "intelligence-artificielle", icon: "Key", shortDescription: "Externalisation complète de vos projets IA. De la conception au déploiement.", metaTitle: "Externalisation IA Clé en Main | LANNKIN", metaDescription: "Externalisation IA clé en main à Laval. Conception, développement, déploiement. Équipe experte dédiée.", keywords: ["externalisation ia", "outsourcing ia", "projet ia clé en main", "ia externalisée", "sous-traitance ia"], relatedServices: ["agents-ia-sur-mesure", "pack-ia-pme-eti", "consultant-ia-transformation-digitale"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "modele-hybride-humain-ia", name: "Modèle Hybride Humain + IA", category: "ai", parentSlug: "intelligence-artificielle", icon: "Users", shortDescription: "Modèle hybride humain-IA. L'IA traite le répétitif, l'humain gère le complexe.", metaTitle: "Modèle Hybride Humain + IA | LANNKIN", metaDescription: "Modèle hybride humain-IA à Laval. L'IA gère le répétitif, l'humain le complexe. Productivité et satisfaction.", keywords: ["hybride humain ia", "ia augmentée", "collaboration humain ia", "modèle hybride", "ia assistée"], relatedServices: ["agents-ia-sur-mesure", "support-client-ia-multicanal", "externalisation-ia-cle-en-main"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "prompt-engineer-offshore", name: "Prompt Engineer", category: "ai", parentSlug: "intelligence-artificielle", icon: "Terminal", shortDescription: "Experts prompt engineering pour optimiser vos interactions IA et résultats.", metaTitle: "Prompt Engineer Expert | IA | LANNKIN", metaDescription: "Prompt engineering expert à Laval. Optimisez vos interactions IA. Meilleurs résultats avec les bons prompts.", keywords: ["prompt engineer", "prompt engineering", "expert prompt", "optimisation prompts ia", "ingénierie prompt"], relatedServices: ["agents-ia-sur-mesure", "claude-code", "formation-ia-entreprise"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle", "vibe-coding"], pricingLink: null, stripeLinks: [] },
  { slug: "data-analyst-ia", name: "Data Analyst IA", category: "ai", parentSlug: "intelligence-artificielle", icon: "BarChart3", shortDescription: "Analyse de données par IA. Insights automatisés, tableaux de bord, prédictions.", metaTitle: "Data Analyst IA | Analytics | LANNKIN", metaDescription: "Data analyst IA à Laval. Insights automatisés, tableaux de bord prédictifs, analyse de données par intelligence artificielle.", keywords: ["data analyst ia", "analyse données ia", "business intelligence ia", "analytics ia", "données prédictives"], relatedServices: ["agents-ia-sur-mesure", "automatisation-ia-nocode-api", "integration-ia-crm"], relatedSectors: ["services-professionnels", "ecommerce-en-ligne"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "ai-trainer-data-labeling", name: "AI Trainer & Data Labeling", category: "ai", parentSlug: "intelligence-artificielle", icon: "Tag", shortDescription: "Entraînement de modèles IA et labeling de données. Qualité et précision.", metaTitle: "AI Trainer & Data Labeling | LANNKIN", metaDescription: "AI Trainer et data labeling à Laval. Entraînement de modèles IA, labeling précis. Données de qualité.", keywords: ["ai trainer", "data labeling", "annotation données", "entraînement ia", "labeling ia"], relatedServices: ["agents-ia-sur-mesure", "data-analyst-ia", "prompt-engineer-offshore"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "agent-ia-prospection-commerciale", name: "Agent IA Prospection Commerciale", category: "ai", parentSlug: "intelligence-artificielle", icon: "UserSearch", shortDescription: "IA pour prospection commerciale. Identification prospects, outreach automatisé, qualification.", metaTitle: "IA Prospection Commerciale | LANNKIN", metaDescription: "Agent IA prospection commerciale à Laval. Identification prospects, outreach automatisé, qualification leads.", keywords: ["ia prospection", "prospection ia", "agent commercial ia", "outreach ia", "sales ia"], relatedServices: ["lead-scoring", "integration-ia-crm", "agents-ia-sur-mesure"], relatedSectors: ["services-professionnels", "immobilier"], relatedBlogCategories: ["intelligence-artificielle", "marketing-digital"], pricingLink: null, stripeLinks: [] },
  { slug: "consultant-ia-transformation-digitale", name: "Consultant IA & Transformation Digitale", category: "ai", parentSlug: "intelligence-artificielle", icon: "Lightbulb", shortDescription: "Conseil stratégique en IA et transformation digitale. Audit, roadmap, accompagnement.", metaTitle: "Consultant IA Transformation Digitale Laval", metaDescription: "Consultant IA et transformation digitale à Laval. Audit IA, roadmap, accompagnement. Stratégie IA sur mesure.", keywords: ["consultant ia", "transformation digitale ia", "conseil ia québec", "stratégie ia entreprise"], relatedServices: ["pack-ia-pme-eti", "externalisation-ia-cle-en-main", "methodologie-deploiement-ia-30-jours"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "pack-ia-pme-eti", name: "Pack IA PME/ETI", category: "ai", parentSlug: "intelligence-artificielle", icon: "Package", shortDescription: "Pack IA clé en main pour PME et ETI. Solutions IA adaptées à votre budget.", metaTitle: "Pack IA PME ETI | Solutions Accessibles", metaDescription: "Pack IA pour PME et ETI à Laval. Solutions IA clé en main adaptées à votre budget et vos besoins.", keywords: ["pack ia pme", "ia pme", "ia eti", "solution ia accessible", "ia petite entreprise"], relatedServices: ["consultant-ia-transformation-digitale", "agents-ia-sur-mesure", "externalisation-ia-cle-en-main"], relatedSectors: ["services-professionnels", "commerce-detail"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "pourquoi-externaliser-ia", name: "Pourquoi Externaliser l'IA", category: "ai", parentSlug: "intelligence-artificielle", icon: "HelpCircle", shortDescription: "Guide : pourquoi externaliser vos projets IA. Coûts, compétences, time-to-market.", metaTitle: "Pourquoi Externaliser l'IA | Guide Expert", metaDescription: "Pourquoi externaliser l'IA ? Réduisez les coûts, accédez aux compétences, accélérez le time-to-market.", keywords: ["externaliser ia", "outsourcing ia avantages", "pourquoi ia externe", "ia externalisée avantages"], relatedServices: ["externalisation-ia-cle-en-main", "pack-ia-pme-eti", "consultant-ia-transformation-digitale"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "assistant-ia-vs-employe", name: "Assistant IA vs Employé", category: "ai", parentSlug: "intelligence-artificielle", icon: "Scale", shortDescription: "Comparatif assistant IA vs employé. Quand utiliser l'IA, quand garder l'humain.", metaTitle: "Assistant IA vs Employé | Comparatif", metaDescription: "Assistant IA vs employé : comparatif complet. Coûts, productivité, qualité. Quand utiliser chaque option.", keywords: ["assistant ia vs employé", "ia vs humain", "remplacer employé ia", "coût ia vs employé"], relatedServices: ["modele-hybride-humain-ia", "agents-ia-sur-mesure", "pack-ia-pme-eti"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "cas-usage-ia-rentables", name: "Cas d'Usage IA Rentables", category: "ai", parentSlug: "intelligence-artificielle", icon: "DollarSign", shortDescription: "Top des cas d'usage IA les plus rentables pour les PME. ROI prouvé.", metaTitle: "Cas d'Usage IA Rentables | ROI Prouvé", metaDescription: "Cas d'usage IA les plus rentables pour PME. ROI prouvé, exemples concrets, calcul de rentabilité.", keywords: ["cas usage ia", "ia rentable", "roi ia", "ia pme rentable", "exemples ia entreprise"], relatedServices: ["pack-ia-pme-eti", "consultant-ia-transformation-digitale", "etudes-de-cas-ia"], relatedSectors: ["services-professionnels", "ecommerce-en-ligne"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "etudes-de-cas-ia", name: "Études de Cas IA", category: "ai", parentSlug: "intelligence-artificielle", icon: "FileBarChart", shortDescription: "Études de cas IA : résultats concrets, ROI mesuré, témoignages clients.", metaTitle: "Études de Cas IA | Résultats Concrets", metaDescription: "Études de cas IA à Laval. Résultats concrets, ROI mesuré. Découvrez comment l'IA transforme les entreprises.", keywords: ["études de cas ia", "cas client ia", "résultats ia", "témoignages ia", "success stories ia"], relatedServices: ["cas-usage-ia-rentables", "consultant-ia-transformation-digitale", "agents-ia-sur-mesure"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "methodologie-deploiement-ia-30-jours", name: "Méthodologie Déploiement IA 30 Jours", category: "ai", parentSlug: "intelligence-artificielle", icon: "CalendarDays", shortDescription: "Déployez votre premier agent IA en 30 jours. Méthodologie éprouvée et rapide.", metaTitle: "Déploiement IA en 30 Jours | LANNKIN", metaDescription: "Déploiement IA en 30 jours à Laval. Méthodologie éprouvée : audit J1-J5, prototypage J6-J15, déploiement J16-J30.", keywords: ["déploiement ia 30 jours", "ia rapide", "méthodologie ia", "implémentation ia", "projet ia rapide"], relatedServices: ["consultant-ia-transformation-digitale", "agents-ia-sur-mesure", "pack-ia-pme-eti"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "securite-conformite-ia", name: "Sécurité & Conformité IA", category: "ai", parentSlug: "intelligence-artificielle", icon: "Shield", shortDescription: "Sécurité et conformité IA. RGPD, Loi 25, protection des données, IA responsable.", metaTitle: "Sécurité & Conformité IA | Loi 25 RGPD", metaDescription: "Sécurité et conformité IA à Laval. Loi 25, RGPD, protection des données. IA responsable et conforme.", keywords: ["sécurité ia", "conformité ia", "loi 25 ia", "rgpd ia", "ia responsable", "protection données ia"], relatedServices: ["consultant-ia-transformation-digitale", "agents-ia-sur-mesure", "audit-code-ia"], relatedSectors: ["juridique-avocats", "sante-clinique", "services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "ia-transforme-bpo", name: "L'IA Transforme le BPO", category: "ai", parentSlug: "intelligence-artificielle", icon: "Building", shortDescription: "Comment l'IA transforme le BPO. Automatisation, qualité, réduction des coûts.", metaTitle: "IA et BPO | Transformation | LANNKIN", metaDescription: "L'IA transforme le BPO. Automatisation, qualité accrue, réduction des coûts. Externalisez intelligemment.", keywords: ["ia bpo", "bpo ia", "externalisation ia", "ia outsourcing", "transformation bpo"], relatedServices: ["externalisation-ia-cle-en-main", "modele-hybride-humain-ia", "support-client-ia-multicanal"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "voicebot-ia", name: "Voicebot IA", category: "ai", parentSlug: "intelligence-artificielle", icon: "Mic", shortDescription: "Voicebots IA pour accueil téléphonique automatisé, prise de RDV et support vocal.", metaTitle: "Voicebot IA | Accueil Téléphonique Auto", metaDescription: "Voicebot IA à Laval. Accueil téléphonique automatisé, prise de RDV, support vocal intelligent. 24/7.", keywords: ["voicebot ia", "bot vocal ia", "accueil téléphonique ia", "voice ia", "assistant vocal ia"], relatedServices: ["agent-ia-centre-appels", "support-client-ia-multicanal", "chatbot-ia-conversationnelle"], relatedSectors: ["sante-clinique", "services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "ia-generative-contenu", name: "IA Générative & Contenu", category: "ai", parentSlug: "intelligence-artificielle", icon: "Wand2", shortDescription: "IA générative pour création de contenu : texte, images, vidéo, code. Production à l'échelle.", metaTitle: "IA Générative Contenu | Production Échelle", metaDescription: "IA générative pour contenu à Laval. Texte, images, vidéo, code. Production de contenu à l'échelle.", keywords: ["ia générative", "génération contenu ia", "ia contenu", "ia rédaction", "ia images", "ia vidéo"], relatedServices: ["agents-ia-sur-mesure", "prompt-engineer-offshore", "vibe-coding"], relatedSectors: ["services-professionnels", "ecommerce-en-ligne"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
  { slug: "formation-ia-entreprise", name: "Formation IA Entreprise", category: "ai", parentSlug: "intelligence-artificielle", icon: "GraduationCap", shortDescription: "Formations IA pour entreprises. Sensibilisation, outils, intégration. Présentiel ou visio.", metaTitle: "Formation IA Entreprise Laval | LANNKIN", metaDescription: "Formation IA pour entreprises à Laval. Sensibilisation, outils, intégration. Présentiel ou visio. Sur mesure.", keywords: ["formation ia", "formation ia entreprise", "cours ia québec", "formation intelligence artificielle", "ia formation laval"], relatedServices: ["consultant-ia-transformation-digitale", "formation-vibe-coding", "pack-ia-pme-eti"], relatedSectors: ["education-formation", "services-professionnels"], relatedBlogCategories: ["intelligence-artificielle"], pricingLink: null, stripeLinks: [] },
];

// ============================================================
// 19. DÉVELOPPEMENT SAAS
// ============================================================

const developpementSaas: ServiceData = {
  slug: "developpement-saas", name: "Développement SaaS", category: "tech", parentSlug: null, icon: "Rocket",
  shortDescription: "Développement d'applications SaaS, mobiles, MVPs et APIs. De l'idée au produit scalable.",
  metaTitle: "Développement SaaS & Apps Laval | LANNKIN", metaDescription: "Développement SaaS et applications à Laval. Apps web, mobiles, MVPs startup, APIs. De l'idée au produit scalable.",
  keywords: ["développement saas laval", "application web montréal", "app mobile québec", "mvp startup", "développeur saas"],
  relatedServices: ["vibe-coding", "intelligence-artificielle", "conception-web", "sites-immersifs-3d"],
  relatedSectors: ["ecommerce-en-ligne", "services-professionnels", "education-formation"],
  relatedBlogCategories: ["conception-web", "vibe-coding"], pricingLink: null, stripeLinks: [],
  subServices: ["application-web-saas", "application-mobile", "mvp-startup", "api-et-integrations"],
};

const devSaasSubs: ServiceData[] = [
  { slug: "application-web-saas", name: "Application Web SaaS", category: "tech", parentSlug: "developpement-saas", icon: "Globe", shortDescription: "Applications web SaaS cloud. Architecture scalable, multi-tenant, subscription billing.", metaTitle: "Application Web SaaS Laval | Cloud", metaDescription: "Développement d'applications web SaaS à Laval. Architecture cloud scalable, multi-tenant, billing automatisé.", keywords: ["application web saas laval", "développement saas montréal", "saas cloud québec", "web app saas"], relatedServices: ["api-et-integrations", "mvp-startup", "vibe-coding", "intelligence-artificielle"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "application-mobile", name: "Application Mobile", category: "tech", parentSlug: "developpement-saas", icon: "Smartphone", shortDescription: "Applications mobiles iOS et Android. React Native, Flutter ou natif.", metaTitle: "Application Mobile Laval | iOS Android", metaDescription: "Développement d'applications mobiles à Laval. iOS et Android. React Native, Flutter ou natif. UX optimisée.", keywords: ["application mobile laval", "app mobile montréal", "développeur mobile québec", "react native", "flutter"], relatedServices: ["application-web-saas", "mvp-startup", "vibe-coding"], relatedSectors: ["ecommerce-en-ligne", "sante-clinique"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "mvp-startup", name: "MVP Startup", category: "tech", parentSlug: "developpement-saas", icon: "Zap", shortDescription: "Développement de MVPs pour startups. Prototype fonctionnel rapide pour valider et lever des fonds.", metaTitle: "MVP Startup Laval | Prototype Rapide", metaDescription: "Développement MVP startup à Laval. Prototype fonctionnel rapide pour valider votre idée et lever des fonds.", keywords: ["mvp startup laval", "prototype startup montréal", "mvp développement québec", "lean startup", "prototype rapide"], relatedServices: ["vibe-coding", "application-web-saas", "lovable", "bolt-new"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["conception-web", "vibe-coding"], pricingLink: null, stripeLinks: [] },
  { slug: "api-et-integrations", name: "API & Intégrations", category: "tech", parentSlug: "developpement-saas", icon: "Plug", shortDescription: "Développement d'APIs RESTful/GraphQL et intégrations tierces pour connecter vos systèmes.", metaTitle: "API & Intégrations Laval | REST GraphQL", metaDescription: "Développement d'APIs et intégrations à Laval. REST, GraphQL, webhooks. Connectez tous vos systèmes.", keywords: ["api développement laval", "api rest montréal", "graphql québec", "intégrations api", "webhook"], relatedServices: ["application-web-saas", "crm-integration", "odoo-erp-integration", "intelligence-artificielle"], relatedSectors: ["services-professionnels"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
];

// ============================================================
// 20. SITES IMMERSIFS & 3D
// ============================================================

const sitesImmersifs3d: ServiceData = {
  slug: "sites-immersifs-3d", name: "Sites Immersifs & 3D", category: "web", parentSlug: null, icon: "Box",
  shortDescription: "Expériences web immersives : Three.js, WebGL, React Three Fiber, configurateurs 3D, visites virtuelles.",
  metaTitle: "Sites Immersifs 3D Laval | Three.js WebGL", metaDescription: "Sites immersifs et 3D à Laval. Three.js, WebGL, React Three Fiber. Configurateurs 3D, visites virtuelles, showrooms.",
  keywords: ["site 3d laval", "three.js montréal", "webgl québec", "react three fiber", "configurateur 3d", "site immersif"],
  relatedServices: ["conception-web", "vibe-coding", "graphisme", "developpement-saas", "intelligence-artificielle"],
  relatedSectors: ["immobilier", "automobile", "tourisme-hotellerie", "commerce-detail"],
  relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [],
  subServices: ["configurateur-3d-produit", "configurateur-2d-interactif", "site-threejs", "experience-webgl", "react-three-fiber", "visite-virtuelle-360", "animation-3d-web", "showroom-virtuel", "landing-page-immersive", "portfolio-3d-interactif"],
};

const sites3dSubs: ServiceData[] = [
  { slug: "configurateur-3d-produit", name: "Configurateur 3D Produit", category: "web", parentSlug: "sites-immersifs-3d", icon: "RotateCw", shortDescription: "Configurateurs 3D produit interactifs. Personnalisation en temps réel, rotation 360°.", metaTitle: "Configurateur 3D Produit | LANNKIN Laval", metaDescription: "Configurateur 3D produit à Laval. Personnalisation en temps réel, rotation 360°, zoom. Augmentez les conversions.", keywords: ["configurateur 3d produit", "configurateur 3d web", "3d product viewer", "configurateur interactif"], relatedServices: ["experience-webgl", "react-three-fiber", "site-threejs"], relatedSectors: ["automobile", "commerce-detail", "immobilier"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "configurateur-2d-interactif", name: "Configurateur 2D Interactif", category: "web", parentSlug: "sites-immersifs-3d", icon: "Layers", shortDescription: "Configurateurs 2D interactifs. Personnalisation visuelle sans 3D, léger et rapide.", metaTitle: "Configurateur 2D Interactif | LANNKIN", metaDescription: "Configurateur 2D interactif à Laval. Personnalisation visuelle légère et rapide. Idéal mobile.", keywords: ["configurateur 2d", "configurateur interactif", "personnalisation produit", "configurateur web"], relatedServices: ["configurateur-3d-produit", "conception-web"], relatedSectors: ["commerce-detail", "beaute-esthetique"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "site-threejs", name: "Site Three.js", category: "web", parentSlug: "sites-immersifs-3d", icon: "Box", shortDescription: "Sites web Three.js : scènes 3D interactives, animations, effets visuels immersifs.", metaTitle: "Site Three.js Laval | Développeur 3D Web", metaDescription: "Développement de sites Three.js à Laval. Scènes 3D interactives, animations, effets immersifs. Expert WebGL.", keywords: ["three.js laval", "développeur threejs", "site 3d montréal", "three.js développement", "threejs expert"], relatedServices: ["experience-webgl", "react-three-fiber", "animation-3d-web"], relatedSectors: ["tourisme-hotellerie", "automobile", "immobilier"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "experience-webgl", name: "Expérience WebGL", category: "web", parentSlug: "sites-immersifs-3d", icon: "Sparkles", shortDescription: "Expériences WebGL immersives. Shaders custom, particle systems, effets post-processing.", metaTitle: "Expérience WebGL Immersive | LANNKIN", metaDescription: "Expériences WebGL immersives à Laval. Shaders, particles, post-processing. Sites web d'exception.", keywords: ["webgl expérience", "webgl développement", "shaders custom", "effets webgl", "expérience immersive web"], relatedServices: ["site-threejs", "react-three-fiber", "landing-page-immersive"], relatedSectors: ["tourisme-hotellerie"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "react-three-fiber", name: "React Three Fiber", category: "web", parentSlug: "sites-immersifs-3d", icon: "Atom", shortDescription: "Développement React Three Fiber. 3D déclarative dans React/Next.js avec Drei et postprocessing.", metaTitle: "React Three Fiber Expert | R3F | LANNKIN", metaDescription: "Expert React Three Fiber à Laval. 3D déclarative dans React/Next.js. Drei, postprocessing, performances.", keywords: ["react three fiber", "r3f développeur", "react 3d", "drei react", "three.js react", "r3f expert"], relatedServices: ["site-threejs", "site-nextjs", "experience-webgl"], relatedSectors: ["tourisme-hotellerie", "immobilier"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "visite-virtuelle-360", name: "Visite Virtuelle 360°", category: "web", parentSlug: "sites-immersifs-3d", icon: "View", shortDescription: "Visites virtuelles 360° interactives. Immobilier, tourisme, showrooms, espaces commerciaux.", metaTitle: "Visite Virtuelle 360° Laval | Immersif", metaDescription: "Visite virtuelle 360° à Laval. Immobilier, tourisme, showrooms. Visite interactive depuis n'importe quel écran.", keywords: ["visite virtuelle 360", "visite 360 laval", "visite immersive", "tour virtuel", "visite virtuelle immobilier"], relatedServices: ["showroom-virtuel", "configurateur-3d-produit", "experience-webgl"], relatedSectors: ["immobilier", "tourisme-hotellerie", "automobile"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "animation-3d-web", name: "Animation 3D Web", category: "web", parentSlug: "sites-immersifs-3d", icon: "Film", shortDescription: "Animations 3D pour le web. Motion design 3D, transitions, effets scroll-driven.", metaTitle: "Animation 3D Web Laval | Motion Design", metaDescription: "Animation 3D pour le web à Laval. Motion design 3D, transitions fluides, effets scroll-driven. Impact visuel.", keywords: ["animation 3d web", "motion design 3d", "animation web", "3d motion", "scroll animation 3d"], relatedServices: ["site-threejs", "experience-webgl", "landing-page-immersive"], relatedSectors: ["tourisme-hotellerie", "beaute-esthetique"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "showroom-virtuel", name: "Showroom Virtuel", category: "web", parentSlug: "sites-immersifs-3d", icon: "Store", shortDescription: "Showrooms virtuels 3D. Présentez vos produits dans un espace immersif interactif.", metaTitle: "Showroom Virtuel 3D Laval | LANNKIN", metaDescription: "Showroom virtuel 3D à Laval. Présentez vos produits dans un espace immersif interactif. E-commerce 3D.", keywords: ["showroom virtuel", "showroom 3d", "espace virtuel", "showroom en ligne", "showroom interactif"], relatedServices: ["visite-virtuelle-360", "configurateur-3d-produit", "site-threejs"], relatedSectors: ["automobile", "commerce-detail", "immobilier"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "landing-page-immersive", name: "Landing Page Immersive", category: "web", parentSlug: "sites-immersifs-3d", icon: "Sparkles", shortDescription: "Landing pages immersives avec 3D, animations, scroll-driven effects. Impact maximum.", metaTitle: "Landing Page Immersive 3D | LANNKIN", metaDescription: "Landing pages immersives 3D à Laval. Animations, scroll effects, WebGL. Impressionnez et convertissez.", keywords: ["landing page immersive", "landing page 3d", "page web immersive", "landing page créative"], relatedServices: ["landing-page-conversion", "experience-webgl", "animation-3d-web"], relatedSectors: ["tourisme-hotellerie", "beaute-esthetique"], relatedBlogCategories: ["conception-web"], pricingLink: null, stripeLinks: [] },
  { slug: "portfolio-3d-interactif", name: "Portfolio 3D Interactif", category: "web", parentSlug: "sites-immersifs-3d", icon: "FolderOpen", shortDescription: "Portfolios 3D interactifs pour agences, artistes et créatifs. Effet wow garanti.", metaTitle: "Portfolio 3D Interactif | LANNKIN Laval", metaDescription: "Portfolio 3D interactif à Laval. Présentez vos travaux dans un espace 3D immersif. Effet wow garanti.", keywords: ["portfolio 3d", "portfolio interactif", "portfolio créatif", "portfolio webgl", "site portfolio 3d"], relatedServices: ["site-threejs", "animation-3d-web", "graphisme"], relatedSectors: ["beaute-esthetique"], relatedBlogCategories: ["conception-web", "graphisme"], pricingLink: null, stripeLinks: [] },
];

// ============================================================
// 21. MONTAGE VIDÉO
// ============================================================

const montageVideo: ServiceData = {
  slug: "montage-video",
  name: "Montage Vidéo",
  category: "creative",
  parentSlug: null,
  icon: "Video",
  shortDescription: "Création et montage vidéo professionnel : YouTube, TikTok, Shorts, Reels, vidéo corporate, mariage, événementiel.",
  metaTitle: "Montage Vidéo Professionnel Laval | Création Vidéo Québec",
  metaDescription: "Service de montage vidéo professionnel à Laval. YouTube, TikTok, Shorts, Reels. Script, voix-off, effets visuels. Dès 119 $/vidéo. Devis gratuit.",
  keywords: ["montage vidéo laval", "création vidéo montréal", "monteur vidéo québec", "vidéo professionnelle laval", "montage youtube", "vidéo tiktok", "vidéo corporate"],
  relatedServices: ["graphisme", "facebook-ads", "tiktok-ads", "google-ads", "lead-generation", "intelligence-artificielle"],
  relatedSectors: ["restaurant-restauration", "beaute-esthetique", "immobilier", "tourisme-hotellerie", "commerce-detail", "ecommerce-en-ligne"],
  relatedBlogCategories: ["reseaux-sociaux", "marketing-digital"],
  pricingLink: "/tarifs/montage-video/",
  stripeLinks: [],
  subServices: [
    "montage-video-youtube", "montage-video-tiktok", "montage-video-shorts-reels",
    "montage-video-instagram", "montage-video-linkedin", "montage-video-publicitaire",
    "video-mariage", "video-anniversaire", "video-corporate", "video-evenementiel",
    "video-immobilier", "video-ecommerce-produit",
  ],
};

const montageVideoSubs: ServiceData[] = [
  // --- Par plateforme ---
  { slug: "montage-video-youtube", name: "Montage Vidéo YouTube", category: "creative", parentSlug: "montage-video", icon: "Youtube", shortDescription: "Montage vidéo YouTube professionnel. Intros, transitions, sous-titres, miniatures, optimisation SEO YouTube.", metaTitle: "Montage Vidéo YouTube | LANNKIN Laval", metaDescription: "Montage vidéo YouTube professionnel à Laval. Script, voix-off, effets visuels, miniatures. Boostez votre chaîne YouTube.", keywords: ["montage vidéo youtube", "monteur youtube", "vidéo youtube professionnel", "création vidéo youtube", "éditeur vidéo youtube laval"], relatedServices: ["montage-video-tiktok", "montage-video-shorts-reels", "google-ads"], relatedSectors: ["restaurant-restauration", "beaute-esthetique", "education-formation"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "montage-video-tiktok", name: "Montage Vidéo TikTok", category: "creative", parentSlug: "montage-video", icon: "Music", shortDescription: "Montage vidéo TikTok accrocheur. Format vertical, tendances, hooks percutants, effets viraux.", metaTitle: "Montage Vidéo TikTok | Création Contenu Viral", metaDescription: "Montage vidéo TikTok à Laval. Contenu viral, tendances, hooks percutants. Augmentez votre visibilité sur TikTok.", keywords: ["montage vidéo tiktok", "vidéo tiktok professionnel", "création contenu tiktok", "monteur tiktok", "vidéo virale tiktok"], relatedServices: ["montage-video-shorts-reels", "montage-video-youtube", "tiktok-ads"], relatedSectors: ["restaurant-restauration", "beaute-esthetique", "commerce-detail"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "montage-video-shorts-reels", name: "Montage Shorts & Reels", category: "creative", parentSlug: "montage-video", icon: "Smartphone", shortDescription: "Montage YouTube Shorts et Instagram Reels. Format court vertical, contenu dynamique et engageant.", metaTitle: "Montage Shorts & Reels | Vidéo Format Court", metaDescription: "Montage YouTube Shorts et Instagram Reels à Laval. Format court percutant, sous-titres animés, effets tendance.", keywords: ["montage shorts youtube", "montage reels instagram", "vidéo format court", "shorts professionnel", "reels professionnel"], relatedServices: ["montage-video-tiktok", "montage-video-instagram", "montage-video-youtube"], relatedSectors: ["beaute-esthetique", "restaurant-restauration", "commerce-detail"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "montage-video-instagram", name: "Montage Vidéo Instagram", category: "creative", parentSlug: "montage-video", icon: "Camera", shortDescription: "Montage vidéo Instagram : Stories, Reels, publications vidéo. Contenu esthétique et engageant.", metaTitle: "Montage Vidéo Instagram | Contenu Visuel Pro", metaDescription: "Montage vidéo Instagram à Laval. Stories, Reels, publications. Contenu esthétique qui engage votre audience.", keywords: ["montage vidéo instagram", "vidéo instagram professionnel", "stories instagram", "contenu instagram vidéo"], relatedServices: ["montage-video-shorts-reels", "montage-video-tiktok", "facebook-ads"], relatedSectors: ["beaute-esthetique", "restaurant-restauration", "tourisme-hotellerie"], relatedBlogCategories: ["reseaux-sociaux"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "montage-video-linkedin", name: "Montage Vidéo LinkedIn", category: "creative", parentSlug: "montage-video", icon: "Linkedin", shortDescription: "Montage vidéo LinkedIn professionnel. Témoignages, thought leadership, recrutement, présentation corporate.", metaTitle: "Montage Vidéo LinkedIn | Contenu B2B Pro", metaDescription: "Montage vidéo LinkedIn à Laval. Contenu B2B professionnel, témoignages, thought leadership. Renforcez votre image.", keywords: ["montage vidéo linkedin", "vidéo linkedin professionnel", "contenu vidéo b2b", "vidéo corporate linkedin"], relatedServices: ["montage-video-youtube", "video-corporate", "linkedin-ads"], relatedSectors: ["services-professionnels", "education-formation", "juridique-avocats"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "montage-video-publicitaire", name: "Montage Vidéo Publicitaire", category: "creative", parentSlug: "montage-video", icon: "Megaphone", shortDescription: "Montage vidéo publicitaire pour campagnes ads. Formats optimisés Google, Meta, TikTok, YouTube.", metaTitle: "Montage Vidéo Publicitaire | Ads Créatives", metaDescription: "Montage vidéo publicitaire à Laval. Créatives ads optimisées pour Google, Meta, TikTok. Maximisez votre ROI.", keywords: ["montage vidéo publicitaire", "vidéo ads", "créative vidéo publicitaire", "vidéo marketing", "production vidéo publicitaire"], relatedServices: ["google-ads", "facebook-ads", "tiktok-ads", "lead-generation"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail", "automobile"], relatedBlogCategories: ["google-ads", "facebook-ads"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  // --- Par thématique ---
  { slug: "video-mariage", name: "Vidéo Mariage", category: "creative", parentSlug: "montage-video", icon: "Heart", shortDescription: "Montage vidéo mariage professionnel. Film souvenir, highlights, aftermovie, teaser réseaux sociaux.", metaTitle: "Montage Vidéo Mariage Laval | Film Mariage", metaDescription: "Montage vidéo mariage à Laval. Film souvenir, highlights, aftermovie. Revivez votre journée en images. Devis gratuit.", keywords: ["montage vidéo mariage", "vidéo mariage laval", "film mariage montréal", "vidéaste mariage québec", "monteur vidéo mariage"], relatedServices: ["video-anniversaire", "video-evenementiel", "graphisme"], relatedSectors: ["tourisme-hotellerie", "beaute-esthetique"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "video-anniversaire", name: "Vidéo Anniversaire", category: "creative", parentSlug: "montage-video", icon: "PartyPopper", shortDescription: "Montage vidéo anniversaire et fêtes. Rétrospective, diaporama animé, vidéo surprise personnalisée.", metaTitle: "Montage Vidéo Anniversaire | Vidéo Fête", metaDescription: "Montage vidéo anniversaire à Laval. Rétrospective, diaporama animé, vidéo surprise. Un cadeau original et émouvant.", keywords: ["montage vidéo anniversaire", "vidéo anniversaire", "vidéo fête", "diaporama anniversaire", "vidéo surprise"], relatedServices: ["video-mariage", "video-evenementiel", "montage-video-youtube"], relatedSectors: ["tourisme-hotellerie"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "video-corporate", name: "Vidéo Corporate", category: "creative", parentSlug: "montage-video", icon: "Building2", shortDescription: "Vidéo corporate professionnelle. Présentation entreprise, culture, recrutement, rapport annuel en vidéo.", metaTitle: "Vidéo Corporate Laval | Film d'Entreprise", metaDescription: "Vidéo corporate à Laval. Film d'entreprise, présentation, recrutement, culture. Renforcez votre image de marque.", keywords: ["vidéo corporate", "film entreprise laval", "vidéo institutionnelle", "vidéo recrutement", "présentation vidéo entreprise"], relatedServices: ["montage-video-linkedin", "montage-video-youtube", "graphisme"], relatedSectors: ["services-professionnels", "education-formation", "construction-renovation"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "video-evenementiel", name: "Vidéo Événementiel", category: "creative", parentSlug: "montage-video", icon: "CalendarDays", shortDescription: "Montage vidéo événementiel. Conférences, salons, lancements, galas, aftermovies professionnels.", metaTitle: "Vidéo Événementiel Laval | Aftermovie Pro", metaDescription: "Montage vidéo événementiel à Laval. Conférences, salons, galas, lancements produits. Aftermovies professionnels.", keywords: ["vidéo événementiel", "aftermovie professionnel", "vidéo conférence", "vidéo salon", "vidéo gala", "vidéo lancement"], relatedServices: ["video-corporate", "montage-video-youtube", "montage-video-linkedin"], relatedSectors: ["tourisme-hotellerie", "education-formation", "services-professionnels"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "video-immobilier", name: "Vidéo Immobilier", category: "creative", parentSlug: "montage-video", icon: "Home", shortDescription: "Vidéo immobilière professionnelle. Visites filmées, drone, présentation de biens, agences immobilières.", metaTitle: "Vidéo Immobilier Laval | Visite Vidéo Pro", metaDescription: "Vidéo immobilière à Laval. Visites filmées, présentations de biens, vidéo drone. Vendez plus vite avec la vidéo.", keywords: ["vidéo immobilier", "visite vidéo immobilier", "vidéo drone immobilier", "film immobilier", "vidéo agent immobilier"], relatedServices: ["video-corporate", "visite-virtuelle-360", "montage-video-youtube"], relatedSectors: ["immobilier", "construction-renovation"], relatedBlogCategories: ["marketing-digital"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
  { slug: "video-ecommerce-produit", name: "Vidéo E-commerce & Produit", category: "creative", parentSlug: "montage-video", icon: "ShoppingBag", shortDescription: "Vidéo produit e-commerce. Unboxing, démonstration, présentation produit, vidéo 360° produit.", metaTitle: "Vidéo Produit E-commerce | Vidéo Unboxing", metaDescription: "Vidéo produit et e-commerce à Laval. Unboxing, démonstration, présentation. Boostez vos ventes avec la vidéo.", keywords: ["vidéo produit", "vidéo ecommerce", "unboxing vidéo", "vidéo démonstration produit", "vidéo 360 produit"], relatedServices: ["montage-video-publicitaire", "montage-video-instagram", "montage-video-tiktok"], relatedSectors: ["ecommerce-en-ligne", "commerce-detail", "beaute-esthetique"], relatedBlogCategories: ["ecommerce"], pricingLink: "/tarifs/montage-video/", stripeLinks: [] },
];

// ============================================================
// EXPORT — Assembled data
// ============================================================

/** All 21 service hubs */
export const SERVICE_HUBS: ServiceData[] = [
  conceptionWeb,
  vibeCoding,
  odoo,
  googleAds,
  facebookAds,
  tiktokAds,
  linkedinAds,
  snapchatAds,
  pinterestAds,
  nativeAds,
  bingAds,
  amazonAds,
  wazeAds,
  seo,
  googleMyBusiness,
  graphisme,
  leadGeneration,
  intelligenceArtificielle,
  developpementSaas,
  sitesImmersifs3d,
  montageVideo,
];

/** All sub-services flat array */
export const SERVICE_SUBS: ServiceData[] = [
  ...conceptionWebSubs,
  ...vibeCodingSubs,
  ...odooSubs,
  ...googleAdsSubs,
  ...facebookAdsSubs,
  ...tiktokAdsSubs,
  ...linkedinAdsSubs,
  ...snapchatAdsSubs,
  ...pinterestAdsSubs,
  ...nativeAdsSubs,
  ...bingAdsSubs,
  ...amazonAdsSubs,
  ...seoSubs,
  ...gmbSubs,
  ...graphismeSubs,
  ...leadGenSubs,
  ...iaSubs,
  ...devSaasSubs,
  ...sites3dSubs,
  ...montageVideoSubs,
];

/** All services combined (hubs + subs) */
export const ALL_SERVICES: ServiceData[] = [
  ...SERVICE_HUBS,
  ...SERVICE_SUBS,
];

// ============================================================
// HELPERS
// ============================================================

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): ServiceData[] {
  return SERVICE_HUBS.filter((s) => s.category === category);
}

export function getSubServices(parentSlug: string): ServiceData[] {
  return SERVICE_SUBS.filter((s) => s.parentSlug === parentSlug);
}

export function getHubBySlug(slug: string): ServiceData | undefined {
  return SERVICE_HUBS.find((s) => s.slug === slug);
}

export function getAllHubSlugs(): string[] {
  return SERVICE_HUBS.map((s) => s.slug);
}

export function getAllSubSlugs(): { category: string; slug: string }[] {
  return SERVICE_SUBS.map((s) => ({
    category: s.parentSlug!,
    slug: s.slug,
  }));
}
