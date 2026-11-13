import type { Precision } from "./hits";
import { isSupportedDate } from "./date-policy";

export type LifeEntry = {
  age: number;
  date: string;
  artist: string;
  title: string;
  precision: Precision;
  color: string;
  milestone?: string;
};

export const MILESTONES: Readonly<Record<number, string>> = {
  0: "День рождения",
  1: "Первый год",
  7: "Первый класс",
  10: "Десять лет",
  16: "Шестнадцать",
  18: "Совершеннолетие",
  21: "Двадцать один",
  25: "Четверть века",
  30: "Тридцать",
  40: "Сорок",
  50: "Полвека",
  60: "Шестьдесят",
};

const pad = (value: number) => String(value).padStart(2, "0");

// 29 February birthdays are celebrated on 28 February in common years.
export function anniversary(birth: string, year: number) {
  const [, month, day] = birth.split("-").map(Number);
  const candidate = `${year}-${pad(month)}-${pad(day)}`;
  return isSupportedDate(candidate, "9999-12-31") ? candidate : `${year}-02-28`;
}

type Song = { title: string; artist: string; precision: Precision; color: string };

export function buildLife(birth: string, today: string, lookup: (date: string) => Song | null): LifeEntry[] {
  if (!isSupportedDate(birth, today)) return [];
  const startYear = Number(birth.slice(0, 4));
  const entries: LifeEntry[] = [];
  for (let year = startYear; ; year += 1) {
    const date = anniversary(birth, year);
    if (date > today) break;
    const song = lookup(date);
    if (!song) continue;
    const age = year - startYear;
    entries.push({
      age, date, artist: song.artist, title: song.title, precision: song.precision, color: song.color,
      ...(MILESTONES[age] ? { milestone: MILESTONES[age] } : {}),
    });
  }
  return entries;
}
