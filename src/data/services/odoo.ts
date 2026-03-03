// ============================================================
// Odoo — Contenu détaillé pour les 8 sous-pages du hub
// ============================================================

import type { ServicePageContent } from "./conception-web";

// --------------------------------------------------
// 1. Création site web Odoo
// --------------------------------------------------
const creationSite: ServicePageContent = {
  slug: "creation-site",
  heroTitle: "Création de site web Odoo à Laval et Montréal",
  heroSubtitle:
    "Créez un site web professionnel directement intégré à votre ERP Odoo. Thèmes personnalisés, modules web avancés et synchronisation automatique avec votre gestion d'entreprise.",
  sections: [
    {
      title: "Pourquoi créer votre site web avec Odoo?",
      content:
        "Le Website Builder d'Odoo permet de créer des sites web professionnels nativement intégrés à votre ERP. Contrairement à WordPress ou Shopify qui nécessitent des intégrations tierces, votre site Odoo est automatiquement connecté à votre CRM, vos stocks, votre comptabilité et tous vos processus métier. LANNKIN est votre partenaire Odoo de confiance à Laval pour la création de sites web d'entreprise.",
      items: [
        "Website Builder Odoo avec éditeur visuel drag-and-drop",
        "Thèmes Odoo personnalisés avec votre charte graphique",
        "Intégration native avec le CRM Odoo (formulaires, leads)",
        "Blog intégré avec SEO optimisé",
        "Portail client avec accès aux devis, factures et commandes",
        "Multilingue natif (français, anglais et plus de 50 langues)",
      ],
    },
    {
      title: "Modules web Odoo avancés",
      content:
        "Au-delà du site web classique, Odoo offre des modules web puissants qui transforment votre site en véritable outil de gestion. Du recrutement en ligne à la gestion d'événements, chaque module est nativement connecté à votre ERP.",
      items: [
        "Module E-commerce pour la vente en ligne intégrée",
        "Module Événements pour la gestion de conférences et webinaires",
        "Module Recrutement pour publier des offres d'emploi",
        "Module Forum pour la communauté et le support client",
        "Module eLearning pour la formation en ligne",
        "Module Rendez-vous pour la prise de rendez-vous en ligne",
      ],
    },
    {
      title: "Performance et hébergement",
      content:
        "Odoo.sh offre un hébergement cloud performant et sécurisé pour votre site web. Les serveurs sont hébergés au Canada pour garantir la conformité aux lois québécoises sur la protection des données et des temps de réponse optimaux pour vos visiteurs de Laval, Montréal et du Québec.",
    },
  ],
  benefits: [
    "Intégration native avec votre ERP Odoo (CRM, stocks, comptabilité)",
    "Éditeur visuel intuitif accessible aux non-développeurs",
    "Portail client avec accès aux devis, factures et commandes",
    "Multilingue natif sans plugin additionnel",
    "Un seul fournisseur pour le site web et l'ERP",
    "Hébergement Odoo.sh performant avec serveurs au Canada",
  ],
  process: [
    { step: 1, title: "Analyse des besoins", description: "Étude de vos objectifs web, de votre flux de travail Odoo existant et des modules web nécessaires. Définition de l'arborescence et des fonctionnalités." },
    { step: 2, title: "Design et personnalisation", description: "Personnalisation du thème Odoo avec votre charte graphique, création des pages principales et configuration du portail client." },
    { step: 3, title: "Configuration des modules", description: "Installation et configuration des modules web (e-commerce, blog, événements, etc.). Intégration avec le CRM et les processus existants." },
    { step: 4, title: "Contenu et SEO", description: "Intégration du contenu, optimisation SEO de chaque page, configuration des méta-données et des données structurées." },
    { step: 5, title: "Lancement et formation", description: "Mise en production, formation de votre équipe à l'éditeur web Odoo et documentation des bonnes pratiques de mise à jour du contenu." },
  ],
  faq: [
    { question: "Le site web Odoo est-il inclus dans l'abonnement Odoo?", answer: "Le module Website est inclus dans tous les plans Odoo. Les modules additionnels (e-commerce, blog, eLearning) sont disponibles selon votre plan d'abonnement ou en achat individuel." },
    { question: "Puis-je personnaliser le design du site Odoo?", answer: "Oui. Nous créons des thèmes Odoo entièrement personnalisés avec votre charte graphique. L'éditeur drag-and-drop permet ensuite de modifier le contenu sans toucher au code." },
    { question: "Le site Odoo est-il bon pour le SEO?", answer: "Le SEO de base est correct mais nécessite une optimisation professionnelle. Nous configurons les balises méta, les données structurées, le sitemap et les Core Web Vitals pour maximiser votre visibilité sur Google." },
    { question: "Puis-je avoir un site web Odoo sans utiliser l'ERP?", answer: "Techniquement oui, mais ce n'est pas l'usage optimal. Si vous n'avez pas besoin de l'ERP, nous recommandons plutôt WordPress ou Next.js. L'avantage du site Odoo réside dans l'intégration native avec les processus métier." },
  ],
};

// --------------------------------------------------
// 2. ERP Intégration
// --------------------------------------------------
const erpIntegration: ServicePageContent = {
  slug: "erp-integration",
  heroTitle: "Intégration ERP Odoo à Laval | Ventes, achats et inventaire",
  heroSubtitle:
    "Centralisez la gestion de votre entreprise avec l'ERP Odoo. Modules ventes, achats, inventaire, comptabilité et fabrication intégrés pour les PME du Québec.",
  sections: [
    {
      title: "Pourquoi choisir Odoo comme ERP?",
      content:
        "Odoo est l'ERP open-source le plus populaire au monde avec plus de 12 millions d'utilisateurs. Il offre une suite complète de modules d'entreprise à une fraction du coût des ERP traditionnels comme SAP ou Oracle. Pour les PME de Laval, Montréal et du Québec, Odoo représente l'équilibre parfait entre fonctionnalités, flexibilité et budget.",
      items: [
        "Module Ventes : devis, commandes, tarifs et commissions",
        "Module Achats : bons de commande, approbations et fournisseurs",
        "Module Inventaire : gestion de stock, traçabilité et entrepôts",
        "Module Comptabilité : facturation, rapprochement et rapports",
        "Module Fabrication (MRP) : nomenclatures, ordres et planification",
        "Module Projet : gestion de projets, tâches et feuilles de temps",
      ],
    },
    {
      title: "Intégration avec vos outils existants",
      content:
        "Odoo s'intègre avec les outils que vous utilisez déjà. Que ce soit votre banque (Desjardins, RBC, TD), votre service de paiement (Stripe, PayPal), votre logistique (Postes Canada, UPS, FedEx) ou vos outils marketing (Mailchimp, HubSpot), nous configurons des intégrations fluides et fiables.",
      items: [
        "Banques canadiennes : Desjardins, RBC, TD, BMO, Banque Nationale",
        "Paiements : Stripe, PayPal, Moneris, Square",
        "Logistique : Postes Canada, UPS, FedEx, Purolator",
        "Marketing : Mailchimp, HubSpot, Sendinblue",
        "E-commerce : Shopify, Amazon, eBay (synchronisation bidirectionnelle)",
        "Productivité : Google Workspace, Microsoft 365, Slack",
      ],
    },
    {
      title: "Conformité et fiscalité québécoise",
      content:
        "Notre équipe connaît les particularités de la fiscalité québécoise et canadienne. Nous configurons Odoo pour gérer correctement la TPS, la TVQ, les rapports fiscaux et les exigences de Revenu Québec et de l'ARC. Vos numéros de TPS et TVQ, vos taxes par province et vos rapports de fin d'année sont configurés dès le départ.",
    },
  ],
  benefits: [
    "Suite ERP complète à une fraction du coût de SAP ou Oracle",
    "Plus de 50 modules intégrés couvrant tous vos processus",
    "Open-source avec possibilité de personnalisation illimitée",
    "Fiscalité québécoise et canadienne configurée (TPS/TVQ)",
    "Intégration native avec les banques et transporteurs canadiens",
    "Interface moderne et intuitive pour une adoption rapide",
  ],
  process: [
    { step: 1, title: "Diagnostic entreprise", description: "Analyse de vos processus métier actuels, identification des inefficacités et cartographie des flux de travail. Définition du périmètre ERP." },
    { step: 2, title: "Architecture Odoo", description: "Sélection des modules Odoo nécessaires, conception de l'architecture et planification de l'implémentation par phases." },
    { step: 3, title: "Configuration et personnalisation", description: "Installation et configuration des modules, personnalisation des workflows, création des rapports et configuration de la fiscalité québécoise." },
    { step: 4, title: "Migration des données", description: "Import de vos données existantes (clients, produits, factures) depuis vos systèmes actuels (Excel, QuickBooks, Sage, etc.)." },
    { step: 5, title: "Formation et go-live", description: "Formation complète de vos équipes par module, support intensif pendant les premières semaines et ajustements post-lancement." },
  ],
  faq: [
    { question: "Combien coûte l'implantation d'Odoo pour une PME?", answer: "L'implantation Odoo pour une PME de 5 à 20 utilisateurs coûte généralement entre 10 000$ et 30 000$ selon le nombre de modules et la complexité des processus. L'abonnement Odoo Online commence à 24.90$/utilisateur/mois." },
    { question: "Combien de temps prend une implantation Odoo?", answer: "Une implantation standard (ventes + achats + inventaire + comptabilité) prend 2 à 4 mois. Les projets plus complexes avec fabrication et multi-entrepôts peuvent prendre 4 à 6 mois." },
    { question: "Odoo gère-t-il la comptabilité au Québec?", answer: "Oui. Le plan comptable canadien est inclus avec la gestion TPS/TVQ, les rapports de taxes et les rapprochements bancaires. Nous recommandons toutefois de travailler avec votre comptable pour la configuration initiale." },
    { question: "Puis-je commencer avec quelques modules et ajouter les autres plus tard?", answer: "Absolument. C'est notre approche recommandée. Nous commençons souvent par les ventes et la comptabilité, puis ajoutons les achats, l'inventaire et les autres modules progressivement." },
  ],
};

// --------------------------------------------------
// 3. CRM Odoo
// --------------------------------------------------
const crm: ServicePageContent = {
  slug: "crm",
  heroTitle: "CRM Odoo à Laval | Pipeline de ventes et automatisation",
  heroSubtitle:
    "Gérez vos prospects, automatisez votre pipeline de ventes et augmentez vos conversions avec le CRM Odoo. Intégration VoIP, emails automatisés et rapports en temps réel pour les entreprises du Québec.",
  sections: [
    {
      title: "Le CRM Odoo : bien plus qu'un carnet de contacts",
      content:
        "Le CRM Odoo est un outil de gestion commerciale complet qui va bien au-delà du simple suivi de contacts. Il offre un pipeline de ventes visuel, l'automatisation des tâches commerciales, l'intégration VoIP pour les appels directement depuis l'interface et des rapports analytiques puissants pour piloter votre performance commerciale.",
      items: [
        "Pipeline de ventes Kanban visuel et personnalisable",
        "Capture automatique de leads depuis votre site web Odoo",
        "Scoring de leads pour prioriser les prospects les plus chauds",
        "Automatisation des emails de suivi et relances",
        "Intégration VoIP pour appeler directement depuis le CRM",
        "Rapports et tableaux de bord en temps réel",
      ],
    },
    {
      title: "Automatisation commerciale",
      content:
        "L'automatisation est la clé d'un CRM efficace. Odoo permet d'automatiser les tâches répétitives de votre processus de vente : assignation automatique des leads, emails de suivi programmés, création de devis et rappels de relance. Votre équipe commerciale se concentre sur la vente plutôt que sur l'administratif.",
      items: [
        "Assignation automatique des leads par territoire (Laval, Montréal, Rive-Nord)",
        "Séquences d'emails automatisées par étape du pipeline",
        "Création automatique de devis depuis les opportunités",
        "Alertes et rappels de relance configurable",
        "Workflow d'approbation pour les remises commerciales",
        "Intégration avec le module Marketing pour le nurturing",
      ],
    },
    {
      title: "Reporting et pilotage commercial",
      content:
        "Les tableaux de bord du CRM Odoo vous donnent une visibilité complète sur votre performance commerciale. Suivez votre pipeline en temps réel, analysez les taux de conversion par vendeur et par territoire, et prédisez votre chiffre d'affaires futur grâce aux rapports prévisionnels.",
    },
  ],
  benefits: [
    "Pipeline de ventes Kanban visuel et intuitif",
    "Automatisation complète du processus commercial",
    "Intégration VoIP native pour les appels depuis le CRM",
    "Scoring de leads intelligent pour prioriser les prospects",
    "Rapports prévisionnels pour anticiper le chiffre d'affaires",
    "Intégration native avec les ventes, la facturation et le marketing",
  ],
  process: [
    { step: 1, title: "Audit commercial", description: "Analyse de votre processus de vente actuel, cartographie du parcours client et identification des goulots d'étranglement." },
    { step: 2, title: "Configuration du pipeline", description: "Configuration des étapes du pipeline de ventes, des critères de scoring, des territoires commerciaux et des règles d'assignation." },
    { step: 3, title: "Automatisation", description: "Mise en place des séquences d'emails automatisés, des workflows d'approbation et des rappels de relance." },
    { step: 4, title: "Intégrations", description: "Configuration de la VoIP, de l'intégration email (Gmail/Outlook), du site web et des outils marketing." },
    { step: 5, title: "Formation commerciale", description: "Formation de votre équipe de vente à l'utilisation quotidienne du CRM : gestion des leads, pipeline, devis et reporting." },
  ],
  faq: [
    { question: "Le CRM Odoo est-il gratuit?", answer: "Le CRM est inclus dans tous les plans Odoo. L'édition Community (gratuite) inclut les fonctionnalités de base. L'édition Enterprise à 24.90$/utilisateur/mois ajoute les fonctionnalités avancées (VoIP, scoring, automatisation)." },
    { question: "Puis-je importer mes contacts depuis un autre CRM?", answer: "Oui, nous migrons vos contacts, opportunités et historique depuis Salesforce, HubSpot, Pipedrive, Zoho ou tout autre CRM. Les données sont nettoyées et dédupliquées pendant l'import." },
    { question: "Le CRM Odoo s'intègre-t-il avec mon email?", answer: "Oui, Odoo s'intègre nativement avec Gmail et Outlook. Les emails sont automatiquement associés aux contacts et opportunités correspondantes dans le CRM." },
    { question: "Puis-je utiliser le CRM Odoo sur mobile?", answer: "Oui, Odoo offre une application mobile native (iOS et Android) qui donne accès au CRM, aux contacts et au pipeline de ventes en déplacement." },
  ],
};

// --------------------------------------------------
// 4. E-commerce Odoo
// --------------------------------------------------
const ecommerce: ServicePageContent = {
  slug: "ecommerce",
  heroTitle: "E-commerce Odoo à Laval | Boutique en ligne intégrée à votre ERP",
  heroSubtitle:
    "Créez une boutique en ligne directement connectée à votre inventaire, comptabilité et logistique. Synchronisation temps réel, multi-devises et gestion complète pour les entreprises québécoises.",
  sections: [
    {
      title: "L'avantage unique de l'e-commerce Odoo",
      content:
        "Contrairement à Shopify ou WooCommerce qui nécessitent des intégrations tierces coûteuses avec votre ERP, le module e-commerce d'Odoo est nativement intégré à votre gestion d'entreprise. Chaque vente en ligne met automatiquement à jour votre inventaire, crée une facture dans votre comptabilité et déclenche le processus d'expédition. Zéro synchronisation manuelle, zéro erreur de stock.",
      items: [
        "Synchronisation inventaire en temps réel (plus de survente)",
        "Facturation automatique intégrée à la comptabilité Odoo",
        "Gestion multi-entrepôts avec disponibilité par localisation",
        "Gestion multi-devises (CAD, USD, EUR) avec taux automatiques",
        "Programme de fidélité et bons de réduction intégrés",
        "Portail client avec suivi de commandes et historique",
      ],
    },
    {
      title: "Fonctionnalités e-commerce avancées",
      content:
        "Le module e-commerce d'Odoo offre toutes les fonctionnalités attendues d'une boutique en ligne moderne, avec l'avantage d'être nativement connecté à vos processus d'entreprise.",
      items: [
        "Catalogue produits avec variantes (taille, couleur, etc.)",
        "Panier d'achat et checkout optimisé pour la conversion",
        "Paiement en ligne (Stripe, PayPal, Moneris)",
        "Calcul automatique TPS/TVQ et taxes provinciales",
        "Tarification par segment de clients (B2B, B2C, VIP)",
        "Intégration transporteurs (Postes Canada, UPS, FedEx, Purolator)",
      ],
    },
    {
      title: "B2B et vente en gros",
      content:
        "Odoo excelle dans l'e-commerce B2B, un domaine où Shopify montre ses limites. Tarifs par client, commandes sur devis, limites de crédit, listes de prix multiples et accès au portail revendeur sont autant de fonctionnalités natives qui facilitent la vente aux entreprises.",
    },
  ],
  benefits: [
    "Inventaire synchronisé en temps réel : zéro survente",
    "Comptabilité automatique : chaque vente génère une facture",
    "Multi-devises et multi-taxes natifs (TPS/TVQ, HST, GST)",
    "E-commerce B2B avec tarifs par client et portail revendeur",
    "Intégration transporteurs canadiens native",
    "Un seul système à gérer au lieu de deux (boutique + ERP)",
  ],
  process: [
    { step: 1, title: "Stratégie e-commerce", description: "Analyse de votre catalogue, de vos segments de clients (B2B/B2C) et de votre logistique. Définition de la stratégie de prix et de livraison." },
    { step: 2, title: "Configuration boutique", description: "Installation du module e-commerce, personnalisation du thème, configuration des méthodes de paiement et des transporteurs canadiens." },
    { step: 3, title: "Catalogue produits", description: "Import et structuration du catalogue produits avec variantes, images, descriptions SEO et catégories. Configuration des tarifs B2B et B2C." },
    { step: 4, title: "Tests et optimisation", description: "Tests de commande complète (paiement, stock, facture, expédition). Optimisation du tunnel de conversion et de la vitesse." },
    { step: 5, title: "Lancement et marketing", description: "Mise en production, configuration Google Shopping, intégration analytics e-commerce et formation de l'équipe aux opérations quotidiennes." },
  ],
  faq: [
    { question: "Odoo e-commerce vs Shopify : lequel choisir?", answer: "Choisissez Odoo si vous avez besoin d'une intégration ERP native (inventaire, comptabilité, fabrication). Choisissez Shopify si vous vendez uniquement en B2C et n'avez pas besoin d'un ERP complet. Pour le B2B, Odoo est généralement supérieur." },
    { question: "Puis-je vendre en B2B et B2C sur la même boutique?", answer: "Oui. Odoo permet de gérer des listes de prix distinctes par segment de clients, des accès portail différenciés et des conditions de paiement spécifiques (paiement immédiat pour B2C, net 30 pour B2B)." },
    { question: "Comment se passe la gestion des retours?", answer: "Odoo gère les retours de bout en bout : demande de retour client sur le portail, approbation par votre équipe, réception en entrepôt, avoir ou remboursement automatique et mise à jour du stock." },
    { question: "La boutique Odoo est-elle rapide?", answer: "La performance du site Odoo dépend de l'hébergement. Sur Odoo.sh avec un plan de production, les performances sont comparables aux autres plateformes e-commerce. Nous optimisons le thème et les images pour garantir des temps de chargement acceptables." },
  ],
};

// --------------------------------------------------
// 5. SEO Odoo
// --------------------------------------------------
const seo: ServicePageContent = {
  slug: "seo",
  heroTitle: "SEO Odoo : Optimisez votre site Odoo pour Google",
  heroSubtitle:
    "Maximisez la visibilité de votre site Odoo sur Google avec notre expertise SEO spécialisée. Optimisation technique, méta-données, performance et contenu pour les entreprises de Laval et Montréal.",
  sections: [
    {
      title: "Les défis SEO spécifiques à Odoo",
      content:
        "Odoo offre des fonctionnalités SEO de base, mais elles sont insuffisantes pour bien se positionner dans un marché compétitif comme Montréal et Laval. Le rendu JavaScript, les URLs par défaut, la gestion des méta-données et les performances Core Web Vitals nécessitent une expertise spécialisée pour être optimisés correctement.",
      items: [
        "URLs propres et hiérarchie de pages optimisée",
        "Balises title et meta descriptions uniques par page",
        "Données structurées (Schema.org) pour les rich snippets",
        "Optimisation des images (WebP, lazy loading, alt text)",
        "Sitemap XML dynamique et fichier robots.txt configuré",
        "Vitesse de chargement et Core Web Vitals optimisés",
      ],
    },
    {
      title: "SEO technique Odoo",
      content:
        "L'optimisation technique SEO d'un site Odoo requiert des interventions spécifiques au framework Odoo. Nous optimisons le rendu serveur, la compression des assets, le cache navigateur et la minification du code pour atteindre des scores de performance acceptables sur Google PageSpeed.",
      items: [
        "Optimisation du rendu côté serveur d'Odoo",
        "Compression Gzip/Brotli des assets CSS et JavaScript",
        "Configuration du cache navigateur et du CDN",
        "Minification et concaténation des fichiers CSS/JS",
        "Correction des erreurs de crawl (4xx, 5xx, redirections)",
        "Implémentation du balisage hreflang pour le multilingue",
      ],
    },
    {
      title: "SEO local pour les entreprises québécoises",
      content:
        "Si votre entreprise cible des clients à Laval, Montréal ou dans d'autres villes du Québec, le SEO local est essentiel. Nous optimisons votre site Odoo pour les recherches géolocalisées et intégrons votre fiche Google Business Profile pour maximiser votre visibilité locale.",
    },
  ],
  benefits: [
    "Visibilité accrue sur Google pour les recherches locales au Québec",
    "Score Google PageSpeed amélioré de 30 à 50 points",
    "Rich snippets avec données structurées Schema.org",
    "Trafic organique augmenté grâce au contenu optimisé",
    "Monitoring SEO continu avec rapports mensuels",
    "Expertise SEO spécialisée Odoo (rare sur le marché québécois)",
  ],
  process: [
    { step: 1, title: "Audit SEO Odoo", description: "Analyse complète du SEO technique, du contenu et de la performance de votre site Odoo. Identification des problèmes et opportunités d'amélioration." },
    { step: 2, title: "Optimisation technique", description: "Correction des erreurs techniques, optimisation des URLs, configuration du sitemap, du robots.txt et des données structurées." },
    { step: 3, title: "Optimisation du contenu", description: "Rédaction et optimisation des balises title, meta descriptions et contenus de page. Recherche de mots-clés adaptée au marché québécois." },
    { step: 4, title: "Performance", description: "Optimisation de la vitesse de chargement : compression des images, minification des assets, configuration du cache et du CDN." },
    { step: 5, title: "Suivi et reporting", description: "Configuration de Google Search Console et Analytics. Rapports SEO mensuels avec suivi des positions, du trafic et des conversions." },
  ],
  faq: [
    { question: "Le SEO d'Odoo est-il bon nativement?", answer: "Le SEO de base d'Odoo est acceptable mais insuffisant pour se positionner dans un marché compétitif. Les URLs, les méta-données et les performances nécessitent une optimisation professionnelle pour rivaliser avec les sites WordPress ou Next.js." },
    { question: "Combien de temps avant de voir des résultats SEO?", answer: "Les optimisations techniques ont un impact en 4 à 8 semaines. Le positionnement sur des mots-clés compétitifs prend 3 à 6 mois. Nous fournissons des rapports mensuels pour suivre la progression." },
    { question: "Pouvez-vous optimiser le SEO de ma boutique e-commerce Odoo?", answer: "Oui, le SEO e-commerce Odoo est l'une de nos spécialités. Nous optimisons les fiches produits, les catégories, les filtres et les données structurées Product pour les rich snippets Google Shopping." },
    { question: "Combien coûte le SEO Odoo?", answer: "L'audit SEO initial est à 750$. Les forfaits d'optimisation SEO mensuels commencent à 500$/mois pour le suivi et les optimisations continues. L'optimisation technique initiale est facturée entre 1 500$ et 3 000$ selon la taille du site." },
  ],
};

// --------------------------------------------------
// 6. Maintenance Odoo
// --------------------------------------------------
const maintenanceOdoo: ServicePageContent = {
  slug: "maintenance",
  heroTitle: "Maintenance Odoo à Laval | Mises à jour, monitoring et support",
  heroSubtitle:
    "Assurez la fiabilité et la sécurité de votre instance Odoo avec notre service de maintenance. Mises à jour, monitoring 24/7, sauvegardes et support technique pour les entreprises du Québec.",
  sections: [
    {
      title: "Pourquoi la maintenance Odoo est essentielle",
      content:
        "Odoo est un système critique pour votre entreprise — une panne ou une faille de sécurité peut paralyser vos opérations. Notre service de maintenance proactive assure la disponibilité, la sécurité et la performance de votre instance Odoo, que vous soyez hébergé sur Odoo.sh, sur votre propre serveur ou dans le cloud.",
      items: [
        "Mises à jour régulières du core Odoo et des modules tiers",
        "Monitoring 24/7 de la disponibilité et des performances",
        "Sauvegardes automatiques quotidiennes avec test de restauration",
        "Correctifs de sécurité appliqués sous 24 heures",
        "Optimisation des performances de la base de données",
        "Support technique prioritaire par téléphone, email et chat",
      ],
    },
    {
      title: "Mises à jour Odoo : un processus délicat",
      content:
        "Les mises à jour Odoo, qu'elles soient mineures (patches de sécurité) ou majeures (nouvelles versions), nécessitent une expertise technique. Chaque mise à jour est testée dans un environnement de staging, les modules personnalisés sont vérifiés pour la compatibilité, et la migration des données est validée avant l'application en production.",
      items: [
        "Tests dans un environnement de staging identique à la production",
        "Vérification de la compatibilité des modules tiers et personnalisés",
        "Migration de données testée et validée avant application",
        "Rollback automatique en cas de problème",
        "Fenêtre de maintenance planifiée en dehors des heures de bureau",
        "Rapport de mise à jour détaillé avec changelog",
      ],
    },
    {
      title: "Plans de maintenance",
      content:
        "Nous offrons trois niveaux de maintenance adaptés à la criticité de votre instance Odoo. Du plan Essentiel pour les petites entreprises au plan Entreprise pour les organisations avec des exigences de disponibilité élevées, chaque plan inclut les mises à jour, le monitoring et le support technique.",
    },
  ],
  benefits: [
    "Disponibilité maximale de votre instance Odoo (SLA 99.9%)",
    "Correctifs de sécurité appliqués sous 24 heures",
    "Sauvegardes testées avec restauration garantie",
    "Support technique prioritaire en français",
    "Mises à jour testées en staging avant déploiement",
    "Rapports mensuels de santé et de performance",
  ],
  process: [
    { step: 1, title: "Audit initial", description: "Analyse de votre instance Odoo actuelle : version, modules installés, personnalisations, hébergement et état de sécurité." },
    { step: 2, title: "Stabilisation", description: "Correction des problèmes identifiés, mise à jour vers la dernière version stable, configuration des sauvegardes et du monitoring." },
    { step: 3, title: "Monitoring", description: "Mise en place du monitoring 24/7 : disponibilité, performances, espace disque, santé de la base de données et alertes automatiques." },
    { step: 4, title: "Maintenance récurrente", description: "Cycle mensuel de mises à jour, vérification des sauvegardes, optimisation de la base de données et rapport de santé." },
    { step: 5, title: "Support continu", description: "Support technique par téléphone, email et chat avec temps de réponse garanti selon votre plan. Résolution de problèmes et assistance utilisateurs." },
  ],
  faq: [
    { question: "Combien coûte la maintenance Odoo?", answer: "Le plan Essentiel commence à 299$/mois (monitoring, sauvegardes, mises à jour mensuelles). Le plan Pro est à 599$/mois (+ support prioritaire et 5h d'interventions). Le plan Entreprise à 999$/mois offre un SLA garanti et un support illimité." },
    { question: "Maintenez-vous les instances Odoo Community?", answer: "Oui, nous maintenons les instances Odoo Community et Enterprise, hébergées sur Odoo.sh, sur votre propre serveur ou dans le cloud (AWS, GCP, Azure, DigitalOcean)." },
    { question: "Que se passe-t-il en cas de panne critique?", answer: "Les pannes critiques sont traitées en priorité. Le plan Pro garantit un temps de réponse de 4 heures, le plan Entreprise de 1 heure. Nous avons un processus de restauration éprouvé pour un retour à la normale rapide." },
    { question: "Pouvez-vous gérer les mises à jour majeures d'Odoo?", answer: "Oui, les mises à jour majeures (ex: Odoo 16 vers 17) font partie de nos services. Elles sont planifiées, testées en staging et déployées avec un plan de rollback. Le coût est devisé séparément selon la complexité." },
  ],
};

// --------------------------------------------------
// 7. Migration vers Odoo
// --------------------------------------------------
const migrationOdoo: ServicePageContent = {
  slug: "migration",
  heroTitle: "Migration vers Odoo depuis QuickBooks, Sage et SAP",
  heroSubtitle:
    "Migrez votre entreprise vers Odoo depuis QuickBooks, Sage, SAP ou tout autre ERP. Migration de données complète, formation des équipes et accompagnement post-migration pour les PME québécoises.",
  sections: [
    {
      title: "Pourquoi migrer vers Odoo?",
      content:
        "De nombreuses PME de Laval, Montréal et du Québec utilisent encore QuickBooks, Sage ou des systèmes vieillissants qui freinent leur croissance. Odoo offre une suite intégrée moderne qui remplace plusieurs logiciels disparates par une plateforme unique, réduisant les coûts de licence, les erreurs de double saisie et la complexité opérationnelle.",
      items: [
        "Remplacement de QuickBooks : comptabilité, facturation et rapports supérieurs",
        "Migration depuis Sage 50/300 : modernisation et intégration complète",
        "Transition SAP Business One : même profondeur fonctionnelle, coût réduit",
        "Consolidation d'outils disparates (Excel, logiciels séparés)",
        "Migration depuis des systèmes legacy non supportés",
        "Passage d'Odoo Community à Odoo Enterprise",
      ],
    },
    {
      title: "Notre méthodologie de migration",
      content:
        "Notre méthodologie de migration en 5 phases garantit un transfert complet et sécurisé de vos données et processus. Nous maintenons votre ancien système en parallèle pendant la période de transition pour éliminer tout risque de perte de données ou d'interruption d'activité.",
      items: [
        "Cartographie complète des données à migrer",
        "Nettoyage et déduplication des données avant l'import",
        "Migration itérative avec validation à chaque étape",
        "Fonctionnement en parallèle des deux systèmes pendant la transition",
        "Vérification comptable de la balance de départ dans Odoo",
        "Archivage sécurisé de l'ancien système après validation",
      ],
    },
    {
      title: "Données migrées",
      content:
        "Nous migrons l'ensemble de vos données critiques : plan comptable et soldes, historique client et fournisseur, catalogue produits avec prix et stocks, factures ouvertes et bons de commande en cours. Aucune donnée critique n'est laissée derrière.",
    },
  ],
  benefits: [
    "Migration complète de toutes vos données sans perte",
    "Fonctionnement en parallèle pour une transition sans risque",
    "Réduction des coûts de licence (Odoo vs SAP/Sage)",
    "Suite intégrée remplaçant plusieurs logiciels disparates",
    "Formation complète de vos équipes au nouveau système",
    "Support post-migration de 3 mois inclus",
  ],
  process: [
    { step: 1, title: "Audit de l'existant", description: "Cartographie complète de votre système actuel : données, processus, intégrations et rapports. Évaluation de la complexité de migration." },
    { step: 2, title: "Plan de migration", description: "Définition du plan de migration détaillé : mapping des données, calendrier, rôles et responsabilités, critères de validation." },
    { step: 3, title: "Migration pilote", description: "Migration d'un échantillon de données dans un environnement de test Odoo. Validation par votre équipe et ajustements du processus." },
    { step: 4, title: "Migration complète", description: "Migration de toutes les données en production. Vérification de l'intégrité, rapprochement comptable et fonctionnement en parallèle." },
    { step: 5, title: "Formation et stabilisation", description: "Formation intensive de vos équipes, support prioritaire pendant 3 mois et ajustements post-migration selon les retours." },
  ],
  faq: [
    { question: "Combien de temps prend une migration vers Odoo?", answer: "La migration depuis QuickBooks prend typiquement 1 à 2 mois. Depuis Sage, 2 à 3 mois. Depuis SAP, 3 à 6 mois. Ces délais incluent l'audit, la migration, les tests et la formation." },
    { question: "Vais-je perdre mon historique comptable?", answer: "Non. Nous migrons les soldes d'ouverture et, selon votre besoin, l'historique des transactions passées. Votre ancien système reste accessible en lecture seule pour les archives." },
    { question: "Combien coûte une migration vers Odoo?", answer: "La migration depuis QuickBooks commence à 5 000$. Depuis Sage, à partir de 8 000$. Depuis SAP, à partir de 15 000$. Le coût dépend du volume de données, du nombre de modules et de la complexité des processus." },
    { question: "Mon équipe devra-t-elle être formée?", answer: "Oui, et c'est inclus dans notre offre de migration. Nous formons chaque département (comptabilité, ventes, achats, inventaire) à l'utilisation quotidienne d'Odoo avec des exercices pratiques sur vos propres données." },
  ],
};

// --------------------------------------------------
// 8. Formation Odoo
// --------------------------------------------------
const formationOdoo: ServicePageContent = {
  slug: "formation",
  heroTitle: "Formation Odoo à Laval | Administrateur, utilisateur et développeur",
  heroSubtitle:
    "Formez vos équipes à Odoo avec nos programmes de formation adaptés. Sessions administrateur, utilisateur et développeur disponibles en présentiel à Laval, Montréal ou en ligne.",
  sections: [
    {
      title: "Nos programmes de formation Odoo",
      content:
        "Nous offrons trois programmes de formation Odoo adaptés au rôle de chaque participant. Que vous soyez administrateur système, utilisateur quotidien ou développeur de modules personnalisés, notre formation vous donne les compétences pratiques pour exploiter Odoo au maximum de son potentiel.",
      items: [
        "Formation Administrateur (2 jours) : configuration, utilisateurs, sécurité, sauvegardes",
        "Formation Utilisateur (1 jour par module) : ventes, achats, inventaire, comptabilité, CRM",
        "Formation Développeur (3 à 5 jours) : OWL, Python, XML, héritage, API",
        "Toutes les formations incluent des exercices pratiques sur votre propre instance",
        "Support post-formation de 30 jours par email inclus",
        "Certification LANNKIN Odoo pour chaque programme complété",
      ],
    },
    {
      title: "Formation Administrateur Odoo",
      content:
        "La formation administrateur de 2 jours est conçue pour les responsables IT et les gestionnaires qui doivent configurer et maintenir l'instance Odoo de leur entreprise. Vous apprendrez à gérer les utilisateurs, les droits d'accès, les workflows, les rapports personnalisés et les sauvegardes.",
      items: [
        "Gestion des utilisateurs et des droits d'accès par groupe",
        "Configuration des workflows et des règles d'automatisation",
        "Personnalisation des rapports et des tableaux de bord",
        "Gestion des modules : installation, mise à jour et désinstallation",
        "Sauvegardes, restauration et maintenance de base",
        "Intégration email, calendrier et outils externes",
      ],
    },
    {
      title: "Formation Développeur Odoo",
      content:
        "La formation développeur de 3 à 5 jours s'adresse aux développeurs qui souhaitent créer des modules Odoo personnalisés. Vous apprendrez l'architecture technique d'Odoo, le framework OWL (JavaScript), le développement Python côté serveur, la création de vues XML et l'utilisation de l'API Odoo.",
      items: [
        "Architecture MVC d'Odoo et structure des modules",
        "Développement Python : modèles, champs et méthodes",
        "Vues XML : formulaires, listes, kanban et graphiques",
        "Framework OWL pour le développement JavaScript front-end",
        "Héritage et extension des modules existants",
        "API REST et intégration avec des systèmes externes",
      ],
    },
  ],
  benefits: [
    "Formation pratique sur votre propre instance Odoo",
    "Trois programmes adaptés (administrateur, utilisateur, développeur)",
    "Disponible en présentiel à Laval/Montréal ou en ligne",
    "Support post-formation de 30 jours inclus",
    "Certification LANNKIN Odoo pour valoriser vos compétences",
    "Formateurs certifiés avec 5+ ans d'expérience Odoo",
  ],
  process: [
    { step: 1, title: "Évaluation des besoins", description: "Analyse du niveau de votre équipe, identification des modules prioritaires et personnalisation du programme de formation selon votre contexte." },
    { step: 2, title: "Préparation", description: "Configuration de l'environnement de formation sur votre instance Odoo, création des exercices pratiques avec vos données et préparation du matériel." },
    { step: 3, title: "Formation", description: "Sessions de formation avec alternance de théorie et de pratique. Exercices sur votre propre instance avec des cas d'utilisation réels de votre entreprise." },
    { step: 4, title: "Évaluation", description: "Évaluation des compétences acquises, identification des lacunes et recommandations de perfectionnement. Remise de la certification LANNKIN Odoo." },
    { step: 5, title: "Suivi post-formation", description: "30 jours de support par email pour répondre aux questions post-formation. Documentation et guides de référence personnalisés." },
  ],
  faq: [
    { question: "Combien coûte la formation Odoo?", answer: "La formation utilisateur est à 500$/jour/personne. La formation administrateur (2 jours) est à 1 800$/personne. La formation développeur (3-5 jours) est à 3 000-5 000$/personne. Des tarifs de groupe sont disponibles." },
    { question: "La formation se fait-elle sur notre instance Odoo?", answer: "Oui, toutes nos formations utilisent votre propre instance Odoo avec vos données (ou des données de démonstration réalistes). Cela garantit que les exercices sont directement applicables à votre contexte." },
    { question: "Proposez-vous des formations à distance?", answer: "Oui, nos formations sont disponibles en présentiel à Laval et Montréal, ou en ligne via Zoom. Le format en ligne inclut les mêmes exercices pratiques et le même accès au formateur." },
    { question: "Faut-il des prérequis pour la formation développeur?", answer: "La formation développeur requiert des connaissances de base en Python et en HTML/XML. Une expérience préalable avec un framework web (Django, Flask, etc.) est un atout mais n'est pas obligatoire." },
  ],
};

// --------------------------------------------------
// Export
// --------------------------------------------------

export const ODOO_PAGES: ServicePageContent[] = [
  creationSite,
  erpIntegration,
  crm,
  ecommerce,
  seo,
  maintenanceOdoo,
  migrationOdoo,
  formationOdoo,
];

export function getOdooPageBySlug(slug: string): ServicePageContent | undefined {
  return ODOO_PAGES.find((p) => p.slug === slug);
}
