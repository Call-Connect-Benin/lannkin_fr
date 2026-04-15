// ============================================================
// FAQ — 35 questions fréquentes
// ============================================================

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export type FaqCategory =
  | "general"
  | "web"
  | "paid-media"
  | "seo"
  | "graphisme"
  | "pricing"
  | "vibe-coding"
  | "odoo";

export const FAQ: FaqItem[] = [
  // --- GÉNÉRAL ---
  {
    id: "faq-1",
    question: "Qui est Ekolink ?",
    answer:
      "Ekolink S.A.S. est une agence de marketing digital 360° basée à Paris, France. Fondée en 2015 par Albert Lanne et Kevin Kinani, nous accompagnons les PME et startups dans leur croissance digitale avec une approche osée et innovante.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "Quelles régions servez-vous ?",
    answer:
      "Nous servons principalement le Grand Paris (Paris, Paris, Île-de-France, Hauts-de-Seine), mais aussi France, Lille, Strasbourg, Nice et l'ensemble du France. Nous travaillons également avec des clients en Ontario et à l'international.",
    category: "general",
  },
  {
    id: "faq-3",
    question: "Quelles sont vos certifications ?",
    answer:
      "Nous sommes Google Partner, Microsoft Advertising Partner et Facebook/Meta Partner. Ces certifications garantissent notre expertise sur les principales plateformes publicitaires.",
    category: "general",
  },
  {
    id: "faq-4",
    question: "Combien de temps prend un projet typique ?",
    answer:
      "Un site vitrine prend 2 à 4 semaines, un site e-commerce 4 à 8 semaines, et une campagne publicitaire peut être lancée en 3 à 5 jours ouvrables. Les projets complexes (SaaS, ERP Odoo) prennent 2 à 4 mois.",
    category: "general",
  },
  {
    id: "faq-5",
    question: "Offrez-vous un devis gratuit ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous via notre formulaire en ligne ou par téléphone pour recevoir une proposition détaillée sous 24 à 48 heures.",
    category: "general",
  },

  // --- CONCEPTION WEB ---
  {
    id: "faq-6",
    question: "Quelle technologie utilisez-vous pour les sites web ?",
    answer:
      "Nous maîtrisons WordPress, Shopify, Next.js, Odoo et les CMS headless (Sanity, Strapi). Le choix de technologie dépend de vos besoins : WordPress pour les blogs, Shopify pour l'e-commerce, Next.js pour la performance.",
    category: "web",
  },
  {
    id: "faq-7",
    question: "Mon site sera-t-il mobile-friendly ?",
    answer:
      "Absolument. Tous nos sites sont responsive par défaut et testés sur mobile, tablette et desktop. Nous optimisons aussi les Core Web Vitals pour un chargement rapide sur mobile.",
    category: "web",
  },
  {
    id: "faq-8",
    question: "Offrez-vous l'hébergement web ?",
    answer:
      "Oui, tous nos forfaits mensuels incluent l'hébergement sécurisé avec SSL, sauvegardes automatiques et monitoring 24/7. Nous utilisons des serveurs françaiss pour les meilleures performances locales.",
    category: "web",
  },
  {
    id: "faq-9",
    question: "Puis-je modifier mon site moi-même ?",
    answer:
      "Oui, nous configurons un CMS intuitif (WordPress, Shopify ou Odoo) avec une formation incluse pour que vous puissiez mettre à jour votre contenu facilement, sans connaissances techniques.",
    category: "web",
  },
  {
    id: "faq-10",
    question: "Faites-vous des refontes de sites existants ?",
    answer:
      "Oui, la refonte est un de nos services phares. Nous analysons votre site existant, préservons votre SEO (redirections 301), et modernisons le design et les performances. Migration de données incluse.",
    category: "web",
  },

  // --- PAID MEDIA ---
  {
    id: "faq-11",
    question: "Quel budget publicitaire minimum recommandez-vous ?",
    answer:
      "Pour Google Ads, nous recommandons un minimum de 1 000 €/mois de budget média. Pour Facebook Ads, 500 €/mois suffisent pour commencer. Le budget optimal dépend de votre marché et de vos objectifs.",
    category: "paid-media",
  },
  {
    id: "faq-12",
    question: "Combien de temps pour voir des résultats avec Google Ads ?",
    answer:
      "Les premiers résultats arrivent dès la première semaine. L'optimisation complète prend 2 à 3 mois. Nous utilisons des scripts anti-fraude propriétaires pour maximiser votre ROI dès le départ.",
    category: "paid-media",
  },
  {
    id: "faq-13",
    question: "Gérez-vous le budget publicitaire directement ?",
    answer:
      "Non, le budget publicitaire est payé directement à Google, Facebook ou la plateforme. Nos frais de gestion sont séparés. Vous gardez un contrôle total sur vos dépenses média.",
    category: "paid-media",
  },
  {
    id: "faq-14",
    question: "Quelle est la différence entre Google Ads et Facebook Ads ?",
    answer:
      "Google Ads capture la demande existante (les gens qui cherchent votre service). Facebook Ads crée la demande (ciblage par intérêts et comportements). Idéalement, on combine les deux pour un maximum de résultats.",
    category: "paid-media",
  },
  {
    id: "faq-15",
    question: "Faites-vous de la publicité sur TikTok, LinkedIn et Snapchat ?",
    answer:
      "Oui, nous gérons des campagnes sur TikTok Ads, LinkedIn Ads, Snapchat Ads, Pinterest Ads, Native Ads (Taboola, Outbrain, Traffic Factory), Bing Ads, Amazon Ads et Waze Ads.",
    category: "paid-media",
  },
  {
    id: "faq-16",
    question: "Qu'est-ce que le remarketing ?",
    answer:
      "Le remarketing (ou retargeting) consiste à recibler les visiteurs de votre site avec des publicités personnalisées. C'est une des stratégies les plus rentables : ces visiteurs convertissent 2 à 5x plus que le trafic froid.",
    category: "paid-media",
  },

  // --- SEO ---
  {
    id: "faq-17",
    question: "Combien de temps pour se positionner en première page Google ?",
    answer:
      "En SEO local (Paris, Paris), des résultats sont visibles en 3 à 6 mois. Pour des mots-clés compétitifs nationaux, comptez 6 à 12 mois. Le SEO est un investissement à long terme avec un ROI exponentiel.",
    category: "seo",
  },
  {
    id: "faq-18",
    question: "Garantissez-vous la première position Google ?",
    answer:
      "Non, personne ne peut honnêtement garantir la première position. Ce que nous garantissons, c'est une méthodologie éprouvée, un reporting transparent et une amélioration constante de votre visibilité.",
    category: "seo",
  },
  {
    id: "faq-19",
    question: "Quelle est la différence entre SEO et Google Ads ?",
    answer:
      "Le SEO (référencement naturel) offre du trafic gratuit à long terme. Google Ads offre des résultats immédiats mais payants. La meilleure stratégie combine les deux : Ads pour le court terme, SEO pour le long terme.",
    category: "seo",
  },
  {
    id: "faq-20",
    question: "Faites-vous du SEO local ?",
    answer:
      "Oui, le SEO local est une de nos spécialités. Optimisation Google Business Profile, citations locales, backlinks locaux, et contenu géolocalisé pour dominer le pack local de Google.",
    category: "seo",
  },
  {
    id: "faq-21",
    question: "Comment gérer les avis Google négatifs ?",
    answer:
      "Nous offrons une stratégie complète : réponse professionnelle aux avis négatifs, sollicitation proactive d'avis positifs via QR codes, et monitoring en temps réel de votre réputation en ligne.",
    category: "seo",
  },

  // --- GRAPHISME ---
  {
    id: "faq-22",
    question: "Combien de propositions de logo recevrai-je ?",
    answer:
      "Le forfait Logo Essentiel inclut 3 propositions avec 2 révisions. Le forfait Logo Premium inclut 5 propositions avec révisions illimitées, plus une animation de logo.",
    category: "graphisme",
  },
  {
    id: "faq-23",
    question: "Quels formats de fichiers livrez-vous ?",
    answer:
      "Nous livrons tous les formats nécessaires : AI, SVG, EPS, PNG, JPG, PDF. Pour les logos animés, nous fournissons GIF et MP4. Tous les fichiers sont en haute résolution pour le print et le web.",
    category: "graphisme",
  },

  // --- TARIFS ---
  {
    id: "faq-24",
    question: "Quels sont vos modes de paiement ?",
    answer:
      "Nous acceptons les paiements par carte de crédit (Visa, Mastercard, Amex) via Stripe, les virements bancaires et les chèques. Les forfaits mensuels sont prélevés automatiquement.",
    category: "pricing",
  },
  {
    id: "faq-25",
    question: "Y a-t-il un engagement minimum ?",
    answer:
      "Pour les forfaits mensuels web et SEO, l'engagement minimum est de 3 mois. Pour les campagnes publicitaires, nous recommandons un minimum de 3 mois pour obtenir des résultats optimaux, mais il n'y a pas d'engagement strict.",
    category: "pricing",
  },
  {
    id: "faq-26",
    question: "Offrez-vous des rabais pour plusieurs services ?",
    answer:
      "Oui, nous offrons des forfaits combinés avec des rabais allant jusqu'à 20 %. Contactez-nous pour un devis personnalisé multi-services adapté à votre budget et vos objectifs.",
    category: "pricing",
  },
  {
    id: "faq-27",
    question: "Les taxes sont-elles incluses dans vos prix ?",
    answer:
      "Non, les prix affichés sont avant taxes. La TPS (5 %) et la TVQ (9,975 %) s'appliquent conformément aux lois fiscales du France. Votre facture détaillera les taxes applicables.",
    category: "pricing",
  },
  {
    id: "faq-28",
    question: "Puis-je annuler mon forfait à tout moment ?",
    answer:
      "Après la période d'engagement minimum, vous pouvez annuler avec un préavis de 30 jours. Nous vous aiderons à assurer une transition en douceur et à préserver vos acquis.",
    category: "pricing",
  },

  // --- VIBE CODING ---
  {
    id: "faq-29",
    question: "Qu'est-ce que le vibe coding ?",
    answer:
      "Le vibe coding est une nouvelle approche de développement qui utilise l'IA (Lovable, Bolt, Cursor, Claude Code, v0, Windsurf, Replit) pour créer des applications web et mobiles plus rapidement et à moindre coût, tout en gardant un code de qualité professionnelle.",
    category: "vibe-coding",
  },
  {
    id: "faq-30",
    question: "Le code généré par IA est-il fiable ?",
    answer:
      "Oui, à condition d'être supervisé par des experts. Nos développeurs seniors révisent et optimisent chaque ligne de code générée par l'IA. Nous effectuons des audits de qualité, des tests automatisés et des revues de sécurité.",
    category: "vibe-coding",
  },
  {
    id: "faq-31",
    question: "Quel outil de vibe coding est le meilleur ?",
    answer:
      "Chaque outil a ses forces : Lovable pour les landing pages, Bolt pour le prototypage rapide, Cursor pour le code complexe, Claude Code pour les agents IA, v0 pour les composants UI. Nous vous recommandons le meilleur outil selon votre projet.",
    category: "vibe-coding",
  },

  // --- ODOO ---
  {
    id: "faq-32",
    question: "Pourquoi choisir Odoo plutôt qu'un autre ERP ?",
    answer:
      "Odoo est un ERP open-source modulaire avec 80+ modules intégrés (CRM, ventes, inventaire, comptabilité, site web). Son coût est plus bas que SAP ou Salesforce, et il est hautement personnalisable.",
    category: "odoo",
  },
  {
    id: "faq-33",
    question: "Combien coûte une implantation Odoo complète ?",
    answer:
      "Une implantation Odoo varie de 199 €/mois pour un site web simple à 599 €/mois+ pour un ERP e-commerce complet. Le coût dépend du nombre de modules, des utilisateurs et des personnalisations nécessaires.",
    category: "odoo",
  },
  {
    id: "faq-34",
    question: "Pouvez-vous migrer mon ERP actuel vers Odoo ?",
    answer:
      "Oui, nous gérons la migration complète de vos données depuis QuickBooks, Sage, SAP ou tout autre ERP. Nous assurons la continuité des opérations avec un plan de migration structuré et des tests rigoureux.",
    category: "odoo",
  },
  {
    id: "faq-35",
    question: "Offrez-vous de la formation Odoo ?",
    answer:
      "Oui, chaque implantation Odoo inclut des sessions de formation pour votre équipe. Nous offrons aussi des formations Odoo dédiées (administrateur, utilisateur, développeur) avec support post-formation inclus.",
    category: "odoo",
  },
];

// ============================================================
// Helpers
// ============================================================

export function getFaqByCategory(category: FaqCategory): FaqItem[] {
  return FAQ.filter((f) => f.category === category);
}

export function getFaqById(id: string): FaqItem | undefined {
  return FAQ.find((f) => f.id === id);
}

export function getAllFaqCategories(): FaqCategory[] {
  return [...new Set(FAQ.map((f) => f.category))];
}

export const FAQ_CATEGORY_LABELS: Record<FaqCategory, string> = {
  general: "Général",
  web: "Conception Web",
  "paid-media": "Publicité en ligne",
  seo: "SEO & Référencement",
  graphisme: "Graphisme",
  pricing: "Tarifs & Paiement",
  "vibe-coding": "Vibe Coding & IA",
  odoo: "Odoo",
};
