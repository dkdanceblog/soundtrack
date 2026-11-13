import type { BirthdayHit } from "./hits";

const september = "https://www.intermedia.ru/news/327733";
const previous = "https://www.intermedia.ru/news/326958";
const following = "https://www.intermedia.ru/news/328008";
// National Apple week 17–23 September; Yandex daily snapshot 26 September.
// Different observation periods are retained explicitly, never merged into a same-day snapshot.
export function streamingGap2018(date: string, today: string): BirthdayHit | null {
  if (date !== "2018-09-07" || today < "2018-10-04") return null;
  const tracks = [
    { artist: "Лёша Свик", title: "Малиновый свет", apple: 5, yandex: 5 },
    { artist: "Тима Белорусских", title: "Мокрые кроссы", apple: 2, yandex: 7 },
    { artist: "Монеточка", title: "Каждый раз", apple: 9, yandex: 10 },
  ];
  const selected = tracks[0];
  const sources = [
    { id: "apple-2018-09-23-malinovy-svet", label: "Apple Music Россия: #5 · неделя 17–23.09.2018 · сводка InterMedia", url: september, kind: "датированный стриминговый чарт", rank: 5 },
    { id: "yandex-2018-09-26-malinovy-svet", label: "Яндекс Музыка: #5 · снимок 26.09.2018 · 14 358 слушателей за день · сводка InterMedia", url: september, kind: "датированный стриминговый чарт", rank: 5 },
    { id: "repeat-snapshot-2018-09-30-malinovy-svet", label: "Повторное присутствие: Apple Music Россия #5 · неделя 24–30.09.2018 · сводка InterMedia", url: following, kind: "повторное датированное наблюдение" },
    { id: "repeat-snapshot-2018-09-02-malinovy-svet", label: "Предыдущее присутствие: Apple Music Россия #3 · неделя 27.08–02.09.2018 · сводка InterMedia", url: previous, kind: "повторное датированное наблюдение" },
  ];
  return {
    artist: selected.artist, title: selected.title, year: 2018, month: 9,
    chartDate: "2018-09-23", evidenceMonth: "2018-09", distanceDays: 16, precision: "Месяц",
    period: "слушательские чарты · сентябрь 2018",
    proximity: "Есть слушательские данные за сентябрь, но они не подтверждают хит в неделю 7 сентября. Точность только до месяца.",
    method: "Три записи присутствуют в Apple Music Россия за 17–23 сентября и в Яндекс Музыке 26 сентября. Периоды площадок различаются и не представлены как единый снимок. Повторные недельные наблюдения: Малиновый свет — 27.08–02.09 и 24–30.09; Мокрые кроссы — 24–30.09; Каждый раз — 27.08–02.09. Непрерывные 14 дней и пик в неделю рождения не установлены. Первичные выгрузки не сверены; таблицы сохранены одним издателем InterMedia.",
    sourceId: sources[0].id, sourceLabel: sources[0].label, sourceUrl: september,
    archiveUrl: following, archiveLabel: "Открыть повторное наблюдение",
    mode: "стриминговый чарт", chartRank: selected.apple, chartMetric: "APPLE MUSIC РОССИЯ · СЕНТЯБРЬ 2018",
    signalTypes: 2, sources, alternatives: tracks.slice(1).map(({artist,title}) => ({artist,title})), color: "#ffdc2e",
  };
}
