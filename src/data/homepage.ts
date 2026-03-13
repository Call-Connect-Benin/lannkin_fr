// ============================================================
// HOMEPAGE — Contenu des 12 sections
// ============================================================

// --- 1. HERO ---
export const HERO = {
  badge: "Agence marketing digital · Laval, Québec",
  title: "On fait grandir les PME québécoises sur le web.",
  subtitle:
    "Site web, Google Ads, SEO, réseaux sociaux, IA — une seule agence locale pour tout votre marketing digital. Des résultats concrets, des prix transparents.",
  cta: {
    primary: { label: "Devis gratuit", href: "/devis-gratuit/" },
    secondary: { label: "Voir nos services", href: "/services/" },
  },
  stats: [
    { value: "+10", label: "ans d'expertise" },
    { value: "100K$+", label: "budget pub/mois géré" },
    { value: "4.95", label: "étoiles Google" },
    { value: "20+", label: "services spécialisés" },
  ],
} as const;

// --- 2. LOGOS / CERTIFICATIONS ---
export const CERTIFICATIONS = {
  title: "Certifiés par les plus grands",
  items: [
    { name: "Google Partner", logo: "/images/certifications/google-partner.svg" },
    { name: "Microsoft Advertising Partner", logo: "/images/certifications/microsoft-partner.svg" },
    { name: "Facebook/Meta Partner", logo: "/images/certifications/meta-partner.svg" },
  ],
} as const;

// --- 3. SERVICES OVERVIEW ---
export const SERVICES_OVERVIEW = {
  badge: "Nos services",
  title: "Une expertise 360° pour chaque besoin.",
  subtitle:
    "20 pôles de compétences. Du site web à l'IA, du Google Ads au graphisme — on couvre tout votre écosystème digital.",
  categories: [
    {
      title: "Web & Développement",
      icon: "Monitor",
      services: [
        { name: "Conception Web", href: "/services/conception-web/", icon: "Monitor" },
        { name: "Vibe Coding & CMS IA", href: "/services/vibe-coding/", icon: "Sparkles" },
        { name: "Odoo", href: "/services/odoo/", icon: "Building2" },
        { name: "SaaS & Apps", href: "/services/developpement-saas/", icon: "Rocket" },
        { name: "Sites 3D", href: "/services/sites-immersifs-3d/", icon: "Box" },
      ],
    },
    {
      title: "Publicité en ligne",
      icon: "Target",
      services: [
        { name: "Google Ads", href: "/services/google-ads/", icon: "Target" },
        { name: "Facebook Ads", href: "/services/facebook-ads/", icon: "Facebook" },
        { name: "TikTok Ads", href: "/services/tiktok-ads/", icon: "Music" },
        { name: "LinkedIn Ads", href: "/services/linkedin-ads/", icon: "Linkedin" },
        { name: "Native Ads", href: "/services/native-ads/", icon: "Newspaper" },
      ],
    },
    {
      title: "SEO & Créatif",
      icon: "Search",
      services: [
        { name: "SEO", href: "/services/seo/", icon: "Search" },
        { name: "Google My Business", href: "/services/google-my-business/", icon: "MapPin" },
        { name: "Graphisme", href: "/services/graphisme/", icon: "Palette" },
        { name: "Lead Generation", href: "/services/lead-generation/", icon: "Magnet" },
        { name: "IA", href: "/services/intelligence-artificielle/", icon: "Brain" },
      ],
    },
  ],
  cta: { label: "Voir tous les services", href: "/services/" },
} as const;

// --- 4. STATS / CHIFFRES ---
export const STATS = {
  badge: "En chiffres",
  title: "Des résultats, pas des promesses.",
  items: [
    { value: "100K$+", label: "budget publicitaire géré par mois", icon: "DollarSign" },
    { value: "54", label: "avis Google 5 étoiles", icon: "Star" },
    { value: "10+", label: "années d'expertise", icon: "Calendar" },
    { value: "20", label: "pôles de compétences", icon: "Layers" },
    { value: "3", label: "certifications majeures", icon: "Award" },
    { value: "100%", label: "satisfaction client", icon: "Heart" },
  ],
} as const;

// --- 5. POURQUOI LANNKIN ---
export const WHY_LANNKIN = {
  badge: "Pourquoi Lannkin ?",
  title: "L'agence qui pense comme une startup.",
  subtitle:
    "On n'est pas une agence corporate. On est une équipe de passionnés qui combine créativité, tech et data pour des résultats concrets.",
  points: [
    {
      title: "Expertise multi-plateforme",
      description:
        "Google, Meta, TikTok, LinkedIn, Native Ads, SEO — on maîtrise toutes les plateformes. Un seul interlocuteur pour tout votre marketing digital.",
      icon: "Zap",
    },
    {
      title: "Tech de pointe",
      description:
        "Vibe coding, IA générative, Three.js, headless CMS. On utilise les technologies les plus avancées pour vous donner un avantage compétitif.",
      icon: "Cpu",
    },
    {
      title: "Transparence totale",
      description:
        "Reporting détaillé, accès à vos comptes, pas de contrat prison. Vous savez exactement où va chaque dollar de votre budget.",
      icon: "Eye",
    },
    {
      title: "ROI obsédés",
      description:
        "Chaque action est mesurée. Scripts anti-fraude propriétaires, A/B testing systématique, et optimisation continue pour maximiser votre retour.",
      icon: "TrendingUp",
    },
  ],
} as const;

// --- 6. SERVICES PHARES (Feature cards) ---
export const FEATURED_SERVICES = {
  badge: "Services phares",
  title: "Nos expertises qui font la différence.",
  services: [
    {
      title: "Google Ads",
      description:
        "Campagnes Search, Display, Shopping, YouTube avec scripts anti-fraude propriétaires. ROI moyen de 4x pour nos clients.",
      href: "/services/google-ads/",
      icon: "Target",
      stat: { value: "4x", label: "ROI moyen" },
    },
    {
      title: "Vibe Coding & CMS IA",
      description:
        "Sites et apps créés avec l'IA (Lovable, Bolt, Cursor). 3x plus rapide, 50 % moins cher que le développement traditionnel.",
      href: "/services/vibe-coding/",
      icon: "Sparkles",
      stat: { value: "3x", label: "plus rapide" },
    },
    {
      title: "SEO Local",
      description:
        "Dominez Google dans votre marché local. Stratégie complète : technique, contenu, backlinks et Google Business Profile.",
      href: "/services/seo/",
      icon: "Search",
      stat: { value: "Top 3", label: "en 6 mois" },
    },
    {
      title: "Intelligence Artificielle",
      description:
        "Agents IA, chatbots, automatisation et RAG. L'IA au service de votre productivité et de l'expérience client.",
      href: "/services/intelligence-artificielle/",
      icon: "Brain",
      stat: { value: "40%", label: "gain de productivité" },
    },
  ],
} as const;

// --- 7. TESTIMONIALS ---
export const TESTIMONIALS = {
  badge: "Témoignages",
  title: "Ce que nos clients disent de nous.",
  subtitle: "4.95 étoiles sur Google · 54 avis vérifiés",
  items: [
    {
      name: "Marie Dupont",
      company: "Restaurant Le Gourmet",
      sector: "Restauration",
      quote:
        "Lannkin a transformé notre visibilité en ligne. Nos réservations ont augmenté de 300 % en 3 mois grâce à Google Ads et notre fiche Google.",
      rating: 5,
      avatar: "/images/testimonials/avatar-1.jpg",
    },
    {
      name: "Jean-François Tremblay",
      company: "Immobilier JFT",
      sector: "Immobilier",
      quote:
        "Équipe réactive et résultats au rendez-vous. Notre site est maintenant en première page Google pour nos mots-clés principaux.",
      rating: 5,
      avatar: "/images/testimonials/avatar-2.jpg",
    },
    {
      name: "Sophie Lavoie",
      company: "Clinique Esthétique Éclat",
      sector: "Beauté",
      quote:
        "Le combo site web + Instagram Ads a été un game changer. On a doublé notre clientèle en 6 mois. Merci à toute l'équipe !",
      rating: 5,
      avatar: "/images/testimonials/avatar-3.jpg",
    },
    {
      name: "Marc Bélanger",
      company: "Construction MB",
      sector: "Construction",
      quote:
        "Avant Lannkin, on avait zéro présence en ligne. Maintenant, 80 % de nos nouveaux contrats viennent de Google. Investissement incroyable.",
      rating: 5,
      avatar: "/images/testimonials/avatar-4.jpg",
    },
  ],
} as const;

// --- 8. PRICING PREVIEW ---
export const PRICING_PREVIEW = {
  badge: "Tarifs",
  title: "Des forfaits transparents pour chaque budget.",
  subtitle:
    "Pas de contrat prison, pas de frais cachés. Nos prix sont clairs et nos résultats mesurables.",
  featured: [
    {
      name: "Site Web Launch",
      price: "99 $/mois",
      description: "Site vitrine responsive avec hébergement et SSL",
      href: "/tarifs/conception-web/",
    },
    {
      name: "Google Ads Medium",
      price: "500 $/mois",
      description: "Gestion campagnes avec optimisation et reporting",
      href: "/tarifs/google-ads/",
      highlighted: true,
    },
    {
      name: "SEO Backlinks",
      price: "400 $/mois",
      description: "10 backlinks qualité et netlinking stratégique",
      href: "/tarifs/seo/",
    },
  ],
  cta: { label: "Voir tous les tarifs", href: "/tarifs/" },
} as const;

// --- 9. SECTORS ---
export const SECTORS_PREVIEW = {
  badge: "Secteurs d'activité",
  title: "On parle votre langage.",
  subtitle:
    "Chaque industrie a ses défis. Notre expertise sectorielle nous permet de créer des stratégies sur mesure pour votre marché.",
  featured: [
    { name: "Restaurant", href: "/secteurs/restaurant-restauration/", icon: "UtensilsCrossed" },
    { name: "Immobilier", href: "/secteurs/immobilier/", icon: "Home" },
    { name: "Santé", href: "/secteurs/sante/", icon: "Heart" },
    { name: "Construction", href: "/secteurs/construction/", icon: "Hammer" },
    { name: "E-commerce", href: "/secteurs/ecommerce/", icon: "ShoppingCart" },
    { name: "Services pro", href: "/secteurs/services-professionnels/", icon: "Briefcase" },
  ],
  cta: { label: "Tous les secteurs", href: "/secteurs/" },
} as const;

// --- 10. BLOG / RESOURCES PREVIEW ---
export const BLOG_PREVIEW = {
  badge: "Ressources gratuites",
  title: "Guides et outils pour entrepreneurs.",
  subtitle:
    "Guides pratiques, calculateurs, templates et stratégies pour développer votre entreprise en ligne. Gratuit, sans inscription.",
  resources: [
    {
      name: "Guide Google Ads pour PME",
      description: "Comment lancer vos premières campagnes publicitaires et obtenir un ROI positif.",
      href: "/ressources-gratuites/",
      icon: "Target",
      type: "Guide",
    },
    {
      name: "Audit SEO gratuit",
      description: "Analysez votre site web et identifiez les opportunités de croissance organique.",
      href: "/ressources-gratuites/",
      icon: "Search",
      type: "Outil",
    },
    {
      name: "Template site vitrine",
      description: "Checklist complète pour créer un site web professionnel qui convertit.",
      href: "/ressources-gratuites/",
      icon: "FileCode",
      type: "Template",
    },
    {
      name: "Calculateur ROI publicité",
      description: "Estimez le retour sur investissement de vos campagnes publicitaires.",
      href: "/ressources-gratuites/",
      icon: "TrendingUp",
      type: "Outil",
    },
  ],
  cta: { label: "Toutes les ressources", href: "/ressources-gratuites/" },
} as const;

// --- 11. CTA SECTION ---
export const CTA_SECTION = {
  title: "Prêt à propulser votre business ?",
  subtitle:
    "Obtenez un devis gratuit personnalisé en 24 heures. Pas d'engagement, pas de bullshit — juste des résultats.",
  cta: {
    primary: { label: "Demander un devis gratuit", href: "/devis-gratuit/" },
    secondary: { label: "Nous contacter", href: "/contact/" },
  },
  trust: [
    "Devis gratuit en 24h",
    "Aucun engagement",
    "Équipe certifiée Google & Meta",
  ],
} as const;

// --- 12. ECOSYSTEM ---
export const ECOSYSTEM = {
  badge: "Notre écosystème",
  title: "Un réseau de sites spécialisés.",
  sites: [
    {
      name: "lannkin.com",
      url: "https://lannkin.com",
      description: "Version internationale — développement web et CMS IA pour clients anglophones et internationaux.",
      icon: "Globe",
    },
    {
      name: "le-freelance-google-ads.com",
      url: "https://le-freelance-google-ads.com",
      description: "Expertise Paid Media étendue — blog, outils et scripts Google Ads avancés.",
      icon: "Target",
    },
    {
      name: "achatavis.com",
      url: "https://achatavis.com",
      description: "Plateforme d'achat et de gestion d'avis Google pour entreprises locales.",
      icon: "Star",
    },
  ],
} as const;

// ============================================================
// Agrégation pour export
// ============================================================

export const HOMEPAGE = {
  hero: HERO,
  certifications: CERTIFICATIONS,
  servicesOverview: SERVICES_OVERVIEW,
  stats: STATS,
  whyLannkin: WHY_LANNKIN,
  featuredServices: FEATURED_SERVICES,
  testimonials: TESTIMONIALS,
  pricingPreview: PRICING_PREVIEW,
  sectorsPreview: SECTORS_PREVIEW,
  blogPreview: BLOG_PREVIEW,
  ctaSection: CTA_SECTION,
  ecosystem: ECOSYSTEM,
} as const;
