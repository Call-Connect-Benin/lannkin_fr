// ============================================================
// Vibe Coding — Contenu détaillé pour les 12 sous-pages du hub
// ============================================================

import type { ServicePageContent } from "./conception-web";

// --------------------------------------------------
// 1. Lovable
// --------------------------------------------------
const lovable: ServicePageContent = {
  slug: "lovable",
  heroTitle: "Lovable : Créez votre site web avec l'IA à Paris",
  heroSubtitle:
    "Lovable transforme vos idées en sites web fonctionnels grâce à l'intelligence artificielle. Prototypage ultra-rapide, itérations instantanées et déploiement en quelques minutes pour les entreprises en France.",
  sections: [
    {
      title: "Qu'est-ce que Lovable?",
      content:
        "Lovable (anciennement GPT Engineer) est une plateforme de vibe coding qui permet de créer des applications web complètes à partir de descriptions en langage naturel. En quelques prompts, Lovable génère un site React fonctionnel avec design, navigation et logique métier. Chez EKOLINK à Paris, nous exploitons Lovable pour livrer des projets web en un temps record.",
      items: [
        "Génération de sites React complets à partir de prompts en français",
        "Design moderne avec TailwindCSS et Shadcn/ui intégré",
        "Intégration Supabase pour le backend (auth, base de données, storage)",
        "Déploiement en 1 clic avec domaine personnalisé",
        "Historique des versions et rollback instantané",
        "Exportation du code source vers GitHub",
      ],
    },
    {
      title: "Cas d'utilisation idéaux pour Lovable",
      content:
        "Lovable excelle dans la création rapide de MVPs, de landing pages et d'applications internes. C'est l'outil parfait pour valider une idée de startup, créer un outil interne pour votre équipe ou prototyper une fonctionnalité avant de la développer en production.",
      items: [
        "MVP et proof of concept pour startups françaises",
        "Landing pages marketing avec formulaires de capture",
        "Tableaux de bord et outils internes d'entreprise",
        "Portails clients avec authentification",
        "Sites événementiels avec inscription en ligne",
        "Prototypage rapide pour validation de concept",
      ],
    },
    {
      title: "Notre expertise Lovable chez EKOLINK",
      content:
        "Nous avons livré plus de 30 projets avec Lovable pour des entreprises à Paris, en Île-de-France et partout en France. Notre expertise en prompt engineering et en architecture logicielle nous permet d'obtenir des résultats professionnels là où d'autres obtiennent du code amateur. Nous savons quand Lovable est le bon outil et quand il faut passer à du développement traditionnel.",
    },
  ],
  benefits: [
    "Livraison 5x plus rapide qu'un développement traditionnel",
    "Coût réduit de 60 à 80% pour les MVPs et prototypes",
    "Code React/TypeScript propre et exportable vers GitHub",
    "Itérations instantanées basées sur vos retours en temps réel",
    "Backend Supabase inclus (authentification, base de données)",
    "Aucune connaissance technique requise de votre côté",
  ],
  process: [
    { step: 1, title: "Brief et architecture", description: "Définition de vos objectifs, des fonctionnalités prioritaires et de l'architecture de l'application. Préparation des prompts optimisés." },
    { step: 2, title: "Génération initiale", description: "Création de l'application avec Lovable à partir de prompts structurés. Génération du design, de la navigation et des composants principaux." },
    { step: 3, title: "Itérations et raffinement", description: "Ajustements du design, ajout de fonctionnalités et connexion au backend Supabase. Boucles de feedback rapides avec votre équipe." },
    { step: 4, title: "Qualité et tests", description: "Revue du code généré, optimisation des performances, tests fonctionnels et correction des edge cases." },
    { step: 5, title: "Déploiement et transfert", description: "Déploiement en production, transfert du code sur votre GitHub, documentation et formation à la maintenance." },
  ],
  faq: [
    { question: "Le code généré par Lovable est-il de qualité professionnelle?", answer: "Le code de base est correct mais nécessite une revue et des ajustements par un développeur expérimenté. Chez EKOLINK, nous auditons et optimisons systématiquement le code généré avant la mise en production." },
    { question: "Puis-je modifier le code après la livraison?", answer: "Oui, le code est 100% exportable vers GitHub. C'est du React/TypeScript standard que tout développeur peut maintenir et faire évoluer." },
    { question: "Lovable est-il adapté pour un site e-commerce?", answer: "Pour un e-commerce simple avec quelques produits, oui. Pour un catalogue important avec gestion d'inventaire, nous recommandons plutôt Shopify ou une solution dédiée." },
    { question: "Combien de temps faut-il pour un projet Lovable?", answer: "Un MVP fonctionnel peut être livré en 3 à 5 jours ouvrables. Les projets plus complexes avec backend et authentification prennent 1 à 2 semaines." },
  ],
};

// --------------------------------------------------
// 2. Bolt.new
// --------------------------------------------------
const boltNew: ServicePageContent = {
  slug: "bolt-new",
  heroTitle: "Bolt.new : Prototypage rapide IA par StackBlitz",
  heroSubtitle:
    "Bolt.new par StackBlitz révolutionne le prototypage web avec un IDE IA dans le navigateur. Créez, testez et déployez des applications complètes sans quitter votre navigateur.",
  sections: [
    {
      title: "Qu'est-ce que Bolt.new?",
      content:
        "Bolt.new est un outil de vibe coding créé par StackBlitz qui combine un environnement de développement complet dans le navigateur avec l'intelligence artificielle. Grâce à la technologie WebContainers, Bolt.new exécute Node.js directement dans Chrome, éliminant le besoin de configuration locale. C'est l'outil idéal pour le prototypage rapide et la validation d'idées.",
      items: [
        "IDE complet dans le navigateur avec terminal intégré",
        "Technologie WebContainers : Node.js natif dans Chrome",
        "Support de React, Vue, Svelte, Astro, Next.js et plus",
        "Prévisualisation en temps réel pendant le développement",
        "Déploiement Netlify intégré en 1 clic",
        "Collaboration temps réel via partage d'URL",
      ],
    },
    {
      title: "Bolt.new vs Lovable : quelle différence?",
      content:
        "Bolt.new offre plus de contrôle technique que Lovable, avec accès direct au terminal et aux fichiers de configuration. Il est idéal pour les développeurs qui veulent guider l'IA tout en gardant le contrôle sur le stack technique. Lovable est plus adapté aux non-développeurs qui veulent un résultat rapide sans toucher au code.",
    },
    {
      title: "Cas d'utilisation pour les entreprises françaises",
      content:
        "Les PME de Paris et Paris utilisent Bolt.new pour valider rapidement des concepts, créer des prototypes fonctionnels pour des présentations investisseurs, ou développer des outils internes sans mobiliser une équipe de développement complète.",
      items: [
        "Prototypes fonctionnels pour pitchs investisseurs",
        "Outils internes et dashboards personnalisés",
        "Maquettes interactives pour valider l'UX avec vos clients",
        "Extensions et micro-applications complémentaires",
        "Projets de hackathon et d'innovation",
      ],
    },
  ],
  benefits: [
    "Aucune configuration locale requise — tout fonctionne dans le navigateur",
    "Prototypage 10x plus rapide que le développement traditionnel",
    "Support multi-frameworks (React, Vue, Svelte, Astro)",
    "Terminal Node.js complet directement dans Chrome",
    "Déploiement Netlify instantané inclus",
    "Partage facile via URL pour la collaboration",
  ],
  process: [
    { step: 1, title: "Cadrage du prototype", description: "Définition du périmètre du prototype, des user stories prioritaires et du framework technique adapté (React, Vue, Next.js)." },
    { step: 2, title: "Développement IA assisté", description: "Génération du prototype avec Bolt.new, itérations rapides avec prompts optimisés et ajustements manuels du code quand nécessaire." },
    { step: 3, title: "Raffinement et polish", description: "Optimisation du design, ajout des interactions avancées et test sur mobile et tablette." },
    { step: 4, title: "Validation et feedback", description: "Partage du prototype via URL avec votre équipe et vos parties prenantes. Collecte des retours et itérations finales." },
    { step: 5, title: "Livraison", description: "Déploiement du prototype sur Netlify, export du code source et recommandations pour la suite du développement." },
  ],
  faq: [
    { question: "Bolt.new est-il gratuit?", answer: "Bolt.new offre un plan gratuit avec des crédits limités. Les plans payants commencent à 20 USD/mois pour un usage professionnel avec plus de tokens IA et de projets." },
    { question: "Le code généré par Bolt.new est-il production-ready?", answer: "Le code est fonctionnel mais constitue un prototype. Pour une mise en production, nous recommandons un audit de code, l'ajout de tests et l'optimisation des performances par notre équipe." },
    { question: "Puis-je récupérer le code source?", answer: "Oui, le code est entièrement exportable via GitHub ou téléchargement direct. Vous êtes propriétaire du code généré." },
    { question: "Bolt.new fonctionne-t-il en français?", answer: "L'interface est en anglais, mais l'IA comprend parfaitement le français. Vous pouvez rédiger vos prompts en français pour obtenir du contenu et du code adapté au marché français." },
  ],
};

// --------------------------------------------------
// 3. Cursor AI
// --------------------------------------------------
const cursorAi: ServicePageContent = {
  slug: "cursor-ai",
  heroTitle: "Cursor AI : IDE avec intelligence artificielle intégrée",
  heroSubtitle:
    "Cursor transforme VS Code en un IDE IA révolutionnaire. Pair programming avec l'IA, autocomplétion contextuelle et refactoring intelligent pour les projets complexes en France.",
  sections: [
    {
      title: "Qu'est-ce que Cursor AI?",
      content:
        "Cursor est un IDE basé sur VS Code qui intègre nativement l'intelligence artificielle dans chaque aspect du développement. Contrairement aux outils de vibe coding qui génèrent du code à partir de zéro, Cursor excelle dans le travail sur des bases de code existantes, le refactoring complexe et le pair programming IA. C'est l'outil privilégié de notre équipe EKOLINK pour les projets techniques avancés.",
      items: [
        "Fork de VS Code avec IA intégrée nativement",
        "Chat IA contextuel avec accès à tout votre codebase",
        "Autocomplétion prédictive multi-lignes (Copilot++)",
        "Commande Cmd+K pour éditer du code avec l'IA",
        "Support Claude 3.5 Sonnet, GPT-4o et modèles custom",
        "Mode Agent pour les tâches complexes multi-fichiers",
      ],
    },
    {
      title: "Cursor pour les projets d'entreprise",
      content:
        "Cursor est particulièrement puissant pour les projets d'entreprise existants. L'IA peut analyser des milliers de fichiers pour comprendre votre architecture, suggérer des améliorations et implémenter des fonctionnalités en respectant vos conventions de code. C'est un multiplicateur de productivité pour les équipes de développement à Paris et Paris.",
      items: [
        "Analyse de codebases existantes de toute taille",
        "Refactoring intelligent respectant les patterns existants",
        "Génération de tests unitaires et d'intégration",
        "Documentation automatique du code",
        "Détection de bugs et vulnérabilités de sécurité",
        "Migration de frameworks et mise à jour de dépendances",
      ],
    },
    {
      title: "Cursor vs GitHub Copilot",
      content:
        "Cursor va bien au-delà de l'autocomplétion de Copilot. Son chat contextuel comprend l'ensemble de votre projet, son mode Agent peut effectuer des modifications multi-fichiers automatiquement, et son système de règles (.cursorrules) permet d'adapter l'IA à vos conventions de code spécifiques.",
    },
  ],
  benefits: [
    "Productivité développeur multipliée par 2 à 3",
    "Compréhension contextuelle de l'ensemble du codebase",
    "Mode Agent pour les tâches complexes multi-fichiers",
    "Compatible avec toutes les extensions VS Code existantes",
    "Fichier .cursorrules pour adapter l'IA à vos conventions",
    "Support des meilleurs modèles IA (Claude, GPT-4, etc.)",
  ],
  process: [
    { step: 1, title: "Audit du projet", description: "Analyse de votre codebase existant, identification des opportunités d'optimisation et configuration de Cursor avec des règles adaptées à votre projet." },
    { step: 2, title: "Configuration .cursorrules", description: "Création de fichiers de règles personnalisés pour que l'IA respecte vos conventions de code, votre architecture et vos patterns techniques." },
    { step: 3, title: "Développement assisté IA", description: "Développement des fonctionnalités avec Cursor AI en mode pair programming. Utilisation du chat contextuel et du mode Agent pour les tâches complexes." },
    { step: 4, title: "Revue et qualité", description: "Revue systématique du code généré par l'IA, tests automatisés et optimisation des performances." },
    { step: 5, title: "Formation de votre équipe", description: "Formation de vos développeurs à l'utilisation optimale de Cursor AI : prompts efficaces, mode Agent, raccourcis et bonnes pratiques." },
  ],
  faq: [
    { question: "Cursor remplace-t-il les développeurs?", answer: "Non. Cursor est un outil qui amplifie les capacités des développeurs. Il accélère les tâches répétitives, aide à comprendre du code inconnu et suggère des solutions, mais le jugement humain reste essentiel pour l'architecture, les décisions de design et la qualité du produit final." },
    { question: "Cursor est-il sécuritaire pour le code propriétaire?", answer: "Cursor offre un mode Privacy qui ne stocke ni ne transmet votre code aux serveurs d'entraînement IA. Pour les entreprises avec des exigences strictes, des options de déploiement privé sont disponibles." },
    { question: "Combien coûte Cursor?", answer: "Cursor offre un plan gratuit limité. Le plan Pro est à 20 USD/mois et le plan Business à 40 USD/mois par développeur, avec des limites d'utilisation plus élevées et des fonctionnalités d'équipe." },
    { question: "Puis-je utiliser mes extensions VS Code avec Cursor?", answer: "Oui, Cursor est basé sur VS Code et supporte la quasi-totalité des extensions du marketplace VS Code. Vos thèmes, linters et outils de formatage fonctionnent sans modification." },
  ],
};

// --------------------------------------------------
// 4. Claude Code
// --------------------------------------------------
const claudeCode: ServicePageContent = {
  slug: "claude-code",
  heroTitle: "Claude Code : Agent codeur IA par Anthropic",
  heroSubtitle:
    "Claude Code est l'agent de développement terminal d'Anthropic. Exploitez la puissance de Claude pour coder, débugger et refactorer directement dans votre terminal. L'outil IA le plus avancé pour les développeurs en France.",
  sections: [
    {
      title: "Qu'est-ce que Claude Code?",
      content:
        "Claude Code est un outil de développement en ligne de commande créé par Anthropic qui permet à Claude d'interagir directement avec votre système de fichiers, votre terminal et vos outils de développement. Contrairement aux IDE IA, Claude Code fonctionne dans votre terminal existant et peut exécuter des commandes, lire et écrire des fichiers, et effectuer des tâches de développement complexes de manière autonome.",
      items: [
        "Agent IA autonome fonctionnant dans votre terminal",
        "Lecture et écriture de fichiers avec compréhension contextuelle",
        "Exécution de commandes shell (tests, build, linting)",
        "Recherche intelligente dans le codebase (grep, glob)",
        "Intégration Git native (commits, branches, PRs)",
        "Mode headless pour l'intégration CI/CD",
      ],
    },
    {
      title: "Claude Code pour les projets d'entreprise en France",
      content:
        "Chez EKOLINK, nous utilisons Claude Code quotidiennement pour nos projets Next.js, nos intégrations Odoo et nos développements sur mesure. Sa capacité à comprendre des codebases entiers et à effectuer des modifications multi-fichiers en fait un outil indispensable pour les projets d'envergure des entreprises de Paris et Paris.",
      items: [
        "Développement full-stack avec Next.js, React et Node.js",
        "Refactoring de legacy code et migration de frameworks",
        "Génération de tests unitaires et d'intégration automatisée",
        "Documentation technique et commentaires de code",
        "Résolution de bugs complexes avec analyse de stack traces",
        "Création de scripts d'automatisation et d'outils internes",
      ],
    },
    {
      title: "Sécurité et contrôle",
      content:
        "Claude Code applique un modèle de permissions strict. Chaque action sensible (écriture de fichier, exécution de commande) requiert une approbation explicite. Le code ne quitte jamais votre machine sauf pour les appels API à Anthropic, et un mode de confidentialité avancé est disponible pour les données sensibles.",
    },
  ],
  benefits: [
    "Agent autonome capable de tâches de développement complexes",
    "Fonctionne dans votre terminal existant sans IDE supplémentaire",
    "Compréhension contextuelle de codebases de toute taille",
    "Intégration Git native pour commits, branches et pull requests",
    "Mode headless pour l'automatisation CI/CD",
    "Propulsé par Claude, le modèle IA le plus avancé d'Anthropic",
  ],
  process: [
    { step: 1, title: "Évaluation du projet", description: "Analyse de votre codebase, identification des tâches les plus adaptées à Claude Code et planification de l'intégration dans votre workflow." },
    { step: 2, title: "Configuration et CLAUDE.md", description: "Setup de Claude Code dans votre environnement, création du fichier CLAUDE.md avec les conventions de votre projet et configuration des permissions." },
    { step: 3, title: "Développement assisté", description: "Utilisation de Claude Code pour le développement de fonctionnalités, la correction de bugs et le refactoring. Supervision humaine de chaque modification." },
    { step: 4, title: "Automatisation", description: "Configuration du mode headless pour les tâches récurrentes : génération de tests, lint fixes, revue de code automatisée dans votre pipeline CI/CD." },
    { step: 5, title: "Formation et transfert", description: "Formation de votre équipe aux meilleures pratiques Claude Code : rédaction de prompts efficaces, gestion des permissions et intégration workflow." },
  ],
  faq: [
    { question: "Claude Code est-il gratuit?", answer: "Claude Code nécessite un abonnement Claude Pro (20 USD/mois) ou Max (100 USD/mois) d'Anthropic pour un usage individuel, ou un accès via l'API Claude avec facturation à l'utilisation." },
    { question: "Claude Code peut-il modifier mon code sans permission?", answer: "Non. Claude Code utilise un système de permissions strict. Les opérations sensibles (écriture, exécution de commandes) requièrent votre approbation. Vous pouvez configurer des listes d'autorisation pour les commandes courantes." },
    { question: "Claude Code remplace-t-il Cursor?", answer: "Ils sont complémentaires. Cursor excelle dans l'édition visuelle de code avec autocomplétion, tandis que Claude Code est optimal pour les tâches terminales complexes, l'automatisation et les modifications multi-fichiers à grande échelle." },
    { question: "Mon code est-il envoyé sur les serveurs d'Anthropic?", answer: "Le contenu des fichiers lus par Claude Code est envoyé à l'API Anthropic pour traitement, mais n'est pas utilisé pour l'entraînement du modèle. Pour les projets très sensibles, des options de déploiement privé sont disponibles via Amazon Bedrock ou Google Vertex AI." },
  ],
};

// --------------------------------------------------
// 5. v0 by Vercel
// --------------------------------------------------
const v0Vercel: ServicePageContent = {
  slug: "v0-vercel",
  heroTitle: "v0 by Vercel : Générateur de composants UI React/Next.js",
  heroSubtitle:
    "v0 par Vercel génère des composants React et Next.js à partir de descriptions en langage naturel. Interfaces modernes, accessibles et prêtes pour la production avec Shadcn/ui et TailwindCSS.",
  sections: [
    {
      title: "Qu'est-ce que v0 by Vercel?",
      content:
        "v0 est un outil de génération d'interfaces créé par Vercel, la société derrière Next.js. Il transforme des descriptions textuelles ou des captures d'écran en composants React fonctionnels utilisant TailwindCSS et Shadcn/ui. C'est l'outil de référence pour la création rapide d'interfaces utilisateur modernes et accessibles.",
      items: [
        "Génération de composants React/Next.js à partir de prompts",
        "Support de TailwindCSS et Shadcn/ui nativement",
        "Conversion d'images et maquettes en code React",
        "Composants accessibles (WCAG 2.1) par défaut",
        "Export direct vers votre projet Next.js ou React",
        "Thèmes dark mode et responsive inclus automatiquement",
      ],
    },
    {
      title: "v0 dans le workflow EKOLINK",
      content:
        "Chez EKOLINK, nous utilisons v0 comme accélérateur dans notre processus de développement Next.js. Il nous permet de traduire les maquettes Figma en composants React en quelques minutes plutôt qu'en heures, ce qui réduit les coûts pour nos clients de Paris et Paris tout en maintenant une qualité irréprochable.",
      items: [
        "Traduction rapide de maquettes Figma en composants React",
        "Prototypage d'interfaces pour validation client",
        "Création de design systems cohérents",
        "Génération de pages complètes (landing, pricing, features)",
        "Composants de formulaires complexes avec validation",
        "Layouts dashboard et back-office",
      ],
    },
    {
      title: "Qualité du code v0",
      content:
        "Le code généré par v0 est parmi les meilleurs du marché en termes de qualité. Vercel, créateur de Next.js et Shadcn/ui, produit du code qui respecte nativement les meilleures pratiques de l'écosystème React. Les composants sont accessibles, responsives et optimisés pour les performances.",
    },
  ],
  benefits: [
    "Composants React de haute qualité générés en secondes",
    "TailwindCSS et Shadcn/ui : le standard de l'industrie",
    "Accessibilité WCAG 2.1 intégrée par défaut",
    "Dark mode et responsive inclus automatiquement",
    "Code propre et maintenable, prêt pour la production",
    "Intégration directe dans les projets Next.js existants",
  ],
  process: [
    { step: 1, title: "Design brief", description: "Analyse des maquettes Figma ou des descriptions de l'interface souhaitée. Identification des composants à générer et de leur hiérarchie." },
    { step: 2, title: "Génération v0", description: "Création des composants React avec v0 à partir de prompts détaillés ou de captures d'écran des maquettes." },
    { step: 3, title: "Raffinement", description: "Itérations sur les composants générés pour affiner le design, ajuster les interactions et assurer la cohérence avec votre design system." },
    { step: 4, title: "Intégration", description: "Export des composants dans votre projet Next.js, connexion aux données et ajout de la logique métier spécifique." },
    { step: 5, title: "Tests et polish", description: "Tests d'accessibilité, responsive, cross-browser et optimisation des performances des composants intégrés." },
  ],
  faq: [
    { question: "v0 est-il gratuit?", answer: "v0 offre un plan gratuit avec des générations limitées. Le plan Premium est à 20 USD/mois pour un usage professionnel intensif avec plus de générations et des fonctionnalités avancées." },
    { question: "Le code v0 fonctionne-t-il avec mon projet existant?", answer: "Oui, si votre projet utilise React avec TailwindCSS et Shadcn/ui. v0 génère des composants standards qui s'intègrent dans n'importe quel projet React ou Next.js moderne." },
    { question: "v0 peut-il reproduire une maquette Figma?", answer: "Oui, v0 peut analyser des captures d'écran de maquettes et générer des composants React correspondants. Le résultat nécessite généralement quelques ajustements mineurs pour atteindre le pixel-perfect." },
    { question: "Quelle est la différence entre v0 et Lovable?", answer: "v0 génère des composants UI individuels de haute qualité, tandis que Lovable crée des applications complètes avec backend. Nous utilisons souvent v0 pour les composants puis Lovable ou le développement traditionnel pour l'application globale." },
  ],
};

// --------------------------------------------------
// 6. Windsurf
// --------------------------------------------------
const windsurf: ServicePageContent = {
  slug: "windsurf",
  heroTitle: "Windsurf : IDE IA avec Cascade Flows",
  heroSubtitle:
    "Windsurf (ex-Codeium) est un IDE IA révolutionnaire avec sa technologie Cascade qui comprend le contexte complet de votre projet. Développement assisté de nouvelle génération pour les équipes en France.",
  sections: [
    {
      title: "Qu'est-ce que Windsurf?",
      content:
        "Windsurf, anciennement connu sous le nom de Codeium, est un IDE propulsé par l'IA qui se distingue par sa technologie Cascade. Cascade crée des flux de travail IA multi-étapes qui comprennent profondément le contexte de votre projet, exécutent des commandes terminal et effectuent des modifications multi-fichiers de manière autonome.",
      items: [
        "Technologie Cascade pour des workflows IA multi-étapes",
        "Compréhension contextuelle profonde de votre codebase",
        "Exécution autonome de commandes terminal",
        "Modifications multi-fichiers coordonnées",
        "Autocomplétion Supercomplete prédictive",
        "Support de plus de 70 langages de programmation",
      ],
    },
    {
      title: "Cascade : l'agent IA intégré",
      content:
        "Ce qui distingue Windsurf de Cursor et des autres IDE IA, c'est Cascade. Plutôt que de répondre à des prompts individuels, Cascade crée des flux de travail complets : il analyse le problème, planifie les modifications, les implémente sur plusieurs fichiers et vérifie le résultat. C'est le pair programmer IA le plus avancé du marché.",
    },
    {
      title: "Windsurf pour les entreprises de Paris et Paris",
      content:
        "EKOLINK recommande Windsurf aux équipes de développement françaises qui cherchent un IDE IA complet avec une courbe d'apprentissage douce. Son interface familière (basée sur VS Code) et ses capacités Cascade en font un choix excellent pour les équipes qui veulent adopter le vibe coding graduellement.",
      items: [
        "Adoption progressive du vibe coding pour les équipes existantes",
        "Projets full-stack Next.js, React, Node.js, Python",
        "Refactoring et modernisation de code legacy",
        "Développement collaboratif avec IA",
      ],
    },
  ],
  benefits: [
    "Cascade : workflows IA multi-étapes autonomes",
    "Interface VS Code familière pour une adoption rapide",
    "Autocomplétion Supercomplete ultra-précise",
    "Support de plus de 70 langages de programmation",
    "Mode gratuit généreux pour commencer",
    "Modifications multi-fichiers coordonnées et intelligentes",
  ],
  process: [
    { step: 1, title: "Évaluation", description: "Analyse de votre stack technique et de vos workflows actuels pour déterminer comment Windsurf peut maximiser la productivité de votre équipe." },
    { step: 2, title: "Setup et configuration", description: "Installation de Windsurf, migration de vos extensions VS Code et configuration des paramètres IA pour votre projet." },
    { step: 3, title: "Développement avec Cascade", description: "Utilisation de Cascade flows pour le développement de fonctionnalités, le refactoring et la correction de bugs de manière autonome." },
    { step: 4, title: "Revue et qualité", description: "Revue systématique des modifications Cascade, validation de la qualité du code et des tests automatisés." },
    { step: 5, title: "Formation équipe", description: "Formation de votre équipe à l'utilisation optimale de Windsurf : prompts Cascade efficaces, bonnes pratiques et pièges à éviter." },
  ],
  faq: [
    { question: "Windsurf est-il meilleur que Cursor?", answer: "Les deux sont excellents. Windsurf se distingue par Cascade (workflows autonomes multi-étapes), tandis que Cursor excelle dans le chat contextuel et l'autocomplétion. Le meilleur choix dépend de votre style de travail." },
    { question: "Windsurf est-il gratuit?", answer: "Windsurf offre un plan gratuit avec autocomplétion illimitée et un nombre limité de flux Cascade. Le plan Pro est à 15 USD/mois pour un usage professionnel." },
    { question: "Mes extensions VS Code fonctionnent-elles?", answer: "Oui, Windsurf est compatible avec la majorité des extensions VS Code. Vos thèmes, linters, formatters et outils de débogage fonctionnent sans modification." },
    { question: "Cascade est-il sécuritaire pour le code propriétaire?", answer: "Windsurf offre des options de confidentialité pour protéger votre code. Les plans entreprise incluent des garanties supplémentaires de non-utilisation des données pour l'entraînement." },
  ],
};

// --------------------------------------------------
// 7. Replit
// --------------------------------------------------
const replit: ServicePageContent = {
  slug: "replit",
  heroTitle: "Replit : IDE cloud IA avec déploiement instantané",
  heroSubtitle:
    "Replit combine un IDE cloud complet, une IA de génération de code et un déploiement en 1 clic. Développez, collaborez et lancez vos applications sans quitter votre navigateur.",
  sections: [
    {
      title: "Qu'est-ce que Replit?",
      content:
        "Replit est une plateforme de développement cloud tout-en-un qui intègre un IDE, un environnement d'exécution, une base de données, un hébergement et une IA de génération de code. Avec Replit Agent, vous pouvez créer des applications complètes à partir de descriptions en langage naturel, le tout dans votre navigateur.",
      items: [
        "IDE cloud complet avec terminal et base de données intégrés",
        "Replit Agent : IA capable de créer des apps de A à Z",
        "Replit AI Chat pour le pair programming en temps réel",
        "Déploiement en 1 clic avec domaine personnalisé",
        "Collaboration temps réel (style Google Docs pour le code)",
        "Support de 50+ langages (Python, Node.js, Go, Rust, etc.)",
      ],
    },
    {
      title: "Replit Agent pour le vibe coding",
      content:
        "Replit Agent est l'un des outils de vibe coding les plus complets du marché. Il peut créer une application entière — front-end, back-end, base de données et déploiement — à partir d'une simple description. C'est l'outil idéal pour les entrepreneurs français qui veulent valider leur idée rapidement.",
    },
    {
      title: "Collaboration et formation",
      content:
        "Replit excelle dans les contextes collaboratifs et éducatifs. Plusieurs développeurs peuvent travailler simultanément sur le même projet, ce qui en fait un outil idéal pour les ateliers de vibe coding, les formations en entreprise et les projets d'équipe.",
      items: [
        "Édition collaborative en temps réel",
        "Multiplayer : plusieurs curseurs visibles simultanément",
        "Parfait pour les ateliers et formations vibe coding",
        "Environnements de développement reproductibles",
        "Idéal pour les hackathons et projets d'innovation",
      ],
    },
  ],
  benefits: [
    "Plateforme tout-en-un : IDE, hébergement, base de données et IA",
    "Collaboration temps réel pour les équipes",
    "Replit Agent pour la création d'apps complètes par IA",
    "Déploiement instantané sans configuration DevOps",
    "50+ langages supportés dans un seul environnement",
    "Idéal pour la formation et les ateliers vibe coding",
  ],
  process: [
    { step: 1, title: "Définition du projet", description: "Cadrage des objectifs, des fonctionnalités et du stack technique. Choix entre Replit Agent (création IA) ou développement assisté classique." },
    { step: 2, title: "Création avec Replit Agent", description: "Description du projet en langage naturel. Replit Agent crée la structure, le front-end, le back-end et la base de données automatiquement." },
    { step: 3, title: "Itérations collaboratives", description: "Utilisation de la collaboration temps réel pour affiner le projet ensemble. Ajout de fonctionnalités et ajustements du design." },
    { step: 4, title: "Tests et optimisation", description: "Tests fonctionnels, optimisation des performances et configuration de la base de données pour la production." },
    { step: 5, title: "Déploiement et transfert", description: "Déploiement en production sur Replit Hosting ou export vers votre infrastructure. Documentation et formation." },
  ],
  faq: [
    { question: "Replit peut-il héberger un site en production?", answer: "Oui, Replit Deployments offre un hébergement fiable pour les applications en production. Pour les projets à fort trafic, nous recommandons cependant de migrer vers Vercel, AWS ou un hébergement dédié." },
    { question: "Replit Agent crée-t-il du code de qualité?", answer: "Le code est fonctionnel et adapté aux MVPs et prototypes. Pour une mise en production, un audit et une optimisation par notre équipe sont recommandés." },
    { question: "Combien coûte Replit?", answer: "Replit offre un plan gratuit limité. Le plan Hacker est à 7 USD/mois et le plan Pro à 20 USD/mois avec des ressources et fonctionnalités IA supplémentaires." },
    { question: "Puis-je exporter mon code hors de Replit?", answer: "Oui, le code est exportable via Git. Vous pouvez connecter votre Repl à un dépôt GitHub et récupérer votre code à tout moment." },
  ],
};

// --------------------------------------------------
// 8. Accompagnement Vibe Coding
// --------------------------------------------------
const accompagnement: ServicePageContent = {
  slug: "accompagnement",
  heroTitle: "Accompagnement vibe coding à Paris et Paris",
  heroSubtitle:
    "Bénéficiez d'un expert vibe coding à vos côtés. Coaching personnalisé, workshops d'équipe et stratégie d'adoption des outils IA de développement pour votre entreprise en France.",
  sections: [
    {
      title: "Pourquoi un accompagnement vibe coding?",
      content:
        "Le vibe coding révolutionne le développement web, mais naviguer parmi les dizaines d'outils IA disponibles peut être déstabilisant. Notre service d'accompagnement vous aide à choisir les bons outils, à former vos équipes et à intégrer le vibe coding dans vos processus existants de manière productive et sécuritaire.",
      items: [
        "Audit de vos workflows de développement actuels",
        "Recommandation d'outils IA adaptés à votre contexte",
        "Coaching 1-on-1 pour développeurs et non-développeurs",
        "Workshops d'équipe en présentiel à Paris et Paris",
        "Stratégie d'adoption progressive du vibe coding",
        "Support continu par Slack, visioconférence ou en personne",
      ],
    },
    {
      title: "Nos formats d'accompagnement",
      content:
        "Nous adaptons notre accompagnement à la taille et à la maturité technique de votre équipe. Du coaching individuel pour un entrepreneur solo aux workshops d'équipe pour les départements IT, nous avons un format pour chaque besoin.",
      items: [
        "Coaching individuel : sessions de 1 à 2 heures par semaine",
        "Workshops d'équipe : demi-journée ou journée complète en présentiel",
        "Programme d'adoption : accompagnement sur 3 à 6 mois",
        "Consulting ponctuel : audit et recommandations (1 à 3 jours)",
        "Support à distance : disponible par Slack et visioconférence",
      ],
    },
    {
      title: "Résultats mesurables",
      content:
        "Nos clients constatent en moyenne une augmentation de 40% de la productivité de leurs développeurs et une réduction de 60% du temps de prototypage après 3 mois d'accompagnement vibe coding. Les non-développeurs deviennent capables de créer des MVPs fonctionnels en autonomie.",
    },
  ],
  benefits: [
    "Expert vibe coding dédié à votre entreprise",
    "Productivité développeurs augmentée de 40% en moyenne",
    "Temps de prototypage réduit de 60%",
    "Équipes non-techniques capables de créer des MVPs",
    "Adoption sécuritaire avec bonnes pratiques de code review",
    "Disponible en présentiel à Paris et en Île-de-France",
  ],
  process: [
    { step: 1, title: "Diagnostic initial", description: "Évaluation de votre maturité vibe coding, de vos outils actuels et de vos objectifs. Identification des quick wins et du plan d'adoption." },
    { step: 2, title: "Plan d'accompagnement", description: "Définition du programme sur mesure : outils à adopter, calendrier de formation, métriques de succès et budget." },
    { step: 3, title: "Formation et coaching", description: "Sessions de formation pratiques avec exercices sur vos propres projets. Coaching individuel pour les membres clés de l'équipe." },
    { step: 4, title: "Suivi et itérations", description: "Suivi hebdomadaire de l'adoption, résolution des blocages, ajustement du programme selon les retours de l'équipe." },
    { step: 5, title: "Autonomie", description: "Transfert complet des connaissances, documentation des bonnes pratiques internes et plan de veille technologique pour rester à jour." },
  ],
  faq: [
    { question: "Faut-il être développeur pour bénéficier de l'accompagnement?", answer: "Non. Nous accompagnons aussi bien les développeurs seniors que les entrepreneurs, designers et gestionnaires sans background technique. Le programme est adapté à votre niveau." },
    { question: "L'accompagnement se fait-il en présentiel?", answer: "Nous offrons les deux formats. Les workshops d'équipe sont particulièrement efficaces en présentiel à Paris et Paris, tandis que le coaching individuel fonctionne très bien en visioconférence." },
    { question: "Combien de temps dure un accompagnement typique?", answer: "Un programme d'adoption complet dure 3 à 6 mois, mais vous pouvez aussi opter pour un consulting ponctuel de 1 à 3 jours ou un coaching hebdomadaire continu." },
    { question: "Quel est le coût de l'accompagnement?", answer: "Le coaching individuel démarre à 150$/heure. Les workshops d'équipe sont à 2 000$/jour. Les programmes d'adoption sur 3 mois commencent à 5 000€/mois selon la taille de l'équipe." },
  ],
};

// --------------------------------------------------
// 9. Maintenance Vibe Coding
// --------------------------------------------------
const maintenance: ServicePageContent = {
  slug: "maintenance",
  heroTitle: "Maintenance de projets vibe coding à Paris",
  heroSubtitle:
    "Assurez la pérennité de vos projets créés avec les outils de vibe coding. Mises à jour, optimisations, corrections de bugs et évolution continue par des experts en France.",
  sections: [
    {
      title: "Pourquoi la maintenance est critique pour le vibe coding?",
      content:
        "Les projets créés avec des outils de vibe coding (Lovable, Bolt.new, Replit) nécessitent une attention particulière en maintenance. Le code généré par IA peut contenir des dépendances non optimales, des patterns de sécurité à renforcer ou des configurations à ajuster. Notre service de maintenance assure la qualité et la pérennité de vos projets.",
      items: [
        "Mises à jour des dépendances et frameworks (React, Next.js, etc.)",
        "Corrections de bugs et edge cases non détectés à la génération",
        "Optimisation des performances et des Core Web Vitals",
        "Renforcement de la sécurité du code généré par IA",
        "Refactoring progressif pour améliorer la maintenabilité",
        "Monitoring et alertes en temps réel",
      ],
    },
    {
      title: "Plans de maintenance adaptés",
      content:
        "Nous offrons des plans de maintenance mensuels flexibles, adaptés à la taille et à la criticité de votre projet. De la surveillance de base au support complet avec développement continu, chaque plan est conçu pour protéger votre investissement vibe coding.",
      items: [
        "Plan Essentiel : monitoring, mises à jour mensuelles et support email",
        "Plan Pro : tout Essentiel + corrections de bugs prioritaires et 5h de développement/mois",
        "Plan Premium : tout Pro + développement continu illimité et SLA garanti",
      ],
    },
    {
      title: "Notre processus de maintenance",
      content:
        "Chaque mois, nous effectuons un audit technique de votre application, mettons à jour les dépendances, testons les fonctionnalités critiques et vous fournissons un rapport détaillé. Les urgences sont traitées en moins de 4 heures (Plan Pro et Premium).",
    },
  ],
  benefits: [
    "Protection de votre investissement vibe coding",
    "Mises à jour régulières des dépendances et frameworks",
    "Temps de réponse garanti pour les urgences (SLA)",
    "Rapports mensuels de santé technique",
    "Évolution continue de votre application",
    "Expertise spécifique au code généré par IA",
  ],
  process: [
    { step: 1, title: "Audit initial", description: "Analyse complète du code généré par IA : qualité, sécurité, dépendances, performance. Identification des risques et recommandations prioritaires." },
    { step: 2, title: "Stabilisation", description: "Corrections des problèmes critiques identifiés lors de l'audit. Mise à jour des dépendances obsolètes et renforcement de la sécurité." },
    { step: 3, title: "Monitoring", description: "Configuration du monitoring en temps réel (uptime, erreurs, performances). Alertes automatiques pour les incidents critiques." },
    { step: 4, title: "Maintenance récurrente", description: "Cycle mensuel de mises à jour, tests, optimisations et rapport de santé technique. Traitement des demandes de support." },
    { step: 5, title: "Évolution continue", description: "Ajout de nouvelles fonctionnalités, refactoring progressif et adaptation aux nouvelles versions des outils de vibe coding." },
  ],
  faq: [
    { question: "Pourquoi le code IA nécessite-t-il plus de maintenance?", answer: "Le code généré par IA peut utiliser des versions de dépendances spécifiques, manquer de tests ou suivre des patterns non optimaux. Une maintenance proactive prévient les problèmes de sécurité et de performance avant qu'ils n'impactent vos utilisateurs." },
    { question: "Combien coûte la maintenance mensuelle?", answer: "Le plan Essentiel commence à 149€/mois, le plan Pro à 499€/mois et le plan Premium à 999€/mois. Les prix varient selon la taille et la complexité de l'application." },
    { question: "Pouvez-vous maintenir un projet que vous n'avez pas créé?", answer: "Absolument. Nous reprenons régulièrement des projets créés par d'autres équipes ou directement par nos clients avec des outils de vibe coding. L'audit initial nous permet de comprendre le projet avant de commencer la maintenance." },
    { question: "Que se passe-t-il en cas d'urgence?", answer: "Les plans Pro et Premium incluent un SLA avec temps de réponse garanti. Les urgences critiques sont traitées en moins de 4 heures les jours ouvrables." },
  ],
};

// --------------------------------------------------
// 10. Formation Vibe Coding
// --------------------------------------------------
const formation: ServicePageContent = {
  slug: "formation",
  heroTitle: "Formation vibe coding 1 journée à Paris et Paris",
  heroSubtitle:
    "Apprenez à créer des applications web avec l'IA en une seule journée. Formation hands-on avec Lovable, Cursor, Claude Code et v0. Certification EKOLINK incluse.",
  sections: [
    {
      title: "Programme de la formation vibe coding",
      content:
        "Notre formation intensive d'une journée vous donne les compétences pratiques pour créer des applications web fonctionnelles en utilisant les outils de vibe coding les plus performants du marché. Vous repartez avec un projet concret déployé en ligne et une certification EKOLINK.",
      items: [
        "Matin (9h-12h) : Introduction au vibe coding, Lovable et Bolt.new",
        "Midi (12h-13h) : Pause repas et networking avec les participants",
        "Après-midi (13h-15h) : Cursor AI, Claude Code et v0 by Vercel",
        "Fin de journée (15h-17h) : Projet pratique complet et déploiement",
        "Certification EKOLINK Vibe Coding remise en fin de journée",
      ],
    },
    {
      title: "Pour qui est cette formation?",
      content:
        "La formation est conçue pour les entrepreneurs, designers, gestionnaires de projet et développeurs qui veulent intégrer le vibe coding dans leur arsenal. Aucun prérequis technique n'est nécessaire — nous adaptons les exercices à votre niveau.",
      items: [
        "Entrepreneurs et fondateurs de startups en France",
        "Designers UX/UI qui veulent prototyper rapidement",
        "Gestionnaires de projet et product managers",
        "Développeurs juniors et seniors qui veulent booster leur productivité",
        "Étudiants en informatique et en design",
      ],
    },
    {
      title: "Ce que vous repartez avec",
      content:
        "À la fin de la formation, vous aurez créé et déployé votre propre application web. Vous maîtriserez les fondamentaux du prompt engineering pour le code et vous saurez choisir le bon outil selon votre contexte. La certification EKOLINK valorise ces compétences auprès de vos clients et employeurs.",
    },
  ],
  benefits: [
    "Formation pratique hands-on d'une journée complète",
    "5 outils de vibe coding maîtrisés en 8 heures",
    "Projet concret déployé en ligne en fin de journée",
    "Certification EKOLINK Vibe Coding incluse",
    "Support post-formation de 30 jours par email",
    "Disponible en présentiel à Paris/Paris ou en ligne",
  ],
  process: [
    { step: 1, title: "Inscription", description: "Inscription en ligne avec choix de la date et du format (présentiel à Paris ou en ligne). Pré-évaluation de votre niveau pour adapter le contenu." },
    { step: 2, title: "Préparation", description: "Réception du matériel préparatoire : création des comptes sur les plateformes de vibe coding et installation des outils nécessaires." },
    { step: 3, title: "Formation intensive", description: "Journée complète de formation hands-on avec alternance de démonstrations, d'exercices pratiques et de sessions de questions-réponses." },
    { step: 4, title: "Projet final", description: "Création d'un projet complet en 2 heures utilisant les outils appris. Déploiement en production et présentation au groupe." },
    { step: 5, title: "Certification et suivi", description: "Remise de la certification EKOLINK, accès au groupe privé des alumni et 30 jours de support post-formation par email." },
  ],
  faq: [
    { question: "Faut-il savoir coder pour suivre cette formation?", answer: "Non. La formation est conçue pour les débutants complets comme pour les développeurs expérimentés. Les exercices sont adaptés à votre niveau et les outils de vibe coding permettent de créer des applications sans écrire de code manuellement." },
    { question: "Combien coûte la formation?", answer: "La formation individuelle est à 497$ + taxes par personne. Des tarifs de groupe sont disponibles à partir de 5 participants (350$/personne). La formation en entreprise sur mesure est à 2 000$/jour." },
    { question: "La formation est-elle disponible en ligne?", answer: "Oui, nous offrons la formation en présentiel à Paris/Paris et en ligne via Zoom. Les deux formats incluent les mêmes contenus, exercices pratiques et certification." },
    { question: "Quels outils faut-il installer avant la formation?", answer: "Vous recevrez un guide de préparation 1 semaine avant la formation. Il inclut la création de comptes gratuits sur Lovable, Bolt.new, Cursor, Claude et v0. Un ordinateur portable avec Chrome est suffisant." },
  ],
};

// --------------------------------------------------
// 11. Audit Code IA
// --------------------------------------------------
const auditCodeIa: ServicePageContent = {
  slug: "audit-code-ia",
  heroTitle: "Audit de code généré par IA à Paris et Paris",
  heroSubtitle:
    "Votre application a été créée avec l'IA? Notre audit évalue la qualité, la sécurité et la performance du code généré. Recevez un rapport détaillé avec des recommandations concrètes.",
  sections: [
    {
      title: "Pourquoi auditer le code généré par IA?",
      content:
        "Le code généré par les outils de vibe coding (Lovable, Bolt.new, Cursor, Replit) est fonctionnel mais pas toujours optimal. Des problèmes de sécurité, de performance ou de maintenabilité peuvent se cacher sous une interface qui semble parfaite. Notre audit révèle ces problèmes avant qu'ils ne deviennent critiques.",
      items: [
        "Vulnérabilités de sécurité (injection SQL, XSS, CSRF)",
        "Fuites de données et gestion incorrecte des secrets",
        "Dépendances obsolètes ou vulnérables",
        "Problèmes de performance (requêtes N+1, re-renders inutiles)",
        "Code dupliqué et absence de patterns d'architecture",
        "Absence de tests et de gestion d'erreurs",
      ],
    },
    {
      title: "Notre méthodologie d'audit",
      content:
        "Notre audit combine des outils d'analyse statique automatisés et une revue manuelle approfondie par nos développeurs seniors. Nous évaluons votre code selon 6 dimensions : sécurité, performance, maintenabilité, accessibilité, SEO et conformité.",
      items: [
        "Analyse statique avec ESLint, SonarQube et Snyk",
        "Revue de code manuelle par un développeur senior (10+ ans d'expérience)",
        "Tests de sécurité automatisés (OWASP Top 10)",
        "Audit de performance avec Lighthouse et WebPageTest",
        "Vérification de l'accessibilité (WCAG 2.1 AA)",
        "Rapport détaillé avec score par dimension et plan d'action",
      ],
    },
    {
      title: "Livrables de l'audit",
      content:
        "Vous recevez un rapport PDF complet de 20 à 40 pages avec un score global, des scores par dimension, les problèmes identifiés classés par sévérité et un plan d'action détaillé avec estimation du temps de correction. Une présentation de restitution de 1 heure est incluse.",
    },
  ],
  benefits: [
    "Identification des vulnérabilités de sécurité critiques",
    "Score de qualité sur 6 dimensions mesurables",
    "Plan d'action priorisé avec estimation des efforts",
    "Rapport PDF détaillé de 20 à 40 pages",
    "Présentation de restitution de 1 heure incluse",
    "Recommandations concrètes adaptées à votre contexte",
  ],
  process: [
    { step: 1, title: "Cadrage de l'audit", description: "Définition du périmètre de l'audit, accès au code source (GitHub, GitLab ou transfert sécurisé) et planification du calendrier." },
    { step: 2, title: "Analyse automatisée", description: "Exécution des outils d'analyse statique (ESLint, SonarQube, Snyk, Lighthouse) pour identifier les problèmes détectables automatiquement." },
    { step: 3, title: "Revue manuelle", description: "Revue approfondie du code par un développeur senior : architecture, patterns, gestion d'erreurs, sécurité et performance." },
    { step: 4, title: "Rapport et recommandations", description: "Rédaction du rapport d'audit avec scores, problèmes classés par sévérité et plan d'action priorisé avec estimation des efforts." },
    { step: 5, title: "Restitution et suivi", description: "Présentation du rapport en visioconférence ou en personne. Questions-réponses et planification des corrections si souhaité." },
  ],
  faq: [
    { question: "Combien coûte un audit de code IA?", answer: "L'audit standard (1 application, code front-end et back-end) est à 1 500$. L'audit approfondi avec tests de pénétration est à 3 000$. Des audits express (48h) sont disponibles à 2 500$." },
    { question: "Combien de temps dure un audit?", answer: "Un audit standard prend 5 à 7 jours ouvrables entre l'accès au code et la remise du rapport. L'audit express est livré en 48 heures." },
    { question: "Auditez-vous le code de n'importe quel outil de vibe coding?", answer: "Oui. Nous auditons le code généré par Lovable, Bolt.new, Cursor, Claude Code, Replit, Windsurf, v0 et tout autre outil de génération de code par IA." },
    { question: "Pouvez-vous aussi corriger les problèmes identifiés?", answer: "Absolument. Nous pouvons prendre en charge les corrections après l'audit. Le plan d'action du rapport inclut des estimations de temps pour chaque correction, ce qui vous permet de budgéter précisément." },
  ],
};

// --------------------------------------------------
// 12. Migration Vibe Coding
// --------------------------------------------------
const migrationVibeCoding: ServicePageContent = {
  slug: "migration",
  heroTitle: "Migration de projets vibe coding entre outils",
  heroSubtitle:
    "Migrez vos projets entre outils de vibe coding sans perdre de fonctionnalités. De Lovable vers Next.js, de Bolt.new vers Cursor, ou de Replit vers votre propre infrastructure.",
  sections: [
    {
      title: "Pourquoi migrer un projet vibe coding?",
      content:
        "Les projets créés avec des outils de vibe coding atteignent souvent un plafond technique. Quand votre MVP devient un produit, quand votre prototype devient une application critique, il est temps de migrer vers une infrastructure plus robuste et maintenable. EKOLINK accompagne les entreprises françaises dans cette transition cruciale.",
      items: [
        "Limites de l'outil actuel (performance, scalabilité, fonctionnalités)",
        "Besoin de contrôle total sur l'infrastructure et le code",
        "Coûts d'hébergement devenus trop élevés sur la plateforme",
        "Exigences de sécurité ou de conformité non satisfaites",
        "Nécessité d'intégrations complexes impossibles sur la plateforme",
        "Volonté d'internaliser le développement dans votre équipe",
      ],
    },
    {
      title: "Scénarios de migration courants",
      content:
        "Chaque migration est unique, mais nous rencontrons régulièrement certains scénarios chez nos clients de Paris et Paris. Notre expérience nous permet d'anticiper les défis et de garantir une migration sans interruption de service.",
      items: [
        "Lovable vers Next.js auto-hébergé sur Vercel",
        "Bolt.new vers un dépôt GitHub avec CI/CD complet",
        "Replit vers AWS, GCP ou infrastructure dédiée",
        "Consolidation de plusieurs projets vibe coding en un seul",
        "Migration de Supabase vers PostgreSQL auto-géré",
        "Transition d'un prototype IA vers du code production refactoré",
      ],
    },
    {
      title: "Notre approche de migration",
      content:
        "Nous appliquons une méthodologie de migration progressive qui minimise les risques. Plutôt que de tout réécrire d'un coup, nous migrons composant par composant, en validant chaque étape avec des tests automatisés et en maintenant le site existant en parallèle jusqu'à la bascule finale.",
    },
  ],
  benefits: [
    "Migration sans interruption de service (zero downtime)",
    "Préservation complète des fonctionnalités existantes",
    "Refactoring et amélioration du code pendant la migration",
    "Tests automatisés pour valider chaque étape",
    "Documentation technique complète du nouveau projet",
    "Formation de votre équipe au nouveau stack technique",
  ],
  process: [
    { step: 1, title: "Audit du projet source", description: "Analyse complète du projet existant : architecture, dépendances, base de données, intégrations et fonctionnalités à préserver." },
    { step: 2, title: "Architecture cible", description: "Définition de l'architecture du projet migré : stack technique, infrastructure d'hébergement, CI/CD et stratégie de déploiement." },
    { step: 3, title: "Migration progressive", description: "Migration composant par composant avec validation à chaque étape. Base de données, authentification, front-end et back-end migrés séparément." },
    { step: 4, title: "Tests et validation", description: "Tests end-to-end complets comparant le comportement du projet source et du projet migré. Validation de la performance et de la sécurité." },
    { step: 5, title: "Bascule et support", description: "Bascule DNS vers le nouveau projet, monitoring intensif pendant 2 semaines et support post-migration de 30 jours inclus." },
  ],
  faq: [
    { question: "Combien de temps prend une migration?", answer: "Une migration standard prend 2 à 4 semaines selon la complexité du projet. Les projets simples (landing pages, MVPs) peuvent être migrés en 1 semaine, tandis que les applications complexes avec base de données peuvent prendre 6 à 8 semaines." },
    { question: "Vais-je perdre des fonctionnalités pendant la migration?", answer: "Non. Notre méthodologie garantit la préservation de toutes les fonctionnalités existantes. Nous maintenons le projet source en parallèle jusqu'à la validation complète du projet migré." },
    { question: "Combien coûte une migration?", answer: "Les migrations de MVPs simples commencent à 2 500$. Les applications avec base de données et authentification coûtent 5 000 à 15 000$ selon la complexité." },
    { question: "Faut-il tout réécrire depuis zéro?", answer: "Rarement. Nous réutilisons le maximum de code existant et ne réécrivons que ce qui est nécessaire pour la qualité et la maintenabilité. Notre approche progressive minimise le travail et les risques." },
  ],
};

// --------------------------------------------------
// Export
// --------------------------------------------------

export const VIBE_CODING_PAGES: ServicePageContent[] = [
  lovable,
  boltNew,
  cursorAi,
  claudeCode,
  v0Vercel,
  windsurf,
  replit,
  accompagnement,
  maintenance,
  formation,
  auditCodeIa,
  migrationVibeCoding,
];

export function getVibeCodingPageBySlug(slug: string): ServicePageContent | undefined {
  return VIBE_CODING_PAGES.find((p) => p.slug === slug);
}
