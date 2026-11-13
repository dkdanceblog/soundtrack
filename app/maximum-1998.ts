import type { BirthdayHit } from "./hits";

type Snapshot = { date: string; url: string; tracks: readonly { artist: string; title: string; rank: number; weeks: number }[] };
export const MAXIMUM_1998: readonly Snapshot[] = [
  {
    "date": "1998-09-06",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-09-06",
    "tracks": [
      {
        "artist": "Мумий Тролль",
        "title": "В думах о девушке из города центрального подчинения КНР",
        "rank": 1,
        "weeks": 4
      },
      {
        "artist": "Tequilajazzz",
        "title": "Тема прошлого лета",
        "rank": 5,
        "weeks": 8
      },
      {
        "artist": "Сплин",
        "title": "Приходи",
        "rank": 6,
        "weeks": 10
      }
    ]
  },
  {
    "date": "1998-09-13",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-09-13",
    "tracks": [
      {
        "artist": "Мумий Тролль",
        "title": "В думах о девушке из города центрального подчинения КНР",
        "rank": 1,
        "weeks": 5
      },
      {
        "artist": "Tequilajazzz",
        "title": "Тема прошлого лета",
        "rank": 5,
        "weeks": 9
      },
      {
        "artist": "Сплин",
        "title": "Приходи",
        "rank": 6,
        "weeks": 11
      }
    ]
  },
  {
    "date": "1998-09-20",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-09-20",
    "tracks": [
      {
        "artist": "Мумий Тролль",
        "title": "В думах о девушке из города центрального подчинения КНР",
        "rank": 2,
        "weeks": 6
      },
      {
        "artist": "Чайф",
        "title": "В её глазах",
        "rank": 4,
        "weeks": 3
      },
      {
        "artist": "Сплин",
        "title": "Приходи",
        "rank": 6,
        "weeks": 12
      }
    ]
  },
  {
    "date": "1998-09-27",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-09-27",
    "tracks": [
      {
        "artist": "Мумий Тролль",
        "title": "В думах о девушке из города центрального подчинения КНР",
        "rank": 2,
        "weeks": 7
      },
      {
        "artist": "Чайф",
        "title": "В её глазах",
        "rank": 3,
        "weeks": 4
      },
      {
        "artist": "Сплин",
        "title": "Приходи",
        "rank": 10,
        "weeks": 13
      }
    ]
  },
  {
    "date": "1998-10-04",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-10-04",
    "tracks": [
      {
        "artist": "Чайф",
        "title": "В её глазах",
        "rank": 3,
        "weeks": 5
      },
      {
        "artist": "Мумий Тролль",
        "title": "В думах о девушке из города центрального подчинения КНР",
        "rank": 4,
        "weeks": 8
      },
      {
        "artist": "Сплин",
        "title": "Приходи",
        "rank": 12,
        "weeks": 14
      }
    ]
  },
  {
    "date": "1998-10-11",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-10-11",
    "tracks": [
      {
        "artist": "Чайф",
        "title": "В её глазах",
        "rank": 6,
        "weeks": 6
      },
      {
        "artist": "Агата Кристи",
        "title": "Ковёр-вертолёт",
        "rank": 7,
        "weeks": 3
      },
      {
        "artist": "Мумий Тролль",
        "title": "В думах о девушке из города центрального подчинения КНР",
        "rank": 14,
        "weeks": 9
      }
    ]
  },
  {
    "date": "1998-10-18",
    "url": "https://chartoteka.com/charts/hit-parad-dvuh-stolits-radio-maksimum/1998-10-18",
    "tracks": [
      {
        "artist": "Мумий Тролль",
        "title": "Инопланетный гость",
        "rank": 2,
        "weeks": 2
      },
      {
        "artist": "Агата Кристи",
        "title": "Ковёр-вертолёт",
        "rank": 5,
        "weeks": 4
      },
      {
        "artist": "Чайф",
        "title": "В её глазах",
        "rank": 6,
        "weeks": 7
      }
    ]
  }
];

const time = (date: string) => Date.parse(`${date}T12:00:00Z`);
const displayDate = (date: string) => date.split("-").reverse().join(".");
export function maximumHit1998(date: string, today: string): BirthdayHit | null {
  if (!/^1998-(09|10)-/.test(date)) return null;
  const observed = MAXIMUM_1998.filter((entry) => entry.date <= today);
  const near = observed.filter((entry) => Math.abs(time(entry.date) - time(date)) <= 6 * 86400000);
  const pool = near.length ? near : observed.filter((entry) => entry.date.slice(0, 7) === date.slice(0, 7));
  if (!pool.length) return null;
  const snapshot = [...pool].sort((a, b) => Math.abs(time(a.date) - time(date)) - Math.abs(time(b.date) - time(date)))[0];
  const index = Math.floor((time(date) - time("1998-09-01")) / (7 * 86400000)) % snapshot.tracks.length;
  const selected = snapshot.tracks[index];
  const precision = near.length ? "Неделя" : "Месяц";
  const source = {
    id: `maximum-issue-${snapshot.date}-${selected.rank}`,
    label: `«Хит-парад двух столиц»: #${selected.rank} · ${displayDate(snapshot.date)} · ${selected.weeks} недель в чарте · архив Чартотеки`,
    url: snapshot.url, kind: "радио", rank: selected.rank,
  };
  return {
    artist: selected.artist, title: selected.title, year: 1998, month: Number(date.slice(5, 7)),
    chartDate: snapshot.date, ...(precision === "Месяц" ? { evidenceMonth: date.slice(0, 7) } : {}),
    distanceDays: Math.round(Math.abs(time(snapshot.date) - time(date)) / 86400000), precision,
    period: `выпуск радиохит-парада · ${displayDate(snapshot.date)}`,
    proximity: precision === "Неделя"
      ? `Датированный выпуск находится в пределах 6 дней от рождения. Это близость к выпуску, а не доказательство пика в каждый день недели.`
      : `Есть выпуск хит-парада в выбранном месяце; ближайшая проверенная дата ${displayDate(snapshot.date)} слишком далека для недельной привязки.`,
    method: `Выбор из трёх русскоязычных записей с указанным в архиве сроком от двух недель в чарте. Для этой записи указано ${selected.weeks} недель; счётчик сам по себе не доказывает непрерывные 14 дней. Источник подтверждает один радиохит-парад, массовая популярность вне аудитории «Максимума» ещё не установлена. Архив Чартотеки не заменяет сверку оригинального эфира.`,
    sourceId: source.id, sourceLabel: source.label, sourceUrl: source.url,
    archiveUrl: source.url, archiveLabel: "Открыть полный выпуск хит-парада",
    mode: "недельный чарт", chartRank: selected.rank, chartMetric: "МАКСИМУМ · ВЫПУСК ХИТ-ПАРАДА",
    signalTypes: 0, sources: [source],
    alternatives: snapshot.tracks.filter((_, i) => i !== index).map(({ artist, title }) => ({ artist, title })),
    color: ["#ff633d", "#ffdc2e", "#a6ec3c"][index],
  };
}
