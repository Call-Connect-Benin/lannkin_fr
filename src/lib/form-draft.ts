/**
 * Form draft persistence (localStorage).
 *
 * Used to auto-save form progress so a user can close or refresh the tab
 * and find their text back when they return. Files are NOT persisted —
 * localStorage cannot serialise File objects.
 */

const TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

type DraftEnvelope<T> = { data: T; savedAt: number };

export const DRAFT_KEYS = {
  formulaireConception: "lannkin:draft:formulaire-conception",
  devisGratuit: "lannkin:draft:devis-gratuit",
} as const;

export function loadDraft<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const env = JSON.parse(raw) as DraftEnvelope<T>;
    if (!env || typeof env.savedAt !== "number") return null;
    if (Date.now() - env.savedAt > TTL_MS) {
      window.localStorage.removeItem(key);
      return null;
    }
    return env.data;
  } catch {
    return null;
  }
}

export function saveDraft<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  try {
    const env: DraftEnvelope<T> = { data, savedAt: Date.now() };
    window.localStorage.setItem(key, JSON.stringify(env));
  } catch {
    // Quota exceeded or storage unavailable — silently ignore
  }
}

export function clearDraft(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignore
  }
}
