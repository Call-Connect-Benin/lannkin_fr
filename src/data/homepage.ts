// ============================================================
// HOMEPAGE — Contenu des 12 sections
// ============================================================

// --- 1. HERO ---
export const HERO = {
  badge: "Marketing digital à Paris · 100% indépendant",
  title: "On accélère la croissance digitale des PME françaises.",
  subtitle:
    "Conception web, publicité en ligne, référencement, social media et intelligence artificielle réunis sous un même toit. Une équipe parisienne dédiée, un pilotage transparent et des performances mesurables dès le premier mois.",
  cta: {
    primary: { label: "Recevoir mon devis", href: "/devis-gratuit/" },
    secondary: { label: "Découvrir nos expertises", href: "/services/" },
  },
  stats: [
    { value: "+10", label: "années d'expérience" },
    { value: "100K€+", label: "pilotés chaque mois" },
    { value: "4,95/5", label: "note Google" },
    { value: "20+", label: "spécialités couvertes" },
  ],
} as const;

// --- 1B. OFFRES SPOTLIGHT ---
export const OFFERS_SPOTLIGHT = {
  badge: "Offres express",
  title: "Des offres rapides pour lancer, tester et convertir sans inertie.",
  subtitle:
    "Là où beaucoup d'agences vendent seulement du sur-mesure long et opaque, Lannkin propose aussi des formats courts, clairs et actionnables pour aller vite.",
  items: [
    {
      title: "Shopify mono-produit",
      price: "200€ TTC",
      description:
        "Une boutique prête à vendre, pensée pour valider une offre rapidement avec un design propre, responsive et compatible paiement en ligne.",
      bullets: [
        "Mise en ligne rapide",
        "Design pro et adaptatif",
        "Base conforme RGPD",
      ],
      href: "/tarifs/conception-web/",
      accent: "green",
    },
    {
      title: "Landing page WordPress",
      price: "200€",
      description:
        "Une page d'atterrissage claire, optimisée pour vos campagnes et conçue pour transformer le trafic en demandes qualifiées.",
      bullets: [
        "CTA et formulaires intégrés",
        "Pensée pour le SEO",
        "Prête pour vos campagnes",
      ],
      href: "/devis-gratuit/",
      accent: "paper",
    },
    {
      title: "Paiement flexible",
      price: "Jusqu'à 12x",
      description:
        "Des modalités plus souples pour démarrer maintenant sans bloquer le projet sur une décision budgétaire lourde.",
      bullets: [
        "Lancement plus rapide",
        "Capex réduit",
        "Approche progressive",
      ],
      href: "/contact/",
      accent: "dark",
    },
  ],
} as const;

// --- 2. LOGOS / CERTIFICATIONS ---
export const CERTIFICATIONS = {
  title: "Certifiés par les plus grandes plateformes",
  items: [
    { name: "Google Partner", logo: "/images/certifications/google-partner.svg" },
    { name: "Microsoft Advertising Partner", logo: "/images/certifications/microsoft-partner.svg" },
    { name: "Facebook/Meta Partner", logo: "/images/certifications/meta-partner.svg" },
  ],
} as const;

// --- 2B. EMPREINTE INTERNATIONALE ---
export const FOOTPRINT = {
  badge: "Presence France",
  title: "Une agence ancree en France, pensee pour les entreprises francaises.",
  subtitle:
    "Lannkin concentre ses expertises sur le marche francais pour livrer des strategies plus coherentes, des benchmarks utiles et une execution plus nette.",
  markets: [
    {
      name: "Paris",
      focus: "Acquisition digitale, SEO local, conception web premium pour PME francaises.",
      points: ["Google Ads", "SEO", "Sites web", "R&D"],
    },
    {
      name: "Ile-de-France",
      focus: "Culture performance, offres packagees et forte proximite avec les TPE et PME.",
      points: ["Shopify", "Lead gen", "Paid media", "Support"],
    },
    {
      name: "France entiere",
      focus: "Approche selective, orientee qualite d'execution et marches concurrentiels.",
      points: ["Positionnement premium", "Audit", "SEA", "Visibilite"],
    },
  ],
} as const;

// --- 3. SERVICES OVERVIEW ---
export const SERVICES_OVERVIEW = {
  badge: "Nos expertises",
  title: "Une vision 360° pour votre écosystème digital.",
  subtitle:
    "Vingt pôles de compétences réunis au même endroit : du site sur-mesure à l'IA générative, en passant par la publicité digitale et l'identité visuelle.",
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
      title: "SEO & Création",
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
  cta: { label: "Explorer l'ensemble de nos services", href: "/services/" },
} as const;

// --- 4. STATS / CHIFFRES ---
export const STATS = {
  badge: "Les chiffres parlent",
  title: "Des performances concrètes, pas des promesses en l'air.",
  items: [
    { value: "100K€+", label: "investissement média piloté / mois", icon: "Euro" },
    { value: "54", label: "recommandations clients 5 étoiles", icon: "Star" },
    { value: "10+", label: "années sur le terrain", icon: "Calendar" },
    { value: "20", label: "domaines d'intervention", icon: "Layers" },
    { value: "3", label: "certifications officielles", icon: "Award" },
    { value: "100%", label: "clients satisfaits", icon: "Heart" },
  ],
} as const;

// --- 5. POURQUOI LANNKIN ---
export const WHY_LANNKIN = {
  badge: "Pourquoi nous choisir ?",
  title: "L'agilité d'une startup, la rigueur d'une agence.",
  subtitle:
    "Loin des modèles corporate figés, nous sommes une équipe soudée qui conjugue créativité, technologie et analyse de données pour livrer des résultats tangibles.",
  points: [
    {
      title: "Maîtrise multi-canaux",
      description:
        "Google, Meta, TikTok, LinkedIn, Native Ads, SEO : nous pilotons toutes les plateformes publicitaires. Un interlocuteur unique pour orchestrer l'ensemble de votre visibilité.",
      icon: "Zap",
    },
    {
      title: "Technologies avancées",
      description:
        "Vibe coding, IA générative, Three.js, CMS headless : nous tirons parti des outils les plus récents pour vous offrir un temps d'avance sur la concurrence.",
      icon: "Cpu",
    },
    {
      title: "Visibilité sans filtre",
      description:
        "Reporting détaillé, accès direct à vos comptes, aucune clause piège. Vous suivez précisément l'usage de chaque euro investi.",
      icon: "Eye",
    },
    {
      title: "Focus sur la performance",
      description:
        "Chaque levier est tracké. Scripts anti-fraude internes, tests A/B permanents et optimisations continues pour maximiser votre rentabilité.",
      icon: "TrendingUp",
    },
  ],
} as const;

// --- 5B. PÔLE R&D ---
export const RND_SCRIPTS = {
  badge: "Pôle R&D",
  title: "Des scripts et process propriétaires qui transforment vos campagnes en avantage concurrentiel.",
  subtitle:
    "Chez Lannkin, l'innovation ne sert pas à faire joli. Elle sert à réduire les pertes, lire des signaux que d'autres ne voient pas et accélérer les décisions.",
  items: [
    {
      title: "Script Google Ads anti-clics frauduleux",
      description:
        "Il aide à identifier les clics suspects et à structurer les demandes de remboursement pour protéger votre budget publicitaire.",
      result: "Moins de pertes invisibles",
    },
    {
      title: "Script d'analyse des campagnes performantes",
      description:
        "Il met en lumière des données peu exploitées par les tableaux classiques pour orienter les optimisations plus vite et plus finement.",
      result: "Décisions mieux informées",
    },
    {
      title: "Méthodes d'itération internes",
      description:
        "Tests, scoring, lecture croisée du tunnel et retour terrain: la performance repose sur une méthode, pas seulement sur des plateformes.",
      result: "Cycles d'optimisation plus courts",
    },
  ],
} as const;

// --- 6. SERVICES PHARES (Feature cards) ---
export const FEATURED_SERVICES = {
  badge: "Nos services phares",
  title: "Les expertises qui créent la différence.",
  services: [
    {
      title: "Google Ads",
      description:
        "Search, Display, Shopping et YouTube orchestrés avec nos scripts anti-fraude maison. Un retour sur investissement multiplié par 4 en moyenne.",
      href: "/services/google-ads/",
      icon: "Target",
      stat: { value: "4x", label: "ROI moyen" },
    },
    {
      title: "Vibe Coding & CMS IA",
      description:
        "Sites et applications générés avec l'IA (Lovable, Bolt, Cursor) : livraison 3x plus rapide et économie de 50 % par rapport au développement classique.",
      href: "/services/vibe-coding/",
      icon: "Sparkles",
      stat: { value: "3x", label: "plus rapide" },
    },
    {
      title: "SEO Local",
      description:
        "Prenez la tête de Google sur votre zone. Stratégie complète : technique, contenu, backlinks et fiche Google Business Profile.",
      href: "/services/seo/",
      icon: "Search",
      stat: { value: "Top 3", label: "en 6 mois" },
    },
    {
      title: "Intelligence Artificielle",
      description:
        "Agents IA, chatbots, automatisations et RAG sur-mesure. L'IA mise au service de votre productivité et de l'expérience client.",
      href: "/services/intelligence-artificielle/",
      icon: "Brain",
      stat: { value: "40%", label: "gain de productivité" },
    },
  ],
} as const;

// --- 7. TESTIMONIALS ---
export const TESTIMONIALS = {
  badge: "Avis clients",
  title: "La voix de nos partenaires.",
  subtitle: "Note de 4,95 sur Google · 54 avis authentifiés",
  items: [
    {
      name: "Marie Dupont",
      company: "Restaurant Le Gourmet",
      sector: "Restauration",
      quote:
        "Grâce à Lannkin, notre présence en ligne a pris une toute autre dimension. En trois mois, nos réservations ont triplé grâce aux campagnes Google Ads et à notre fiche Business.",
      rating: 5,
      avatar: "/images/testimonials/avatar-1.jpg",
    },
    {
      name: "Antoine Morel",
      company: "Morel Immobilier",
      sector: "Immobilier",
      quote:
        "Un accompagnement humain, des retours rapides et des performances au rendez-vous. Notre site ressort désormais en première page Google sur nos requêtes stratégiques.",
      rating: 5,
      avatar: "/images/testimonials/avatar-2.jpg",
    },
    {
      name: "Sophie Renaud",
      company: "Clinique Éclat Paris",
      sector: "Beauté",
      quote:
        "L'alliance site vitrine et campagnes Instagram a bouleversé notre croissance. Notre clientèle a doublé en six mois. Bravo à toute l'équipe !",
      rating: 5,
      avatar: "/images/testimonials/avatar-3.jpg",
    },
    {
      name: "Marc Leroy",
      company: "Bâtir Pro",
      sector: "Construction",
      quote:
        "Avant notre collaboration, nous étions invisibles sur le web. Aujourd'hui, 80 % de nos nouveaux chantiers proviennent de Google. Un investissement qui change la donne.",
      rating: 5,
      avatar: "/images/testimonials/avatar-4.jpg",
    },
  ],
} as const;

// --- 8. PRICING PREVIEW ---
export const PRICING_PREVIEW = {
  badge: "Nos tarifs",
  title: "Des offres claires, pensées pour chaque budget.",
  subtitle:
    "Aucune clause piège, aucun frais caché. Une tarification lisible et des résultats que l'on peut mesurer.",
  featured: [
    {
      name: "Site Launch",
      price: "99 €/mois",
      description: "Site vitrine responsive, hébergement et certificat SSL inclus",
      href: "/tarifs/conception-web/",
    },
    {
      name: "Google Ads Medium",
      price: "500 €/mois",
      description: "Pilotage de campagnes avec optimisation continue et reporting mensuel",
      href: "/tarifs/google-ads/",
      highlighted: true,
    },
    {
      name: "SEO Netlinking",
      price: "400 €/mois",
      description: "10 backlinks qualitatifs et stratégie de netlinking ciblée",
      href: "/tarifs/seo/",
    },
  ],
  cta: { label: "Voir tous les tarifs", href: "/tarifs/" },
} as const;

// --- 9. SECTORS ---
export const SECTORS_PREVIEW = {
  badge: "Secteurs d'expertise",
  title: "On connaît vos enjeux.",
  subtitle:
    "Chaque secteur a ses codes et ses défis. Notre connaissance métier nous permet de bâtir des stratégies taillées pour votre marché.",
  featured: [
    { name: "Restaurant", href: "/secteurs/restaurant-restauration/", icon: "UtensilsCrossed" },
    { name: "Immobilier", href: "/secteurs/immobilier/", icon: "Home" },
    { name: "Santé", href: "/secteurs/sante/", icon: "Heart" },
    { name: "Construction", href: "/secteurs/construction/", icon: "Hammer" },
    { name: "E-commerce", href: "/secteurs/ecommerce/", icon: "ShoppingCart" },
    { name: "Services pro", href: "/secteurs/services-professionnels/", icon: "Briefcase" },
  ],
  cta: { label: "Voir tous les secteurs", href: "/secteurs/" },
} as const;

// --- 10. BLOG / RESOURCES PREVIEW ---
export const BLOG_PREVIEW = {
  badge: "Ressources gratuites",
  title: "Guides et outils pour entrepreneurs exigeants.",
  subtitle:
    "Guides actionnables, calculateurs, modèles et tactiques pour faire décoller votre activité en ligne. En accès libre, sans formulaire.",
  resources: [
    {
      name: "Le guide Google Ads des PME",
      description: "Méthode pas à pas pour lancer vos campagnes et générer un retour sur investissement rentable.",
      href: "/ressources-gratuites/",
      icon: "Target",
      type: "Guide",
    },
    {
      name: "Audit SEO offert",
      description: "Diagnostic complet de votre site et identification des axes de croissance organique.",
      href: "/ressources-gratuites/",
      icon: "Search",
      type: "Outil",
    },
    {
      name: "Modèle site vitrine",
      description: "Check-list détaillée pour concevoir un site web pro qui transforme les visiteurs en clients.",
      href: "/ressources-gratuites/",
      icon: "FileCode",
      type: "Template",
    },
    {
      name: "Simulateur ROI publicitaire",
      description: "Projetez la rentabilité de vos campagnes avant d'engager le moindre euro.",
      href: "/ressources-gratuites/",
      icon: "TrendingUp",
      type: "Outil",
    },
  ],
  cta: { label: "Découvrir toutes les ressources", href: "/ressources-gratuites/" },
} as const;

// --- 11. CTA SECTION ---
export const CTA_SECTION = {
  title: "Prêt à accélérer votre activité ?",
  subtitle:
    "Recevez sous 24h un devis gratuit adapté à vos besoins. Pas d'engagement, pas de discours creux : uniquement des résultats à la clé.",
  cta: {
    primary: { label: "Obtenir mon devis", href: "/devis-gratuit/" },
    secondary: { label: "Prendre contact", href: "/contact/" },
  },
  trust: [
    "Devis sous 24h",
    "Sans engagement",
    "Partenaires certifiés Google & Meta",
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

// --- 13. PAID LANDSCAPE — Réglementation payée ---
export const PAID_LANDSCAPE = {
  badge: "Paysage publicitaire",
  title: "Chaque levier payant a ses codes.",
  subtitle:
    "Native, SEA, Social Ads : trois écosystèmes complémentaires que nous orchestrons selon vos objectifs, votre budget et la maturité de votre marché.",
  categories: [
    {
      name: "Native Ads",
      tagline: "CPC faible, volume massif, tunnel affiné",
      description:
        "Des coûts d'acquisition réduits à très grande échelle, en contrepartie d'un entonnoir de conversion bien travaillé pour qualifier le trafic.",
      icon: "Newspaper",
      platforms: [
        { name: "Taboola", logo: "/images/ads-platforms/taboola.svg" },
        { name: "Outbrain", logo: "/images/ads-platforms/outbrain.svg" },
        { name: "Criteo", logo: "/images/ads-platforms/criteo.svg" },
        { name: "Propeller Ads", logo: "/images/ads-platforms/propeller.svg" },
      ],
    },
    {
      name: "Campagnes SEA",
      tagline: "Forte intention d'achat, concurrence intense",
      description:
        "Captez les utilisateurs au moment où ils cherchent activement. Une stratégie de mots-clés et d'enchères maîtrisée fait toute la différence.",
      icon: "Target",
      platforms: [
        { name: "Google Ads", logo: "/images/ads-platforms/google-ads.svg" },
        { name: "Microsoft Ads", logo: "/images/ads-platforms/microsoft-ads.svg" },
      ],
    },
    {
      name: "Marketing des médias sociaux",
      tagline: "CPC élevé, bonne offre indispensable",
      description:
        "Du volume, de la créativité et un ciblage précis : une combinaison gagnante quand votre proposition de valeur est travaillée en amont.",
      icon: "Share2",
      platforms: [
        { name: "TikTok", logo: "/images/ads-platforms/tiktok.svg" },
        { name: "LinkedIn", logo: "/images/ads-platforms/linkedin.svg" },
        { name: "Facebook", logo: "/images/ads-platforms/facebook.svg" },
        { name: "Instagram", logo: "/images/ads-platforms/instagram.svg" },
      ],
    },
  ],
} as const;

// --- 14. NATIVE ADS EXPERTISE ---
export const NATIVE_ADS = {
  badge: "Expertise Native Ads",
  title: "On maîtrise le Native Ads et la génération de leads.",
  subtitle:
    "Des campagnes pensées pour allier précision du ciblage et efficacité des résultats. Attirer, convertir, fidéliser : une méthode rodée sur les plus grandes plateformes.",
  bullets: [
    "Stratégies multi-plateformes (Taboola, Outbrain, Criteo)",
    "Tunnels de conversion optimisés en continu",
    "Reporting granulaire et scoring de leads",
    "Scripts anti-fraude propriétaires",
  ],
  cta: { label: "Parler de votre projet", href: "/contact/" },
  trustedBy: [
    { name: "La Maison du Lead" },
    { name: "Richard Partners" },
  ],
} as const;

// --- 15. SHORT-FORM VIDEO ---
export const SHORT_FORM_VIDEO = {
  badge: "Nouveau",
  title: "Le format court qui propulse votre visibilité.",
  subtitle:
    "Un service dédié à la production de vidéos courtes, calibrées pour les algorithmes actuels des réseaux sociaux et les nouvelles exigences du SEO vidéo.",
  features: [
    {
      title: "Production rapide",
      description: "Un rythme de diffusion soutenu, sans sacrifier la qualité narrative.",
      icon: "Video",
    },
    {
      title: "Formats natifs",
      description: "Reels, Shorts, TikTok : chaque vidéo est pensée pour sa plateforme.",
      icon: "Smartphone",
    },
    {
      title: "SEO vidéo",
      description: "Titres, vignettes et mots-clés optimisés pour maximiser la découvrabilité.",
      icon: "Search",
    },
  ],
  platforms: ["TikTok", "Instagram Reels", "YouTube Shorts", "LinkedIn Video"],
  cta: { label: "Découvrir l'offre vidéo", href: "/services/montage-video/" },
} as const;

// --- 16. COMMUNITY (YouTube / Discord) ---
export const COMMUNITY = {
  badge: "Rejoignez-nous",
  title: "Bien plus qu'une agence : une communauté.",
  subtitle:
    "Lannkin partage ses astuces, ses méthodes et ses retours d'expérience. Abonnez-vous à notre chaîne YouTube pour les cas pratiques, et rejoignez notre Discord pour échanger en direct avec l'équipe et d'autres entrepreneurs.",
  cta: {
    youtube: { label: "S'abonner sur YouTube", href: "https://youtube.com/@lannkin" },
    discord: { label: "Rejoindre le Discord", href: "#" },
  },
  stats: [
    { value: "Hebdo", label: "Nouveaux contenus" },
    { value: "Live Q&A", label: "Chaque mois" },
    { value: "Gratuit", label: "Accès libre" },
  ],
} as const;

// ============================================================
// Agrégation pour export
// ============================================================

export const HOMEPAGE = {
  hero: HERO,
  offersSpotlight: OFFERS_SPOTLIGHT,
  certifications: CERTIFICATIONS,
  footprint: FOOTPRINT,
  servicesOverview: SERVICES_OVERVIEW,
  stats: STATS,
  whyLannkin: WHY_LANNKIN,
  rndScripts: RND_SCRIPTS,
  featuredServices: FEATURED_SERVICES,
  testimonials: TESTIMONIALS,
  pricingPreview: PRICING_PREVIEW,
  sectorsPreview: SECTORS_PREVIEW,
  blogPreview: BLOG_PREVIEW,
  ctaSection: CTA_SECTION,
  ecosystem: ECOSYSTEM,
  paidLandscape: PAID_LANDSCAPE,
  nativeAds: NATIVE_ADS,
  shortFormVideo: SHORT_FORM_VIDEO,
  community: COMMUNITY,
} as const;
