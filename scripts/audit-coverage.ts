import { todayUtc } from "../app/date-policy";
import { assessPopularity, isEligibleRussianLanguageTrack, noChartEra } from "../app/evidence-policy";
import { getBirthdayHit } from "../app/hits";

const start = new Date("1970-01-01T12:00:00Z");
const end = new Date(`${todayUtc()}T12:00:00Z`);
const dayMs = 24 * 60 * 60 * 1000;

type YearAudit = {
  dates: number;
  week: number;
  month: number;
  year: number;
  monthlyChart: number;
  songs: Map<string, number>;
};

const years = new Map<number, YearAudit>();
const empty: string[] = [];
const wrongYear: string[] = [];
const wrongMonth: string[] = [];
const invalidLanguage: string[] = [];
const invalidSource: string[] = [];
const quality = { fewerThanThreeCandidates: 0, popularityNeedsReview: 0, reviewInNoChartEra: 0 };

for (let value = start.getTime(); value <= end.getTime(); value += dayMs) {
  const date = new Date(value).toISOString().slice(0, 10);
  const requestedYear = Number(date.slice(0, 4));
  const hit = getBirthdayHit(date);
  if (!hit) {
    empty.push(date);
    continue;
  }
  if (hit.year !== requestedYear || (hit.evidenceYear ?? Number(hit.chartDate.slice(0, 4))) !== requestedYear) wrongYear.push(date);
  if (hit.precision === "Месяц" && (hit.evidenceMonth ?? hit.chartDate.slice(0, 7)) !== date.slice(0, 7)) wrongMonth.push(date);
  if (!isEligibleRussianLanguageTrack(hit.title, hit.artist)) invalidLanguage.push(`${date}: ${hit.title}`);
  if (!/^https:\/\//.test(hit.sourceUrl) || !/^https:\/\//.test(hit.archiveUrl)) invalidSource.push(date);

  for (const alternative of hit.alternatives) {
    if (!isEligibleRussianLanguageTrack(alternative.title, alternative.artist)) {
      invalidLanguage.push(`${date}: alternative ${alternative.artist} — ${alternative.title}`);
    }
  }
  if (hit.alternatives.length < 2) quality.fewerThanThreeCandidates += 1;
  if (assessPopularity(hit.sources).level === "review") {
    quality.popularityNeedsReview += 1;
    if (noChartEra(date)) quality.reviewInNoChartEra += 1;
  }

  const audit = years.get(requestedYear) ?? {
    dates: 0,
    week: 0,
    month: 0,
    year: 0,
    monthlyChart: 0,
    songs: new Map<string, number>(),
  };
  audit.dates += 1;
  if (hit.precision === "Неделя") audit.week += 1;
  if (hit.precision === "Месяц") audit.month += 1;
  if (hit.precision === "Год") audit.year += 1;
  if (hit.mode === "месячный чарт") audit.monthlyChart += 1;
  const song = `${hit.artist} — ${hit.title}`;
  audit.songs.set(song, (audit.songs.get(song) ?? 0) + 1);
  years.set(requestedYear, audit);
}

const byYear = [...years.entries()].map(([year, audit]) => {
  const [dominantSong, dominantDays] = [...audit.songs.entries()].sort((left, right) => right[1] - left[1])[0];
  return {
    year,
    dates: audit.dates,
    week: audit.week,
    month: audit.month,
    yearPrecision: audit.year,
    monthlyChart: audit.monthlyChart,
    uniqueSongs: audit.songs.size,
    dominantSong,
    dominantDays,
  };
});

const summary = byYear.reduce(
  (total, year) => ({
    dates: total.dates + year.dates,
    week: total.week + year.week,
    month: total.month + year.month,
    yearPrecision: total.yearPrecision + year.yearPrecision,
    monthlyChart: total.monthlyChart + year.monthlyChart,
  }),
  { dates: 0, week: 0, month: 0, yearPrecision: 0, monthlyChart: 0 },
);

console.log(JSON.stringify({
  summary,
  quality: {
    ...quality,
    concentratedYears: byYear.filter((year) => year.dominantDays > 60),
  },
  errors: {
    empty,
    wrongYear,
    wrongMonth,
    invalidLanguage,
    invalidSource,
  },
  years: byYear,
}, null, 2));

if (empty.length || wrongMonth.length || wrongYear.length || invalidLanguage.length || invalidSource.length) {
  process.exitCode = 1;
}
