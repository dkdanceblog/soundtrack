import { EXPANDED_2026 } from "./streaming-2026-expanded";
import type { BirthdayHit } from "./hits";
import type { PilotSource } from "./pilot-2017";
import { canonical, isEligibleRussianLanguageTrack, publicPlatforms } from "./evidence-policy";

type Track = { artist: string; title: string; apple: number; yandex?: number; vk?: number };
export type StreamingSnapshot = { date: string; url: string; tracks: readonly Track[] };
const jan19 = "https://www.intermedia.ru/amp/news/401203";
const jan26 = "https://www.intermedia.ru/amp/news/401375";
const aug31 = "https://reproductormsk.ru/muzyka/muzykalnye-charty-za-36-nedelyu-lidiruyut-toxi-dora-by-indiya-xcho-mot-mia-boyka-i-drugie.html";
const sep8 = "https://reproductormsk.ru/muzyka/muzykalnye-charty-za-37-nedelyu-lidiruyut-villian-madk1d-toxi-dora-by-indiya-xcho-mot-enzro-i-drugie.html";
const sep14 = "https://reproductormsk.ru/muzyka/muzykalnye-charty-za-38-nedelyu-lidiruyut-villian-madk1d-toxi-dora-enzro-i-drugie.html";

// Dates below are the national chart observation dates, not article publication
// dates, city charts, or a claimed seven-day measurement interval.
export const STREAMING_SNAPSHOTS_2026: readonly StreamingSnapshot[] = [
  ...EXPANDED_2026,
{
  "date": "2026-02-02",
  "url": "https://www.intermedia.ru/news/401567",
  "tracks": [
    {
      "artist": "СДП",
      "title": "Сыпь, гармоника!",
      "apple": 1,
      "yandex": 1
    },
    {
      "artist": "Icegergert, Zivert",
      "title": "Банк",
      "apple": 2,
      "yandex": 2
    },
    {
      "artist": "Jakone, Kiliana",
      "title": "Жиганская",
      "apple": 3,
      "yandex": 3
    },
    {
      "artist": "Ваня Дмитриенко",
      "title": "Шёлк",
      "apple": 6,
      "yandex": 7
    },
    {
      "artist": "Jeny Vesna",
      "title": "Внутренний голос",
      "apple": 8,
      "yandex": 19
    },
    {
      "artist": "Icegergert, Sky Rae",
      "title": "Наследство",
      "apple": 9,
      "yandex": 16
    },
    {
      "artist": "Sabi, Mia Boyka",
      "title": "Базовый минимум",
      "apple": 11,
      "yandex": 8
    }
  ]
},
{
  "date": "2026-02-09",
  "url": "https://www.intermedia.ru/news/401761",
  "tracks": [
    {
      "artist": "СДП",
      "title": "Сыпь, гармоника!",
      "apple": 1,
      "yandex": 1
    },
    {
      "artist": "Icegergert, Zivert",
      "title": "Банк",
      "apple": 2,
      "yandex": 2
    },
    {
      "artist": "Jakone, Kiliana",
      "title": "Жиганская",
      "apple": 3,
      "yandex": 3
    },
    {
      "artist": "Ваня Дмитриенко",
      "title": "Шёлк",
      "apple": 5,
      "yandex": 6
    },
    {
      "artist": "Jeny Vesna",
      "title": "Внутренний голос",
      "apple": 8,
      "yandex": 18
    },
    {
      "artist": "Sabi, Mia Boyka",
      "title": "Базовый минимум",
      "apple": 9,
      "yandex": 8
    },
    {
      "artist": "Icegergert, Sky Rae",
      "title": "Наследство",
      "apple": 10,
      "yandex": 17
    }
  ]
},
{
  "date": "2026-04-06",
  "url": "https://www.intermedia.ru/news/403035",
  "tracks": [
    {
      "artist": "Hollyflame",
      "title": "Тону",
      "apple": 3,
      "yandex": 1
    },
    {
      "artist": "Bearwolf",
      "title": "Феникс",
      "apple": 4,
      "yandex": 9
    },
    {
      "artist": "Icegergert, Zivert",
      "title": "Банк",
      "apple": 6,
      "yandex": 10
    },
    {
      "artist": "Клава Кока",
      "title": "Как я люблю тебя",
      "apple": 13,
      "yandex": 4
    },
    {
      "artist": "Sqwoz Bab",
      "title": "Купер",
      "apple": 14,
      "yandex": 2
    },
    {
      "artist": "Jakone, Kiliana",
      "title": "Жиганская",
      "apple": 19,
      "yandex": 15
    }
  ]
},
{
  "date": "2026-04-27",
  "url": "https://www.intermedia.ru/news/403562",
  "tracks": [
    {
      "artist": "Sayan",
      "title": "Мальборо",
      "apple": 1,
      "yandex": 1
    },
    {
      "artist": "Bearwolf",
      "title": "Феникс",
      "apple": 2,
      "yandex": 2
    },
    {
      "artist": "Баста, Guf",
      "title": "В сигаретном дыму",
      "apple": 3,
      "yandex": 18
    },
    {
      "artist": "Hollyflame",
      "title": "Тону",
      "apple": 4,
      "yandex": 3
    },
    {
      "artist": "Icegergert, Zivert",
      "title": "Банк",
      "apple": 7,
      "yandex": 9
    },
    {
      "artist": "Дискотека Авария, Vonamour",
      "title": "Кукла Remix 2026",
      "apple": 9,
      "yandex": 11
    },
    {
      "artist": "СДП",
      "title": "Сыпь, гармоника!",
      "apple": 12,
      "yandex": 12
    }
  ]
},
  { date: "2026-01-19", url: jan19, tracks: [
    { artist: "ICEGERGERT, Zivert", title: "Банк", apple: 1, vk: 2 },
    { artist: "Jakone, Kiliana", title: "Жиганская", apple: 2, vk: 1 },
    { artist: "Кэнни", title: "Ворона (feat. MC Дымка)", apple: 3, vk: 3 },
    { artist: "SABI, MIA BOYKA", title: "Базовый минимум", apple: 7, vk: 5 },
  ] },
  { date: "2026-01-26", url: jan26, tracks: [
    { artist: "ICEGERGERT, Zivert", title: "Банк", apple: 1, vk: 2 },
    { artist: "Jakone, Kiliana", title: "Жиганская", apple: 2, vk: 1 },
    { artist: "Кэнни", title: "Ворона (feat. MC Дымка)", apple: 4, vk: 3 },
    { artist: "SABI, MIA BOYKA", title: "Базовый минимум", apple: 7, vk: 6 },
  ] },
  { date: "2026-08-31", url: aug31, tracks: [
    { artist: "By Индия, Xcho, МОТ", title: "Шадэ", apple: 1, yandex: 2 },
    { artist: "Toxi$, Дора", title: "Знак", apple: 5, yandex: 1 },
    { artist: "Zivert", title: "GAZ", apple: 3, yandex: 5 },
    { artist: "BEARWOLF", title: "Феникс", apple: 4, yandex: 7 },
    { artist: "MIA BOYKA", title: "Экспонат", apple: 9, yandex: 3 },
    { artist: "VILLIAN, madk1d", title: "Династия", apple: 13, yandex: 4 },
    { artist: "ENZRO", title: "Ты не бойся ночи", apple: 7, yandex: 9 },
  ] },
  { date: "2026-09-08", url: sep8, tracks: [
    { artist: "By Индия, Xcho, МОТ", title: "Шадэ", apple: 1, yandex: 3 },
    { artist: "Toxi$, Дора", title: "Знак", apple: 2, yandex: 2 },
    { artist: "Zivert", title: "GAZ", apple: 5, yandex: 7 },
    { artist: "BEARWOLF", title: "Феникс", apple: 6, yandex: 10 },
    { artist: "MIA BOYKA", title: "Экспонат", apple: 12, yandex: 4 },
    { artist: "VILLIAN, madk1d", title: "Династия", apple: 7, yandex: 1 },
    { artist: "ENZRO", title: "Ты не бойся ночи", apple: 4, yandex: 6 },
  ] },
  { date: "2026-09-14", url: sep14, tracks: [
    { artist: "By Индия, Xcho, МОТ", title: "Шадэ", apple: 1, yandex: 3 },
    { artist: "Toxi$, Дора", title: "Знак", apple: 3, yandex: 2 },
    { artist: "Zivert", title: "GAZ", apple: 5, yandex: 8 },
    { artist: "BEARWOLF", title: "Феникс", apple: 6, yandex: 10 },
    { artist: "MIA BOYKA", title: "Экспонат", apple: 11, yandex: 4 },
    { artist: "VILLIAN, madk1d", title: "Династия", apple: 7, yandex: 1 },
    { artist: "ENZRO", title: "Ты не бойся ночи", apple: 2, yandex: 5 },
  ] },
];

// Only matching artist/recording identities in both national tables are kept.
// Both tables identify Siluet as the same Alice soundtrack duet; retain the
// existing catalogue display identity instead of counting OST spelling as a new song.
// Kenny has no Yandex top-20 entry on 08.12; it is deliberately absent there.
const STREAMING_SNAPSHOTS_2025: readonly StreamingSnapshot[] = [
  { date: "2025-12-01", url: "https://www.intermedia.ru/amp/news/400174", tracks: [
    { artist: "ICEGERGERT, Zivert", title: "Банк", apple: 1, yandex: 1 },
    { artist: "NEXTIME", title: "Светлана!", apple: 7, yandex: 2 },
    { artist: "Ваня Дмитриенко & Аня Пересильд", title: "Силуэт", apple: 2, yandex: 3 },
    { artist: "Jakone, Kiliana", title: "Жиганская", apple: 3, yandex: 4 },
    { artist: "Ваня Дмитриенко", title: "Шёлк", apple: 4, yandex: 5 },
    { artist: "SABI, MIA BOYKA", title: "Базовый минимум", apple: 6, yandex: 6 },
  ] },
  { date: "2025-12-08", url: "https://www.intermedia.ru/amp/news/400359", tracks: [
    { artist: "ICEGERGERT, Zivert", title: "Банк", apple: 1, yandex: 1 },
    { artist: "NEXTIME", title: "Светлана!", apple: 4, yandex: 2 },
    { artist: "Ваня Дмитриенко & Аня Пересильд", title: "Силуэт", apple: 2, yandex: 3 },
    { artist: "Jakone, Kiliana", title: "Жиганская", apple: 3, yandex: 4 },
    { artist: "Ваня Дмитриенко", title: "Шёлк", apple: 5, yandex: 5 },
    { artist: "SABI, MIA BOYKA", title: "Базовый минимум", apple: 7, yandex: 6 },
    { artist: "ЛСП", title: "Шиншиллы", apple: 6, yandex: 7 },
  ] },
  { date: "2025-12-15", url: "https://www.intermedia.ru/amp/news/400532", tracks: [
    { artist: "ICEGERGERT, Zivert", title: "Банк", apple: 1, yandex: 1 },
    { artist: "NEXTIME", title: "Светлана!", apple: 6, yandex: 2 },
    { artist: "Ваня Дмитриенко & Аня Пересильд", title: "Силуэт", apple: 2, yandex: 4 },
    { artist: "Jakone, Kiliana", title: "Жиганская", apple: 3, yandex: 5 },
    { artist: "Ваня Дмитриенко", title: "Шёлк", apple: 5, yandex: 6 },
    { artist: "SABI, MIA BOYKA", title: "Базовый минимум", apple: 8, yandex: 7 },
    { artist: "ЛСП", title: "Шиншиллы", apple: 7, yandex: 3 },
    { artist: "Кэнни", title: "Ворона (feat. MC Дымка)", apple: 4, yandex: 8 },
  ] },
  { date: "2025-12-22", url: "https://www.intermedia.ru/amp/news/400713", tracks: [
    { artist: "ICEGERGERT, Zivert", title: "Банк", apple: 1, yandex: 1 },
    { artist: "NEXTIME", title: "Светлана!", apple: 7, yandex: 4 },
    { artist: "Ваня Дмитриенко & Аня Пересильд", title: "Силуэт", apple: 3, yandex: 7 },
    { artist: "Jakone, Kiliana", title: "Жиганская", apple: 4, yandex: 5 },
    { artist: "Ваня Дмитриенко", title: "Шёлк", apple: 6, yandex: 9 },
    { artist: "SABI, MIA BOYKA", title: "Базовый минимум", apple: 9, yandex: 10 },
    { artist: "ЛСП", title: "Шиншиллы", apple: 5, yandex: 3 },
    { artist: "Кэнни", title: "Ворона (feat. MC Дымка)", apple: 2, yandex: 6 },
    { artist: "Betsy, Ded M", title: "Под Новый год", apple: 8, yandex: 2 },
  ] },
];

const dayMs = 86400000;
const time = (date: string) => Date.parse(`${date}T12:00:00Z`);
const identity = (track: Track) => `${canonical(track.artist)}|${canonical(track.title)}`;
const displayDate = (date: string) => date.split("-").reverse().join(".");

function sources(snapshot: StreamingSnapshot, track: Track): PilotSource[] {
  const rows: (readonly ["apple" | "yandex" | "vk", string, number | undefined])[] = [
    ["apple", "Apple Music Россия", track.apple],
    ["yandex", "Яндекс Музыка", track.yandex], ["vk", "VK Музыка", track.vk],
  ];
  return rows
    .filter((entry): entry is readonly ["apple" | "yandex" | "vk", string, number] => typeof entry[2] === "number")
    .map(([platform, label, rank]) => ({
      id: `${platform}-snapshot-${snapshot.date}-${canonical(track.title).replaceAll(" ", "-")}`,
      label: `${label}: #${rank} · снимок ${displayDate(snapshot.date)} · сводка InterMedia`,
      url: snapshot.url, kind: "датированный стриминговый чарт", rank,
    }));
}

export function streamingHit(date: string, today: string): BirthdayHit | null {
  const year = Number(date.slice(0, 4));
  if (year !== 2026 && !date.startsWith("2025-12-")) return null;
  const snapshots = year === 2025 ? STREAMING_SNAPSHOTS_2025 : STREAMING_SNAPSHOTS_2026;
  const observed = snapshots.filter((snapshot) => snapshot.date <= today);
  const sameMonth = observed.filter((snapshot) => snapshot.date.slice(0, 7) === date.slice(0, 7));
  const near = observed.filter((snapshot) => Math.abs(time(snapshot.date) - time(date)) <= 6 * dayMs);
  const pool = near.length ? near : sameMonth;
  if (!pool.length) return null;
  const closest = [...pool].sort((a, b) => Math.abs(time(a.date) - time(date)) - Math.abs(time(b.date) - time(date)))[0];
  const candidates = closest.tracks.filter((track) => {
    if (!isEligibleRussianLanguageTrack(track.title, track.artist) || publicPlatforms(sources(closest, track)).size < 2) return false;
    // At least two observations separated by a week; this does not establish
    // uninterrupted chart presence on the days between observations.
    return observed.some((other) => Math.abs(time(other.date) - time(closest.date)) >= 7 * dayMs
      && Math.abs(time(other.date) - time(closest.date)) <= 31 * dayMs
      && other.tracks.some((candidate) => identity(candidate) === identity(track)));
  }).sort((a, b) => (a.apple + (a.yandex ?? a.vk ?? 100)) - (b.apple + (b.yandex ?? b.vk ?? 100))).slice(0, 3);
  if (candidates.length < 3) return null;
  // Accuracy over variety: the best-ranked candidate (list is sorted by combined rank).
  const index = 0;
  const selected = candidates[index];
  const history = observed.filter((snapshot) => Math.abs(time(snapshot.date) - time(closest.date)) <= 31 * dayMs
    && snapshot.tracks.some((candidate) => identity(candidate) === identity(selected)));
  const evidence = sources(closest, selected);
  const primary = evidence[0];
  const distanceDays = Math.round(Math.abs(time(closest.date) - time(date)) / dayMs);
  const precision = near.length ? "Неделя" : "Месяц";
  const historySources = history.filter((snapshot) => snapshot.date !== closest.date).map((snapshot) => ({
    id: `repeat-snapshot-${snapshot.date}-${canonical(selected.title).replaceAll(" ", "-")}`,
    label: `Повторное присутствие той же записи · ${displayDate(snapshot.date)} · сводка InterMedia`,
    url: snapshot.url, kind: "повторное датированное наблюдение",
  }));
  return {
    artist: selected.artist, title: selected.title, year, month: Number(date.slice(5, 7)),
    chartDate: closest.date, ...(precision === "Месяц" ? { evidenceMonth: date.slice(0, 7) } : {}),
    distanceDays, precision,
    proximity: precision === "Неделя"
      ? `Снимок слушательских чартов от ${displayDate(closest.date)} находится в пределах 6 дней от выбранной даты. Это не итог всей недели.`
      : `Слушательские чарты подтверждены в выбранном месяце, но ближайший снимок от ${displayDate(closest.date)} слишком далёк для недельной привязки.`,
    period: `снимок чартов · ${displayDate(closest.date)}`,
    method: `Выбор из трёх записей с подтверждением на двух площадках в одном снимке. Та же запись присутствует в наблюдениях ${history.map((snapshot) => displayDate(snapshot.date)).join(", ")}. Между наблюдениями непрерывное присутствие не установлено. Таблицы площадок сохранены в сводках одного агентства; перепечатки не считаются новыми площадками.`,
    sourceId: primary.id, sourceLabel: primary.label, sourceUrl: primary.url,
    archiveUrl: historySources[0]?.url ?? primary.url, archiveLabel: "Открыть повторное наблюдение",
    mode: "стриминговый чарт", chartRank: selected.apple, chartMetric: "APPLE MUSIC РОССИЯ · СНИМОК ЧАРТА",
    signalTypes: publicPlatforms(evidence).size, sources: [...evidence, ...historySources],
    alternatives: candidates.filter((_, candidateIndex) => candidateIndex !== index).map(({ artist, title }) => ({ artist, title })),
    color: ["#ff633d", "#ffdc2e", "#a6ec3c"][index],
  };
}
