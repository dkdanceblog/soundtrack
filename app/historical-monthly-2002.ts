import type { HistoricalBroadcast } from "./historical-broadcasts-1986-1987";

// Cross-checked 2026-09-09. TV archive supplies the calendar month;
// MK's contemporary reader results separately supply popularity in 2002.
// The 15th is a technical midpoint, not an asserted air date or peak.
const tv = "https://pesnyagoda.my1.ru/1999_2002.html";
const mk = "https://www.mk.ru/editions/daily/article/2003/01/10/142687-30-hitov-goda.html";
const months: { month: string; label: string; tracks: [string, string, number | null][] }[] = [
  { month: "03", label: "март 2002", tracks: [["Динамит", "Убегаю", 16], ["Руки Вверх!", "Уходи", null]] },
  { month: "09", label: "сентябрь 2002", tracks: [["Hi-Fi", "А мы любили", 17], ["Дискотека Авария", "Х.Х.Х.И.Р.Н.Р.", 9], ["Руки Вверх!", "Он тебя целует", 25]] },
  { month: "10", label: "октябрь 2002", tracks: [["Андрей Губин", "Танцы", null]] },
];

export const HISTORICAL_MONTHLY_2002: readonly HistoricalBroadcast[] = months.map(({ month, label, tracks }) => ({
  chartDate: `2002-${month}-15`, dateLabel: label, archiveYear: 2002,
  programLabel: "Песня года", anchorKind: "месячный эфир",
  candidates: tracks.map(([artist, title, rank], i) => ({ artist, title, sources: [
    { id: `song2002-${month}-${i}`, label: `Песня года: промежуточный выпуск, ${label}`, url: tv, kind: "архивный эфир" },
    { id: `mk2002-${month}-${i}`, label: rank == null
      ? `Звуковая дорожка МК: «${title}» отмечена в обзоре хитов 2002 года; без места в топ-30`
      : `Звуковая дорожка МК: #${rank} в годовом читательском чарте 2002`,
      url: mk, kind: rank == null ? "годовой обзор" : "читательский чарт", ...(rank == null ? {} : { rank }) },
  ] })),
}));
