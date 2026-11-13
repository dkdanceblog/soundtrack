import { CHARTOVA_WEEKS, YANDEX_TRACK_IDS } from "./chartoteka-data";

// Same normalisation as scripts/build-chartoteka.py.
function norm(value: string) {
  return value.toLowerCase().replace(/ё/g, "е").replace(/\(.*?\)/g, "").replace(/[^a-zа-я0-9]/g, "");
}

function firstArtist(artist: string) {
  return artist.replace(/[«»]/g, "")
    .split(/\s*(?:,|&|\bfeat\.?|\bft\.?|\bfeaturing\b|\sи\s|\+|\sx\s|\svs\.?\s)\s*/i)[0];
}

export function songKey(artist: string, title: string) {
  return `${norm(firstArtist(artist))}|${norm(title)}`;
}

// Track ids come from the chart archive's own audio links, matched by artist and title.
export function yandexTrackUrl(artist: string, title: string): string | null {
  const id = YANDEX_TRACK_IDS[songKey(artist, title)];
  return id ? `https://music.yandex.ru/track/${id}` : null;
}

export type ChartovaWeek = { date: string; rank: number };

export function chartovaWeeks(artist: string, title: string): ChartovaWeek[] {
  const raw = CHARTOVA_WEEKS[songKey(artist, title)];
  if (!raw) return [];
  return raw.split(",").map((entry) => {
    const [stamp, rank] = entry.split(".");
    const year = Number(stamp.slice(0, 2));
    return { date: `${year > 50 ? 19 : 20}${stamp.slice(0, 2)}-${stamp.slice(2, 4)}-${stamp.slice(4, 6)}`, rank: Number(rank) };
  });
}

const DAY_MS = 86_400_000;

// The «Чартова дюжина» issue closest to the date, if the song was in it within maxDays.
export function chartovaNear(artist: string, title: string, date: string, maxDays = 7): (ChartovaWeek & { distanceDays: number }) | null {
  const target = Date.parse(`${date}T00:00:00Z`);
  let best: (ChartovaWeek & { distanceDays: number }) | null = null;
  for (const week of chartovaWeeks(artist, title)) {
    const distanceDays = Math.round(Math.abs(Date.parse(`${week.date}T00:00:00Z`) - target) / DAY_MS);
    if (distanceDays <= maxDays && (!best || distanceDays < best.distanceDays)) best = { ...week, distanceDays };
  }
  return best;
}
