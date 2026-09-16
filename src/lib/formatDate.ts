/**
 * Formats "2026-09-14" as "14 September 2026", or as "September 2026" with
 * precision "month". Parsed as UTC so the day never shifts with the time zone.
 */
export function formatDate(iso: string, precision: "day" | "month" = "day"): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, (month || 1) - 1, day || 1));
  return new Intl.DateTimeFormat("en-GB", {
    day: precision === "day" ? "numeric" : undefined,
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
