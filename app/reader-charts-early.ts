import type { BirthdayHit } from "./hits";
import { isEligibleRussianLanguageTrack } from "./evidence-policy";

type RankedTrack = { artist: string; title: string; rank: number };
type ReaderChart = { month: string; published: string; tracks: readonly RankedTrack[] };
const transcription = "https://ridero.ru/books/khit-parady_v_sssr_1/freeText/";
// Song polls only. Omit ambiguous multi-recording credits, the title typo Взлети,
// and the shortened Возьми title. Expand explicit initials only for Boyarsky/Zarubina.
export const EARLY_READER_CHARTS: readonly ReaderChart[] = [
  {
    "month": "1977-09",
    "published": "1977-10-15",
    "tracks": [
      {
        "artist": "София Ротару",
        "title": "Родина моя",
        "rank": 1
      },
      {
        "artist": "Игорь Иванов",
        "title": "Из вагантов",
        "rank": 2
      },
      {
        "artist": "Лев Лещенко",
        "title": "Соловьиная роща",
        "rank": 3
      }
    ]
  },
  {
    "month": "1977-11",
    "published": "1977-12-17",
    "tracks": [
      {
        "artist": "Самоцветы",
        "title": "Все, что в жизни есть у меня",
        "rank": 1
      },
      {
        "artist": "София Ротару",
        "title": "Родина моя",
        "rank": 2
      },
      {
        "artist": "Игорь Иванов",
        "title": "Из вагантов",
        "rank": 4
      }
    ]
  },
  {
    "month": "1977-12",
    "published": "1978-01-21",
    "tracks": [
      {
        "artist": "Самоцветы",
        "title": "Все, что в жизни есть у меня",
        "rank": 1
      },
      {
        "artist": "София Ротару",
        "title": "Родина моя",
        "rank": 3
      },
      {
        "artist": "Игорь Иванов",
        "title": "Из вагантов",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-01",
    "published": "1978-02-11",
    "tracks": [
      {
        "artist": "Алла Пугачёва",
        "title": "Не отрекаются, любя",
        "rank": 1
      },
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 2
      },
      {
        "artist": "Самоцветы",
        "title": "Все, что есть у меня",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-02",
    "published": "1978-03-25",
    "tracks": [
      {
        "artist": "Тынис Мяги",
        "title": "Остановите музыку",
        "rank": 1
      },
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 2
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Не отрекаются, любя",
        "rank": 3
      }
    ]
  },
  {
    "month": "1978-03",
    "published": "1978-04-15",
    "tracks": [
      {
        "artist": "Тынис Мяги",
        "title": "Остановите музыку",
        "rank": 1
      },
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 2
      },
      {
        "artist": "Песняры",
        "title": "Беловежская пуща",
        "rank": 3
      }
    ]
  },
  {
    "month": "1978-05",
    "published": "1978-06-24",
    "tracks": [
      {
        "artist": "Синяя птица",
        "title": "Горько",
        "rank": 2
      },
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 3
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Все могут короли",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-06",
    "published": "1978-07-08",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Сонет Шекспира",
        "rank": 2
      },
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 3
      },
      {
        "artist": "Песняры",
        "title": "Беловежская пуща",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-07",
    "published": "1978-08-12",
    "tracks": [
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 1
      },
      {
        "artist": "Алла Пугачева",
        "title": "Сонет Шекспира",
        "rank": 3
      },
      {
        "artist": "Песняры",
        "title": "Беловежская пуща",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-08",
    "published": "1978-09-16",
    "tracks": [
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 1
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 3
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка про меня",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-09",
    "published": "1978-10-07",
    "tracks": [
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 1
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка про меня",
        "rank": 2
      },
      {
        "artist": "Веселые ребята",
        "title": "Напиши мне письмо",
        "rank": 3
      }
    ]
  },
  {
    "month": "1978-10",
    "published": "1978-11-18",
    "tracks": [
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка про меня",
        "rank": 1
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 2
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка первоклассника",
        "rank": 4
      }
    ]
  },
  {
    "month": "1978-12",
    "published": "1979-01-01",
    "tracks": [
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка про меня",
        "rank": 1
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка первоклассника",
        "rank": 2
      },
      {
        "artist": "Яак Йоала",
        "title": "Фотографии любимых",
        "rank": 3
      }
    ]
  },
  {
    "month": "1979-01",
    "published": "1979-02-23",
    "tracks": [
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 1
      },
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 2
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка первоклассника",
        "rank": 3
      }
    ]
  },
  {
    "month": "1979-02",
    "published": "1979-03-23",
    "tracks": [
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 1
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Ты возьми меня с собой",
        "rank": 2
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 3
      }
    ]
  },
  {
    "month": "1979-03",
    "published": "1979-04-20",
    "tracks": [
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 1
      },
      {
        "artist": "Яак Йоала",
        "title": "Подберу музыку",
        "rank": 2
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Ты возьми меня с собой",
        "rank": 3
      }
    ]
  },
  {
    "month": "1979-04",
    "published": "1979-05-04",
    "tracks": [
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 1
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Звёздное лето",
        "rank": 2
      },
      {
        "artist": "Яак Йоала",
        "title": "Подберу музыку",
        "rank": 3
      }
    ]
  },
  {
    "month": "1979-05",
    "published": "1979-06-29",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Звездное лето",
        "rank": 1
      },
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 3
      },
      {
        "artist": "Игорь Иванов",
        "title": "Мы с тобой танцуем",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-06",
    "published": "1979-07-27",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Звёздное лето",
        "rank": 2
      },
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 3
      },
      {
        "artist": "Яак Йоала",
        "title": "Подберу музыку",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-07",
    "published": "1979-08-31",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Звёздное лето",
        "rank": 2
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 3
      },
      {
        "artist": "Михаил Боярский и Ольга Зарубина",
        "title": "Так не должно быть",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-08",
    "published": "1979-09-14",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Звёздное лето",
        "rank": 2
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 3
      },
      {
        "artist": "Яак Йоала",
        "title": "Подберу музыку",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-09",
    "published": "1979-10-19",
    "tracks": [
      {
        "artist": "Яак Йоала",
        "title": "Здравствуй",
        "rank": 2
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 3
      },
      {
        "artist": "Яак Йоала",
        "title": "Подберу музыку",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-10",
    "published": "1979-11-16",
    "tracks": [
      {
        "artist": "Яак Йоала",
        "title": "Здравствуй",
        "rank": 2
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 3
      },
      {
        "artist": "Алла Пугачева",
        "title": "Летние дожди",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-11",
    "published": "1979-12-07",
    "tracks": [
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 2
      },
      {
        "artist": "Яак Йоала",
        "title": "Здравствуй",
        "rank": 3
      },
      {
        "artist": "Алла Пугачева",
        "title": "Звёздное лето",
        "rank": 4
      }
    ]
  },
  {
    "month": "1979-12",
    "published": "1980-01-01",
    "tracks": [
      {
        "artist": "Группа Стаса Намина",
        "title": "Летний вечер",
        "rank": 2
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 3
      },
      {
        "artist": "Татьяна Анцифирова и Аракс",
        "title": "Узнай меня",
        "rank": 4
      }
    ]
  },
  {
    "month": "1982-01",
    "published": "1982-02-26",
    "tracks": [
      {
        "artist": "Юрий Антонов",
        "title": "Жизнь",
        "rank": 1
      },
      {
        "artist": "Яак Йоала",
        "title": "Я тебя рисую",
        "rank": 3
      },
      {
        "artist": "Алла Пугачева",
        "title": "Старинные часы",
        "rank": 4
      }
    ]
  },
  {
    "month": "1982-02",
    "published": "1982-03-29",
    "tracks": [
      {
        "artist": "Алла Пугачева",
        "title": "Старинные часы",
        "rank": 2
      },
      {
        "artist": "Юрий Антонов",
        "title": "Жизнь",
        "rank": 3
      },
      {
        "artist": "Михаил Боярский",
        "title": "Все пройдёт",
        "rank": 4
      }
    ]
  }
];

const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const displayDate = (date: string) => date.split("-").reverse().join(".");

export function readerChartHitEarly(date: string, today: string): BirthdayHit | null {
  const chart = EARLY_READER_CHARTS.find((entry) => entry.month === date.slice(0, 7) && entry.published <= today);
  if (!chart) return null;
  const candidates = chart.tracks.filter((entry) => isEligibleRussianLanguageTrack(entry.title, entry.artist));
  if (candidates.length < 3) return null;
  // Accuracy over variety: the month's #1 among eligible songs.
  const index = candidates.reduce((top, track, i, all) => (track.rank < all[top].rank ? i : top), 0);
  const selected = candidates[index];
  const month = Number(chart.month.slice(5, 7));
  const year = Number(chart.month.slice(0, 4));
  const period = `${months[month - 1]} ${year}`;
  const source = {
    id: `zd-reader-${chart.month}-${selected.rank}`,
    label: `«Звуковая дорожка»: #${selected.rank} за ${period} · выпуск ${displayDate(chart.published)} · расшифровка С. Сычёва`,
    url: transcription, kind: "месячный читательский чарт (расшифровка)", rank: selected.rank,
  };
  return {
    artist: selected.artist, title: selected.title, year, month,
    chartDate: chart.published, evidenceMonth: chart.month, evidenceYear: year,
    distanceDays: Math.round(Math.abs(Date.parse(chart.published) - Date.parse(date)) / 86400000),
    precision: "Месяц", period: `читательский хит-парад · ${period}`,
    proximity: `Хит-парад относится к месяцу рождения, хотя опубликован ${displayDate(chart.published)}. Недельная точность не установлена.`,
    method: "Выбор из трёх песен помесячного читательского хит-парада МК. Месяц опроса и дата публикации разделены по расшифровке Сергея Сычёва. Это одна аудитория и вторичный источник: оригинальный газетный скан ещё не сверен. Непрерывные две недели популярности этим списком не подтверждаются.",
    sourceId: source.id, sourceLabel: source.label, sourceUrl: source.url,
    archiveUrl: source.url, archiveLabel: "Открыть расшифровку хит-парада",
    mode: "месячный чарт", chartRank: selected.rank, chartMetric: "ЗД / МК · ЧИТАТЕЛЬСКИЙ ОПРОС ЗА МЕСЯЦ",
    signalTypes: 1, sources: [source],
    alternatives: candidates.filter((_, i) => i !== index).map(({ artist, title }) => ({ artist, title })),
    color: ["#ff633d", "#ffdc2e", "#a6ec3c"][index],
  };
}
