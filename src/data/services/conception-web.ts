// ============================================================
// Conception Web — Contenu détaillé pour les 6 sous-pages du hub
// ============================================================

export interface ServicePageContent {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: {
    title: string;
    content: string;
    items?: string[];
  }[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

// --------------------------------------------------
// 1. Site Vitrine
// --------------------------------------------------
const siteVitrine: ServicePageContent = {
  slug: "site-vitrine",
  heroTitle: "Création de site vitrine professionnel à Paris",
  heroSubtitle:
    "Présentez votre entreprise avec un site vitrine moderne, rapide et optimisé pour le référencement. Attirez plus de clients à Paris, en Île-de-France et partout en France.",
  sections: [
    {
      title: "Qu'est-ce qu'un site vitrine?",
      content:
        "Un site vitrine est une présence en ligne essentielle qui met en valeur votre entreprise, vos services et votre expertise. Contrairement à un site e-commerce, il se concentre sur la génération de contacts qualifiés (leads) plutôt que la vente directe. Chez LANNKIN, nous concevons des sites vitrines sur mesure pour les entreprises de Paris et d'Île-de-France qui souhaitent affirmer leur crédibilité en ligne.",
      items: [
        "Pages de présentation de l'entreprise et de l'équipe",
        "Catalogue de services avec appels à l'action stratégiques",
        "Formulaire de contact et intégration calendrier de rendez-vous",
        "Témoignages clients et études de cas",
        "Blog intégré pour le marketing de contenu",
        "Optimisation SEO locale pour Paris et l'Île-de-France",
      ],
    },
    {
      title: "Pourquoi choisir un site vitrine sur mesure?",
      content:
        "Les templates génériques ne suffisent plus pour se démarquer dans le marché français compétitif. Un site vitrine conçu sur mesure par LANNKIN est optimisé pour votre industrie, votre clientèle cible et les moteurs de recherche. Nous utilisons les dernières technologies (Next.js, TailwindCSS) pour garantir des temps de chargement ultra-rapides et une expérience mobile irréprochable.",
    },
    {
      title: "Technologies et performance",
      content:
        "Nos sites vitrines sont construits avec des technologies modernes qui garantissent performance et maintenabilité. Chaque projet est livré avec un score Google PageSpeed supérieur à 90, un design responsive testés sur plus de 20 appareils, et une architecture SEO-friendly dès le départ.",
      items: [
        "Next.js 15 ou WordPress optimisé selon vos besoins",
        "Design responsive mobile-first",
        "Score Core Web Vitals optimisé (LCP, CLS, INP)",
        "Hébergement haute performance au Canada (Vercel / WP Engine)",
        "Certificat SSL et sécurité renforcée",
      ],
    },
  ],
  benefits: [
    "Crédibilité professionnelle renforcée auprès de vos prospects",
    "Génération de leads qualifiés 24/7 grâce aux formulaires optimisés",
    "Visibilité accrue sur Google pour les recherches locales à Paris et en Île-de-France",
    "Temps de chargement inférieur à 2 secondes sur mobile",
    "Design unique adapté à votre image de marque",
    "Support technique continu et mises à jour régulières",
  ],
  process: [
    { step: 1, title: "Découverte et stratégie", description: "Analyse de vos objectifs, de votre clientèle cible et de la concurrence dans votre marché en France. Définition de l'arborescence et des fonctionnalités clés." },
    { step: 2, title: "Maquettes et design", description: "Création de maquettes haute fidélité dans Figma. Révisions illimitées jusqu'à validation complète du design responsive." },
    { step: 3, title: "Développement", description: "Intégration pixel-perfect avec Next.js ou WordPress. Optimisation des performances, du SEO technique et de l'accessibilité." },
    { step: 4, title: "Tests et lancement", description: "Tests multi-navigateurs, responsive, performance et SEO. Migration DNS et mise en production avec surveillance proactive." },
    { step: 5, title: "Support continu", description: "Maintenance mensuelle, mises à jour de sécurité, rapports de performance et support technique prioritaire." },
  ],
  faq: [
    { question: "Combien coûte un site vitrine à Paris?", answer: "Nos sites vitrines démarrent à 99€/mois avec notre formule d'abonnement, ou à partir de 2 500$ en projet forfaitaire. Le prix varie selon le nombre de pages, les fonctionnalités et le niveau de personnalisation souhaité." },
    { question: "En combien de temps mon site vitrine sera-t-il prêt?", answer: "Un site vitrine standard est livré en 3 à 4 semaines. Les projets plus complexes avec des fonctionnalités avancées peuvent prendre 6 à 8 semaines." },
    { question: "Mon site sera-t-il visible sur Google?", answer: "Absolument. Chaque site vitrine est livré avec une optimisation SEO technique complète : balises méta, données structurées, sitemap XML, Core Web Vitals optimisés et inscription Google Search Console." },
    { question: "Puis-je modifier le contenu moi-même?", answer: "Oui, nous intégrons un système de gestion de contenu (CMS) intuitif qui vous permet de modifier textes, images et pages en toute autonomie, sans connaissance technique." },
  ],
};

// --------------------------------------------------
// 2. Site WordPress
// --------------------------------------------------
const siteWordpress: ServicePageContent = {
  slug: "site-wordpress",
  heroTitle: "Création de site WordPress sur mesure à Paris",
  heroSubtitle:
    "Exploitez la puissance de WordPress avec un site entièrement personnalisé. Thèmes custom, plugins optimisés et administration simplifiée pour votre entreprise en France.",
  sections: [
    {
      title: "Pourquoi choisir WordPress pour votre site web?",
      content:
        "WordPress propulse plus de 43% des sites web dans le monde. C'est le CMS le plus populaire pour une bonne raison : il offre une flexibilité inégalée, un écosystème de plugins riche et une communauté massive. Chez LANNKIN, nous développons des sites WordPress sur mesure pour les entreprises de Paris, d'Île-de-France et de toute la France qui veulent un site performant et facile à gérer.",
      items: [
        "Thèmes WordPress custom développés sur mesure pour votre marque",
        "Sélection rigoureuse de plugins premium (SEO, sécurité, cache, formulaires)",
        "Page builder Elementor Pro ou Gutenberg avancé selon vos besoins",
        "WooCommerce pour la vente en ligne si nécessaire",
        "Multilingue avec WPML ou Polylang (français/anglais)",
        "Intégration CRM, infolettre et outils marketing",
      ],
    },
    {
      title: "Notre approche WordPress professionnelle",
      content:
        "Contrairement aux agences qui utilisent des thèmes pré-faits, nous développons des thèmes WordPress entièrement sur mesure ou personnalisons en profondeur des thèmes premium. Chaque plugin est testé pour la compatibilité, la performance et la sécurité. Votre site WordPress ne ressemblera à aucun autre.",
    },
    {
      title: "Sécurité et performance WordPress",
      content:
        "WordPress est sûr lorsqu'il est correctement configuré. Nous appliquons les meilleures pratiques de sécurité du secteur et optimisons chaque aspect technique pour des performances maximales.",
      items: [
        "Hébergement WordPress managé (WP Engine ou Cloudways Canada)",
        "Certificat SSL, pare-feu applicatif (WAF) et protection DDoS",
        "Mises à jour automatiques du core, des thèmes et des plugins",
        "Cache serveur et CDN pour des temps de chargement ultra-rapides",
        "Sauvegardes automatiques quotidiennes avec restauration en 1 clic",
        "Monitoring 24/7 avec alertes en temps réel",
      ],
    },
  ],
  benefits: [
    "CMS le plus populaire au monde avec une communauté massive",
    "Administration intuitive : modifier votre contenu en toute autonomie",
    "Écosystème de plus de 60 000 plugins pour étendre les fonctionnalités",
    "SEO-friendly nativement avec Yoast SEO ou Rank Math",
    "Compatible WooCommerce pour ajouter la vente en ligne",
    "Coûts de maintenance prévisibles et raisonnables",
  ],
  process: [
    { step: 1, title: "Audit et planification", description: "Analyse de vos besoins fonctionnels, choix de l'architecture WordPress (thème custom vs premium), sélection des plugins essentiels." },
    { step: 2, title: "Design UX/UI", description: "Création de maquettes dans Figma respectant votre charte graphique. Design responsive optimisé pour la conversion." },
    { step: 3, title: "Développement WordPress", description: "Développement du thème custom, configuration des plugins, intégration du contenu et optimisation des performances." },
    { step: 4, title: "Formation et transfert", description: "Formation personnalisée à l'administration WordPress. Documentation complète et guide d'utilisation sur mesure." },
    { step: 5, title: "Lancement et maintenance", description: "Mise en production, vérification SEO, configuration des sauvegardes et début du plan de maintenance mensuel." },
  ],
  faq: [
    { question: "WordPress est-il encore pertinent en 2025?", answer: "Absolument. WordPress reste le CMS le plus utilisé au monde et continue d'évoluer avec Gutenberg, le Full Site Editing et une API REST puissante. Pour la majorité des PME en France, c'est le choix optimal en termes de rapport qualité/prix." },
    { question: "Mon site WordPress sera-t-il rapide?", answer: "Oui. Nous optimisons chaque site avec un hébergement performant, un système de cache avancé, l'optimisation des images et un CDN. Nos sites WordPress atteignent régulièrement un score PageSpeed supérieur à 85." },
    { question: "Puis-je passer de WordPress à une autre technologie plus tard?", answer: "Oui. Nous concevons vos contenus de manière structurée, ce qui facilite une migration future vers Next.js, Shopify ou tout autre plateforme si vos besoins évoluent." },
    { question: "Incluez-vous la maintenance WordPress?", answer: "Nous offrons des plans de maintenance mensuels à partir de 79€/mois incluant les mises à jour, sauvegardes, monitoring de sécurité et support technique prioritaire." },
  ],
};

// --------------------------------------------------
// 3. Site Shopify
// --------------------------------------------------
const siteShopify: ServicePageContent = {
  slug: "site-shopify",
  heroTitle: "Agence web Shopify à Paris — Votre boutique e-commerce sur mesure",
  heroSubtitle:
    "LANNKIN, votre agence web Shopify en France. Création de boutiques Shopify performantes, développement Liquid sur mesure et stratégie e-commerce complète pour propulser vos ventes en ligne.",
  sections: [
    {
      title: "Pourquoi choisir LANNKIN comme agence web Shopify en France?",
      content:
        "Shopify est une entreprise française basée à Ottawa qui propulse plus de 4 millions de boutiques dans le monde. En tant qu'agence web Shopify expérimentée, LANNKIN accompagne des e-commerces au Canada et à l'international — de Khaven Swim (+150 000 $ CAD en 2023) à Montecarlo Designs (mobilier de luxe à Monaco). Notre expertise couvre la création, l'optimisation conversion et la stratégie marketing complète.",
      items: [
        "Thèmes Shopify personnalisés avec développement Liquid",
        "Configuration multilingue français/anglais pour le France",
        "Shopify Payments avec configuration des taxes adaptée à votre marché",
        "Intégration apps essentielles : avis clients, upsell, email marketing",
        "Shopify POS pour la vente en magasin (point de vente)",
        "Migration depuis WooCommerce, Wix, Squarespace ou Etsy",
      ],
    },
    {
      title: "Développement Liquid et personnalisation avancée",
      content:
        "Le langage Liquid de Shopify permet une personnalisation poussée de votre boutique. Notre équipe maîtrise le développement de thèmes Shopify 2.0 avec les sections dynamiques, les métachamps (metafields) et les filtres de collection avancés pour créer une expérience d'achat unique.",
    },
    {
      title: "Optimisation conversion et marketing e-commerce",
      content:
        "Avoir une belle boutique ne suffit pas — il faut convertir les visiteurs en acheteurs. Nous optimisons chaque étape du parcours client pour maximiser votre taux de conversion.",
      items: [
        "Checkout optimisé avec options de paiement multiples",
        "Relance automatique des paniers abandonnés par email et SMS",
        "Programme de fidélité et cartes-cadeaux intégrés",
        "SEO e-commerce : fiches produits optimisées, données structurées",
        "Intégration Google Shopping et Facebook/Instagram Shop",
        "Analytics e-commerce avancé avec Google Analytics 4",
      ],
    },
  ],
  benefits: [
    "Plateforme française avec support en français et devise CAD native",
    "Hébergement inclus avec certificat SSL et conformité PCI DSS",
    "Plus de 8 000 applications dans le Shopify App Store",
    "Shopify Payments élimine les frais de passerelle tiers",
    "Scalable : de la startup à l'entreprise avec Shopify Plus",
    "Mises à jour automatiques de la plateforme sans temps d'arrêt",
  ],
  process: [
    { step: 1, title: "Stratégie e-commerce", description: "Analyse de votre catalogue, étude de la concurrence française, définition de la stratégie de prix et de livraison (Postes Canada, Purolator)." },
    { step: 2, title: "Design de la boutique", description: "Maquettes Figma de la page d'accueil, pages collection, fiches produit et panier. Design axé sur la conversion mobile." },
    { step: 3, title: "Développement Shopify", description: "Installation et personnalisation du thème Liquid, configuration des apps, import du catalogue produits et paramétrage des taxes selon votre marché." },
    { step: 4, title: "Tests et optimisation", description: "Tests de commande complète, vérification des paiements, optimisation de la vitesse et du SEO e-commerce." },
    { step: 5, title: "Lancement et formation", description: "Mise en ligne, formation à l'interface admin Shopify, configuration des rapports de vente et du suivi analytique." },
  ],
  faq: [
    { question: "Combien coûte une boutique Shopify?", answer: "L'abonnement Shopify Basic démarre à 39 CAD/mois. La conception sur mesure par LANNKIN commence à 3 500$ pour une boutique standard avec personnalisation du thème, configuration des apps et import de produits." },
    { question: "Shopify gère-t-il les taxes françaises?", answer: "Oui, Shopify permet de configurer la TVA pour les ventes en France, ainsi que les autres taxes applicables selon votre marché et vos zones de vente." },
    { question: "Puis-je vendre en français et en anglais?", answer: "Oui, Shopify Markets permet de gérer plusieurs langues et devises. Nous configurons votre boutique pour servir les marchés francophone et anglophone du Canada." },
    { question: "Comment migrer ma boutique WooCommerce vers Shopify?", answer: "Nous utilisons des outils de migration spécialisés pour transférer vos produits, clients, commandes et redirections SEO de WooCommerce vers Shopify sans perte de données ni de référencement." },
  ],
};

// --------------------------------------------------
// 4. Site Next.js
// --------------------------------------------------
const siteNextjs: ServicePageContent = {
  slug: "site-nextjs",
  heroTitle: "Développement Next.js 15 à Paris | Sites ultra-performants",
  heroSubtitle:
    "Propulsez votre site web avec Next.js 15, le framework React de référence. Server-Side Rendering, génération statique et performances inégalées pour votre entreprise en France.",
  sections: [
    {
      title: "Qu'est-ce que Next.js et pourquoi c'est supérieur?",
      content:
        "Next.js est le framework React développé par Vercel qui propulse les sites de Nike, Netflix, TikTok et des milliers d'entreprises. Il combine le rendu côté serveur (SSR), la génération statique (SSG) et le rendu incrémental (ISR) pour offrir les meilleures performances possibles. Chez LANNKIN, nous sommes spécialisés en Next.js 15 avec App Router, Server Components et les dernières innovations React.",
      items: [
        "Next.js 15 avec App Router et React Server Components",
        "Server-Side Rendering (SSR) pour un SEO optimal",
        "Static Site Generation (SSG) pour des performances maximales",
        "Incremental Static Regeneration (ISR) pour du contenu dynamique",
        "API Routes et Server Actions pour la logique backend",
        "Déploiement sur Vercel avec CDN global et Edge Functions",
      ],
    },
    {
      title: "Stack technique moderne et maintenable",
      content:
        "Nous utilisons un stack technique éprouvé et moderne pour garantir la qualité, la maintenabilité et la scalabilité de votre projet Next.js à long terme. Chaque ligne de code est typée avec TypeScript et testée pour assurer une fiabilité maximale.",
      items: [
        "TypeScript strict pour un code robuste et maintenable",
        "TailwindCSS pour un design system cohérent et performant",
        "Shadcn/ui et Radix pour des composants accessibles (WCAG 2.1)",
        "Prisma ou Drizzle ORM pour la gestion de base de données",
        "NextAuth.js ou Clerk pour l'authentification sécurisée",
        "Zod pour la validation des données côté serveur et client",
      ],
    },
    {
      title: "Performance et Core Web Vitals",
      content:
        "Les Core Web Vitals sont un facteur de classement Google depuis 2021. Nos sites Next.js atteignent systématiquement un score de 95+ sur Google PageSpeed Insights, ce qui contribue directement à un meilleur référencement et une expérience utilisateur supérieure.",
    },
  ],
  benefits: [
    "Score PageSpeed de 95+ sur desktop et mobile garanti",
    "SEO technique parfait grâce au Server-Side Rendering",
    "Temps de chargement inférieur à 1 seconde grâce au CDN Vercel",
    "Architecture scalable prête pour la croissance de votre entreprise",
    "Expérience développeur supérieure pour des mises à jour rapides",
    "Sécurité renforcée avec les Server Components et Server Actions",
  ],
  process: [
    { step: 1, title: "Architecture et specs", description: "Définition de l'architecture technique, choix du stack (CMS, base de données, authentification), rédaction des spécifications techniques détaillées." },
    { step: 2, title: "Design system", description: "Création du design system dans Figma avec composants réutilisables. Implémentation des tokens de design dans TailwindCSS." },
    { step: 3, title: "Développement itératif", description: "Développement en sprints de 2 semaines avec démos régulières. Server Components, API Routes, intégration CMS et tests automatisés." },
    { step: 4, title: "Optimisation et QA", description: "Audit de performance, optimisation des Core Web Vitals, tests end-to-end avec Playwright et revue de code approfondie." },
    { step: 5, title: "Déploiement et monitoring", description: "Déploiement sur Vercel avec CI/CD automatisé, configuration du monitoring (Sentry, Vercel Analytics) et documentation technique." },
  ],
  faq: [
    { question: "Quand choisir Next.js plutôt que WordPress?", answer: "Next.js est idéal quand vous avez besoin de performances maximales, d'une interface utilisateur riche et interactive, ou d'une application web complexe (dashboard, SaaS, plateforme). WordPress reste excellent pour les sites de contenu simples avec un budget limité." },
    { question: "Next.js est-il bon pour le SEO?", answer: "Excellent. Le Server-Side Rendering de Next.js génère du HTML côté serveur, ce qui permet à Google d'indexer parfaitement votre contenu. Combiné aux metadata API et aux sitemaps dynamiques, c'est la solution technique optimale pour le SEO." },
    { question: "Combien coûte un site Next.js?", answer: "Les projets Next.js démarrent à 5 000$ pour un site vitrine performant et peuvent atteindre 25 000$+ pour des applications web complexes. L'hébergement sur Vercel commence à 0€/mois (plan gratuit) jusqu'à 20€/mois (plan Pro)." },
    { question: "Puis-je gérer le contenu sans être développeur?", answer: "Absolument. Nous intégrons un headless CMS (Sanity, Contentful ou Strapi) qui offre une interface d'administration intuitive pour gérer votre contenu sans toucher au code." },
  ],
};

// --------------------------------------------------
// 5. Site Headless CMS
// --------------------------------------------------
const siteHeadlessCms: ServicePageContent = {
  slug: "site-headless-cms",
  heroTitle: "Headless CMS : Sanity, Strapi et Contentful à Paris",
  heroSubtitle:
    "Adoptez une architecture découplée avec un headless CMS. Flexibilité totale, performance maximale et expérience éditoriale optimale pour vos équipes en France.",
  sections: [
    {
      title: "Qu'est-ce qu'un headless CMS?",
      content:
        "Un headless CMS sépare la gestion du contenu (back-end) de la présentation (front-end). Contrairement à WordPress qui lie les deux, un headless CMS expose votre contenu via une API, ce qui permet de l'afficher sur un site web Next.js, une application mobile, un kiosque digital ou tout autre canal. LANNKIN accompagne les entreprises de Paris et d'Île-de-France dans l'adoption de cette architecture moderne.",
      items: [
        "Sanity.io : CMS headless en temps réel avec Studio personnalisable",
        "Strapi : CMS headless open-source auto-hébergé (Node.js)",
        "Contentful : CMS headless enterprise avec CDN global",
        "Architecture JAMstack pour des performances maximales",
        "API GraphQL ou REST pour une flexibilité totale",
        "Contenu omnicanal : web, mobile, IoT, affichage digital",
      ],
    },
    {
      title: "Avantages de l'architecture découplée",
      content:
        "L'architecture headless offre des avantages considérables pour les entreprises qui publient du contenu régulièrement ou qui ont besoin de distribuer leur contenu sur plusieurs canaux. C'est la solution privilégiée par les grandes entreprises technologiques et de plus en plus adoptée par les PME françaises.",
      items: [
        "Performance : pages pré-rendues servies depuis un CDN global",
        "Sécurité : pas de base de données exposée sur le front-end",
        "Scalabilité : le front-end et le back-end évoluent indépendamment",
        "Flexibilité : changez de front-end sans toucher au contenu",
        "Collaboration : plusieurs rédacteurs travaillent simultanément",
        "Versionnage : historique complet de chaque modification",
      ],
    },
    {
      title: "Quel headless CMS choisir?",
      content:
        "Le choix du CMS dépend de votre contexte : taille de l'équipe, volume de contenu, budget et contraintes techniques. Nous vous guidons vers la solution optimale après une analyse approfondie de vos besoins.",
    },
  ],
  benefits: [
    "Contenu réutilisable sur tous vos canaux (web, mobile, IoT)",
    "Performance supérieure grâce au pré-rendu statique et au CDN",
    "Sécurité renforcée : aucune base de données exposée publiquement",
    "Expérience éditoriale moderne avec prévisualisation en temps réel",
    "Scalabilité illimitée pour gérer des pics de trafic",
    "Indépendance technologique entre le front-end et le CMS",
  ],
  process: [
    { step: 1, title: "Analyse et choix du CMS", description: "Évaluation de vos besoins éditoriaux, du volume de contenu et des contraintes techniques. Recommandation du headless CMS optimal (Sanity, Strapi ou Contentful)." },
    { step: 2, title: "Modélisation du contenu", description: "Définition des types de contenu, des relations et des workflows éditoriaux. Configuration du CMS et de l'expérience de rédaction." },
    { step: 3, title: "Développement front-end", description: "Développement du site Next.js connecté au CMS via API. Implémentation de la prévisualisation en temps réel et du mode brouillon." },
    { step: 4, title: "Migration de contenu", description: "Migration du contenu existant (WordPress, fichiers, etc.) vers le headless CMS. Vérification de l'intégrité et des médias." },
    { step: 5, title: "Formation et déploiement", description: "Formation de votre équipe éditoriale au nouveau CMS. Déploiement en production avec CI/CD et webhooks de revalidation." },
  ],
  faq: [
    { question: "Un headless CMS coûte-t-il plus cher que WordPress?", answer: "Le coût initial de développement est généralement plus élevé, mais les coûts d'hébergement et de maintenance sont souvent inférieurs. Sanity offre un plan gratuit généreux, et Strapi est open-source. Le ROI est positif à moyen terme grâce aux gains de performance et de productivité éditoriale." },
    { question: "Mes rédacteurs non-techniques pourront-ils utiliser le CMS?", answer: "Oui, les headless CMS modernes offrent des interfaces d'édition visuelles et intuitives. Sanity Studio, par exemple, propose un éditeur de contenu riche, la prévisualisation en temps réel et un workflow de publication complet." },
    { question: "Puis-je migrer mon site WordPress vers un headless CMS?", answer: "Absolument. Nous migrons régulièrement des sites WordPress vers une architecture headless (Next.js + Sanity). Le contenu, les médias et les redirections SEO sont préservés intégralement." },
    { question: "Le headless CMS est-il bon pour le SEO?", answer: "Excellent. Combiné à Next.js avec SSR/SSG, un headless CMS produit des pages ultra-rapides avec un score PageSpeed de 95+, ce qui est un facteur de classement majeur sur Google." },
  ],
};

// --------------------------------------------------
// 6. Refonte Site Web
// --------------------------------------------------
const refonteSiteWeb: ServicePageContent = {
  slug: "refonte-site-web",
  heroTitle: "Refonte de site web à Paris | Modernisez votre présence en ligne",
  heroSubtitle:
    "Votre site web est lent, dépassé ou ne génère pas assez de leads? Notre service de refonte complète transforme votre site en un outil de croissance performant, sans perdre votre référencement.",
  sections: [
    {
      title: "Quand faut-il refondre son site web?",
      content:
        "Un site web a une durée de vie moyenne de 3 à 5 ans avant de nécessiter une refonte. Les signaux d'alerte sont nombreux : design dépassé, site non responsive, temps de chargement lents, taux de rebond élevé ou perte de positions sur Google. Si votre site ne génère plus suffisamment de contacts ou de ventes, il est temps d'agir.",
      items: [
        "Design non responsive ou mal adapté aux mobiles",
        "Temps de chargement supérieur à 3 secondes",
        "Taux de rebond supérieur à 60%",
        "Technologie obsolète (Flash, vieux WordPress, PHP non supporté)",
        "Contenu non structuré et navigation confuse",
        "Aucune optimisation SEO en place",
      ],
    },
    {
      title: "Préservation du référencement lors de la refonte",
      content:
        "La plus grande crainte lors d'une refonte est la perte de positionnement SEO. Chez LANNKIN, nous appliquons un protocole strict de préservation SEO qui inclut l'audit complet de votre référencement actuel, le mapping de toutes les URLs, la mise en place de redirections 301 et le suivi post-lancement avec Google Search Console.",
      items: [
        "Audit SEO complet avant la refonte (positions, backlinks, trafic)",
        "Mapping exhaustif de toutes les URLs avec redirections 301",
        "Préservation des balises title, meta descriptions et données structurées",
        "Migration du contenu avec optimisation SEO on-page",
        "Soumission du nouveau sitemap à Google Search Console",
        "Monitoring SEO post-lancement pendant 3 mois",
      ],
    },
    {
      title: "Migration technique et transfert de données",
      content:
        "Nous gérons la migration complète de votre site actuel vers la nouvelle plateforme. Que vous passiez de WordPress à Next.js, de Wix à Shopify ou de tout autre CMS, vos données, contenus et médias sont transférés intégralement.",
    },
  ],
  benefits: [
    "Design moderne qui renforce la crédibilité de votre marque",
    "Performance multipliée par 3 à 5 après la refonte",
    "Préservation complète de votre référencement Google",
    "Augmentation du taux de conversion grâce à un UX repensé",
    "Compatibilité mobile parfaite sur tous les appareils",
    "Architecture technique moderne et évolutive",
  ],
  process: [
    { step: 1, title: "Audit de l'existant", description: "Audit complet du site actuel : performance, SEO, UX, contenu, analytiques. Identification des forces à préserver et des faiblesses à corriger." },
    { step: 2, title: "Stratégie de refonte", description: "Définition des objectifs mesurables, nouvelle arborescence, choix technologique et plan de migration SEO détaillé avec mapping des URLs." },
    { step: 3, title: "Design et prototypage", description: "Nouveau design moderne dans Figma avec tests utilisateurs. Comparaison avant/après pour valider les améliorations UX." },
    { step: 4, title: "Développement et migration", description: "Développement du nouveau site en environnement de staging. Migration du contenu, des médias et mise en place des redirections 301." },
    { step: 5, title: "Lancement et suivi", description: "Mise en production planifiée, vérification des redirections, soumission Google Search Console et monitoring SEO quotidien pendant 3 mois." },
  ],
  faq: [
    { question: "Vais-je perdre mon référencement Google?", answer: "Non. Notre protocole de migration SEO inclut le mapping complet de toutes vos URLs, des redirections 301 permanentes et un monitoring post-lancement. La grande majorité de nos refontes constatent une amélioration du référencement dans les 3 mois suivant le lancement." },
    { question: "Combien de temps dure une refonte?", answer: "Une refonte complète prend généralement 6 à 10 semaines selon la taille et la complexité du site existant. Nous travaillons en parallèle sur le nouveau site sans perturber l'ancien, qui reste en ligne jusqu'au jour J." },
    { question: "Dois-je réécrire tout mon contenu?", answer: "Pas nécessairement. Nous auditons votre contenu existant et recommandons les pages à conserver, à optimiser ou à réécrire. Le contenu performant est migré et amélioré, tandis que le contenu obsolète est retiré ou réécrit." },
    { question: "Puis-je changer de plateforme lors de la refonte?", answer: "Absolument. C'est le moment idéal pour migrer de WordPress vers Next.js, de Wix vers Shopify, ou toute autre transition technologique. Nous gérons la migration complète de vos données et contenus." },
  ],
};

// --------------------------------------------------
// Export
// --------------------------------------------------

export const CONCEPTION_WEB_PAGES: ServicePageContent[] = [
  siteVitrine,
  siteWordpress,
  siteShopify,
  siteNextjs,
  siteHeadlessCms,
  refonteSiteWeb,
];

export function getConceptionWebPageBySlug(slug: string): ServicePageContent | undefined {
  return CONCEPTION_WEB_PAGES.find((p) => p.slug === slug);
}
