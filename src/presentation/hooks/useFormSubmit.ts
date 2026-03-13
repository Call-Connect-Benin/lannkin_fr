import { useCallback, useRef } from "react";

const TIMEOUT_MS = 15_000;

function getErrorMessage(error: unknown, status?: number): string {
  // Timeout (AbortController)
  if (error instanceof DOMException && error.name === "AbortError") {
    return "Le serveur met trop de temps à répondre. Vérifiez votre connexion et réessayez.";
  }

  // Network error (fetch failed entirely)
  if (error instanceof TypeError && /fetch|network/i.test(error.message)) {
    return "Impossible de contacter le serveur. Vérifiez votre connexion internet.";
  }

  // HTTP status-based messages
  if (status === 429) {
    return (error instanceof Error && error.message) || "Trop de requêtes. Réessayez dans quelques minutes.";
  }
  if (status === 422) {
    return (error instanceof Error && error.message) || "Vérifiez les informations saisies.";
  }
  if (status === 503) {
    return (error instanceof Error && error.message) || "Le service est temporairement indisponible. Réessayez dans quelques instants.";
  }
  if (status && status >= 500) {
    return (error instanceof Error && error.message) || "Une erreur est survenue côté serveur. Veuillez réessayer dans quelques instants.";
  }

  // Fallback
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "Une erreur inattendue est survenue. Veuillez réessayer.";
}

interface SubmitOptions {
  url: string;
  body: Record<string, unknown>;
}

interface SubmitResult {
  ok: boolean;
  error?: string;
}

export function useFormSubmit() {
  const abortRef = useRef<AbortController | null>(null);

  const submit = useCallback(async ({ url, body }: SubmitOptions): Promise<SubmitResult> => {
    // Abort any in-flight request
    abortRef.current?.abort();

    const controller = new AbortController();
    abortRef.current = controller;

    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const serverMsg = (json as { error?: string }).error;
        const err = new Error(serverMsg ?? "");
        return { ok: false, error: getErrorMessage(err, res.status) };
      }

      return { ok: true };
    } catch (err) {
      clearTimeout(timeoutId);
      return { ok: false, error: getErrorMessage(err) };
    }
  }, []);

  return { submit };
}
