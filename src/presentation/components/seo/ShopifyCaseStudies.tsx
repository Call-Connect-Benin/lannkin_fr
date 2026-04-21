"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  name: string;
  slug: string;
  description: string;
  result: string;
  image: string;
  externalUrl: string;
  tags: string[];
}

const SHOPIFY_CASE_STUDIES: CaseStudy[] = [
  {
    name: "Rotho",
    slug: "rotho-ecommerce-allemagne",
    description:
      "Accompagnement e-commerce et stratégie digitale pour Rotho, grande marque de produits ménagers en Allemagne.",
    result: "Croissance e-commerce DACH",
    image: "/images/portfolio/rotho-ecommerce-allemagne.webp",
    externalUrl: "https://rotho.com/",
    tags: ["Shopify", "Google Shopping", "SEO"],
  },
  {
    name: "Etilik Wear",
    slug: "etilik-wear",
    description:
      "E-commerce Shopify accompagné pour dépasser les 30 000 CAD/mois de chiffre d'affaires grâce à une stratégie marketing complète.",
    result: "+30 000 CAD/mois",
    image: "/images/services/conception de site web/shopify/etilik.png",
    externalUrl: "https://www.etilik-wear.com/",
    tags: ["Shopify", "Facebook Ads", "Conversion"],
  },
  {
    name: "Khaven Swim",
    slug: "khaven-swim",
    description:
      "Marque de maillots de bain ayant généré plus de 150 000 $ CAD grâce à notre stratégie marketing e-commerce en 2023.",
    result: "+150 000 $ CAD en 2023",
    image: "/images/services/conception de site web/shopify/khaven.png",
    externalUrl: "https://khaven.com/",
    tags: ["Shopify", "Marketing", "Facebook Ads"],
  },
  {
    name: "Kosmopellis",
    slug: "kosmopellis",
    description:
      "Boutique Shopify créée et optimisée à chaque étage : upsells, bundles au checkout, landing pages produit haute conversion.",
    result: "Conversion optimisée à 360°",
    image: "/images/services/conception de site web/shopify/kosmopellis.png",
    externalUrl: "https://kosmopellis.fr/",
    tags: ["Shopify", "Upsell", "Landing Pages"],
  },
  {
    name: "Bio Center",
    slug: "biocenter",
    description:
      "Marketplace e-commerce française de produits bio. Accompagnement SEO et Google Ads sur un catalogue volumineux.",
    result: "SEO & Google Ads à grande échelle",
    image: "/images/services/conception de site web/shopify/biocenter.png",
    externalUrl: "https://biocenter.fr/",
    tags: ["E-commerce", "SEO", "Google Ads"],
  },
  {
    name: "K-Way Canada",
    slug: "kway-canada",
    description:
      "Accompagnement e-commerce et SEO pour K-Way Canada, la marque iconique de vêtements outdoor.",
    result: "SEO e-commerce optimisé",
    image: "/images/services/conception de site web/shopify/kway.png",
    externalUrl: "https://kwaycanada.com/",
    tags: ["Shopify", "SEO", "E-commerce"],
  },
  {
    name: "Iron Meals",
    slug: "ironmeals",
    description:
      "Refonte de la boutique Shopify et gestion publicitaire pour un e-commerce de repas en abonnement pour sportifs.",
    result: "Refonte Shopify + Pub",
    image: "/images/services/conception de site web/shopify/ironmeals.png",
    externalUrl: "https://ironmeals.ca/",
    tags: ["Shopify", "Refonte", "Facebook Ads"],
  },
  {
    name: "Montecarlo Designs",
    slug: "montecarlo-designs",
    description:
      "E-commerce de meubles de luxe à Monaco. Modélisation 3D Blender de toutes les tables en marbre et intégration WebGL/GLB.",
    result: "3D + E-commerce luxe",
    image: "/images/services/conception de site web/shopify/montecarlo.png",
    externalUrl: "https://montecarlo-designs.com/",
    tags: ["Shopify", "3D Blender", "WebGL"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const, delay: i * 0.08 },
  }),
};

export function ShopifyCaseStudies() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Études de cas e-commerce
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
            Des boutiques Shopify qui génèrent des résultats
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Découvrez comment notre agence web Shopify accompagne des e-commerces au Canada et à
            l&apos;international pour atteindre leurs objectifs de vente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SHOPIFY_CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(45,45,45,0.10)] bg-surface/50 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={study.image}
                  alt={`Projet Shopify ${study.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Result badge */}
                <div className="absolute bottom-3 left-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-on-accent">
                  {study.result}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{ borderColor: "rgba(73,143,109,0.25)", color: "#2d2d2d" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#2d2d2d]">{study.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-3">
                  {study.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    href={`/realisations/${study.slug}/`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    Voir le projet
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={study.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-[#2d2d2d]"
                  >
                    Visiter
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/realisations/ecommerce/"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/60 bg-transparent px-6 py-3 text-base font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
          >
            Voir tous nos projets e-commerce
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
