import type { BirthdayHit, HitSource } from "./hits";
import { VERIFIED_STREAMING_WEEKS_2018 } from "./streaming-weeks-2018-data";
import { isEligibleRussianLanguageTrack } from "./evidence-policy";

// Replacement is limited to incomplete results and an actual national weekly interval.
// A later corroborating snapshot supports popularity, not the birthday's daily rank.
export function verifiedStreamingWeek2018(date: string, today: string, monthFallback = false): BirthdayHit | null {
  const month = date.slice(0, 7);
  const week = monthFallback
    ? VERIFIED_STREAMING_WEEKS_2018.filter(row => row.start.startsWith(month) && row.end.startsWith(month)
      && row.published <= today && row.candidates.filter(track => track.repeat.published <= today
        && track.corroboration.date.startsWith(month)).length >= 3)
      .sort((a, b) => Math.abs(Date.parse(a.end) - Date.parse(date)) - Math.abs(Date.parse(b.end) - Date.parse(date)))[0]
    : VERIFIED_STREAMING_WEEKS_2018.find((row) => row.start <= date && date <= row.end && row.published <= today);
  if (!week) return null;
  const candidates = week.candidates.filter((track) => track.repeat.published <= today
    && (!monthFallback || track.corroboration.date.startsWith(month))
    && isEligibleRussianLanguageTrack(track.title, track.artist)).slice(0, 3);
  if (candidates.length < 3) return null;
  // Accuracy over variety: the first (best-placed) verified candidate of the week.
  const index = 0;
  const selected = candidates[index];
  const second = selected.corroboration;
  const otherName = second.platform === "vk" ? "VK / ВКонтакте" : "Яндекс Музыка";
  const url = `https://www.intermedia.ru/news/${week.id}`;
  const repeatUrl = `https://www.intermedia.ru/news/${selected.repeat.id}`;
  const sources: HitSource[] = [
    { id: `apple-${week.end}-${index}`, label: `Apple Music Россия: #${selected.rank} · неделя ${week.start} — ${week.end} · сводка InterMedia`, url, kind: "датированный стриминговый чарт", rank: selected.rank },
    { id: `${second.platform}-${second.date}-${index}`, label: `${otherName}: #${second.rank} · снимок ${second.date} · сводка InterMedia`, url, kind: "датированный стриминговый чарт", rank: second.rank },
    { id: `repeat-snapshot-${selected.repeat.end}-${index}`, label: `Повторное присутствие: Apple Music Россия #${selected.repeat.rank} · неделя ${selected.repeat.start} — ${selected.repeat.end} · сводка InterMedia`, url: repeatUrl, kind: "повторное датированное наблюдение", rank: selected.repeat.rank },
  ];
  return {
    artist: selected.artist, title: selected.title, year: 2018, month: Number(date.slice(5,7)),
    chartDate: week.end, ...(monthFallback ? { evidenceMonth: month } : {}),
    distanceDays: Math.abs(Math.round((Date.parse(week.end) - Date.parse(date)) / 86400000)),
    precision: monthFallback ? "Месяц" : "Неделя", period: `слушательский чарт · ${week.start} — ${week.end}`,
    proximity: monthFallback
      ? `Наблюдения относятся к месяцу рождения: Apple Music ${week.start} — ${week.end}, второе наблюдение ${second.date}. Популярность в неделю рождения не установлена.`
      : `Дата рождения входит в неделю национального Apple Music: ${week.start} — ${week.end}. Второе наблюдение относится к ${second.date}.`,
    method: `${monthFallback ? "Для этой даты проверенной недельной тройки нет. Используются три песни с наблюдениями внутри того же месяца; результат имеет только месячную точность. " : ""}Три записи присутствуют в национальном недельном Apple Music и датированном Яндекс/VK; у каждой есть повторное наблюдение Apple в другой неделе. Периоды площадок различаются. Позиция Apple относится ко всей указанной неделе, а не к конкретному дню рождения. Непрерывные 14 дней и ежедневный пик не установлены. Таблицы сохранены одним издателем InterMedia; первичные выгрузки площадок не сверены. Исполнители и версии сопоставлены точно; Allj нормализован только для «Минимал» и дуэта «Розовое вино».`,
    sourceId: sources[0].id, sourceLabel: sources[0].label, sourceUrl: url,
    archiveUrl: repeatUrl, archiveLabel: "Открыть повторное наблюдение",
    mode: "стриминговый чарт", chartRank: selected.rank, chartMetric: monthFallback ? "APPLE MUSIC РОССИЯ · НАБЛЮДЕНИЕ В МЕСЯЦЕ" : "APPLE MUSIC РОССИЯ · НЕДЕЛЬНАЯ ПОЗИЦИЯ",
    signalTypes: 2, sources, alternatives: candidates.filter((_,i) => i !== index).map(({artist,title}) => ({artist,title})), color: "#ffdc2e",
  };
}
