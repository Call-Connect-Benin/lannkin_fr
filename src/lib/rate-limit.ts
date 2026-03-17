const stores = new Map<
  string,
  Map<string, { count: number; firstRequest: number }>
>();

export function checkRateLimit(
  storeName: string,
  ip: string,
  limit = 5,
  windowMs = 60 * 60 * 1000,
): boolean {
  if (!stores.has(storeName)) stores.set(storeName, new Map());
  const store = stores.get(storeName)!;
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now - entry.firstRequest > windowMs) {
    store.set(ip, { count: 1, firstRequest: now });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

export function getClientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}
