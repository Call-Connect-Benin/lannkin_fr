// ============================================================
// LEGACY LANDING PAGES
// Pages historiques de lannkin.com (WordPress) recréées ici pour
// préserver les URLs, le référencement et le trafic publicitaire
// existant. Voir l'audit de redirections du 2026-07-24.
// ============================================================

export interface LegacyLandingPage {
  slug: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImage: string;
  icon: string;
  sections: {
    title: string;
    body: string[];
  }[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  cta: {
    label: string;
    href: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

export const LEGACY_LANDING_PAGES: LegacyLandingPage[] = [
  {
    slug: "miss-presentation-google-ads",
    badge: "Google Merchant Center",
    metaTitle: "Débloquer un compte Google Merchant Center suspendu | Lannkin",
    metaDescription:
      "Votre compte Google Merchant Center est suspendu ou désactivé ? Nos experts Google diagnostiquent et débloquent votre compte pour relancer vos ventes en ligne.",
    h1: "Votre compte Google Merchant Center est suspendu ou désactivé ?",
    intro:
      "Une suspension GMC coupe immédiatement vos annonces Shopping et votre flux de ventes en ligne. Plus vous attendez, plus la perte de chiffre d'affaires s'accumule. Nos experts Google Ads diagnostiquent la cause exacte et remettent votre compte en conformité pour rouvrir vos campagnes le plus vite possible.",
    heroImage: "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
    icon: "ShieldAlert",
    sections: [
      {
        title: "Pourquoi Google suspend un compte Merchant Center",
        body: [
          "Google applique ses politiques marchand de façon automatisée et souvent sans préavis clair : informations de contact manquantes, non-respect des politiques sur les produits, problèmes de certification de site, ou signalement pour représentation trompeuse. Le message d'erreur affiché dans le compte est rarement suffisant pour comprendre la cause réelle.",
          "Sans intervention structurée, une suspension peut s'éterniser sur plusieurs semaines : chaque nouvelle demande de réexamen mal préparée repousse l'échéance et peut même durcir la position de Google.",
        ],
      },
      {
        title: "Notre méthode de déblocage",
        body: [
          "Nous auditons l'intégralité du compte (fiche établissement, flux produits, pages politiques, certification de domaine) pour identifier précisément le ou les points de non-conformité.",
          "Nous corrigeons les éléments fautifs, préparons un dossier de réexamen argumenté et suivons la demande jusqu'à la réouverture effective du compte — avec un plan pour éviter une nouvelle suspension.",
        ],
      },
    ],
    benefits: [
      { icon: "Search", title: "Audit gratuit du compte", description: "Diagnostic complet sous 24h pour identifier la cause exacte de la suspension." },
      { icon: "FileCheck", title: "Dossier de réexamen structuré", description: "Un dossier argumenté plutôt qu'une demande générique renvoyée telle quelle." },
      { icon: "Clock", title: "Suivi jusqu'à réouverture", description: "Nous accompagnons chaque échange avec Google jusqu'à la levée de la suspension." },
    ],
    faq: [
      { q: "Combien de temps prend un déblocage de compte GMC ?", a: "Cela dépend de la cause de la suspension : certains cas se résolvent en quelques jours, d'autres nécessitent 2 à 3 semaines si plusieurs politiques sont concernées. Nous vous donnons une estimation précise après l'audit." },
      { q: "Pouvez-vous garantir le déblocage ?", a: "Aucune agence ne peut garantir une décision de Google à 100 %, mais un dossier bien préparé multiplie fortement les chances de succès par rapport à une demande de réexamen non structurée." },
      { q: "Que se passe-t-il pendant la suspension ?", a: "Vos annonces Shopping et Performance Max liées au flux sont interrompues. Nous pouvons vous conseiller sur des leviers alternatifs (Search, Social) pour limiter la perte de trafic pendant la procédure." },
      { q: "Combien coûte l'audit initial ?", a: "L'audit de diagnostic est gratuit et sans engagement. Le tarif de la mission de déblocage est communiqué une fois la cause identifiée." },
    ],
    cta: { label: "Demander mon audit gratuit", href: "/devis-gratuit/", secondaryLabel: "Voir nos services Google Ads", secondaryHref: "/services/google-ads/" },
  },
  {
    slug: "kap-numerik",
    badge: "Aide au numérique",
    metaTitle: "Kap Numérik : jusqu'à 3 200 € d'aide pour votre projet | Lannkin",
    metaDescription:
      "Profitez du dispositif Kap Numérik pour financer votre projet digital jusqu'à 3 200 €. Lannkin vous accompagne dans la demande et la réalisation du projet.",
    h1: "Kap Numérik : jusqu'à 3 200 € d'aide pour votre projet digital",
    intro:
      "Kap Numérik est un dispositif d'aide destiné aux TPE et PME qui veulent accélérer leur transformation digitale — site web, référencement, publicité en ligne — sans financer seuls l'intégralité du projet. Lannkin vous aide à vérifier votre éligibilité et à monter un dossier solide.",
    heroImage: "/images/rendu3D/rendu3d-diamant-cubes-flottants.webp",
    icon: "Gift",
    sections: [
      {
        title: "Ce que couvre l'aide",
        body: [
          "Le dispositif finance une partie des dépenses liées à la digitalisation : création ou refonte de site web, mise en place de campagnes publicitaires, référencement naturel, ou outils de gestion de la relation client.",
          "Le montant accordé dépend du projet présenté et du budget engagé ; jusqu'à 3 200 € peuvent être pris en charge selon les critères du dispositif en vigueur.",
        ],
      },
      {
        title: "Comment Lannkin vous accompagne",
        body: [
          "Nous vérifions d'abord votre éligibilité et cadrons le projet digital le plus pertinent pour votre activité (site, SEO, Google Ads, ou une combinaison des trois).",
          "Nous préparons ensuite le dossier de demande avec les justificatifs nécessaires et réalisons le projet une fois l'aide validée, avec un reporting transparent sur son utilisation.",
        ],
      },
    ],
    benefits: [
      { icon: "BadgeCheck", title: "Vérification d'éligibilité gratuite", description: "On regarde votre situation avant tout engagement de votre part." },
      { icon: "FileText", title: "Montage du dossier inclus", description: "On prépare les pièces et la présentation du projet pour maximiser vos chances." },
      { icon: "Rocket", title: "Réalisation clé en main", description: "Une fois l'aide validée, on prend en charge l'exécution du projet digital." },
    ],
    faq: [
      { q: "Qui peut prétendre à Kap Numérik ?", a: "Le dispositif cible en priorité les TPE et PME souhaitant engager un projet de digitalisation. L'éligibilité précise dépend de critères qui évoluent ; nous vérifions votre situation avant toute démarche." },
      { q: "L'aide est-elle garantie ?", a: "Non, l'attribution dépend de l'organisme instructeur du dispositif. Nous maximisons vos chances en construisant un dossier complet et cohérent avec votre projet réel." },
      { q: "Quel est le délai de traitement ?", a: "Comptez généralement plusieurs semaines entre le dépôt du dossier et la décision, selon la charge de l'organisme instructeur." },
      { q: "Est-ce que je peux cumuler l'aide avec un forfait Lannkin classique ?", a: "Oui, l'aide vient réduire le reste à charge sur un projet que nous réalisons de toute façon selon nos forfaits habituels (site web, SEO, Google Ads)." },
    ],
    cta: { label: "Vérifier mon éligibilité", href: "/devis-gratuit/" },
  },
  {
    slug: "campagne-display-swirl-3d",
    badge: "Format publicitaire immersif",
    metaTitle: "Publicité Google Ads Swirl 3D | Agence spécialisée | Lannkin",
    metaDescription:
      "Découvrez la publicité Google Ads Swirl 3D : un format display immersif qui capte l'attention. Lannkin conçoit vos campagnes swirl 3D de A à Z.",
    h1: "Agence spécialisée en publicité display Swirl 3D",
    intro:
      "Pour se démarquer dans un flux publicitaire saturé, la modélisation 3D appliquée au display Google Ads crée des annonces interactives et immersives qui retiennent l'attention bien plus longtemps qu'un visuel statique classique.",
    heroImage: "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
    icon: "Box",
    sections: [
      {
        title: "Qu'est-ce qu'une publicité Swirl 3D ?",
        body: [
          "Le format Swirl s'appuie sur une modélisation 3D du produit ou de la marque, animée pour donner une impression de profondeur et de mouvement dans l'espace publicitaire — bien au-delà d'un simple GIF ou d'une bannière classique.",
          "L'effet de nouveauté visuelle génère mécaniquement un meilleur taux d'engagement sur les réseaux display de Google, particulièrement utile pour des lancements produit ou des campagnes de notoriété.",
        ],
      },
      {
        title: "Notre méthode de création",
        body: [
          "Nous partons d'un rendu 3D de votre produit ou de votre identité visuelle, que nous animons pour créer l'effet de rotation et de profondeur caractéristique du format swirl.",
          "Chaque création est ensuite déclinée aux formats requis par Google Ads Display et testée sur un échantillon d'audience avant diffusion à pleine échelle.",
        ],
      },
    ],
    benefits: [
      { icon: "Eye", title: "Taux d'attention supérieur", description: "Un format qui sort du lot face aux bannières display classiques." },
      { icon: "Box", title: "Rendu 3D sur-mesure", description: "Modélisation adaptée à votre produit ou votre marque, pas un template générique." },
      { icon: "TrendingUp", title: "Pensé pour la performance", description: "Déclinaisons testées avant diffusion à grande échelle." },
    ],
    faq: [
      { q: "Le format Swirl 3D convient-il à tous les secteurs ?", a: "Il est particulièrement efficace pour les produits physiques et les marques qui veulent marquer les esprits, mais peut être adapté à la plupart des secteurs avec la bonne direction artistique." },
      { q: "Faut-il déjà avoir des visuels 3D de mon produit ?", a: "Non, nous pouvons créer le rendu 3D à partir de photos ou de fiches produit existantes." },
      { q: "Quel budget prévoir pour une campagne Swirl 3D ?", a: "Le budget dépend de la complexité du rendu et du volume de diffusion souhaité ; nous établissons un devis après un premier échange sur votre projet." },
      { q: "Combien de temps pour lancer une campagne ?", a: "Comptez en moyenne 1 à 2 semaines pour la création des visuels 3D, puis la mise en place de la campagne Google Ads Display." },
    ],
    cta: { label: "Discuter de mon projet", href: "/contact/", secondaryLabel: "Voir nos sites 3D immersifs", secondaryHref: "/services/sites-immersifs-3d/" },
  },
  {
    slug: "gads",
    badge: "Google Ads",
    metaTitle: "Maximisez votre ROI avec Google Ads | Lannkin",
    metaDescription:
      "Audit Google Ads gratuit et gestion de campagnes orientée ROI. Lannkin, agence Google Partner, optimise vos performances Search, Shopping et Display.",
    h1: "Maximisez votre ROI avec Google Ads",
    intro:
      "Une campagne Google Ads mal structurée peut consommer un budget important sans résultat mesurable. Notre approche part toujours d'un audit chiffré avant toute recommandation, pour s'assurer que chaque euro investi travaille pour votre croissance.",
    heroImage: "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
    icon: "Target",
    sections: [
      {
        title: "Nos solutions Google Ads",
        body: [
          "Search, Shopping, Display, Performance Max et YouTube : nous construisons la combinaison de campagnes la plus pertinente selon votre secteur, votre budget et votre cycle de vente.",
          "Chaque compte est structuré pour donner une visibilité claire sur le coût par acquisition réel, pas seulement sur des indicateurs de surface comme le taux de clic.",
        ],
      },
      {
        title: "Pourquoi choisir notre gestion Google Ads",
        body: [
          "Agence certifiée Google Partner, nous appliquons des scripts anti-fraude maison pour limiter les clics invalides et protéger votre budget.",
          "Un client type comme TechnoPlus a vu son retour sur investissement publicitaire multiplié après une restructuration complète de ses campagnes Search et Shopping sur les trois premiers mois de collaboration.",
        ],
      },
    ],
    benefits: [
      { icon: "Search", title: "Audit Google Ads gratuit", description: "Un diagnostic chiffré de vos campagnes actuelles avant toute recommandation." },
      { icon: "ShieldCheck", title: "Scripts anti-fraude maison", description: "Protection du budget contre les clics invalides et le trafic non qualifié." },
      { icon: "BarChart3", title: "Reporting transparent", description: "Accès direct à vos comptes et suivi du coût par acquisition réel." },
    ],
    faq: [
      { q: "Quel budget minimum pour démarrer avec Google Ads ?", a: "Nous recommandons un minimum de 500 €/mois de budget média pour disposer d'assez de données afin d'optimiser efficacement les campagnes." },
      { q: "En combien de temps voit-on des résultats ?", a: "Les premiers signaux d'optimisation apparaissent en 2 à 4 semaines ; une trajectoire de ROI stable se construit généralement sur 2 à 3 mois." },
      { q: "Gérez-vous aussi Shopping et Performance Max ?", a: "Oui, nous couvrons l'ensemble de l'écosystème Google Ads : Search, Shopping, Display, Performance Max et YouTube." },
      { q: "Puis-je garder l'accès à mon compte Google Ads ?", a: "Oui, vous restez propriétaire de votre compte et avez un accès complet à tout moment." },
    ],
    cta: { label: "Recevoir mon audit gratuit", href: "/devis-gratuit/", secondaryLabel: "Voir le service Google Ads", secondaryHref: "/services/google-ads/" },
  },
  {
    slug: "google-ads-artisans-pme",
    badge: "Artisans & PME",
    metaTitle: "Google Ads pour artisans et PME | Lannkin",
    metaDescription:
      "Générez des demandes qualifiées près de chez vous avec Google Ads. Une gestion de campagnes pensée pour les artisans et petites entreprises locales.",
    h1: "Google Ads pour artisans et PME : des demandes qualifiées, pas juste des clics",
    intro:
      "Pour un artisan ou une petite entreprise locale, chaque euro publicitaire doit se traduire en appel ou en devis, pas en trafic sans intention. Nous structurons vos campagnes autour de votre zone d'intervention et de vos horaires réels de disponibilité.",
    heroImage: "/images/rendu3D/rendu3d-rocket-cubes-gris.webp",
    icon: "Hammer",
    sections: [
      {
        title: "Une approche pensée pour le terrain",
        body: [
          "Ciblage géographique précis sur votre zone de chalandise réelle, extensions d'appel prioritaires, et horaires de diffusion alignés sur votre disponibilité pour éviter de payer des clics hors service.",
          "Les mots-clés sont sélectionnés pour capter une intention d'achat immédiate (urgence, devis, intervention) plutôt qu'une recherche d'information générale à faible valeur.",
        ],
      },
      {
        title: "Ce qui change concrètement",
        body: [
          "Un suivi du nombre d'appels et de formulaires générés, pas seulement du trafic — la métrique qui compte réellement pour un artisan ou une PME de proximité.",
          "Un budget adapté à la réalité d'une petite structure, avec des paliers progressifs plutôt qu'un engagement disproportionné dès le départ.",
        ],
      },
    ],
    benefits: [
      { icon: "MapPin", title: "Ciblage local précis", description: "Vos annonces diffusées uniquement sur votre zone d'intervention réelle." },
      { icon: "PhoneCall", title: "Priorité aux appels", description: "Extensions d'appel et suivi du nombre de contacts générés, pas juste des clics." },
      { icon: "Wallet", title: "Budget adapté aux PME", description: "Des paliers progressifs pensés pour les petites structures." },
    ],
    faq: [
      { q: "Google Ads est-il rentable pour un artisan indépendant ?", a: "Oui, à condition de cibler une intention d'achat locale et immédiate. C'est justement l'approche que nous mettons en place, différente d'une campagne générique." },
      { q: "Quel budget prévoir pour démarrer ?", a: "Il est possible de démarrer avec un budget modeste et de l'ajuster progressivement selon le volume de demandes généré." },
      { q: "Puis-je limiter les annonces à ma zone géographique ?", a: "Oui, c'est même la base de notre méthode : un ciblage par rayon ou par zone précise autour de votre activité." },
      { q: "Que se passe-t-il en dehors de mes horaires d'ouverture ?", a: "Nous configurons la diffusion pour respecter vos horaires réels de disponibilité, afin de ne pas payer des clics que vous ne pourrez pas traiter." },
    ],
    cta: { label: "Recevoir mon devis", href: "/devis-gratuit/", secondaryLabel: "Voir le service Google Ads", secondaryHref: "/services/google-ads/" },
  },
  {
    slug: "ads",
    badge: "Externalisation commerciale",
    metaTitle: "CallConnect : externalisation commerciale sans engagement | Lannkin",
    metaDescription:
      "Renforcez vos équipes commerciales avec CallConnect : des profils dédiés, encadrés et présents en bureau, sans les contraintes du freelance dispersé.",
    h1: "CallConnect : externaliser vos équipes, mais avec un vrai cadre",
    intro:
      "Externaliser une fonction commerciale ne veut pas dire perdre le contrôle. CallConnect met à disposition des équipes dédiées, présentes en bureau et encadrées au quotidien, pour renforcer vos équipes sans les aléas d'un freelance dispersé.",
    heroImage: "/images/rendu3D/rendu3d-cubes-overhead.webp",
    icon: "Users",
    sections: [
      {
        title: "Une structure réelle, des équipes encadrées",
        body: [
          "Les profils mis à disposition travaillent depuis des bureaux dédiés, avec des horaires de présence suivis et un encadrement RH quotidien — pas du travail dispersé sans supervision.",
          "Chaque poste est équipé du matériel et de l'infrastructure nécessaires pour opérer dans des conditions professionnelles, avec un reporting régulier sur l'activité réalisée.",
        ],
      },
      {
        title: "Ce que cela change pour votre entreprise",
        body: [
          "Vous bénéficiez d'une force commerciale supplémentaire sans les démarches de recrutement, tout en gardant une visibilité claire grâce à un suivi structuré du début à l'usage quotidien.",
          "L'exclusivité des profils dédiés à votre projet évite la dilution d'attention que l'on retrouve souvent avec des prestataires freelances gérant plusieurs clients en parallèle.",
        ],
      },
    ],
    benefits: [
      { icon: "UserCheck", title: "Encadrement RH quotidien", description: "Horaires, présence et suivi assurés par une structure réelle, pas du freelance isolé." },
      { icon: "Building2", title: "Présence en bureau", description: "Une équipe stable sur site, pas dispersée entre plusieurs missions." },
      { icon: "Laptop", title: "Matériel & infrastructure inclus", description: "Postes de travail et conditions professionnelles fournis." },
    ],
    faq: [
      { q: "Quel est le niveau d'engagement minimum ?", a: "CallConnect fonctionne sans engagement long terme imposé, contrairement à un recrutement classique." },
      { q: "Les profils sont-ils dédiés à mon entreprise uniquement ?", a: "Oui, l'exclusivité des profils mis à disposition évite la dispersion entre plusieurs clients en parallèle." },
      { q: "Comment se passe le suivi de l'activité ?", a: "Un reporting régulier vous donne une visibilité sur l'activité réalisée, avec un encadrement RH assuré au quotidien par notre structure." },
      { q: "Sous combien de temps une équipe peut-elle démarrer ?", a: "Le délai dépend du profil recherché ; contactez-nous pour une estimation précise selon votre besoin." },
    ],
    cta: { label: "Recevoir une estimation gratuite", href: "/devis-gratuit/" },
  },
  {
    slug: "serrurier",
    badge: "Service d'urgence",
    metaTitle: "Serrurier 24h/24 : ouverture de porte et changement de serrure | Lannkin",
    metaDescription:
      "Serrurier disponible 24h/24 pour ouverture de porte et changement de serrure. Estimation tarifaire claire avant tout déplacement, intervention rapide et sécurisée.",
    h1: "Serrurier 24h/24 : ouverture de porte et changement de serrure",
    intro:
      "Une porte claquée ou une serrure défectueuse ne prévient jamais à l'avance. Après votre prise de contact, votre demande est analysée en quelques minutes avec une estimation tarifaire claire avant tout déplacement, puis une intervention structurée et sécurisée.",
    heroImage: "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
    icon: "KeyRound",
    sections: [
      {
        title: "Comment se déroule votre prise en charge",
        body: [
          "Vous nous contactez par téléphone ou via le formulaire en ligne. Nous recueillons les informations essentielles — type de problème, adresse exacte, urgence de la situation — pour qualifier la demande.",
          "Une estimation tarifaire est communiquée avant tout déplacement, afin d'éviter toute mauvaise surprise, puis un serrurier certifié intervient dans les meilleurs délais.",
        ],
      },
      {
        title: "Protégez votre logement grâce à un serrurier certifié",
        body: [
          "Au-delà du dépannage d'urgence, nos serruriers interviennent aussi pour le changement de serrure et le renforcement de la sécurité de votre porte, avec des conseils adaptés à votre configuration.",
          "Chaque intervention est pensée pour offrir transparence et sérénité : diagnostic rapide, devis clair, exécution soignée.",
        ],
      },
    ],
    benefits: [
      { icon: "Clock4", title: "Disponible 24h/24", description: "Une prise en charge rapide, à toute heure du jour ou de la nuit." },
      { icon: "Receipt", title: "Estimation avant intervention", description: "Un tarif communiqué clairement avant tout déplacement." },
      { icon: "BadgeCheck", title: "Serruriers certifiés", description: "Des professionnels qualifiés pour l'ouverture et la sécurisation de votre porte." },
    ],
    faq: [
      { q: "Quel est le délai d'intervention ?", a: "Après votre appel, la demande est qualifiée en quelques minutes et l'intervention est organisée dans les meilleurs délais selon votre localisation." },
      { q: "Le prix est-il communiqué avant le déplacement ?", a: "Oui, une estimation tarifaire claire vous est donnée avant toute intervention, pour éviter les mauvaises surprises." },
      { q: "Intervenez-vous aussi pour changer une serrure ?", a: "Oui, en plus du dépannage d'urgence, nous assurons le changement et le renforcement de serrures." },
      { q: "Comment vous contacter en urgence ?", a: "Par téléphone ou via le formulaire en ligne, en indiquant le type de problème et votre adresse exacte." },
    ],
    cta: { label: "Demander un rappel", href: "/contact/" },
  },
  {
    slug: "soc",
    badge: "Cybersécurité",
    metaTitle: "Agence spécialisée SOC (Security Operations Center) | Lannkin",
    metaDescription:
      "Intégrez un Security Operations Center à votre entreprise pour surveiller, détecter et répondre aux cybermenaces. Accompagnement par une agence spécialisée SOC.",
    h1: "Agence spécialisée SOC (Security Operations Center)",
    intro:
      "Avec la fréquence croissante des cyberattaques, la sécurité de l'information est devenue un enjeu majeur pour toutes les entreprises, quelle que soit leur taille. Un Security Operations Center (SOC) centralise la surveillance, la détection et la réponse aux incidents de sécurité.",
    heroImage: "/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp",
    icon: "ShieldCheck",
    sections: [
      {
        title: "Qu'est-ce qu'un SOC en réalité",
        body: [
          "Un SOC regroupe les personnes, les processus et les technologies dédiés à la surveillance continue de l'infrastructure informatique d'une entreprise, dans le but de détecter et de traiter les incidents de sécurité le plus tôt possible.",
          "Sans SOC, une intrusion peut rester invisible pendant des semaines, aggravant considérablement les dommages une fois découverte.",
        ],
      },
      {
        title: "Pourquoi externaliser cette fonction",
        body: [
          "Mettre en place un SOC en interne demande des compétences pointues et rares, difficiles à recruter et à maintenir pour la plupart des entreprises.",
          "Externaliser cette fonction auprès d'une agence spécialisée permet d'accéder à une surveillance professionnelle 24/7 sans supporter le coût d'une équipe dédiée en interne.",
        ],
      },
    ],
    benefits: [
      { icon: "Eye", title: "Surveillance continue", description: "Détection des incidents de sécurité en temps réel, pas seulement après coup." },
      { icon: "Siren", title: "Réponse rapide aux incidents", description: "Un processus structuré pour limiter les dommages en cas d'intrusion." },
      { icon: "Users", title: "Expertise mutualisée", description: "Accès à des compétences pointues sans recruter une équipe en interne." },
    ],
    faq: [
      { q: "Un SOC est-il utile pour une PME ?", a: "Oui, les PME sont de plus en plus ciblées justement parce qu'elles sont perçues comme moins protégées. Un SOC externalisé rend cette protection accessible sans investissement lourd." },
      { q: "Quelle est la différence entre un SOC et un simple antivirus ?", a: "Un antivirus protège un poste isolé ; un SOC surveille l'ensemble de l'infrastructure en continu et coordonne la réponse aux incidents détectés." },
      { q: "Combien de temps pour mettre en place un SOC externalisé ?", a: "Le délai dépend de la taille de votre infrastructure ; un premier audit permet d'estimer précisément la mise en œuvre." },
      { q: "Le SOC remplace-t-il mon équipe IT ?", a: "Non, il vient en complément de votre équipe IT en prenant en charge la surveillance et la détection spécialisée." },
    ],
    cta: { label: "Échanger avec un expert", href: "/contact/" },
  },
  {
    slug: "cybersecurite",
    badge: "Cybersécurité",
    metaTitle: "Cybersécurité pour entreprises | Lannkin",
    metaDescription:
      "Protégez votre entreprise contre les cybermenaces : audit de sécurité, surveillance continue et accompagnement sur-mesure par des experts en cybersécurité.",
    h1: "Cybersécurité pour entreprises",
    intro:
      "Une cyberattaque ne se limite pas à une question technique : elle peut paralyser l'activité, exposer des données sensibles et endommager durablement la confiance de vos clients. Une démarche de cybersécurité structurée réduit ces risques avant qu'ils ne deviennent des crises.",
    heroImage: "/images/rendu3D/rendu3d-cube-vert-minimaliste.webp",
    icon: "Lock",
    sections: [
      {
        title: "Les risques auxquels votre entreprise est exposée",
        body: [
          "Phishing, rançongiciels, fuite de données ou intrusion sur vos systèmes : les menaces se diversifient et touchent désormais des entreprises de toutes tailles, pas uniquement les grands groupes.",
          "Un incident de sécurité mal anticipé entraîne souvent des coûts bien supérieurs à ceux d'une démarche de prévention structurée en amont.",
        ],
      },
      {
        title: "Notre approche de la cybersécurité",
        body: [
          "Nous commençons par un audit de vos systèmes et de vos pratiques pour identifier les vulnérabilités prioritaires, avant de mettre en place les mesures de protection adaptées à votre contexte.",
          "L'accompagnement inclut la sensibilisation de vos équipes, souvent le maillon le plus exposé, en complément des mesures techniques.",
        ],
      },
    ],
    benefits: [
      { icon: "Search", title: "Audit de sécurité initial", description: "Identification des vulnérabilités prioritaires avant toute action." },
      { icon: "ShieldCheck", title: "Protection sur-mesure", description: "Des mesures adaptées à votre infrastructure réelle, pas une solution générique." },
      { icon: "GraduationCap", title: "Sensibilisation des équipes", description: "Formation de vos collaborateurs, souvent la première ligne de défense." },
    ],
    faq: [
      { q: "Par où commencer une démarche de cybersécurité ?", a: "Par un audit de vos systèmes et pratiques actuelles, qui permet de prioriser les actions selon les risques réels de votre entreprise." },
      { q: "Les petites entreprises sont-elles vraiment ciblées ?", a: "Oui, elles sont souvent perçues comme des cibles plus faciles justement parce qu'elles investissent moins en sécurité." },
      { q: "Faut-il des compétences techniques en interne pour se protéger ?", a: "Non, notre accompagnement est conçu pour être opérationnel même sans équipe IT dédiée en interne." },
      { q: "Proposez-vous un suivi dans la durée ?", a: "Oui, la cybersécurité est une démarche continue ; nous proposons un accompagnement dans le temps, pas seulement une intervention ponctuelle." },
    ],
    cta: { label: "Demander un audit", href: "/contact/" },
  },
  {
    slug: "prospection-emailing",
    badge: "Prospection B2B",
    metaTitle: "Agence de prospection emailing | Lannkin",
    metaDescription:
      "Générez des rendez-vous qualifiés grâce à des campagnes de prospection emailing structurées. Lannkin conçoit et pilote votre prospection de A à Z.",
    h1: "Agence de prospection emailing",
    intro:
      "Une prospection emailing efficace ne se résume pas à envoyer un grand nombre de messages : elle repose sur un ciblage précis, un message pertinent et un suivi rigoureux des réponses pour transformer les contacts en rendez-vous qualifiés.",
    heroImage: "/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp",
    icon: "Mail",
    sections: [
      {
        title: "La prospection en termes simples",
        body: [
          "Avant de parler d'outils ou de volumes, la prospection emailing repose sur trois bases : un fichier de contacts qualifié, un message qui répond à un besoin réel du destinataire, et une relance structurée pour ceux qui n'ont pas répondu du premier coup.",
          "La plupart des campagnes sous-performantes échouent sur l'un de ces trois points, rarement sur la technique d'envoi elle-même.",
        ],
      },
      {
        title: "Notre processus de prospection",
        body: [
          "Nous construisons ou qualifions votre fichier de contacts, rédigeons des séquences de messages personnalisées et pilotons les relances selon le comportement de chaque destinataire (ouverture, clic, absence de réponse).",
          "Un reporting régulier vous donne une visibilité claire sur les taux d'ouverture, de réponse et de conversion en rendez-vous.",
        ],
      },
    ],
    benefits: [
      { icon: "Target", title: "Ciblage qualifié", description: "Des fichiers de contacts construits ou vérifiés pour maximiser la pertinence." },
      { icon: "PenLine", title: "Messages personnalisés", description: "Des séquences rédigées pour répondre à un besoin réel, pas un template générique." },
      { icon: "BarChart3", title: "Reporting détaillé", description: "Suivi des taux d'ouverture, de réponse et de conversion en rendez-vous." },
    ],
    faq: [
      { q: "Combien de temps avant d'obtenir des rendez-vous ?", a: "Les premiers résultats apparaissent généralement dans les 2 à 3 premières semaines, le temps d'ajuster le ciblage et les messages selon les retours." },
      { q: "Fournissez-vous le fichier de contacts ?", a: "Nous pouvons construire un fichier qualifié ou travailler à partir de votre base existante, selon votre besoin." },
      { q: "Comment évitez-vous d'être marqué comme spam ?", a: "Nous respectons les bonnes pratiques d'envoi (volumétrie, réputation de domaine, personnalisation) pour préserver la délivrabilité de vos campagnes." },
      { q: "Puis-je suivre les performances en temps réel ?", a: "Oui, un reporting régulier vous donne une visibilité complète sur les indicateurs clés de la campagne." },
    ],
    cta: { label: "Confier mon projet", href: "/devis-gratuit/" },
  },
  {
    slug: "prospection-telephonique",
    badge: "Call center",
    metaTitle: "Agence de prospection téléphonique : Call center | Lannkin",
    metaDescription:
      "Externalisez votre prospection téléphonique et votre service client avec une équipe de call center structurée et encadrée. Une solution Lannkin sur-mesure.",
    h1: "Agence de prospection téléphonique : Call center",
    intro:
      "Externaliser sa prospection téléphonique ou son service client permet de professionnaliser le premier contact avec vos prospects sans supporter le coût d'une équipe interne complète.",
    heroImage: "/images/rendu3D/rendu3d-rocket-cubes-gris.webp",
    icon: "Phone",
    sections: [
      {
        title: "Qu'est-ce qu'un call center en réalité",
        body: [
          "Un call center regroupe des téléopérateurs formés qui gèrent les appels entrants et sortants pour le compte de votre entreprise, selon des scripts et des objectifs définis en amont avec vous.",
          "Bien structuré, il devient un véritable prolongement de votre équipe commerciale, pas un simple centre d'appels générique.",
        ],
      },
      {
        title: "Faut-il externaliser le service client ?",
        body: [
          "Externaliser permet d'absorber les pics d'activité et de garantir une disponibilité que peu d'équipes internes peuvent maintenir seules, tout en réduisant les coûts de recrutement et de formation.",
          "La clé reste le pilotage : un encadrement rigoureux et un reporting régulier pour garder le contrôle sur la qualité des échanges avec vos prospects et clients.",
        ],
      },
    ],
    benefits: [
      { icon: "Headset", title: "Téléopérateurs formés", description: "Des équipes formées à vos produits, vos objections types et vos objectifs." },
      { icon: "CalendarClock", title: "Disponibilité étendue", description: "Une capacité à absorber les pics d'appels sans dégrader la qualité." },
      { icon: "ClipboardList", title: "Scripts et reporting", description: "Des échanges structurés et un suivi précis des résultats obtenus." },
    ],
    faq: [
      { q: "Le call center peut-il gérer à la fois prospection et SAV ?", a: "Oui, les équipes peuvent être dédiées à l'un ou l'autre selon vos priorités, ou couvrir les deux avec des scripts distincts." },
      { q: "Comment le script d'appel est-il défini ?", a: "Nous le construisons avec vous à partir de vos objections types, de votre argumentaire commercial et de vos objectifs de conversion." },
      { q: "Puis-je suivre les appels réalisés ?", a: "Oui, un reporting régulier vous donne une visibilité sur le volume d'appels, les résultats obtenus et la qualité des échanges." },
      { q: "Quel est le délai de mise en place ?", a: "Le délai dépend de la complexité du script et du volume d'appels visé ; il est estimé après un premier échange sur votre besoin." },
    ],
    cta: { label: "Discuter de mon besoin", href: "/contact/" },
  },
  {
    slug: "sav-email-et-sms",
    badge: "Service client externalisé",
    metaTitle: "Externalisation SAV (Email et SMS) | Lannkin",
    metaDescription:
      "Optimisez votre service après-vente par email et SMS grâce à une externalisation structurée. Réponses rapides, suivi qualité et satisfaction client renforcée.",
    h1: "Externalisation SAV (Email et SMS)",
    intro:
      "Un service après-vente lent ou mal organisé abîme durablement la satisfaction client, même quand le produit ou la prestation initiale était de qualité. Externaliser le SAV par email et SMS permet de garantir des délais de réponse maîtrisés sans surcharger vos équipes internes.",
    heroImage: "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
    icon: "MessageSquare",
    sections: [
      {
        title: "Service après-vente : décryptage",
        body: [
          "Le SAV regroupe l'ensemble des échanges avec un client après son achat : réponse aux questions, gestion des réclamations, suivi de commande ou de livraison, résolution de litiges.",
          "Traité par email et SMS, il permet de couvrir un grand volume de demandes avec des délais de réponse maîtrisés, tout en gardant une trace écrite de chaque échange.",
        ],
      },
      {
        title: "Externaliser son SAV : comment faire",
        body: [
          "Nous cadrons d'abord vos process actuels (délais, ton de communication, cas de litiges fréquents) pour construire des modèles de réponse cohérents avec votre marque.",
          "Une équipe dédiée prend ensuite en charge les échanges quotidiens, avec des indicateurs de suivi (délai de réponse, taux de résolution) partagés régulièrement.",
        ],
      },
    ],
    benefits: [
      { icon: "Timer", title: "Délais de réponse maîtrisés", description: "Un volume de demandes traité sans faire attendre vos clients." },
      { icon: "FileText", title: "Modèles adaptés à votre marque", description: "Des réponses cohérentes avec votre ton et vos process existants." },
      { icon: "LineChart", title: "Indicateurs de suivi", description: "Délai de réponse et taux de résolution partagés régulièrement." },
    ],
    faq: [
      { q: "Le SAV externalisé gère-t-il aussi les réclamations complexes ?", a: "Les cas standards sont traités directement par l'équipe dédiée ; les réclamations complexes peuvent être escaladées vers vos équipes internes selon un process défini ensemble." },
      { q: "Puis-je garder le contrôle du ton des réponses ?", a: "Oui, les modèles de réponse sont construits avec vous pour respecter le ton et les valeurs de votre marque." },
      { q: "Quel volume de demandes pouvez-vous absorber ?", a: "Le dimensionnement de l'équipe est ajusté selon votre volume réel de demandes, avec la possibilité d'ajuster à la hausse en période de pic." },
      { q: "Le SMS est-il utilisé pour tous les types de demandes ?", a: "Le SMS est privilégié pour les notifications courtes et urgentes (suivi de commande, confirmation), l'email pour les échanges plus détaillés." },
    ],
    cta: { label: "Discuter de mon besoin SAV", href: "/contact/" },
  },
  {
    slug: "redaction-web-professionelle",
    badge: "Contenu",
    metaTitle: "Rédaction web professionnelle | Lannkin",
    metaDescription:
      "Des contenus web rédigés pour convertir et bien référencer : fiches produits, articles de blog, pages de vente. Rédaction professionnelle optimisée SEO.",
    h1: "Rédaction web professionnelle",
    intro:
      "Un contenu bien écrit fait à la fois gagner en crédibilité auprès de vos visiteurs et en visibilité sur Google. Notre rédaction web combine clarté, ton adapté à votre marque et optimisation SEO dès la première version.",
    heroImage: "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
    icon: "PenTool",
    sections: [
      {
        title: "Nos services de rédaction web",
        body: [
          "Pages de vente, fiches produits, articles de blog optimisés SEO, pages de services : chaque format a ses codes et nous les appliquons selon l'objectif réel du contenu (convertir, informer, ou référencer).",
          "Tous nos textes sont rédigés en français natif, avec une attention particulière portée au champ lexical et aux intentions de recherche associées à votre secteur.",
        ],
      },
      {
        title: "Notre processus de création",
        body: [
          "Nous partons d'un brief structuré (objectif, cible, mots-clés prioritaires) avant la rédaction, pour éviter les allers-retours inutiles.",
          "Chaque texte est relu et optimisé pour le SEO (balises, structure de titres, maillage interne) avant livraison, prêt à être publié.",
        ],
      },
    ],
    benefits: [
      { icon: "FileText", title: "Contenu optimisé SEO", description: "Chaque texte structuré pour se positionner sur les bonnes requêtes." },
      { icon: "Palette", title: "Ton adapté à votre marque", description: "Une rédaction calibrée sur votre identité, pas un style générique." },
      { icon: "CheckCircle2", title: "Prêt à publier", description: "Relecture et optimisation incluses avant livraison finale." },
    ],
    faq: [
      { q: "Combien de temps pour recevoir mes contenus ?", a: "Le délai dépend du volume et de la complexité du brief ; comptez en moyenne quelques jours à une semaine par lot de contenus." },
      { q: "Les textes sont-ils optimisés pour le référencement ?", a: "Oui, chaque contenu est structuré selon les bonnes pratiques SEO : balises, titres hiérarchisés, mots-clés pertinents." },
      { q: "Puis-je demander des révisions ?", a: "Oui, une ou plusieurs révisions sont incluses selon le forfait choisi pour ajuster le ton ou le contenu si nécessaire." },
      { q: "Rédigez-vous aussi des contenus techniques ou spécialisés ?", a: "Oui, nous adaptons notre méthode de recherche et de rédaction selon la technicité de votre secteur d'activité." },
    ],
    cta: { label: "Demander un devis rédaction", href: "/devis-gratuit/" },
  },
];

export function getLegacyLandingPageBySlug(slug: string): LegacyLandingPage | undefined {
  return LEGACY_LANDING_PAGES.find((page) => page.slug === slug);
}
