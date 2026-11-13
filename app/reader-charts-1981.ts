import type { BirthdayHit } from "./hits";
import { isEligibleRussianLanguageTrack } from "./evidence-policy";

type RankedTrack = { artist: string; title: string; rank: number };
type ReaderChart = { month: string; published: string; tracks: readonly RankedTrack[] };
const transcription = "https://ridero.ru/books/khit-parady_v_sssr_1/freeText/";
const track = (artist: string, title: string, rank: number): RankedTrack => ({ artist, title, rank });
const maestro = (rank = 1) => track("Алла Пугачёва", "Маэстро", rank);
const races = (rank = 2) => track("Машина времени", "Скачки", rank);
const encore = (rank = 1) => track("Алла Пугачёва", "Песня на бис", rank);
const draw = (rank = 1) => track("Яак Йоала", "Я тебя рисую", rank);
const trouble = () => track("Алла Пугачёва", "Беда", 3);
const pauses = (rank: number) => track("Андрей Макаревич", "Паузы", rank);

// Transcribed song polls, not record-sales tables or release dates.
// The entry credited to «33 1/3» is omitted until its exact recording identity
// is verified. Keep the next eligible rank instead of merging it with a duet.
const BASE_CHARTS_1981: readonly ReaderChart[] = [
  { month: "1981-01", published: "1981-03-13", tracks: [maestro(), track("Валерий Леонтьев", "Там, в сентябре", 2), track("Аракс", "Колокол тревоги", 3)] },
  { month: "1981-02", published: "1981-04-10", tracks: [maestro(), races(), track("Валерий Леонтьев", "Там, в сентябре", 3)] },
  { month: "1981-03", published: "1981-05-08", tracks: [maestro(), races(), track("Земляне", "Каратэ", 3)] },
  { month: "1981-04", published: "1981-06-12", tracks: [maestro(), races(), track("Машина времени", "Снег", 3)] },
  { month: "1981-05", published: "1981-07-03", tracks: [maestro(), races(), track("Машина времени", "Снег", 4)] },
  { month: "1981-06", published: "1981-07-31", tracks: [maestro(), races(), track("Яак Йоала", "Как жаль", 4)] },
  { month: "1981-07", published: "1981-08-21", tracks: [maestro(), races(3), pauses(4)] },
  { month: "1981-08", published: "1981-09-18", tracks: [maestro(2), pauses(3), races(4)] },
  { month: "1981-09", published: "1981-10-16", tracks: [encore(), pauses(2), draw(4)] },
  { month: "1981-10", published: "1981-11-20", tracks: [encore(), draw(2), trouble()] },
  { month: "1981-11", published: "1981-12-24", tracks: [draw(), encore(2), trouble()] },
  { month: "1981-12", published: "1982-01-31", tracks: [draw(), track("Юрий Антонов", "Жизнь", 2), encore(3)] },
];
// BETA81: next eligible ranks from the same transcription (five songs per month).
// «33 1/3» stays omitted, as does «Скажи мне «да»» with its broken quotes.
const EXTRA_1981: Readonly<Record<string, readonly RankedTrack[]>> = {
  "1981-01": [races(4), track("Алла Пугачёва", "Дежурный ангел", 5)],
  "1981-02": [track("Аракс", "Колокол тревоги", 4), track("Земляне", "Каратэ", 5)],
  "1981-03": [track("Машина времени", "Снег", 4), track("Аракс", "Колокол тревоги", 5)],
  "1981-04": [track("Алла Пугачёва", "Музыкант", 4), track("Алла Пугачёва", "Ленинград", 5)],
  "1981-05": [track("Алла Пугачёва", "Ленинград", 5), track("Алла Пугачёва", "Музыкант", 6)],
  "1981-06": [track("Земляне", "Каскадёры", 5), track("Машина времени", "Снег", 6)],
  "1981-07": [track("Михаил Боярский", "Всё пройдёт", 6), track("Яак Йоала", "Как жаль", 7)],
  "1981-08": [track("Михаил Боярский", "Всё пройдёт", 5), track("Машина времени", "Хрустальный город", 6)],
  "1981-09": [maestro(5), track("Константин Никольский", "Поиграй со мной, гроза", 6)],
  "1981-10": [pauses(4), track("Константин Никольский", "Поиграй со мной, гроза", 5)],
  "1981-11": [track("Юрий Антонов", "Море", 5), track("Юрий Антонов", "Жизнь", 6)],
  "1981-12": [track("Алла Пугачёва", "Беда", 4), track("Юрий Антонов", "Море", 5)],
};

export const READER_CHARTS_1981: readonly ReaderChart[] = BASE_CHARTS_1981.map((chart) => ({
  ...chart, tracks: [...chart.tracks, ...(EXTRA_1981[chart.month] ?? [])],
}));

const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const displayDate = (date: string) => date.split("-").reverse().join(".");

export function readerChartHit1981(date: string, today: string): BirthdayHit | null {
  const chart = READER_CHARTS_1981.find((entry) => entry.month === date.slice(0, 7) && entry.published <= today);
  if (!chart) return null;
  const candidates = chart.tracks.filter((entry) => isEligibleRussianLanguageTrack(entry.title, entry.artist));
  if (candidates.length < 3) return null;
  // Accuracy over variety: the month's #1 among eligible songs.
  const index = candidates.reduce((top, track, i, all) => (track.rank < all[top].rank ? i : top), 0);
  const selected = candidates[index];
  const month = Number(chart.month.slice(5, 7));
  const period = `${months[month - 1]} 1981`;
  const source = {
    id: `zd-reader-${chart.month}-${selected.rank}`,
    label: `«Звуковая дорожка»: #${selected.rank} за ${period} · выпуск ${displayDate(chart.published)} · расшифровка С. Сычёва`,
    url: transcription, kind: "месячный читательский чарт (расшифровка)", rank: selected.rank,
  };
  return {
    artist: selected.artist, title: selected.title, year: 1981, month,
    chartDate: chart.published, evidenceMonth: chart.month, evidenceYear: 1981,
    distanceDays: Math.round(Math.abs(Date.parse(chart.published) - Date.parse(date)) / 86400000),
    precision: "Месяц", period: `читательский хит-парад · ${period}`,
    proximity: `Хит-парад относится к месяцу рождения, хотя опубликован ${displayDate(chart.published)}. Недельная точность не установлена.`,
    method: `Выбор из ${candidates.length} песен помесячного читательского хит-парада МК. Месяц опроса и дата публикации разделены по расшифровке Сергея Сычёва. Это одна аудитория и вторичный источник: оригинальный газетный скан ещё не сверен. Непрерывные две недели популярности этим списком не подтверждаются.`,
    sourceId: source.id, sourceLabel: source.label, sourceUrl: source.url,
    archiveUrl: source.url, archiveLabel: "Открыть расшифровку хит-парада",
    mode: "месячный чарт", chartRank: selected.rank, chartMetric: "ЗД / МК · ЧИТАТЕЛЬСКИЙ ОПРОС ЗА МЕСЯЦ",
    signalTypes: 1, sources: [source],
    alternatives: candidates.filter((_, i) => i !== index).map(({ artist, title }) => ({ artist, title })),
    color: ["#ff633d", "#ffdc2e", "#a6ec3c"][index % 3],
  };
}
