import { verifiedStreamingWeek2018 } from "./streaming-weeks-2018";
import { streamingMay2020 } from "./streaming-may-2020";
import { gramophoneHit2004 } from "./gramophone-2004";
import { streamingGap2018 } from "./streaming-gap-2018";
import { readerChartHitEarly } from "./reader-charts-early";
import { gramophoneGapHit } from "./gramophone-gaps";
import { readerChartHit1980 } from "./reader-charts-1980";
import { gramophoneHit2009 } from "./gramophone-2009";
import { maximumHit1998 } from "./maximum-1998";
import { readerChartHit1981 } from "./reader-charts-1981";
import { streamingHit } from "./streaming-charts";
import { HISTORICAL_MONTHLY_2002 } from "./historical-monthly-2002";
import { isSupportedDate, todayUtc } from "./date-policy";
import { chartovaNear } from "./chartoteka";
import { GRAMOPHONE_ALT_ISSUES } from "./gramophone-alternatives-data";
import { RADIO_ISSUES_1995_2003 } from "./radio-weekly-1995-2003-data";
import { assessPopularity, canonical, isEligibleRussianLanguageTrack, sourcePlatform } from "./evidence-policy";
import { WEEKLY_CHART } from "./weekly-hits";
import { PILOT_2017, type PilotCandidate, type PilotSource, type PilotWeek } from "./pilot-2017";
import { MODERN_MULTICHART } from "./modern-multichart";
import { LEGACY_MULTICHART } from "./legacy-multichart";
import { HISTORICAL_1977_1979 } from "./historical-1977-1979";
import { HISTORICAL_BROADCASTS_1970_2003 } from "./historical-broadcasts-1986-1987";
import { HISTORICAL_MONTHLY_CHARTS_1985_1991, HISTORICAL_MONTHLY_CHART_COUNT } from "./historical-monthly-charts-1985-1991";
import { DIGITAL_SALES_ISSUES_2010_2012, DIGITAL_SALES_ISSUE_COUNT, type DigitalSalesIssue } from "./digital-sales-2010-2012";
import { calibrateModernCharts, CULTURAL_AUDIT_YEAR_COUNT, CULTURAL_SOURCE_SERIES_COUNT } from "./cultural-sources-2018-2020";
import { HISTORICAL_ANNUAL_POOLS } from "./historical-annual-pools";
import { krugozorAnchors } from "./krugozor-issues";
import { radioWeeklyHit } from "./radio-weekly-1995-2003";

export type Precision = "Неделя" | "Месяц" | "Год";

export type HitSource = PilotSource;

export type HitAlternative = {
  artist: string;
  title: string;
};

export type BirthdayHit = {
  artist: string;
  title: string;
  year: number;
  month: number;
  chartDate: string;
  evidenceMonth?: string;
  evidenceYear?: number;
  distanceDays: number;
  precision: Precision;
  proximity: string;
  period: string;
  method: string;
  sourceId: string;
  sourceLabel: string;
  sourceUrl: string;
  archiveUrl: string;
  archiveLabel: string;
  mode: "стриминговый чарт" | "мультичарт" | "радиочарт" | "исторический чарт" | "недельный чарт" | "архивный эфир" | "датированный релиз" | "месячный релиз" | "месячный чарт" | "телепремьера" | "датированный фестиваль" | "датированный концерт" | "архив года";
  chartRank: number | null;
  chartMetric: string;
  signalTypes: number;
  sources: HitSource[];
  alternatives: HitAlternative[];
  // Other songs confirmed for the same calendar YEAR. Shown separately and never
  // presented as evidence for the birth month or week.
  yearContext?: HitAlternative[];
  color: string;
};

export const MULTICHART_WEEK_COUNT = LEGACY_MULTICHART.length + PILOT_2017.length + MODERN_MULTICHART.length;
export const HISTORICAL_EDITION_COUNT = HISTORICAL_1977_1979.length;
const CURATED_ANCHORS = [...HISTORICAL_BROADCASTS_1970_2003, ...HISTORICAL_MONTHLY_CHARTS_1985_1991, ...HISTORICAL_MONTHLY_2002];
const KRUGOZOR_ANCHORS = krugozorAnchors(CURATED_ANCHORS);
const curatedMonths = new Set(CURATED_ANCHORS.map((anchor) => anchor.chartDate.slice(0, 7)));
// A «Кругозор» issue becomes the main source only for months with no curated anchor.
const HISTORICAL_ANCHORS = [...CURATED_ANCHORS, ...KRUGOZOR_ANCHORS.filter((anchor) => !curatedMonths.has(anchor.chartDate.slice(0, 7)))]
  .map((entry) => ({ ...entry, candidates: entry.candidates.filter((candidate) =>
    isEligibleRussianLanguageTrack(candidate.title, candidate.artist)).map((candidate) =>
      entry.archiveYear === 1982 && canonical(candidate.artist) === "алла пугачева" && canonical(candidate.title) === "миллион алых роз"
        ? { ...candidate, sources: [...candidate.sources, {
          id: "krugozor-1982-12-million-roses",
          label: "«Кругозор» № 12 (225), декабрь 1982: Алла Пугачёва — «Миллион роз», звуковая страница 12. Подтверждает публикацию, не пик популярности.",
          url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%CA%F0%F3%E3%EE%E7%EE%F0%2C%201982%2C%20%B912%28225%29.pdf",
          kind: "первичный скан музыкального журнала",
        }] }
        : candidate) }))
  .filter((entry) => entry.candidates.length > 0);

export const HISTORICAL_BROADCAST_COUNT = HISTORICAL_ANCHORS.length;
export const NEW_EVIDENCE_ISSUE_COUNT = DIGITAL_SALES_ISSUE_COUNT + 3;
export { CULTURAL_AUDIT_YEAR_COUNT, CULTURAL_SOURCE_SERIES_COUNT, HISTORICAL_MONTHLY_CHART_COUNT };

const palette = ["#ff633d", "#ffdc2e", "#a6ec3c", "#ff8cce", "#a988ff", "#49c7ff"];
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_DISTANCE_DAYS = 31;
const WEEK_DISTANCE_DAYS = 9;
const pad = (value: number) => String(value).padStart(2, "0");
const historicalAnnualArchives: Readonly<Record<number, string>> = {
  1977: "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1977goda/",
  1978: "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1978goda/",
  1979: "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1979goda/",
};
const historicalAnnualTitles: Readonly<Record<number, ReadonlySet<string>>> = {
  1977: new Set([
    "последний лист",
    "родина моя",
    "не отрекаются любя",
    "ты мне не снишься",
    "соловьиная роща",
    "крик птицы",
    "все могут короли",
  ]),
  1978: new Set([
    "остановите музыку",
    "сонет шекспира",
    "песенка про меня",
    "напиши мне письмо",
    "фотографии любимых",
    "песенка первоклассника",
    "возьми меня с собой",
    "ты возьми меня с собой",
    "наш город",
  ]),
  1979: new Set([
    "так не должно быть",
    "подберу музыку",
    "звездное лето",
    "мы с тобой танцуем",
    "мир без любимого",
    "песенка д артаньяна",
    "время не останавливается",
    "поднимись над суетой",
    "ищу тебя",
    "поворот",
  ]),
};

function dateValue(value: string) {
  return Date.parse(`${value}T12:00:00Z`);
}

function canonicalTitle(value: string) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isoWeek(value: string) {
  const active = new Date(`${value}T12:00:00Z`);
  const day = active.getUTCDay() || 7;
  active.setUTCDate(active.getUTCDate() + 4 - day);
  const year = active.getUTCFullYear();
  const yearStart = new Date(Date.UTC(year, 0, 1));
  const week = Math.ceil((((active.getTime() - yearStart.getTime()) / DAY_MS) + 1) / 7);
  return { year, week };
}

function enrichWithDigitalSales(dataset: readonly PilotWeek[], issues: readonly DigitalSalesIssue[]): readonly PilotWeek[] {
  return dataset.map((week) => {
    const calendar = isoWeek(week.chartDate);
    const matchingIssues = issues.filter((issue) => issue.year === calendar.year && issue.weeks.includes(calendar.week));
    if (matchingIssues.length === 0) return week;

    const candidates: PilotCandidate[] = week.candidates.map((candidate) => ({
      ...candidate,
      sources: [...candidate.sources],
    }));

    for (const issue of matchingIssues) {
      for (const salesCandidate of issue.candidates) {
        const existing = candidates.find((candidate) => canonical(candidate.title) === canonical(salesCandidate.title) && canonical(candidate.artist) === canonical(salesCandidate.artist));
        if (!existing) {
          candidates.push({ ...salesCandidate, sources: [...salesCandidate.sources] });
          continue;
        }

        const salesSource = salesCandidate.sources[0];
        if (existing.sources.some((source) => source.id === salesSource.id)) continue;
        const rank = salesSource.rank ?? 10;
        existing.sources.push(salesSource);
        existing.score += Math.max(70, 120 - rank * 5);
        if (!existing.sources.slice(0, -1).some((source) => source.kind === salesSource.kind)) {
          existing.signalTypes += 1;
        }
      }
    }

    candidates.sort((left, right) => right.score - left.score);
    return { chartDate: week.chartDate, candidates: candidates.slice(0, 6) };
  });
}

export const ENRICHED_LEGACY_MULTICHART = enrichWithDigitalSales(LEGACY_MULTICHART, DIGITAL_SALES_ISSUES_2010_2012);
export const CULTURALLY_CALIBRATED_MODERN_MULTICHART = calibrateModernCharts(MODERN_MULTICHART);

function displayDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${pad(day)}.${pad(month)}.${year}`;
}

function sourceUrl(chartDate: string) {
  const [year, month, day] = chartDate.split("-");
  return `https://hotcharts.ru/rusradio/archive/${day}-${month}-${year}.htm`;
}

function daysWord(value: number) {
  const mod100 = value % 100;
  const mod10 = value % 10;
  if (mod100 >= 11 && mod100 <= 14) return "дней";
  if (mod10 === 1) return "день";
  if (mod10 >= 2 && mod10 <= 4) return "дня";
  return "дней";
}

function proximityText(distanceDays: number, chartBeforeBirthday: boolean) {
  if (distanceDays === 0) return "Выпуск чарта вышел в день рождения";
  return chartBeforeBirthday
    ? `Выпуск чарта вышел за ${distanceDays} ${daysWord(distanceDays)} до даты рождения`
    : `Выпуск чарта вышел через ${distanceDays} ${daysWord(distanceDays)} после даты рождения`;
}

// A ranked chart gives its #1; only unranked lists (a broadcast's running order) rotate.
function topRankedIndex(candidates: readonly { rank?: number | null }[]): number | null {
  let best: number | null = null;
  candidates.forEach((candidate, index) => {
    if (typeof candidate.rank !== "number") return;
    if (best === null || candidate.rank < (candidates[best].rank as number)) best = index;
  });
  return best;
}

function stableIndex(date: string, length: number, anchorDate: string) {
  const active = Math.max(1, Math.min(length, 5));
  const slots: Record<number, number[]> = {
    1: [0, 0, 0, 0, 0, 0, 0],
    2: [0, 0, 0, 0, 1, 1, 1],
    3: [0, 0, 0, 1, 1, 2, 2],
    4: [0, 0, 1, 1, 2, 2, 3],
    5: [0, 0, 1, 1, 2, 3, 4],
  };
  const offsetFromChart = Math.round((dateValue(date) - dateValue(anchorDate)) / DAY_MS);
  const slot = ((offsetFromChart + 3) % 7 + 7) % 7;
  const chartWeek = Math.floor(dateValue(anchorDate) / DAY_MS / 7);
  return (slots[active][slot] + chartWeek) % active;
}

function normalizeMultichartIdentity(candidate: PilotCandidate, year: number): PilotCandidate {
  const title = canonical(candidate.title);
  const artist = canonical(candidate.artist);
  if (year === 2004 && title === "широка река" && artist.includes("надежда кадышева")) {
    return { ...candidate, artist: "Надежда Кадышева и Антон Зацепин" };
  }
  if (year === 2015 && title === "мама" && (artist === "burito" || artist === "бурито")) {
    return { ...candidate, artist: "Burito" };
  }
  if (year === 2016 && title === "такси" && artist.includes("elvira t")) {
    return { ...candidate, artist: "Elvira T" };
  }
  return candidate;
}

// Accuracy over variety: the main song is the leader of the week, never a rotation.
// From 2011 listener signals outrank radio airplay: weekly Shazam position, then weekly
// digital sales (2М / Lenta.ru), then the best weekly radio position. Before 2011 the
// combined weekly score (radio hit-parades) decides. Annual summaries never decide.
const LISTENER_ERA_FROM = 2011;
const ANNUAL_LABEL = /по итогам|за \d{4} год|трек года|один из главных/i;
function weeklyRank(candidate: PilotCandidate, kinds: readonly string[]) {
  const ranks = candidate.sources
    .filter((source) => kinds.includes(source.kind) && typeof source.rank === "number" && !ANNUAL_LABEL.test(source.label))
    .map((source) => source.rank as number);
  return ranks.length ? Math.min(...ranks) : Number.POSITIVE_INFINITY;
}
function leadingCandidateIndex(candidates: readonly PilotCandidate[], year: number) {
  if (year < LISTENER_ERA_FROM || candidates.length < 2) return 0;
  const tiers = [["Shazam"], ["цифровые продажи"], ["радио"]] as const;
  for (const kinds of tiers) {
    let best = -1; let bestRank = Number.POSITIVE_INFINITY;
    candidates.forEach((candidate, index) => {
      const rank = weeklyRank(candidate, kinds);
      if (rank < bestRank) { best = index; bestRank = rank; }
    });
    if (best >= 0) return best;
  }
  return 0;
}

function multichartHit(date: string, birthdayValue: number, dataset: readonly PilotWeek[], annualFallback = false, candidateLimit = 3): BirthdayHit | null {
  const requestedYear = date.slice(0, 4);
  const eligibleWeeks = dataset.filter((week) => week.chartDate.startsWith(`${requestedYear}-`));
  if (eligibleWeeks.length === 0) return null;

  let closest = eligibleWeeks[0];
  let closestDistance = Math.abs(dateValue(closest.chartDate) - birthdayValue);

  for (let index = 1; index < eligibleWeeks.length; index += 1) {
    const candidate = eligibleWeeks[index];
    const distance = Math.abs(dateValue(candidate.chartDate) - birthdayValue);
    if (distance < closestDistance) {
      closest = candidate;
      closestDistance = distance;
    }
    if (dateValue(candidate.chartDate) > birthdayValue && distance > closestDistance) break;
  }

  const distanceDays = Math.round(closestDistance / DAY_MS);
  const eligibleCandidates = closest.candidates
    .filter((candidate) => isEligibleRussianLanguageTrack(candidate.title, candidate.artist))
    .map((candidate) => normalizeMultichartIdentity(candidate, Number(requestedYear)))
    .slice(0, candidateLimit);
  if ((!annualFallback && distanceDays > WEEK_DISTANCE_DAYS) || eligibleCandidates.length === 0) return null;

  const selectedIndex = leadingCandidateIndex(eligibleCandidates, Number(requestedYear));
  const selected = eligibleCandidates[selectedIndex];
  const primary = selected.sources.find((source) => source.kind === "цифровые продажи")
    ?? selected.sources.find((source) => source.kind === "Shazam")
    ?? selected.sources[0];
  const [year, month] = date.split("-").map(Number);
  const fallbackPrecision: Precision = closest.chartDate.slice(0, 7) === date.slice(0, 7) ? "Месяц" : "Год";

  return {
    artist: selected.artist,
    title: selected.title,
    year,
    month,
    chartDate: closest.chartDate,
    distanceDays,
    precision: annualFallback ? fallbackPrecision : "Неделя",
    proximity: annualFallback
      ? fallbackPrecision === "Месяц"
        ? `Ближайшая сохранившаяся неделя этого же месяца находится в пределах ${distanceDays} ${daysWord(distanceDays)}`
        : `Это ближайший подтверждённый русскоязычный хит ${year} года; точность до месяца пока не заявляется`
      : proximityText(distanceDays, dateValue(closest.chartDate) < birthdayValue),
    period: annualFallback ? `ближайшая сохранённая неделя ${year} года · ${displayDate(closest.chartDate)}` : `неделя чарта от ${displayDate(closest.chartDate)}`,
    method: annualFallback
      ? `песня подтверждена несколькими сигналами популярности в ${year} году и выбрана только внутри того же календарного года; результат помечен более широкой точностью и не выдаётся за точный недельный чарт даты рождения`
      : Number(closest.chartDate.slice(0, 4)) >= 2018 && Number(closest.chartDate.slice(0, 4)) <= 2025
        ? `песня вошла в подборку из ${eligibleCandidates.length} записей близкого недельного чарта и имеет дополнительный источник популярности. Радиостанции учтены вместе; годовые итоги описывают контекст, а не точную неделю пика`
        : `песня вошла в русскоязычный недельный пул из ${eligibleCandidates.length} хитов и получила ${selected.signalTypes} сигнала популярности`,
    sourceId: `${annualFallback ? "YEAR-COVERAGE" : "MULTI"}-${year}-${closest.chartDate}-${selectedIndex + 1}`,
    sourceLabel: primary.label,
    sourceUrl: primary.url,
    archiveUrl: primary.kind === "цифровые продажи"
      ? primary.url
      : primary.url.replace(/archive\/[^/]+$/, `archive/${closest.chartDate.slice(0, 4)}.htm`),
    archiveLabel: primary.kind === "цифровые продажи"
      ? "Открыть полный цифровой чарт 2М / Lenta.ru"
      : `Все обновления чарта за ${closest.chartDate.slice(0, 4)} год`,
    mode: annualFallback ? "архив года" : "мультичарт",
    chartRank: primary.rank ?? selected.shazamRank ?? null,
    chartMetric: primary.kind === "цифровые продажи"
      ? "ПОЗИЦИЯ В ЦИФРОВЫХ ПРОДАЖАХ"
      : selected.shazamRank
        ? "ПОЗИЦИЯ В SHAZAM"
        : "ЛУЧШАЯ ПОЗИЦИЯ НЕДЕЛИ",
    signalTypes: new Set(selected.sources.map(sourcePlatform)).size,
    sources: selected.sources,
    alternatives: eligibleCandidates
      .filter((_, index) => index !== selectedIndex)
      .slice(0, 4)
      .map((candidate) => ({ artist: candidate.artist, title: candidate.title })),
    color: palette[(year + month + selectedIndex) % palette.length],
  };
}

function multichartAnnualHit(date: string, dataset: readonly PilotWeek[], candidateLimit = 5): BirthdayHit | null {
  const [year, month] = date.split("-").map(Number);
  const yearWeeks = dataset.filter((week) => Number(week.chartDate.slice(0, 4)) === year);
  if (!yearWeeks.length) return null;

  const byRecording = new Map<string, { candidate: PilotCandidate; chartDates: string[] }>();
  for (const week of yearWeeks) {
    for (const rawCandidate of week.candidates
      .filter((entry) => isEligibleRussianLanguageTrack(entry.title, entry.artist))
      .slice(0, candidateLimit)) {
      const candidate = normalizeMultichartIdentity(rawCandidate, year);
      const key = `${canonical(candidate.artist)}|${canonical(candidate.title)}`;
      const existing = byRecording.get(key);
      if (!existing) {
        byRecording.set(key, { candidate: { ...candidate, sources: [...candidate.sources] }, chartDates: [week.chartDate] });
        continue;
      }
      existing.chartDates.push(week.chartDate);
      for (const evidence of candidate.sources) {
        if (!existing.candidate.sources.some((source) => source.id === evidence.id)) existing.candidate.sources.push(evidence);
      }
      existing.candidate.score = Math.max(existing.candidate.score, candidate.score);
      existing.candidate.shazamRank = Math.min(existing.candidate.shazamRank ?? Number.MAX_SAFE_INTEGER, candidate.shazamRank ?? Number.MAX_SAFE_INTEGER);
      existing.candidate.signalTypes = Math.max(existing.candidate.signalTypes, candidate.signalTypes);
    }
  }

  const unique = [...byRecording.values()];
  if (!unique.length) return null;
  const day = Math.round((dateValue(date) - dateValue(`${year}-01-01`)) / DAY_MS);
  const start = (Math.floor(day / 7) * 3) % unique.length;
  const candidates = Array.from({ length: Math.min(3, unique.length) }, (_, index) => unique[(start + index) % unique.length]);
  const selectedIndex = stableIndex(date, candidates.length, `${year}-01-01`);
  const selectedEntry = candidates[selectedIndex];
  const selected = selectedEntry.candidate;
  const birthdayValue = dateValue(date);
  const chartDate = selectedEntry.chartDates.reduce((closest, active) =>
    Math.abs(dateValue(active) - birthdayValue) < Math.abs(dateValue(closest) - birthdayValue) ? active : closest
  );
  const distanceDays = Math.abs(Math.round((dateValue(chartDate) - birthdayValue) / DAY_MS));
  const primary = selected.sources.find((source) => source.kind === "цифровые продажи")
    ?? selected.sources.find((source) => source.kind === "Shazam")
    ?? selected.sources[0];

  return {
    artist: selected.artist,
    title: selected.title,
    year,
    month,
    chartDate,
    evidenceYear: year,
    distanceDays,
    precision: "Год",
    proximity: `Песня подтверждена в ${year} году. Её популярность в выбранном месяце пока не установлена.`,
    period: `мультичарт-архив ${year} года`,
    method: `Для этой даты нет достаточно близкого недельного выпуска. Песня выбрана из ${unique.length} русскоязычных записей мультичарт-архива ${year} года; записи чередуются без реконструкции неизвестных месяцев.`,
    sourceId: `YEAR-MULTI-${year}-${start}-${selectedIndex}`,
    sourceLabel: primary.label,
    sourceUrl: primary.url,
    archiveUrl: primary.kind === "цифровые продажи"
      ? primary.url
      : primary.url.replace(/archive\/[^/]+$/, `archive/${year}.htm`),
    archiveLabel: primary.kind === "цифровые продажи"
      ? "Открыть полный цифровой чарт 2М / Lenta.ru"
      : `Все обновления чарта за ${year} год`,
    mode: "архив года",
    chartRank: primary.rank ?? selected.shazamRank ?? null,
    chartMetric: "ПОДТВЕРЖДЁННЫЙ ХИТ ЭТОГО ГОДА",
    signalTypes: new Set(selected.sources.map(sourcePlatform)).size,
    sources: [...selected.sources],
    alternatives: candidates
      .filter((_, index) => index !== selectedIndex)
      .map(({ candidate }) => ({ artist: candidate.artist, title: candidate.title })),
    color: palette[(year + month + selectedIndex) % palette.length],
  };
}

function historicalHit(date: string, birthdayValue: number): BirthdayHit | null {
  const requestedMonth = date.slice(0, 7);
  const charts = HISTORICAL_1977_1979
    .filter((chart) => chart.chartDate.slice(0, 4) === date.slice(0, 4))
    .map((chart) => ({ ...chart, candidates: chart.candidates.filter((candidate) =>
      isEligibleRussianLanguageTrack(candidate.title, candidate.artist)) }))
    .filter((chart) => chart.candidates.length > 0);
  if (!charts.length) return null;
  const monthChart = charts.find((chart) => chart.chartMonth === requestedMonth);
  let closest = monthChart ?? charts[0];
  let closestDistance = monthChart
    ? Math.abs(dateValue(`${monthChart.chartMonth}-15`) - birthdayValue)
    : Math.abs(dateValue(closest.chartDate) - birthdayValue);

  if (!monthChart) {
    for (let index = 1; index < charts.length; index += 1) {
      const candidate = charts[index];
      const distance = Math.abs(dateValue(candidate.chartDate) - birthdayValue);
      if (distance < closestDistance) {
        closest = candidate;
        closestDistance = distance;
      }
    }
  }
  const distanceDays = Math.round(closestDistance / DAY_MS);
  if ((!monthChart && distanceDays > MAX_DISTANCE_DAYS) || closest.candidates.length === 0) return null;

  if (!monthChart && (closest.chartMonth ?? closest.chartDate.slice(0, 7)) !== requestedMonth) return null;
  const selectionAnchor = monthChart ? `${monthChart.chartMonth}-15` : closest.chartDate;
  const selectedIndex = topRankedIndex(closest.candidates) ?? stableIndex(date, closest.candidates.length, selectionAnchor);
  const selected = closest.candidates[selectedIndex];
  const [year, month] = date.split("-").map(Number);
  const sourceId = `ZD-MK-${closest.chartDate}-${selected.rank}`;
  const sourceLabel = monthChart
    ? `«Звуковая дорожка» МК: #${selected.rank} за май · выпуск ${closest.dateLabel}`
    : `«Звуковая дорожка» МК: #${selected.rank} · ${closest.dateLabel}`;
  const sourceUrl = "https://books.yandex.ru/books/YGclnYjv/read-online";
  const annualArchiveUrl = historicalAnnualArchives[year];
  const annualVerified = historicalAnnualTitles[year]?.has(canonicalTitle(selected.title)) ?? false;
  const chartSource: HitSource = {
    id: sourceId,
    label: sourceLabel,
    url: sourceUrl,
    kind: "читательский чарт",
    rank: selected.rank,
  };
  const annualSource: HitSource | null = annualArchiveUrl && annualVerified
    ? {
        id: `music-press-${year}-${canonicalTitle(selected.title).replace(/ /g, "-")}`,
        label: `Годовой слушательский архив: «${selected.title}» в списке популярных песен ${year} года`,
        url: annualArchiveUrl,
        kind: "годовой слушательский архив",
      }
    : null;
  const hitSources = annualSource ? [chartSource, annualSource] : [chartSource];

  return {
    artist: selected.artist,
    title: selected.title,
    year,
    month,
    chartDate: closest.chartDate,
    evidenceMonth: closest.chartMonth ?? closest.chartDate.slice(0, 7),
    distanceDays,
    precision: "Месяц",
    proximity: monthChart
      ? `Читательский опрос подтверждает популярность в мае 1978; результаты опубликованы ${closest.dateLabel}`
      : closest.exactDate
      ? proximityText(distanceDays, dateValue(closest.chartDate) < birthdayValue)
      : `В архиве сохранён выпуск за ${closest.dateLabel} без точного дня`,
    period: monthChart
      ? `читательский хит-парад · ${closest.periodLabel}`
      : `читательский хит-парад · ${closest.dateLabel}`,
    method: monthChart
      ? `песня занимала #${selected.rank} в читательском хит-параде именно за май 1978; точный день внутри месяца источником не заявляется${annualSource ? ", а годовой архив даёт дополнительный контекст" : ""}`
      : `песня занимала #${selected.rank} в ближайшем сохранившемся выпуске читательского хит-парада${annualSource ? ", а годовой архив даёт дополнительный контекст" : ""}`,
    sourceId,
    sourceLabel,
    sourceUrl,
    archiveUrl: annualSource?.url ?? sourceUrl,
    archiveLabel: annualSource ? `Открыть годовую проверку за ${year} год` : "Открыть архив расшифрованных выпусков",
    mode: "исторический чарт",
    chartRank: selected.rank,
    chartMetric: "МЕСТО В ОПРОСЕ ЧИТАТЕЛЕЙ",
    signalTypes: hitSources.length,
    sources: hitSources,
    alternatives: closest.candidates
      .filter((_, index) => index !== selectedIndex)
      .slice(0, 4)
      .map((candidate) => ({ artist: candidate.artist, title: candidate.title })),
    color: palette[(year + month + selectedIndex) % palette.length],
  };
}

function historicalBroadcastHit(date: string, birthdayValue: number, annualFallback = false): BirthdayHit | null {
  // A month-only source may answer dates inside that same calendar month only.
  // Its technical midpoint must never make the claim spill into adjacent months.
  const requestedMonth = date.slice(0, 7);
  const isMonthOnly = (anchorKind: typeof HISTORICAL_ANCHORS[number]["anchorKind"]) =>
    anchorKind === "месячный концерт" || anchorKind === "месячный релиз" || anchorKind === "месячный чарт" || anchorKind === "месячный эфир";
  const requestedYear = date.slice(0, 4);
  const yearPool = HISTORICAL_ANCHORS.filter((broadcast) => broadcast.chartDate.startsWith(`${requestedYear}-`));
  const eligibleBroadcasts = yearPool.filter(
    (broadcast) => annualFallback || broadcast.chartDate.slice(0, 7) === requestedMonth
      || (broadcast.anchorKind === "недельный чарт" && Boolean(broadcast.periodStart && broadcast.periodEnd)
        && date >= broadcast.periodStart! && date <= broadcast.periodEnd!),
  );
  if (eligibleBroadcasts.length === 0) return null;

  // When the requested month has its own verified monthly publication, an
  // event from an adjacent month must not displace it merely by being closer
  // to the calendar date. Exact events inside the requested month still
  // compete normally.
  const hasSameMonthSource = eligibleBroadcasts.some(
    (broadcast) => isMonthOnly(broadcast.anchorKind) && broadcast.chartDate.slice(0, 7) === requestedMonth,
  );
  const selectionPool = hasSameMonthSource
    ? eligibleBroadcasts.filter(
        (broadcast) => isMonthOnly(broadcast.anchorKind) || broadcast.chartDate.slice(0, 7) === requestedMonth,
      )
    : eligibleBroadcasts;

  let closest = selectionPool[0];
  let closestDistance = Math.abs(dateValue(closest.chartDate) - birthdayValue);
  for (let index = 1; index < selectionPool.length; index += 1) {
    const candidate = selectionPool[index];
    const distance = Math.abs(dateValue(candidate.chartDate) - birthdayValue);
    if (distance < closestDistance) {
      closest = candidate;
      closestDistance = distance;
    }
  }

  const distanceDays = Math.round(closestDistance / DAY_MS);
  if ((!annualFallback && distanceDays > MAX_DISTANCE_DAYS) || closest.candidates.length === 0) return null;

  const selectedIndex = stableIndex(date, closest.candidates.length, closest.chartDate);
  const selected = closest.candidates[selectedIndex];
  const [year, month] = date.split("-").map(Number);
  const isMonthlyBroadcast = closest.anchorKind === "месячный эфир";
  const isJune1977ReaderPublication = selected.sources.some((source) => source.id === "krugozor-1977-06-rozygrysh-scan");
  const isKirov1982Concert = selected.sources.some((source) => source.id.startsWith("kirov-1982-12-30-official-"));
  const isFilmPremiere = closest.anchorKind === "кинопремьера";
  const isMonthlyRelease = closest.anchorKind === "месячный релиз";
  const isMonthlyChart = closest.anchorKind === "месячный чарт";
  const isWeeklyChart = closest.anchorKind === "недельный чарт";
  const isTvPremiere = closest.anchorKind === "телепремьера";
  const isFestival = closest.anchorKind === "фестиваль";
  const isMonthlyConcert = closest.anchorKind === "месячный концерт";
  const isConcert = closest.anchorKind === "концерт" || isMonthlyConcert;
  const sourceId = `${isFilmPremiere ? "ARCHIVE-FILM" : isMonthlyRelease ? "ARCHIVE-MONTH-RELEASE" : isMonthlyChart ? "ARCHIVE-MONTH-CHART" : isWeeklyChart ? "ARCHIVE-WEEKLY-CHART" : isTvPremiere ? "ARCHIVE-TV-PREMIERE" : isFestival ? "ARCHIVE-FESTIVAL" : isConcert ? "ARCHIVE-CONCERT" : "ARCHIVE-TV"}-${closest.chartDate}-${selectedIndex + 1}`;
  const isInsideVerifiedWeek = isWeeklyChart
    && Boolean(closest.periodStart && closest.periodEnd)
    && date >= closest.periodStart!
    && date <= closest.periodEnd!;
  const precision: Precision = annualFallback ? "Год" : isInsideVerifiedWeek ? "Неделя" : "Месяц";

  return {
    artist: selected.artist,
    title: selected.title,
    year,
    month,
    chartDate: closest.chartDate,
    distanceDays,
    precision,
    proximity: isKirov1982Concert
      ? `Исполнение подтверждено 30 декабря 1982 года в Кирове. Расстояние до даты рождения — ${distanceDays} ${daysWord(distanceDays)}. Месячный или недельный пик популярности не установлен.`
      : isMonthlyConcert
      ? "Концертный отклик на песню описан в июльской прессе 1977 года и связан с июльскими гастролями. Точный день отдельно не подтверждён; общесоюзный месячный или недельный пик не установлен."
      : isJune1977ReaderPublication
      ? "Подтверждена публикация в июне 1977. Даты читательских писем и месячный или недельный пик популярности не установлены."
      : annualFallback
      ? `Это ближайший датированный массовый хит ${year} года; источник пока не позволяет честно заявить точность до месяца`
      : isMonthlyBroadcast
      ? `Песня указана в выпуске за ${closest.dateLabel}. Точный день эфира и пик популярности не установлены.`
      : isWeeklyChart
      ? precision === "Неделя"
        ? `Дата рождения попадает в подтверждённый источником интервал ${closest.dateLabel}`
        : `Это ближайший сохранившийся недельный хит-парад — ${closest.dateLabel}; расстояние до даты рождения ${distanceDays} ${daysWord(distanceDays)}`
      : isMonthlyChart
      ? `Присутствие песни в хит-параде подтверждено за ${closest.dateLabel}; точный день внутри месяца источник не заявляет`
      : isMonthlyRelease
      ? `Публичная публикация подтверждена за ${closest.dateLabel}; результат используется с точностью до месяца, без заявления о пике в конкретный день`
      : isFilmPremiere
      ? `Датированная кинопремьера состоялась ${distanceDays === 0 ? "в этот день" : `в пределах ${distanceDays} ${daysWord(distanceDays)} от даты рождения`}`
      : isTvPremiere
        ? `Датированная телепремьера состоялась ${distanceDays === 0 ? "в этот день" : `в пределах ${distanceDays} ${daysWord(distanceDays)} от даты рождения`}`
      : isFestival
        ? `Датированный музыкальный фестиваль проходил ${distanceDays === 0 ? "в этот день" : `в пределах ${distanceDays} ${daysWord(distanceDays)} от даты рождения`}`
      : isConcert
        ? `Песня прозвучала на датированном концерте ${distanceDays === 0 ? "в этот день" : `в пределах ${distanceDays} ${daysWord(distanceDays)} от даты рождения`}`
      : `Датированный телевизионный выпуск вышел ${distanceDays === 0 ? "в этот день" : `в пределах ${distanceDays} ${daysWord(distanceDays)} от даты рождения`}`,
    period: isMonthlyConcert
      ? `концертный отклик · ${closest.dateLabel}`
      : annualFallback
      ? `проверенный архив ${year} года · ${closest.programLabel}`
      : `${isWeeklyChart ? "недельный чарт" : isMonthlyChart ? "чарт" : isMonthlyRelease ? "публикация" : isFestival ? "фестиваль" : isConcert ? "концерт" : isFilmPremiere || isTvPremiere ? "премьера" : "выпуск"} ${closest.programLabel} · ${closest.dateLabel}`,
    method: isKirov1982Concert
      ? "Официальная дискография подтверждает дату концерта и запись песни; позднее воспоминание очевидца уточняет программу. Спрос на копии записи описан с начала января 1983, поэтому он не доказывает декабрьский пик. Ретроспективная история песни не заменяет рейтинг; непрерывные 14 дней популярности не установлены."
      : isMonthlyConcert
      ? "Скан газетной вырезки сверён: рецензия описывает узнавание песни и аплодисменты. Дата 13.07.1977 взята из описания архива, календарный месяц дополнительно подтверждает хронология гастролей. Полный номер газеты не проверен; это местный культурный отклик, не измеренный национальный хит-парад."
      : isJune1977ReaderPublication
      ? "Оригинальный выпуск подтверждает месяц публикации и отклик на песни фильма в целом; дискография уточняет название и исполнителей записи. Это культурное свидетельство, без измеренного рейтинга отдельной песни и без точного дня."
      : annualFallback
      ? `песня выбрана из ближайшего датированного события или годового хит-парада строго внутри ${year} года; архивные источники подтверждают её массовую популярность, а широкая точность явно обозначена`
      : isMonthlyBroadcast
      ? "Месяц указан в архиве Песни года; отдельный обзор Звуковой дорожки МК подтверждает присутствие песни среди хитов 2002 года. Эфир не доказывает пик популярности в этом месяце."
      : isWeeklyChart
      ? `песня вошла в точно датированный недельный хит-парад; источник разделяет редакционную ротацию, эфир и голосование слушателей, а дополнительные подтверждения сохраняются отдельными сигналами`
      : isMonthlyChart
      ? selected.sources.length > 1
        ? "месяц и место песни в читательском хит-параде подтверждены датированной расшифровкой, а отдельный архив прессы сохраняет годовой контекст; точный день внутри месяца не приписывается"
        : "месяц и место песни подтверждены прямым читательским хит-парадом; точный день внутри месяца не приписывается"
      : isMonthlyRelease
      ? "месяц публичной публикации подтверждён датированным каталогом и независимым архивом; день релиза не выдаётся за день пика песни"
      : isFilmPremiere
      ? "песня прозвучала в фильме, вышедшем в широкий прокат в точную дату, и независимо вошла в годовой каталог популярных песен"
      : isTvPremiere
        ? "песня прозвучала в телевизионном фильме в точную дату первого показа, а её популярность в этом году независимо подтверждает годовой архив"
      : isFestival
        ? "песня победила или получила массовый отклик на музыкальном фестивале с точно датированным интервалом, а её популярность в этом году независимо подтверждает годовой архив"
      : isConcert
        ? "исполнение песни подтверждено точно датированным концертом, а её массовую популярность в этом году независимо подтверждает годовой архив"
      : "песня названа в точно датированном телевизионном выпуске или финале, а её статус в этом году подтверждает дополнительный архивный источник",
    sourceId,
    sourceLabel: selected.sources[0].label,
    sourceUrl: selected.sources[0].url,
    archiveUrl: selected.sources[1]?.url ?? selected.sources[0].url,
    archiveLabel: selected.sources[1] ? `Открыть дополнительную проверку за ${closest.archiveYear} год` : "Открыть полный выпуск источника",
    mode: annualFallback ? "архив года" : isFilmPremiere ? "датированный релиз" : isMonthlyRelease ? "месячный релиз" : isMonthlyChart ? "месячный чарт" : isWeeklyChart ? "недельный чарт" : isTvPremiere ? "телепремьера" : isFestival ? "датированный фестиваль" : isConcert ? "датированный концерт" : "архивный эфир",
    chartRank: isWeeklyChart || isMonthlyChart ? selected.sources[0].rank ?? null : null,
    chartMetric: isKirov1982Concert ? "МЕСЯЦ ВЫСТУПЛЕНИЯ" : isMonthlyConcert ? "МЕСЯЦ КОНЦЕРТНОГО ОТКЛИКА" : annualFallback ? "ПЕСНЯ ИЗ ГОДОВОГО АРХИВА" : isMonthlyBroadcast ? "МЕСЯЦ ТЕЛЕЭФИРА" : isFilmPremiere ? "ДАТИРОВАННАЯ КИНОПРЕМЬЕРА" : isMonthlyRelease ? "ПОДТВЕРЖДЁННЫЙ МЕСЯЦ ПУБЛИКАЦИИ" : isMonthlyChart ? "ПОДТВЕРЖДЁННЫЙ МЕСЯЦ В ХИТ-ПАРАДЕ" : isWeeklyChart ? "МЕСТО В НЕДЕЛЬНОМ ХИТ-ПАРАДЕ" : isTvPremiere ? "ДАТИРОВАННАЯ ТЕЛЕПРЕМЬЕРА" : isFestival ? "ДАТИРОВАННЫЙ ФЕСТИВАЛЬ" : isConcert ? "ДАТИРОВАННЫЙ КОНЦЕРТ" : "ДАТИРОВАННЫЙ ТЕЛЕЭФИР",
    signalTypes: selected.sources.length,
    sources: [...selected.sources],
    alternatives: closest.candidates
      .filter((_, index) => index !== selectedIndex)
      .map((candidate) => ({ artist: candidate.artist, title: candidate.title })),
    color: palette[(year + month + selectedIndex) % palette.length],
  };
}

function annualPool(year: number) {
  const pool = HISTORICAL_ANCHORS.filter((entry) => entry.archiveYear === year && entry.anchorKind !== "месячный концерт")
    .flatMap((entry) => entry.candidates
      // Film-wide letters do not establish an annual hit status for this recording.
      .filter((candidate) => !candidate.sources.some((source) => source.id === "krugozor-1977-06-rozygrysh-scan" || source.id.startsWith("kirov-1982-12-30-official-")))
      .map((candidate) => ({ ...candidate, chartDate: entry.chartDate })));
  pool.push(...(HISTORICAL_ANNUAL_POOLS[year] ?? []));
  for (const chart of HISTORICAL_1977_1979.filter((entry) => Number(entry.chartDate.slice(0, 4)) === year)) {
    for (const candidate of chart.candidates) pool.push({
      artist: candidate.artist, title: candidate.title, chartDate: chart.chartDate,
      sources: [{ id: `ZD-${chart.chartDate}-${candidate.rank}`, label: `Звуковая дорожка: #${candidate.rank} · ${chart.dateLabel}`,
        url: "https://books.yandex.ru/books/YGclnYjv/read-online", kind: "читательский чарт", rank: candidate.rank }],
    });
  }
  return [...new Map(pool.filter((entry) => isEligibleRussianLanguageTrack(entry.title, entry.artist)).map((entry) => [`${canonical(entry.artist)}|${canonical(entry.title)}`, entry])).values()];
}

function historicalAnnualHit(date: string): BirthdayHit | null {
  const [year, month] = date.split("-").map(Number);
  const unique = annualPool(year);
  if (!unique.length) return null;
  // Contemporary press confirms repertoire, not a month of peak popularity.
  if (year === 1977 && month === 7) {
    const woman = unique.find((entry) => canonical(entry.artist) === "алла пугачева"
      && canonical(entry.title) === "женщина которая поет");
    if (woman) woman.sources = [...woman.sources, {
      id: "evening-perm-1977-07-26-woman",
      label: "Л. Лаврова, «Вечерняя Пермь», 26.07.1977: «Женщина, которая поёт» в концертной программе. Перепечатка рецензии; день концерта и пик популярности не установлены.",
      url: "https://www.aprilclub.net/books/bk19.htm",
      kind: "перепечатка датированной концертной рецензии",
    }];
  }
  const day = Math.round((dateValue(date) - dateValue(`${year}-01-01`)) / DAY_MS);
  const start = (Math.floor(day / 7) * 3) % unique.length;
  const candidates = Array.from({ length: Math.min(3, unique.length) }, (_, i) => unique[(start + i) % unique.length]);
  const index = stableIndex(date, candidates.length, `${year}-01-01`);
  const selected = candidates[index], primary = selected.sources[0];
  return {
    artist: selected.artist, title: selected.title, year, month,
    chartDate: selected.chartDate, evidenceYear: year,
    distanceDays: Math.abs(Math.round((dateValue(selected.chartDate) - dateValue(date)) / DAY_MS)),
    precision: "Год", proximity: "Для выбранного месяца подтверждения пока нет. Песня взята из архива этого года; её популярность в месяц рождения не установлена.",
    period: `архив ${year} года`,
    method: `Для этой даты нет достаточно точного источника. Песня выбрана из ${unique.length} записей архива ${year} года. Они чередуются; это не реконструкция последовательности хитов внутри года.`,
    sourceId: `YEAR-${year}-${start}-${index}`, sourceLabel: primary.label, sourceUrl: primary.url,
    archiveUrl: selected.sources[1]?.url ?? primary.url, archiveLabel: "Открыть архивное подтверждение",
    mode: "архив года", chartRank: null, chartMetric: "ПЕСНЯ ИЗ ГОДОВОГО АРХИВА",
    signalTypes: new Set(selected.sources.map(sourcePlatform)).size, sources: [...selected.sources],
    alternatives: candidates.filter((_, i) => i !== index).map(({ artist, title }) => ({ artist, title })),
    color: palette[(year + month + index) % palette.length],
  };
}

function resolveBirthdayHit(date: string, today = todayUtc()): BirthdayHit | null {
  if (!isSupportedDate(date, today)) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const birthdayValue = dateValue(date);
  if (!Number.isFinite(birthdayValue)) return null;
  const requestedYear = Number(date.slice(0, 4));
  const earlyPoll = readerChartHitEarly(date, today);
  const radio2004 = gramophoneHit2004(date, today);
  const preferRadio2004 = (existing: BirthdayHit | null): BirthdayHit | null => {
    if (!radio2004) return existing;
    if (!existing || existing.precision === "Год" || (existing.precision === "Месяц"
      && existing.alternatives.length < 2 && assessPopularity(existing.sources).level === "review")) return radio2004;
    return existing;
  };
  const preferEarlyPoll = (existing: BirthdayHit | null): BirthdayHit | null => {
    if (!earlyPoll) return existing;
    if (!existing || existing.precision === "Год" || (existing.precision === "Месяц"
      && (existing.alternatives.length < 2 || assessPopularity(existing.sources).level === "review"))) return earlyPoll;
    return existing;
  };
  const gapResult = gramophoneGapHit(date, today);
  if (gapResult) return gapResult;
  const gramophoneResult = gramophoneHit2009(date, today);
  if (gramophoneResult) return gramophoneResult;
  const maximumResult = maximumHit1998(date, today);
  if (maximumResult) return maximumResult;
  const readerResult = readerChartHit1981(date, today);
  if (readerResult) return readerResult;
  const streaming2018 = streamingGap2018(date, today);
  if (streaming2018) return streaming2018;
  const streamingResult = streamingHit(date, today);
  if (streamingResult) return streamingResult;
  if (requestedYear >= 1977 && requestedYear <= 1979) {
    const result = preferEarlyPoll(historicalHit(date, birthdayValue));
    if (result) return result;
  }
  if (requestedYear >= 1970 && requestedYear <= 2004) {
    const result = preferRadio2004(preferEarlyPoll(historicalBroadcastHit(date, birthdayValue)));
    if (result) {
      if (requestedYear === 1980 && result.precision !== "Неделя") return readerChartHit1980(date, today) ?? result;
      return result;
    }
    if (requestedYear === 1980) {
      const reader1980 = readerChartHit1980(date, today);
      if (reader1980) return reader1980;
    }
  }
  if (requestedYear >= 2004 && requestedYear <= 2016) {
    const result = preferRadio2004(multichartHit(date, birthdayValue, ENRICHED_LEGACY_MULTICHART));
    if (result) return result;
  }
  if (requestedYear === 2017) {
    const result = multichartHit(date, birthdayValue, PILOT_2017);
    if (result) return result;
  }
  if (requestedYear >= 2018 && requestedYear <= 2025) {
    // Streaming first: a dated weekly streaming chart outranks a weekly Shazam position.
    const weeklyStreaming = verifiedStreamingWeek2018(date, today);
    if (weeklyStreaming) return weeklyStreaming;
    const result = multichartHit(date, birthdayValue, CULTURALLY_CALIBRATED_MODERN_MULTICHART, false, 5);
    if (!result || result.alternatives.length < 2) {
      const verified = verifiedStreamingWeek2018(date, today) ?? verifiedStreamingWeek2018(date, today, true) ?? streamingMay2020(date, today);
      if (verified) return verified;
    }
    if (result) return result;
  }

  // Coverage guarantee: a valid date in the supported range must always
  // return a real, sourced song. The fallback never crosses a calendar-year
  // boundary and advertises broader precision instead of pretending that an
  // annual archive is an exact weekly chart.
  if (requestedYear >= 1970 && requestedYear <= 2003) {
    const result = preferEarlyPoll(historicalAnnualHit(date));
    if (result) return result;
  }
  if (requestedYear >= 2004 && requestedYear <= 2016) {
    const result = multichartAnnualHit(date, ENRICHED_LEGACY_MULTICHART);
    if (result) return result;
  }
  if (requestedYear === 2017) {
    const result = multichartHit(date, birthdayValue, PILOT_2017, true);
    if (result) return result;
  }
  if (requestedYear >= 2018 && requestedYear <= 2025) {
    const result = multichartHit(date, birthdayValue, CULTURALLY_CALIBRATED_MODERN_MULTICHART, true, 5);
    if (result) return result;
  }

  const yearChart = WEEKLY_CHART.filter(([chartDate, artist, title]) => chartDate.startsWith(`${requestedYear}-`) && isEligibleRussianLanguageTrack(title, artist));
  if (!yearChart.length) return null;
  let closest = yearChart[0];
  let closestDistance = Math.abs(dateValue(closest[0]) - birthdayValue);

  for (let index = 1; index < yearChart.length; index += 1) {
    const candidate = yearChart[index];
    const distance = Math.abs(dateValue(candidate[0]) - birthdayValue);
    if (distance < closestDistance) {
      closest = candidate;
      closestDistance = distance;
    }
    if (dateValue(candidate[0]) > birthdayValue && distance > closestDistance) break;
  }

  let distanceDays = Math.round(closestDistance / DAY_MS);
  let annualFallback = distanceDays > WEEK_DISTANCE_DAYS && closest[0].slice(0, 7) !== date.slice(0, 7);
  if (distanceDays > MAX_DISTANCE_DAYS) {
    const sameYearChart = WEEKLY_CHART.filter(([chartDate, artist, title]) => chartDate.startsWith(`${requestedYear}-`) && isEligibleRussianLanguageTrack(title, artist));
    if (sameYearChart.length === 0) return null;
    closest = sameYearChart[0];
    closestDistance = Math.abs(dateValue(closest[0]) - birthdayValue);
    for (let index = 1; index < sameYearChart.length; index += 1) {
      const candidate = sameYearChart[index];
      const distance = Math.abs(dateValue(candidate[0]) - birthdayValue);
      if (distance < closestDistance) {
        closest = candidate;
        closestDistance = distance;
      }
    }
    distanceDays = Math.round(closestDistance / DAY_MS);
    annualFallback = true;
  }

  const [chartDate, artist, title] = closest;
  const [year, month] = date.split("-").map(Number);
  const chartYear = Number(chartDate.slice(0, 4));
  const precision: Precision = annualFallback ? "Год" : distanceDays <= WEEK_DISTANCE_DAYS ? "Неделя" : "Месяц";
  const chartBeforeBirthday = dateValue(chartDate) < birthdayValue;

  return {
    artist,
    title,
    year,
    month,
    chartDate,
    distanceDays,
    precision,
    proximity: annualFallback
      ? `Это ближайший подтверждённый русскоязычный лидер ${year} года; точность до месяца пока не заявляется`
      : proximityText(distanceDays, chartBeforeBirthday),
    period: annualFallback ? `ближайший сохранённый выпуск ${year} года · ${displayDate(chartDate)}` : `выпуск от ${displayDate(chartDate)}`,
    method: annualFallback
      ? `первое место датированного хит-парада «Русского радио» выбрано строго внутри ${year} года и помечено широкой годовой точностью`
      : `первое место датированного хит-парада «Русского радио» от ${displayDate(chartDate)}`,
    sourceId: `${annualFallback ? "YEAR-COVERAGE" : "RUSSIAN-RADIO"}-${chartDate}`,
    sourceLabel: `Хит-парад «Русского радио» — ${displayDate(chartDate)}`,
    sourceUrl: sourceUrl(chartDate),
    archiveUrl: `https://hotcharts.ru/rusradio/archive/${chartYear}.htm`,
    archiveLabel: `Все обновления чарта за ${chartYear} год`,
    mode: annualFallback ? "архив года" : "радиочарт",
    chartRank: 1,
    chartMetric: annualFallback ? "ПОДТВЕРЖДЁННЫЙ ХИТ ЭТОГО ГОДА" : "ДАТИРОВАННЫЙ ЧАРТ",
    signalTypes: 1,
    sources: [
      {
        id: `RUSSIAN-RADIO-${chartDate}`,
        label: `Русское радио: #1 · ${displayDate(chartDate)}`,
        url: sourceUrl(chartDate),
        kind: "радио",
        rank: 1,
      },
    ],
    alternatives: [],
    color: palette[(chartYear + Number(chartDate.slice(5, 7))) % palette.length],
  };
}

const YEAR_CONTEXT_SIZE = 3;

const SAME_MONTH_ALTERNATIVES = 3;

// Other songs with their own evidence dated to the SAME calendar month (publication,
// broadcast, premiere, chart). They are listed as alternatives only; the selected
// song and its sources stay unchanged.
function withSameMonthAlternatives(hit: BirthdayHit, date: string): BirthdayHit {
  if (hit.precision === "Год" || hit.alternatives.length >= 2 || hit.year < 1970 || hit.year > 2004) return hit;
  const month = date.slice(0, 7);
  const birthday = dateValue(date);
  const taken = new Set([hit, ...hit.alternatives].map((entry) => `${canonical(entry.artist)}|${canonical(entry.title)}`));
  const extra: HitAlternative[] = [];
  const sameMonth = [...HISTORICAL_ANCHORS, ...KRUGOZOR_ANCHORS.filter((anchor) => curatedMonths.has(anchor.chartDate.slice(0, 7)))]
    .filter((anchor) => anchor.chartDate.slice(0, 7) === month)
    .sort((left, right) => Math.abs(dateValue(left.chartDate) - birthday) - Math.abs(dateValue(right.chartDate) - birthday));
  for (const anchor of sameMonth) {
    // Rotate inside each anchor so neighbouring days do not all list the same songs.
    const offset = anchor.candidates.length ? Number(date.slice(8, 10)) % anchor.candidates.length : 0;
    const rotated = [...anchor.candidates.slice(offset), ...anchor.candidates.slice(0, offset)];
    for (const candidate of rotated) {
      const key = `${canonical(candidate.artist)}|${canonical(candidate.title)}`;
      if (taken.has(key)) continue;
      taken.add(key);
      extra.push({ artist: candidate.artist, title: candidate.title });
    }
  }
  if (!extra.length) return hit;
  return { ...hit, alternatives: [...hit.alternatives, ...extra].slice(0, SAME_MONTH_ALTERNATIVES) };
}

function withYearContext(hit: BirthdayHit, date: string): BirthdayHit {
  if (hit.alternatives.length >= 2 || hit.year < 1970 || hit.year > 2004) return hit;
  const taken = new Set([hit, ...hit.alternatives].map((entry) => `${canonical(entry.artist)}|${canonical(entry.title)}`));
  const pool = annualPool(hit.year).filter((entry) => !taken.has(`${canonical(entry.artist)}|${canonical(entry.title)}`));
  if (!pool.length) return hit;
  const day = Math.round((dateValue(date) - dateValue(`${hit.year}-01-01`)) / DAY_MS);
  const start = (Math.floor(day / 7) * YEAR_CONTEXT_SIZE) % pool.length;
  const size = Math.min(YEAR_CONTEXT_SIZE, pool.length);
  const yearContext = Array.from({ length: size }, (_, i) => pool[(start + i) % pool.length])
    .map(({ artist, title }) => ({ artist, title }));
  return { ...hit, yearContext };
}

// A dated weekly radio hit-parade near the birthday is stronger evidence of what was
// actually playing than a month-level release, concert or broadcast. Before 1999 only
// Радио Максимум is available, so at least two Russian-language entries are required.
function preferRadioWeek(hit: BirthdayHit | null, date: string, today: string): BirthdayHit | null {
  if (hit?.precision === "Неделя") return hit;
  // After 2003 month-level streaming evidence already carries listener platforms; the
  // recent radio issues only replace year-level fallbacks.
  if (hit && date > "2003-12-31" && hit.precision !== "Год") return hit;
  const radio = radioWeeklyHit(date, today);
  if (!radio || (radio.year < 1999 && radio.alternatives.length < 1)) return hit;
  return radio;
}

// «Чартова дюжина» («Наше радио», since July 1999) is a weekly listener vote. The
// multichart already carries some of its issues through the hotcharts.ru «Наше радио»
// mirror (same chart: top 13, same positions in 95% of cross-checked weeks); those are
// relabelled as the listener vote they are. Otherwise, when the selected song was in the
// issue nearest the birthday (±7 days), that issue is added as audience evidence.
// The selected song never changes.
const NASHE_WEEKLY = /hotcharts\.ru\/nashe\/archive\/\d{2}-\d{2}-\d{4}\.htm$/;
function withListenerVote(hit: BirthdayHit, date: string): BirthdayHit {
  if (date < "1999-06-27") return hit;
  let relabelled = false;
  const sources = hit.sources.map((source) => {
    if (!NASHE_WEEKLY.test(source.url) || source.kind !== "радио") return source;
    relabelled = true;
    return { ...source, kind: "голосование слушателей", label: source.label.replace(/^Наше радио:/, "«Чартова дюжина» «Нашего радио» (зеркало hotcharts.ru):") };
  });
  if (relabelled) return { ...hit, sources };
  if (hit.sources.some((source) => source.url.includes("/charts/chartova-duzhina/"))) return hit;
  const week = chartovaNear(hit.artist, hit.title, date);
  if (!week) return hit;
  const issue = week.date.split("-").reverse().join(".");
  return {
    ...hit,
    sources: [...hit.sources, {
      id: `chartova-${week.date}-${week.rank}`,
      label: `«Чартова дюжина» «Нашего радио»: #${week.rank} · выпуск ${issue}`,
      url: `https://chartoteka.com/charts/chartova-duzhina/${week.date}`,
      kind: "голосование слушателей",
      rank: week.rank,
    }],
  };
}

// 1995–2025 dates where the main evidence has fewer than three Russian-language songs:
// other songs from the radio hit-parade issue nearest the birthday («Золотой граммофон»,
// «Хит-парад двух столиц»; ±6 days, same year, at least two weeks in the chart) are listed
// as alternatives of the same week. They never become the selected song and add no
// evidence to it.
const RADIO_ALT_ISSUES: readonly { date: string; tracks: readonly { rank: number; artist: string; title: string }[] }[] =
  [...RADIO_ISSUES_1995_2003, ...GRAMOPHONE_ALT_ISSUES];
function withRadioAlternatives(hit: BirthdayHit, date: string, today: string): BirthdayHit {
  if (hit.alternatives.length >= 2 || date < "1995-01-01") return hit;
  const target = dateValue(date);
  let issue: (typeof RADIO_ALT_ISSUES)[number] | null = null;
  for (const entry of RADIO_ALT_ISSUES) {
    if (!entry.tracks.length) continue;
    if (entry.date > today || entry.date.slice(0, 4) !== date.slice(0, 4)) continue;
    const distance = Math.abs(dateValue(entry.date) - target);
    if (distance <= 6 * DAY_MS && (!issue || distance < Math.abs(dateValue(issue.date) - target))) issue = entry;
  }
  if (!issue) return hit;
  const taken = new Set([hit, ...hit.alternatives].map((entry) => `${canonical(entry.artist)}|${canonical(entry.title)}`));
  const extra: HitAlternative[] = [];
  for (const track of issue.tracks) {
    if (hit.alternatives.length + extra.length >= 2) break;
    const key = `${canonical(track.artist)}|${canonical(track.title)}`;
    if (taken.has(key) || !isEligibleRussianLanguageTrack(track.title, track.artist)) continue;
    taken.add(key);
    extra.push({ artist: track.artist, title: track.title });
  }
  return extra.length ? { ...hit, alternatives: [...hit.alternatives, ...extra] } : hit;
}

export function getBirthdayHit(date: string, today = todayUtc()): BirthdayHit | null {
  if (!isSupportedDate(date, today)) return null;
  const hit = preferRadioWeek(resolveBirthdayHit(date, today), date, today);
  return hit ? withListenerVote(withRadioAlternatives(withYearContext(withSameMonthAlternatives(hit, date), date), date, today), date) : null;
}
