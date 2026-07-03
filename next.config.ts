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
        destination: "/services/seo/optimisation-seo/",
        permanent: true,
      },
      {
        source: "/agence-seo",
        destination: "/services/seo/optimisation-seo/",
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
