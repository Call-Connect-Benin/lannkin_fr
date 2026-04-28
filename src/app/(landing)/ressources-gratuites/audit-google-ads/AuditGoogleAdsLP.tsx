"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import "./audit-lp.css";

/* ─── DATA ─── */
const FAKE_CLICKS = [
  { flag: "\u{1F1FA}\u{1F1E6}", name: "Ukraine", region: "Zaporizhzhia Oblast", clicks: 47, cost: "312$", type: "bot" as const, risk: 92 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Tunis Governorate", clicks: 89, cost: "578$", type: "bot" as const, risk: 88 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Sousse Governorate", clicks: 34, cost: "221$", type: "suspect" as const, risk: 75 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Nabeul Governorate", clicks: 22, cost: "143$", type: "suspect" as const, risk: 68 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Ben Arous Gov.", clicks: 18, cost: "117$", type: "bot" as const, risk: 82 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Sfax Governorate", clicks: 15, cost: "97$", type: "unknown" as const, risk: 45 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Monastir Gov.", clicks: 12, cost: "78$", type: "suspect" as const, risk: 60 },
  { flag: "\u{1F1F9}\u{1F1F3}", name: "Tunisie", region: "Kairouan Gov.", clicks: 8, cost: "52$", type: "unknown" as const, risk: 38 },
  { flag: "\u{1F1F5}\u{1F1ED}", name: "Philippines", region: "Metro Manila", clicks: 28, cost: "182$", type: "bot" as const, risk: 85 },
  { flag: "\u{1F1EE}\u{1F1F3}", name: "Inde", region: "Maharashtra", clicks: 19, cost: "124$", type: "suspect" as const, risk: 62 },
  { flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria", region: "Lagos State", clicks: 14, cost: "91$", type: "bot" as const, risk: 79 },
  { flag: "\u{1F1E7}\u{1F1E9}", name: "Bangladesh", region: "Dhaka Division", clicks: 11, cost: "71$", type: "bot" as const, risk: 76 },
];

const TYPE_LABELS = { bot: "Robot", suspect: "Suspect", unknown: "Inconnu" } as const;

const PIE_DATA = [
  { label: "Zone ciblée", val: 62, color: "#2b8a3e" },
  { label: "Hors zone - Robot", val: 22, color: "#e03131" },
  { label: "Hors zone - Suspect", val: 11, color: "#e67700" },
  { label: "Hors zone - Inconnu", val: 5, color: "#6b7280" },
];

/* ─── HELPERS ─── */
function fmt(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

function riskColor(type: "bot" | "suspect" | "unknown") {
  return type === "bot" ? "var(--red)" : type === "suspect" ? "var(--amber)" : "var(--text4)";
}

/* ─── COMPONENT ─── */
export function AuditGoogleAdsLP() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Record<string, string | string[]>>({});
  const [loading, setLoading] = useState(false);
  const [loadStep, setLoadStep] = useState(-1);
  const [loadPct, setLoadPct] = useState(0);
  const [done, setDone] = useState(false);
  const [exitPopup, setExitPopup] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const exitShown = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Collect form data from current step ── */
  const collect = useCallback(() => {
    setData((prev) => {
      const next = { ...prev };
      const container = document.getElementById(`s${step}`);
      if (!container) return next;
      container.querySelectorAll<HTMLElement>("[data-n]").forEach((g) => {
        const nm = g.getAttribute("data-n")!;
        const tp = g.getAttribute("data-t");
        const selected = g.querySelectorAll<HTMLElement>(".op.on");
        if (selected.length) {
          if (tp === "multi") {
            next[nm] = Array.from(selected).map((o) => o.getAttribute("data-v")!);
          } else {
            next[nm] = selected[0]?.getAttribute("data-v") ?? "";
          }
        }
      });
      container.querySelectorAll<HTMLInputElement>(".lp-inp").forEach((i) => {
        if (i.id && i.value.trim()) next[i.id] = i.value.trim();
      });
      return next;
    });
  }, [step]);

  /* ── KPI computation ── */
  const budget = parseInt(data.budget as string) || 0;
  const loss = Math.round(budget * 3 * 0.18);
  const clicks = Math.round(loss / 6.5);
  const refund = Math.round(loss * 0.65);

  /* ── Step navigation ── */
  const goStep = useCallback(
    (n: number) => {
      collect();
      setStep(n);
    },
    [collect],
  );

  /* ── Submit & fake scan ── */
  const submitAndScan = useCallback(() => {
    collect();
    const fields = ["f_name", "f_phone", "f_email", "f_gads_id"];
    for (const id of fields) {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (!el || !el.value.trim()) {
        if (el) {
          el.style.borderColor = "var(--red)";
          el.focus();
        }
        return;
      }
      el.style.borderColor = "";
    }

    setLoading(true);
    setLoadStep(0);
    setLoadPct(20);

    let i = 1;
    const timer = setInterval(() => {
      if (i < 5) {
        setLoadStep(i);
        setLoadPct(((i + 1) / 5) * 100);
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          setDone(true);
        }, 400);
      }
    }, 700);
  }, [collect]);

  /* ── Draw pie chart ── */
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = 150, H = 150, cx = W / 2, cy = H / 2, R = 62;
    ctx.clearRect(0, 0, W, H);
    const total = PIE_DATA.reduce((s, d) => s + d.val, 0);
    let a = -Math.PI / 2;
    for (const d of PIE_DATA) {
      const slice = (d.val / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, a, a + slice);
      ctx.closePath();
      ctx.fillStyle = d.color;
      ctx.fill();
      a += slice;
    }
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.55, 0, Math.PI * 2);
    ctx.fillStyle = "#f7f8fa";
    ctx.fill();
    ctx.font = "700 17px JetBrains Mono, monospace";
    ctx.textAlign = "center";
    ctx.fillStyle = "#e03131";
    ctx.fillText("38%", cx, cy + 2);
    ctx.font = "500 8px DM Sans, sans-serif";
    ctx.fillStyle = "#9ca3af";
    ctx.fillText("hors zone", cx, cy + 14);
  }, []);

  /* ── Exit intent ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 0 && !exitShown.current) {
        exitShown.current = true;
        setExitPopup(true);
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);

  /* ── Option click handler ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const op = (e.target as HTMLElement).closest<HTMLElement>(".op");
      if (!op) return;
      const group = op.closest<HTMLElement>("[data-n]");
      if (!group) return;
      const tp = group.getAttribute("data-t");
      if (tp === "single") {
        group.querySelectorAll(".op").forEach((x) => x.classList.remove("on"));
      }
      op.classList.toggle("on");
      setTimeout(() => collect(), 50);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [collect]);

  const scrollToForm = () => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    panelRef.current?.classList.add("shake");
    setTimeout(() => panelRef.current?.classList.remove("shake"), 500);
  };

  const pct = done ? 100 : { 1: 0, 2: 25, 3: 50, 4: 75 }[step] ?? 0;
  const LOAD_STEPS = [
    "Connexion au compte Google Ads...",
    "Export des données géographiques (90j)...",
    "Analyse des clics hors zone...",
    "Détection du trafic robot...",
    "Génération du rapport...",
  ];

  const sendContact = () => {
    const fields = ["cf_first", "cf_last", "cf_email", "cf_phone"];
    for (const id of fields) {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (!el || !el.value.trim()) {
        if (el) { el.style.borderColor = "var(--red)"; el.focus(); }
        return;
      }
      el.style.borderColor = "";
    }
    setContactSent(true);
  };

  return (
    <div className="lp-audit">
      {/* ── TOPBAR ── */}
      <nav className="topbar">
        <div className="tb-l">
          <div className="tb-logo">LANNKIN<span>.</span>{" "}
            <span style={{ fontSize: 10, fontWeight: 500, color: "var(--text4)", letterSpacing: 0, marginLeft: 2 }}>
              Fait en France
            </span>
          </div>
          <div className="tb-sep" />
          <div className="tb-stat"><div className="tb-dot" />Anomalies détectées</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="tel:+33100000000" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text2)", textDecoration: "none", fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span style={{ color: "var(--text)" }}>+33 1 00 00 00 00</span>
            <span style={{ color: "var(--text4)", fontWeight: 400, fontSize: 10 }}>&middot; Conseiller dispo 9h-17h30</span>
          </a>
          <button className="tb-btn" onClick={scrollToForm}>Lancer l&apos;audit</button>
        </div>
      </nav>

      {/* ── LOADER ── */}
      <div className={`loader${loading ? " on" : ""}`}>
        <div className="ld-ring" />
        <div className="ld-t">SCAN EN COURS</div>
        <div className="ld-p">Analyse en cours de votre compte Google Ads sur les 90 derniers jours. Veuillez patienter...</div>
        <div className="ld-bar"><div className="ld-fill" style={{ width: `${loadPct}%` }} /></div>
        <div className="ld-steps">
          {LOAD_STEPS.map((txt, i) => (
            <div key={i} className={`ld-s${i < loadStep ? " done" : i === loadStep ? " cur" : ""}`}>
              <i />{txt}
            </div>
          ))}
        </div>
      </div>

      {/* ── EXIT POPUP ── */}
      <div className={`exit-popup${exitPopup ? " on" : ""}`}>
        <div className="exit-card">
          <button className="exit-close" onClick={() => setExitPopup(false)}>&times;</button>
          <div style={{ fontSize: 40, marginBottom: 12 }}>&#9888;&#65039;</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6, color: "var(--text)" }}>Attendez, ne partez pas sans votre argent !</div>
          <div style={{ fontSize: 14, color: "var(--text3)", marginBottom: 20, lineHeight: 1.6 }}>
            Nos équipes <strong style={{ color: "var(--blue)" }}>Google Partner</strong> peuvent effectuer une procédure complète de remboursement auprès de Google Ads pour récupérer vos clics frauduleux.
          </div>
          <div style={{ background: "var(--reda)", border: "1px solid var(--redb)", borderRadius: 10, padding: "14px 18px", marginBottom: 20, textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--red)", marginBottom: 4 }}>Certains de nos clients ont récupéré plus de 5 000$</div>
            <div style={{ fontSize: 12, color: "var(--text2)" }}>En clics frauduleux remboursés par Google grâce à notre procédure d&apos;audit et nos dossiers de preuves.</div>
          </div>
          <a href="tel:+33100000000" style={{ display: "block", background: "var(--red)", color: "#fff", padding: 14, borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", marginBottom: 10 }}>
            Appelez-nous : +33 1 00 00 00 00
          </a>
          <div style={{ fontSize: 11, color: "var(--text4)", marginBottom: 16 }}>Lun-Ven, 9h à 17h30 (heure de Paris)</div>
          <div style={{ fontSize: 13, color: "var(--text3)", cursor: "pointer", textDecoration: "underline" }} onClick={() => setExitPopup(false)}>
            Non merci, continuer la navigation
          </div>
        </div>
      </div>

      {/* ── HERO BAR ── */}
      <div className="hero-bar">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              <span className="red">Vous perdez de l&apos;argent</span> sur Google Ads sans le savoir. Découvrez combien avec notre{" "}
              <span className="blue">audit gratuit</span>.
            </h1>
            <p>Notre script analyse les 90 derniers jours de votre compte et identifie les clics provenant de zones que vous ne ciblez pas : robots, trafic invalide, pays suspects.</p>
          </div>
          <div className="hero-tags">
            <div className="htag red">Clics robots</div>
            <div className="htag amber">Hors zone</div>
            <div className="htag blue">Audit 90 jours</div>
          </div>
        </div>
      </div>

      {/* ── MAIN 2-COL ── */}
      <section className="lp-main">
        {/* LEFT: FORM */}
        <div className="pl" id="formPanel" ref={panelRef}>
          <div className="pl-head">
            <div className="pl-icon">&#128269;</div>
            <div className="pl-tag">DIAGNOSTIC</div>
          </div>
          <div className="pl-sub">Répondez en 2 min, résultats instantanés</div>
          <div className="prog">
            <div className="prog-h">
              <span className="prog-l">PROGRESSION</span>
              <span className="prog-v" style={done ? { color: "var(--green)" } : undefined}>{pct}%</span>
            </div>
            <div className="prog-tr">
              <div className="prog-fl" style={{ width: `${pct}%`, ...(done ? { background: "linear-gradient(90deg,#2b8a3e,#40c057)" } : {}) }} />
            </div>
          </div>

          {/* STEP 1 */}
          <div className={`fs${step === 1 && !done ? " on" : ""}`} id="s1">
            <div className="fs-num">ÉTAPE 01</div>
            <h3>Votre activité Google Ads</h3>
            <p className="desc">Commençons par comprendre votre profil.</p>
            <div className="fd">
              <label>Budget mensuel Google Ads</label>
              <div className="opts" data-n="budget" data-t="single">
                <div className="op" data-v="500"><div className="ck" />Moins de 500€/mois</div>
                <div className="op" data-v="2000"><div className="ck" />500$ - 2 000€/mois</div>
                <div className="op" data-v="5000"><div className="ck" />2 000$ - 5 000€/mois</div>
                <div className="op" data-v="10000"><div className="ck" />5 000$ - 10 000€/mois</div>
                <div className="op" data-v="20000"><div className="ck" />10 000$+ /mois</div>
              </div>
            </div>
            <div className="fd">
              <label>Zones ciblées</label>
              <div className="opts og" data-n="geo" data-t="multi">
                <div className="op" data-v="local"><div className="ck" />Local / Ville</div>
                <div className="op" data-v="regional"><div className="ck" />Régional</div>
                <div className="op" data-v="national"><div className="ck" />National</div>
                <div className="op" data-v="international"><div className="ck" />International</div>
              </div>
            </div>
            <div className="fnav"><div /><button className="b-next" onClick={() => goStep(2)}>Suivant &rarr;</button></div>
          </div>

          {/* STEP 2 */}
          <div className={`fs${step === 2 && !done ? " on" : ""}`} id="s2">
            <div className="fs-num">ÉTAPE 02</div>
            <h3>Votre entreprise</h3>
            <p className="desc">Pour calibrer l&apos;analyse selon votre secteur.</p>
            <div className="fd">
              <label>Thématique / Secteur</label>
              <div className="opts og" data-n="sector" data-t="single">
                <div className="op" data-v="artisan"><div className="ck" />Artisan / Local</div>
                <div className="op" data-v="ecom"><div className="ck" />E-commerce</div>
                <div className="op" data-v="leadgen"><div className="ck" />Lead generation</div>
                <div className="op" data-v="other"><div className="ck" />Autre</div>
              </div>
            </div>
            <div className="fd">
              <label>Qui gère vos campagnes ?</label>
              <div className="opts" data-n="manager" data-t="single">
                <div className="op" data-v="self"><div className="ck" />Moi-même / en interne</div>
                <div className="op" data-v="agency"><div className="ck" />Une agence</div>
                <div className="op" data-v="freelance"><div className="ck" />Un freelance</div>
              </div>
            </div>
            <div className="fnav">
              <button className="b-back" onClick={() => goStep(1)}>&larr; Retour</button>
              <button className="b-next" onClick={() => goStep(3)}>Suivant &rarr;</button>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`fs${step === 3 && !done ? " on" : ""}`} id="s3">
            <div className="fs-num">ÉTAPE 03</div>
            <h3>Stratégie &amp; anomalies</h3>
            <p className="desc">Dernières questions avant de passer à l&apos;identification.</p>
            <div className="fd">
              <label>Stratégie d&apos;enchère utilisée</label>
              <div className="opts" data-n="bidding" data-t="single">
                <div className="op" data-v="cpc"><div className="ck" />CPC manuel</div>
                <div className="op" data-v="max_conv"><div className="ck" />Maximiser les conversions</div>
                <div className="op" data-v="cpa"><div className="ck" />CPA cible</div>
                <div className="op" data-v="roas"><div className="ck" />ROAS cible</div>
                <div className="op" data-v="dunno"><div className="ck" />Je ne sais pas</div>
              </div>
            </div>
            <div className="fd">
              <label>Avez-vous remarqué des clics suspects ?</label>
              <div className="opts" data-n="suspect" data-t="single">
                <div className="op" data-v="yes"><div className="ck" />Oui, j&apos;ai remarqué des anomalies</div>
                <div className="op" data-v="maybe"><div className="ck" />Je ne sais pas / jamais vérifié</div>
                <div className="op" data-v="no"><div className="ck" />Non, tout semble normal</div>
              </div>
            </div>
            <div className="fnav">
              <button className="b-back" onClick={() => goStep(2)}>&larr; Retour</button>
              <button className="b-next" onClick={() => goStep(4)}>Suivant &rarr;</button>
            </div>
          </div>

          {/* STEP 4 */}
          <div className={`fs${step === 4 && !done ? " on" : ""}`} id="s4">
            <div className="fs-num">ÉTAPE 04</div>
            <h3>Vos coordonnées &amp; ID Google Ads</h3>
            <p className="desc">
              Pour générer votre rapport personnalisé, nous avons besoin de votre{" "}
              <strong style={{ color: "var(--blue)" }}>ID de compte Google Ads</strong> et de vos coordonnées pour vous présenter les résultats.
            </p>
            <div className="fd"><label>Prénom &amp; société <span className="rq">*</span></label><input className="lp-inp" id="f_name" placeholder="Ex: Jean - MonEntreprise" /></div>
            <div className="fd"><label>Téléphone <span className="rq">*</span></label><input className="lp-inp" id="f_phone" placeholder="+1 XXX XXX XXXX" /></div>
            <div className="fd"><label>Email professionnel <span className="rq">*</span></label><input className="lp-inp" id="f_email" placeholder="vous@entreprise.com" /></div>
            <div className="fd"><label>ID compte Google Ads <span className="rq">*</span></label><input className="lp-inp" id="f_gads_id" placeholder="Ex: 123-456-7890" /></div>
            <div className="hint"><strong>Où trouver l&apos;ID ?</strong> Connectez-vous à ads.google.com &rarr; en haut à droite, format <span className="mono">XXX-XXX-XXXX</span></div>
            <div className="info-note"><strong>Pourquoi l&apos;ID ?</strong> Notre équipe exécute un script d&apos;export sur vos 90 derniers jours pour identifier chaque clic hors zone et constituer votre dossier de remboursement Google.</div>
            <div className="secure"><strong>100% sécurisé</strong>. Un expert Google Ads senior vous appellera pour vous présenter vos résultats détaillés.</div>
            <div className="fnav" style={{ flexDirection: "column", gap: 6 }}>
              <button className="b-sub" onClick={submitAndScan}>Lancer l&apos;analyse de mon compte</button>
              <button className="b-back" onClick={() => goStep(3)} style={{ width: "100%", textAlign: "center" }}>&larr; Modifier mes réponses</button>
            </div>
          </div>

          {/* DONE */}
          <div className={`done-msg${done ? " on" : ""}`}>
            <div style={{ fontSize: 40 }}>&#10003;</div>
            <h3>Rapport en cours de génération !</h3>
            <p>
              Un expert Google Ads senior LANNKIN va vous <strong style={{ color: "var(--blue)" }}>appeler</strong> pour vous présenter vos résultats :<br /><br />
              - Le rapport complet des clics hors zone<br />
              - Les montants exacts récupérables<br />
              - Le dossier de remboursement Google<br /><br />
              <span style={{ color: "var(--amber)" }}>Gardez votre téléphone à portée</span>
            </p>
            <div style={{ marginTop: 20, padding: 16, background: "var(--bluea)", border: "1px solid var(--blueb)", borderRadius: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--blue)", marginBottom: 6 }}>Vous voulez le rapport Excel complet maintenant ?</div>
              <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 12 }}>Appelez-nous pour recevoir immédiatement votre export détaillé avec tous les clics frauduleux identifiés.</div>
              <a href="tel:+33100000000" style={{ display: "inline-block", background: "var(--blue)", color: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>+33 1 00 00 00 00</a>
              <div style={{ fontSize: 10, color: "var(--text4)", marginTop: 6 }}>Lun-Ven, 9h à 17h30 (heure de Paris)</div>
            </div>
          </div>
        </div>

        {/* RIGHT: DASHBOARD */}
        <div className="pr">
          <div className="rp-tag">APERÇU DES RÉSULTATS</div>
          <div className="rp-title">Rapport de fuite budget <span>/ preview</span></div>

          <div className="alert">
            <div className="alert-i">&#9888;&#65039;</div>
            <div className="alert-txt">
              <h4>Anomalies géographiques détectées</h4>
              <p>Notre pré-analyse révèle un fort potentiel de clics provenant de <strong>zones que vous ne ciblez pas</strong>. Ce trafic est souvent généré par des <strong>robots</strong> ou du trafic invalide non filtré par Google.</p>
            </div>
          </div>

          <div className="kpi-row">
            <div className="kp"><div className="kp-l">BUDGET PERDU</div><div className="kp-v red">{budget ? `${fmt(loss)}$` : "-"}</div><div className="kp-s">sur 90 jours</div></div>
            <div className="kp"><div className="kp-l">CLICS HORS ZONE</div><div className="kp-v amber">{budget ? `${clicks}+` : "-"}</div><div className="kp-s">invalides</div></div>
            <div className="kp"><div className="kp-l">PAYS SUSPECTS</div><div className="kp-v blue">{budget ? "7" : "-"}</div><div className="kp-s">hors ciblage</div></div>
            <div className="kp"><div className="kp-l">REMBOURSABLE</div><div className="kp-v green">{budget ? `${fmt(refund)}$` : "-"}</div><div className="kp-s">via Google</div></div>
          </div>

          <div className="trust-row">
            <div className="trust-b"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>+10 ans d&apos;expérience</div>
            <div className="trust-b"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>200+ comptes audités</div>
            <div className="trust-b"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Agence senior</div>
          </div>

          <div className="slbl red">CLICS DÉTECTÉS HORS DE VOS ZONES</div>
          <div className="cblk">
            <div className="cblk-h">
              <div />
              <div className="lock-badge" style={done ? { color: "var(--green)", background: "var(--greena)", borderColor: "rgba(43,138,62,.15)" } : { color: "var(--red)", background: "var(--reda)", borderColor: "var(--redb)" }}>
                {done ? "Débloqué" : "Verrouillé"}
              </div>
            </div>
            <div className="bwrap">
              <div className={`bglass${done ? " off" : ""}`}>
                <div className="lk-icon">&#128274;</div>
                <div className="lk-t">Données verrouillées</div>
                <div className="lk-s">Renseignez votre ID Google Ads et vos coordonnées pour débloquer le rapport. Un expert vous appellera avec les résultats</div>
              </div>
              <table className="ctbl">
                <thead>
                  <tr><th>PAYS / RÉGION</th><th>CLICS</th><th>COÛT</th><th>TYPE</th><th>RISQUE</th></tr>
                </thead>
                <tbody>
                  {FAKE_CLICKS.map((r, i) => (
                    <tr key={i}>
                      <td>
                        <div className="tc-c"><span className="tc-f">{r.flag}</span><span className="tc-n">{r.name}</span></div>
                        <div className="tc-region">{r.region}</div>
                      </td>
                      <td><span className="tc-clicks">{r.clicks}</span></td>
                      <td><span className={`tc-cost ${r.risk > 70 ? "red" : r.risk > 50 ? "amber" : "green"}`}>{r.cost}</span></td>
                      <td><span className={`tc-type ${r.type}`}>{TYPE_LABELS[r.type]}</span></td>
                      <td>
                        <div className="risk-bar">
                          <div className="risk-track"><div className="risk-fill" style={{ width: `${r.risk}%`, background: riskColor(r.type) }} /></div>
                          <span className="risk-num" style={{ color: riskColor(r.type) }}>{r.risk}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bwrap" style={{ marginBottom: 20 }}>
            <div className={`bglass${done ? " off" : ""}`}>
              <div className="lk-icon">&#128274;</div>
              <div className="lk-t">Graphique verrouillé</div>
              <div className="lk-s">Complétez l&apos;étape 4 pour débloquer</div>
            </div>
            <div className="chart-wrap">
              <div className="chart-title">RÉPARTITION DES CLICS PAR PROVENANCE</div>
              <div className="chart-flex">
                <div className="chart-canvas"><canvas ref={canvasRef} width={150} height={150} /></div>
                <div className="chart-legend">
                  {PIE_DATA.map((d) => (
                    <div className="leg-item" key={d.label}>
                      <div className="leg-dot" style={{ background: d.color }} />
                      <span className="leg-label">{d.label}</span>
                      <span className="leg-val" style={{ color: d.color }}>{d.val}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="slbl green">PROCESSUS D&apos;AUDIT</div>
          <div className="drow">
            <div className="dc"><div className="dc-l">EXTRACTION</div><div className="dc-v blue">90 jours</div><div className="dc-s">Export complet des clics</div></div>
            <div className="dc"><div className="dc-l">DÉTECTION</div><div className="dc-v red">Robots</div><div className="dc-s">Patterns suspects</div></div>
            <div className="dc"><div className="dc-l">REMBOURSEMENT</div><div className="dc-v green">Google</div><div className="dc-s">Dossier officiel</div></div>
          </div>

          <div className="pricing">
            <strong>L&apos;audit initial est 100% gratuit.</strong> Si vous souhaitez aller plus loin (optimisation, demandes de remboursement, gestion continue), nous proposons un accompagnement sur mesure par nos experts seniors.
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH: CAS RÉEL ── */}
      <div className="full-section">
        <div className="slbl red">CAS RÉEL - AUDIT CLIENT LANNKIN</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 18 }}>Voici ce que notre audit révèle sur un vrai compte</div>
        <div className="case-wrap case-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          <div style={{ overflow: "hidden", borderRight: "1px solid var(--bd)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.lannkin.fr/wp-content/uploads/2024/11/Capture-decran-2024-11-06-a-14.56.26.png" alt="Export Google Ads - rapport Excel des clics frauduleux" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div className="case-caption" style={{ padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "var(--text)" }}>Voici un exemple de rapport Excel que vous recevrez</div>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7, marginBottom: 14 }}>
              Ce client ciblait uniquement le <span className="red">France m??tropolitaine</span>. Notre script d&apos;export a révélé des dizaines de clics provenant de <span className="red">Tunisie</span> (Tunis, Sousse, Nabeul, Ben Arous, Sfax, Monastir, Kairouan) et d&apos;<span className="red">Ukraine</span> (Zaporizhzhia).
            </p>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7, marginBottom: 16 }}>
              Tous ces clics ont été facturés par Google, zéro chance de conversion. En nous contactant, vous recevez un <strong>rapport complet encore plus détaillé</strong> avec l&apos;ensemble des données exploitables pour votre demande de remboursement.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 600, padding: "5px 12px", background: "var(--greena)", color: "var(--green)", border: "1px solid rgba(43,138,62,.12)", borderRadius: 20 }}>Identité client protégée</span>
              <span style={{ fontSize: 11, fontWeight: 600, padding: "5px 12px", background: "var(--bluea)", color: "var(--blue)", border: "1px solid var(--blueb)", borderRadius: 20 }}>Google Partner</span>
              <span style={{ fontSize: 11, fontWeight: 600, padding: "5px 12px", background: "var(--ambera)", color: "var(--amber)", border: "1px solid rgba(230,119,0,.12)", borderRadius: 20 }}>Outil 100% safe</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FULL WIDTH: GOOGLE + CLICKCEASE ── */}
      <div className="full-section" style={{ background: "var(--bg2)" }}>
        <div className="slbl blue">CE QUE VOUS DEVEZ SAVOIR</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 18 }}>Deux informations que 90% des annonceurs ignorent</div>
        <div className="info-grid">
          <div className="info-card">
            <h4>Google propose un remboursement officiel</h4>
            <p>
              Ce que la plupart des annonceurs ignorent : Google met à disposition un formulaire officiel pour signaler les clics frauduleux et obtenir un remboursement.<br /><br />
              <a href="https://support.google.com/google-ads/contact/click_quality" target="_blank" rel="noopener noreferrer">support.google.com/google-ads/contact/click_quality</a><br /><br />
              Pour que la demande soit acceptée, il faut fournir des <strong>preuves concrètes</strong> : export des clics par zone, patterns suspects, dates et montants. C&apos;est exactement ce que notre audit produit.
            </p>
          </div>
          <div className="info-card">
            <h4>ClickCease ne suffit pas <span className="warn-tag">IMPORTANT</span></h4>
            <p>
              Des outils comme ClickCease, ClickGuard ou PPC Protect promettent de bloquer les IP frauduleuses. Le problème : <strong style={{ color: "var(--red)" }}>Google limite le blocage à 500 IP par compte</strong>.<br /><br />
              Avec des milliers de bots qui changent d&apos;IP via VPN et proxys, 500 exclusions ne servent quasiment à rien.<br /><br />
              <strong>La seule solution :</strong> identifier les patterns via un export géographique détaillé, puis demander un remboursement directement à Google.
            </p>
          </div>
        </div>
      </div>

      {/* ── PROBLÈME ── */}
      <section className="sec alt">
        <div className="sec-in">
          <div className="stag red">LE PROBLÈME</div>
          <div className="sh">Google vous facture des clics qui <span style={{ color: "var(--red)" }}>ne convertiront jamais</span></div>
          <div className="sp">Vous ciblez Paris, mais des clics arrivent de Tunisie ou d&apos;Ukraine. Des robots et du trafic invalide que Google ne filtre pas, et votre budget en fait les frais.</div>
          <div className="g3">
            <div className="gc"><div className="gc-icon">&#128200;</div><h3>Clics hors zone</h3><p>Google diffuse vos annonces à des utilisateurs situés en dehors de vos zones ciblées. Des clics facturés, zéro conversion.</p></div>
            <div className="gc"><div className="gc-icon">&#129302;</div><h3>Trafic robot</h3><p>Des bots cliquent depuis des pays que vous ne ciblez pas. Google n&apos;en détecte qu&apos;une partie. Les bloqueurs d&apos;IP sont limités à 500 adresses.</p></div>
            <div className="gc"><div className="gc-icon">&#128184;</div><h3>Budget gaspillé en silence</h3><p>Sans audit, ces fuites passent inaperçues. Sur 5 000€/mois, ça représente 500$ à 2 000$ perdus par trimestre.</p></div>
          </div>
        </div>
      </section>

      <div className="sbar">
        <div className="sbar-in">
          <div><div className="sv-n">73%</div><div className="sv-l">Des comptes ont des clics hors zone</div></div>
          <div><div className="sv-n">18%</div><div className="sv-l">Du budget moyen gaspillé</div></div>
          <div><div className="sv-n">500</div><div className="sv-l">IP max bloquables (limite Google)</div></div>
          <div><div className="sv-n">200+</div><div className="sv-l">Comptes audités par LANNKIN</div></div>
        </div>
      </div>

      <section className="sec">
        <div className="sec-in">
          <div className="stag blue">COMMENT ÇA MARCHE</div>
          <div className="sh">3 étapes pour <span style={{ color: "var(--blue)" }}>récupérer votre argent</span></div>
          <div className="sp">Un processus basé sur des données concrètes de votre compte Google Ads.</div>
          <div className="g3">
            <div className="gc"><div className="gc-icon">&#128221;</div><h3>1. Remplissez le diagnostic</h3><p>En 2 minutes, répondez au questionnaire et fournissez votre ID Google Ads pour lancer l&apos;export.</p></div>
            <div className="gc"><div className="gc-icon">&#128300;</div><h3>2. On analyse vos 90 jours</h3><p>Notre script extrait chaque clic par pays et région. On identifie les patterns suspects et les montants perdus.</p></div>
            <div className="gc"><div className="gc-icon">&#128176;</div><h3>3. On récupère votre argent</h3><p>Nous constituons le dossier et contactons Google via leur procédure officielle de remboursement.</p></div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="sec-in">
          <div className="stag green">POURQUOI LANNKIN</div>
          <div className="sh">Une agence <span style={{ color: "var(--green)" }}>Google Ads senior</span> basée à Paris</div>
          <div className="sp">+10 ans d&apos;expérience, Google Partner, et une expertise particulière auprès des artisans et commerces locaux. Nous savons exactement où chercher les fuites que les autres ne voient pas.</div>
          <div className="g3">
            <div className="gc"><div className="gc-icon">&#128170;</div><h3>Spécialistes artisans &amp; locaux</h3><p>Nous travaillons beaucoup avec les artisans, commerces locaux et PME. On connaît vos enjeux et vos budgets, chaque dollar compte.</p></div>
            <div className="gc"><div className="gc-icon">&#127919;</div><h3>Google Partner certifié</h3><p>Notre équipe est certifiée Google Partner avec une vraie expérience terrain. Pas de stagiaires, pas de templates, que du sur-mesure.</p></div>
            <div className="gc"><div className="gc-icon">&#9889;</div><h3>Scripts propriétaires</h3><p>Des scripts d&apos;extraction avancés pour croiser données géo, mots-clés et clics, impossible à faire manuellement à cette échelle.</p></div>
          </div>
          <div style={{ marginTop: 24, borderRadius: 14, overflow: "hidden", border: "1px solid var(--bd)" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9!2d2.3468!3d48.8278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b4a4e8b8a1%3A0x1!2s7%20Rue%20Vulpian%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="LANNKIN - Paris, France" />
            <div style={{ padding: "14px 18px", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>LANNKIN S.A.S. - Paris, France</div>
                <div style={{ fontSize: 12, color: "var(--text3)" }}>7 Rue Vulpian, 75013 Paris, France</div>
              </div>
              <a href="tel:+33100000000" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--blue)", color: "#fff", padding: "8px 18px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>+33 1 00 00 00 00</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-s">
        <div className="stag red" style={{ justifyContent: "center" }}>AUDIT GRATUIT</div>
        <h2>Arrêtez de <span style={{ color: "var(--red)" }}>payer pour des robots</span></h2>
        <p>En 2 minutes, découvrez combien vous perdez et combien vous pouvez récupérer via la procédure officielle Google.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <button className="cta-big" onClick={scrollToForm}>Lancer mon audit gratuit</button>
          <a href="tel:+33100000000" className="cta-big" style={{ background: "var(--blue)" }}>Appeler un conseiller</a>
          <a href="#contactForm" className="cta-big" style={{ background: "var(--green)" }}>Prendre rendez-vous</a>
        </div>
        <div style={{ fontSize: 12, color: "var(--text4)", position: "relative", zIndex: 1 }}>Conseiller disponible du lundi au vendredi, 9h à 17h30 (heure de Paris)</div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="sec" id="contactForm" style={{ background: "#0C0C0C" }}>
        <div className="sec-in" style={{ maxWidth: 640 }}>
          <div className="stag blue" style={{ justifyContent: "center" }}>CONTACT</div>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="sh" style={{ textAlign: "center" }}>Une question ? <span style={{ color: "var(--blue)" }}>Contactez-nous</span></div>
            <p style={{ fontSize: 14, color: "var(--text3)" }}>Remplissez le formulaire ou appelez-nous au <a href="tel:+33100000000" style={{ color: "var(--blue)", fontWeight: 700, textDecoration: "none" }}>+33 1 00 00 00 00</a></p>
          </div>
          {!contactSent ? (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <input className="lp-inp" placeholder="Prénom" id="cf_first" />
                <input className="lp-inp" placeholder="Nom" id="cf_last" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <input className="lp-inp" placeholder="Email" id="cf_email" />
                <input className="lp-inp" placeholder="Téléphone (+33 X XX XX XX XX)" id="cf_phone" />
              </div>
              <div style={{ marginBottom: 12 }}>
                <input className="lp-inp" placeholder="Société" id="cf_company" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <textarea className="lp-inp" placeholder="Décrivez votre besoin ou votre problème Google Ads..." id="cf_message" style={{ minHeight: 100, resize: "vertical" }} />
              </div>
              <button className="b-sub" onClick={sendContact} style={{ background: "var(--blue)" }}>Envoyer ma demande</button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>&#10003;</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--green)", marginBottom: 4 }}>Message envoyé !</div>
              <div style={{ fontSize: 13, color: "var(--text3)" }}>Nous vous recontacterons rapidement.</div>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="footer-inner">
          <div className="ft-col">
            <h4>LANNKIN S.A.S.</h4>
            <p>SIRET : 000 000 000 00000</p>
            <p>7 Rue Vulpian</p>
            <p>75013 Paris</p>
            <p>France</p>
          </div>
          <div className="ft-col">
            <h4>Contact</h4>
            <a href="mailto:info@lannkin.fr">info@lannkin.fr</a>
            <a href="tel:+33100000000">+33 1 00 00 00 00</a>
            <p style={{ marginTop: 6, fontSize: 11, color: "var(--text4)" }}>Lun-Ven, 9h à 17h30 (heure de Paris)</p>
          </div>
          <div className="ft-col">
            <h4>Services</h4>
            <a href="/services/google-ads/">Google Ads</a>
            <a href="/services/">Pack Smart Business</a>
            <a href="/services/conception-web/">Conception de site web</a>
            <a href="/services/seo/">SEO</a>
          </div>
        </div>
        <div className="ft-bottom"><span className="ft-copy">&copy; 2026 LANNKIN S.A. - Tous droits réservés - France</span></div>
      </footer>
    </div>
  );
}
