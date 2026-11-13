// Exact dated song polls transcribed in Sergey Sychev's historical archive of the MK Zvukovaya Dorozhka chart.
export type HistoricalChart = {
  chartDate: string; dateLabel: string; exactDate: boolean;
  chartMonth?: string; periodLabel?: string;
  candidates: readonly { artist: string; title: string; rank: number }[];
};

export const HISTORICAL_1977_1979: readonly HistoricalChart[] =
[
  {
    "chartDate": "1977-10-15",
    "dateLabel": "15.10.1977",
    "exactDate": true,
    "candidates": [
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
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Не отрекаются, любя",
        "rank": 4
      },
      {
        "artist": "Самоцветы",
        "title": "Все, что в жизни есть у меня",
        "rank": 5
      },
      {
        "artist": "Песняры",
        "title": "Белоруссия",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1977-12-17",
    "dateLabel": "17.12.1977",
    "exactDate": true,
    "candidates": [
      {
        "artist": "ВИА Самоцветы",
        "title": "Все, что есть у меня",
        "rank": 1
      },
      {
        "artist": "София Ротару",
        "title": "Родина моя",
        "rank": 2
      },
      {
        "artist": "Н. Бумбиере и В. Лапченок, М. Вилцане и О. Гринберг",
        "title": "Последний лист",
        "rank": 3
      },
      {
        "artist": "Игорь Иванов",
        "title": "Из вагантов",
        "rank": 4
      },
      {
        "artist": "Песняры",
        "title": "Белоруссия",
        "rank": 5
      },
      {
        "artist": "Алла Пугачева",
        "title": "Не отрекаются, любя",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-01-21",
    "dateLabel": "21.01.1978",
    "exactDate": true,
    "candidates": [
      {
        "artist": "ВИА Самоцветы",
        "title": "Все, что есть у меня",
        "rank": 1
      },
      {
        "artist": "Н. Бумбиере и В. Лапченок, М. Вилцане и О. Гринберг",
        "title": "Последний лист",
        "rank": 2
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
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Не отрекаются, любя",
        "rank": 5
      },
      {
        "artist": "Синяя птица",
        "title": "Ты мне не снишься",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-02-11",
    "dateLabel": "11.02.1978",
    "exactDate": true,
    "candidates": [
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
        "artist": "Н. Бумбиере и В. Лапченок, М. Вилцане и О. Гринберг",
        "title": "Последний лист",
        "rank": 3
      },
      {
        "artist": "ВИА Самоцветы",
        "title": "Все, что есть у меня",
        "rank": 4
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Все могут короли",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-02-25",
    "dateLabel": "25.02.1978",
    "exactDate": true,
    "candidates": [
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
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 4
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Все могут короли",
        "rank": 5
      },
      {
        "artist": "ВИА Самоцветы",
        "title": "Все, что есть у меня",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-04-15",
    "dateLabel": "15.04.1978",
    "exactDate": true,
    "candidates": [
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
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 4
      },
      {
        "artist": "Синяя птица",
        "title": "Горько",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Не отрекаются, любя",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-06-24",
    "dateLabel": "24.06.1978",
    "exactDate": true,
    "chartMonth": "1978-05",
    "periodLabel": "песни мая 1978",
    "candidates": [
      {
        "artist": "Тынис Мяги, Валерий Павлов",
        "title": "Остановите музыку",
        "rank": 1
      },
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
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 5
      },
      {
        "artist": "Песняры",
        "title": "Беловежская пуща",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-07-08",
    "dateLabel": "08.07.1978",
    "exactDate": true,
    "candidates": [
      {
        "artist": "Тынис Мяги",
        "title": "Остановите музыку",
        "rank": 1
      },
      {
        "artist": "Алла Пугачёва",
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
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Все могут короли",
        "rank": 5
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-08-12",
    "dateLabel": "12.08.1978",
    "exactDate": true,
    "candidates": [
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 1
      },
      {
        "artist": "Тынис Мяги",
        "title": "Остановите музыку",
        "rank": 2
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 3
      },
      {
        "artist": "Песняры",
        "title": "Беловежская пуща",
        "rank": 4
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка про меня",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-09-16",
    "dateLabel": "16.09.1978",
    "exactDate": true,
    "candidates": [
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 1
      },
      {
        "artist": "Тынис Мяги",
        "title": "Остановите музыку",
        "rank": 2
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
      },
      {
        "artist": "Александр Градский",
        "title": "Как молоды мы были",
        "rank": 5
      },
      {
        "artist": "Песняры",
        "title": "Беловежская пуща",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-10-07",
    "dateLabel": "07.10.1978",
    "exactDate": true,
    "candidates": [
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
        "artist": "Весёлые ребята",
        "title": "Напиши мне письмо",
        "rank": 3
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 4
      },
      {
        "artist": "Яак Йоала",
        "title": "Фотографии любимых",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка первоклассника",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-11-18",
    "dateLabel": "18.11.1978",
    "exactDate": true,
    "candidates": [
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
        "artist": "Алла Пугачева",
        "title": "Возьми меня с собой",
        "rank": 3
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Песенка первоклассника",
        "rank": 4
      },
      {
        "artist": "Яак Йоала",
        "title": "Фотографии любимых",
        "rank": 5
      },
      {
        "artist": "Песняры",
        "title": "Крик птицы",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1978-12-15",
    "dateLabel": "декабрь 1978",
    "exactDate": false,
    "candidates": [
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
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Ты возьми меня с собой",
        "rank": 4
      },
      {
        "artist": "Ренат Ибрагимов и ВИА «Модо»",
        "title": "Наш город",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1979-04-20",
    "dateLabel": "20.04.1979",
    "exactDate": true,
    "candidates": [
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
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 4
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Приезжай",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Этот мир",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1979-05-04",
    "dateLabel": "04.05.1979",
    "exactDate": true,
    "candidates": [
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
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Этот мир",
        "rank": 4
      },
      {
        "artist": "Игорь Иванов",
        "title": "Мы с тобой танцуем",
        "rank": 5
      },
      {
        "artist": "Алла Пугачёва",
        "title": "Сонет Шекспира",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1979-06-29",
    "dateLabel": "29.06.1979",
    "exactDate": true,
    "candidates": [
      {
        "artist": "Алла Пугачева",
        "title": "Звездное лето",
        "rank": 1
      },
      {
        "artist": "Алла Пугачева",
        "title": "Поднимись над суетой",
        "rank": 2
      },
      {
        "artist": "М. Боярский и О. Зарубина",
        "title": "Так не должно быть",
        "rank": 3
      },
      {
        "artist": "Игорь Иванов",
        "title": "Мы с тобой танцуем",
        "rank": 4
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 5
      },
      {
        "artist": "Алла Пугачева",
        "title": "Этот мир",
        "rank": 6
      }
    ]
  },
  {
    "chartDate": "1979-07-27",
    "dateLabel": "27.07.1979",
    "exactDate": true,
    "candidates": [
      {
        "artist": "Алла Пугачева",
        "title": "Поднимись над суетой",
        "rank": 1
      },
      {
        "artist": "Алла Пугачева",
        "title": "Звёздное лето",
        "rank": 2
      },
      {
        "artist": "М. Боярский и О. Зарубина",
        "title": "Так не должно быть",
        "rank": 3
      },
      {
        "artist": "Яак Йола",
        "title": "Подберу музыку",
        "rank": 4
      },
      {
        "artist": "Ксения Георгиади",
        "title": "Ищу тебя",
        "rank": 5
      },
      {
        "artist": "Игорь Иванов",
        "title": "Мы с тобой танцуем",
        "rank": 6
      }
    ]
  }
];
