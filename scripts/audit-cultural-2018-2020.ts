import { publicPlatforms } from "../app/evidence-policy";
import { getBirthdayHit } from "../app/hits";
import { calibrateModernCharts } from "../app/cultural-sources-2018-2020";
import { MODERN_MULTICHART } from "../app/modern-multichart";

const start = new Date("2018-01-01T12:00:00Z");
const end = new Date("2025-12-31T12:00:00Z");
const dayMs = 24 * 60 * 60 * 1000;
const years = new Map<number, Map<string, number>>();
const weakResults: string[] = [];
const missingDatedEvidence: string[] = [];
const titleOnlyEvidence: string[] = [];
const versionMismatches: string[] = [];
const missing: string[] = [];
const emptyCalibratedWeeks = calibrateModernCharts(MODERN_MULTICHART)
  .filter((week) => week.chartDate >= "2018-01-01" && week.chartDate <= "2025-12-31" && week.candidates.length === 0)
  .map((week) => week.chartDate);


for (let value = start.getTime(); value <= end.getTime(); value += dayMs) {
  const date = new Date(value).toISOString().slice(0, 10);
  const year = Number(date.slice(0, 4));
  const hit = getBirthdayHit(date);
  if (!hit) {
    missing.push(date);
    continue;
  }

  const publicSignals = publicPlatforms(hit.sources);
  if (publicSignals.size === 0) weakResults.push(`${date}: ${hit.artist} — ${hit.title}`);
  if (!hit.sources.some((source) => source.id.startsWith("shazam-week-") || (source.kind === "датированный стриминговый чарт" && source.id.includes(hit.chartDate)))) missingDatedEvidence.push(`${date}: ${hit.artist} — ${hit.title}`);
  if (hit.sources.some((source) => source.id.startsWith("culture-"))) titleOnlyEvidence.push(`${date}: ${hit.artist} — ${hit.title}`);
  if (/demo version/i.test(hit.title) || (/травма фонк remix/i.test(hit.title) && /елена корикова/i.test(hit.artist))) {
    versionMismatches.push(`${date}: ${hit.artist} — ${hit.title}`);
  }

  const songs = years.get(year) ?? new Map<string, number>();
  const song = `${hit.artist} — ${hit.title}`;
  songs.set(song, (songs.get(song) ?? 0) + 1);
  years.set(year, songs);
}

const canonical = (value: string) => value
  .normalize("NFKC")
  .toLocaleLowerCase("ru-RU")
  .replace(/ё/g, "е")
  .replace(/[^a-zа-я0-9]+/g, " ")
  .replace(/\s+/g, " ")
  .trim();
const songTitle = (song: string) => song.split(" — ").slice(1).join(" — ");
const sameTitle = (left: string, right: string) => {
  const a = canonical(left);
  const b = canonical(right);
  return a === b || (Math.min(a.length, b.length) >= 5 && (a.includes(b) || b.includes(a)));
};
const distinctTitleCount = (songs: Iterable<string>) => {
  const titles: string[] = [];
  for (const song of songs) {
    const title = songTitle(song);
    if (!titles.some((existing) => sameTitle(existing, title))) titles.push(title);
  }
  return titles.length;
};

const summary = [...years.entries()].map(([year, songs]) => ({
  year,
  uniqueSongs: distinctTitleCount(songs.keys()),
  leaders: [...songs.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 12)
    .map(([song, days]) => ({ song, days })),
}));
const dominantOverload = summary.flatMap(({ year, leaders }) =>
  leaders.filter(({ days }) => days > 80).map(({ song, days }) => `${year}: ${song} — ${days} дней`),
);
const lowDiversity = summary
  .filter(({ uniqueSongs }) => uniqueSongs < 12)
  .map(({ year, uniqueSongs }) => `${year}: ${uniqueSongs} песен`);

const allSongs = new Set([...years.values()].flatMap((songs) => [...songs.keys()]));
const requiredAnchors = [
  "Life",
  "Грустный дэнс",
  "Юность",
  "Девочка танцуй",
  "Птичка",
  "Солнце Монако",
  "По барам",
  "За деньги да",
  "Царица",
  "Поезда",
  "Матушка",
  "Худи",
  "Наследство",
];
const absentAnchors = requiredAnchors.filter((anchor) => ![...allSongs].some((song) => sameTitle(songTitle(song), anchor)));
const rejectedRadioOnly = [...allSongs].filter((song) =>
  song.endsWith(" — Под гипнозом") || song.endsWith(" — Голоса"),
);

console.log(JSON.stringify({
  summary,
  errors: { missing, emptyCalibratedWeeks, weakResults, missingDatedEvidence, titleOnlyEvidence, versionMismatches, absentAnchors, rejectedRadioOnly, dominantOverload, lowDiversity },
}, null, 2));

if (missing.length || emptyCalibratedWeeks.length || weakResults.length || missingDatedEvidence.length || titleOnlyEvidence.length || versionMismatches.length || absentAnchors.length || rejectedRadioOnly.length || dominantOverload.length || lowDiversity.length) {
  process.exitCode = 1;
}
