import type { Metadata } from "next";

import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Mentions légales | Lannkin",
  description:
    "Mentions légales de Lannkin — Agence web et marketing digital à Laval, Québec. NEQ 2279015061.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm text-muted">Dernière mise à jour : janvier 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Présentation du site
              </h2>
              <p>
                Conformément aux dispositions des lois en vigueur, nous portons à la connaissance
                des utilisateurs et visiteurs du site{" "}
                <strong className="text-white">www.lannkin.ca</strong> les informations suivantes :
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Informations légales
              </h2>
              <ul className="space-y-1.5">
                <li><strong className="text-white">Statut :</strong> Entreprise individuelle</li>
                <li><strong className="text-white">Nom de l&apos;entreprise :</strong> LANNKIN</li>
                <li>
                  <strong className="text-white">Numéro d&apos;entreprise (NEQ) :</strong>{" "}
                  2279015061
                </li>
                <li>
                  <strong className="text-white">Adresse :</strong> 8825 av. Gravel, Laval
                  (Québec) H7A 1P2, Canada
                </li>
                <li>
                  <strong className="text-white">Date d&apos;immatriculation :</strong> 2013-08-20
                </li>
                <li>
                  <strong className="text-white">Adresse e-mail :</strong>{" "}
                  <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                    info@lannkin.ca
                  </a>
                </li>
                <li>
                  <strong className="text-white">1er secteur d&apos;activité :</strong> Agences de
                  publicité (CAE)
                </li>
                <li>
                  <strong className="text-white">2e secteur d&apos;activité :</strong> Services
                  d&apos;informatique (CAE)
                </li>
                <li>
                  <strong className="text-white">Responsable de la publication :</strong> Albert
                  Lanne
                </li>
                <li>
                  <strong className="text-white">Hébergement :</strong> Sur nos serveurs
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Description des services fournis
              </h2>
              <p>
                Le site www.lannkin.ca a pour objet de fournir une information concernant
                l&apos;ensemble des activités de la société. Le propriétaire du site s&apos;efforce
                de fournir des informations aussi précises que possible. Toutefois, il ne pourra
                être tenu responsable des omissions, des inexactitudes et des carences dans la mise
                à jour.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Propriété intellectuelle et contrefaçons
              </h2>
              <p>
                Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou
                détient les droits d&apos;usage sur tous les éléments accessibles sur le site,
                notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute
                reproduction, représentation, modification, publication, adaptation totale ou
                partielle des éléments du site est interdite, sauf autorisation écrite préalable à
                l&apos;adresse :{" "}
                <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                  info@lannkin.ca
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Liens hypertextes et cookies
              </h2>
              <p>
                Le site www.lannkin.ca contient des liens hypertextes vers d&apos;autres sites mis
                en place avec l&apos;autorisation du propriétaire. Lors de vos visites, un ou des
                cookies sont susceptibles de s&apos;installer automatiquement sur votre ordinateur
                pour faciliter la navigation et permettre diverses mesures de fréquentation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-bold text-white">Contact</h2>
              <div className="rounded-xl border border-white/[0.06] bg-surface-light p-5">
                <p><strong className="text-white">Albert LANNE</strong></p>
                <p>
                  <a href="mailto:info@lannkin.ca" className="text-accent hover:underline">
                    info@lannkin.ca
                  </a>
                </p>
                <p>+1 438 944 6129</p>
                <p>8825 av. Gravel, Laval (Québec) H7A 1P2, Canada</p>
              </div>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
