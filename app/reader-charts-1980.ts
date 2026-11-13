import type { BirthdayHit } from "./hits";
import { isEligibleRussianLanguageTrack } from "./evidence-policy";

type RankedTrack = { artist: string; title: string; rank: number };
type ReaderChart = { month: string; published: string; tracks: readonly RankedTrack[] };
const transcription = "https://ridero.ru/books/khit-parady_v_sssr_1/freeText/";
// Only song polls. Ambiguous version credits and January title typo are omitted.
// Group of Andrey Makarevich is the original credit for Машина времени.
const BASE_CHARTS_1980: readonly ReaderChart[] = [
  {
    "month": "1980-01",
    "published": "1980-02-29",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Группа Стаса Намина",
        "title": "Летний вечер",
        "rank": 2
      },
      {
        "artist": "Алла Пугачева",
        "title": "Улетай туча",
        "rank": 4
      }
    ]
  },
  {
    "month": "1980-02",
    "published": "1980-03-28",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Машина времени",
        "title": "День Рождения",
        "rank": 2
      },
      {
        "artist": "Группа Стаса Намина",
        "title": "Летний вечер",
        "rank": 4
      }
    ]
  },
  {
    "month": "1980-03",
    "published": "1980-04-25",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Машина времени",
        "title": "День Рождения",
        "rank": 2
      },
      {
        "artist": "Группа Стаса Намина",
        "title": "Летний вечер",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-04",
    "published": "1980-05-23",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 2
      },
      {
        "artist": "Машина времени",
        "title": "Будет день",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-05",
    "published": "1980-06-20",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 2
      },
      {
        "artist": "Машина времени",
        "title": "Будет день",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-06",
    "published": "1980-07-18",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Машина времени",
        "title": "Кого ты хотел удивить",
        "rank": 2
      },
      {
        "artist": "Юрий Антонов и Аракс",
        "title": "Я вспоминаю",
        "rank": 4
      }
    ]
  },
  {
    "month": "1980-07",
    "published": "1980-08-22",
    "tracks": [
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 1
      },
      {
        "artist": "Алла Пугачева",
        "title": "Московский романс",
        "rank": 2
      },
      {
        "artist": "Машина времени",
        "title": "Кого ты хотел удивить",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-08",
    "published": "1980-09-26",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Московский романс",
        "rank": 1
      },
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 2
      },
      {
        "artist": "Машина времени",
        "title": "Поворот",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-09",
    "published": "1980-10-24",
    "tracks": [
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 1
      },
      {
        "artist": "Алла Пугачева",
        "title": "Московский романс",
        "rank": 2
      },
      {
        "artist": "Алла Пугачева",
        "title": "Когда я уйду",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-10",
    "published": "1980-11-21",
    "tracks": [
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 1
      },
      {
        "artist": "Машина времени",
        "title": "Синяя птица",
        "rank": 2
      },
      {
        "artist": "Алла Пугачева",
        "title": "Уходя, уходи",
        "rank": 3
      }
    ]
  },
  {
    "month": "1980-11",
    "published": "1980-12-19",
    "tracks": [
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 1
      },
      {
        "artist": "Машина времени",
        "title": "Синяя птица",
        "rank": 3
      },
      {
        "artist": "Алла Пугачева",
        "title": "Когда я уйду",
        "rank": 4
      }
    ]
  },
  {
    "month": "1980-12",
    "published": "1981-01-01",
    "tracks": [
      {
        "artist": "Валерий Леонтьев",
        "title": "Там в сентябре",
        "rank": 1
      },
      {
        "artist": "Алла Пугачева",
        "title": "Дежурный ангел",
        "rank": 2
      },
      {
        "artist": "Аракс",
        "title": "Колокол тревоги",
        "rank": 4
      }
    ]
  }
];
// BETA81: ranks 4–7 from the same transcription, so a month rotates through five songs
// instead of three. Omissions kept: the January title typo, «Гадалка» and «Не забывай»
// (broken quotes in the transcription), and duet credits that change between months.
const EXTRA_1980: Readonly<Record<string, readonly RankedTrack[]>> = {
  "1980-01": [{ artist: "Ксения Георгиади", title: "Ищу тебя", rank: 5 }, { artist: "Татьяна Анцифирова и Аракс", title: "Узнай меня", rank: 6 }],
  "1980-02": [{ artist: "Алла Пугачева", title: "Летние дожди", rank: 5 }, { artist: "Юрий Антонов и Аракс", title: "Я вспоминаю", rank: 6 }],
  "1980-03": [{ artist: "Аракс", title: "Мода", rank: 4 }, { artist: "Юрий Антонов и Аракс", title: "Я вспоминаю", rank: 5 }],
  "1980-04": [{ artist: "Машина времени", title: "День Рождения", rank: 4 }, { artist: "Аракс", title: "Мода", rank: 5 }],
  "1980-05": [{ artist: "Машина времени", title: "Кого ты хотел удивить", rank: 4 }, { artist: "Автограф", title: "Ирландия. Ольстер", rank: 5 }],
  "1980-06": [{ artist: "Валерий Леонтьев", title: "Там в сентябре", rank: 5 }, { artist: "Машина времени", title: "Будет день", rank: 6 }],
  "1980-07": [{ artist: "Валерий Леонтьев", title: "Там в сентябре", rank: 4 }, { artist: "Машина времени", title: "Пока горит свеча", rank: 5 }],
  "1980-08": [{ artist: "Машина времени", title: "Пока горит свеча", rank: 4 }, { artist: "Машина времени", title: "Моим друзьям", rank: 5 }],
  "1980-09": [{ artist: "Машина времени", title: "Поворот", rank: 5 }, { artist: "Машина времени", title: "Пока горит свеча", rank: 6 }],
  "1980-10": [{ artist: "Алла Пугачева", title: "Когда я уйду", rank: 4 }, { artist: "Алла Пугачева", title: "Московский романс", rank: 5 }],
  "1980-11": [{ artist: "Алла Пугачева", title: "Уходя, уходи", rank: 6 }, { artist: "Аракс", title: "Все как прежде", rank: 7 }],
  "1980-12": [{ artist: "Машина времени", title: "Синяя птица", rank: 5 }, { artist: "Аракс", title: "Все как прежде", rank: 6 }],
};

export const READER_CHARTS_1980: readonly ReaderChart[] = BASE_CHARTS_1980.map((chart) => ({
  ...chart, tracks: [...chart.tracks, ...(EXTRA_1980[chart.month] ?? [])],
}));


const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const displayDate = (date: string) => date.split("-").reverse().join(".");

export function readerChartHit1980(date: string, today: string): BirthdayHit | null {
  const chart = READER_CHARTS_1980.find((entry) => entry.month === date.slice(0, 7) && entry.published <= today);
  if (!chart) return null;
  const candidates = chart.tracks.filter((entry) => isEligibleRussianLanguageTrack(entry.title, entry.artist));
  if (candidates.length < 3) return null;
  const index = Math.floor((Number(date.slice(8, 10)) - 1) / 7) % candidates.length;
  const selected = candidates[index];
  const month = Number(chart.month.slice(5, 7));
  const period = `${months[month - 1]} 1980`;
  const source = {
    id: `zd-reader-${chart.month}-${selected.rank}`,
    label: `«Звуковая дорожка»: #${selected.rank} за ${period} · выпуск ${displayDate(chart.published)} · расшифровка С. Сычёва`,
    url: transcription, kind: "месячный читательский чарт (расшифровка)", rank: selected.rank,
  };
  return {
    artist: selected.artist, title: selected.title, year: 1980, month,
    chartDate: chart.published, evidenceMonth: chart.month, evidenceYear: 1980,
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
