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
      "Conception d'un site web multipage professionnel pour Plomberies LB, entreprise spécialisée en plomberie et chauffage au Québec. Architecture multipage avec pages services détaillées, galerie de réalisations, formulaire de contact et optimisation SEO local pour dominer les recherches locales.",
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
    seoTitle: "Site Web Plomberie Québec | Plomberies LB — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour Plomberies LB. Conception web plomberie Québec, SEO local et Google Ads.",
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
    seoTitle: "Site Web Entrepreneur Rénovation Québec | Réno St-Georges — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour Réno St-Georges. Conception web entrepreneur rénovation résidentielle Québec.",
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
    seoTitle: "Site Web Groupe de Services Québec | Groupe Larivière — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour le Groupe Larivière. Conception web institutionnelle Québec, navigation multi-services.",
    externalUrl: "https://www.groupelariviere.ca/fr",
    previewImage: "/images/portfolio/groupe-lariviere.webp",
  },
  {
    id: "peinture-pro",
    slug: "peinture-pro",
    name: "Peinture Pro",
    client: "Peinture Pro",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Peinture résidentielle",
    year: 2022,
    shortDescription:
      "Site web multipage pour un peintre résidentiel avec galerie de projets, demande de soumission et témoignages clients.",
    description:
      "Conception d'un site web multipage pour Peinture Pro, peintre en bâtiment résidentiel au Québec. Galerie de réalisations, pages services (intérieur, extérieur, calfeutrage), section témoignages clients, formulaire de demande de soumission gratuite et optimisation SEO.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Site professionnel valorisant la qualité du travail",
      "Formulaire de soumission générant des leads qualifiés",
      "Témoignages clients intégrés pour la preuve sociale",
      "Référencement local opérationnel",
    ],
    challenge:
      "Se distinguer dans un secteur de la peinture où les entreprises se ressemblent et convaincre les clients de la qualité du travail avant même la visite.",
    solution:
      "Site multipage misant sur la preuve sociale (galerie + témoignages), avec formulaire de soumission simplifié et contenu SEO local ciblé.",
    seoTitle: "Site Web Peintre Résidentiel Québec | Peinture Pro — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Peinture Pro, peintre résidentiel au Québec. Conception web, SEO local et Google Ads.",
    externalUrl: "https://www.peinture-pro.ca/",
    previewImage: "/images/portfolio/peinture-pro.webp",
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
      "Réalisation du site web multipage de Constructeurs de Qualité, entrepreneur général en construction résidentielle au Québec. Présentation des projets réalisés (maisons neuves, extensions, rénovations majeures), pages services détaillées, formulaire de soumission et optimisation SEO locale.",
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
    seoTitle: "Site Web Entrepreneur Général Construction Québec | Constructeurs de Qualité — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Constructeurs de Qualité. Entrepreneur général construction résidentielle Québec.",
    externalUrl: "https://www.constructeursdequalite.ca/",
    previewImage: "/images/portfolio/constructeurs-de-qualite.webp",
  },
  {
    id: "constructions-guillen",
    slug: "constructions-guillen",
    name: "Constructions Guillen",
    client: "Constructions Guillen",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Construction et rénovation",
    year: 2024,
    shortDescription:
      "Site web multipage pour une entreprise de construction et rénovation avec portfolios de projets et formulaire de soumission.",
    description:
      "Conception du site web multipage de Constructions Guillen, entreprise spécialisée en construction neuve et rénovation au Québec. Architecture multipage avec portfolio de réalisations, pages services (construction, rénovation, finition), formulaire de soumission et contenu optimisé pour le SEO local.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Présence web professionnelle établie",
      "Portfolio de réalisations mis en valeur",
      "Leads en ligne générés via formulaire",
      "Référencement local amélioré",
    ],
    challenge:
      "Construire une présence numérique de confiance pour une entreprise en croissance souhaitant attirer une clientèle résidentielle premium.",
    solution:
      "Site multipage avec galerie de réalisations soignée, identité visuelle professionnelle et SEO local ciblant les propriétaires résidentiels de la région.",
    seoTitle: "Site Web Construction Rénovation Québec | Constructions Guillen — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web multipage pour Constructions Guillen. Construction et rénovation résidentielle Québec.",
    externalUrl: "https://www.constructionsguillen.com/",
    previewImage: "/images/portfolio/constructions-guillen.webp",
  },
  {
    id: "mtl-luxe",
    slug: "mtl-luxe",
    name: "MTL Luxe",
    client: "MTL Luxe",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Services premium Montréal",
    year: 2024,
    shortDescription:
      "Site web multipage haut de gamme pour une marque de services premium à Montréal avec design immersif et expérience utilisateur soignée.",
    description:
      "Réalisation d'un site web multipage premium pour MTL Luxe, marque montréalaise positionnée sur le segment haut de gamme. Design élégant et immersif, navigation fluide, pages services détaillées et expérience utilisateur optimisée pour une clientèle exigeante.",
    services: ["Conception Web", "SEO", "Graphisme"],
    technologies: ["WordPress", "Elementor Pro", "Cloudflare", "WP Rocket"],
    results: [
      "Identité digitale premium cohérente avec le positionnement",
      "Expérience utilisateur haut de gamme",
      "Site performant et esthétiquement distinctif",
      "Référencement local Montréal optimisé",
    ],
    challenge:
      "Traduire un positionnement premium en expérience digitale qui reflète l'image haut de gamme de la marque et attire la bonne clientèle.",
    solution:
      "Design web soigné avec typographie et visuels haut de gamme, animations subtiles et contenu copywriting orienté désirabilité.",
    seoTitle: "Site Web Services Premium Montréal | MTL Luxe — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web premium pour MTL Luxe Montréal. Conception web haut de gamme, design immersif et SEO local.",
    externalUrl: "https://mtlluxe.ca/",
    previewImage: "/images/portfolio/mtl-luxe.webp",
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
      "Conception d'une landing page optimisée pour la conversion pour Nettoyage Idéal, service d'entretien ménager résidentiel au Québec. Page unique avec présentation des services, grille tarifaire, témoignages clients, galerie avant/après et formulaire de réservation en ligne intégré.",
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
    seoTitle: "Site Web Entretien Ménager Québec | Nettoyage Idéal — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour Nettoyage Idéal. Conception web entretien ménager résidentiel Québec, Google Ads et Facebook Ads.",
    externalUrl: "https://www.nettoyageideal.com/",
    previewImage: "/images/portfolio/nettoyage-ideal.webp",
  },
  {
    id: "rasage-corporel-a-domicile",
    slug: "rasage-corporel-a-domicile",
    name: "Rasage Corporel à Domicile",
    client: "Rasage Corporel à Domicile",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Soins corporels à domicile",
    year: 2023,
    shortDescription:
      "Site onepage pour un service de soins corporels à domicile avec présentation des services, tarifs et prise de rendez-vous.",
    description:
      "Conception d'un site onepage pour Rasage Corporel à Domicile, service de soins à domicile au Québec. Présentation des prestations, galerie, grille tarifaire claire, témoignages clients et formulaire de prise de rendez-vous en ligne simplifié.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Site web professionnel et rassurant livré",
      "Prise de rendez-vous en ligne opérationnelle",
      "Meilleure crédibilité en ligne",
      "Acquisition de clients via formulaire",
    ],
    challenge:
      "Instaurer la confiance pour un service à domicile et convaincre les clients de la qualité et de la sécurité des prestations.",
    solution:
      "Site onepage rassurant avec témoignages mis en avant, description détaillée des services et formulaire de prise de rendez-vous sécurisé.",
    seoTitle: "Site Web Soins Corporels à Domicile Québec | Rasage Corporel — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site onepage pour Rasage Corporel à Domicile. Conception web soins à domicile Québec, prise de rendez-vous en ligne.",
    externalUrl: "https://www.rasagecorporeladomicile.ca/",
    previewImage: "/images/portfolio/rasage-corporel.webp",
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
    seoTitle: "Site Web Entretien Ménager Québec | Nettoyage Leblanc — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour Nettoyage Leblanc. Entretien ménager résidentiel et commercial Québec.",
    externalUrl: "https://www.nettoyageleblanc.ca/",
    previewImage: "/images/portfolio/nettoyage-leblanc.webp",
  },
  {
    id: "ethique-service-nettoyage",
    slug: "ethique-service-nettoyage",
    name: "Éthique Service Nettoyage",
    client: "Éthique Service Nettoyage",
    category: "onepage",
    categoryLabel: "Onepage",
    sector: "Nettoyage écologique",
    year: 2023,
    shortDescription:
      "Site onepage pour un service de nettoyage éco-responsable mettant en avant ses valeurs environnementales et ses forfaits.",
    description:
      "Conception d'un site onepage pour Éthique Service Nettoyage, entreprise d'entretien ménager engagée dans des pratiques écologiques. Mise en valeur des produits naturels utilisés, certifications, forfaits détaillés et formulaire de réservation en ligne.",
    services: ["Conception Web", "SEO", "Facebook Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "Cloudflare"],
    results: [
      "Identité de marque éco-responsable bien communiquée",
      "Réservations en ligne opérationnelles",
      "Clients sensibles à l'écologie attirés",
      "Présence locale sur Google établie",
    ],
    challenge:
      "Communiquer efficacement la proposition de valeur écologique pour se différencier des services de nettoyage traditionnels.",
    solution:
      "Site onepage avec storytelling centré sur les valeurs éco-responsables, certifications et témoignages de clients convaincus.",
    seoTitle: "Site Web Nettoyage Écologique Québec | Éthique Service Nettoyage — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site onepage pour Éthique Service Nettoyage. Entretien ménager écologique Québec, conception web et SEO.",
    externalUrl: "https://www.ethiqueservicenettoyage.ca/",
    previewImage: "/images/portfolio/ethique-service-nettoyage.webp",
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
      "Réalisation d'une landing page moderne pour Ture Beau Ménage, service d'entretien résidentiel au Québec. Design épuré mettant en avant les forfaits, le processus de service, les témoignages et un formulaire de réservation simplifié pour convertir les visiteurs.",
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
      "Portfolio Lannkin : landing page pour Ture Beau Ménage. Entretien ménager résidentiel Québec, Google Ads et conception web.",
    externalUrl: "https://www.turebeaumenage.com/",
    previewImage: "/images/portfolio/ture-beau-menage.webp",
  },
];

// ============================================================
// E-COMMERCE
// ============================================================

const ecommerceProjects: PortfolioProject[] = [
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
      "Boutique en ligne pour une boutique de jouets québécoise avec catalogue produits, paiement sécurisé et livraison au Canada.",
    description:
      "Développement d'une boutique e-commerce pour Le Coffre à Jouets, détaillant québécois de jouets et cadeaux. Catalogue produits organisé par catégories et âges, fiche produit détaillée, panier et checkout optimisés, intégration de paiement sécurisé et gestion des expéditions au Canada.",
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
    seoTitle: "Boutique E-commerce Jouets Québec | Le Coffre à Jouets — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : e-commerce pour Le Coffre à Jouets. Boutique en ligne jouets et cadeaux Québec, WooCommerce et SEO.",
    externalUrl: "https://lecoffreajouets.net/",
    previewImage: "/images/portfolio/coffre-a-jouets.webp",
  },
  {
    id: "bout-de-chou-boutique",
    slug: "bout-de-chou-boutique",
    name: "Bout de Chou Boutique",
    client: "Bout de Chou Boutique",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    sector: "Mode et accessoires enfants",
    year: 2024,
    shortDescription:
      "Boutique e-commerce de vêtements et accessoires pour enfants avec catalogue saisonnier, lookbook et livraison partout au Canada.",
    description:
      "Création d'une boutique e-commerce pour Bout de Chou Boutique, spécialiste de la mode et des accessoires pour enfants au Québec. Catalogue par taille et collection, lookbooks saisonniers, fiches produits détaillées avec photos multiples, gestion des tailles et couleurs, et checkout optimisé.",
    services: ["Conception Web", "Facebook Ads", "Réseaux Sociaux"],
    technologies: ["Shopify", "Liquid", "Instagram Shopping", "Meta Ads"],
    results: [
      "Boutique Shopify en ligne lancée avec succès",
      "Catalogue produits saisonnier bien présenté",
      "Ventes via Instagram Shopping intégrées",
      "Expérience d'achat mobile optimisée",
    ],
    challenge:
      "Créer une expérience d'achat en ligne qui reflète l'univers doux et chaleureux de la boutique physique pour les parents achetant pour leurs enfants.",
    solution:
      "Boutique Shopify avec design doux et coloré, lookbooks photographiques et intégration Instagram Shopping pour atteindre les parents sur les réseaux sociaux.",
    seoTitle: "Boutique E-commerce Mode Enfants Québec | Bout de Chou — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : e-commerce Shopify pour Bout de Chou Boutique. Mode et accessoires enfants Québec, vente en ligne et Instagram Shopping.",
    externalUrl: "https://boutdechouboutique.com/",
    previewImage: "/images/portfolio/bout-de-choux.webp",
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
];

// ============================================================
// NOUVEAUX PROJETS (images ajoutées 2026)
// ============================================================

const additionalProjects: PortfolioProject[] = [
  {
    id: "boiseries-sem",
    slug: "boiseries-sem",
    name: "Boiseries Sem",
    client: "Boiseries Sem",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Boiseries et menuiserie",
    year: 2024,
    shortDescription:
      "Site web multipage pour un artisan spécialisé en boiseries et menuiserie sur mesure au Québec.",
    description:
      "Conception d'un site web multipage pour Boiseries Sem, entreprise artisanale spécialisée en fabrication et installation de boiseries, moulures et menuiserie sur mesure. Galerie de réalisations, présentation des produits et services, et formulaire de demande de soumission.",
    services: ["Conception Web", "SEO", "Graphisme"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Présence web professionnelle établie",
      "Galerie de réalisations artisanales mise en valeur",
      "Demandes de soumission générées en ligne",
      "Référencement local amélioré",
    ],
    challenge:
      "Mettre en valeur le savoir-faire artisanal d'une entreprise de menuiserie et convaincre les clients de la qualité des finitions avant même la visite.",
    solution:
      "Site multipage axé sur la galerie de réalisations avec photos haute résolution et contenu SEO ciblant les propriétaires résidentiels locaux.",
    seoTitle: "Site Web Boiseries Menuiserie Québec | Boiseries Sem — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Boiseries Sem. Boiseries et menuiserie sur mesure Québec, conception web et SEO local.",
    previewImage: "/images/portfolio/boiseries-sem.webp",
  },
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
      "Site web multipage pour un entrepreneur général en construction et rénovation résidentielle au Québec.",
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
      "Établir une présence digitale crédible dans un secteur de la construction très compétitif au Québec.",
    solution:
      "Site multipage mettant en avant les réalisations photographiées avec contenu SEO local et formulaire de soumission optimisé.",
    seoTitle: "Site Web Entrepreneur Général Québec | Construction Fontes — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Construction Fontes. Entrepreneur général construction et rénovation résidentielle Québec.",
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
    seoTitle: "Site Web Cuisines Salles de Bain Québec | Cuisine Innovex — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Cuisine Innovex. Cuisines et salles de bain sur mesure Québec, conception web et SEO.",
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
      "Site web multipage pour une entreprise de maçonnerie spécialisée en briques, pierres et béton au Québec.",
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
    seoTitle: "Site Web Maçonnerie Québec | Maçonnerie Baka — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Maçonnerie Baka. Briques, pierres et béton décoratif Québec, conception web et SEO local.",
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
    seoTitle: "Site Web Rénovation Résidentielle Québec | Patrenov — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Patrenov. Rénovation résidentielle complète Québec, conception web et SEO local.",
    previewImage: "/images/portfolio/patrenov.webp",
  },
  {
    id: "plomberie-slb",
    slug: "plomberie-slb",
    name: "Plomberie SLB",
    client: "Plomberie SLB",
    category: "multipages",
    categoryLabel: "Multipages",
    sector: "Plomberie et chauffage",
    year: 2024,
    shortDescription:
      "Site web multipage pour une entreprise de plomberie et chauffage avec pages services, urgences et formulaire de contact.",
    description:
      "Développement d'un site web multipage professionnel pour Plomberie SLB, entreprise de plomberie et chauffage au Québec. Pages services détaillées (plomberie résidentielle, commerciale, chauffage, urgences 24/7), galerie de réalisations, formulaire de contact et optimisation SEO local.",
    services: ["Conception Web", "SEO", "Google Ads"],
    technologies: ["WordPress", "Elementor Pro", "WPForms", "WP Rocket"],
    results: [
      "Site web professionnel livré",
      "Visibilité locale améliorée sur Google",
      "Leads qualifiés via formulaire et téléphone",
      "PageSpeed optimisé",
    ],
    challenge:
      "Se positionner sur les recherches d'urgence plomberie et générer des appels directs via le web dans un marché très compétitif.",
    solution:
      "Site multipage avec appel à l'action téléphonique proéminent, contenu SEO local ciblant les urgences et formulaire de contact simplifié.",
    seoTitle: "Site Web Plomberie Québec | Plomberie SLB — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : site web pour Plomberie SLB. Plomberie et chauffage Québec, SEO local et Google Ads.",
    previewImage: "/images/portfolio/plomberie-slb.webp",
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
      "Conception d'une landing page optimisée pour SCS Entretien, service d'entretien ménager résidentiel et commercial au Québec. Présentation des forfaits, section témoignages clients, processus de service en 3 étapes et formulaire de demande de soumission en ligne.",
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
    seoTitle: "Site Web Services Entretien Québec | SCS Entretien — Portfolio Lannkin",
    seoDescription:
      "Portfolio Lannkin : landing page pour SCS Entretien. Services d'entretien résidentiel et commercial Québec.",
    previewImage: "/images/portfolio/scs-entretien.webp",
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
  ...additionalProjects,
];

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "multipages", label: "Multipages" },
  { id: "onepage", label: "Onepage" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "international", label: "International" },
];
