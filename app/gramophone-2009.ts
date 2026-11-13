import type { BirthdayHit } from "./hits";

type Snapshot = { date: string; url: string; tracks: readonly { artist: string; title: string; rank: number; weeks: number }[] };
export const GRAMOPHONE_2009: readonly Snapshot[] = [
  {
    "date": "2009-07-05",
    "url": "https://chartoteka.com/charts/zolotoy-gramofon/2009-07-05",
    "tracks": [
      {
        "artist": "Винтаж",
        "title": "Ева",
        "rank": 1,
        "weeks": 7
      },
      {
        "artist": "DJ Piligrim",
        "title": "Ты меня забудь",
        "rank": 2,
        "weeks": 14
      },
      {
        "artist": "Григорий Лепс",
        "title": "Я тебя не люблю",
        "rank": 3,
        "weeks": 10
      }
    ]
  },
  {
    "date": "2009-07-12",
    "url": "https://chartoteka.com/charts/zolotoy-gramofon/2009-07-12",
    "tracks": [
      {
        "artist": "Григорий Лепс",
        "title": "Я тебя не люблю",
        "rank": 1,
        "weeks": 11
      },
      {
        "artist": "Винтаж",
        "title": "Ева",
        "rank": 2,
        "weeks": 8
      },
      {
        "artist": "Максим",
        "title": "Не Отдам",
        "rank": 3,
        "weeks": 11
      }
    ]
  },
  {
    "date": "2009-07-19",
    "url": "https://chartoteka.com/charts/zolotoy-gramofon/2009-07-19",
    "tracks": [
      {
        "artist": "Максим",
        "title": "Не Отдам",
        "rank": 1,
        "weeks": 12
      },
      {
        "artist": "А-Студио",
        "title": "Так же как все",
        "rank": 2,
        "weeks": 8
      },
      {
        "artist": "Григорий Лепс",
        "title": "Я тебя не люблю",
        "rank": 3,
        "weeks": 12
      }
    ]
  },
  {
    "date": "2009-07-26",
    "url": "https://chartoteka.com/charts/zolotoy-gramofon/2009-07-26",
    "tracks": [
      {
        "artist": "Максим",
        "title": "Не Отдам",
        "rank": 1,
        "weeks": 13
      },
      {
        "artist": "Григорий Лепс",
        "title": "Я тебя не люблю",
        "rank": 2,
        "weeks": 13
      },
      {
        "artist": "А-Студио",
        "title": "Так же как все",
        "rank": 3,
        "weeks": 9
      }
    ]
  },
  {
    "date": "2009-08-02",
    "url": "https://chartoteka.com/charts/zolotoy-gramofon/2009-08-02",
    "tracks": [
      {
        "artist": "Григорий Лепс",
        "title": "Я тебя не люблю",
        "rank": 1,
        "weeks": 14
      },
      {
        "artist": "Максим",
        "title": "Не Отдам",
        "rank": 2,
        "weeks": 14
      },
      {
        "artist": "Винтаж",
        "title": "Ева",
        "rank": 3,
        "weeks": 11
      }
    ]
  },
  {
    "date": "2009-08-09",
    "url": "https://chartoteka.com/charts/zolotoy-gramofon/2009-08-09",
    "tracks": [
      {
        "artist": "Максим",
        "title": "Не Отдам",
        "rank": 1,
        "weeks": 15
      },
      {
        "artist": "Григорий Лепс",
        "title": "Я тебя не люблю",
        "rank": 2,
        "weeks": 15
      },
      {
        "artist": "Стас Михайлов",
        "title": "Между небом и землёй",
        "rank": 3,
        "weeks": 13
      }
    ]
  }
];

const time = (date: string) => Date.parse(`${date}T12:00:00Z`);
const displayDate = (date: string) => date.split("-").reverse().join(".");
export function gramophoneHit2009(date: string, today: string): BirthdayHit | null {
  if (date < "2009-07-02" || date > "2009-08-04") return null;
  const observed = GRAMOPHONE_2009.filter((entry) => entry.date <= today);
  const near = observed.filter((entry) => Math.abs(time(entry.date) - time(date)) <= 6 * 86400000);
  const pool = near.length ? near : observed.filter((entry) => entry.date.slice(0, 7) === date.slice(0, 7));
  if (!pool.length) return null;
  const snapshot = [...pool].sort((a, b) => Math.abs(time(a.date) - time(date)) - Math.abs(time(b.date) - time(date)))[0];
  // Accuracy over variety: the highest-placed eligible entry of the issue.
  const index = snapshot.tracks.reduce((top, track, i, all) => (track.rank < all[top].rank ? i : top), 0);
  const selected = snapshot.tracks[index];
  const precision = near.length ? "Неделя" : "Месяц";
  const source = {
    id: `gramophone-issue-${snapshot.date}-${selected.rank}`,
    label: `«Золотой Граммофон»: #${selected.rank} · ${displayDate(snapshot.date)} · ${selected.weeks} недель в чарте · архив Чартотеки`,
    url: snapshot.url, kind: "радио", rank: selected.rank,
  };
  return {
    artist: selected.artist, title: selected.title, year: 2009, month: Number(date.slice(5, 7)),
    chartDate: snapshot.date, ...(precision === "Месяц" ? { evidenceMonth: date.slice(0, 7) } : {}),
    distanceDays: Math.round(Math.abs(time(snapshot.date) - time(date)) / 86400000), precision,
    period: `выпуск радиохит-парада · ${displayDate(snapshot.date)}`,
    proximity: precision === "Неделя"
      ? `Датированный выпуск находится в пределах 6 дней от рождения. Это близость к выпуску, а не доказательство пика в каждый день недели.`
      : `Есть выпуск хит-парада в выбранном месяце; ближайшая проверенная дата ${displayDate(snapshot.date)} слишком далека для недельной привязки.`,
    method: `Выбор из трёх русскоязычных записей с указанным в архиве сроком от двух недель в чарте. Для этой записи указано ${selected.weeks} недель; счётчик сам по себе не доказывает непрерывные 14 дней. Источник подтверждает один радиохит-парад, массовая популярность вне аудитории «Русского радио» ещё не установлена. Архив Чартотеки не заменяет сверку оригинального эфира.`,
    sourceId: source.id, sourceLabel: source.label, sourceUrl: source.url,
    archiveUrl: source.url, archiveLabel: "Открыть полный выпуск хит-парада",
    mode: "недельный чарт", chartRank: selected.rank, chartMetric: "ЗОЛОТОЙ ГРАММОФОН · ВЫПУСК ХИТ-ПАРАДА",
    signalTypes: 0, sources: [source],
    alternatives: snapshot.tracks.filter((_, i) => i !== index).map(({ artist, title }) => ({ artist, title })),
    color: ["#ff633d", "#ffdc2e", "#a6ec3c"][index],
  };
}
