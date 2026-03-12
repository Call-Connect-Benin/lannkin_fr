// ============================================================
// PORTFOLIO — Réalisations Lannkin
// ============================================================

export type PortfolioCategory = "multipages" | "onepage" | "ecommerce" | "international";

export interface PortfolioProject {
  id: string;
  slug: string;
  name: string;
  client: string;
  category: PortfolioCategory;
  categoryLabel: string;
  sector: string;
  year: number;
  shortDescription: string;
  description: string;
  services: string[];
  technologies: string[];
  results: string[];
  challenge: string;
  solution: string;
  seoTitle: string;
  seoDescription: string;
  externalUrl?: string;
}

// ============================================================
// MULTIPAGES
// ============================================================

const multiPagesProjects: PortfolioProject[] = [
  {
    id: "groupe-bellerive-auto",
    slug: "groupe-bellerive-auto",
    name: "Groupe Bellerive Auto",
    client: "Groupe Bellerive Auto",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Concessionnaire automobile",
    year: 2024,
    shortDescription:
      "Site web multipage pour un concessionnaire auto de la Rive-Nord avec inventaire dynamique et formulaire de prise de rendez-vous.",
    description:
      "Refonte complète du site web d'un concessionnaire automobile de Laval. Architecture multipage avec catalogue de véhicules filtrable, système de prise de rendez-vous en ligne, et landing pages dédiées pour chaque modèle. Intégration SEO local pour dominer les recherches « concessionnaire auto Laval ».",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    results: [
      "+187 % de leads qualifiés en 3 mois",
      "Position #1 sur « concessionnaire auto Laval »",
      "Taux de conversion formulaire : 4,2 %",
      "PageSpeed Score : 97/100",
    ],
    challenge:
      "L'ancien site en WordPress était lent (PageSpeed < 40), mal référencé et ne convertissait pas les visiteurs en prospects.",
    solution:
      "Migration vers Next.js avec génération statique des pages véhicules, SEO technique complet et intégration Google Ads avec suivi des conversions.",
    seoTitle: "Site Web Concessionnaire Auto Laval | Groupe Bellerive — Portfolio Lannkin",
    seoDescription:
      "Découvrez comment Lannkin a créé le site web multipage du Groupe Bellerive Auto à Laval : +187 % de leads, position #1 sur Google. Agence web Laval.",
  },
  {
    id: "clinique-physio-nordik",
    slug: "clinique-physio-nordik",
    name: "Clinique Physio Nordik",
    client: "Clinique Physio Nordik",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Santé et physiothérapie",
    year: 2024,
    shortDescription:
      "Site web clinique de physiothérapie avec prise de rendez-vous en ligne, fiches de professionnels et blogue santé.",
    description:
      "Conception d'un site web professionnel pour une clinique de physiothérapie sur la Rive-Nord de Montréal. Pages dédiées par thérapeute, système de réservation en ligne intégré, blogue de contenu santé pour le SEO, et optimisation Google My Business.",
    services: ["Conception Web", "SEO", "Google My Business"],
    technologies: ["WordPress", "Elementor Pro", "WooBookings", "Cloudflare"],
    results: [
      "+210 % de prises de rendez-vous en ligne",
      "Top 3 Google sur « physiothérapeute Laval »",
      "Note Google My Business : 4,9 / 5",
      "Temps de chargement < 2 s",
    ],
    challenge:
      "La clinique dépendait entièrement du téléphone pour les réservations et était invisible sur Google face à des concurrents bien établis.",
    solution:
      "Site multipage optimisé pour la recherche locale avec intégration d'un système de réservation en ligne et stratégie de contenu santé pour le SEO.",
    seoTitle: "Site Web Clinique Physiothérapie Laval | Physio Nordik — Portfolio Lannkin",
    seoDescription:
      "Réalisation Lannkin : site web multipage pour la Clinique Physio Nordik à Laval. +210 % de réservations, Top 3 Google. Agence web Rive-Nord.",
  },
  {
    id: "toitures-excellence-qc",
    slug: "toitures-excellence-qc",
    name: "Toitures Excellence QC",
    client: "Toitures Excellence QC",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Construction et rénovation",
    year: 2023,
    shortDescription:
      "Site vitrine multipage pour une entreprise de couverture et toiture en Montérégie avec devis en ligne et galerie de projets.",
    description:
      "Création d'un site web multipage pour un entrepreneur en toiture desservant la grande région de Montréal. Galerie de réalisations avec photos avant/après, formulaire de demande de devis, pages services détaillées et contenu SEO ciblant les villes de la région.",
    services: ["Conception Web", "SEO", "Google Ads", "Facebook Ads"],
    technologies: ["WordPress", "Beaver Builder", "WPForms", "WP Rocket"],
    results: [
      "+340 % de demandes de devis",
      "ROI Google Ads : 8:1",
      "Position Top 5 sur 12 mots-clés locaux",
      "Taux de rebond réduit de 62 % à 34 %",
    ],
    challenge:
      "Présence digitale nulle : aucun site web, aucune visibilité Google, acquisition de clients 100 % par bouche-à-oreille.",
    solution:
      "Lancement d'un site professionnel avec SEO local agressif et campagnes Google Ads géolocalisées pour générer des leads dès le premier mois.",
    seoTitle: "Site Web Entreprise Toiture Québec | Toitures Excellence — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Toitures Excellence QC. +340 % de demandes de devis, ROI Google Ads 8:1. Agence web marketing digital Québec.",
  },
  {
    id: "assurances-bergeron-associes",
    slug: "assurances-bergeron-associes",
    name: "Assurances Bergeron & Associés",
    client: "Assurances Bergeron & Associés",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Services financiers et assurances",
    year: 2023,
    shortDescription:
      "Refonte du site web d'un cabinet de courtage en assurances avec espace client, calculateurs interactifs et contenu SEO.",
    description:
      "Refonte complète du site web d'un cabinet de courtage indépendant en assurances de dommages à Laval. Architecture multipage avec calculateurs de primes, espace client sécurisé, blogue d'articles de conseil et pages optimisées pour chaque type d'assurance.",
    services: ["Conception Web", "SEO", "Graphisme"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    results: [
      "+95 % de trafic organique en 6 mois",
      "Réduction du taux de rebond de 58 %",
      "Top 3 sur « courtier assurance Laval »",
      "+128 % de demandes de soumissions",
    ],
    challenge:
      "Site vieillissant (2015), non responsive, contenu obsolète et positionnement Google inexistant face aux grands assureurs nationaux.",
    solution:
      "Refonte complète avec architecture SEO pensée pour le contenu de longue traîne, design moderne épuré et stratégie de contenu autorité.",
    seoTitle: "Refonte Site Web Cabinet Assurances Laval | Bergeron & Associés — Portfolio Lannkin",
    seoDescription:
      "Réalisation Lannkin : refonte web pour Assurances Bergeron & Associés à Laval. +95 % trafic organique, Top 3 Google. Portfolio agence web Québec.",
  },
  {
    id: "cuisine-signature-laval",
    slug: "cuisine-signature-laval",
    name: "Cuisine Signature Laval",
    client: "Cuisine Signature Laval",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Rénovation et cuisinistes",
    year: 2024,
    shortDescription:
      "Site web multipage pour un cuisiniste de Laval avec configurateur 3D, galerie projets et formulaire de consultation.",
    description:
      "Conception d'un site web haut de gamme pour un cuisiniste indépendant de Laval. Galerie de réalisations avec photos haute résolution, outil de configuration de cuisine simplifié, témoignages clients, blogue de tendances et pages optimisées pour le SEO local.",
    services: ["Conception Web", "SEO", "Réseaux Sociaux", "Graphisme"],
    technologies: ["Next.js", "Framer Motion", "Cloudinary", "Vercel"],
    results: [
      "+260 % de consultations planifiées",
      "Position #2 sur « cuisiniste Laval »",
      "Durée moyenne de session : 3 min 42 s",
      "Note Google : 4,8 / 5 (124 avis)",
    ],
    challenge:
      "Malgré un excellent travail artisanal, l'entreprise peinait à se démarquer des grandes chaînes de cuisines avec plus de budget publicitaire.",
    solution:
      "Mise en valeur du savoir-faire local avec un site visuellement fort, galerie de projets immersive et stratégie de contenu ciblant les propriétaires de Laval.",
    seoTitle: "Site Web Cuisiniste Laval | Cuisine Signature — Portfolio Lannkin",
    seoDescription:
      "Réalisation Lannkin : site web pour Cuisine Signature Laval. +260 % de consultations, position #2 Google. Portfolio site vitrine Laval Québec.",
  },
];

// ============================================================
// ONEPAGE
// ============================================================

const onePageProjects: PortfolioProject[] = [
  {
    id: "ecoclin-entretien-menager",
    slug: "ecoclin-entretien-menager",
    name: "ÉcoClin Entretien",
    client: "ÉcoClin Entretien Ménager",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Entretien ménager",
    year: 2024,
    shortDescription:
      "Landing page haute conversion pour une entreprise d'entretien ménager écologique avec système de réservation en ligne.",
    description:
      "Conception d'une landing page optimisée pour la conversion pour une entreprise d'entretien ménager éco-responsable à Laval. Page unique avec témoignages, galerie avant/après, formulaire de réservation multi-étapes et intégration de Google Ads.",
    services: ["Conception Web", "Google Ads", "Facebook Ads"],
    technologies: ["Next.js", "Framer Motion", "Stripe", "Vercel"],
    results: [
      "Taux de conversion : 7,8 % (industrie : 2,5 %)",
      "Coût par lead Google Ads : 4,20 $",
      "ROI Facebook Ads : 11:1",
      "120 nouveaux clients en 90 jours",
    ],
    challenge:
      "Marché très concurrentiel avec de nombreux indépendants et besoin de se démarquer rapidement avec un budget publicitaire limité.",
    solution:
      "Landing page ultra-focalisée sur la conversion avec preuve sociale forte, offre claire et tunnel de réservation simplifié en 3 étapes.",
    seoTitle: "Landing Page Entretien Ménager Laval | ÉcoClin — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour ÉcoClin Entretien à Laval. Taux de conversion 7,8 %, 120 nouveaux clients en 90 jours. Site onepage Québec.",
  },
  {
    id: "studio-forme-laval",
    slug: "studio-forme-laval",
    name: "Studio Forme Laval",
    client: "Studio Forme Laval",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Fitness et bien-être",
    year: 2023,
    shortDescription:
      "Site onepage moderne pour un studio de fitness boutique à Laval avec horaires, cours et inscription en ligne.",
    description:
      "Création d'un site onepage dynamique pour un studio de fitness boutique à Laval. Présentation des cours (yoga, HIIT, pilates), horaires interactifs, profils des entraîneurs, témoignages vidéo et système d'inscription/abonnement en ligne.",
    services: ["Conception Web", "Facebook Ads", "Réseaux Sociaux"],
    technologies: ["WordPress", "Elementor Pro", "MindBody Integration", "WP Rocket"],
    results: [
      "+180 % d'inscriptions en ligne",
      "Taux de rebond < 28 %",
      "Campagnes Facebook : ROAS 6,5",
      "Croissance Instagram : +1 200 abonnés en 6 mois",
    ],
    challenge:
      "Studio ouvert depuis 6 mois avec peu de notoriété locale, concurrencé par les grandes chaînes de fitness à faible coût.",
    solution:
      "Site onepage avec identité visuelle forte, mise en avant de la communauté et campagnes Meta Ads ciblant les résidents de Laval dans un rayon de 5 km.",
    seoTitle: "Site Web Studio Fitness Laval | Studio Forme — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site onepage pour Studio Forme Laval. +180 % inscriptions, ROAS Facebook 6,5. Conception site web fitness Laval Québec.",
  },
  {
    id: "resto-aux-saveurs-du-nil",
    slug: "resto-aux-saveurs-du-nil",
    name: "Aux Saveurs du Nil",
    client: "Restaurant Aux Saveurs du Nil",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Restauration",
    year: 2023,
    shortDescription:
      "Site onepage élégant pour un restaurant gastronomique africain à Montréal avec menu dynamique et réservation en ligne.",
    description:
      "Conception d'un site onepage haut de gamme pour un restaurant gastronomique africain à Montréal. Menu interactif avec photos professionnelles, système de réservation en ligne, intégration Google Maps, galerie de l'ambiance et section traiteur pour événements.",
    services: ["Conception Web", "SEO", "Google My Business", "Réseaux Sociaux"],
    technologies: ["Next.js", "Sanity CMS", "OpenTable Integration", "Vercel"],
    results: [
      "+320 % de réservations en ligne",
      "Top 5 sur « restaurant africain Montréal »",
      "Note Google : 4,9 / 5 (89 avis)",
      "+85 % de trafic organique en 4 mois",
    ],
    challenge:
      "Restaurant récemment ouvert, besoin de visibilité rapide dans un quartier compétitif sans budget publicitaire élevé.",
    solution:
      "Site onepage immersif avec photos culinaires professionnelles, SEO local optimisé et stratégie Google My Business pour maximiser les découvertes organiques.",
    seoTitle: "Site Web Restaurant Montréal | Aux Saveurs du Nil — Portfolio Lannkin",
    seoDescription:
      "Réalisation Lannkin : site onepage pour le restaurant Aux Saveurs du Nil à Montréal. +320 % réservations, Top 5 Google. Portfolio web Québec.",
  },
  {
    id: "formations-numerik-pro",
    slug: "formations-numerik-pro",
    name: "NumerikPro Formation",
    client: "NumerikPro Formation",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Formation professionnelle",
    year: 2024,
    shortDescription:
      "Landing page pour des formations en marketing numérique avec tunnel de vente intégré et paiement Stripe.",
    description:
      "Conception d'une landing page de vente pour une entreprise de formation en marketing numérique. Tunnel de vente avec vidéo VSL, témoignages, FAQ, garantie de remboursement et checkout Stripe optimisé. Intégration de campagnes Google Ads et Meta Ads.",
    services: ["Conception Web", "Google Ads", "Facebook Ads"],
    technologies: ["Next.js", "Stripe", "ConvertKit", "Vercel"],
    results: [
      "Taux de conversion page : 5,4 %",
      "Coût d'acquisition client : 38 $ CAD",
      "ROAS Google Ads : 9,2",
      "Revenus mois 1 : 47 000 $ CAD",
    ],
    challenge:
      "Lancement d'un nouveau programme de formation avec besoin de vendre rapidement pour valider le marché et couvrir les coûts de création de contenu.",
    solution:
      "Landing page de vente avec copywriting persuasif, preuve sociale solide et tunnel de conversion optimisé, combiné à des campagnes publicitaires ROI-positives dès la première semaine.",
    seoTitle: "Landing Page Formation Marketing Numérique | NumerikPro — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour NumerikPro Formation. ROAS 9,2, 47 000 $ de revenus le premier mois. Conception site web formation Québec.",
  },
];

// ============================================================
// E-COMMERCE
// ============================================================

const ecommerceProjects: PortfolioProject[] = [
  {
    id: "boutique-nordik-outdoor",
    slug: "boutique-nordik-outdoor",
    name: "Nordik Outdoor",
    client: "Nordik Outdoor",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Vêtements et équipement de plein air",
    year: 2024,
    shortDescription:
      "Boutique en ligne Shopify pour une marque québécoise de vêtements de plein air avec +800 produits et logistique automatisée.",
    description:
      "Création d'une boutique e-commerce Shopify premium pour une marque québécoise de vêtements et équipements de plein air. Catalogue de +800 produits avec filtres avancés, gestion des tailles et couleurs, intégration logistique (ShipStation), et stratégies d'acquisition multi-canaux.",
    services: ["Conception Web", "Google Ads", "Facebook Ads", "SEO"],
    technologies: ["Shopify Plus", "Liquid", "Google Shopping", "Klaviyo"],
    results: [
      "Revenus e-commerce : +420 % en 6 mois",
      "ROAS Google Shopping : 7,8",
      "Panier moyen : 287 $ CAD",
      "Taux d'abandon de panier réduit de 72 % à 58 %",
    ],
    challenge:
      "Marque établie en détail physique souhaitant lancer sa présence en ligne pour réduire sa dépendance aux revendeurs et augmenter ses marges.",
    solution:
      "Migration vers Shopify Plus avec expérience d'achat premium, campagnes Google Shopping optimisées et automatisation marketing par courriel avec Klaviyo.",
    seoTitle: "Boutique E-commerce Shopify Québec | Nordik Outdoor — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : boutique e-commerce Shopify pour Nordik Outdoor. +420 % revenus, ROAS 7,8. Création e-commerce Québec Canada.",
  },
  {
    id: "artisan-savon-nature",
    slug: "artisan-savon-nature",
    name: "Savon Nature Artisan",
    client: "Savon Nature Artisan",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Cosmétiques naturels et artisanaux",
    year: 2023,
    shortDescription:
      "Boutique en ligne WooCommerce pour une artisane savonnière québécoise avec abonnement mensuel et vente en gros.",
    description:
      "Développement d'une boutique e-commerce WooCommerce pour une artisane savonnière de la région de Québec. Système d'abonnement mensuel (boîte surprise), vente en gros pour les détaillants, pages produits optimisées avec descriptions riches et stratégie SEO pour le e-commerce naturel.",
    services: ["Conception Web", "SEO", "Facebook Ads", "Réseaux Sociaux"],
    technologies: ["WordPress", "WooCommerce", "WooSubscriptions", "Meta Ads"],
    results: [
      "Lancement : 12 000 $ de ventes le mois 1",
      "300 abonnés actifs à la boîte mensuelle",
      "ROAS Facebook/Instagram : 5,3",
      "Top 3 sur « savon artisanal Québec »",
    ],
    challenge:
      "Artisane vendant uniquement en marchés locaux et foires artisanales, souhaitant créer une source de revenus récurrents en ligne.",
    solution:
      "Boutique e-commerce avec mise en valeur de l'artisanat québécois, système d'abonnement pour revenus prévisibles et campagnes Meta Ads ciblant les amateurs de produits naturels au Canada.",
    seoTitle: "Boutique E-commerce Cosmétiques Naturels Québec | Savon Nature — Portfolio Lannkin",
    seoDescription:
      "Réalisation Lannkin : e-commerce pour Savon Nature Artisan. 12 000 $ mois 1, 300 abonnés, ROAS 5,3. Création boutique en ligne Québec Canada.",
  },
  {
    id: "equipements-pro-chef",
    slug: "equipements-pro-chef",
    name: "ProChef Équipements",
    client: "ProChef Équipements",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Équipements de cuisine professionnelle",
    year: 2024,
    shortDescription:
      "E-commerce B2B pour la vente d'équipements de cuisine professionnelle au Canada avec catalogue de +2 000 produits.",
    description:
      "Développement d'une plateforme e-commerce B2B pour un distributeur d'équipements de cuisine professionnelle desservant les restaurants, hôtels et traiteurs du Canada. Catalogue de +2 000 références, pricing par paliers selon le volume, espace compte client professionnel et devis automatisés.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["Next.js", "Medusa.js", "Stripe", "Algolia Search"],
    results: [
      "+890 % de commandes en ligne vs téléphone",
      "Économie opérationnelle : 40 h/semaine",
      "Panier moyen : 1 840 $ CAD",
      "Position Top 5 sur 25 mots-clés B2B",
    ],
    challenge:
      "Processus de commande entièrement manuel (téléphone, fax, email), catalogue papier obsolète et perte de clients au profit de concurrents en ligne.",
    solution:
      "Plateforme e-commerce B2B sur mesure avec recherche ultra-rapide (Algolia), tarification dynamique par volume et espace client professionnel pour gérer les commandes.",
    seoTitle: "E-commerce B2B Équipements CHR Canada | ProChef — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : e-commerce B2B pour ProChef Équipements. +890 % commandes en ligne, panier moyen 1 840 $. Création boutique en ligne Canada.",
  },
  {
    id: "deco-maison-kali",
    slug: "deco-maison-kali",
    name: "Kali Déco Maison",
    client: "Kali Déco Maison",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Décoration intérieure",
    year: 2023,
    shortDescription:
      "Boutique e-commerce Shopify pour une entreprise de décoration intérieure avec lookbooks interactifs et AR preview.",
    description:
      "Création d'une boutique Shopify haut de gamme pour une marque québécoise de décoration intérieure. Lookbooks interactifs saison par saison, intégration AR pour visualiser les produits chez soi, programme de fidélité et stratégie de contenu Pinterest/Instagram très développée.",
    services: ["Conception Web", "Facebook Ads", "Réseaux Sociaux", "SEO"],
    technologies: ["Shopify Plus", "Liquid", "Instagram Shopping", "Yotpo"],
    results: [
      "Revenus première année : 380 000 $ CAD",
      "ROAS Facebook/Instagram : 4,8",
      "Taux de répétition d'achat : 42 %",
      "+6 800 abonnés Instagram en 12 mois",
    ],
    challenge:
      "Marque créative avec un très beau produit mais aucune présence digitale structurée, vendant uniquement via les réseaux sociaux sans site propre.",
    solution:
      "Boutique Shopify premium reflétant l'univers esthétique de la marque, avec stratégie social commerce intégrée et programme de fidélité pour maximiser la valeur vie client.",
    seoTitle: "Boutique E-commerce Déco Intérieure Québec | Kali Déco — Portfolio Lannkin",
    seoDescription:
      "Réalisation Lannkin : e-commerce Shopify pour Kali Déco Maison. 380 000 $ revenus an 1, ROAS 4,8. Boutique en ligne déco intérieure Québec.",
  },
];

// ============================================================
// INTERNATIONAL
// ============================================================

const internationalProjects: PortfolioProject[] = [
  {
    id: "quadventure-agadir",
    slug: "quadventure-agadir",
    name: "Quad Venture Agadir",
    client: "Quad Venture Agadir",
    category: "international",
    categoryLabel: "International",
    sector: "Tourisme et aventure — Maroc",
    year: 2023,
    shortDescription:
      "Site web pour une agence de quad et aventure à Agadir (Maroc) ciblant les touristes internationaux.",
    description:
      "Conception d'un site web multilingue pour une agence de tourisme aventure à Agadir, Maroc. Présentation des excursions quad, buggy et randonnées, galerie photo et vidéo, système de réservation en ligne et ciblage SEO international.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WooBookings"],
    results: [
      "Visibilité internationale renforcée",
      "Réservations en ligne depuis l'Europe et l'Amérique du Nord",
    ],
    challenge: "Attirer des touristes étrangers via le web dans un marché très concurrentiel.",
    solution: "Site multilingue optimisé pour le SEO international avec photos immersives.",
    seoTitle: "Quad Venture Agadir — Portfolio International Lannkin",
    seoDescription: "Réalisation Lannkin : site web pour Quad Venture Agadir, Maroc. Conception web internationale.",
    externalUrl: "https://quadventure-agadir.com/",
  },
  {
    id: "alltouchdisplay",
    slug: "alltouchdisplay",
    name: "All Touch Display",
    client: "All Touch Display",
    category: "international",
    categoryLabel: "International",
    sector: "Technologie — Chine",
    year: 2022,
    shortDescription:
      "E-commerce B2B pour un fabricant chinois d'écrans tactiles industriels vendant à l'international.",
    description:
      "Développement d'un site e-commerce B2B en anglais pour un fabricant d'écrans tactiles et d'affichage basé en Chine. Catalogue produits complet, demandes de devis, contenu SEO ciblant l'Europe et l'Amérique du Nord.",
    services: ["Conception Web", "SEO"],
    technologies: ["WordPress", "WooCommerce", "Cloudflare"],
    results: [
      "Leads qualifiés depuis 40+ pays",
      "Trafic organique international multiplié par 3",
    ],
    challenge: "Percer les marchés occidentaux depuis la Chine avec une présence web crédible.",
    solution: "Site anglophone professionnel avec SEO technique optimisé pour Google (hors Chine).",
    seoTitle: "All Touch Display Chine — Portfolio International Lannkin",
    seoDescription: "Réalisation Lannkin : e-commerce B2B pour All Touch Display, fabricant d'écrans tactiles en Chine.",
    externalUrl: "https://www.alltouchdisplay.com/",
  },
  {
    id: "artisans-marceau-paris",
    slug: "artisans-marceau-paris",
    name: "Les Artisans Marceau",
    client: "Les Artisans Marceau",
    category: "international",
    categoryLabel: "International",
    sector: "Plomberie — France (Paris)",
    year: 2023,
    shortDescription:
      "Site web SEO ultra-compétitif pour un plombier parisien dans l'un des marchés locaux les plus difficiles de France.",
    description:
      "Refonte du site web d'une entreprise de plomberie haut de gamme à Paris, dans un marché extrêmement concurrentiel. Architecture SEO avancée, contenu local ciblant arrondissement par arrondissement, et stratégie Google Ads géolocalisée.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["Next.js", "TypeScript", "Vercel"],
    results: [
      "Top 5 sur « plombier Paris » — marché ultra-compétitif",
      "+250 % de leads qualifiés en 6 mois",
    ],
    challenge: "Se positionner sur Google dans le marché parisien de la plomberie, l'un des plus saturés en France.",
    solution: "Architecture SEO locale par arrondissement, contenu hyper-ciblé et campagnes Google Ads géolocalisées.",
    seoTitle: "Les Artisans Marceau Paris — Portfolio International Lannkin",
    seoDescription: "Réalisation Lannkin : site SEO pour Les Artisans Marceau, plombier Paris. Top 5 Google marché ultra-compétitif.",
    externalUrl: "https://www.lesartisansmarceau.fr/",
  },
  {
    id: "vigilante-4x4",
    slug: "vigilante-4x4",
    name: "Vigilante 4x4",
    client: "Vigilante 4x4",
    category: "international",
    categoryLabel: "International",
    sector: "4x4 rétro de luxe — USA",
    year: 2024,
    shortDescription:
      "Site web premium pour un fabricant américain de 4x4 rétro de luxe destiné à une clientèle fortunée mondiale.",
    description:
      "Conception d'un site web haut de gamme pour Vigilante 4x4, marque américaine de véhicules tout-terrain rétro de luxe. Expérience immersive avec galerie photo professionnelle, configurateur de véhicule et positionnement premium ciblant les États-Unis et l'international.",
    services: ["Conception Web", "SEO", "Réseaux Sociaux"],
    technologies: ["Next.js", "Framer Motion", "Vercel"],
    results: [
      "Positionnement premium établi en ligne",
      "Couverture médiatique internationale générée",
    ],
    challenge: "Communiquer le prestige et l'exclusivité d'une marque de niche ultra-premium.",
    solution: "Site immersif avec photographie haut de gamme, animations fluides et copywriting orienté désirabilité.",
    seoTitle: "Vigilante 4x4 USA — Portfolio International Lannkin",
    seoDescription: "Réalisation Lannkin : site web premium pour Vigilante 4x4, marque américaine de 4x4 rétro de luxe.",
    externalUrl: "https://vigilante4x4.com/",
  },
  {
    id: "essence-design-lausanne",
    slug: "essence-design-lausanne",
    name: "Essence Design",
    client: "Essence Design",
    category: "international",
    categoryLabel: "International",
    sector: "Agence de branding — Suisse (Lausanne)",
    year: 2023,
    shortDescription:
      "Refonte du site web d'une agence de branding basée à Lausanne, Suisse, avec positionnement haut de gamme.",
    description:
      "Conception d'un site web d'agence de branding pour Essence Design à Lausanne, Suisse. Design épuré, portfolio de réalisations interactif, copywriting français/anglais et optimisation SEO sur le marché suisse romand.",
    services: ["Conception Web", "SEO", "Graphisme"],
    technologies: ["Next.js", "Framer Motion", "Sanity CMS"],
    results: [
      "Positionnement Top 3 en Suisse romande",
      "Clients grand compte acquis via le web",
    ],
    challenge: "Se démarquer dans un marché du design suisse très exigeant avec peu de budget publicitaire.",
    solution: "Site de portfolio immersif mettant en valeur le savoir-faire de l'agence avec SEO local suisse romand.",
    seoTitle: "Essence Design Lausanne — Portfolio International Lannkin",
    seoDescription: "Réalisation Lannkin : site web pour Essence Design, agence de branding à Lausanne Suisse.",
    externalUrl: "https://www.essencedesign.com/",
  },
  {
    id: "rotho-ecommerce-allemagne",
    slug: "rotho-ecommerce-allemagne",
    name: "Rotho",
    client: "Rotho",
    category: "international",
    categoryLabel: "International",
    sector: "E-commerce — Allemagne",
    year: 2022,
    shortDescription:
      "Accompagnement e-commerce et stratégie digitale pour Rotho, grande marque de produits ménagers en Allemagne.",
    description:
      "Stratégie digitale et optimisation e-commerce pour Rotho, marque européenne de produits de rangement et d'organisation ménagère basée en Allemagne. SEO multilingue, optimisation Google Shopping et campagnes publicitaires pour les marchés DACH.",
    services: ["SEO", "Google Ads", "Conception Web"],
    technologies: ["Shopify", "Google Shopping", "Analytics 4"],
    results: [
      "Croissance e-commerce sur les marchés DACH",
      "ROI Google Shopping optimisé",
    ],
    challenge: "Optimiser la présence digitale d'une marque établie sur les marchés germanophones.",
    solution: "SEO multilingue DE/FR/EN et campagnes Google Shopping structurées par marché géographique.",
    seoTitle: "Rotho Allemagne — Portfolio International Lannkin",
    seoDescription: "Réalisation Lannkin : stratégie digitale e-commerce pour Rotho, marque de produits ménagers en Allemagne.",
    externalUrl: "https://rotho.com/",
  },
];

// ============================================================
// EXPORT
// ============================================================

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  ...multiPagesProjects,
  ...onePageProjects,
  ...ecommerceProjects,
  ...internationalProjects,
];

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "multipages", label: "Multipages" },
  { id: "onepage", label: "Onepage" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "international", label: "International" },
];
