import type { Metadata } from "next";

import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Lannkin",
  description:
    "Conditions générales de vente de Lannkin. Modalités contractuelles, prix, facturation, livraison et responsabilités. NEQ 2279015061.",
};

export default function ConditionsGeneralesPage() {
  return (
    <main className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Conditions générales de vente
          </h1>
          <p className="mt-4 text-sm text-muted">Dernière mise à jour : janvier 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Préambule — Définition des termes
              </h2>
              <p>
                Lannkin est une entreprise immatriculée au registre des entreprises sous le numéro
                NEQ 2279015061. Lannkin accompagne un large panel de clients professionnels dans
                leur transformation digitale en leur proposant des services de conception web,
                marketing digital, SEO et publicité en ligne.
              </p>
              <p className="mt-3">
                Dans les présentes conditions générales de vente, la société Lannkin est dénommée
                &laquo;&nbsp;Lannkin&nbsp;&raquo; et le client ou le prospect &laquo;&nbsp;le
                CLIENT&nbsp;&raquo;.
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong className="text-white">&laquo; Prestation &raquo;</strong> — désigne
                  l&apos;objet de la vente effectuée par Lannkin : conseil, mise à disposition
                  d&apos;un savoir-faire, conception de site web, développement d&apos;application,
                  services marketing, etc.
                </li>
                <li>
                  <strong className="text-white">&laquo; Site Web ou Internet &raquo;</strong> —
                  désigne l&apos;ensemble de pages composées de textes, d&apos;images et
                  d&apos;éléments multimédia, accessible par une adresse URL.
                </li>
                <li>
                  <strong className="text-white">&laquo; Cahier des charges &raquo;</strong> —
                  désigne le document décrivant le contenu de la prestation attendue et ses
                  contraintes techniques.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 1 — Identification de l&apos;entreprise
              </h2>
              <div className="rounded-xl border border-white/[0.06] bg-surface-light p-5 space-y-1">
                <p><strong className="text-white">LANNKIN</strong></p>
                <p>NEQ : 2279015061</p>
                <p>8825 av. Gravel, Laval (Québec) H7A 1P2, Canada</p>
                <p>
                  <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                    info@lannkin.ca
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 2 — Objet
              </h2>
              <p>
                Les présentes Conditions Générales ont pour objet de régir les relations
                contractuelles entre Lannkin et le CLIENT et définir l&apos;étendue des prestations
                proposées par Lannkin. Elles s&apos;appliquent à toute prestation effectuée par
                Lannkin dans les pays du monde entier.
              </p>
              <p className="mt-3">
                Le fait pour une personne physique ou morale de commander un service ou produit de
                la société Lannkin emporte acceptation pleine et entière des présentes conditions
                générales de vente.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 3 — Formation et conditions d&apos;exécution du contrat
              </h2>
              <p>
                L&apos;obligation respective de chaque partie naît à partir du moment où le CLIENT
                valide sa commande via la signature d&apos;un bon de commande ou une validation
                électronique. La signature d&apos;un bon de commande emporte l&apos;acceptation des
                présentes Conditions Générales.
              </p>
              <p className="mt-3">
                Lannkin peut décider de refuser, d&apos;interrompre ou de modifier la prestation
                sans indemnités au profit du CLIENT dès l&apos;instant où le CLIENT ne
                s&apos;acquitte pas des sommes facturées, ou lorsque Lannkin constate tout acte de
                piratage ou fraude imputable au CLIENT.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 4 — Prix, facturations et délais
              </h2>
              <p>
                Le prix de la prestation est ferme. Il est exprimé en dollars canadiens, taxes en
                vigueur incluses. Toute commande est accompagnée d&apos;un accord décrivant le
                contenu du produit vendu. La réalisation de la commande démarre dès la signature
                des conditions générales de vente et du devis.
              </p>
              <p className="mt-3">
                En cas de défaut de paiement, des frais de retard seront applicables conformément à
                la loi canadienne. En cas de non-paiement persistant, l&apos;ensemble des services
                vendus pourra être suspendu.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 5 — Livraison de la prestation
              </h2>
              <p>
                Sauf stipulation expresse contraire, la livraison des commandes sera effectuée en
                ligne. Le Client sera informé de la livraison de sa commande par email. Les délais
                de livraison sont donnés à titre indicatif.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 6 — Obligations et responsabilités de Lannkin
              </h2>
              <p>
                Lannkin s&apos;engage à apporter tout le soin et la diligence nécessaires à la
                fourniture d&apos;un service de qualité conformément aux usages de la profession.
                Lannkin ne répond que d&apos;une obligation de moyens.
              </p>
              <p className="mt-3">
                Lannkin ne pourra être tenu responsable en cas de faute ou négligence du CLIENT,
                d&apos;interruption de l&apos;hébergement, ou de dysfonctionnement résultant
                d&apos;une mauvaise utilisation par le CLIENT.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 7 — Droits et obligations des clients
              </h2>
              <p>
                Les coordonnées communiquées par le client doivent être exactes. Après la signature
                d&apos;un bon de commande, le client doit fournir les documents et informations
                indispensables à l&apos;exécution de la commande. Les identifiants d&apos;accès au
                site ne peuvent être prêtés, concédés ou cédés à des tiers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 8 — Propriétés intellectuelles
              </h2>
              <p>
                Tout élément fourni par le CLIENT reste sa seule propriété. L&apos;ensemble des
                créations de Lannkin reste sa propriété exclusive. Lannkin se réserve le droit de
                revendre ou d&apos;utiliser tout ou partie de ses créations. Les droits
                d&apos;exploitation ne sont cédés au CLIENT qu&apos;à titre non exclusif.
              </p>
              <p className="mt-3">
                Lannkin concède au client un droit d&apos;utilisation du logiciel personnalisé
                d&apos;une durée non limitée dans le temps pour la gestion de son site web. Le
                CLIENT n&apos;a pas le droit de revendre ou céder la licence d&apos;utilisation
                sans accord de Lannkin.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 9 — Réserve de propriété
              </h2>
              <p>
                Lannkin conserve l&apos;entière propriété de la prestation jusqu&apos;au paiement
                effectif de l&apos;intégralité du prix. Dans le cas où une prestation fait
                l&apos;objet d&apos;une interruption définitive, Lannkin a toute latitude de vendre,
                de détruire, ou de ne pas renouveler tout actif inclus dans la prestation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 10 — Utilisation des références
              </h2>
              <p>
                Le CLIENT autorise Lannkin à utiliser son nom et à mentionner les prestations
                réalisées pour son compte à des fins commerciales. Lannkin se réserve le droit de
                faire mention de sa qualité de créateur du site Internet.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 11 — Confidentialité
              </h2>
              <p>
                Lannkin et le CLIENT s&apos;engagent à conserver confidentiels les informations et
                documents concernant l&apos;autre partie auxquels les parties auraient pu avoir
                accès au cours de la prestation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Article 12 — Cas de force majeure
              </h2>
              <p>
                La société Lannkin n&apos;encourt aucune responsabilité en cas de non-exécution ou
                de retard dans l&apos;exécution de l&apos;une de ses obligations si celle-ci
                résulte d&apos;un fait indépendant de sa volonté et qui échappe à son contrôle.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Contact
              </h2>
              <div className="rounded-xl border border-white/[0.06] bg-surface-light p-5 space-y-1">
                <p><strong className="text-white">Albert LANNE — LANNKIN</strong></p>
                <p>8825 av. Gravel, Laval (Québec) H7A 1P2, Canada</p>
                <p>
                  <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                    info@lannkin.ca
                  </a>
                </p>
                <p>+1 438 944 6129</p>
              </div>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
