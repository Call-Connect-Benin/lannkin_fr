#!/usr/bin/env bash
set -euo pipefail

BASE="/Users/albertlanne/Documents/antigravity projet /refonte lannkin.ca/src/app"

# ==============================================================================
# HELPER FUNCTIONS
# ==============================================================================

# Convert slug to human-readable title
# e.g. "campagne-search" → "Campagne Search"
slug_to_title() {
  echo "$1" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1'
}

# Convert slug to PascalCase component name
# e.g. "campagne-search" → "CampagneSearch"
slug_to_pascal() {
  echo "$1" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1' | sed 's/ //g'
}

# Create a standard page file
# Args: $1=file_path, $2=title, $3=component_name, $4=description
create_page() {
  local file_path="$1"
  local title="$2"
  local component_name="$3"
  local description="$4"

  mkdir -p "$(dirname "$file_path")"
  cat > "$file_path" << ENDOFFILE
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title} | Lannkin",
  description: "${description}",
};

export default function ${component_name}() {
  return (
    <main>
      <h1>${title}</h1>
    </main>
  );
}
ENDOFFILE
}

# Create a service sub-page
# Args: $1=service_slug, $2=subpage_slug, $3=description
create_service_subpage() {
  local service_slug="$1"
  local subpage_slug="$2"
  local description="$3"
  local title
  title=$(slug_to_title "$subpage_slug")
  local component_name
  component_name=$(slug_to_pascal "$subpage_slug")
  local file_path="${BASE}/(marketing)/services/${service_slug}/${subpage_slug}/page.tsx"

  create_page "$file_path" "$title" "${component_name}Page" "$description"
}

echo "=== Creating Pillar Pages ==="

# ==============================================================================
# PILLAR PAGES
# ==============================================================================

# Home
mkdir -p "${BASE}/(marketing)"
cat > "${BASE}/(marketing)/page.tsx" << 'ENDOFFILE'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence Marketing Digital & Développement Web à Laval | Lannkin",
  description: "Lannkin est votre agence de marketing digital et développement web à Laval. Expertise en SEO, Google Ads, conception web, IA et vibe coding pour propulser votre entreprise.",
};

export default function HomePage() {
  return (
    <main>
      <h1>Agence Marketing Digital & Développement Web à Laval</h1>
    </main>
  );
}
ENDOFFILE

# Services hub
create_page "${BASE}/(marketing)/services/page.tsx" \
  "Services" "ServicesPage" \
  "Découvrez tous nos services de marketing digital, développement web, SEO, publicité en ligne et intelligence artificielle pour faire croître votre entreprise."

# Tarifs hub
create_page "${BASE}/(marketing)/tarifs/page.tsx" \
  "Tarifs" "TarifsPage" \
  "Consultez nos tarifs transparents pour tous nos services : conception web, SEO, Google Ads, Facebook Ads, graphisme et plus encore."

# À propos
create_page "${BASE}/(marketing)/a-propos/page.tsx" \
  "À Propos" "AProposPage" \
  "Découvrez l'équipe Lannkin, notre mission et nos valeurs. Agence de marketing digital et développement web basée à Laval, Québec."

# Contact
create_page "${BASE}/(marketing)/contact/page.tsx" \
  "Contact" "ContactPage" \
  "Contactez Lannkin pour discuter de votre projet web ou marketing digital. Obtenez une consultation gratuite avec nos experts à Laval."

# Réalisations
create_page "${BASE}/(marketing)/realisations/page.tsx" \
  "Réalisations" "RealisationsPage" \
  "Explorez nos réalisations et projets clients en développement web, marketing digital, SEO et publicité en ligne."

# Certifications
create_page "${BASE}/(marketing)/certifications/page.tsx" \
  "Certifications" "CertificationsPage" \
  "Nos certifications professionnelles en marketing digital, Google Ads, Facebook Blueprint, SEO et développement web."

# FAQ
create_page "${BASE}/(marketing)/faq/page.tsx" \
  "FAQ" "FaqPage" \
  "Questions fréquemment posées sur nos services de marketing digital, développement web, tarifs et processus de travail."

# Secteurs hub
create_page "${BASE}/(marketing)/secteurs/page.tsx" \
  "Secteurs" "SecteursPage" \
  "Solutions marketing digital et développement web adaptées à votre secteur d'activité. Expertise sectorielle pour des résultats optimaux."

# Zone hub
create_page "${BASE}/(marketing)/zone/page.tsx" \
  "Zone" "ZonePage" \
  "Lannkin dessert les entreprises partout au Québec. Trouvez notre agence de marketing digital et développement web près de chez vous."

# Devis Gratuit
create_page "${BASE}/(marketing)/devis-gratuit/page.tsx" \
  "Devis Gratuit" "DevisGratuitPage" \
  "Obtenez un devis gratuit et sans engagement pour votre projet web ou marketing digital. Réponse rapide sous 24h."

echo "=== Creating Service Hub Pages (20) ==="

# ==============================================================================
# SERVICE HUBS (20)
# ==============================================================================

declare -A SERVICE_DESCRIPTIONS=(
  ["conception-web"]="Services de conception et développement de sites web professionnels : sites vitrine, WordPress, Shopify, Next.js et refonte complète."
  ["vibe-coding"]="Services de vibe coding et développement assisté par IA : Lovable, Bolt, Cursor, Claude Code, V0 et accompagnement personnalisé."
  ["odoo"]="Intégration et personnalisation Odoo : ERP, CRM, e-commerce, site web et formation pour optimiser vos processus d'entreprise."
  ["google-ads"]="Gestion experte de campagnes Google Ads : Search, Display, Shopping, YouTube, Performance Max et remarketing pour maximiser votre ROI."
  ["facebook-ads"]="Publicité Facebook et Instagram Ads : création de campagnes, installation pixel, retargeting et optimisation Meta Advantage."
  ["tiktok-ads"]="Publicité TikTok Ads : création et gestion de campagnes publicitaires sur TikTok pour toucher une audience jeune et engagée."
  ["linkedin-ads"]="Publicité LinkedIn Ads : campagnes B2B ciblées pour générer des leads qualifiés auprès de professionnels et décideurs."
  ["snapchat-ads"]="Publicité Snapchat Ads : création de campagnes engageantes sur Snapchat pour atteindre une audience jeune et active."
  ["pinterest-ads"]="Publicité Pinterest Ads : campagnes visuelles inspirantes pour promouvoir vos produits et services sur Pinterest."
  ["native-ads"]="Publicité native : campagnes Taboola, Outbrain et autres plateformes pour une intégration naturelle dans le contenu éditorial."
  ["bing-ads"]="Publicité Bing Ads (Microsoft Advertising) : campagnes Search et Shopping pour diversifier vos canaux d'acquisition."
  ["amazon-ads"]="Publicité Amazon Ads : Sponsored Products, Sponsored Brands et stratégie publicitaire pour augmenter vos ventes sur Amazon."
  ["waze-ads"]="Publicité Waze Ads : campagnes géolocalisées sur Waze pour attirer les conducteurs vers votre établissement local."
  ["seo"]="Services de référencement naturel SEO : audit, SEO technique, on-page, local, backlinks et migration pour améliorer votre visibilité."
  ["google-my-business"]="Optimisation Google My Business : fiche GMB, avis Google, Google Maps marketing et stratégie de contenu local."
  ["graphisme"]="Services de graphisme professionnel : création de logo, identité visuelle, brochures, flyers et supports de communication."
  ["lead-generation"]="Génération de leads qualifiés : landing pages, formulaires, tunnels de vente, lead scoring et intégration CRM."
  ["intelligence-artificielle"]="Services d'intelligence artificielle : agents IA, chatbots, automatisation, RAG, voicebots et transformation digitale par l'IA."
  ["developpement-saas"]="Développement d'applications SaaS : applications web, mobiles, MVP startup et intégrations API sur mesure."
  ["sites-immersifs-3d"]="Création de sites immersifs 3D : configurateurs produit, Three.js, WebGL, React Three Fiber, visites virtuelles et showrooms."
)

for service_slug in conception-web vibe-coding odoo google-ads facebook-ads tiktok-ads linkedin-ads snapchat-ads pinterest-ads native-ads bing-ads amazon-ads waze-ads seo google-my-business graphisme lead-generation intelligence-artificielle developpement-saas sites-immersifs-3d; do
  title=$(slug_to_title "$service_slug")
  component=$(slug_to_pascal "$service_slug")
  desc="${SERVICE_DESCRIPTIONS[$service_slug]}"
  create_page "${BASE}/(marketing)/services/${service_slug}/page.tsx" "$title" "${component}Page" "$desc"
done

echo "=== Creating Service Sub-Pages ==="

# ==============================================================================
# CONCEPTION-WEB SUB-PAGES (6)
# ==============================================================================

create_service_subpage "conception-web" "site-vitrine" \
  "Création de site vitrine professionnel pour présenter votre entreprise et vos services. Design moderne et responsive."
create_service_subpage "conception-web" "site-wordpress" \
  "Développement de site WordPress sur mesure. Thèmes personnalisés, plugins et optimisation des performances."
create_service_subpage "conception-web" "site-shopify" \
  "Création de boutique en ligne Shopify. Configuration, design personnalisé et optimisation pour la conversion."
create_service_subpage "conception-web" "site-nextjs" \
  "Développement de site web Next.js haute performance. Applications React server-side avec SEO optimisé."
create_service_subpage "conception-web" "site-headless-cms" \
  "Développement de site avec Headless CMS. Architecture découplée pour flexibilité et performances maximales."
create_service_subpage "conception-web" "refonte-site-web" \
  "Refonte complète de site web. Modernisation du design, amélioration UX et migration technique sans perte de SEO."

# ==============================================================================
# VIBE-CODING SUB-PAGES (12)
# ==============================================================================

create_service_subpage "vibe-coding" "lovable" \
  "Développement d'applications avec Lovable. Création rapide d'apps web grâce au vibe coding et l'intelligence artificielle."
create_service_subpage "vibe-coding" "bolt-new" \
  "Développement avec Bolt.new. Prototypage et création d'applications full-stack directement dans le navigateur avec l'IA."
create_service_subpage "vibe-coding" "cursor-ai" \
  "Développement assisté par Cursor AI. Programmation augmentée par l'IA pour un code plus rapide et de meilleure qualité."
create_service_subpage "vibe-coding" "claude-code" \
  "Développement avec Claude Code. Utilisez la puissance de Claude pour générer et optimiser votre code en temps réel."
create_service_subpage "vibe-coding" "v0-vercel" \
  "Création d'interfaces avec V0 de Vercel. Génération de composants UI React à partir de descriptions textuelles."
create_service_subpage "vibe-coding" "windsurf" \
  "Développement avec Windsurf IDE. Environnement de développement intégré propulsé par l'IA pour une productivité maximale."
create_service_subpage "vibe-coding" "replit" \
  "Développement avec Replit. Création et déploiement d'applications dans le cloud avec assistance IA intégrée."
create_service_subpage "vibe-coding" "accompagnement-vibe-coding" \
  "Accompagnement personnalisé en vibe coding. Intégrez les outils IA dans votre workflow de développement."
create_service_subpage "vibe-coding" "maintenance-app-vibe-coding" \
  "Maintenance d'applications créées par vibe coding. Support technique, mises à jour et optimisation continue."
create_service_subpage "vibe-coding" "formation-vibe-coding" \
  "Formation en vibe coding pour développeurs et équipes. Maîtrisez les outils IA de développement les plus avancés."
create_service_subpage "vibe-coding" "audit-code-ia" \
  "Audit de code généré par IA. Vérification de la qualité, sécurité et performance du code produit par des outils IA."
create_service_subpage "vibe-coding" "migration-vibe-code-production" \
  "Migration de projets vibe coding vers la production. Passage d'un prototype IA à une application robuste et scalable."

# ==============================================================================
# ODOO SUB-PAGES (8)
# ==============================================================================

create_service_subpage "odoo" "creation-site-odoo" \
  "Création de site web avec Odoo. Design professionnel et intégration native avec vos modules ERP et CRM."
create_service_subpage "odoo" "odoo-erp-integration" \
  "Intégration Odoo ERP complète. Gestion des stocks, comptabilité, achats et production dans un système unifié."
create_service_subpage "odoo" "odoo-crm" \
  "Configuration et personnalisation Odoo CRM. Gestion de pipeline, leads et suivi client optimisé."
create_service_subpage "odoo" "odoo-ecommerce" \
  "Boutique en ligne Odoo E-commerce. Vente en ligne intégrée à votre ERP pour une gestion simplifiée."
create_service_subpage "odoo" "referencement-seo-odoo" \
  "Référencement SEO pour sites Odoo. Optimisation technique et on-page spécifique à la plateforme Odoo."
create_service_subpage "odoo" "maintenance-odoo" \
  "Maintenance et support Odoo. Mises à jour, corrections, monitoring et assistance technique continue."
create_service_subpage "odoo" "migration-odoo" \
  "Migration vers Odoo ou entre versions Odoo. Transfert de données sécurisé et sans interruption de service."
create_service_subpage "odoo" "formation-odoo" \
  "Formation Odoo pour vos équipes. Maîtrisez tous les modules Odoo avec nos formations personnalisées."

# ==============================================================================
# GOOGLE-ADS SUB-PAGES (10)
# ==============================================================================

create_service_subpage "google-ads" "campagne-search" \
  "Création et gestion de campagnes Google Search Ads. Annonces textuelles ciblées pour capter l'intention de recherche."
create_service_subpage "google-ads" "campagne-display" \
  "Campagnes Google Display Ads. Bannières visuelles sur le réseau Display Google pour accroître votre notoriété."
create_service_subpage "google-ads" "campagne-shopping" \
  "Campagnes Google Shopping. Annonces produits visuelles pour augmenter les ventes de votre boutique en ligne."
create_service_subpage "google-ads" "campagne-youtube" \
  "Publicité YouTube Ads. Campagnes vidéo ciblées pour toucher votre audience sur la plus grande plateforme vidéo."
create_service_subpage "google-ads" "campagne-discovery" \
  "Campagnes Google Discovery Ads. Annonces visuelles natives sur Gmail, YouTube et le flux Discover."
create_service_subpage "google-ads" "campagne-performance-max" \
  "Campagnes Google Performance Max. Optimisation IA multi-canal pour maximiser vos conversions sur tous les réseaux Google."
create_service_subpage "google-ads" "campagne-google-maps" \
  "Publicité Google Maps. Annonces géolocalisées pour attirer les clients directement vers votre établissement."
create_service_subpage "google-ads" "audit-google-ads" \
  "Audit complet de votre compte Google Ads. Analyse des performances, identification des opportunités et recommandations."
create_service_subpage "google-ads" "installation-tracking" \
  "Installation du tracking Google Ads. Configuration Google Tag Manager, conversions et suivi analytique avancé."
create_service_subpage "google-ads" "remarketing-google" \
  "Remarketing Google Ads. Retargeting intelligent pour reconquérir les visiteurs de votre site avec des annonces ciblées."

# ==============================================================================
# FACEBOOK-ADS SUB-PAGES (7)
# ==============================================================================

create_service_subpage "facebook-ads" "campagne-facebook" \
  "Création et gestion de campagnes Facebook Ads. Ciblage précis et créatifs engageants pour maximiser votre ROI."
create_service_subpage "facebook-ads" "campagne-instagram" \
  "Publicité Instagram Ads. Stories, Reels et posts sponsorisés pour engager votre audience visuelle."
create_service_subpage "facebook-ads" "installation-pixel-facebook" \
  "Installation et configuration du pixel Facebook. Suivi des conversions et optimisation de vos campagnes Meta."
create_service_subpage "facebook-ads" "creation-page-professionnelle" \
  "Création et optimisation de page Facebook professionnelle. Présence de marque complète et engageante."
create_service_subpage "facebook-ads" "retargeting-facebook" \
  "Retargeting Facebook et Instagram. Audiences personnalisées et lookalike pour reconvertir vos prospects."
create_service_subpage "facebook-ads" "publicite-messenger" \
  "Publicité Facebook Messenger. Campagnes conversationnelles pour engager directement avec vos clients potentiels."
create_service_subpage "facebook-ads" "campagne-meta-advantage" \
  "Campagnes Meta Advantage+. Publicité automatisée par l'IA Meta pour des performances optimisées."

# ==============================================================================
# SEO SUB-PAGES (8)
# ==============================================================================

create_service_subpage "seo" "audit-seo" \
  "Audit SEO complet de votre site web. Analyse technique, on-page, off-page et plan d'action détaillé."
create_service_subpage "seo" "referencement-local" \
  "Référencement local SEO. Optimisez votre visibilité dans les recherches locales et Google Maps."
create_service_subpage "seo" "strategie-backlinks" \
  "Stratégie de backlinks et netlinking. Acquisition de liens de qualité pour renforcer l'autorité de votre site."
create_service_subpage "seo" "optimisation-maillage-interne" \
  "Optimisation du maillage interne. Structure de liens internes stratégique pour améliorer le crawl et le ranking."
create_service_subpage "seo" "seo-technique" \
  "SEO technique avancé. Optimisation de la vitesse, Core Web Vitals, indexation et architecture de site."
create_service_subpage "seo" "seo-on-page" \
  "SEO on-page. Optimisation des balises, contenu, structure et sémantique pour un meilleur positionnement."
create_service_subpage "seo" "seo-ecommerce" \
  "SEO e-commerce. Référencement naturel spécialisé pour boutiques en ligne et catalogues produits."
create_service_subpage "seo" "migration-seo" \
  "Migration SEO sécurisée. Changement de domaine, refonte ou migration technique sans perte de positionnement."

# ==============================================================================
# GOOGLE-MY-BUSINESS SUB-PAGES (6)
# ==============================================================================

create_service_subpage "google-my-business" "optimisation-fiche-gmb" \
  "Optimisation complète de votre fiche Google My Business. Informations, photos, catégories et attributs optimisés."
create_service_subpage "google-my-business" "strategie-contenu-gmb" \
  "Stratégie de contenu Google My Business. Publications régulières, offres et actualités pour engager localement."
create_service_subpage "google-my-business" "collecte-avis-google" \
  "Stratégie de collecte d'avis Google. Augmentez le nombre et la qualité de vos avis clients sur Google."
create_service_subpage "google-my-business" "gestion-avis-negatifs" \
  "Gestion professionnelle des avis négatifs Google. Réponses stratégiques et restauration de votre réputation en ligne."
create_service_subpage "google-my-business" "google-maps-marketing" \
  "Marketing Google Maps. Visibilité maximale dans les recherches locales et le pack local Google."
create_service_subpage "google-my-business" "qr-code-avis" \
  "QR Code pour avis Google. Facilitez la collecte d'avis avec des QR codes personnalisés pour votre établissement."

# ==============================================================================
# GRAPHISME SUB-PAGES (6)
# ==============================================================================

create_service_subpage "graphisme" "creation-logo" \
  "Création de logo professionnel. Design de logo unique et mémorable qui reflète l'identité de votre marque."
create_service_subpage "graphisme" "identite-visuelle" \
  "Création d'identité visuelle complète. Charte graphique, typographie, palette de couleurs et guide de marque."
create_service_subpage "graphisme" "brochure-commerciale" \
  "Conception de brochures commerciales. Design attractif pour présenter vos produits et services efficacement."
create_service_subpage "graphisme" "flyer-publicitaire" \
  "Création de flyers publicitaires. Design accrocheur pour vos campagnes de communication print et digitales."
create_service_subpage "graphisme" "campagne-print" \
  "Conception de campagnes print. Affiches, panneaux et supports imprimés au design professionnel et impactant."
create_service_subpage "graphisme" "carte-de-visite" \
  "Création de cartes de visite professionnelles. Design élégant et mémorable pour vos contacts d'affaires."

# ==============================================================================
# LEAD-GENERATION SUB-PAGES (5)
# ==============================================================================

create_service_subpage "lead-generation" "landing-page-conversion" \
  "Création de landing pages optimisées pour la conversion. Design persuasif et A/B testing pour maximiser vos leads."
create_service_subpage "lead-generation" "formulaire-lead-capture" \
  "Conception de formulaires de capture de leads. Formulaires intelligents et progressifs pour qualifier vos prospects."
create_service_subpage "lead-generation" "tunnel-de-vente" \
  "Création de tunnels de vente performants. Parcours client optimisé de la découverte à la conversion."
create_service_subpage "lead-generation" "lead-scoring" \
  "Mise en place de lead scoring. Notation automatique des prospects pour prioriser vos actions commerciales."
create_service_subpage "lead-generation" "crm-integration" \
  "Intégration CRM pour la gestion des leads. Connexion de vos outils marketing à votre CRM pour un suivi optimal."

# ==============================================================================
# INTELLIGENCE-ARTIFICIELLE SUB-PAGES (28)
# ==============================================================================

create_service_subpage "intelligence-artificielle" "agents-ia-sur-mesure" \
  "Développement d'agents IA sur mesure. Solutions d'intelligence artificielle personnalisées pour automatiser vos processus métier."
create_service_subpage "intelligence-artificielle" "automatisation-ia-nocode-api" \
  "Automatisation IA no-code et API. Connectez vos outils et automatisez vos workflows sans écrire de code."
create_service_subpage "intelligence-artificielle" "chatbot-ia-conversationnelle" \
  "Création de chatbots IA conversationnels. Assistants virtuels intelligents pour le support client et la vente."
create_service_subpage "intelligence-artificielle" "integration-ia-crm" \
  "Intégration de l'IA dans votre CRM. Enrichissement automatique des données et prédiction des comportements clients."
create_service_subpage "intelligence-artificielle" "rag-ia-documentaire" \
  "RAG et IA documentaire. Recherche augmentée par génération pour exploiter intelligemment vos documents d'entreprise."
create_service_subpage "intelligence-artificielle" "support-client-ia-multicanal" \
  "Support client IA multicanal. Assistance automatisée par IA sur tous vos canaux : chat, email, téléphone et réseaux sociaux."
create_service_subpage "intelligence-artificielle" "agent-ia-ecommerce" \
  "Agent IA pour e-commerce. Assistant intelligent pour recommandations produits, support et personnalisation de l'expérience d'achat."
create_service_subpage "intelligence-artificielle" "agent-ia-saas" \
  "Agent IA pour SaaS. Automatisation du onboarding, support et engagement utilisateur propulsés par l'intelligence artificielle."
create_service_subpage "intelligence-artificielle" "agent-ia-centre-appels" \
  "Agent IA pour centre d'appels. Automatisation et assistance IA pour optimiser votre centre de contact client."
create_service_subpage "intelligence-artificielle" "agent-ia-slack-teams" \
  "Agent IA pour Slack et Teams. Assistants IA intégrés à vos outils de collaboration pour une productivité accrue."
create_service_subpage "intelligence-artificielle" "externalisation-ia-cle-en-main" \
  "Externalisation IA clé en main. Solution complète d'intelligence artificielle gérée pour votre entreprise."
create_service_subpage "intelligence-artificielle" "modele-hybride-humain-ia" \
  "Modèle hybride humain-IA. Combinaison optimale de l'intelligence humaine et artificielle pour des résultats supérieurs."
create_service_subpage "intelligence-artificielle" "prompt-engineer-offshore" \
  "Prompt engineer offshore. Experts en ingénierie de prompts pour optimiser vos interactions avec les modèles d'IA."
create_service_subpage "intelligence-artificielle" "data-analyst-ia" \
  "Data analyst IA. Analyse de données augmentée par l'intelligence artificielle pour des insights actionnables."
create_service_subpage "intelligence-artificielle" "ai-trainer-data-labeling" \
  "AI trainer et data labeling. Services d'annotation et d'entraînement de données pour améliorer vos modèles IA."
create_service_subpage "intelligence-artificielle" "agent-ia-prospection-commerciale" \
  "Agent IA de prospection commerciale. Automatisez votre prospection B2B avec des agents IA intelligents."
create_service_subpage "intelligence-artificielle" "consultant-ia-transformation-digitale" \
  "Consultant IA et transformation digitale. Accompagnement stratégique pour intégrer l'IA dans votre organisation."
create_service_subpage "intelligence-artificielle" "pack-ia-pme-eti" \
  "Pack IA pour PME et ETI. Solutions d'intelligence artificielle accessibles et adaptées aux moyennes entreprises."
create_service_subpage "intelligence-artificielle" "pourquoi-externaliser-ia" \
  "Pourquoi externaliser l'IA. Avantages de l'externalisation de vos projets d'intelligence artificielle avec Lannkin."
create_service_subpage "intelligence-artificielle" "assistant-ia-vs-employe" \
  "Assistant IA vs employé. Comparaison objective pour comprendre quand et comment intégrer l'IA dans vos équipes."
create_service_subpage "intelligence-artificielle" "cas-usage-ia-rentables" \
  "Cas d'usage IA rentables. Découvrez les applications d'intelligence artificielle les plus rentables pour votre secteur."
create_service_subpage "intelligence-artificielle" "etudes-de-cas-ia" \
  "Études de cas IA. Résultats concrets de nos projets d'intelligence artificielle chez nos clients."
create_service_subpage "intelligence-artificielle" "methodologie-deploiement-ia-30-jours" \
  "Méthodologie de déploiement IA en 30 jours. Notre processus éprouvé pour mettre en place l'IA rapidement dans votre entreprise."
create_service_subpage "intelligence-artificielle" "securite-conformite-ia" \
  "Sécurité et conformité IA. Bonnes pratiques de sécurité et conformité réglementaire pour vos projets d'intelligence artificielle."
create_service_subpage "intelligence-artificielle" "ia-transforme-bpo" \
  "L'IA transforme le BPO. Comment l'intelligence artificielle révolutionne l'externalisation des processus métier."
create_service_subpage "intelligence-artificielle" "voicebot-ia" \
  "Voicebot IA. Assistants vocaux intelligents pour automatiser vos interactions téléphoniques et vocales."
create_service_subpage "intelligence-artificielle" "ia-generative-contenu" \
  "IA générative de contenu. Création de contenu automatisée et assistée par l'intelligence artificielle."
create_service_subpage "intelligence-artificielle" "formation-ia-entreprise" \
  "Formation IA pour entreprise. Formez vos équipes aux outils et stratégies d'intelligence artificielle."

# ==============================================================================
# SITES-IMMERSIFS-3D SUB-PAGES (10)
# ==============================================================================

create_service_subpage "sites-immersifs-3d" "configurateur-3d-produit" \
  "Développement de configurateurs 3D produit. Visualisation interactive et personnalisation 3D en temps réel pour vos clients."
create_service_subpage "sites-immersifs-3d" "configurateur-2d-interactif" \
  "Création de configurateurs 2D interactifs. Personnalisation visuelle de produits en interface web intuitive."
create_service_subpage "sites-immersifs-3d" "site-threejs" \
  "Développement de sites Three.js. Expériences 3D immersives et interactives directement dans le navigateur web."
create_service_subpage "sites-immersifs-3d" "experience-webgl" \
  "Création d'expériences WebGL. Graphismes 3D haute performance pour des sites web impressionnants et engageants."
create_service_subpage "sites-immersifs-3d" "react-three-fiber" \
  "Développement React Three Fiber. Intégration élégante de la 3D dans vos applications React modernes."
create_service_subpage "sites-immersifs-3d" "visite-virtuelle-360" \
  "Création de visites virtuelles 360°. Explorations immersives de vos espaces pour une expérience client unique."
create_service_subpage "sites-immersifs-3d" "animation-3d-web" \
  "Animations 3D pour le web. Animations captivantes et fluides qui donnent vie à votre site internet."
create_service_subpage "sites-immersifs-3d" "showroom-virtuel" \
  "Création de showrooms virtuels. Espaces d'exposition en ligne immersifs pour présenter vos produits en 3D."
create_service_subpage "sites-immersifs-3d" "landing-page-immersive" \
  "Conception de landing pages immersives. Pages d'atterrissage avec effets 3D et animations pour maximiser l'engagement."
create_service_subpage "sites-immersifs-3d" "portfolio-3d-interactif" \
  "Création de portfolios 3D interactifs. Présentez vos travaux de manière unique avec une expérience 3D mémorable."

# ==============================================================================
# NATIVE-ADS SUB-PAGES (6)
# ==============================================================================

create_service_subpage "native-ads" "campagne-taboola" \
  "Campagnes Taboola Ads. Publicité native sur les plus grands sites d'actualités pour générer du trafic qualifié."
create_service_subpage "native-ads" "campagne-outbrain" \
  "Campagnes Outbrain Ads. Distribution de contenu sponsorisé sur un réseau premium de sites éditoriaux."
create_service_subpage "native-ads" "traffic-factory" \
  "Campagnes Traffic Factory. Publicité programmatique sur un large réseau de sites pour un trafic massif et ciblé."
create_service_subpage "native-ads" "revcontent" \
  "Campagnes Revcontent. Recommandations de contenu natif pour engager les audiences à forte intention."
create_service_subpage "native-ads" "installation-tags-natifs" \
  "Installation de tags natifs. Configuration technique des pixels et tags de suivi pour vos campagnes de publicité native."
create_service_subpage "native-ads" "strategie-native-advertising" \
  "Stratégie de native advertising. Plan média complet pour intégrer la publicité native dans votre mix marketing."

# ==============================================================================
# BING-ADS SUB-PAGES (3)
# ==============================================================================

create_service_subpage "bing-ads" "campagne-bing-search" \
  "Campagnes Bing Search Ads. Annonces textuelles sur le moteur de recherche Microsoft pour un trafic complémentaire."
create_service_subpage "bing-ads" "campagne-bing-shopping" \
  "Campagnes Bing Shopping. Annonces produits sur Microsoft Shopping pour diversifier vos ventes e-commerce."
create_service_subpage "bing-ads" "bing-ads-vs-google-ads" \
  "Bing Ads vs Google Ads. Comparaison détaillée pour optimiser votre budget publicitaire entre les deux plateformes."

# ==============================================================================
# AMAZON-ADS SUB-PAGES (3)
# ==============================================================================

create_service_subpage "amazon-ads" "amazon-sponsored-products" \
  "Amazon Sponsored Products. Annonces produits sponsorisées pour augmenter la visibilité et les ventes sur Amazon."
create_service_subpage "amazon-ads" "amazon-sponsored-brands" \
  "Amazon Sponsored Brands. Campagnes de marque sur Amazon pour renforcer votre notoriété et vos ventes."
create_service_subpage "amazon-ads" "strategie-amazon-advertising" \
  "Stratégie Amazon Advertising complète. Plan publicitaire global pour dominer votre catégorie sur Amazon."

# ==============================================================================
# TIKTOK-ADS SUB-PAGE (1)
# ==============================================================================

create_service_subpage "tiktok-ads" "campagne-tiktok" \
  "Création et gestion de campagnes TikTok Ads. Vidéos publicitaires engageantes pour toucher la génération Z et les millennials."

# ==============================================================================
# LINKEDIN-ADS SUB-PAGE (1)
# ==============================================================================

create_service_subpage "linkedin-ads" "campagne-linkedin" \
  "Création et gestion de campagnes LinkedIn Ads. Publicité B2B ciblée par poste, entreprise et secteur d'activité."

# ==============================================================================
# SNAPCHAT-ADS SUB-PAGE (1)
# ==============================================================================

create_service_subpage "snapchat-ads" "campagne-snapchat" \
  "Création et gestion de campagnes Snapchat Ads. Publicité immersive avec filtres AR et stories sponsorisées."

# ==============================================================================
# PINTEREST-ADS SUB-PAGE (1)
# ==============================================================================

create_service_subpage "pinterest-ads" "campagne-pinterest" \
  "Création et gestion de campagnes Pinterest Ads. Épingles sponsorisées pour inspirer et convertir une audience qualifiée."

# ==============================================================================
# DEVELOPPEMENT-SAAS SUB-PAGES (4)
# ==============================================================================

create_service_subpage "developpement-saas" "application-web-saas" \
  "Développement d'applications web SaaS. Architecture cloud scalable et expérience utilisateur optimale."
create_service_subpage "developpement-saas" "application-mobile" \
  "Développement d'applications mobiles. Apps iOS et Android performantes avec React Native ou développement natif."
create_service_subpage "developpement-saas" "mvp-startup" \
  "Développement de MVP pour startups. Prototype fonctionnel rapide pour valider votre idée et lever des fonds."
create_service_subpage "developpement-saas" "api-et-integrations" \
  "Développement d'API et intégrations. APIs RESTful et GraphQL pour connecter vos systèmes et services."

echo "=== Creating Tarifs Pages (10) ==="

# ==============================================================================
# TARIFS (10 hubs)
# ==============================================================================

declare -A TARIF_DESCRIPTIONS=(
  ["conception-web"]="Tarifs de nos services de conception web. Prix transparents pour sites vitrine, WordPress, Shopify, Next.js et refonte."
  ["vibe-coding"]="Tarifs de nos services de vibe coding. Prix pour développement assisté par IA, formations et maintenance."
  ["odoo"]="Tarifs de nos services Odoo. Prix pour intégration ERP, CRM, e-commerce, maintenance et formation Odoo."
  ["google-ads"]="Tarifs de gestion Google Ads. Prix transparents pour la création et l'optimisation de vos campagnes publicitaires Google."
  ["facebook-ads"]="Tarifs de gestion Facebook et Instagram Ads. Prix pour la création et l'optimisation de vos campagnes Meta."
  ["native-ads"]="Tarifs de publicité native. Prix pour campagnes Taboola, Outbrain et autres plateformes de native advertising."
  ["seo"]="Tarifs de nos services SEO. Prix pour audit, référencement local, technique, on-page et stratégie de backlinks."
  ["google-my-business"]="Tarifs de gestion Google My Business. Prix pour optimisation, contenu, collecte d'avis et Google Maps marketing."
  ["graphisme"]="Tarifs de nos services de graphisme. Prix pour création de logo, identité visuelle, brochures et supports print."
  ["reseaux-sociaux"]="Tarifs de gestion des réseaux sociaux. Prix pour community management, création de contenu et stratégie sociale."
)

for tarif_slug in conception-web vibe-coding odoo google-ads facebook-ads native-ads seo google-my-business graphisme reseaux-sociaux; do
  title="Tarifs $(slug_to_title "$tarif_slug")"
  component="Tarifs$(slug_to_pascal "$tarif_slug")"
  desc="${TARIF_DESCRIPTIONS[$tarif_slug]}"
  create_page "${BASE}/(marketing)/tarifs/${tarif_slug}/page.tsx" "$title" "${component}Page" "$desc"
done

echo "=== Creating Secteurs Pages (12) ==="

# ==============================================================================
# SECTEURS (12)
# ==============================================================================

declare -A SECTEUR_DESCRIPTIONS=(
  ["restaurant-restauration"]="Marketing digital et site web pour restaurants et restauration. Solutions adaptées au secteur de la gastronomie."
  ["immobilier"]="Marketing digital et site web pour l'immobilier. Génération de leads et visibilité en ligne pour agents et agences immobilières."
  ["sante-clinique"]="Marketing digital et site web pour le secteur santé et cliniques. Solutions conformes et performantes pour professionnels de santé."
  ["construction-renovation"]="Marketing digital et site web pour la construction et la rénovation. Visibilité locale et génération de leads qualifiés."
  ["commerce-detail"]="Marketing digital et site web pour le commerce de détail. Solutions omnicanal pour augmenter le trafic en magasin et en ligne."
  ["services-professionnels"]="Marketing digital et site web pour les services professionnels. Positionnement d'expert et génération de mandats qualifiés."
  ["beaute-esthetique"]="Marketing digital et site web pour la beauté et l'esthétique. Visibilité locale et réservation en ligne pour salons et spas."
  ["automobile"]="Marketing digital et site web pour le secteur automobile. Génération de leads et visibilité pour concessionnaires et garages."
  ["ecommerce-en-ligne"]="Marketing digital et optimisation pour boutiques e-commerce. SEO, publicité et conversion pour ventes en ligne."
  ["education-formation"]="Marketing digital et site web pour l'éducation et la formation. Recrutement d'étudiants et visibilité institutionnelle."
  ["tourisme-hotellerie"]="Marketing digital et site web pour le tourisme et l'hôtellerie. Réservations directes et visibilité pour établissements touristiques."
  ["juridique-avocats"]="Marketing digital et site web pour avocats et cabinets juridiques. Positionnement d'expert et génération de mandats."
)

for secteur_slug in restaurant-restauration immobilier sante-clinique construction-renovation commerce-detail services-professionnels beaute-esthetique automobile ecommerce-en-ligne education-formation tourisme-hotellerie juridique-avocats; do
  title=$(slug_to_title "$secteur_slug")
  component=$(slug_to_pascal "$secteur_slug")
  desc="${SECTEUR_DESCRIPTIONS[$secteur_slug]}"
  create_page "${BASE}/(marketing)/secteurs/${secteur_slug}/page.tsx" "$title" "${component}Page" "$desc"
done

echo "=== Creating Zone Pages (16) ==="

# ==============================================================================
# ZONES GEOLOCALISEES (16)
# ==============================================================================

declare -A ZONE_DESCRIPTIONS=(
  ["agence-web-laval"]="Agence web à Laval. Services de développement web, design et solutions digitales pour entreprises lavalloises."
  ["agence-marketing-laval"]="Agence marketing digital à Laval. Stratégies complètes de marketing en ligne pour entreprises de Laval et environs."
  ["agence-seo-laval"]="Agence SEO à Laval. Référencement naturel et visibilité en ligne pour entreprises de Laval, Québec."
  ["agence-google-ads-laval"]="Agence Google Ads à Laval. Gestion experte de campagnes publicitaires Google pour entreprises lavalloises."
  ["agence-web-montreal"]="Agence web à Montréal. Services de développement web et marketing digital pour entreprises montréalaises."
  ["agence-marketing-montreal"]="Agence marketing digital à Montréal. Stratégies de croissance en ligne pour entreprises de Montréal."
  ["agence-seo-montreal"]="Agence SEO à Montréal. Référencement naturel et optimisation pour moteurs de recherche pour entreprises montréalaises."
  ["agence-web-longueuil"]="Agence web à Longueuil. Développement web et marketing digital pour entreprises de la Rive-Sud."
  ["agence-web-rive-nord"]="Agence web Rive-Nord. Services web et marketing digital pour entreprises de la Rive-Nord de Montréal."
  ["agence-web-rive-sud"]="Agence web Rive-Sud. Développement web et marketing digital pour entreprises de la Rive-Sud de Montréal."
  ["agence-web-quebec"]="Agence web à Québec. Services de développement web et marketing digital pour entreprises de la ville de Québec."
  ["agence-web-gatineau"]="Agence web à Gatineau. Développement web et marketing digital pour entreprises de l'Outaouais."
  ["agence-web-sherbrooke"]="Agence web à Sherbrooke. Services web et marketing digital pour entreprises de l'Estrie."
  ["agence-web-trois-rivieres"]="Agence web à Trois-Rivières. Développement web et marketing digital pour entreprises de la Mauricie."
  ["agence-web-terrebonne"]="Agence web à Terrebonne. Services web et marketing digital pour entreprises de Terrebonne et Lanaudière."
  ["agence-traffic-laval"]="Agence de traffic management à Laval. Acquisition de trafic qualifié et gestion de campagnes publicitaires."
)

for zone_slug in agence-web-laval agence-marketing-laval agence-seo-laval agence-google-ads-laval agence-web-montreal agence-marketing-montreal agence-seo-montreal agence-web-longueuil agence-web-rive-nord agence-web-rive-sud agence-web-quebec agence-web-gatineau agence-web-sherbrooke agence-web-trois-rivieres agence-web-terrebonne agence-traffic-laval; do
  title=$(slug_to_title "$zone_slug")
  component=$(slug_to_pascal "$zone_slug")
  desc="${ZONE_DESCRIPTIONS[$zone_slug]}"
  create_page "${BASE}/(marketing)/zone/${zone_slug}/page.tsx" "$title" "${component}Page" "$desc"
done

echo "=== Creating Blog Pages ==="

# ==============================================================================
# BLOG HUB
# ==============================================================================

create_page "${BASE}/(blog)/blog/page.tsx" \
  "Blog" "BlogPage" \
  "Blog Lannkin : articles, guides et conseils en marketing digital, SEO, développement web, IA et publicité en ligne."

# ==============================================================================
# BLOG CATEGORIES (12)
# ==============================================================================

declare -A BLOG_DESCRIPTIONS=(
  ["google-ads"]="Articles et guides sur Google Ads. Conseils, stratégies et bonnes pratiques pour optimiser vos campagnes publicitaires Google."
  ["facebook-ads"]="Articles et guides sur Facebook et Instagram Ads. Stratégies et astuces pour réussir vos campagnes Meta."
  ["seo"]="Articles et guides SEO. Techniques, stratégies et actualités du référencement naturel pour améliorer votre visibilité."
  ["conception-web"]="Articles et guides sur la conception web. Tendances, bonnes pratiques et technologies pour créer des sites performants."
  ["intelligence-artificielle"]="Articles et guides sur l'intelligence artificielle. Actualités, cas d'usage et innovations IA pour les entreprises."
  ["ecommerce"]="Articles et guides e-commerce. Stratégies de vente en ligne, optimisation et tendances du commerce électronique."
  ["reseaux-sociaux"]="Articles et guides sur les réseaux sociaux. Stratégies de community management et tendances social media."
  ["google-my-business"]="Articles et guides Google My Business. Optimisation locale, avis clients et stratégies de visibilité Google Maps."
  ["graphisme"]="Articles et guides en graphisme. Tendances design, branding et conseils pour une identité visuelle impactante."
  ["marketing-digital"]="Articles et guides en marketing digital. Stratégies, tendances et bonnes pratiques pour votre croissance en ligne."
  ["vibe-coding"]="Articles et guides sur le vibe coding. Actualités, tutoriels et outils de développement assisté par l'IA."
  ["odoo"]="Articles et guides sur Odoo. Tutoriels, bonnes pratiques et actualités de l'ERP open source Odoo."
)

for blog_slug in google-ads facebook-ads seo conception-web intelligence-artificielle ecommerce reseaux-sociaux google-my-business graphisme marketing-digital vibe-coding odoo; do
  title="Blog $(slug_to_title "$blog_slug")"
  component="Blog$(slug_to_pascal "$blog_slug")"
  desc="${BLOG_DESCRIPTIONS[$blog_slug]}"
  create_page "${BASE}/(blog)/blog/${blog_slug}/page.tsx" "$title" "${component}Page" "$desc"
done

# ==============================================================================
# BLOG [SLUG] DYNAMIC PAGE
# ==============================================================================

mkdir -p "${BASE}/(blog)/blog/[slug]"
cat > "${BASE}/(blog)/blog/[slug]/page.tsx" << 'ENDOFFILE'
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // TODO: Fetch all blog post slugs from CMS or data source
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Blog Lannkin`,
    description: `Lisez notre article sur ${title}. Conseils et expertise en marketing digital par Lannkin.`,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
ENDOFFILE

echo "=== Creating Legal Pages (3) ==="

# ==============================================================================
# LEGAL PAGES (3)
# ==============================================================================

create_page "${BASE}/(legal)/politique-de-confidentialite/page.tsx" \
  "Politique De Confidentialité" "PolitiqueDeConfidentialitePage" \
  "Politique de confidentialité de Lannkin. Découvrez comment nous protégeons vos données personnelles."

create_page "${BASE}/(legal)/conditions-generales/page.tsx" \
  "Conditions Générales" "ConditionsGeneralesPage" \
  "Conditions générales d'utilisation et de vente de Lannkin. Termes et conditions de nos services."

create_page "${BASE}/(legal)/mentions-legales/page.tsx" \
  "Mentions Légales" "MentionsLegalesPage" \
  "Mentions légales de Lannkin. Informations juridiques, éditeur et hébergeur du site lannkin.ca."

echo ""
echo "=== ALL PAGES CREATED SUCCESSFULLY ==="
echo ""

# Count all created files
TOTAL=$(find "${BASE}" -name "page.tsx" | wc -l | tr -d ' ')
echo "Total page.tsx files created: ${TOTAL}"
