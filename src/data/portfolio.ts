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
  previewImage?: string;
  clientLogo?: string;
}

// ============================================================
// MULTIPAGES
// ============================================================

const multiPagesProjects: PortfolioProject[] = [
  {
    id: "plomberies-lb",
    slug: "plomberies-lb",
    name: "Plomberies LB",
    client: "Plomberies LB",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Plomberie et chauffage",
    year: 2023,
    shortDescription:
      "Site web multipage pour une entreprise de plomberie et chauffage avec pages services, galerie de réalisations et formulaire de contact.",
    description:
      "Conception d'un site web multipage professionnel pour Plomberies LB, entreprise spécialisée en plomberie et chauffage en France. Architecture multipage avec pages services détaillées, galerie de réalisations, formulaire de contact et optimisation SEO local pour dominer les recherches locales.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Site web professionnel livré",
      "Visibilité locale améliorée sur Google",
      "Leads via formulaire de contact",
      "PageSpeed optimisé",
    ],
    challenge:
      "Se démarquer dans un marché compétitif de la plomberie en ligne et générer des demandes de service directement via le web.",
    solution:
      "Site multipage optimisé pour le SEO local avec pages services détaillées, galerie photo et formulaire de demande de service en ligne.",
    seoTitle: "Site Web Plomberie France | Plomberies LB — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour Plomberies LB. Conception web plomberie France, SEO local et Google Ads.",
    externalUrl: "https://www.plomberieslb.ca/",
    previewImage: "/images/portfolio/plomberie-slb.webp",
  },
  {
    id: "reno-st-georges",
    slug: "reno-st-georges",
    name: "Réno St-Georges",
    client: "Réno St-Georges",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Rénovation résidentielle",
    year: 2024,
    shortDescription:
      "Site web multipage pour une entreprise de rénovation résidentielle avec galerie projets, soumission en ligne et pages par service.",
    description:
      "Conception d'un site web multipage pour Réno St-Georges, entrepreneur en rénovation résidentielle. Pages services détaillées (cuisine, salle de bain, sous-sol), galerie de réalisations avec photos avant/après, formulaire de soumission gratuite et contenu SEO ciblant la clientèle locale.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Cloudflare"],
    results: [
      "Présence web professionnelle établie",
      "Galerie de réalisations valorisant le savoir-faire",
      "Demandes de soumission générées en ligne",
      "Meilleure visibilité locale sur Google",
    ],
    challenge:
      "Valoriser un savoir-faire artisanal de qualité face à des concurrents mieux établis en ligne et générer des soumissions qualifiées.",
    solution:
      "Site multipage avec galerie photo immersive, contenu SEO local et formulaire de soumission simplifié pour convertir les visiteurs en clients.",
    seoTitle: "Site Web Entrepreneur Rénovation France | Réno St-Georges — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour Réno St-Georges. Conception web entrepreneur rénovation résidentielle France.",
    externalUrl: "https://www.renostgeorges.ca/",
    previewImage: "/images/portfolio/reno-st-georges.webp",
  },
  {
    id: "groupe-lariviere",
    slug: "groupe-lariviere",
    name: "Groupe Larivière",
    client: "Groupe Larivière",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Groupe de services",
    year: 2023,
    shortDescription:
      "Site web multipage institutionnel pour un groupe d'entreprises de services avec navigation multi-secteurs et formulaires de contact.",
    description:
      "Réalisation du site web multipage du Groupe Larivière, regroupant plusieurs entités de services. Architecture multipage pensée pour présenter plusieurs secteurs d'activité de façon claire, avec navigation intuitive, pages par division et formulaires de contact adaptés à chaque service.",
    services: ["Conception Web", "SEO", "Graphisme"],
    technologies: ["WordPress", "Elementor Pro", "WP Rocket", "Cloudflare"],
    results: [
      "Site institutionnel professionnel livré",
      "Navigation claire entre les divisions du groupe",
      "Présence en ligne unifiée pour toutes les entités",
      "Site responsive et performant",
    ],
    challenge:
      "Concevoir un site qui reflète la diversité des services du groupe tout en maintenant une identité visuelle cohérente et une navigation simple.",
    solution:
      "Architecture multipage modulaire avec navigation par secteur, identité visuelle unifiée et contenu SEO spécifique à chaque division du groupe.",
    seoTitle: "Site Web Groupe de Services France | Groupe Larivière — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour le Groupe Larivière. Conception web institutionnelle France, navigation multi-services.",
    externalUrl: "https://www.groupelariviere.ca/fr",
    previewImage: "/images/portfolio/groupe-lariviere.webp",
  },
  {
    id: "constructeurs-de-qualite",
    slug: "constructeurs-de-qualite",
    name: "Constructeurs de Qualité",
    client: "Constructeurs de Qualité",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Construction résidentielle",
    year: 2023,
    shortDescription:
      "Site web multipage pour un entrepreneur général en construction résidentielle avec galerie projets et demande de soumission.",
    description:
      "Réalisation du site web multipage de Constructeurs de Qualité, entrepreneur général en construction résidentielle en France. Présentation des projets réalisés (maisons neuves, extensions, rénovations majeures), pages services détaillées, formulaire de soumission et optimisation SEO locale.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Cloudflare"],
    results: [
      "Site web professionnel reflétant l'expertise en construction",
      "Galerie de projets réalisés convaincante",
      "Demandes de soumission générées en ligne",
      "Meilleure visibilité Google locale",
    ],
    challenge:
      "Établir une présence digitale crédible dans un secteur de la construction où la réputation et les réalisations sont déterminantes.",
    solution:
      "Site multipage mettant en avant les réalisations photographiées avec contenu SEO local et formulaire de soumission optimisé.",
    seoTitle: "Site Web Entrepreneur Général Construction France | Constructeurs de Qualité — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Constructeurs de Qualité. Entrepreneur général construction résidentielle France.",
    externalUrl: "https://www.constructeursdequalite.ca/",
    previewImage: "/images/portfolio/constructeurs-de-qualite.webp",
  },
];

// ============================================================
// ONEPAGE
// ============================================================

const onePageProjects: PortfolioProject[] = [
  {
    id: "nettoyage-ideal",
    slug: "nettoyage-ideal",
    name: "Nettoyage Idéal",
    client: "Nettoyage Idéal",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Entretien ménager résidentiel",
    year: 2023,
    shortDescription:
      "Landing page haute conversion pour une entreprise d'entretien ménager résidentiel avec formulaire de réservation et témoignages clients.",
    description:
      "Conception d'une landing page optimisée pour la conversion pour Nettoyage Idéal, service d'entretien ménager résidentiel en France. Page unique avec présentation des services, grille tarifaire, témoignages clients, galerie avant/après et formulaire de réservation en ligne intégré.",
    services: ["Conception Web", "Google Ads", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Landing page optimisée pour la conversion",
      "Formulaire de réservation en ligne fonctionnel",
      "Campagnes publicitaires ROI-positives",
      "Nouvelles réservations générées dès le lancement",
    ],
    challenge:
      "Se démarquer dans un marché compétitif de l'entretien ménager et convertir rapidement les visiteurs en clients réguliers.",
    solution:
      "Landing page focalisée sur la conversion avec preuve sociale forte, offre claire et formulaire de réservation simplifié en quelques clics.",
    seoTitle: "Site Web Entretien Ménager France | Nettoyage Idéal — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour Nettoyage Idéal. Conception web entretien ménager résidentiel France, Google Ads et Facebook Ads.",
    externalUrl: "https://www.nettoyageideal.com/",
    previewImage: "/images/portfolio/nettoyage-ideal.webp",
  },
  {
    id: "nettoyage-leblanc",
    slug: "nettoyage-leblanc",
    name: "Nettoyage Leblanc",
    client: "Nettoyage Leblanc",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Entretien ménager",
    year: 2022,
    shortDescription:
      "Landing page pour une entreprise d'entretien ménager résidentiel et commercial avec formulaire de contact et témoignages.",
    description:
      "Réalisation d'une landing page pour Nettoyage Leblanc, service d'entretien ménager résidentiel et commercial. Page unique avec présentation des forfaits, galerie avant/après, section témoignages clients et formulaire de demande de soumission gratuite.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Landing page opérationnelle dès le lancement",
      "Demandes de soumission générées en ligne",
      "Présence Google locale établie",
      "Design professionnel fidèle à l'image de l'entreprise",
    ],
    challenge:
      "Établir rapidement une présence digitale crédible pour attirer de nouveaux clients résidentiels et commerciaux.",
    solution:
      "Landing page efficace avec preuve sociale, offres claires et formulaire de soumission pour convertir les visiteurs en clients.",
    seoTitle: "Site Web Entretien Ménager France | Nettoyage Leblanc — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour Nettoyage Leblanc. Entretien ménager résidentiel et commercial France.",
    externalUrl: "https://www.nettoyageleblanc.ca/",
    previewImage: "/images/portfolio/nettoyage-leblanc.webp",
  },
  {
    id: "ture-beau-menage",
    slug: "ture-beau-menage",
    name: "Ture Beau Ménage",
    client: "Ture Beau Ménage",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Entretien ménager résidentiel",
    year: 2024,
    shortDescription:
      "Landing page moderne pour un service d'entretien ménager résidentiel avec réservation en ligne et présentation des forfaits.",
    description:
      "Réalisation d'une landing page moderne pour Ture Beau Ménage, service d'entretien résidentiel en France. Design épuré mettant en avant les forfaits, le processus de service, les témoignages et un formulaire de réservation simplifié pour convertir les visiteurs.",
    services: ["Conception Web", "Google Ads", "SEO"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Landing page optimisée pour la conversion livée",
      "Processus de réservation simplifié en ligne",
      "Nouveaux clients acquis via Google Ads",
      "Présence locale établie rapidement",
    ],
    challenge:
      "Lancer rapidement un nouveau service d'entretien ménager et acquérir les premiers clients avec un budget marketing maîtrisé.",
    solution:
      "Landing page conversion-first combinée à des campagnes Google Ads géolocalisées pour générer des réservations dès le lancement.",
    seoTitle: "Site Web Entretien Ménager Résidentiel | Ture Beau Ménage — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour Ture Beau Ménage. Entretien ménager résidentiel France, Google Ads et conception web.",
    externalUrl: "https://www.turebeaumenage.com/",
    previewImage: "/images/portfolio/ture-beau-menage.webp",
  },
];

// ============================================================
// E-COMMERCE
// ============================================================

const ecommerceProjects: PortfolioProject[] = [
  {
    id: "etilik-wear",
    slug: "etilik-wear",
    name: "Etilik Wear",
    client: "Etilik Wear",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Mode — E-commerce Shopify",
    year: 2024,
    shortDescription:
      "E-commerce Shopify accompagné pour atteindre plus de 30 000 CAD/mois de chiffre d'affaires grâce à une stratégie marketing complète.",
    description:
      "Accompagnement e-commerce complet pour Etilik Wear, boutique Shopify de mode. Stratégie marketing digitale intégrée (Facebook Ads, Google Ads, SEO), optimisation du tunnel de conversion et refonte du design pour atteindre un chiffre d'affaires récurrent de plus de 30 000 CAD par mois.",
    services: ["Conception Web", "Facebook Ads", "Google Ads", "SEO"],
    technologies: ["Shopify", "Klaviyo", "Google Analytics 4", "Meta Ads"],
    results: [
      "+30 000 CAD/mois de chiffre d'affaires",
      "Tunnel de conversion optimisé",
      "Campagnes publicitaires ROI-positives",
      "Croissance e-commerce soutenue",
    ],
    challenge:
      "Faire décoller les ventes d'un e-commerce Shopify de mode dans un marché très compétitif au Canada.",
    solution:
      "Stratégie marketing 360° combinant publicité ciblée, optimisation Shopify et email marketing pour créer un flux de revenus récurrent.",
    seoTitle: "E-commerce Shopify Mode | Etilik Wear — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : accompagnement e-commerce Shopify pour Etilik Wear. +30 000 CAD/mois de chiffre d'affaires.",
    externalUrl: "https://www.etilik-wear.com/",
    previewImage: "/images/services/conception de site web/shopify/etilik.png",
  },
  {
    id: "khaven-swim",
    slug: "khaven-swim",
    name: "Khaven Swim",
    client: "Khaven Swim",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Mode maillots — E-commerce Shopify",
    year: 2023,
    shortDescription:
      "E-commerce Shopify ayant généré plus de 150 000 $ CAD grâce à notre stratégie marketing complète en 2023.",
    description:
      "Accompagnement e-commerce et stratégie marketing complète pour Khaven Swim, marque de maillots de bain sur Shopify. Gestion des campagnes publicitaires (Facebook Ads, Instagram Ads), optimisation du site et stratégie de contenu ayant permis de générer plus de 150 000 $ CAD de ventes en 2023.",
    services: ["Facebook Ads", "Google Ads", "Conception Web", "SEO"],
    technologies: ["Shopify", "Meta Ads", "Google Analytics 4", "Klaviyo"],
    results: [
      "+150 000 $ CAD générés en 2023",
      "Stratégie marketing ROI-positive",
      "Croissance soutenue des ventes en ligne",
      "Notoriété de marque renforcée",
    ],
    challenge:
      "Générer un volume de ventes significatif pour une marque de maillots dans un marché saisonnier et compétitif.",
    solution:
      "Stratégie marketing intégrée avec publicités ciblées, optimisation du tunnel de conversion Shopify et relance automatisée des paniers abandonnés.",
    seoTitle: "Khaven Swim — E-commerce Shopify | Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : +150 000 $ CAD générés en 2023 pour Khaven Swim. Stratégie e-commerce Shopify complète.",
    externalUrl: "https://khaven.com/",
    previewImage: "/images/services/conception de site web/shopify/khaven.png",
  },
  {
    id: "kosmopellis",
    slug: "kosmopellis",
    name: "Kosmopellis",
    client: "Kosmopellis",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Cosmétiques — E-commerce Shopify",
    year: 2024,
    shortDescription:
      "E-commerce Shopify créé et optimisé à chaque étage pour maximiser la conversion : upsells, bundles, landing pages produit.",
    description:
      "Création complète d'une boutique Shopify pour Kosmopellis, marque de cosmétiques. Optimisation conversion à tous les niveaux : pages produits avant/après, stratégie d'upsell de packs intégrée au checkout, landing pages produit haute conversion et architecture de catalogue pensée pour maximiser le panier moyen.",
    services: ["Conception Web", "SEO", "Facebook Ads", "Google Ads"],
    technologies: ["Shopify", "Liquid", "Klaviyo", "Google Analytics 4"],
    results: [
      "Boutique Shopify optimisée pour la conversion",
      "Stratégie d'upsell et bundles au checkout",
      "Pages produits avec landing page dédiée",
      "Panier moyen augmenté significativement",
    ],
    challenge:
      "Créer une boutique Shopify de cosmétiques qui convertit dans un marché saturé, avec un panier moyen élevé.",
    solution:
      "Architecture Shopify pensée conversion : pages produits type landing page, upsells au checkout, bundles stratégiques et parcours client optimisé du premier clic à la confirmation de commande.",
    seoTitle: "Kosmopellis — Shopify Cosmétiques | Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : création e-commerce Shopify pour Kosmopellis. Optimisation conversion, upsells, landing pages produit.",
    externalUrl: "https://kosmopellis.fr/",
    previewImage: "/images/services/conception de site web/shopify/kosmopellis.png",
  },
  {
    id: "biocenter",
    slug: "biocenter",
    name: "Bio Center",
    client: "Bio Center",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Produits bio — Marketplace",
    year: 2024,
    shortDescription:
      "Marketplace e-commerce française de produits bio : soins, bien-être et alimentation. Accompagnement SEO et Google Ads.",
    description:
      "Accompagnement digital pour Bio Center, marketplace e-commerce française proposant une large gamme de produits bio : soins, bien-être, alimentation et compléments. Stratégie SEO pour un catalogue volumineux et campagnes Google Ads pour maximiser la visibilité et les ventes.",
    services: ["SEO", "Google Ads", "Conception Web"],
    technologies: ["Shopify", "Google Shopping", "Google Analytics 4", "Search Console"],
    results: [
      "Visibilité SEO renforcée sur un large catalogue",
      "Campagnes Google Ads rentables",
      "Trafic organique en croissance",
      "Ventes en ligne optimisées",
    ],
    challenge:
      "Positionner une marketplace bio avec un catalogue très large face aux géants du e-commerce.",
    solution:
      "Stratégie SEO technique pour un catalogue volumineux combinée à des campagnes Google Shopping ciblées par catégorie de produits.",
    seoTitle: "Marketplace Bio E-commerce | Bio Center — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : accompagnement SEO et Google Ads pour Bio Center, marketplace e-commerce de produits bio en France.",
    externalUrl: "https://biocenter.fr/",
    previewImage: "/images/services/conception de site web/shopify/biocenter.png",
  },
  {
    id: "kway-canada",
    slug: "kway-canada",
    name: "K-Way Canada",
    client: "K-Way Canada",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Mode outdoor — E-commerce",
    year: 2024,
    shortDescription:
      "Accompagnement e-commerce et SEO pour K-Way Canada, marque iconique de vêtements outdoor.",
    description:
      "Accompagnement sur la partie e-commerce et SEO pour K-Way Canada, la marque iconique de vêtements imperméables. Optimisation du référencement naturel, stratégie de contenu et amélioration de l'expérience d'achat en ligne pour le marché français.",
    services: ["SEO", "Conception Web", "Google Ads"],
    technologies: ["Shopify", "Google Analytics 4", "Search Console"],
    results: [
      "Référencement naturel optimisé au Canada",
      "Expérience e-commerce améliorée",
      "Visibilité accrue sur les mots-clés stratégiques",
      "Trafic organique en hausse",
    ],
    challenge:
      "Renforcer la présence digitale d'une marque mondiale sur le marché français spécifique.",
    solution:
      "Stratégie SEO adaptée au marché français bilingue avec optimisation e-commerce et contenu ciblé.",
    seoTitle: "E-commerce K-Way Canada | SEO & Shopify — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : accompagnement e-commerce et SEO pour K-Way Canada. Optimisation Shopify marché français.",
    externalUrl: "https://kwaycanada.com/",
    previewImage: "/images/services/conception de site web/shopify/kway.png",
  },
  {
    id: "ironmeals",
    slug: "ironmeals",
    name: "Iron Meals",
    client: "Iron Meals",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Alimentation sportive — E-commerce Shopify",
    year: 2024,
    shortDescription:
      "Refonte Shopify et publicité pour Iron Meals, e-commerce de repas en abonnement pour sportifs.",
    description:
      "Refonte complète de la boutique Shopify et gestion des campagnes publicitaires pour Iron Meals, e-commerce de repas préparés en abonnement pour sportifs. Optimisation du tunnel d'abonnement, landing pages dédiées et stratégie publicitaire multicanal.",
    services: ["Conception Web", "Facebook Ads", "Google Ads"],
    technologies: ["Shopify", "Shopify Subscriptions", "Meta Ads", "Google Analytics 4"],
    results: [
      "Boutique Shopify entièrement refondue",
      "Tunnel d'abonnement optimisé",
      "Campagnes publicitaires performantes",
      "Acquisition de nouveaux abonnés",
    ],
    challenge:
      "Convertir des visiteurs en abonnés récurrents pour un service de repas sportifs dans un marché de niche.",
    solution:
      "Refonte Shopify axée sur le modèle d'abonnement avec landing pages dédiées et publicité ciblée vers les communautés fitness.",
    seoTitle: "Iron Meals — E-commerce Shopify | Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : refonte Shopify et publicité pour Iron Meals. E-commerce repas en abonnement pour sportifs.",
    externalUrl: "https://ironmeals.ca/",
    previewImage: "/images/services/conception de site web/shopify/ironmeals.png",
  },
  {
    id: "le-coffre-a-jouets",
    slug: "le-coffre-a-jouets",
    name: "Le Coffre à Jouets",
    client: "Le Coffre à Jouets",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Jouets et cadeaux",
    year: 2023,
    shortDescription:
      "Boutique en ligne pour une boutique de jouets française avec catalogue produits, paiement sécurisé et livraison au Canada.",
    description:
      "Développement d'une boutique e-commerce pour Le Coffre à Jouets, détaillant français de jouets et cadeaux. Catalogue produits organisé par catégories et âges, fiche produit détaillée, panier et checkout optimisés, intégration de paiement sécurisé et gestion des expéditions au Canada.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WooCommerce", "WordPress", "Stripe", "WP Rocket"],
    results: [
      "Boutique en ligne fonctionnelle et sécurisée",
      "Catalogue produits bien organisé",
      "Ventes en ligne générées dès le lancement",
      "Expérience d'achat optimisée sur mobile",
    ],
    challenge:
      "Transition d'un modèle de vente physique vers le commerce en ligne tout en conservant l'expérience chaleureuse d'une boutique locale.",
    solution:
      "Boutique e-commerce WooCommerce avec design accueillant, navigation intuitive par catégorie d'âge et processus d'achat simplifié pour maximiser les conversions.",
    seoTitle: "Boutique E-commerce Jouets France | Le Coffre à Jouets — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : e-commerce pour Le Coffre à Jouets. Boutique en ligne jouets et cadeaux France, WooCommerce et SEO.",
    externalUrl: "https://lecoffreajouets.net/",
    previewImage: "/images/portfolio/coffre-a-jouets.webp",
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
    previewImage: "/images/portfolio/quadventure-agadir.webp",
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
    previewImage: "/images/portfolio/alltouchdisplay.webp",
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
    previewImage: "/images/portfolio/artisans-marceau-paris.webp",
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
    previewImage: "/images/portfolio/vigilante-4x4.webp",
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
    previewImage: "/images/portfolio/essence-design-lausanne.webp",
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
    previewImage: "/images/portfolio/rotho-ecommerce-allemagne.webp",
  },
  {
    id: "montecarlo-designs",
    slug: "montecarlo-designs",
    name: "Montecarlo Designs",
    client: "Montecarlo Designs",
    category: "international",
    categoryLabel: "International",
    sector: "Mobilier de luxe — Monaco",
    year: 2024,
    shortDescription:
      "E-commerce de meubles de luxe basé à Monaco avec modélisation 3D complète des tables en marbre et intégration WebGL/GLB pour le SEO.",
    description:
      "Création de la boutique e-commerce pour Montecarlo Designs, marque de mobilier de luxe basée à Monaco. Énorme travail de modélisation 3D de toutes les tables en marbre avec Blender, intégration des modèles au format WebGL/GLB pour le SEO Google (modèles 3D indexables), et développement d'une expérience d'achat premium à l'image de la marque.",
    services: ["Conception Web", "Modélisation 3D", "SEO", "Google Ads"],
    technologies: ["Shopify", "Blender", "WebGL", "GLB/glTF", "Three.js"],
    results: [
      "Modélisation 3D complète du catalogue en marbre",
      "Modèles 3D intégrés en SEO via format GLB",
      "Expérience e-commerce premium",
      "Positionnement luxe établi en ligne",
    ],
    challenge:
      "Communiquer le prestige et la qualité de meubles en marbre haut de gamme via un e-commerce, sans visite physique du showroom à Monaco.",
    solution:
      "Modélisation 3D photoréaliste de chaque pièce avec Blender, intégration WebGL interactive sur le site et utilisation du format GLB indexable par Google pour un avantage SEO unique.",
    seoTitle: "Montecarlo Designs — Mobilier 3D Monaco | Lannkin",
    seoDescription:
      "Portfolio Lannkin : e-commerce Montecarlo Designs, mobilier de luxe Monaco. Modélisation 3D Blender, WebGL, SEO GLB.",
    externalUrl: "https://montecarlo-designs.com/",
    previewImage: "/images/services/conception de site web/shopify/montecarlo.png",
  },
  {
    id: "montaigne-optique",
    slug: "montaigne-optique",
    name: "Montaigne Optique",
    client: "Montaigne Optique",
    category: "international",
    categoryLabel: "International",
    sector: "Lunettes de luxe — France (Paris)",
    year: 2024,
    shortDescription:
      "E-commerce WordPress pour une boutique de lunettes de grandes marques de luxe, Avenue Montaigne à Paris.",
    description:
      "Développement d'un e-commerce WordPress pour Montaigne Optique, opticien de luxe situé Avenue Montaigne à Paris, à côté des Champs-Élysées. Catalogue de lunettes de grandes marques de luxe, expérience d'achat premium et optimisation SEO sur le marché parisien haut de gamme.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "WooCommerce", "Elementor Pro", "Google Analytics 4"],
    results: [
      "E-commerce premium opérationnel",
      "Positionnement luxe Avenue Montaigne établi",
      "Référencement local Paris optimisé",
      "Expérience d'achat en ligne haut de gamme",
    ],
    challenge:
      "Créer un e-commerce à la hauteur du prestige d'une adresse Avenue Montaigne pour des lunettes de grandes marques de luxe.",
    solution:
      "E-commerce WordPress/WooCommerce avec design premium, photographie produit haut de gamme et SEO local ciblant le marché parisien du luxe.",
    seoTitle: "Montaigne Optique Paris — Lunettes Luxe | Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : e-commerce pour Montaigne Optique, opticien de luxe Avenue Montaigne Paris. WordPress, WooCommerce, SEO.",
    externalUrl: "https://montaigneoptique.com/",
    previewImage: "/images/services/conception de site web/shopify/montaigne.png",
  },
];

// ============================================================
// NOUVEAUX PROJETS (images ajoutées 2026)
// ============================================================

const additionalProjects: PortfolioProject[] = [
  {
    id: "construction-fontes",
    slug: "construction-fontes",
    name: "Construction Fontes",
    client: "Construction Fontes",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Construction et rénovation",
    year: 2024,
    shortDescription:
      "Site web multipage pour un entrepreneur général en construction et rénovation résidentielle en France.",
    description:
      "Réalisation du site web multipage de Construction Fontes, entrepreneur général spécialisé en construction neuve et rénovation résidentielle. Portfolio de réalisations, pages services détaillées, formulaire de soumission gratuite et optimisation SEO locale pour attirer de nouveaux clients.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Cloudflare"],
    results: [
      "Site web professionnel reflétant l'expertise en construction",
      "Portfolio de projets réalisés convaincant",
      "Demandes de soumission en ligne générées",
      "Meilleure visibilité Google locale",
    ],
    challenge:
      "Établir une présence digitale crédible dans un secteur de la construction très compétitif en France.",
    solution:
      "Site multipage mettant en avant les réalisations photographiées avec contenu SEO local et formulaire de soumission optimisé.",
    seoTitle: "Site Web Entrepreneur Général France | Construction Fontes — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Construction Fontes. Entrepreneur général construction et rénovation résidentielle France.",
    externalUrl: "https://constructionfontes.com/",
    previewImage: "/images/portfolio/construction-fontes.webp",
  },
  {
    id: "cuisine-innovex",
    slug: "cuisine-innovex",
    name: "Cuisine Innovex",
    client: "Cuisine Innovex",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Cuisine et salle de bain",
    year: 2024,
    shortDescription:
      "Site web multipage pour un spécialiste de la conception et installation de cuisines et salles de bain sur mesure.",
    description:
      "Conception du site web multipage de Cuisine Innovex, entreprise spécialisée dans la design et l'installation de cuisines et salles de bain sur mesure. Galerie de projets réalisés, configurateur de styles, présentation des matériaux et formulaire de prise de rendez-vous en showroom.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Site vitrine professionnel mettant en valeur les réalisations",
      "Galerie de cuisines et salles de bain inspirante",
      "Rendez-vous showroom générés en ligne",
      "Référencement local optimisé",
    ],
    challenge:
      "Inspirer et convaincre les clients de la qualité des réalisations avant la visite du showroom, dans un marché très visuel.",
    solution:
      "Site multipage axé sur la galerie photo haut de gamme avec parcours utilisateur simplifié menant à la prise de rendez-vous.",
    seoTitle: "Site Web Cuisines Salles de Bain France | Cuisine Innovex — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Cuisine Innovex. Cuisines et salles de bain sur mesure France, conception web et SEO.",
    externalUrl: "https://cuisineinnovex.com/",
    previewImage: "/images/portfolio/cuisine-innovex.webp",
  },
  {
    id: "maconnerie-baka",
    slug: "maconnerie-baka",
    name: "Maçonnerie Baka",
    client: "Maçonnerie Baka",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Maçonnerie et béton",
    year: 2024,
    shortDescription:
      "Site web multipage pour une entreprise de maçonnerie spécialisée en briques, pierres et béton en France.",
    description:
      "Réalisation du site web multipage de Maçonnerie Baka, entrepreneur spécialisé en travaux de maçonnerie : briques, pierres naturelles, béton décoratif et réparation. Galerie de réalisations avant/après, pages services détaillées et formulaire de soumission gratuite.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Cloudflare"],
    results: [
      "Présence web professionnelle établie",
      "Galerie de travaux de maçonnerie percutante",
      "Soumissions en ligne reçues dès le lancement",
      "Visibilité locale sur Google améliorée",
    ],
    challenge:
      "Se démarquer dans un secteur de la maçonnerie où les clients choisissent principalement sur la base de photos de réalisations et de recommandations.",
    solution:
      "Site multipage centré sur la galerie de travaux, avec témoignages clients et SEO local ciblant les propriétaires résidentiels de la région.",
    seoTitle: "Site Web Maçonnerie France | Maçonnerie Baka — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Maçonnerie Baka. Briques, pierres et béton décoratif France, conception web et SEO local.",
    externalUrl: "https://www.maconnerie-baka.com/",
    previewImage: "/images/portfolio/maconnerie-baka.webp",
  },
  {
    id: "patrenov",
    slug: "patrenov",
    name: "Patrenov",
    client: "Patrenov",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Rénovation résidentielle",
    year: 2024,
    shortDescription:
      "Site web multipage pour un entrepreneur en rénovation résidentielle avec galerie de projets et soumission en ligne.",
    description:
      "Conception du site web multipage de Patrenov, entreprise spécialisée en rénovation résidentielle complète. Portfolio de projets réalisés, pages services par type de rénovation (cuisine, salle de bain, sous-sol, toiture), formulaire de soumission gratuite et contenu SEO local.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Site professionnel valorisant le savoir-faire de l'équipe",
      "Portfolio de réalisations convaincant",
      "Leads générés via formulaire de soumission",
      "Référencement local établi rapidement",
    ],
    challenge:
      "Bâtir la confiance auprès de clients résidentiels pour des projets de rénovation importants et coûteux.",
    solution:
      "Site multipage misant sur la preuve sociale (galerie + témoignages) et une navigation par type de projet pour guider les visiteurs vers la demande de soumission.",
    seoTitle: "Site Web Rénovation Résidentielle France | Patrenov — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Patrenov. Rénovation résidentielle complète France, conception web et SEO local.",
    externalUrl: "https://www.patrenov.com/",
    previewImage: "/images/portfolio/patrenov.webp",
  },
  {
    id: "scs-entretien",
    slug: "scs-entretien",
    name: "SCS Entretien",
    client: "SCS Entretien",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Services d'entretien",
    year: 2024,
    shortDescription:
      "Landing page pour une entreprise de services d'entretien résidentiel et commercial avec forfaits et formulaire de réservation.",
    description:
      "Conception d'une landing page optimisée pour SCS Entretien, service d'entretien ménager résidentiel et commercial en France. Présentation des forfaits, section témoignages clients, processus de service en 3 étapes et formulaire de demande de soumission en ligne.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Landing page opérationnelle dès le lancement",
      "Demandes de soumission reçues en ligne",
      "Présence Google locale établie",
      "Design professionnel fidèle à l'image de l'entreprise",
    ],
    challenge:
      "Générer rapidement des demandes de service dans un marché local de l'entretien très concurrentiel.",
    solution:
      "Landing page conversion-first avec offre claire, preuve sociale renforcée et formulaire de contact simplifié.",
    seoTitle: "Site Web Services Entretien France | SCS Entretien — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour SCS Entretien. Services d'entretien résidentiel et commercial France.",
    externalUrl: "https://www.scsentretien.ca/",
    previewImage: "/images/portfolio/scs-entretien.webp",
  },
  {
    id: "christian-olivier-ducharme",
    slug: "christian-olivier-ducharme",
    name: "Christian-Olivier Ducharme",
    client: "Christian-Olivier Ducharme",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Courtage immobilier",
    year: 2024,
    shortDescription:
      "Site web multipage pour un courtier immobilier avec intégration Centris, pages propriétés et prise de rendez-vous en ligne.",
    description:
      "Réalisation d'un site web multipage pour Christian-Olivier Ducharme, courtier immobilier couvrant Paris et Paris. Pages Acheter/Vendre, intégration Centris/MLS, galerie de propriétés, témoignages clients et formulaire de prise de rendez-vous en ligne.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Centris"],
    results: [
      "Site professionnel avec intégration Centris",
      "Prise de rendez-vous en ligne opérationnelle",
      "Visibilité locale Paris et Paris améliorée",
      "Image de marque personnelle renforcée",
    ],
    challenge:
      "Se démarquer dans un marché immobilier saturé de courtiers et établir une présence digitale qui inspire confiance.",
    solution:
      "Site multipage professionnel avec intégration Centris, témoignages clients et contenu SEO local ciblant Paris et Paris.",
    seoTitle: "Site Web Courtier Immobilier Paris | Christian-Olivier Ducharme — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Christian-Olivier Ducharme, courtier immobilier. Conception web immobilier Paris et Paris.",
    externalUrl: "https://www.christianolivierducharme.com/",
    previewImage: "/images/portfolio/christian-olivier-ducharme.webp",
  },
  {
    id: "creations-boreales-du-lac",
    slug: "creations-boreales-du-lac",
    name: "Créations Boréales du Lac",
    client: "Créations Boréales du Lac",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Artisanat bois et époxy",
    year: 2024,
    shortDescription:
      "Site web multipage pour un artisan spécialisé en tables bois et époxy sur mesure au Saguenay-Lac-Saint-Jean.",
    description:
      "Conception d'un site web multipage pour Créations Boréales du Lac, artisan du Saguenay créant des pièces décoratives sur mesure alliant bois et époxy. Galerie de réalisations, pages services, présentation des produits personnalisables et formulaire de contact.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket", "Google Analytics 4"],
    results: [
      "Site vitrine mettant en valeur le savoir-faire artisanal",
      "Galerie de réalisations bois et époxy percutante",
      "Demandes de commandes sur mesure générées",
      "Référencement local Saguenay optimisé",
    ],
    challenge:
      "Mettre en valeur un artisanat unique et convaincre les clients de la qualité des pièces sur mesure sans visite physique.",
    solution:
      "Site multipage axé sur la galerie photo haute résolution et le storytelling artisanal, avec SEO ciblant le Saguenay-Lac-Saint-Jean.",
    seoTitle: "Site Web Artisan Bois Époxy Saguenay | Créations Boréales du Lac — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Créations Boréales du Lac. Tables bois et époxy sur mesure Saguenay, conception web et SEO.",
    externalUrl: "https://www.creationsborealesdulac.ca/",
    previewImage: "/images/portfolio/creations-boreales-du-lac.webp",
  },
  {
    id: "metal-plus",
    slug: "metal-plus",
    name: "Métal Plus",
    client: "Métal Plus Inc",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Coffrage et bétonnage",
    year: 2024,
    shortDescription:
      "Site web multipage pour une entreprise de coffrage, bétonnage et armatures en Abitibi-Témiscamingue.",
    description:
      "Développement d'un site web multipage pour Métal Plus, spécialiste en coffrage résidentiel et commercial, bétonnage et pose d'armatures en Abitibi-Témiscamingue. Pages services détaillées, régions desservies (Val-d'Or, Amos, Rouyn-Noranda), galerie de réalisations et blog.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "Yoast SEO", "WPForms"],
    results: [
      "Présence web professionnelle en Abitibi-Témiscamingue",
      "Pages régions desservies optimisées pour le SEO local",
      "Demandes de soumission en ligne générées",
      "Blog actif pour le référencement organique",
    ],
    challenge:
      "Couvrir un vaste territoire en Abitibi-Témiscamingue et se positionner sur les recherches locales dans plusieurs villes.",
    solution:
      "Site multipage avec pages dédiées par région desservie et par service, optimisées pour le SEO local multirégion.",
    seoTitle: "Site Web Coffrage Bétonnage Abitibi | Métal Plus — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Métal Plus. Coffrage et bétonnage Abitibi-Témiscamingue, conception web et SEO local.",
    externalUrl: "https://www.metalplus.ca/",
    previewImage: "/images/portfolio/metal-plus.webp",
  },
  {
    id: "installation-lgagne",
    slug: "installation-lgagne",
    name: "Installation L. Gagné",
    client: "Installation L. Gagné Inc",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Soudure et travaux d'acier",
    year: 2024,
    shortDescription:
      "Site web multipage pour une firme de soudure mobile et travaux d'acier sur mesure certifiée RBQ et CWB.",
    description:
      "Réalisation d'un site web multipage pour Installation L. Gagné, firme spécialisée en soudure mobile et travaux d'acier sur mesure. Galerie de réalisations, pages services (structures d'acier, escaliers, rampes, réparation agricole), régions desservies et formulaire de soumission.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Google Site Kit"],
    results: [
      "Site professionnel reflétant l'expertise en soudure",
      "Certifications RBQ et CWB mises en avant",
      "Soumissions en ligne reçues régulièrement",
      "Visibilité locale améliorée dans plusieurs régions",
    ],
    challenge:
      "Couvrir un large territoire (Nice, Paris, Nanterre, Mont-Tremblant) et attirer des projets diversifiés.",
    solution:
      "Site multipage avec pages régions et services détaillées, mettant en avant les certifications et la polyvalence de l'entreprise.",
    seoTitle: "Site Web Soudure Travaux Acier France | Installation L. Gagné — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Installation L. Gagné. Soudure mobile et travaux d'acier sur mesure France.",
    externalUrl: "https://installationlgagne.ca/",
    previewImage: "/images/portfolio/installation-lgagne.webp",
  },
  {
    id: "construction-veloce",
    slug: "construction-veloce",
    name: "Construction Véloce",
    client: "Construction Véloce Inc",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Charpenterie",
    year: 2024,
    shortDescription:
      "Site web multipage pour une entreprise de charpenterie haut de gamme à Paris et Hauts-de-Seine.",
    description:
      "Conception d'un site web multipage pour Construction Véloce, spécialiste en charpenterie sur mesure à Paris et Hauts-de-Seine. Pages services (construction de charpente, rénovation, rénovation majeure), galerie de projets réalisés et formulaire de contact.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "Google Analytics 4", "Google Site Kit"],
    results: [
      "Image de marque haut de gamme établie en ligne",
      "Portfolio de charpentes sur mesure convaincant",
      "Leads qualifiés générés via le site",
      "Positionnement SEO local Paris et Hauts-de-Seine",
    ],
    challenge:
      "Communiquer le positionnement haut de gamme et la qualité sans compromis dans un secteur de la construction souvent perçu comme générique.",
    solution:
      "Site multipage avec design professionnel, galerie photo mettant en valeur la qualité des charpentes et contenu SEO ciblé.",
    seoTitle: "Site Web Charpenterie Paris | Construction Véloce — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Construction Véloce. Charpenterie haut de gamme Paris et Hauts-de-Seine.",
    externalUrl: "https://constructionveloce.ca/",
    previewImage: "/images/portfolio/construction-veloce.webp",
  },
  {
    id: "andleikay-garderie-24h",
    slug: "andleikay-garderie-24h",
    name: "Andleikay Garderie 24h",
    client: "Andleikay Garderie 24h",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Services de garde — Petite enfance",
    year: 2024,
    shortDescription:
      "Site web multipage bilingue pour une garderie 24h offrant des horaires flexibles et des services spécialisés.",
    description:
      "Développement d'un site web multipage bilingue (FR/EN) pour Andleikay Garderie 24h, garderie fondée en 2013 offrant un service 24h avec transport, hébergement de nuit, halte-répit et accompagnement pour enfants à besoins particuliers.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Google Tag Manager"],
    results: [
      "Site bilingue fonctionnel FR/EN",
      "Inscriptions générées via formulaire en ligne",
      "Visibilité accrue pour les parents aux horaires non conventionnels",
      "Confiance renforcée grâce à la présentation des services",
    ],
    challenge:
      "Rassurer les parents sur la qualité et la sécurité d'une garderie 24h et les convaincre d'inscrire leurs enfants.",
    solution:
      "Site multipage rassurant avec présentation détaillée des services, galerie photo chaleureuse et témoignages de parents satisfaits.",
    seoTitle: "Site Web Garderie 24h France | Andleikay Garderie — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Andleikay Garderie 24h. Garderie avec horaires flexibles France, conception web bilingue.",
    externalUrl: "https://andleikaygarderie24h.ca/",
    previewImage: "/images/portfolio/andleikay-garderie-24h.webp",
  },
  {
    id: "kagalexo",
    slug: "kagalexo",
    name: "Kagalexo",
    client: "Kagalexo Inc",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Construction et rénovation",
    year: 2024,
    shortDescription:
      "Site web multipage bilingue pour un entrepreneur général en rénovation et restauration dans le Grand Paris.",
    description:
      "Réalisation d'un site web multipage bilingue (FR/EN) pour Kagalexo, entrepreneur général certifié RBQ et APCHQ spécialisé en rénovation résidentielle et commerciale, restauration de bâtiments patrimoniaux et inspections techniques dans le Grand Paris.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Google Site Kit"],
    results: [
      "Site bilingue professionnel établissant la crédibilité",
      "Certifications RBQ et APCHQ mises en avant",
      "Demandes de soumission en ligne opérationnelles",
      "Référencement local Grand Paris amélioré",
    ],
    challenge:
      "Positionner Kagalexo comme guichet unique de confiance pour des projets de rénovation complexes dans le Grand Paris.",
    solution:
      "Site multipage bilingue mettant en avant l'approche un seul point de contact, les certifications et le portfolio de réalisations.",
    seoTitle: "Site Web Entrepreneur Général Paris | Kagalexo — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Kagalexo. Rénovation et restauration Grand Paris, conception web bilingue et SEO.",
    externalUrl: "https://www.kagalexo.com/",
    previewImage: "/images/portfolio/kagalexo.webp",
  },
  {
    id: "dcg-electrique",
    slug: "dcg-electrique",
    name: "DCG Électrique",
    client: "DCG Électrique Inc",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Services électriques",
    year: 2024,
    shortDescription:
      "Site web multipage pour un maître électricien certifié RBQ desservant Paris, les Laurentides et l'Île-de-France.",
    description:
      "Conception d'un site web multipage pour DCG Électrique, maître électricien avec plus de 25 ans d'expérience. Pages services (filage, rénovation électrique, bornes de recharge, urgences 24/7), régions desservies et formulaire de contact.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Google Site Kit"],
    results: [
      "Site professionnel reflétant 25 ans d'expertise",
      "Service d'urgence 24/7 mis en avant",
      "Leads qualifiés via formulaire et appels directs",
      "Visibilité locale dans 4 régions",
    ],
    challenge:
      "Couvrir plusieurs zones de service (Paris, Laurentides, Île-de-France) et se positionner sur les recherches d'urgence électrique.",
    solution:
      "Site multipage avec pages régions dédiées, CTA téléphonique proéminent pour les urgences et contenu SEO local multirégion.",
    seoTitle: "Site Web Électricien Paris Paris | DCG Électrique — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour DCG Électrique. Maître électricien à Paris, dans les Laurentides et en Île-de-France.",
    externalUrl: "https://www.dcgelectrique.ca/",
    previewImage: "/images/portfolio/dcg-electrique.webp",
  },
  {
    id: "yves-baillargeon",
    slug: "yves-baillargeon",
    name: "Yves Baillargeon",
    client: "Yves Baillargeon",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Courtage immobilier",
    year: 2024,
    shortDescription:
      "Site web multipage pour un courtier immobilier Via Capitale Élite dans la région de France.",
    description:
      "Réalisation d'un site web multipage pour Yves Baillargeon, courtier immobilier avec Via Capitale Élite dans la région de Québec et Beauport. Pages Acheter/Vendre, présentation des propriétés, témoignages et formulaire de contact.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "Cloudflare", "WPForms"],
    results: [
      "Image de marque personnelle professionnelle",
      "Site vitrine mettant en avant l'expertise locale",
      "Prise de contact facilitée via formulaire",
      "Référencement local région de France",
    ],
    challenge:
      "Établir une présence digitale personnelle distincte dans un marché immobilier compétitif à Paris.",
    solution:
      "Site multipage personnel avec témoignages clients, pages de services immobiliers et contenu SEO ciblant la région de France.",
    seoTitle: "Site Web Courtier Immobilier France | Yves Baillargeon — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Yves Baillargeon, courtier immobilier Via Capitale Élite, région de France.",
    externalUrl: "https://www.yvesbaillargeon.ca/",
    previewImage: "/images/portfolio/yves-baillargeon.webp",
  },
  {
    id: "myriame-chic-salon",
    slug: "myriame-chic-salon",
    name: "Myriame Chic Salon",
    client: "Myriame Chic Salon",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Salon de coiffure",
    year: 2024,
    shortDescription:
      "Site onepage pour un salon de coiffure à Strasbourg avec présentation des services, réalisations et témoignages.",
    description:
      "Conception d'un site onepage pour Myriame Chic Salon, salon de coiffure à Strasbourg. Sections À propos, services (coupes, colorations, soins capillaires), galerie de réalisations, témoignages clients et formulaire de contact.",
    services: ["Conception Web", "SEO", "Réseaux Sociaux"],
    technologies: ["WordPress", "Elementor Pro", "Yoast SEO", "WP Rocket"],
    results: [
      "Site vitrine professionnel reflétant l'image du salon",
      "Galerie de réalisations coiffure inspirante",
      "Nouveaux clients acquis via le web",
      "Référencement local Strasbourg optimisé",
    ],
    challenge:
      "Refléter l'ambiance et le style du salon en ligne pour attirer une clientèle locale à Strasbourg.",
    solution:
      "Site onepage avec design élégant, galerie de réalisations et témoignages pour convaincre les visiteurs de prendre rendez-vous.",
    seoTitle: "Site Web Salon Coiffure Strasbourg | Myriame Chic Salon — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site onepage pour Myriame Chic Salon. Salon de coiffure Strasbourg, conception web et SEO local.",
    externalUrl: "https://www.myriamechicsalon.ca/",
    previewImage: "/images/portfolio/myriame-chic-salon.webp",
  },
  {
    id: "fenide-dieujuste",
    slug: "fenide-dieujuste",
    name: "Fenide Dieujuste",
    client: "Fenide Dieujuste",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Courtage immobilier",
    year: 2024,
    shortDescription:
      "Site onepage avec blog pour une courtière immobilière avec présentation des services, régions desservies et prise de contact.",
    description:
      "Conception d'un site onepage avec section blog pour Fenide Dieujuste, courtière immobilière accompagnant ses clients dans l'achat, la vente et l'investissement immobilier. Sections À propos, services, régions desservies et formulaire de contact.",
    services: ["Conception Web", "SEO", "Réseaux Sociaux"],
    technologies: ["WordPress", "Elementor Pro", "Yoast SEO", "WP Rocket"],
    results: [
      "Image de marque personnelle professionnelle établie",
      "Blog actif pour le référencement organique",
      "Prise de contact facilitée via formulaire",
      "Visibilité locale améliorée",
    ],
    challenge:
      "Construire une marque personnelle digitale de confiance pour une courtière immobilière en début de carrière.",
    solution:
      "Site onepage avec storytelling personnel, blog pour le SEO et mise en avant de l'empathie et de la disponibilité.",
    seoTitle: "Site Web Courtière Immobilière | Fenide Dieujuste — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site onepage pour Fenide Dieujuste, courtière immobilière. Conception web immobilier et SEO.",
    externalUrl: "https://www.fenidedieujuste.com/",
    previewImage: "/images/portfolio/fenide-dieujuste.webp",
  },
];

// ============================================================
// EXPORT
// ============================================================

// Ordre d'affichage : les projets les plus récents en premier, plutôt que
// regroupés par catégorie (ce qui reproduisait l'ordre de lannkin.ca).
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  ...multiPagesProjects,
  ...onePageProjects,
  ...ecommerceProjects,
  ...internationalProjects,
  ...additionalProjects,
].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "multipages", label: "Multipages" },
  { id: "onepage", label: "Onepage" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "international", label: "International" },
];

// ============================================================
// SECTEURS D'ACTIVITÉ — mapping + filtres
// ============================================================

export const SECTOR_MAPPING: Record<string, string> = {
  "Plomberie et chauffage": "construction",
  "Rénovation résidentielle": "construction",
  "Construction résidentielle": "construction",
  "Construction et rénovation": "construction",
  "Cuisine et salle de bain": "construction",
  "Maçonnerie et béton": "construction",
  "Coffrage et bétonnage": "construction",
  "Soudure et travaux d'acier": "construction",
  "Charpenterie": "construction",
  "Services électriques": "construction",
  "Plomberie — France (Paris)": "construction",
  "Courtage immobilier": "immobilier",
  "Entretien ménager résidentiel": "services-menagers",
  "Entretien ménager": "services-menagers",
  "Services d'entretien": "services-menagers",
  "Salon de coiffure": "beaute",
  "Jouets et cadeaux": "ecommerce-local",
  "E-commerce — Allemagne": "ecommerce-local",
  "Tourisme et aventure — Maroc": "tourisme",
  "Services de garde — Petite enfance": "education",
  "Artisanat bois et époxy": "artisanat",
  "Groupe de services": "services-pro",
  "Technologie — Chine": "tech",
  "4x4 rétro de luxe — USA": "automobile",
  "Agence de branding — Suisse (Lausanne)": "design",
  // E-commerce Shopify & international (ajout 2026)
  "Mode — E-commerce Shopify": "ecommerce-local",
  "Mode maillots — E-commerce Shopify": "ecommerce-local",
  "Cosmétiques — E-commerce Shopify": "ecommerce-local",
  "Produits bio — Marketplace": "ecommerce-local",
  "Mode outdoor — E-commerce": "ecommerce-local",
  "Alimentation sportive — E-commerce Shopify": "ecommerce-local",
  "Mobilier de luxe — Monaco": "ecommerce-local",
  "Lunettes de luxe — France (Paris)": "ecommerce-local",
};

export function getSectorSlug(sector: string): string {
  return SECTOR_MAPPING[sector] ?? "autres";
}

export interface PortfolioSectorPage {
  slug: string;
  label: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const PORTFOLIO_SECTOR_PAGES: PortfolioSectorPage[] = [
  {
    slug: "construction",
    label: "Construction",
    description: "Sites web pour entrepreneurs en construction, rénovation, maçonnerie, électricité et métiers du bâtiment.",
    seoTitle: "Sites Web Construction & Rénovation France | Portfolio Lannkin",
    seoDescription: "Portfolio Lannkin : sites web pour entrepreneurs en construction et rénovation en France. Conceptions web professionnelles, SEO local et Google Ads.",
  },
  {
    slug: "immobilier",
    label: "Immobilier",
    description: "Sites web pour courtiers immobiliers avec intégration Centris, pages propriétés et prise de rendez-vous.",
    seoTitle: "Sites Web Courtiers Immobiliers France | Portfolio Lannkin",
    seoDescription: "Portfolio Lannkin : sites web pour courtiers immobiliers en France. Intégration Centris, SEO local et génération de leads immobiliers.",
  },
  {
    slug: "services-menagers",
    label: "Services ménagers",
    description: "Landing pages et sites pour services d'entretien ménager résidentiel et commercial.",
    seoTitle: "Sites Web Entretien Ménager France | Portfolio Lannkin",
    seoDescription: "Portfolio Lannkin : sites web et landing pages pour services d'entretien ménager en France. Conception web et Google Ads.",
  },
];

// Secteurs affichés dans les filtres (tous secteurs avec ≥1 projet)
export const PORTFOLIO_SECTOR_FILTERS: { slug: string; label: string; href: string }[] = [
  { slug: "construction",    label: "Construction",      href: "/realisations/construction/" },
  { slug: "immobilier",      label: "Immobilier",        href: "/realisations/immobilier/" },
  { slug: "services-menagers", label: "Services ménagers", href: "/realisations/services-menagers/" },
  { slug: "beaute",          label: "Beauté",            href: "/realisations/beaute/" },
  { slug: "ecommerce-local", label: "E-commerce",        href: "/realisations/ecommerce-local/" },
  { slug: "tourisme",        label: "Tourisme",          href: "/realisations/tourisme/" },
  { slug: "education",       label: "Éducation",         href: "/realisations/education/" },
];
