import type { BirthdayHit, HitSource } from "./hits";
import { canonical, isEligibleRussianLanguageTrack } from "./evidence-policy";
import { MAY_2020_TABLES } from "./streaming-may-2020-data";

// Two coherent dated republications. The next issue has a contradictory period
// and is deliberately excluded rather than repaired by inference.
export function streamingMay2020(date: string, today: string): BirthdayHit | null {
  if (!date.startsWith("2020-05-") || MAY_2020_TABLES.weeks.some(row => row.published > today)) return null;
  const weeks = MAY_2020_TABLES.weeks;
  const exact = weeks.find(row => row.start <= date && date <= row.end);
  const week = exact ?? [...weeks].sort((a,b) => Math.abs(Date.parse(a.end) - Date.parse(date)) - Math.abs(Date.parse(b.end) - Date.parse(date)))[0];
  const repeat = weeks.find(row => row.end !== week.end)!;
  const same = (row: readonly [number, string, string], artist: string, title: string) => canonical(row[1]) === canonical(artist) && canonical(row[2]) === canonical(title);
  const candidates = MAY_2020_TABLES.selectedIdentities.map(([artist,title]) => ({
    artist, title,
    apple: week.appleRows.find(row => same(row,artist,title)),
    yandex: week.yandexRows.find(row => same(row,artist,title)),
    repeat: repeat.appleRows.find(row => same(row,artist,title)),
  })).filter(track => track.apple && track.yandex && track.repeat && isEligibleRussianLanguageTrack(track.title,track.artist));
  if (candidates.length < 3) return null;
  // Accuracy over variety: the best Apple Music Russia position of the week.
  const index = candidates.reduce((top, track, i, all) => (track.apple![0] < all[top].apple![0] ? i : top), 0);
  const selected = candidates[index];
  const sources: HitSource[] = [
    { id: `apple-${week.end}-may2020-${index}`, label: `Apple Music Россия: #${selected.apple![0]} · ${week.start} — ${week.end} · таблица InterMedia в перепубликации SunLink`, url:week.url, kind:"датированный стриминговый чарт", rank:selected.apple![0] },
    { id: `yandex-${week.yandexDate}-may2020-${index}`, label: `Яндекс Музыка: #${selected.yandex![0]} · снимок ${week.yandexDate} · та же перепубликация`, url:week.url, kind:"датированный стриминговый чарт", rank:selected.yandex![0] },
    { id: `repeat-snapshot-${repeat.end}-may2020-${index}`, label: `Повторное присутствие: Apple Music Россия #${selected.repeat![0]} · ${repeat.start} — ${repeat.end} · перепубликация SunLink`, url:repeat.url, kind:"повторное датированное наблюдение", rank:selected.repeat![0] },
  ];
  return {
    artist:selected.artist, title:selected.title, year:2020, month:5, chartDate:week.end,
    ...(exact ? {} : { evidenceMonth:"2020-05" }),
    distanceDays:Math.abs(Math.round((Date.parse(week.end)-Date.parse(date))/86400000)),
    precision:exact ? "Неделя" : "Месяц", period:`слушательский чарт · ${week.start} — ${week.end}`,
    proximity:exact ? `Дата рождения входит в неделю Apple Music ${week.start} — ${week.end}; снимок Яндекс относится к ${week.yandexDate}.`
      : `Наблюдения относятся к маю 2020; популярность в неделю рождения не установлена. Apple Music: ${week.start} — ${week.end}, Яндекс: ${week.yandexDate}.`,
    method:`${exact ? "" : "Для недели рождения проверенной тройки нет; используются наблюдения внутри того же месяца с месячной точностью. "}Три русскоязычные записи есть в национальных таблицах Apple Music и Яндекс, с повторным появлением Apple через семь дней. Периоды площадок различаются. Непрерывные 14 дней и ежедневный пик не доказаны. Сводки InterMedia доступны в перепубликациях SunLink; оригинальные страницы издателя и выгрузки площадок не сверены. Перепубликация не считается независимым измерением. Выпуск с противоречивыми датами периода исключён.`,
    sourceId:sources[0].id, sourceLabel:sources[0].label, sourceUrl:week.url, archiveUrl:repeat.url,
    archiveLabel:"Открыть повторное наблюдение", mode:"стриминговый чарт", chartRank:selected.apple![0],
    chartMetric:exact ? "APPLE MUSIC РОССИЯ · НЕДЕЛЬНАЯ ПОЗИЦИЯ" : "APPLE MUSIC РОССИЯ · НАБЛЮДЕНИЕ В МЕСЯЦЕ",
    signalTypes:2, sources, alternatives:candidates.filter((_,i)=>i!==index).map(({artist,title})=>({artist,title})), color:"#ffdc2e",
  };
}
