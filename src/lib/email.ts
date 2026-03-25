import nodemailer from "nodemailer";

const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp-relay.brevo.com",
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465, false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER ?? "",
    pass: process.env.SMTP_PASSWORD ?? "",
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 15_000,
});

export const SMTP_FROM =
  process.env.SMTP_FROM ??
  process.env.SMTP_USER ??
  "noreply@lannkin.ca";

export const SMTP_TO = process.env.SMTP_TO ?? "info@lannkin.ca";

// ---------------------------------------------------------------------------
// HTML email builder
// ---------------------------------------------------------------------------

function row(label: string, value: string | undefined) {
  if (!value) return "";
  // Meta rows (URL, IP) — lighter style
  const isMeta = label === "Formulaire (URL)" || label === "Adresse IP";
  if (isMeta) {
    return `
    <tr>
      <td style="padding:6px 12px;background:#fafafa;font-weight:500;font-size:11px;width:160px;vertical-align:top;color:#9ca3af;">${label}</td>
      <td style="padding:6px 12px;font-size:11px;color:#6b7280;vertical-align:top;font-family:monospace;">${value}</td>
    </tr>`;
  }
  return `
    <tr>
      <td style="padding:8px 12px;background:#f5f5f5;font-weight:600;font-size:13px;width:160px;vertical-align:top;color:#374151;">${label}</td>
      <td style="padding:8px 12px;font-size:13px;color:#1a1a1a;vertical-align:top;">${value}</td>
    </tr>`;
}

function separator() {
  return `<tr><td colspan="2" style="padding:0;height:1px;background:#e5e7eb;"></td></tr>`;
}

export function buildContactHtml(fields: Record<string, string | undefined>, title: string, { showBanner = true }: { showBanner?: boolean } = {}) {
  const entries = Object.entries(fields)
    .map(([k, v]) => k === "—" ? separator() : row(k, v))
    .join("");

  const banner = showBanner
    ? `<div style="background:#498f6d;padding:20px 24px;">
        <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">${title}</h1>
        <p style="margin:4px 0 0;color:rgba(255,255,255,.8);font-size:13px;">lannkin.ca</p>
      </div>`
    : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">
    ${banner}
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        ${entries}
      </table>
    </div>
    <div style="padding:12px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;">
      Envoyé depuis lannkin.ca — Ne pas répondre à cet email, répondez directement au client.
    </div>
  </div>
</body>
</html>`;
}
