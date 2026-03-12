import type { Metadata } from "next";

import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Lannkin",
  description:
    "Politique de confidentialité de Lannkin. Comment nous collectons, utilisons et protégeons vos données personnelles. Responsable : Albert Lanne.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-muted">Dernière mise à jour : janvier 2026</p>

          <div className="prose prose-invert prose-sm mt-10 max-w-none space-y-8 text-muted [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3">

            <p>
              LANNKIN, une agence web renommée, s&apos;engage à protéger la confidentialité des
              utilisateurs de son site web. Cette politique de confidentialité explique comment nous
              collectons, utilisons, partageons et protégeons les informations personnelles que vous
              nous fournissez. En utilisant notre site, vous consentez aux pratiques décrites dans
              cette politique.
            </p>

            <h2>1. Introduction et déclaration de confidentialité</h2>
            <p>
              LANNKIN reconnaît l&apos;importance de la confidentialité des utilisateurs. Nous nous
              engageons à protéger vos données personnelles conformément aux lois applicables sur la
              confidentialité. En utilisant nos services, vous acceptez les termes de cette
              politique.
            </p>

            <h2>2. Définition d&apos;un renseignement personnel</h2>
            <p>
              Les renseignements personnels incluent toute information permettant d&apos;identifier
              une personne. Nous collectons des données telles que votre nom, adresse, informations
              de contact, et d&apos;autres informations nécessaires à nos services.
            </p>

            <h2>3. Consentement</h2>
            <p>
              En utilisant notre site, vous consentez à la collecte et à l&apos;utilisation de vos
              informations personnelles. Nous obtenons un consentement explicite ou implicite selon
              les circonstances. Le consentement peut être révoqué à tout moment.
            </p>

            <h2>4. Collecte des renseignements</h2>
            <p>
              Nous collectons uniquement les informations nécessaires aux fins spécifiées. Nous
              assurons la sécurité des données pendant la collecte, le stockage et la transmission.
            </p>

            <h2>5. Utilisation des informations</h2>
            <p>
              Les informations personnelles sont utilisées pour fournir nos services, personnaliser
              l&apos;expérience utilisateur, améliorer nos produits, et respecter les obligations
              légales. Nous ne vendons pas vos informations, sauf dans des cas spécifiés.
            </p>

            <h2>6. Protection des informations</h2>
            <p>
              Albert Lanne, notre responsable de la sécurité des données, supervise la mise en
              œuvre de mesures matérielles, organisationnelles et technologiques pour assurer la
              sécurité des données.
            </p>

            <h2>7. Témoins, médias sociaux et blogue</h2>
            <p>
              Nous utilisons des témoins pour améliorer votre expérience. Les médias sociaux et le
              blog sont gérés conformément à notre politique de confidentialité.
            </p>

            <h2>8. Accès aux informations et questions</h2>
            <p>
              Vous pouvez accéder, corriger ou supprimer vos informations personnelles en nous
              contactant à{" "}
              <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                info@lannkin.ca
              </a>
              . Toute question peut être adressée à notre équipe dédiée.
            </p>

            <h2>9. Droit applicable</h2>
            <p>
              Cette politique est régie par les lois de la province de Québec. Tout litige relatif
              à cette politique est soumis à la compétence des tribunaux de la province de Québec.
            </p>

            <h2>10. Responsabilité</h2>
            <p>
              Albert Lanne, identifié comme responsable des informations personnelles, peut être
              contacté à l&apos;adresse{" "}
              <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                info@lannkin.ca
              </a>
              .
            </p>

            <h2>11. Divulgation et conservation des informations personnelles</h2>
            <p>
              Nous ne divulguons pas vos informations sauf dans des cas spécifiés. Les périodes de
              conservation respectent les exigences légales.
            </p>

            <h2>12. Accès aux informations personnelles</h2>
            <p>
              Vous pouvez demander, mettre à jour ou retirer vos informations. Une vérification
              d&apos;identité peut être requise.
            </p>

            <h2>13. Défaut de fournir des informations personnelles</h2>
            <p>
              Le non-fournissement d&apos;informations nécessaires peut avoir des conséquences sur
              la prestation des services. L&apos;annulation peut résulter d&apos;un manquement.
            </p>

            <h2>14. Transparence</h2>
            <p>
              Nous sommes transparents dans la collecte et l&apos;utilisation des informations. Les
              utilisateurs sont encouragés à poser des questions.
            </p>

            <h2>15. Modifications de la politique de confidentialité</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique sans préavis. Les
              modifications seront publiées sur notre site.
            </p>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-surface-light p-6 text-sm">
              <p className="font-semibold text-white">Personne responsable des données personnelles :</p>
              <p className="mt-2">Albert LANNE</p>
              <p>
                <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                  info@lannkin.ca
                </a>
              </p>
              <p>+1 438 944 6129</p>
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}
