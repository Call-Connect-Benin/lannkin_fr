import type { Metadata } from "next";

import { PRICING_ODOO } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Odoo ERP & CRM | Ekolink",
  description:
    "Intégration Odoo dès 199€/mois. Site web, ERP, CRM et e-commerce Odoo. Migration de données et formation incluses.",
};

export default function TarifsOdooPage() {
  return (
    <PricingPageContent
      title="Tarifs Odoo"
      subtitle="De l'implantation ERP complète au simple site web Odoo, nos forfaits couvrent tous vos besoins de gestion d'entreprise. Migration de données et formation incluses."
      plans={PRICING_ODOO}
      serviceHref="/services/odoo/"
      parallaxImage="/images/rendu3D/rendu3d-cubes-overhead.webp"
    />
  );
}
