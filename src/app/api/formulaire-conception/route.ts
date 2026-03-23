import { NextRequest, NextResponse } from "next/server";

import { buildContactHtml, SMTP_FROM, SMTP_TO, transporter } from "@/lib/email";

// Max 25 MB total
const MAX_TOTAL_SIZE = 25 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // --- Extract text fields ---
    const get = (key: string) => (formData.get(key) as string) || "";

    const firstName = get("firstName");
    const lastName = get("lastName");
    const email = get("email");
    const phone = get("phone");
    const category = get("category");
    const service = get("service");

    if (!firstName || !lastName || !email || !category || !service) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 422 });
    }

    // --- Build structured fields for email ---
    const fields: Record<string, string | undefined> = {
      "Prénom": firstName,
      "Nom": lastName,
      "Email": email,
      "Téléphone": phone || undefined,
      "—1": undefined,
      "Catégorie": category,
      "Service": service,
    };

    // Site web fields
    if (get("companyName")) fields["Entreprise"] = get("companyName");
    if (get("companyPhone")) fields["Tél. entreprise"] = get("companyPhone");
    if (get("companyEmail")) fields["Email entreprise"] = get("companyEmail");
    if (get("companyAddress")) fields["Adresse"] = get("companyAddress");
    if (get("companyWebsite")) fields["Site web"] = get("companyWebsite");
    if (get("servicesProducts")) fields["Services / Produits"] = get("servicesProducts");
    if (get("competitors")) fields["Avantage concurrentiel"] = get("competitors");
    if (get("cities")) fields["Villes desservies"] = get("cities");
    if (get("slogan")) fields["Slogan"] = get("slogan");
    if (get("workHours")) fields["Horaires"] = get("workHours");
    if (get("licenses")) fields["Licences / Certifications"] = get("licenses");
    if (get("hasDomain")) fields["Nom de domaine"] = get("hasDomain");
    if (get("hasLogo")) fields["Logo existant"] = get("hasLogo");

    // Design fields
    if (get("colors")) fields["Couleurs préférées"] = get("colors");
    if (get("colorsToAvoid")) fields["Couleurs à éviter"] = get("colorsToAvoid");
    if (get("fonts")) fields["Polices préférées"] = get("fonts");
    if (get("symbol")) fields["Symbole entreprise"] = get("symbol");

    // Publicité fields
    if (get("domain")) fields["Domaine d'activité"] = get("domain");
    if (get("targetZone")) fields["Zone géographique ciblée"] = get("targetZone");
    if (get("excludeZone")) fields["Zones exclues"] = get("excludeZone");
    if (get("personas")) fields["Personas ciblés"] = get("personas");
    if (get("b2bOrB2c")) fields["B2B / B2C"] = get("b2bOrB2c");
    if (get("targetAudience")) fields["Audience cible"] = get("targetAudience");
    if (get("redirectPage")) fields["Page de redirection"] = get("redirectPage");
    if (get("hasLanding")) fields["Landing page existante"] = get("hasLanding");
    if (get("hasVisuals")) fields["Visuels existants"] = get("hasVisuals");
    if (get("specialOffer")) fields["Offre spéciale"] = get("specialOffer");
    if (get("adSlogan")) fields["Slogan publicitaire"] = get("adSlogan");
    if (get("hasCampaign")) fields["Campagne en cours"] = get("hasCampaign");
    if (get("objectives")) fields["Objectifs campagne"] = get("objectives");
    if (get("desiredAction")) fields["Action souhaitée"] = get("desiredAction");
    if (get("negativeKeywords")) fields["Mots-clés à éviter"] = get("negativeKeywords");
    if (get("campaignDuration")) fields["Durée campagne"] = get("campaignDuration");

    // Réseaux sociaux fields
    if (get("targetNetwork")) fields["Réseau social concerné"] = get("targetNetwork");
    if (get("sector")) fields["Secteur d'activité"] = get("sector");
    if (get("language")) fields["Langue principale"] = get("language");
    if (get("pageObjective")) fields["Objectif de la page"] = get("pageObjective");
    if (get("pageTarget")) fields["Cible de la page"] = get("pageTarget");
    if (get("otherSocials")) fields["Autres pages sociales"] = get("otherSocials");
    if (get("modifications")) fields["Modifications souhaitées"] = get("modifications");

    // Fiche Google fields
    if (get("googleLink")) fields["Lien fiche Google"] = get("googleLink");

    // Common fields
    if (get("socials")) fields["Pages sociales"] = get("socials");
    if (get("referencesSites")) fields["Sites de référence"] = get("referencesSites");
    if (get("comments")) fields["Commentaires"] = get("comments");

    // Separator before meta
    fields["—2"] = undefined;
    fields["Formulaire (URL)"] = "/formulaire-de-conception";

    // --- Extract file attachments ---
    const attachments: { filename: string; content: Buffer }[] = [];
    let totalSize = 0;

    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        totalSize += value.size;
        if (totalSize > MAX_TOTAL_SIZE) {
          return NextResponse.json(
            { error: "Les fichiers dépassent la limite de 25 MB." },
            { status: 413 },
          );
        }
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: `${key}-${value.name}`,
          content: buffer,
        });
      }
    }

    // --- Send email + Make webhook in parallel ---
    const subject = `[Formulaire Conception] ${firstName} ${lastName} — ${category} / ${service}`;

    // Build Make FormData with text fields + files
    const makeForm = new FormData();
    for (const [k, v] of Object.entries(fields)) {
      if (v && !k.startsWith("—")) makeForm.append(k, v);
    }
    for (const att of attachments) {
      makeForm.append(att.filename, new Blob([new Uint8Array(att.content)]), att.filename);
    }

    await Promise.all([
      transporter.sendMail({
        from: SMTP_FROM,
        to: SMTP_TO,
        replyTo: email,
        subject,
        text: Object.entries(fields)
          .filter(([k, v]) => v && !k.startsWith("—"))
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
        html: buildContactHtml(fields, `Formulaire de Conception — ${category}`),
        attachments,
      }),
      fetch("https://hook.eu1.make.com/gw51phycg2hn62js05e2w11kdrhyvjn5", {
        method: "POST",
        body: makeForm,
      }).catch((err) => console.error("[Make webhook] error:", err)),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[API/formulaire-conception] error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." },
      { status: 500 },
    );
  }
}
