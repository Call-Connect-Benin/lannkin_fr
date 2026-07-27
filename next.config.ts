import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  // Autorise l'accès au serveur de dev via un tunnel (Cloudflare, etc.)
  allowedDevOrigins: ["*.trycloudflare.com", "*.cfargotunnel.com"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // ─── Anciennes pages de services (WordPress) ───────────────────────────
      {
        source: "/agence-web/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-web",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-google-ads/",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/agence-google-ads",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/agence-seo/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/agence-seo",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/agence-facebook-ads/",
        destination: "/services/reseaux-sociaux/gestion-facebook-ads/",
        permanent: true,
      },
      {
        source: "/agence-facebook-ads",
        destination: "/services/reseaux-sociaux/gestion-facebook-ads/",
        permanent: true,
      },
      // ─── Anciennes pages tarifs / Google Ads WordPress ─────────────────────
      {
        source: "/google-ads/",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/google-ads",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/nos-tarifs/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/nos-tarifs",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/nos-tarifs-v2/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/nos-tarifs-v2",
        destination: "/tarifs/",
        permanent: true,
      },
      // ─── Ancienne page graphisme ────────────────────────────────────────────
      {
        source: "/graphisme/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/graphisme",
        destination: "/services/",
        permanent: true,
      },
      // ─── Ancienne page formation ────────────────────────────────────────────
      {
        source: "/formation/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/formation",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/formalion/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/formalion",
        destination: "/services/",
        permanent: true,
      },
      // ─── Pages WordPress identifiées en 404 ────────────────────────────────
      // Ancien article de blog
      {
        source: "/pourquoi-une-compagnie-doit-avoir-un-site-web/",
        destination: "/blog/conception-web/",
        permanent: true,
      },
      {
        source: "/pourquoi-une-compagnie-doit-avoir-un-site-web",
        destination: "/blog/conception-web/",
        permanent: true,
      },
      // Ancien pack/offre → tarifs
      {
        source: "/pack-smart-business/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/pack-smart-business",
        destination: "/tarifs/",
        permanent: true,
      },
      // Ancienne page de devis
      {
        source: "/demande-de-soumission/",
        destination: "/devis-gratuit/",
        permanent: true,
      },
      {
        source: "/demande-de-soumission",
        destination: "/devis-gratuit/",
        permanent: true,
      },
      // Ancienne page de test WordPress
      {
        source: "/new-home-page/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/new-home-page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/new-home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/new-home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/realisations/ecommerce-local/",
        destination: "/realisations/ecommerce/",
        permanent: true,
      },
      {
        source: "/realisations/ecommerce-local",
        destination: "/realisations/ecommerce/",
        permanent: true,
      },
      {
        source: "/maitriser-les-campagnes-demande-gen-de-google-ads-votre-guide-ultime/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/maitriser-les-campagnes-demande-gen-de-google-ads-votre-guide-ultime",
        destination: "/blog/",
        permanent: true,
      },
      // Ancienne page home WordPress
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // ─── Anciennes pages de service WordPress ───────────────────────────────
      {
        source: "/conception-de-site-web/",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/conception-de-site-web",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/service-google-ads/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-google-ads",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-seo/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-seo",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-reseaux-sociaux/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-reseaux-sociaux",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-facebook-ads/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/service-facebook-ads",
        destination: "/services/",
        permanent: true,
      },
      // ─── Portfolio / réalisations ────────────────────────────────────────────
      {
        source: "/portfolio/",
        destination: "/realisations/",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/realisations/",
        permanent: true,
      },
      // ─── Souscription / inscription ──────────────────────────────────────────
      {
        source: "/souscription/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/souscription",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/inscription/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/inscription",
        destination: "/tarifs/",
        permanent: true,
      },
      // ─── Landing pages / ressources téléchargeables ──────────────────────────
      {
        source: "/lp-liste-de-100-produits-gagnant-en-dropshipping/",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/lp-liste-de-100-produits-gagnant-en-dropshipping",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/lp-liste-de-100-produits-gagnant-en-dropshipping-v2/",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/lp-liste-de-100-produits-gagnant-en-dropshipping-v2",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/lp-:path(.*)",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      // ─── Redirections WP utiles vers pages Next.js existantes ────────────────
      {
        source: "/contact-page/",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/contact-page",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/faq-page-lannkin/",
        destination: "/faq/",
        permanent: true,
      },
      {
        source: "/faq-page-lannkin",
        destination: "/faq/",
        permanent: true,
      },
      {
        source: "/formulaire-de-conception/",
        destination: "/formulaire-de-conception/",
        permanent: true,
      },
      {
        source: "/formulaire-de-conception",
        destination: "/formulaire-de-conception/",
        permanent: true,
      },
      {
        source: "/home-page-new/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-page-new",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cms/wordpress/",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/cms/wordpress",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/cms/shopify/",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/cms/shopify",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/cms/:path(.*)",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/google-ads/:path(.*)",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/e-landing-page/:path(.*)",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/e-landing-page",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/landing-page/:path(.*)",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/landing-page",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      {
        source: "/homepage/:path(.*)",
        destination: "/",
        permanent: true,
      },
      {
        source: "/homepage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/agence-offshore/:path(.*)",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-offshore",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/centre-dappel-offshore/:path(.*)",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/centre-dappel-offshore",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-google-ads-facebook-ads/:path(.*)",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-google-ads-facebook-ads",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-instagram-ads/:path(.*)",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-instagram-ads",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-whatsapp-ads/:path(.*)",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-whatsapp-ads",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/campagne-shopping/:path(.*)",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/campagne-shopping",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/cookie-policy-eu/:path(.*)",
        destination: "/politique-de-confidentialite/",
        permanent: true,
      },
      {
        source: "/cookie-policy-eu",
        destination: "/politique-de-confidentialite/",
        permanent: true,
      },
      {
        source: "/acheter-un-nom-de-domaine/:path(.*)",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/acheter-un-nom-de-domaine",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/developpement-web/:path(.*)",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/developpement-web",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/developpement-mobile/:path(.*)",
        destination: "/services/developpement-saas/",
        permanent: true,
      },
      {
        source: "/language/:path(.*)",
        destination: "/services/developpement-saas/",
        permanent: true,
      },
      {
        source: "/expertises-logiciels/:path(.*)",
        destination: "/services/developpement-saas/",
        permanent: true,
      },
      {
        source: "/expertises-logiciels",
        destination: "/services/developpement-saas/",
        permanent: true,
      },
      {
        source: "/ux-design/:path(.*)",
        destination: "/services/graphisme/",
        permanent: true,
      },
      {
        source: "/ux-design",
        destination: "/services/graphisme/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-:path(.*)",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-:path(.*)",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/feed/:path(.*)",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/facebook-ads/:path(.*)",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/native-ads/:path(.*)",
        destination: "/services/native-ads/",
        permanent: true,
      },
      {
        source: "/agence-tik-tok-ads/",
        destination: "/services/tiktok-ads/",
        permanent: true,
      },
      {
        source: "/agence-tik-tok-ads",
        destination: "/services/tiktok-ads/",
        permanent: true,
      },
      {
        source: "/agence-bing-ads/",
        destination: "/services/bing-ads/",
        permanent: true,
      },
      {
        source: "/agence-bing-ads",
        destination: "/services/bing-ads/",
        permanent: true,
      },
      {
        source: "/agence-propellerads/",
        destination: "/services/native-ads/",
        permanent: true,
      },
      {
        source: "/agence-propellerads",
        destination: "/services/native-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-native-ads/",
        destination: "/services/native-ads/",
        permanent: true,
      },
      {
        source: "/agence-specialisee-native-ads",
        destination: "/services/native-ads/",
        permanent: true,
      },
      {
        source: "/facebook-ads/instagram-ads/",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/facebook-ads/instagram-ads",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/facebook-ads/whatsapp-ads/",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/facebook-ads/whatsapp-ads",
        destination: "/services/facebook-ads/",
        permanent: true,
      },
      {
        source: "/google-ads/campagne-display/",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/google-ads/campagne-display",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/google-ads/campagne-search/",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/google-ads/campagne-search",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/formation-google-ads-paris/",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/formation-google-ads-paris",
        destination: "/services/google-ads/",
        permanent: true,
      },
      {
        source: "/audit-seo-complet/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/audit-seo-complet",
        destination: "/services/seo/",
        permanent: true,
      },
      // ─── Anciens articles de blog WordPress ──────────────────────────────────
      {
        source: "/lessentiel-a-savoir-de-la-loi-25-lannkin/",
        destination: "/blog/marketing-digital/",
        permanent: true,
      },
      {
        source: "/lessentiel-a-savoir-de-la-loi-25-lannkin",
        destination: "/blog/marketing-digital/",
        permanent: true,
      },
      {
        source: "/30-astuces-pour-exploser-votre-rentabilite-sur-google-ads/",
        destination: "/blog/google-ads/",
        permanent: true,
      },
      {
        source: "/30-astuces-pour-exploser-votre-rentabilite-sur-google-ads",
        destination: "/blog/google-ads/",
        permanent: true,
      },
      {
        source: "/maximisez-votre-visibilite-grace-au-seo/",
        destination: "/blog/seo/",
        permanent: true,
      },
      {
        source: "/maximisez-votre-visibilite-grace-au-seo",
        destination: "/blog/seo/",
        permanent: true,
      },
      {
        source: "/comment-generer-des-leads-qualifies-:path(.*)",
        destination: "/blog/marketing-digital/",
        permanent: true,
      },
      {
        source: "/comment-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/les-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/la-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/le-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },

      // ─── Anciennes pages légales WordPress ──────────────────────────────────
      {
        source: "/nos-conditions-generales-de-vente/",
        destination: "/conditions-generales/",
        permanent: true,
      },
      {
        source: "/nos-conditions-generales-de-vente",
        destination: "/conditions-generales/",
        permanent: true,
      },
      // ─── Anciens articles blog (patterns génériques) ────────────────────────
      {
        source: "/comprendre-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/guide-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/creer-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/optimiser-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/pourquoi-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/tutoriel-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/astuces-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/meilleur-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/meilleurs-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      // ─── Catégories WordPress → nouvelles catégories blog ──────────────────
      {
        source: "/categorie/seo/",
        destination: "/blog/seo/",
        permanent: true,
      },
      {
        source: "/categorie/google-ads/",
        destination: "/blog/google-ads/",
        permanent: true,
      },
      {
        source: "/categorie/facebook-ads/",
        destination: "/blog/facebook-ads/",
        permanent: true,
      },
      {
        source: "/categorie/reseaux-sociaux/",
        destination: "/blog/reseaux-sociaux/",
        permanent: true,
      },
      {
        source: "/categorie/conception-web/",
        destination: "/blog/conception-web/",
        permanent: true,
      },
      {
        source: "/categorie/marketing-digital/",
        destination: "/blog/marketing-digital/",
        permanent: true,
      },
      {
        source: "/categorie/google-my-business/",
        destination: "/blog/google-my-business/",
        permanent: true,
      },
      {
        source: "/categorie/intelligence-artificielle/",
        destination: "/blog/intelligence-artificielle/",
        permanent: true,
      },
      // Toutes les autres catégories WordPress → blog général
      // Note: :slug dans Next.js ne capture pas les underscores correctement dans certains cas
      // On utilise un pattern basé sur une regex pour couvrir tous les caractères (tirets, underscores, etc.)
      {
        source: "/categorie/:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      // ─── Patterns WordPress génériques ─────────────────────────────────────
      // Tags WordPress
      {
        source: "/tag/:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      // Auteurs WordPress
      {
        source: "/author/:path(.*)",
        destination: "/",
        permanent: true,
      },
      {
        source: "/auteur/:path(.*)",
        destination: "/",
        permanent: true,
      },
      // Feed RSS WordPress
      {
        source: "/feed/",
        destination: "/",
        permanent: true,
      },
      // Pages de pagination WordPress
      {
        source: "/page/:number/",
        destination: "/blog/",
        permanent: true,
      },
      // Archives WordPress par date
      {
        source: "/:year(\\d{4})/:month(\\d{2})/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/",
        destination: "/blog/",
        permanent: true,
      },
      // ─── Audit 2026-07-24 : URLs live lannkin.com (WordPress) sans redirection ─
      // Sous-pages SEO (équivalents réels sur le nouveau site)
      {
        source: "/referencement-naturel/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/referencement-naturelseo/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/referencement-naturel/audit-seo/",
        destination: "/services/seo/audit-seo/",
        permanent: true,
      },
      {
        source: "/referencement-local/",
        destination: "/services/seo/referencement-local/",
        permanent: true,
      },
      {
        source: "/referencement-naturel/referencement-local/",
        destination: "/services/seo/referencement-local/",
        permanent: true,
      },
      {
        source: "/referencement-naturel/maillage-interne/",
        destination: "/services/seo/optimisation-maillage-interne/",
        permanent: true,
      },
      {
        source: "/referencement-naturel/redaction-darticle/",
        destination: "/services/seo/seo-on-page/",
        permanent: true,
      },
      {
        source: "/referencement-naturel/redaction-darticle-optimisee-seo/",
        destination: "/services/seo/seo-on-page/",
        permanent: true,
      },
      {
        source: "/referencement-naturel/strategie-backlink/",
        destination: "/services/seo/strategie-backlinks/",
        permanent: true,
      },
      {
        source: "/strategie-de-backlinks/",
        destination: "/services/seo/strategie-backlinks/",
        permanent: true,
      },
      // Pages "plateforme" / verticales SEO sans équivalent dédié → hub SEO
      {
        source: "/referencement-doctolib/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/referencement-doctolib-2/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/referencement-plateforme/",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/referencement-uber-eats-deliveroo/",
        destination: "/services/seo/",
        permanent: true,
      },
      // Vidéo / hébergement
      {
        source: "/creation-de-videos/",
        destination: "/services/montage-video/",
        permanent: true,
      },
      {
        source: "/creation-de-videos-v2/",
        destination: "/services/montage-video/",
        permanent: true,
      },
      {
        source: "/hebergement/",
        destination: "/services/conception-web/",
        permanent: true,
      },
      {
        source: "/hebergement-web/",
        destination: "/services/conception-web/",
        permanent: true,
      },
      // Ressource gratuite Google Ads → hub ressources
      {
        source: "/ressource-gratuite-google-ads/",
        destination: "/ressources-gratuites/",
        permanent: true,
      },
      // Forfaits WordPress → tarifs
      {
        source: "/basic-package/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/pro-package/",
        destination: "/tarifs/",
        permanent: true,
      },
      {
        source: "/unlimited-package/",
        destination: "/tarifs/",
        permanent: true,
      },
      // Pages WooCommerce (boutique désactivée sur le nouveau site)
      {
        source: "/cart/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/checkout/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/my-account/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shop/",
        destination: "/",
        permanent: true,
      },
      // Doublons / brouillons / pages de test WordPress
      {
        source: "/sample-page/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test-y/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/qr-code-with-omni-logo/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/acheter-un-nom-de-domaine-dupliquer-155/",
        destination: "/acheter-un-nom-de-domaine/",
        permanent: true,
      },
      {
        source: "/liste-de-100-produits-gagnant-en-dropshipping222/",
        destination: "/blog/",
        permanent: true,
      },
      // Doublon de la page recréée /kap-numerik/
      {
        source: "/kap-numerik-jusqua-3-200e-daides-pour-votre-projet-v2/",
        destination: "/kap-numerik/",
        permanent: true,
      },
      // Pages mortes sur lannkin.com (erreur 520 / quasi-vides) : rien à recréer
      {
        source: "/osint/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/lp/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pd-:path(.*)",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/formulaire-de-conception-fr/",
        destination: "/formulaire-de-conception/",
        permanent: true,
      },
      {
        source: "/marketing-digital/",
        destination: "/blog/marketing-digital/",
        permanent: true,
      },
      // Anciens articles de blog WordPress sans équivalent direct → hub blog
      {
        source: "/%f0%9f%92%b0-comment-gagner-de-largent-sur-instagram-le-guide-complet-pour-2025/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/%f0%9f%92%b8-comment-gagner-de-largent-sur-tiktok-guide-complet-2025/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/5-astuces-incontournables-pour-multiplier-par-5-vos-resultats-avec-google-ads/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/augmentez-vos-ventes-shopify-guide-complet-pour-ajouter-afficher-et-collecter-des-avis-clients-avec-trustoo/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/avantages-et-inconvenients-dun-site-wix-guide-complet-pour-choisir-la-bonne-solution-web/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/bonnes-pratiques/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/boostez-vos-campagnes-avec-ces-4-visuels-qui-fonctionnent-en-renovation-energetique/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/google-annonce-local-service-la-solution-pour-les-petites-entreprises-locales-pour-trouver-des-clients-rapidement/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/lavantage-de-laisser-une-agence-web-soccuper-de-votre-site-web-ou-de-votre-fiche-google/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/limportance-de-lanalyse-de-donnees-pour-votre-site-web-2/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/limportance-dune-landing-page/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/liste-de-100-produits-gagnant-en-dropshipping/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/maillage-interne-optimise/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/mise-en-place-du-suivi-gclid-avec-poas-integration-de-wpforms-et-google-sheets/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/on-a-teste-100-campagnes-voici-la-checklist-ultime-pour-cartonner-sur-facebook-ads-en-2025/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/parfait-voici-un-article-structure-denviron-2000-mots-sur-comment-citer-une-video-youtube-selon-les-normes-apa-avec-parties-sous-parties-liens-internes-et-externes-une-mini-faq/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/produits-invisibles-sur-shopify-4-etapes-indispensables-pour-resoudre-ce-probleme/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/top-15-des-meilleures-agences-seo-en-france/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/top-5-des-erreurs-de-montage-sur-capcut-qui-font-fuir-vos-clients-et-comment-on-les-corrige-chez-lannkin-pour-booster-vos-resultats/",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
