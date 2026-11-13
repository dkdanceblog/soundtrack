export const FIRST_SUPPORTED_DATE = "1970-01-01";
export function todayUtc(now = new Date()) { return now.toISOString().slice(0, 10); }
export function isSupportedDate(value: string, today = todayUtc()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < FIRST_SUPPORTED_DATE || value > today) return false;
  const date = new Date(`${value}T12:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
