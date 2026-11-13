import type { BirthdayHit, HitSource } from "./hits";
import { canonical, isEligibleRussianLanguageTrack } from "./evidence-policy";
import { RADIO_ISSUES_1995_2003, type RadioIssue } from "./radio-weekly-1995-2003-data";

// Weekly radio hit-parades for 1995–2003 from the Chartoteka archive:
//  • «Хит-парад двух столиц» (Радио Максимум), 1995–1999 — only Russian-language entries;
//  • «Золотой граммофон» (Русское радио), from February 1999.
// Only entries with at least two weeks in the chart are kept (as in the 2004 module).
// A dated issue within six days of the birthday is the claim; it is not a daily peak.

const DAY = 86400000;
const NEAR_DAYS = 6;
const RECENT_RADIO_FROM = "2026-07-01";
const time = (date: string) => Date.parse(`${date}T12:00:00Z`);
const displayDate = (date: string) => date.split("-").reverse().join(".");
const CHART = {
  gramophone: { name: "«Золотой граммофон» (Русское радио)", slug: "zolotoy-gramofon" },
  maximum: { name: "«Хит-парад двух столиц» (Радио Максимум)", slug: "hit-parad-dvuh-stolits-radio-maksimum" },
  chartova: { name: "«Чартова дюжина» (Наше радио), голосование слушателей", slug: "chartova-duzhina" },
} as const;

type Candidate = { artist: string; title: string; sources: HitSource[]; charts: Set<RadioIssue["chart"]>; best: number };

function nearestIssue(chart: RadioIssue["chart"], date: string, today: string) {
  let best: RadioIssue | null = null;
  for (const issue of RADIO_ISSUES_1995_2003) {
    if (issue.chart !== chart || issue.date > today || !issue.tracks.length) continue;
    // A birthday in late December is not evidenced by the next year's first issue.
    if (issue.date.slice(0, 4) !== date.slice(0, 4)) continue;
    const distance = Math.abs(time(issue.date) - time(date));
    if (distance > NEAR_DAYS * DAY) continue;
    if (!best || distance < Math.abs(time(best.date) - time(date))) best = issue;
  }
  return best;
}

export function radioWeeklyCandidates(date: string, today: string) {
  // 2026: latest «Золотой граммофон» issues fill days with no dated streaming week yet.
  if (date < "1995-01-01" || (date > "2003-12-31" && date < RECENT_RADIO_FROM)) return null;
  let issues = (["gramophone", "maximum"] as const).map((chart) => nearestIssue(chart, date, today)).filter((issue): issue is RadioIssue => Boolean(issue));
  // The latest «Золотой граммофон» issue may not be archived yet: the weekly listener
  // vote «Чартова дюжина» then gives the week. It never competes with «Граммофон».
  if (!issues.length && date >= RECENT_RADIO_FROM) {
    const vote = nearestIssue("chartova", date, today);
    if (vote) issues = [vote];
  }
  if (!issues.length) return null;
  const byKey = new Map<string, Candidate>();
  for (const issue of issues) {
    for (const track of issue.tracks.filter((entry) => isEligibleRussianLanguageTrack(entry.title, entry.artist)).slice(0, 3)) {
      const key = `${canonical(track.artist)}|${canonical(track.title)}`;
      const source: HitSource = {
        id: `${issue.chart}-weekly-${issue.date}-${track.rank}`,
        label: `${CHART[issue.chart].name}: #${track.rank} · выпуск ${displayDate(issue.date)} · не меньше двух недель в чарте · архив Чартотеки`,
        url: `https://chartoteka.com/charts/${CHART[issue.chart].slug}/${issue.date}`,
        kind: issue.chart === "chartova" ? "голосование слушателей" : "радио",
        rank: track.rank,
      };
      const existing = byKey.get(key);
      if (existing) {
        existing.sources.push(source);
        existing.charts.add(issue.chart);
        existing.best = Math.min(existing.best, track.rank);
      } else {
        byKey.set(key, { artist: track.artist, title: track.title, sources: [source], charts: new Set([issue.chart]), best: track.rank });
      }
    }
  }
  // Songs present in both hit-parades first, then «Золотой граммофон», then by best rank.
  const candidates = [...byKey.values()].sort((left, right) =>
    right.charts.size - left.charts.size
    || Number(right.charts.has("gramophone")) - Number(left.charts.has("gramophone"))
    || left.best - right.best).slice(0, 3);
  return candidates.length ? { candidates, issues } : null;
}

export function radioWeeklyHit(date: string, today: string): BirthdayHit | null {
  const found = radioWeeklyCandidates(date, today);
  if (!found) return null;
  const { candidates, issues } = found;
  const index = Math.floor((time(date) - time(`${date.slice(0, 4)}-01-01`)) / (7 * DAY)) % candidates.length;
  const selected = candidates[index];
  const primary = selected.sources[0];
  const primaryIssue = issues.find((issue) => primary.url.endsWith(issue.date) && primary.id.startsWith(issue.chart))!;
  const distanceDays = Math.round(Math.abs(time(primaryIssue.date) - time(date)) / DAY);
  const both = selected.charts.size > 1;
  const [year, month] = date.split("-").map(Number);
  return {
    artist: selected.artist, title: selected.title, year, month,
    chartDate: primaryIssue.date, distanceDays, precision: "Неделя",
    period: `${primaryIssue.chart === "chartova" ? "недельное голосование слушателей" : "недельный радиохит-парад"} · ${displayDate(primaryIssue.date)}`,
    proximity: distanceDays === 0
      ? "Выпуск хит-парада вышел в день рождения. Это близость к выпуску, а не доказательство пика в каждый день недели."
      : `Выпуск хит-парада вышел в пределах ${distanceDays} дн. от даты рождения. Это близость к выпуску, а не доказательство пика в каждый день недели.`,
    method: `Выбор из ${candidates.length} русскоязычных записей ближайших выпусков радиохит-парадов (не дальше 6 дней от даты), каждая не меньше двух недель в чарте.${both ? " Эта запись одновременно стояла в хит-парадах двух радиостанций." : ""} Срок в чарте сам по себе не доказывает непрерывные 14 дней. Источник подтверждает радиохит-парад, массовая популярность вне аудитории ${both ? "этих радиостанций" : primaryIssue.chart === "gramophone" ? "«Русского радио»" : primaryIssue.chart === "chartova" ? "«Нашего радио»" : "«Максимума»"} ещё не установлена. Архив Чартотеки не заменяет сверку оригинального эфира.`,
    sourceId: primary.id, sourceLabel: primary.label, sourceUrl: primary.url,
    archiveUrl: primary.url, archiveLabel: "Открыть полный выпуск хит-парада",
    mode: "недельный чарт", chartRank: selected.best,
    chartMetric: both ? "ДВА РАДИОХИТ-ПАРАДА · НЕДЕЛЯ" : primaryIssue.chart === "gramophone" ? "ЗОЛОТОЙ ГРАММОФОН · ВЫПУСК ХИТ-ПАРАДА" : primaryIssue.chart === "chartova" ? "ЧАРТОВА ДЮЖИНА · ГОЛОСОВАНИЕ СЛУШАТЕЛЕЙ" : "МАКСИМУМ · ВЫПУСК ХИТ-ПАРАДА",
    signalTypes: selected.charts.size, sources: selected.sources,
    alternatives: candidates.filter((_, i) => i !== index).map(({ artist, title }) => ({ artist, title })),
    color: ["#ff633d", "#ffdc2e", "#a6ec3c"][index],
  };
}
