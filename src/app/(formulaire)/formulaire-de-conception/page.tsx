"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SERVICE_OPTIONS: Record<string, { label: string; options: string[] }> = {
  "site-web": {
    label: "SITE WEB",
    options: ["Création de site web", "Refonte de site web", "Modification de site web"],
  },
  publicite: {
    label: "PUBLICITÉ",
    options: ["Publicité sur Google", "Publicité sur Facebook", "Publicité sur Tiktok", "Publicité sur Linkedin"],
  },
  "reseaux-sociaux": {
    label: "RÉSEAUX SOCIAUX",
    options: ["Création de page professionnelle", "Modification de page professionnelle", "Gestion de page professionnelle"],
  },
  "identite-visuelle": {
    label: "IDENTITÉ VISUELLE",
    options: ["Logo", "Carte de visite", "Flyer"],
  },
  "fiche-google": {
    label: "FICHE GOOGLE",
    options: ["Création de Fiche Google", "Optimisation de Fiche Google", "Déblocage de Fiche Google"],
  },
};

const CATEGORIES = [
  { id: "site-web", label: "Site web" },
  { id: "publicite", label: "Publicité" },
  { id: "reseaux-sociaux", label: "Réseaux sociaux" },
  { id: "identite-visuelle", label: "Identité visuelle" },
  { id: "fiche-google", label: "Fiche Google" },
];

const SOCIAL_PLATFORMS = ["Facebook", "Instagram", "X", "LinkedIn", "TikTok", "Youtube", "Autre"];
const CAMPAIGN_OBJECTIVES = ["Générer des appels", "Obtenir des demandes via formulaire", "Ventes en ligne", "Notoriété", "Autre"];

const inputCls = "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#498f6d] focus:outline-none focus:ring-1 focus:ring-[#498f6d]";
const textareaCls = `${inputCls} min-h-[120px] resize-y`;

function Section({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-2xl font-black uppercase mb-2 mt-12">{title}</h2>
      <hr className="border-[#498f6d] mb-8" />
    </>
  );
}

function Lbl({ children, req }: { children: React.ReactNode; req?: boolean }) {
  return (
    <label className="block font-bold mb-2">
      {children} {req && <span className="text-red-400">*</span>}
    </label>
  );
}

function Radios({ name, options, value, onChange, req }: { name: string; options: string[]; value: string; onChange: (v: string) => void; req?: boolean }) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${value === opt ? "border-[#498f6d] bg-[#498f6d]" : "border-white/30"}`}>
            {value === opt && <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
          </span>
          <input type="radio" name={name} value={opt} required={req} className="sr-only" onChange={() => onChange(opt)} checked={value === opt} />
          <span className="text-white/80">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function Checks({ options, selected, toggle }: { options: string[]; selected: string[]; toggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <span className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selected.includes(opt) ? "border-[#498f6d] bg-[#498f6d]" : "border-white/30"}`}>
            {selected.includes(opt) && <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
          </span>
          <input type="checkbox" className="sr-only" checked={selected.includes(opt)} onChange={() => toggle(opt)} />
          <span className="text-white/80">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function FileUpload({ label, name }: { label: string; name: string }) {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div>
      <label className="block font-bold mb-2">{label}</label>
      <label className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-[#498f6d]/40 bg-white/5 px-4 py-8 text-white/40 hover:border-[#498f6d] hover:bg-white/10 transition-colors">
        <input type="file" name={name} multiple accept="image/*,.pdf" className="sr-only" onChange={(e) => { if (e.target.files) setFiles(Array.from(e.target.files)); }} />
        {files.length > 0 ? files.map((f) => f.name).join(", ") : "Cliquez ici pour téléverser vos fichiers."}
      </label>
    </div>
  );
}

export default function FormulaireConceptionPage() {
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [companyPhone, setCompanyPhone] = useState<string | undefined>();
  const [socials, setSocials] = useState<string[]>([]);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Radio states
  const [hasDomain, setHasDomain] = useState("");
  const [hasLogo, setHasLogo] = useState("");
  const [hasLanding, setHasLanding] = useState("");
  const [hasVisuals, setHasVisuals] = useState("");
  const [hasCampaign, setHasCampaign] = useState("");
  const [campaignDuration, setCampaignDuration] = useState("");

  const selectedCategory = category ? SERVICE_OPTIONS[category] : null;
  const hasService = service !== "";

  function toggle(list: string[], setList: (v: string[]) => void, val: string) {
    setList(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);

    // Add fields that are managed via React state (not native inputs)
    fd.set("category", CATEGORIES.find((c) => c.id === category)?.label ?? "");
    fd.set("service", service);
    if (phone) fd.set("phone", phone);
    if (companyPhone) fd.set("companyPhone", companyPhone);
    if (hasDomain) fd.set("hasDomain", hasDomain);
    if (hasLogo) fd.set("hasLogo", hasLogo);
    if (socials.length > 0) fd.set("socials", socials.join(", "));
    if (hasLanding) fd.set("hasLanding", hasLanding);
    if (hasVisuals) fd.set("hasVisuals", hasVisuals);
    if (hasCampaign) fd.set("hasCampaign", hasCampaign);
    if (objectives.length > 0) fd.set("objectives", objectives.join(", "));
    if (campaignDuration) fd.set("campaignDuration", campaignDuration);
    // targetNetwork, language, otherSocials — added from state when those sections exist

    try {
      const res = await fetch("/api/formulaire-conception", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "Une erreur est survenue.");
      } else {
        setSubmitted(true);
      }
    } catch { alert("Une erreur est survenue. Veuillez réessayer."); }
    finally { setLoading(false); }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0C0C0C] text-white">
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-4xl font-black mb-4">Merci !</h1>
          <p className="text-white/60 text-lg">Votre formulaire a bien été soumis. Notre équipe vous contactera sous 24h.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/rendu3D/rendu3d-cubes-lateral-angle.webp')" }} />
        <div className="absolute inset-0 bg-[#2b926c]/80" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-black uppercase tracking-wide">Formulaire de conception</h1>
        <p className="relative z-10 mt-4 text-white/90 max-w-2xl mx-auto text-base md:text-lg font-semibold italic">
          Votre projet mérite une attention particulière. Prenez seulement 5 minutes de votre temps pour répondre à ce questionnaire et nous aider à lui donner vie.
        </p>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 md:px-8 py-16" style={{ boxSizing: "border-box" }}>
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ===== INFORMATIONS DU COMMANDITAIRE ===== */}
          <h2 className="text-2xl font-black uppercase mb-2">Informations du commanditaire</h2>
          <hr className="border-[#498f6d] mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><Lbl req>Prénom</Lbl><input type="text" name="firstName" required placeholder="Ex. : Marie" className={inputCls} /></div>
            <div><Lbl req>Nom</Lbl><input type="text" name="lastName" required placeholder="Ex. : Dupont" className={inputCls} /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><Lbl req>Courriel</Lbl><input type="email" name="email" required placeholder="Ex. : moncourriel@email.com" className={inputCls} /></div>
            <div><Lbl>Téléphone</Lbl><PhoneInput international defaultCountry="BJ" value={phone} onChange={setPhone} placeholder="Téléphone" className={`phone-input-dark ${inputCls}`} /></div>
          </div>

          {/* Catégorie */}
          <div>
            <Lbl req>Sélectionnez la catégorie de service</Lbl>
            <Radios name="category" options={CATEGORIES.map((c) => c.label)} value={CATEGORIES.find((c) => c.id === category)?.label || ""} onChange={(v) => { const cat = CATEGORIES.find((c) => c.label === v); if (cat) { setCategory(cat.id); setService(""); } }} req />
          </div>

          {/* Service dropdown */}
          {selectedCategory && (
            <div>
              <Lbl req>Service : {selectedCategory.label}</Lbl>
              <select required value={service} onChange={(e) => setService(e.target.value)} className={`${inputCls} bg-[#0C0C0C]`}>
                <option value="">Sélectionnez le service</option>
                {selectedCategory.options.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
              </select>
            </div>
          )}

          {/* ======================================================= */}
          {/* CHAMPS CONDITIONNELS POUR "SITE WEB"                     */}
          {/* ======================================================= */}
          {category === "site-web" && hasService && (
            <>
              <Section title="Informations sur votre entreprise" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl req>Nom de votre entreprise</Lbl><input type="text" name="companyName" required placeholder="Nom de votre société" className={inputCls} /></div>
                <div><Lbl>Téléphone de votre entreprise</Lbl><PhoneInput international defaultCountry="BJ" value={companyPhone} onChange={setCompanyPhone} placeholder="Téléphone de votre entreprise" className={`phone-input-dark ${inputCls}`} /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl req>Courriel de votre entreprise</Lbl><input type="email" name="companyEmail" required placeholder="Ex. : exemple@votreentreprise.com" className={inputCls} /></div>
                <div><Lbl>Adresse complète de votre entreprise</Lbl><input type="text" name="companyAddress" placeholder="Ex. : 123 Rue Principale, Montréal, QC H2X 1Y4" className={inputCls} /></div>
              </div>
              <div><Lbl req>Vos services ou produits</Lbl><textarea name="servicesProducts" required placeholder="Chaque détail compte pour bien comprendre vos besoins." className={textareaCls} /></div>
              <div><Lbl req>Qu&apos;est-ce qui vous démarque de vos concurrents ?</Lbl><textarea name="competitors" required placeholder="Ce qui vous rend unique, vos atouts principaux." className={textareaCls} /></div>
              <div><Lbl req>Villes desservies</Lbl><textarea name="cities" required placeholder="Ex. : Montréal, Laval, Québec, Trois-Rivières" className={textareaCls} /></div>
              <div><Lbl>Avez-vous un slogan ?</Lbl><textarea name="slogan" placeholder="Votre slogan ou phrase d'accroche." className={textareaCls} /></div>
              <div><Lbl req>Vos jours et heures de travail</Lbl><input type="text" name="workHours" required placeholder="Ex. : 24h/24, du lundi au vendredi." className={inputCls} /></div>
              <div><Lbl>Vos licences ou certifications</Lbl><textarea name="licenses" placeholder="Veuillez indiquer vos licences ou certifications (le cas échéant)." className={textareaCls} /></div>

              <Section title="Accès & Hébergement" />
              <div><Lbl req>Avez-vous un nom de domaine ?</Lbl><Radios name="hasDomain" options={["Oui", "Non"]} value={hasDomain} onChange={setHasDomain} req /></div>

              <Section title="Identité visuelle" />
              <div><Lbl req>Avez-vous un logo ?</Lbl><Radios name="hasLogo" options={["Oui", "Non"]} value={hasLogo} onChange={setHasLogo} req /></div>
              {hasLogo === "Oui" && <FileUpload name="logo" label="Téléversez votre logo." />}
              <FileUpload name="images-site" label="Avez-vous des images à inclure sur votre site ? Si oui, merci de les téléverser." />

              <Section title="Design & Préférences graphiques" />
              <div><Lbl>Quelles couleurs préférez-vous ?</Lbl><input type="text" name="colors" placeholder="Ex. : Bleu, vert, rouge ou #0055A4, #FF5733" className={inputCls} /></div>
              <FileUpload name="maquette" label="Disposez-vous d'une maquette pour votre site web ? Si oui, veuillez la téléverser." />

              <Section title="Pages sociales" />
              <div><label className="block font-bold mb-4">Avez-vous des pages sociales ?</label><Checks options={SOCIAL_PLATFORMS} selected={socials} toggle={(v) => toggle(socials, setSocials, v)} /></div>

              <Section title="Commentaires" />
              <div><Lbl>Avez-vous des sites de références ? Si oui, merci de nous les fournir.</Lbl><input type="text" name="referencesSites" placeholder="Des sites web que vous aimez bien. (Exemple : exemple1.ca, exemple2.ca)" className={inputCls} /></div>
              <div><Lbl>Des commentaires ou précisions ?</Lbl><textarea name="comments" placeholder="Vos demandes, remarques, besoins particuliers, idées ou suggestions." className={textareaCls} /></div>
            </>
          )}

          {/* ======================================================= */}
          {/* CHAMPS CONDITIONNELS POUR "PUBLICITÉ"                    */}
          {/* ======================================================= */}
          {category === "publicite" && hasService && (
            <>
              <Section title="Informations sur votre entreprise" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl>Nom de votre entreprise</Lbl><input type="text" name="companyName" placeholder="Nom légal ou commercial" className={inputCls} /></div>
                <div><Lbl>Votre site web</Lbl><input type="text" name="companyWebsite" placeholder="Ex. : monsiteweb.com" className={inputCls} /></div>
              </div>
              <div><Lbl req>Dans quel domaine exercez-vous ?</Lbl><input type="text" name="domain" required placeholder="Ex. : santé, éducation, construction, e-commerce,..." className={inputCls} /></div>
              <div><Lbl req>Quels services ou produits proposez-vous ?</Lbl><textarea name="servicesProducts" required placeholder="Décrivez tout ce que vous offrez, sans rien oublier." className={textareaCls} /></div>

              <Section title="Pages sociales" />
              <div><label className="block font-bold mb-4">Avez-vous des pages sociales ?</label><Checks options={SOCIAL_PLATFORMS} selected={socials} toggle={(v) => toggle(socials, setSocials, v)} /></div>

              <Section title="Ciblage et audience" />
              <div><Lbl>La zone géographique que vous voulez cibler</Lbl><input type="text" name="targetZone" placeholder="Ex. : Paris, Marseille, Lyon ..." className={inputCls} /></div>
              <div><Lbl>Y a-t-il des zones ou villes que vous ne souhaitez pas cibler ?</Lbl><input type="text" name="excludeZone" placeholder="Ex. : Paris, Marseille, Lyon ..." className={inputCls} /></div>
              <div><Lbl>Avez-vous des personas ou profils clients types que vous aimeriez qu&apos;on privilégie ?</Lbl><input type="text" name="personas" placeholder="Ex. : Fonctionnaire, avocat, commerçant..." className={inputCls} /></div>
              <div><Lbl>Vous vendez à des entreprises, des particuliers ou les deux ?</Lbl><input type="text" name="b2bOrB2c" placeholder="Ex. : B2B, B2C, ou mixte." className={inputCls} /></div>
              <div><Lbl>À qui s&apos;adressent vos produits ou services ? (âge, sexe, lieu, langue)</Lbl><textarea name="targetAudience" placeholder="Ex. : hommes et femmes, 30–50 ans, Montréal, bilingues,..." className={textareaCls} /></div>

              <Section title="Liens et redirections" />
              <div><Lbl req>Vers quelle page précise souhaitez-vous rediriger les visiteurs ?</Lbl><input type="text" name="redirectPage" required placeholder="ex. page d'accueil, page de réservation, page d'offre spéciale, etc." className={inputCls} /></div>
              <div><Lbl req>Avez-vous une page d&apos;atterrissage (landing page) optimisée pour la publicité ?</Lbl><Radios name="hasLanding" options={["Oui", "Non", "À créer"]} value={hasLanding} onChange={setHasLanding} req /></div>

              <Section title="Contenus publicitaires" />
              <div><Lbl req>Disposez-vous déjà de visuels, vidéos ou textes publicitaires à utiliser ?</Lbl><Radios name="hasVisuals" options={["Oui", "Non, je souhaite que vous les réalisiez"]} value={hasVisuals} onChange={setHasVisuals} req /></div>
              <div><Lbl>Souhaitez-vous mettre en avant une offre spéciale ou un argument clé dans la publicité ?</Lbl><input type="text" name="specialOffer" placeholder="(ex. -20%, service premium, 24/7, etc.)" className={inputCls} /></div>
              <div><Lbl>Avez-vous un slogan ou message principal à inclure ?</Lbl><input type="text" name="adSlogan" placeholder="" className={inputCls} /></div>

              <Section title="Détails de votre campagne" />
              <div><Lbl>Avez-vous déjà une campagne en cours ?</Lbl><Radios name="hasCampaign" options={["Oui", "Non"]} value={hasCampaign} onChange={setHasCampaign} /></div>
              <div><label className="block font-bold mb-4">Quel est votre principal objectif avec cette campagne ?</label><Checks options={CAMPAIGN_OBJECTIVES} selected={objectives} toggle={(v) => toggle(objectives, setObjectives, v)} /></div>
              <div><Lbl>Quelle action souhaitez-vous que les gens fassent après avoir vu la publicité ?</Lbl><textarea name="desiredAction" placeholder="(ex. visiter votre site, remplir un formulaire, vous appeler, réserver, etc.)" className={textareaCls} /></div>
              <div><Lbl>Quels mots-clés souhaitez-vous éviter ?</Lbl><textarea name="negativeKeywords" placeholder="Ex. : gratuit, promo, imitation, occasion,..." className={textareaCls} /></div>
              <div><Lbl req>Souhaitez-vous que nous gérions la campagne en continu ou sur une durée précise ?</Lbl><Radios name="campaignDuration" options={["Continue", "Campagne de X mois"]} value={campaignDuration} onChange={setCampaignDuration} req /></div>

              <Section title="Commentaires" />
              <div><Lbl>Des commentaires ou précisions ?</Lbl><textarea name="comments" placeholder="Vos demandes, remarques, besoins particuliers, idées ou suggestions." className={textareaCls} /></div>
            </>
          )}

          {/* ======================================================= */}
          {/* CHAMPS CONDITIONNELS POUR "RÉSEAUX SOCIAUX"              */}
          {/* ======================================================= */}
          {category === "reseaux-sociaux" && hasService && (
            <>
              <Section title="Informations sur votre entreprise" />
              <div><Lbl req>Quel réseau social est concerné ?</Lbl><Checks options={["Facebook", "Instagram", "Tiktok", "Youtube", "Linkedin"]} selected={socials} toggle={(v) => toggle(socials, setSocials, v)} /></div>
              <div><Lbl>Nom de votre entreprise</Lbl><input type="text" name="companyName" placeholder="Entrez le nom de votre entreprise" className={inputCls} /></div>
              <div><Lbl>Dans quel secteur travaillez-vous ?</Lbl><input type="text" name="domain" placeholder="Ex. : technologie, santé, commerce, éducation,..." className={inputCls} /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl>Quelle est votre adresse e-mail professionnelle ?</Lbl><input type="email" name="companyEmail" placeholder="Ex. : email@votreentreprise.com" className={inputCls} /></div>
                <div><Lbl>Numéro de téléphone de votre entreprise</Lbl><PhoneInput international defaultCountry="BJ" value={companyPhone} onChange={setCompanyPhone} placeholder="Ex. : +1 514 000 0000" className={`phone-input-dark ${inputCls}`} /></div>
              </div>
              <div><Lbl>Adresse de votre entreprise (ville, province, code postal)</Lbl><input type="text" name="companyAddress" placeholder="Ex. : Montréal, QC, H2X 1Y4" className={inputCls} /></div>
              <div><Lbl>Langue principale</Lbl><Checks options={["Français", "Anglais", "Autre"]} selected={objectives} toggle={(v) => toggle(objectives, setObjectives, v)} /></div>

              <Section title="Objectif de la page" />
              <div><Lbl>Quel est l&apos;objectif principal de votre page ?</Lbl><input type="text" name="pageObjective" placeholder="Ex. : vendre, présenter vos services, attirer des clients..." className={inputCls} /></div>
              <div><Lbl>Qui est la cible principale de votre page ?</Lbl><input type="text" name="pageTarget" placeholder="Ex. : clients locaux, professionnels, étudiants..." className={inputCls} /></div>

              <Section title="Comptes existants" />
              <div><label className="block font-bold mb-4">Avez-vous d&apos;autres pages sociales ?</label><Checks options={["Facebook", "Instagram", "X", "Tiktok", "Youtube", "Linkedin", "Autres"]} selected={socials} toggle={(v) => toggle(socials, setSocials, v)} /></div>

              <Section title="Commentaires" />
              <div><Lbl>Des commentaires ou précisions ?</Lbl><textarea name="comments" placeholder="Vos demandes, remarques, besoins particuliers, idées ou suggestions." className={textareaCls} /></div>
              <div><Lbl>Quelles modifications souhaitez-vous que nous apportions ?</Lbl><textarea name="modifications" placeholder="Merci de bien détailler les changements que vous désirez." className={textareaCls} /></div>
            </>
          )}

          {/* ======================================================= */}
          {/* CHAMPS CONDITIONNELS POUR "IDENTITÉ VISUELLE"            */}
          {/* ======================================================= */}
          {category === "identite-visuelle" && hasService && (
            <>
              <Section title="Informations sur votre entreprise" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl req>Nom de votre entreprise</Lbl><input type="text" name="companyName" required placeholder="Nom de votre société" className={inputCls} /></div>
                <div><Lbl>Téléphone de votre entreprise</Lbl><PhoneInput international defaultCountry="BJ" value={companyPhone} onChange={setCompanyPhone} placeholder="Téléphone de votre entreprise" className={`phone-input-dark ${inputCls}`} /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl req>Courriel de votre entreprise</Lbl><input type="email" name="companyEmail" required placeholder="Ex. : exemple@votreentreprise.com" className={inputCls} /></div>
                <div><Lbl>Adresse complète de votre entreprise</Lbl><input type="text" name="companyAddress" placeholder="Ex. : 123 Rue Principale, Montréal, QC H2X 1Y4" className={inputCls} /></div>
              </div>
              <div><Lbl>Site web de l&apos;entreprise</Lbl><input type="text" name="companyWebsite" placeholder="Ex. : votreentreprise.com" className={inputCls} /></div>

              <Section title="Styles et les préférences visuelles" />
              <div><Lbl>Avez-vous des préférences de couleurs ?</Lbl><input type="text" name="colors" placeholder="Ex. : Bleu foncé, doré, noir et blanc." className={inputCls} /></div>
              <div><Lbl>Y a-t-il des couleurs à éviter ?</Lbl><input type="text" name="colorsToAvoid" placeholder="Ex. : rouge vif, jaune fluo..." className={inputCls} /></div>
              <div><Lbl>Quelles polices d&apos;écriture préférez-vous ?</Lbl><input type="text" name="fonts" placeholder="Ex. : Arial, Roboto, Times New Roman..." className={inputCls} /></div>
              <div><Lbl>Quel est le symbole qui représente votre entreprise ?</Lbl><input type="text" name="symbol" placeholder="Ex. : Une plume, une montagne, mes initiales, un symbole abstrait..." className={inputCls} /></div>
              <FileUpload name="exemples-design" label="Avez-vous des exemples que vous appréciez ? Si oui, téléversez-les ici." />

              {service !== "Logo" && (
                <>
                  <div><Lbl>Avez-vous un logo à fournir ?</Lbl><Radios name="hasLogo" options={["Oui", "Non"]} value={hasLogo} onChange={setHasLogo} /></div>
                  {hasLogo === "Oui" && <FileUpload name="logo" label="Téléversez votre logo." />}
                </>
              )}

              <Section title="Commentaires" />
              <div><Lbl>Des commentaires ou précisions ?</Lbl><textarea name="comments" placeholder="Vos demandes, remarques, besoins particuliers, idées ou suggestions." className={textareaCls} /></div>
            </>
          )}

          {/* ======================================================= */}
          {/* CHAMPS CONDITIONNELS POUR "FICHE GOOGLE"                 */}
          {/* ======================================================= */}
          {category === "fiche-google" && hasService && (
            <>
              <Section title="Informations sur votre entreprise" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl req>Nom de votre entreprise</Lbl><input type="text" name="companyName" required placeholder="Nom de votre société" className={inputCls} /></div>
                <div><Lbl>Téléphone de votre entreprise</Lbl><PhoneInput international defaultCountry="BJ" value={companyPhone} onChange={setCompanyPhone} placeholder="Téléphone de votre entreprise" className={`phone-input-dark ${inputCls}`} /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Lbl req>Courriel de votre entreprise</Lbl><input type="email" name="companyEmail" required placeholder="Ex. : exemple@votreentreprise.com" className={inputCls} /></div>
                <div><Lbl>Adresse complète de votre entreprise</Lbl><input type="text" name="companyAddress" placeholder="Ex. : 123 Rue Principale, Montréal, QC H2X 1Y4" className={inputCls} /></div>
              </div>
              <div><Lbl req>Vos services ou produits</Lbl><textarea name="servicesProducts" required placeholder="Chaque détail compte pour bien comprendre vos besoins." className={textareaCls} /></div>

              {/* Champs supplémentaires pour Création uniquement */}
              {service === "Création de Fiche Google" && (
                <div><Lbl req>Qu&apos;est-ce qui vous démarque de vos concurrents ?</Lbl><textarea name="competitors" required placeholder="Ce qui vous rend unique, vos atouts principaux." className={textareaCls} /></div>
              )}

              <div><Lbl req>Villes desservies</Lbl><textarea name="cities" required placeholder="Ex. : Montréal, Laval, Québec, Trois-Rivières" className={textareaCls} /></div>
              <div><Lbl>Site web de l&apos;entreprise</Lbl><input type="text" name="companyWebsite" placeholder="Ex. : votreentreprise.com" className={inputCls} /></div>

              {/* Horaires pour Création uniquement */}
              {service === "Création de Fiche Google" && (
                <div><Lbl req>Vos jours et heures de travail</Lbl><input type="text" name="workHours" required placeholder="Ex. : 24h/24, du lundi au vendredi." className={inputCls} /></div>
              )}

              {/* Identité visuelle + uploads pour Création et Optimisation uniquement */}
              {service !== "Déblocage de Fiche Google" && (
                <>
                  <Section title="Identité visuelle" />
                  <div><Lbl req>Avez-vous un logo ?</Lbl><Radios name="hasLogo" options={["Oui", "Non"]} value={hasLogo} onChange={setHasLogo} req /></div>
                  <FileUpload name="photos-facade" label="Images de façade et d'intérieur de l'entreprise" />
                  <FileUpload name="photos-couverture" label="Photos de couverture de la fiche (images à mettre en avant)" />
                  <FileUpload name="photos-realisations" label="Photos et/ou vidéos des réalisations" />
                  <FileUpload name="affiches-pub" label="Affiches publicitaires de l'entreprise" />
                </>
              )}

              <Section title="Pages sociales" />
              <div><label className="block font-bold mb-4">Avez-vous des pages sociales ?</label><Checks options={SOCIAL_PLATFORMS} selected={socials} toggle={(v) => toggle(socials, setSocials, v)} /></div>

              <Section title="Commentaires" />
              <div><Lbl req>Lien vers la fiche Google a optimiser</Lbl><input type="text" name="googleFicheLink" required placeholder="Veillez saisir le lien vers la fiche Google a optimiser" className={inputCls} /></div>
              <div><Lbl>Des commentaires ou précisions ?</Lbl><textarea name="comments" placeholder="Vos demandes, remarques, besoins particuliers, idées ou suggestions." className={textareaCls} /></div>
            </>
          )}

          {/* Submit */}
          <button type="submit" disabled={loading} className="rounded-lg bg-[#498f6d] px-8 py-3 font-bold text-white hover:bg-[#3a7a5a] transition-colors disabled:opacity-50">
            {loading ? "Envoi en cours..." : "Soumettre"}
          </button>
        </form>
      </section>

      {/* Footer simple */}
      <footer className="bg-[#e5e5e5] py-4 px-6 text-center">
        <p className="text-gray-600 text-sm">Copyright &copy; 2026 LANNKIN</p>
      </footer>
    </main>
  );
}
