// Generated 2017 multi-source pilot: Shazam supplies the dated listener signal;
// radio pages, annual Yandex/VK audience summaries and The Flow's editorial top provide independent checks.
export type PilotSource = {
  id: string; label: string; url: string; kind: string; rank?: number;
};
export type PilotCandidate = {
  artist: string; title: string; score: number; shazamRank: number | null; signalTypes: number; sources: PilotSource[];
};
export type PilotWeek = { chartDate: string; candidates: PilotCandidate[] };

export const PILOT_2017: readonly PilotWeek[] = 
[
  {
    "chartDate": "2017-01-09",
    "candidates": [
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 146,
        "shazamRank": 11,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-01-09-tumany",
            "label": "Shazam Россия: #11 · 2017-01-09",
            "url": "https://hotcharts.ru/shazam/archive/09-01-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-01-13-tumany",
            "label": "Европа Плюс: #12 · 2017-01-13",
            "url": "https://hotcharts.ru/europaplus/archive/13-01-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-01-13-tumany",
            "label": "Русское радио: #1 · 2017-01-13",
            "url": "https://hotcharts.ru/rusradio/archive/13-01-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 114,
        "shazamRank": 6,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-01-09-lirika",
            "label": "Shazam Россия: #6 · 2017-01-09",
            "url": "https://hotcharts.ru/shazam/archive/09-01-2017.htm",
            "kind": "Shazam",
            "rank": 6
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 72,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-01-09-leyla",
            "label": "Shazam Россия: #22 · 2017-01-09",
            "url": "https://hotcharts.ru/shazam/archive/09-01-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-01-16",
    "candidates": [
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 155,
        "shazamRank": 9,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-01-16-tumany",
            "label": "Shazam Россия: #9 · 2017-01-16",
            "url": "https://hotcharts.ru/shazam/archive/16-01-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-01-15-tumany",
            "label": "Love Radio: #2 · 2017-01-15",
            "url": "https://hotcharts.ru/loveradio/archive/15-01-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-01-13-tumany",
            "label": "Европа Плюс: #12 · 2017-01-13",
            "url": "https://hotcharts.ru/europaplus/archive/13-01-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "europaplus-2017-01-20-tumany",
            "label": "Европа Плюс: #19 · 2017-01-20",
            "url": "https://hotcharts.ru/europaplus/archive/20-01-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "rusradio-2017-01-13-tumany",
            "label": "Русское радио: #1 · 2017-01-13",
            "url": "https://hotcharts.ru/rusradio/archive/13-01-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-01-20-tumany",
            "label": "Русское радио: #1 · 2017-01-20",
            "url": "https://hotcharts.ru/rusradio/archive/20-01-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 128,
        "shazamRank": 5,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-01-16-lirika",
            "label": "Shazam Россия: #5 · 2017-01-16",
            "url": "https://hotcharts.ru/shazam/archive/16-01-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "loveradio-2017-01-15-lirika",
            "label": "Love Radio: #13 · 2017-01-15",
            "url": "https://hotcharts.ru/loveradio/archive/15-01-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 79,
        "shazamRank": 22,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-01-16-leyla",
            "label": "Shazam Россия: #22 · 2017-01-16",
            "url": "https://hotcharts.ru/shazam/archive/16-01-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "loveradio-2017-01-15-leyla",
            "label": "Love Radio: #17 · 2017-01-15",
            "url": "https://hotcharts.ru/loveradio/archive/15-01-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 59,
        "shazamRank": 25,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-01-16-okeanami",
            "label": "Shazam Россия: #25 · 2017-01-16",
            "url": "https://hotcharts.ru/shazam/archive/16-01-2017.htm",
            "kind": "Shazam",
            "rank": 25
          },
          {
            "id": "loveradio-2017-01-15-okeanami",
            "label": "Love Radio: #10 · 2017-01-15",
            "url": "https://hotcharts.ru/loveradio/archive/15-01-2017.htm",
            "kind": "радио",
            "rank": 10
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-01-23",
    "candidates": [
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 155,
        "shazamRank": 9,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-01-23-tumany",
            "label": "Shazam Россия: #9 · 2017-01-23",
            "url": "https://hotcharts.ru/shazam/archive/23-01-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-01-22-tumany",
            "label": "Love Radio: #2 · 2017-01-22",
            "url": "https://hotcharts.ru/loveradio/archive/22-01-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-01-20-tumany",
            "label": "Европа Плюс: #19 · 2017-01-20",
            "url": "https://hotcharts.ru/europaplus/archive/20-01-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "europaplus-2017-01-27-tumany",
            "label": "Европа Плюс: #22 · 2017-01-27",
            "url": "https://hotcharts.ru/europaplus/archive/27-01-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "rusradio-2017-01-20-tumany",
            "label": "Русское радио: #1 · 2017-01-20",
            "url": "https://hotcharts.ru/rusradio/archive/20-01-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-01-27-tumany",
            "label": "Русское радио: #2 · 2017-01-27",
            "url": "https://hotcharts.ru/rusradio/archive/27-01-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 131,
        "shazamRank": 5,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-01-23-lirika",
            "label": "Shazam Россия: #5 · 2017-01-23",
            "url": "https://hotcharts.ru/shazam/archive/23-01-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "loveradio-2017-01-22-lirika",
            "label": "Love Radio: #10 · 2017-01-22",
            "url": "https://hotcharts.ru/loveradio/archive/22-01-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 79,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-01-23-okeanami",
            "label": "Shazam Россия: #20 · 2017-01-23",
            "url": "https://hotcharts.ru/shazam/archive/23-01-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-01-22-okeanami",
            "label": "Love Radio: #5 · 2017-01-22",
            "url": "https://hotcharts.ru/loveradio/archive/22-01-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 66,
        "shazamRank": 26,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-01-23-leyla",
            "label": "Shazam Россия: #26 · 2017-01-23",
            "url": "https://hotcharts.ru/shazam/archive/23-01-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-01-22-leyla",
            "label": "Love Radio: #19 · 2017-01-22",
            "url": "https://hotcharts.ru/loveradio/archive/22-01-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-01-31",
    "candidates": [
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 143,
        "shazamRank": 13,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-01-31-tumany",
            "label": "Shazam Россия: #13 · 2017-01-31",
            "url": "https://hotcharts.ru/shazam/archive/31-01-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "loveradio-2017-01-29-tumany",
            "label": "Love Radio: #3 · 2017-01-29",
            "url": "https://hotcharts.ru/loveradio/archive/29-01-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-02-03-tumany",
            "label": "Европа Плюс: #16 · 2017-02-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-02-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-01-27-tumany",
            "label": "Европа Плюс: #22 · 2017-01-27",
            "url": "https://hotcharts.ru/europaplus/archive/27-01-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "rusradio-2017-02-03-tumany",
            "label": "Русское радио: #1 · 2017-02-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-02-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-01-27-tumany",
            "label": "Русское радио: #2 · 2017-01-27",
            "url": "https://hotcharts.ru/rusradio/archive/27-01-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 136,
        "shazamRank": 5,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-01-31-lirika",
            "label": "Shazam Россия: #5 · 2017-01-31",
            "url": "https://hotcharts.ru/shazam/archive/31-01-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "loveradio-2017-01-29-lirika",
            "label": "Love Radio: #5 · 2017-01-29",
            "url": "https://hotcharts.ru/loveradio/archive/29-01-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 86,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-01-31-okeanami",
            "label": "Shazam Россия: #22 · 2017-01-31",
            "url": "https://hotcharts.ru/shazam/archive/31-01-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "loveradio-2017-01-29-okeanami",
            "label": "Love Radio: #4 · 2017-01-29",
            "url": "https://hotcharts.ru/loveradio/archive/29-01-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "record-2017-02-04-okeanami",
            "label": "Радио Record: #20 · 2017-02-04",
            "url": "https://hotcharts.ru/record/archive/04-02-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "record-2017-01-28-okeanami",
            "label": "Радио Record: #30 · 2017-01-28",
            "url": "https://hotcharts.ru/record/archive/28-01-2017.htm",
            "kind": "радио",
            "rank": 30
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 60,
        "shazamRank": 26,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-01-31-vite",
            "label": "Shazam Россия: #26 · 2017-01-31",
            "url": "https://hotcharts.ru/shazam/archive/31-01-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-02-07",
    "candidates": [
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 119,
        "shazamRank": 21,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-07-tumany",
            "label": "Shazam Россия: #21 · 2017-02-07",
            "url": "https://hotcharts.ru/shazam/archive/07-02-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "loveradio-2017-02-05-tumany",
            "label": "Love Radio: #4 · 2017-02-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-02-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-02-03-tumany",
            "label": "Европа Плюс: #16 · 2017-02-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-02-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-02-10-tumany",
            "label": "Европа Плюс: #18 · 2017-02-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-02-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-02-03-tumany",
            "label": "Русское радио: #1 · 2017-02-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-02-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-02-10-tumany",
            "label": "Русское радио: #2 · 2017-02-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-02-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 86,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-07-okeanami",
            "label": "Shazam Россия: #22 · 2017-02-07",
            "url": "https://hotcharts.ru/shazam/archive/07-02-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "loveradio-2017-02-05-okeanami",
            "label": "Love Radio: #3 · 2017-02-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-02-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "record-2017-02-04-okeanami",
            "label": "Радио Record: #20 · 2017-02-04",
            "url": "https://hotcharts.ru/record/archive/04-02-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "record-2017-02-11-okeanami",
            "label": "Радио Record: #28 · 2017-02-11",
            "url": "https://hotcharts.ru/record/archive/11-02-2017.htm",
            "kind": "радио",
            "rank": 28
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 78,
        "shazamRank": 27,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-07-soprano",
            "label": "Shazam Россия: #27 · 2017-02-07",
            "url": "https://hotcharts.ru/shazam/archive/07-02-2017.htm",
            "kind": "Shazam",
            "rank": 27
          },
          {
            "id": "loveradio-2017-02-05-soprano",
            "label": "Love Radio: #15 · 2017-02-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-02-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 69,
        "shazamRank": 23,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-07-vite",
            "label": "Shazam Россия: #23 · 2017-02-07",
            "url": "https://hotcharts.ru/shazam/archive/07-02-2017.htm",
            "kind": "Shazam",
            "rank": 23
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-02-14",
    "candidates": [
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 133,
        "shazamRank": 5,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-02-14-lirika",
            "label": "Shazam Россия: #5 · 2017-02-14",
            "url": "https://hotcharts.ru/shazam/archive/14-02-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "loveradio-2017-02-12-lirika",
            "label": "Love Radio: #8 · 2017-02-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-02-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 107,
        "shazamRank": 25,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-14-tumany",
            "label": "Shazam Россия: #25 · 2017-02-14",
            "url": "https://hotcharts.ru/shazam/archive/14-02-2017.htm",
            "kind": "Shazam",
            "rank": 25
          },
          {
            "id": "loveradio-2017-02-12-tumany",
            "label": "Love Radio: #5 · 2017-02-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-02-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-02-17-tumany",
            "label": "Европа Плюс: #17 · 2017-02-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "europaplus-2017-02-10-tumany",
            "label": "Европа Плюс: #18 · 2017-02-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-02-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-02-10-tumany",
            "label": "Русское радио: #2 · 2017-02-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-02-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-02-17-tumany",
            "label": "Русское радио: #3 · 2017-02-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 96,
        "shazamRank": 14,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-14-vite",
            "label": "Shazam Россия: #14 · 2017-02-14",
            "url": "https://hotcharts.ru/shazam/archive/14-02-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 94,
        "shazamRank": 23,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-14-soprano",
            "label": "Shazam Россия: #23 · 2017-02-14",
            "url": "https://hotcharts.ru/shazam/archive/14-02-2017.htm",
            "kind": "Shazam",
            "rank": 23
          },
          {
            "id": "loveradio-2017-02-12-soprano",
            "label": "Love Radio: #11 · 2017-02-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-02-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 92,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-14-romans",
            "label": "Shazam Россия: #20 · 2017-02-14",
            "url": "https://hotcharts.ru/shazam/archive/14-02-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "europaplus-2017-02-17-romans",
            "label": "Европа Плюс: #23 · 2017-02-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 23
          },
          {
            "id": "europaplus-2017-02-10-romans",
            "label": "Европа Плюс: #29 · 2017-02-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-02-2017.htm",
            "kind": "радио",
            "rank": 29
          },
          {
            "id": "rusradio-2017-02-17-romans",
            "label": "Русское радио: #6 · 2017-02-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-02-10-romans",
            "label": "Русское радио: #7 · 2017-02-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-02-2017.htm",
            "kind": "радио",
            "rank": 7
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 63,
        "shazamRank": 28,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-14-okeanami",
            "label": "Shazam Россия: #28 · 2017-02-14",
            "url": "https://hotcharts.ru/shazam/archive/14-02-2017.htm",
            "kind": "Shazam",
            "rank": 28
          },
          {
            "id": "loveradio-2017-02-12-okeanami",
            "label": "Love Radio: #3 · 2017-02-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-02-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "record-2017-02-11-okeanami",
            "label": "Радио Record: #28 · 2017-02-11",
            "url": "https://hotcharts.ru/record/archive/11-02-2017.htm",
            "kind": "радио",
            "rank": 28
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-02-21",
    "candidates": [
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 129,
        "shazamRank": 14,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-21-soprano",
            "label": "Shazam Россия: #14 · 2017-02-21",
            "url": "https://hotcharts.ru/shazam/archive/21-02-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-02-19-soprano",
            "label": "Love Radio: #3 · 2017-02-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-02-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 120,
        "shazamRank": 9,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-02-21-lirika",
            "label": "Shazam Россия: #9 · 2017-02-21",
            "url": "https://hotcharts.ru/shazam/archive/21-02-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-02-19-lirika",
            "label": "Love Radio: #9 · 2017-02-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-02-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 101,
        "shazamRank": 27,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-21-tumany",
            "label": "Shazam Россия: #27 · 2017-02-21",
            "url": "https://hotcharts.ru/shazam/archive/21-02-2017.htm",
            "kind": "Shazam",
            "rank": 27
          },
          {
            "id": "loveradio-2017-02-19-tumany",
            "label": "Love Radio: #4 · 2017-02-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-02-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-02-17-tumany",
            "label": "Европа Плюс: #17 · 2017-02-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "europaplus-2017-02-24-tumany",
            "label": "Европа Плюс: #17 · 2017-02-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "rusradio-2017-02-17-tumany",
            "label": "Русское радио: #3 · 2017-02-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-02-24-tumany",
            "label": "Русское радио: #4 · 2017-02-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 99,
        "shazamRank": 13,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-21-vite",
            "label": "Shazam Россия: #13 · 2017-02-21",
            "url": "https://hotcharts.ru/shazam/archive/21-02-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 95,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-21-romans",
            "label": "Shazam Россия: #19 · 2017-02-21",
            "url": "https://hotcharts.ru/shazam/archive/21-02-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "europaplus-2017-02-24-romans",
            "label": "Европа Плюс: #21 · 2017-02-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 21
          },
          {
            "id": "europaplus-2017-02-17-romans",
            "label": "Европа Плюс: #23 · 2017-02-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 23
          },
          {
            "id": "rusradio-2017-02-24-romans",
            "label": "Русское радио: #5 · 2017-02-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "rusradio-2017-02-17-romans",
            "label": "Русское радио: #6 · 2017-02-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-02-2017.htm",
            "kind": "радио",
            "rank": 6
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 60,
        "shazamRank": 26,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-21-okeanami",
            "label": "Shazam Россия: #26 · 2017-02-21",
            "url": "https://hotcharts.ru/shazam/archive/21-02-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-02-19-okeanami",
            "label": "Love Radio: #6 · 2017-02-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-02-2017.htm",
            "kind": "радио",
            "rank": 6
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-02-28",
    "candidates": [
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 109,
        "shazamRank": 21,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-28-soprano",
            "label": "Shazam Россия: #21 · 2017-02-28",
            "url": "https://hotcharts.ru/shazam/archive/28-02-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "loveradio-2017-02-26-soprano",
            "label": "Love Radio: #2 · 2017-02-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-02-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 105,
        "shazamRank": 13,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-02-28-lirika",
            "label": "Shazam Россия: #13 · 2017-02-28",
            "url": "https://hotcharts.ru/shazam/archive/28-02-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "loveradio-2017-02-26-lirika",
            "label": "Love Radio: #12 · 2017-02-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-02-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 102,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-02-28-vite",
            "label": "Shazam Россия: #14 · 2017-02-28",
            "url": "https://hotcharts.ru/shazam/archive/28-02-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-04-vite",
            "label": "Радио Record: #24 · 2017-03-04",
            "url": "https://hotcharts.ru/record/archive/04-03-2017.htm",
            "kind": "радио",
            "rank": 24
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 95,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-28-romans",
            "label": "Shazam Россия: #19 · 2017-02-28",
            "url": "https://hotcharts.ru/shazam/archive/28-02-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "europaplus-2017-03-03-romans",
            "label": "Европа Плюс: #14 · 2017-03-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "europaplus-2017-02-24-romans",
            "label": "Европа Плюс: #21 · 2017-02-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 21
          },
          {
            "id": "rusradio-2017-03-03-romans",
            "label": "Русское радио: #4 · 2017-03-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-02-24-romans",
            "label": "Русское радио: #5 · 2017-02-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 92,
        "shazamRank": 30,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-02-28-tumany",
            "label": "Shazam Россия: #30 · 2017-02-28",
            "url": "https://hotcharts.ru/shazam/archive/28-02-2017.htm",
            "kind": "Shazam",
            "rank": 30
          },
          {
            "id": "loveradio-2017-02-26-tumany",
            "label": "Love Radio: #6 · 2017-02-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-02-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-03-03-tumany",
            "label": "Европа Плюс: #16 · 2017-03-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-02-24-tumany",
            "label": "Европа Плюс: #17 · 2017-02-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "rusradio-2017-02-24-tumany",
            "label": "Русское радио: #4 · 2017-02-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-02-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-03-03-tumany",
            "label": "Русское радио: #5 · 2017-03-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 67,
        "shazamRank": 24,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-02-28-okeanami",
            "label": "Shazam Россия: #24 · 2017-02-28",
            "url": "https://hotcharts.ru/shazam/archive/28-02-2017.htm",
            "kind": "Shazam",
            "rank": 24
          },
          {
            "id": "loveradio-2017-02-26-okeanami",
            "label": "Love Radio: #5 · 2017-02-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-02-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-03-07",
    "candidates": [
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 124,
        "shazamRank": 12,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-07-vite",
            "label": "Shazam Россия: #12 · 2017-03-07",
            "url": "https://hotcharts.ru/shazam/archive/07-03-2017.htm",
            "kind": "Shazam",
            "rank": 12
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-04-vite",
            "label": "Радио Record: #24 · 2017-03-04",
            "url": "https://hotcharts.ru/record/archive/04-03-2017.htm",
            "kind": "радио",
            "rank": 24
          },
          {
            "id": "record-2017-03-11-vite",
            "label": "Радио Record: #8 · 2017-03-11",
            "url": "https://hotcharts.ru/record/archive/11-03-2017.htm",
            "kind": "радио",
            "rank": 8
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 100,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-07-lirika",
            "label": "Shazam Россия: #14 · 2017-03-07",
            "url": "https://hotcharts.ru/shazam/archive/07-03-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-03-05-lirika",
            "label": "Love Radio: #14 · 2017-03-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-03-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 99,
        "shazamRank": 26,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-03-07-soprano",
            "label": "Shazam Россия: #26 · 2017-03-07",
            "url": "https://hotcharts.ru/shazam/archive/07-03-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-03-05-soprano",
            "label": "Love Radio: #3 · 2017-03-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-03-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-03-10-soprano",
            "label": "Русское радио: #19 · 2017-03-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 89,
        "shazamRank": 21,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-07-romans",
            "label": "Shazam Россия: #21 · 2017-03-07",
            "url": "https://hotcharts.ru/shazam/archive/07-03-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "europaplus-2017-03-03-romans",
            "label": "Европа Плюс: #14 · 2017-03-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "europaplus-2017-03-10-romans",
            "label": "Европа Плюс: #8 · 2017-03-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "rusradio-2017-03-10-romans",
            "label": "Русское радио: #3 · 2017-03-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-03-03-romans",
            "label": "Русское радио: #4 · 2017-03-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-03-05-tumany",
            "label": "Love Radio: #7 · 2017-03-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-03-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-03-03-tumany",
            "label": "Европа Плюс: #16 · 2017-03-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-03-10-tumany",
            "label": "Европа Плюс: #17 · 2017-03-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "rusradio-2017-03-03-tumany",
            "label": "Русское радио: #5 · 2017-03-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-03-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "rusradio-2017-03-10-tumany",
            "label": "Русское радио: #6 · 2017-03-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 59,
        "shazamRank": 27,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-07-okeanami",
            "label": "Shazam Россия: #27 · 2017-03-07",
            "url": "https://hotcharts.ru/shazam/archive/07-03-2017.htm",
            "kind": "Shazam",
            "rank": 27
          },
          {
            "id": "loveradio-2017-03-05-okeanami",
            "label": "Love Radio: #4 · 2017-03-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-03-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-03-14",
    "candidates": [
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 117,
        "shazamRank": 16,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-14-vite",
            "label": "Shazam Россия: #16 · 2017-03-14",
            "url": "https://hotcharts.ru/shazam/archive/14-03-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-18-vite",
            "label": "Радио Record: #3 · 2017-03-18",
            "url": "https://hotcharts.ru/record/archive/18-03-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "record-2017-03-11-vite",
            "label": "Радио Record: #8 · 2017-03-11",
            "url": "https://hotcharts.ru/record/archive/11-03-2017.htm",
            "kind": "радио",
            "rank": 8
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 98,
        "shazamRank": 28,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-03-14-soprano",
            "label": "Shazam Россия: #28 · 2017-03-14",
            "url": "https://hotcharts.ru/shazam/archive/14-03-2017.htm",
            "kind": "Shazam",
            "rank": 28
          },
          {
            "id": "loveradio-2017-03-12-soprano",
            "label": "Love Radio: #3 · 2017-03-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-03-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-03-17-soprano",
            "label": "Русское радио: #16 · 2017-03-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-03-10-soprano",
            "label": "Русское радио: #19 · 2017-03-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 86,
        "shazamRank": 18,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-14-lirika",
            "label": "Shazam Россия: #18 · 2017-03-14",
            "url": "https://hotcharts.ru/shazam/archive/14-03-2017.htm",
            "kind": "Shazam",
            "rank": 18
          },
          {
            "id": "loveradio-2017-03-12-lirika",
            "label": "Love Radio: #16 · 2017-03-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-03-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 86,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-14-romans",
            "label": "Shazam Россия: #22 · 2017-03-14",
            "url": "https://hotcharts.ru/shazam/archive/14-03-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "europaplus-2017-03-10-romans",
            "label": "Европа Плюс: #8 · 2017-03-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "europaplus-2017-03-17-romans",
            "label": "Европа Плюс: #9 · 2017-03-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-03-17-romans",
            "label": "Русское радио: #1 · 2017-03-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-03-10-romans",
            "label": "Русское радио: #3 · 2017-03-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 62,
        "shazamRank": 26,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-14-okeanami",
            "label": "Shazam Россия: #26 · 2017-03-14",
            "url": "https://hotcharts.ru/shazam/archive/14-03-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-03-12-okeanami",
            "label": "Love Radio: #4 · 2017-03-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-03-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-03-12-tumany",
            "label": "Love Radio: #10 · 2017-03-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-03-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-03-10-tumany",
            "label": "Европа Плюс: #17 · 2017-03-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "europaplus-2017-03-17-tumany",
            "label": "Европа Плюс: #20 · 2017-03-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "rusradio-2017-03-10-tumany",
            "label": "Русское радио: #6 · 2017-03-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-03-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-03-17-tumany",
            "label": "Русское радио: #7 · 2017-03-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-03-21",
    "candidates": [
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 174,
        "shazamRank": 2,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-03-21-taet_led",
            "label": "Shazam Россия: #2 · 2017-03-21",
            "url": "https://hotcharts.ru/shazam/archive/21-03-2017.htm",
            "kind": "Shazam",
            "rank": 2
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-25-taet_led",
            "label": "Радио Record: #10 · 2017-03-25",
            "url": "https://hotcharts.ru/record/archive/25-03-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 127,
        "shazamRank": 13,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-21-vite",
            "label": "Shazam Россия: #13 · 2017-03-21",
            "url": "https://hotcharts.ru/shazam/archive/21-03-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-25-vite",
            "label": "Радио Record: #2 · 2017-03-25",
            "url": "https://hotcharts.ru/record/archive/25-03-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "record-2017-03-18-vite",
            "label": "Радио Record: #3 · 2017-03-18",
            "url": "https://hotcharts.ru/record/archive/18-03-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 98,
        "shazamRank": 28,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-03-21-soprano",
            "label": "Shazam Россия: #28 · 2017-03-21",
            "url": "https://hotcharts.ru/shazam/archive/21-03-2017.htm",
            "kind": "Shazam",
            "rank": 28
          },
          {
            "id": "loveradio-2017-03-19-soprano",
            "label": "Love Radio: #1 · 2017-03-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-03-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-03-24-soprano",
            "label": "Русское радио: #13 · 2017-03-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-03-17-soprano",
            "label": "Русское радио: #16 · 2017-03-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 93,
        "shazamRank": 17,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-21-po_volnam",
            "label": "Shazam Россия: #17 · 2017-03-21",
            "url": "https://hotcharts.ru/shazam/archive/21-03-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "europaplus-2017-03-24-po_volnam",
            "label": "Европа Плюс: #30 · 2017-03-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 30
          },
          {
            "id": "rusradio-2017-03-24-po_volnam",
            "label": "Русское радио: #20 · 2017-03-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 92,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-21-romans",
            "label": "Shazam Россия: #20 · 2017-03-21",
            "url": "https://hotcharts.ru/shazam/archive/21-03-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "europaplus-2017-03-24-romans",
            "label": "Европа Плюс: #7 · 2017-03-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "europaplus-2017-03-17-romans",
            "label": "Европа Плюс: #9 · 2017-03-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-03-17-romans",
            "label": "Русское радио: #1 · 2017-03-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-03-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-03-24-romans",
            "label": "Русское радио: #1 · 2017-03-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 1
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 84,
        "shazamRank": 18,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-21-lirika",
            "label": "Shazam Россия: #18 · 2017-03-21",
            "url": "https://hotcharts.ru/shazam/archive/21-03-2017.htm",
            "kind": "Shazam",
            "rank": 18
          },
          {
            "id": "loveradio-2017-03-19-lirika",
            "label": "Love Radio: #19 · 2017-03-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-03-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-03-28",
    "candidates": [
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 184,
        "shazamRank": 2,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-03-28-taet_led",
            "label": "Shazam Россия: #2 · 2017-03-28",
            "url": "https://hotcharts.ru/shazam/archive/28-03-2017.htm",
            "kind": "Shazam",
            "rank": 2
          },
          {
            "id": "loveradio-2017-03-26-taet_led",
            "label": "Love Radio: #6 · 2017-03-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-03-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-25-taet_led",
            "label": "Радио Record: #10 · 2017-03-25",
            "url": "https://hotcharts.ru/record/archive/25-03-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 112,
        "shazamRank": 16,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-28-vite",
            "label": "Shazam Россия: #16 · 2017-03-28",
            "url": "https://hotcharts.ru/shazam/archive/28-03-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-25-vite",
            "label": "Радио Record: #2 · 2017-03-25",
            "url": "https://hotcharts.ru/record/archive/25-03-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 105,
        "shazamRank": 17,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-03-28-po_volnam",
            "label": "Shazam Россия: #17 · 2017-03-28",
            "url": "https://hotcharts.ru/shazam/archive/28-03-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "loveradio-2017-03-26-po_volnam",
            "label": "Love Radio: #18 · 2017-03-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-03-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "europaplus-2017-03-24-po_volnam",
            "label": "Европа Плюс: #30 · 2017-03-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 30
          },
          {
            "id": "rusradio-2017-03-31-po_volnam",
            "label": "Русское радио: #18 · 2017-03-31",
            "url": "https://hotcharts.ru/rusradio/archive/31-03-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-03-24-po_volnam",
            "label": "Русское радио: #20 · 2017-03-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 95,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-28-romans",
            "label": "Shazam Россия: #19 · 2017-03-28",
            "url": "https://hotcharts.ru/shazam/archive/28-03-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "europaplus-2017-03-24-romans",
            "label": "Европа Плюс: #7 · 2017-03-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "europaplus-2017-03-31-romans",
            "label": "Европа Плюс: #9 · 2017-03-31",
            "url": "https://hotcharts.ru/europaplus/archive/31-03-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-03-24-romans",
            "label": "Русское радио: #1 · 2017-03-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-03-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-03-31-romans",
            "label": "Русское радио: #2 · 2017-03-31",
            "url": "https://hotcharts.ru/rusradio/archive/31-03-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Jah Khalib",
        "title": "Если чё, я Баха",
        "score": 93,
        "shazamRank": 11,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-03-28-baha",
            "label": "Shazam Россия: #11 · 2017-03-28",
            "url": "https://hotcharts.ru/shazam/archive/28-03-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "record-2017-03-25-baha",
            "label": "Радио Record: #27 · 2017-03-25",
            "url": "https://hotcharts.ru/record/archive/25-03-2017.htm",
            "kind": "радио",
            "rank": 27
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 87,
        "shazamRank": 26,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-03-28-ne_lubish",
            "label": "Shazam Россия: #26 · 2017-03-28",
            "url": "https://hotcharts.ru/shazam/archive/28-03-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-03-26-ne_lubish",
            "label": "Love Radio: #15 · 2017-03-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-03-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-03-25-ne_lubish",
            "label": "Радио Record: #19 · 2017-03-25",
            "url": "https://hotcharts.ru/record/archive/25-03-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-04-04",
    "candidates": [
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 104,
        "shazamRank": 18,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-04-04-vite",
            "label": "Shazam Россия: #18 · 2017-04-04",
            "url": "https://hotcharts.ru/shazam/archive/04-04-2017.htm",
            "kind": "Shazam",
            "rank": 18
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-08-vite",
            "label": "Радио Record: #4 · 2017-04-08",
            "url": "https://hotcharts.ru/record/archive/08-04-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 96,
        "shazamRank": 21,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-04-04-po_volnam",
            "label": "Shazam Россия: #21 · 2017-04-04",
            "url": "https://hotcharts.ru/shazam/archive/04-04-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "loveradio-2017-04-02-po_volnam",
            "label": "Love Radio: #15 · 2017-04-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-04-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "europaplus-2017-04-07-po_volnam",
            "label": "Европа Плюс: #25 · 2017-04-07",
            "url": "https://hotcharts.ru/europaplus/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 25
          },
          {
            "id": "rusradio-2017-04-07-po_volnam",
            "label": "Русское радио: #16 · 2017-04-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-03-31-po_volnam",
            "label": "Русское радио: #18 · 2017-03-31",
            "url": "https://hotcharts.ru/rusradio/archive/31-03-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 88,
        "shazamRank": 28,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-04-ne_lubish",
            "label": "Shazam Россия: #28 · 2017-04-04",
            "url": "https://hotcharts.ru/shazam/archive/04-04-2017.htm",
            "kind": "Shazam",
            "rank": 28
          },
          {
            "id": "loveradio-2017-04-02-ne_lubish",
            "label": "Love Radio: #8 · 2017-04-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-04-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-08-ne_lubish",
            "label": "Радио Record: #16 · 2017-04-08",
            "url": "https://hotcharts.ru/record/archive/08-04-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 86,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-04-04-romans",
            "label": "Shazam Россия: #22 · 2017-04-04",
            "url": "https://hotcharts.ru/shazam/archive/04-04-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "europaplus-2017-04-07-romans",
            "label": "Европа Плюс: #11 · 2017-04-07",
            "url": "https://hotcharts.ru/europaplus/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-03-31-romans",
            "label": "Европа Плюс: #9 · 2017-03-31",
            "url": "https://hotcharts.ru/europaplus/archive/31-03-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-04-07-romans",
            "label": "Русское радио: #1 · 2017-04-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-03-31-romans",
            "label": "Русское радио: #2 · 2017-03-31",
            "url": "https://hotcharts.ru/rusradio/archive/31-03-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 75,
        "shazamRank": null,
        "signalTypes": 4,
        "sources": [
          {
            "id": "loveradio-2017-04-02-taet_led",
            "label": "Love Radio: #1 · 2017-04-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-08-taet_led",
            "label": "Радио Record: #2 · 2017-04-08",
            "url": "https://hotcharts.ru/record/archive/08-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 69,
        "shazamRank": 24,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-04-04-okeanami",
            "label": "Shazam Россия: #24 · 2017-04-04",
            "url": "https://hotcharts.ru/shazam/archive/04-04-2017.htm",
            "kind": "Shazam",
            "rank": 24
          },
          {
            "id": "loveradio-2017-04-02-okeanami",
            "label": "Love Radio: #3 · 2017-04-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-04-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-04-11",
    "candidates": [
      {
        "artist": "ESTRADARADA",
        "title": "Вите надо выйти",
        "score": 107,
        "shazamRank": 19,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-04-11-vite",
            "label": "Shazam Россия: #19 · 2017-04-11",
            "url": "https://hotcharts.ru/shazam/archive/11-04-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "vk-2017-vite",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-08-vite",
            "label": "Радио Record: #4 · 2017-04-08",
            "url": "https://hotcharts.ru/record/archive/08-04-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "record-2017-04-15-vite",
            "label": "Радио Record: #5 · 2017-04-15",
            "url": "https://hotcharts.ru/record/archive/15-04-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 104,
        "shazamRank": 20,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-04-11-po_volnam",
            "label": "Shazam Россия: #20 · 2017-04-11",
            "url": "https://hotcharts.ru/shazam/archive/11-04-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-04-09-po_volnam",
            "label": "Love Radio: #8 · 2017-04-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-04-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "europaplus-2017-04-14-po_volnam",
            "label": "Европа Плюс: #22 · 2017-04-14",
            "url": "https://hotcharts.ru/europaplus/archive/14-04-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "europaplus-2017-04-07-po_volnam",
            "label": "Европа Плюс: #25 · 2017-04-07",
            "url": "https://hotcharts.ru/europaplus/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 25
          },
          {
            "id": "rusradio-2017-04-14-po_volnam",
            "label": "Русское радио: #14 · 2017-04-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-04-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "rusradio-2017-04-07-po_volnam",
            "label": "Русское радио: #16 · 2017-04-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 95,
        "shazamRank": 27,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-11-ne_lubish",
            "label": "Shazam Россия: #27 · 2017-04-11",
            "url": "https://hotcharts.ru/shazam/archive/11-04-2017.htm",
            "kind": "Shazam",
            "rank": 27
          },
          {
            "id": "loveradio-2017-04-09-ne_lubish",
            "label": "Love Radio: #4 · 2017-04-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-04-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-08-ne_lubish",
            "label": "Радио Record: #16 · 2017-04-08",
            "url": "https://hotcharts.ru/record/archive/08-04-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 78,
        "shazamRank": null,
        "signalTypes": 4,
        "sources": [
          {
            "id": "loveradio-2017-04-09-taet_led",
            "label": "Love Radio: #1 · 2017-04-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-08-taet_led",
            "label": "Радио Record: #2 · 2017-04-08",
            "url": "https://hotcharts.ru/record/archive/08-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "record-2017-04-15-taet_led",
            "label": "Радио Record: #2 · 2017-04-15",
            "url": "https://hotcharts.ru/record/archive/15-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 70,
        "shazamRank": 23,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-04-11-okeanami",
            "label": "Shazam Россия: #23 · 2017-04-11",
            "url": "https://hotcharts.ru/shazam/archive/11-04-2017.htm",
            "kind": "Shazam",
            "rank": 23
          },
          {
            "id": "loveradio-2017-04-09-okeanami",
            "label": "Love Radio: #5 · 2017-04-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-04-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      },
      {
        "artist": "Пицца",
        "title": "Романс",
        "score": 68,
        "shazamRank": 28,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-04-11-romans",
            "label": "Shazam Россия: #28 · 2017-04-11",
            "url": "https://hotcharts.ru/shazam/archive/11-04-2017.htm",
            "kind": "Shazam",
            "rank": 28
          },
          {
            "id": "europaplus-2017-04-07-romans",
            "label": "Европа Плюс: #11 · 2017-04-07",
            "url": "https://hotcharts.ru/europaplus/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-04-14-romans",
            "label": "Европа Плюс: #13 · 2017-04-14",
            "url": "https://hotcharts.ru/europaplus/archive/14-04-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-04-07-romans",
            "label": "Русское радио: #1 · 2017-04-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-04-14-romans",
            "label": "Русское радио: #3 · 2017-04-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-04-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-04-25",
    "candidates": [
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 165,
        "shazamRank": 11,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-04-26-taet_led",
            "label": "Shazam Россия: #11 · 2017-04-26",
            "url": "https://hotcharts.ru/shazam/archive/26-04-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "loveradio-2017-04-23-taet_led",
            "label": "Love Radio: #1 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-22-taet_led",
            "label": "Радио Record: #2 · 2017-04-22",
            "url": "https://hotcharts.ru/record/archive/22-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "record-2017-04-29-taet_led",
            "label": "Радио Record: #3 · 2017-04-29",
            "url": "https://hotcharts.ru/record/archive/29-04-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-04-28-taet_led",
            "label": "Русское радио: #13 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-04-21-taet_led",
            "label": "Русское радио: #17 · 2017-04-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-04-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 136,
        "shazamRank": 12,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-25-ne_lubish",
            "label": "Shazam Россия: #12 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 12
          },
          {
            "id": "loveradio-2017-04-23-ne_lubish",
            "label": "Love Radio: #2 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 128,
        "shazamRank": 16,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-25-sluchaynaya",
            "label": "Shazam Россия: #16 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "loveradio-2017-04-23-sluchaynaya",
            "label": "Love Radio: #4 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-04-28-sluchaynaya",
            "label": "Русское радио: #20 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 112,
        "shazamRank": 9,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-04-25-okeanami",
            "label": "Shazam Россия: #9 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-04-23-okeanami",
            "label": "Love Radio: #11 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "rusradio-2017-04-28-okeanami",
            "label": "Русское радио: #17 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 17
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 107,
        "shazamRank": 19,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-04-26-po_volnam",
            "label": "Shazam Россия: #19 · 2017-04-26",
            "url": "https://hotcharts.ru/shazam/archive/26-04-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-04-23-po_volnam",
            "label": "Love Radio: #6 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "europaplus-2017-04-21-po_volnam",
            "label": "Европа Плюс: #24 · 2017-04-21",
            "url": "https://hotcharts.ru/europaplus/archive/21-04-2017.htm",
            "kind": "радио",
            "rank": 24
          },
          {
            "id": "rusradio-2017-04-21-po_volnam",
            "label": "Русское радио: #11 · 2017-04-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-04-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "rusradio-2017-04-28-po_volnam",
            "label": "Русское радио: #7 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 98,
        "shazamRank": 24,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-25-tumany",
            "label": "Shazam Россия: #24 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 24
          },
          {
            "id": "loveradio-2017-04-23-tumany",
            "label": "Love Radio: #18 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-04-21-tumany",
            "label": "Русское радио: #16 · 2017-04-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-04-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-04-28-tumany",
            "label": "Русское радио: #19 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-04-26",
    "candidates": [
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 165,
        "shazamRank": 11,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-04-26-taet_led",
            "label": "Shazam Россия: #11 · 2017-04-26",
            "url": "https://hotcharts.ru/shazam/archive/26-04-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "loveradio-2017-04-23-taet_led",
            "label": "Love Radio: #1 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "loveradio-2017-04-30-taet_led",
            "label": "Love Radio: #1 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-22-taet_led",
            "label": "Радио Record: #2 · 2017-04-22",
            "url": "https://hotcharts.ru/record/archive/22-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "record-2017-04-29-taet_led",
            "label": "Радио Record: #3 · 2017-04-29",
            "url": "https://hotcharts.ru/record/archive/29-04-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-04-28-taet_led",
            "label": "Русское радио: #13 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 142,
        "shazamRank": 12,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-25-ne_lubish",
            "label": "Shazam Россия: #12 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 12
          },
          {
            "id": "loveradio-2017-04-23-ne_lubish",
            "label": "Love Radio: #2 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "loveradio-2017-04-30-ne_lubish",
            "label": "Love Radio: #2 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 134,
        "shazamRank": 16,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-25-sluchaynaya",
            "label": "Shazam Россия: #16 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "loveradio-2017-04-23-sluchaynaya",
            "label": "Love Radio: #4 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "loveradio-2017-04-30-sluchaynaya",
            "label": "Love Radio: #5 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-04-28-sluchaynaya",
            "label": "Русское радио: #20 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Alekseev",
        "title": "Океанами стали",
        "score": 118,
        "shazamRank": 9,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-04-25-okeanami",
            "label": "Shazam Россия: #9 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-04-23-okeanami",
            "label": "Love Radio: #11 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "loveradio-2017-04-30-okeanami",
            "label": "Love Radio: #12 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-04-28-okeanami",
            "label": "Русское радио: #17 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 17
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 105,
        "shazamRank": 19,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-04-26-po_volnam",
            "label": "Shazam Россия: #19 · 2017-04-26",
            "url": "https://hotcharts.ru/shazam/archive/26-04-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-04-23-po_volnam",
            "label": "Love Radio: #6 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "loveradio-2017-04-30-po_volnam",
            "label": "Love Radio: #7 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-04-28-po_volnam",
            "label": "Русское радио: #7 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Туманы",
        "score": 96,
        "shazamRank": 24,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-04-25-tumany",
            "label": "Shazam Россия: #24 · 2017-04-25",
            "url": "https://hotcharts.ru/shazam/archive/25-04-2017.htm",
            "kind": "Shazam",
            "rank": 24
          },
          {
            "id": "loveradio-2017-04-23-tumany",
            "label": "Love Radio: #18 · 2017-04-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-04-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "loveradio-2017-04-30-tumany",
            "label": "Love Radio: #18 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "vk-2017-tumany",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-04-28-tumany",
            "label": "Русское радио: #19 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-tumany",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-05-02",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 145,
        "shazamRank": 8,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-05-02-nedelimy",
            "label": "Shazam Россия: #8 · 2017-05-02",
            "url": "https://hotcharts.ru/shazam/archive/02-05-2017.htm",
            "kind": "Shazam",
            "rank": 8
          },
          {
            "id": "loveradio-2017-04-30-nedelimy",
            "label": "Love Radio: #20 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-05-nedelimy",
            "label": "Русское радио: #17 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "rusradio-2017-04-28-nedelimy",
            "label": "Русское радио: #18 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 138,
        "shazamRank": 20,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-05-02-taet_led",
            "label": "Shazam Россия: #20 · 2017-05-02",
            "url": "https://hotcharts.ru/shazam/archive/02-05-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-04-30-taet_led",
            "label": "Love Radio: #1 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-04-29-taet_led",
            "label": "Радио Record: #3 · 2017-04-29",
            "url": "https://hotcharts.ru/record/archive/29-04-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "record-2017-05-06-taet_led",
            "label": "Радио Record: #7 · 2017-05-06",
            "url": "https://hotcharts.ru/record/archive/06-05-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-05-05-taet_led",
            "label": "Русское радио: #10 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-04-28-taet_led",
            "label": "Русское радио: #13 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 99,
        "shazamRank": 17,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-02-dni_nochi",
            "label": "Shazam Россия: #17 · 2017-05-02",
            "url": "https://hotcharts.ru/shazam/archive/02-05-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 75,
        "shazamRank": 29,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-02-po_volnam",
            "label": "Shazam Россия: #29 · 2017-05-02",
            "url": "https://hotcharts.ru/shazam/archive/02-05-2017.htm",
            "kind": "Shazam",
            "rank": 29
          },
          {
            "id": "loveradio-2017-04-30-po_volnam",
            "label": "Love Radio: #7 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-05-05-po_volnam",
            "label": "Русское радио: #6 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-04-28-po_volnam",
            "label": "Русское радио: #7 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 72,
        "shazamRank": 22,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-02-lirika",
            "label": "Shazam Россия: #22 · 2017-05-02",
            "url": "https://hotcharts.ru/shazam/archive/02-05-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "rusradio-2017-05-05-lirika",
            "label": "Русское радио: #20 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-04-30-soprano",
            "label": "Love Radio: #15 · 2017-04-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-04-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-04-28-soprano",
            "label": "Русское радио: #1 · 2017-04-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-04-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-05-05-soprano",
            "label": "Русское радио: #1 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-05-09",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 152,
        "shazamRank": 9,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-05-09-nedelimy",
            "label": "Shazam Россия: #9 · 2017-05-09",
            "url": "https://hotcharts.ru/shazam/archive/09-05-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-05-07-nedelimy",
            "label": "Love Radio: #13 · 2017-05-07",
            "url": "https://hotcharts.ru/loveradio/archive/07-05-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-05-12-nedelimy",
            "label": "Европа Плюс: #28 · 2017-05-12",
            "url": "https://hotcharts.ru/europaplus/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 28
          },
          {
            "id": "rusradio-2017-05-12-nedelimy",
            "label": "Русское радио: #14 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "rusradio-2017-05-05-nedelimy",
            "label": "Русское радио: #17 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 126,
        "shazamRank": 8,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-09-dni_nochi",
            "label": "Shazam Россия: #8 · 2017-05-09",
            "url": "https://hotcharts.ru/shazam/archive/09-05-2017.htm",
            "kind": "Shazam",
            "rank": 8
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 111,
        "shazamRank": 29,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-05-09-taet_led",
            "label": "Shazam Россия: #29 · 2017-05-09",
            "url": "https://hotcharts.ru/shazam/archive/09-05-2017.htm",
            "kind": "Shazam",
            "rank": 29
          },
          {
            "id": "loveradio-2017-05-07-taet_led",
            "label": "Love Radio: #1 · 2017-05-07",
            "url": "https://hotcharts.ru/loveradio/archive/07-05-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-05-13-taet_led",
            "label": "Радио Record: #16 · 2017-05-13",
            "url": "https://hotcharts.ru/record/archive/13-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "record-2017-05-06-taet_led",
            "label": "Радио Record: #7 · 2017-05-06",
            "url": "https://hotcharts.ru/record/archive/06-05-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-05-05-taet_led",
            "label": "Русское радио: #10 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-05-12-taet_led",
            "label": "Русское радио: #12 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 70,
        "shazamRank": 25,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-09-lirika",
            "label": "Shazam Россия: #25 · 2017-05-09",
            "url": "https://hotcharts.ru/shazam/archive/09-05-2017.htm",
            "kind": "Shazam",
            "rank": 25
          },
          {
            "id": "rusradio-2017-05-12-lirika",
            "label": "Русское радио: #17 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "rusradio-2017-05-05-lirika",
            "label": "Русское радио: #20 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-07-ne_lubish",
            "label": "Love Radio: #3 · 2017-05-07",
            "url": "https://hotcharts.ru/loveradio/archive/07-05-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-12-ne_lubish",
            "label": "Русское радио: #16 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-05-05-ne_lubish",
            "label": "Русское радио: #18 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-07-sluchaynaya",
            "label": "Love Radio: #4 · 2017-05-07",
            "url": "https://hotcharts.ru/loveradio/archive/07-05-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-12-sluchaynaya",
            "label": "Русское радио: #13 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-05-05-sluchaynaya",
            "label": "Русское радио: #15 · 2017-05-05",
            "url": "https://hotcharts.ru/rusradio/archive/05-05-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-05-16",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 161,
        "shazamRank": 7,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-05-16-nedelimy",
            "label": "Shazam Россия: #7 · 2017-05-16",
            "url": "https://hotcharts.ru/shazam/archive/16-05-2017.htm",
            "kind": "Shazam",
            "rank": 7
          },
          {
            "id": "loveradio-2017-05-14-nedelimy",
            "label": "Love Radio: #8 · 2017-05-14",
            "url": "https://hotcharts.ru/loveradio/archive/14-05-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-05-19-nedelimy",
            "label": "Европа Плюс: #10 · 2017-05-19",
            "url": "https://hotcharts.ru/europaplus/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "europaplus-2017-05-12-nedelimy",
            "label": "Европа Плюс: #28 · 2017-05-12",
            "url": "https://hotcharts.ru/europaplus/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 28
          },
          {
            "id": "rusradio-2017-05-19-nedelimy",
            "label": "Русское радио: #12 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-05-12-nedelimy",
            "label": "Русское радио: #14 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 123,
        "shazamRank": 9,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-16-dni_nochi",
            "label": "Shazam Россия: #9 · 2017-05-16",
            "url": "https://hotcharts.ru/shazam/archive/16-05-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 78,
        "shazamRank": null,
        "signalTypes": 4,
        "sources": [
          {
            "id": "loveradio-2017-05-14-taet_led",
            "label": "Love Radio: #1 · 2017-05-14",
            "url": "https://hotcharts.ru/loveradio/archive/14-05-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-05-13-taet_led",
            "label": "Радио Record: #16 · 2017-05-13",
            "url": "https://hotcharts.ru/record/archive/13-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "record-2017-05-20-taet_led",
            "label": "Радио Record: #19 · 2017-05-20",
            "url": "https://hotcharts.ru/record/archive/20-05-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "rusradio-2017-05-12-taet_led",
            "label": "Русское радио: #12 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-05-19-taet_led",
            "label": "Русское радио: #16 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-14-ne_lubish",
            "label": "Love Radio: #4 · 2017-05-14",
            "url": "https://hotcharts.ru/loveradio/archive/14-05-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-19-ne_lubish",
            "label": "Русское радио: #15 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "rusradio-2017-05-12-ne_lubish",
            "label": "Русское радио: #16 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-14-soprano",
            "label": "Love Radio: #14 · 2017-05-14",
            "url": "https://hotcharts.ru/loveradio/archive/14-05-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-19-soprano",
            "label": "Русское радио: #1 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-05-12-soprano",
            "label": "Русское радио: #2 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 60,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-14-sluchaynaya",
            "label": "Love Radio: #6 · 2017-05-14",
            "url": "https://hotcharts.ru/loveradio/archive/14-05-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-19-sluchaynaya",
            "label": "Русское радио: #10 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-05-12-sluchaynaya",
            "label": "Русское радио: #13 · 2017-05-12",
            "url": "https://hotcharts.ru/rusradio/archive/12-05-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-05-23",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 158,
        "shazamRank": 8,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-05-23-nedelimy",
            "label": "Shazam Россия: #8 · 2017-05-23",
            "url": "https://hotcharts.ru/shazam/archive/23-05-2017.htm",
            "kind": "Shazam",
            "rank": 8
          },
          {
            "id": "loveradio-2017-05-21-nedelimy",
            "label": "Love Radio: #4 · 2017-05-21",
            "url": "https://hotcharts.ru/loveradio/archive/21-05-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-05-19-nedelimy",
            "label": "Европа Плюс: #10 · 2017-05-19",
            "url": "https://hotcharts.ru/europaplus/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "europaplus-2017-05-26-nedelimy",
            "label": "Европа Плюс: #11 · 2017-05-26",
            "url": "https://hotcharts.ru/europaplus/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "rusradio-2017-05-19-nedelimy",
            "label": "Русское радио: #12 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-05-26-nedelimy",
            "label": "Русское радио: #9 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 135,
        "shazamRank": 5,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-23-dni_nochi",
            "label": "Shazam Россия: #5 · 2017-05-23",
            "url": "https://hotcharts.ru/shazam/archive/23-05-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 78,
        "shazamRank": null,
        "signalTypes": 4,
        "sources": [
          {
            "id": "loveradio-2017-05-21-taet_led",
            "label": "Love Radio: #2 · 2017-05-21",
            "url": "https://hotcharts.ru/loveradio/archive/21-05-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-05-20-taet_led",
            "label": "Радио Record: #19 · 2017-05-20",
            "url": "https://hotcharts.ru/record/archive/20-05-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "record-2017-05-27-taet_led",
            "label": "Радио Record: #22 · 2017-05-27",
            "url": "https://hotcharts.ru/record/archive/27-05-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "rusradio-2017-05-19-taet_led",
            "label": "Русское радио: #16 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-05-26-taet_led",
            "label": "Русское радио: #18 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-21-soprano",
            "label": "Love Radio: #16 · 2017-05-21",
            "url": "https://hotcharts.ru/loveradio/archive/21-05-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-19-soprano",
            "label": "Русское радио: #1 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-05-26-soprano",
            "label": "Русское радио: #2 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 60,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-21-ne_lubish",
            "label": "Love Radio: #6 · 2017-05-21",
            "url": "https://hotcharts.ru/loveradio/archive/21-05-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-19-ne_lubish",
            "label": "Русское радио: #15 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "rusradio-2017-05-26-ne_lubish",
            "label": "Русское радио: #15 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 59,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-21-sluchaynaya",
            "label": "Love Radio: #12 · 2017-05-21",
            "url": "https://hotcharts.ru/loveradio/archive/21-05-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-19-sluchaynaya",
            "label": "Русское радио: #10 · 2017-05-19",
            "url": "https://hotcharts.ru/rusradio/archive/19-05-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-05-26-sluchaynaya",
            "label": "Русское радио: #7 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-05-30",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 155,
        "shazamRank": 9,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-05-30-nedelimy",
            "label": "Shazam Россия: #9 · 2017-05-30",
            "url": "https://hotcharts.ru/shazam/archive/30-05-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-05-28-nedelimy",
            "label": "Love Radio: #8 · 2017-05-28",
            "url": "https://hotcharts.ru/loveradio/archive/28-05-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-05-26-nedelimy",
            "label": "Европа Плюс: #11 · 2017-05-26",
            "url": "https://hotcharts.ru/europaplus/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-06-02-nedelimy",
            "label": "Европа Плюс: #6 · 2017-06-02",
            "url": "https://hotcharts.ru/europaplus/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-06-02-nedelimy",
            "label": "Русское радио: #8 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "rusradio-2017-05-26-nedelimy",
            "label": "Русское радио: #9 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 132,
        "shazamRank": 6,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-05-30-dni_nochi",
            "label": "Shazam Россия: #6 · 2017-05-30",
            "url": "https://hotcharts.ru/shazam/archive/30-05-2017.htm",
            "kind": "Shazam",
            "rank": 6
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Грибы",
        "title": "Тает лёд",
        "score": 78,
        "shazamRank": null,
        "signalTypes": 4,
        "sources": [
          {
            "id": "loveradio-2017-05-28-taet_led",
            "label": "Love Radio: #2 · 2017-05-28",
            "url": "https://hotcharts.ru/loveradio/archive/28-05-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "flow-2017-taet_led",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-taet_led",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "record-2017-05-27-taet_led",
            "label": "Радио Record: #22 · 2017-05-27",
            "url": "https://hotcharts.ru/record/archive/27-05-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "rusradio-2017-05-26-taet_led",
            "label": "Русское радио: #18 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "yandex-2017-taet_led",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-28-soprano",
            "label": "Love Radio: #17 · 2017-05-28",
            "url": "https://hotcharts.ru/loveradio/archive/28-05-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-05-26-soprano",
            "label": "Русское радио: #2 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-06-02-soprano",
            "label": "Русское радио: #3 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 61,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-28-ne_lubish",
            "label": "Love Radio: #5 · 2017-05-28",
            "url": "https://hotcharts.ru/loveradio/archive/28-05-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-02-ne_lubish",
            "label": "Русское радио: #13 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-05-26-ne_lubish",
            "label": "Русское радио: #15 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 60,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-05-28-sluchaynaya",
            "label": "Love Radio: #14 · 2017-05-28",
            "url": "https://hotcharts.ru/loveradio/archive/28-05-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-02-sluchaynaya",
            "label": "Русское радио: #6 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-05-26-sluchaynaya",
            "label": "Русское радио: #7 · 2017-05-26",
            "url": "https://hotcharts.ru/rusradio/archive/26-05-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-06-06",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 143,
        "shazamRank": 13,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-06-06-nedelimy",
            "label": "Shazam Россия: #13 · 2017-06-06",
            "url": "https://hotcharts.ru/shazam/archive/06-06-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "loveradio-2017-06-04-nedelimy",
            "label": "Love Radio: #7 · 2017-06-04",
            "url": "https://hotcharts.ru/loveradio/archive/04-06-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-06-09-nedelimy",
            "label": "Европа Плюс: #5 · 2017-06-09",
            "url": "https://hotcharts.ru/europaplus/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "europaplus-2017-06-02-nedelimy",
            "label": "Европа Плюс: #6 · 2017-06-02",
            "url": "https://hotcharts.ru/europaplus/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-06-09-nedelimy",
            "label": "Русское радио: #5 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "rusradio-2017-06-02-nedelimy",
            "label": "Русское радио: #8 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 117,
        "shazamRank": 11,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-06-06-dni_nochi",
            "label": "Shazam Россия: #11 · 2017-06-06",
            "url": "https://hotcharts.ru/shazam/archive/06-06-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 72,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-06-06-leyla",
            "label": "Shazam Россия: #22 · 2017-06-06",
            "url": "https://hotcharts.ru/shazam/archive/06-06-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-04-sluchaynaya",
            "label": "Love Radio: #14 · 2017-06-04",
            "url": "https://hotcharts.ru/loveradio/archive/04-06-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-09-sluchaynaya",
            "label": "Русское радио: #2 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-06-02-sluchaynaya",
            "label": "Русское радио: #6 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-04-soprano",
            "label": "Love Radio: #17 · 2017-06-04",
            "url": "https://hotcharts.ru/loveradio/archive/04-06-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-02-soprano",
            "label": "Русское радио: #3 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-06-09-soprano",
            "label": "Русское радио: #6 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 56,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-04-ne_lubish",
            "label": "Love Radio: #10 · 2017-06-04",
            "url": "https://hotcharts.ru/loveradio/archive/04-06-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-09-ne_lubish",
            "label": "Русское радио: #12 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-06-02-ne_lubish",
            "label": "Русское радио: #13 · 2017-06-02",
            "url": "https://hotcharts.ru/rusradio/archive/02-06-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-06-13",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 143,
        "shazamRank": 13,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-06-13-nedelimy",
            "label": "Shazam Россия: #13 · 2017-06-13",
            "url": "https://hotcharts.ru/shazam/archive/13-06-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "loveradio-2017-06-11-nedelimy",
            "label": "Love Radio: #3 · 2017-06-11",
            "url": "https://hotcharts.ru/loveradio/archive/11-06-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-06-09-nedelimy",
            "label": "Европа Плюс: #5 · 2017-06-09",
            "url": "https://hotcharts.ru/europaplus/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "europaplus-2017-06-16-nedelimy",
            "label": "Европа Плюс: #6 · 2017-06-16",
            "url": "https://hotcharts.ru/europaplus/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-06-16-nedelimy",
            "label": "Русское радио: #3 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-06-09-nedelimy",
            "label": "Русское радио: #5 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 126,
        "shazamRank": 8,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-06-13-dni_nochi",
            "label": "Shazam Россия: #8 · 2017-06-13",
            "url": "https://hotcharts.ru/shazam/archive/13-06-2017.htm",
            "kind": "Shazam",
            "rank": 8
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 87,
        "shazamRank": 17,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-06-13-leyla",
            "label": "Shazam Россия: #17 · 2017-06-13",
            "url": "https://hotcharts.ru/shazam/archive/13-06-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-11-sluchaynaya",
            "label": "Love Radio: #14 · 2017-06-11",
            "url": "https://hotcharts.ru/loveradio/archive/11-06-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-16-sluchaynaya",
            "label": "Русское радио: #1 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-06-09-sluchaynaya",
            "label": "Русское радио: #2 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 60,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-11-soprano",
            "label": "Love Radio: #13 · 2017-06-11",
            "url": "https://hotcharts.ru/loveradio/archive/11-06-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-09-soprano",
            "label": "Русское радио: #6 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-06-16-soprano",
            "label": "Русское радио: #7 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 54,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-11-ne_lubish",
            "label": "Love Radio: #16 · 2017-06-11",
            "url": "https://hotcharts.ru/loveradio/archive/11-06-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-09-ne_lubish",
            "label": "Русское радио: #12 · 2017-06-09",
            "url": "https://hotcharts.ru/rusradio/archive/09-06-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-06-16-ne_lubish",
            "label": "Русское радио: #13 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-06-20",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 131,
        "shazamRank": 17,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-06-20-nedelimy",
            "label": "Shazam Россия: #17 · 2017-06-20",
            "url": "https://hotcharts.ru/shazam/archive/20-06-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "loveradio-2017-06-18-nedelimy",
            "label": "Love Radio: #2 · 2017-06-18",
            "url": "https://hotcharts.ru/loveradio/archive/18-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-06-16-nedelimy",
            "label": "Европа Плюс: #6 · 2017-06-16",
            "url": "https://hotcharts.ru/europaplus/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "europaplus-2017-06-23-nedelimy",
            "label": "Европа Плюс: #9 · 2017-06-23",
            "url": "https://hotcharts.ru/europaplus/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-06-23-nedelimy",
            "label": "Русское радио: #2 · 2017-06-23",
            "url": "https://hotcharts.ru/rusradio/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-06-16-nedelimy",
            "label": "Русское радио: #3 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 114,
        "shazamRank": 12,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-06-20-dni_nochi",
            "label": "Shazam Россия: #12 · 2017-06-20",
            "url": "https://hotcharts.ru/shazam/archive/20-06-2017.htm",
            "kind": "Shazam",
            "rank": 12
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 84,
        "shazamRank": 18,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-06-20-leyla",
            "label": "Shazam Россия: #18 · 2017-06-20",
            "url": "https://hotcharts.ru/shazam/archive/20-06-2017.htm",
            "kind": "Shazam",
            "rank": 18
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "SEREBRO",
        "title": "Между нами любовь",
        "score": 63,
        "shazamRank": 25,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-06-20-mezhdu",
            "label": "Shazam Россия: #25 · 2017-06-20",
            "url": "https://hotcharts.ru/shazam/archive/20-06-2017.htm",
            "kind": "Shazam",
            "rank": 25
          },
          {
            "id": "loveradio-2017-06-18-mezhdu",
            "label": "Love Radio: #20 · 2017-06-18",
            "url": "https://hotcharts.ru/loveradio/archive/18-06-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-mezhdu",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-18-sluchaynaya",
            "label": "Love Radio: #11 · 2017-06-18",
            "url": "https://hotcharts.ru/loveradio/archive/18-06-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-16-sluchaynaya",
            "label": "Русское радио: #1 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-06-23-sluchaynaya",
            "label": "Русское радио: #1 · 2017-06-23",
            "url": "https://hotcharts.ru/rusradio/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 59,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-18-soprano",
            "label": "Love Radio: #18 · 2017-06-18",
            "url": "https://hotcharts.ru/loveradio/archive/18-06-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-16-soprano",
            "label": "Русское радио: #7 · 2017-06-16",
            "url": "https://hotcharts.ru/rusradio/archive/16-06-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-06-23-soprano",
            "label": "Русское радио: #8 · 2017-06-23",
            "url": "https://hotcharts.ru/rusradio/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-06-27",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 131,
        "shazamRank": 17,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-06-27-nedelimy",
            "label": "Shazam Россия: #17 · 2017-06-27",
            "url": "https://hotcharts.ru/shazam/archive/27-06-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "loveradio-2017-06-25-nedelimy",
            "label": "Love Radio: #2 · 2017-06-25",
            "url": "https://hotcharts.ru/loveradio/archive/25-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-06-30-nedelimy",
            "label": "Европа Плюс: #10 · 2017-06-30",
            "url": "https://hotcharts.ru/europaplus/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "europaplus-2017-06-23-nedelimy",
            "label": "Европа Плюс: #9 · 2017-06-23",
            "url": "https://hotcharts.ru/europaplus/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-06-30-nedelimy",
            "label": "Русское радио: #1 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-06-23-nedelimy",
            "label": "Русское радио: #2 · 2017-06-23",
            "url": "https://hotcharts.ru/rusradio/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 108,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-06-27-dni_nochi",
            "label": "Shazam Россия: #14 · 2017-06-27",
            "url": "https://hotcharts.ru/shazam/archive/27-06-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Jah Khalib feat. Маквин",
        "title": "Лейла",
        "score": 78,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-06-27-leyla",
            "label": "Shazam Россия: #20 · 2017-06-27",
            "url": "https://hotcharts.ru/shazam/archive/27-06-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "vk-2017-leyla",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-25-sluchaynaya",
            "label": "Love Radio: #9 · 2017-06-25",
            "url": "https://hotcharts.ru/loveradio/archive/25-06-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-23-sluchaynaya",
            "label": "Русское радио: #1 · 2017-06-23",
            "url": "https://hotcharts.ru/rusradio/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-06-30-sluchaynaya",
            "label": "Русское радио: #2 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 58,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-06-25-soprano",
            "label": "Love Radio: #12 · 2017-06-25",
            "url": "https://hotcharts.ru/loveradio/archive/25-06-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-30-soprano",
            "label": "Русское радио: #10 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-06-23-soprano",
            "label": "Русское радио: #8 · 2017-06-23",
            "url": "https://hotcharts.ru/rusradio/archive/23-06-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "SEREBRO",
        "title": "Между нами любовь",
        "score": 57,
        "shazamRank": 27,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-06-27-mezhdu",
            "label": "Shazam Россия: #27 · 2017-06-27",
            "url": "https://hotcharts.ru/shazam/archive/27-06-2017.htm",
            "kind": "Shazam",
            "rank": 27
          },
          {
            "id": "loveradio-2017-06-25-mezhdu",
            "label": "Love Radio: #20 · 2017-06-25",
            "url": "https://hotcharts.ru/loveradio/archive/25-06-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-mezhdu",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-07-04",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 122,
        "shazamRank": 20,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-07-04-nedelimy",
            "label": "Shazam Россия: #20 · 2017-07-04",
            "url": "https://hotcharts.ru/shazam/archive/04-07-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-07-02-nedelimy",
            "label": "Love Radio: #3 · 2017-07-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-07-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-06-30-nedelimy",
            "label": "Европа Плюс: #10 · 2017-06-30",
            "url": "https://hotcharts.ru/europaplus/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "europaplus-2017-07-07-nedelimy",
            "label": "Европа Плюс: #13 · 2017-07-07",
            "url": "https://hotcharts.ru/europaplus/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-06-30-nedelimy",
            "label": "Русское радио: #1 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-07-07-nedelimy",
            "label": "Русское радио: #2 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 108,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-07-04-dni_nochi",
            "label": "Shazam Россия: #14 · 2017-07-04",
            "url": "https://hotcharts.ru/shazam/archive/04-07-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-02-sluchaynaya",
            "label": "Love Radio: #7 · 2017-07-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-07-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-07-sluchaynaya",
            "label": "Русское радио: #1 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-06-30-sluchaynaya",
            "label": "Русское радио: #2 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 56,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-02-soprano",
            "label": "Love Radio: #13 · 2017-07-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-07-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-30-soprano",
            "label": "Русское радио: #10 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-07-07-soprano",
            "label": "Русское радио: #12 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Егор Крид & MOLLY",
        "title": "Если ты меня не любишь",
        "score": 43,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-02-ne_lubish",
            "label": "Love Radio: #19 · 2017-07-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-07-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "vk-2017-ne_lubish",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-06-30-ne_lubish",
            "label": "Русское радио: #17 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "yandex-2017-ne_lubish",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 42,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-07-02-po_volnam",
            "label": "Love Radio: #10 · 2017-07-02",
            "url": "https://hotcharts.ru/loveradio/archive/02-07-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-06-30-po_volnam",
            "label": "Русское радио: #6 · 2017-06-30",
            "url": "https://hotcharts.ru/rusradio/archive/30-06-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-07-07-po_volnam",
            "label": "Русское радио: #7 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-07-11",
    "candidates": [
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 116,
        "shazamRank": 22,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-07-11-nedelimy",
            "label": "Shazam Россия: #22 · 2017-07-11",
            "url": "https://hotcharts.ru/shazam/archive/11-07-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "loveradio-2017-07-09-nedelimy",
            "label": "Love Radio: #5 · 2017-07-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-07-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-07-07-nedelimy",
            "label": "Европа Плюс: #13 · 2017-07-07",
            "url": "https://hotcharts.ru/europaplus/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "europaplus-2017-07-14-nedelimy",
            "label": "Европа Плюс: #22 · 2017-07-14",
            "url": "https://hotcharts.ru/europaplus/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "rusradio-2017-07-07-nedelimy",
            "label": "Русское радио: #2 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-07-14-nedelimy",
            "label": "Русское радио: #20 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 111,
        "shazamRank": 13,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-07-11-dni_nochi",
            "label": "Shazam Россия: #13 · 2017-07-11",
            "url": "https://hotcharts.ru/shazam/archive/11-07-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-09-sluchaynaya",
            "label": "Love Radio: #10 · 2017-07-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-07-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-07-sluchaynaya",
            "label": "Русское радио: #1 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-07-14-sluchaynaya",
            "label": "Русское радио: #2 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 54,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-09-soprano",
            "label": "Love Radio: #18 · 2017-07-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-07-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-07-soprano",
            "label": "Русское радио: #12 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-07-14-soprano",
            "label": "Русское радио: #12 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Burito",
        "title": "По волнам",
        "score": 41,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-07-09-po_volnam",
            "label": "Love Radio: #14 · 2017-07-09",
            "url": "https://hotcharts.ru/loveradio/archive/09-07-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "rusradio-2017-07-07-po_volnam",
            "label": "Русское радио: #7 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-07-14-po_volnam",
            "label": "Русское радио: #7 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-po_volnam",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Filatov & Karas feat. Masha",
        "title": "Лирика",
        "score": 38,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "rusradio-2017-07-07-lirika",
            "label": "Русское радио: #4 · 2017-07-07",
            "url": "https://hotcharts.ru/rusradio/archive/07-07-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-07-14-lirika",
            "label": "Русское радио: #4 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "yandex-2017-lirika",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-07-18",
    "candidates": [
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 111,
        "shazamRank": 15,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-07-18-dni_nochi",
            "label": "Shazam Россия: #15 · 2017-07-18",
            "url": "https://hotcharts.ru/shazam/archive/18-07-2017.htm",
            "kind": "Shazam",
            "rank": 15
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-21-dni_nochi",
            "label": "Русское радио: #20 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 104,
        "shazamRank": 26,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-07-18-nedelimy",
            "label": "Shazam Россия: #26 · 2017-07-18",
            "url": "https://hotcharts.ru/shazam/archive/18-07-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-07-16-nedelimy",
            "label": "Love Radio: #9 · 2017-07-16",
            "url": "https://hotcharts.ru/loveradio/archive/16-07-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-07-14-nedelimy",
            "label": "Европа Плюс: #22 · 2017-07-14",
            "url": "https://hotcharts.ru/europaplus/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "europaplus-2017-07-21-nedelimy",
            "label": "Европа Плюс: #9 · 2017-07-21",
            "url": "https://hotcharts.ru/europaplus/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-07-21-nedelimy",
            "label": "Русское радио: #2 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-07-14-nedelimy",
            "label": "Русское радио: #20 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 96,
        "shazamRank": 12,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-07-18-igotlove",
            "label": "Shazam Россия: #12 · 2017-07-18",
            "url": "https://hotcharts.ru/shazam/archive/18-07-2017.htm",
            "kind": "Shazam",
            "rank": 12
          },
          {
            "id": "loveradio-2017-07-16-igotlove",
            "label": "Love Radio: #12 · 2017-07-16",
            "url": "https://hotcharts.ru/loveradio/archive/16-07-2017.htm",
            "kind": "радио",
            "rank": 12
          }
        ]
      },
      {
        "artist": "MONATIK",
        "title": "Упали в любовь и ударились в танцы",
        "score": 75,
        "shazamRank": 17,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-07-18-upali",
            "label": "Shazam Россия: #17 · 2017-07-18",
            "url": "https://hotcharts.ru/shazam/archive/18-07-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "europaplus-2017-07-21-upali",
            "label": "Европа Плюс: #27 · 2017-07-21",
            "url": "https://hotcharts.ru/europaplus/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 27
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-16-sluchaynaya",
            "label": "Love Radio: #10 · 2017-07-16",
            "url": "https://hotcharts.ru/loveradio/archive/16-07-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-14-sluchaynaya",
            "label": "Русское радио: #2 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-07-21-sluchaynaya",
            "label": "Русское радио: #4 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мот feat. Ани Лорак",
        "title": "Сопрано",
        "score": 48,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-soprano",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-14-soprano",
            "label": "Русское радио: #12 · 2017-07-14",
            "url": "https://hotcharts.ru/rusradio/archive/14-07-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-07-21-soprano",
            "label": "Русское радио: #16 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-soprano",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-07-25",
    "candidates": [
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 114,
        "shazamRank": 16,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-07-25-dni_nochi",
            "label": "Shazam Россия: #16 · 2017-07-25",
            "url": "https://hotcharts.ru/shazam/archive/25-07-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-28-dni_nochi",
            "label": "Русское радио: #18 · 2017-07-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-07-21-dni_nochi",
            "label": "Русское радио: #20 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 109,
        "shazamRank": 9,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-07-25-igotlove",
            "label": "Shazam Россия: #9 · 2017-07-25",
            "url": "https://hotcharts.ru/shazam/archive/25-07-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-07-23-igotlove",
            "label": "Love Radio: #8 · 2017-07-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-07-2017.htm",
            "kind": "радио",
            "rank": 8
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 104,
        "shazamRank": 26,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-07-25-nedelimy",
            "label": "Shazam Россия: #26 · 2017-07-25",
            "url": "https://hotcharts.ru/shazam/archive/25-07-2017.htm",
            "kind": "Shazam",
            "rank": 26
          },
          {
            "id": "loveradio-2017-07-23-nedelimy",
            "label": "Love Radio: #11 · 2017-07-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-07-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-07-28-nedelimy",
            "label": "Европа Плюс: #11 · 2017-07-28",
            "url": "https://hotcharts.ru/europaplus/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-07-21-nedelimy",
            "label": "Европа Плюс: #9 · 2017-07-21",
            "url": "https://hotcharts.ru/europaplus/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-07-21-nedelimy",
            "label": "Русское радио: #2 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-07-28-nedelimy",
            "label": "Русское радио: #3 · 2017-07-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "MONATIK",
        "title": "Упали в любовь и ударились в танцы",
        "score": 83,
        "shazamRank": 17,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-07-25-upali",
            "label": "Shazam Россия: #17 · 2017-07-25",
            "url": "https://hotcharts.ru/shazam/archive/25-07-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "europaplus-2017-07-28-upali",
            "label": "Европа Плюс: #16 · 2017-07-28",
            "url": "https://hotcharts.ru/europaplus/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-07-21-upali",
            "label": "Европа Плюс: #27 · 2017-07-21",
            "url": "https://hotcharts.ru/europaplus/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 27
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-23-sluchaynaya",
            "label": "Love Radio: #10 · 2017-07-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-07-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-21-sluchaynaya",
            "label": "Русское радио: #4 · 2017-07-21",
            "url": "https://hotcharts.ru/rusradio/archive/21-07-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-07-28-sluchaynaya",
            "label": "Русское радио: #6 · 2017-07-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "SEREBRO",
        "title": "Между нами любовь",
        "score": 59,
        "shazamRank": 30,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-07-25-mezhdu",
            "label": "Shazam Россия: #30 · 2017-07-25",
            "url": "https://hotcharts.ru/shazam/archive/25-07-2017.htm",
            "kind": "Shazam",
            "rank": 30
          },
          {
            "id": "loveradio-2017-07-23-mezhdu",
            "label": "Love Radio: #7 · 2017-07-23",
            "url": "https://hotcharts.ru/loveradio/archive/23-07-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-mezhdu",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-08-01",
    "candidates": [
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 118,
        "shazamRank": 7,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-01-igotlove",
            "label": "Shazam Россия: #7 · 2017-08-01",
            "url": "https://hotcharts.ru/shazam/archive/01-08-2017.htm",
            "kind": "Shazam",
            "rank": 7
          },
          {
            "id": "loveradio-2017-07-30-igotlove",
            "label": "Love Radio: #5 · 2017-07-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-07-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 95,
        "shazamRank": 23,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-08-01-dni_nochi",
            "label": "Shazam Россия: #23 · 2017-08-01",
            "url": "https://hotcharts.ru/shazam/archive/01-08-2017.htm",
            "kind": "Shazam",
            "rank": 23
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-08-04-dni_nochi",
            "label": "Русское радио: #16 · 2017-08-04",
            "url": "https://hotcharts.ru/rusradio/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-07-28-dni_nochi",
            "label": "Русское радио: #18 · 2017-07-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 87,
        "shazamRank": 17,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-01-uleti",
            "label": "Shazam Россия: #17 · 2017-08-01",
            "url": "https://hotcharts.ru/shazam/archive/01-08-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-30-nedelimy",
            "label": "Love Radio: #13 · 2017-07-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-07-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-07-28-nedelimy",
            "label": "Европа Плюс: #11 · 2017-07-28",
            "url": "https://hotcharts.ru/europaplus/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-08-04-nedelimy",
            "label": "Европа Плюс: #18 · 2017-08-04",
            "url": "https://hotcharts.ru/europaplus/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-07-28-nedelimy",
            "label": "Русское радио: #3 · 2017-07-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-08-04-nedelimy",
            "label": "Русское радио: #4 · 2017-08-04",
            "url": "https://hotcharts.ru/rusradio/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 60,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-07-30-sluchaynaya",
            "label": "Love Radio: #6 · 2017-07-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-07-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-07-28-sluchaynaya",
            "label": "Русское радио: #6 · 2017-07-28",
            "url": "https://hotcharts.ru/rusradio/archive/28-07-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-08-04-sluchaynaya",
            "label": "Русское радио: #7 · 2017-08-04",
            "url": "https://hotcharts.ru/rusradio/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "SEREBRO",
        "title": "Между нами любовь",
        "score": 57,
        "shazamRank": 30,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-08-01-mezhdu",
            "label": "Shazam Россия: #30 · 2017-08-01",
            "url": "https://hotcharts.ru/shazam/archive/01-08-2017.htm",
            "kind": "Shazam",
            "rank": 30
          },
          {
            "id": "loveradio-2017-07-30-mezhdu",
            "label": "Love Radio: #9 · 2017-07-30",
            "url": "https://hotcharts.ru/loveradio/archive/30-07-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-mezhdu",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-08-08",
    "candidates": [
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 121,
        "shazamRank": 7,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-08-igotlove",
            "label": "Shazam Россия: #7 · 2017-08-08",
            "url": "https://hotcharts.ru/shazam/archive/08-08-2017.htm",
            "kind": "Shazam",
            "rank": 7
          },
          {
            "id": "loveradio-2017-08-06-igotlove",
            "label": "Love Radio: #2 · 2017-08-06",
            "url": "https://hotcharts.ru/loveradio/archive/06-08-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 95,
        "shazamRank": 24,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-08-08-dni_nochi",
            "label": "Shazam Россия: #24 · 2017-08-08",
            "url": "https://hotcharts.ru/shazam/archive/08-08-2017.htm",
            "kind": "Shazam",
            "rank": 24
          },
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-08-11-dni_nochi",
            "label": "Русское радио: #13 · 2017-08-11",
            "url": "https://hotcharts.ru/rusradio/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-08-04-dni_nochi",
            "label": "Русское радио: #16 · 2017-08-04",
            "url": "https://hotcharts.ru/rusradio/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 81,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-08-uleti",
            "label": "Shazam Россия: #19 · 2017-08-08",
            "url": "https://hotcharts.ru/shazam/archive/08-08-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "MONATIK",
        "title": "Упали в любовь и ударились в танцы",
        "score": 74,
        "shazamRank": 21,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-08-upali",
            "label": "Shazam Россия: #21 · 2017-08-08",
            "url": "https://hotcharts.ru/shazam/archive/08-08-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "europaplus-2017-08-04-upali",
            "label": "Европа Плюс: #13 · 2017-08-04",
            "url": "https://hotcharts.ru/europaplus/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "europaplus-2017-08-11-upali",
            "label": "Европа Плюс: #15 · 2017-08-11",
            "url": "https://hotcharts.ru/europaplus/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 15
          }
        ]
      },
      {
        "artist": "SEREBRO",
        "title": "Между нами любовь",
        "score": 63,
        "shazamRank": 28,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-08-08-mezhdu",
            "label": "Shazam Россия: #28 · 2017-08-08",
            "url": "https://hotcharts.ru/shazam/archive/08-08-2017.htm",
            "kind": "Shazam",
            "rank": 28
          },
          {
            "id": "loveradio-2017-08-06-mezhdu",
            "label": "Love Radio: #9 · 2017-08-06",
            "url": "https://hotcharts.ru/loveradio/archive/06-08-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-mezhdu",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-08-06-nedelimy",
            "label": "Love Radio: #15 · 2017-08-06",
            "url": "https://hotcharts.ru/loveradio/archive/06-08-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-08-04-nedelimy",
            "label": "Европа Плюс: #18 · 2017-08-04",
            "url": "https://hotcharts.ru/europaplus/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "europaplus-2017-08-11-nedelimy",
            "label": "Европа Плюс: #24 · 2017-08-11",
            "url": "https://hotcharts.ru/europaplus/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 24
          },
          {
            "id": "rusradio-2017-08-04-nedelimy",
            "label": "Русское радио: #4 · 2017-08-04",
            "url": "https://hotcharts.ru/rusradio/archive/04-08-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-08-11-nedelimy",
            "label": "Русское радио: #6 · 2017-08-11",
            "url": "https://hotcharts.ru/rusradio/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-08-15",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 136,
        "shazamRank": 10,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-08-15-rozovoe",
            "label": "Shazam Россия: #10 · 2017-08-15",
            "url": "https://hotcharts.ru/shazam/archive/15-08-2017.htm",
            "kind": "Shazam",
            "rank": 10
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 120,
        "shazamRank": 7,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-15-igotlove",
            "label": "Shazam Россия: #7 · 2017-08-15",
            "url": "https://hotcharts.ru/shazam/archive/15-08-2017.htm",
            "kind": "Shazam",
            "rank": 7
          },
          {
            "id": "loveradio-2017-08-13-igotlove",
            "label": "Love Radio: #3 · 2017-08-13",
            "url": "https://hotcharts.ru/loveradio/archive/13-08-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 107,
        "shazamRank": 13,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-08-15-uleti",
            "label": "Shazam Россия: #13 · 2017-08-15",
            "url": "https://hotcharts.ru/shazam/archive/15-08-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "loveradio-2017-08-13-uleti",
            "label": "Love Radio: #16 · 2017-08-13",
            "url": "https://hotcharts.ru/loveradio/archive/13-08-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 94,
        "shazamRank": 14,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-15-moya_lubov",
            "label": "Shazam Россия: #14 · 2017-08-15",
            "url": "https://hotcharts.ru/shazam/archive/15-08-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-08-13-moya_lubov",
            "label": "Love Radio: #8 · 2017-08-13",
            "url": "https://hotcharts.ru/loveradio/archive/13-08-2017.htm",
            "kind": "радио",
            "rank": 8
          }
        ]
      },
      {
        "artist": "MONATIK",
        "title": "Упали в любовь и ударились в танцы",
        "score": 72,
        "shazamRank": 21,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-15-upali",
            "label": "Shazam Россия: #21 · 2017-08-15",
            "url": "https://hotcharts.ru/shazam/archive/15-08-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "europaplus-2017-08-11-upali",
            "label": "Европа Плюс: #15 · 2017-08-11",
            "url": "https://hotcharts.ru/europaplus/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "europaplus-2017-08-18-upali",
            "label": "Европа Плюс: #16 · 2017-08-18",
            "url": "https://hotcharts.ru/europaplus/archive/18-08-2017.htm",
            "kind": "радио",
            "rank": 16
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-08-13-nedelimy",
            "label": "Love Radio: #19 · 2017-08-13",
            "url": "https://hotcharts.ru/loveradio/archive/13-08-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-08-18-nedelimy",
            "label": "Европа Плюс: #18 · 2017-08-18",
            "url": "https://hotcharts.ru/europaplus/archive/18-08-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "europaplus-2017-08-11-nedelimy",
            "label": "Европа Плюс: #24 · 2017-08-11",
            "url": "https://hotcharts.ru/europaplus/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 24
          },
          {
            "id": "rusradio-2017-08-11-nedelimy",
            "label": "Русское радио: #6 · 2017-08-11",
            "url": "https://hotcharts.ru/rusradio/archive/11-08-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-08-18-nedelimy",
            "label": "Русское радио: #8 · 2017-08-18",
            "url": "https://hotcharts.ru/rusradio/archive/18-08-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-08-22",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 133,
        "shazamRank": 11,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-08-22-rozovoe",
            "label": "Shazam Россия: #11 · 2017-08-22",
            "url": "https://hotcharts.ru/shazam/archive/22-08-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 116,
        "shazamRank": 9,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-22-igotlove",
            "label": "Shazam Россия: #9 · 2017-08-22",
            "url": "https://hotcharts.ru/shazam/archive/22-08-2017.htm",
            "kind": "Shazam",
            "rank": 9
          },
          {
            "id": "loveradio-2017-08-20-igotlove",
            "label": "Love Radio: #1 · 2017-08-20",
            "url": "https://hotcharts.ru/loveradio/archive/20-08-2017.htm",
            "kind": "радио",
            "rank": 1
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 110,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-08-22-uleti",
            "label": "Shazam Россия: #14 · 2017-08-22",
            "url": "https://hotcharts.ru/shazam/archive/22-08-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-08-20-uleti",
            "label": "Love Radio: #10 · 2017-08-20",
            "url": "https://hotcharts.ru/loveradio/archive/20-08-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 85,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-22-moya_lubov",
            "label": "Shazam Россия: #20 · 2017-08-22",
            "url": "https://hotcharts.ru/shazam/archive/22-08-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-08-20-moya_lubov",
            "label": "Love Radio: #5 · 2017-08-20",
            "url": "https://hotcharts.ru/loveradio/archive/20-08-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "europaplus-2017-08-25-moya_lubov",
            "label": "Европа Плюс: #21 · 2017-08-25",
            "url": "https://hotcharts.ru/europaplus/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 21
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-08-20-nedelimy",
            "label": "Love Radio: #16 · 2017-08-20",
            "url": "https://hotcharts.ru/loveradio/archive/20-08-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-08-18-nedelimy",
            "label": "Европа Плюс: #18 · 2017-08-18",
            "url": "https://hotcharts.ru/europaplus/archive/18-08-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "europaplus-2017-08-25-nedelimy",
            "label": "Европа Плюс: #18 · 2017-08-25",
            "url": "https://hotcharts.ru/europaplus/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-08-25-nedelimy",
            "label": "Русское радио: #10 · 2017-08-25",
            "url": "https://hotcharts.ru/rusradio/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-08-18-nedelimy",
            "label": "Русское радио: #8 · 2017-08-18",
            "url": "https://hotcharts.ru/rusradio/archive/18-08-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "LOBODA",
        "title": "Случайная",
        "score": 54,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-08-20-sluchaynaya",
            "label": "Love Radio: #15 · 2017-08-20",
            "url": "https://hotcharts.ru/loveradio/archive/20-08-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "vk-2017-sluchaynaya",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-08-18-sluchaynaya",
            "label": "Русское радио: #12 · 2017-08-18",
            "url": "https://hotcharts.ru/rusradio/archive/18-08-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-08-25-sluchaynaya",
            "label": "Русское радио: #13 · 2017-08-25",
            "url": "https://hotcharts.ru/rusradio/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "yandex-2017-sluchaynaya",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-08-29",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 127,
        "shazamRank": 13,
        "signalTypes": 4,
        "sources": [
          {
            "id": "shazam-2017-08-29-rozovoe",
            "label": "Shazam Россия: #13 · 2017-08-29",
            "url": "https://hotcharts.ru/shazam/archive/29-08-2017.htm",
            "kind": "Shazam",
            "rank": 13
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 113,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-08-29-uleti",
            "label": "Shazam Россия: #14 · 2017-08-29",
            "url": "https://hotcharts.ru/shazam/archive/29-08-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-08-27-uleti",
            "label": "Love Radio: #7 · 2017-08-27",
            "url": "https://hotcharts.ru/loveradio/archive/27-08-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 110,
        "shazamRank": 10,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-29-igotlove",
            "label": "Shazam Россия: #10 · 2017-08-29",
            "url": "https://hotcharts.ru/shazam/archive/29-08-2017.htm",
            "kind": "Shazam",
            "rank": 10
          },
          {
            "id": "loveradio-2017-08-27-igotlove",
            "label": "Love Radio: #4 · 2017-08-27",
            "url": "https://hotcharts.ru/loveradio/archive/27-08-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 101,
        "shazamRank": 17,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-08-29-moya_lubov",
            "label": "Shazam Россия: #17 · 2017-08-29",
            "url": "https://hotcharts.ru/shazam/archive/29-08-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "loveradio-2017-08-27-moya_lubov",
            "label": "Love Radio: #1 · 2017-08-27",
            "url": "https://hotcharts.ru/loveradio/archive/27-08-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "europaplus-2017-09-01-moya_lubov",
            "label": "Европа Плюс: #16 · 2017-09-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-08-25-moya_lubov",
            "label": "Европа Плюс: #21 · 2017-08-25",
            "url": "https://hotcharts.ru/europaplus/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 21
          }
        ]
      },
      {
        "artist": "SEREBRO",
        "title": "Между нами любовь",
        "score": 69,
        "shazamRank": 23,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-08-29-mezhdu",
            "label": "Shazam Россия: #23 · 2017-08-29",
            "url": "https://hotcharts.ru/shazam/archive/29-08-2017.htm",
            "kind": "Shazam",
            "rank": 23
          },
          {
            "id": "europaplus-2017-09-01-mezhdu",
            "label": "Европа Плюс: #28 · 2017-09-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 28
          },
          {
            "id": "yandex-2017-mezhdu",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-08-27-nedelimy",
            "label": "Love Radio: #20 · 2017-08-27",
            "url": "https://hotcharts.ru/loveradio/archive/27-08-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-01-nedelimy",
            "label": "Европа Плюс: #17 · 2017-09-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "europaplus-2017-08-25-nedelimy",
            "label": "Европа Плюс: #18 · 2017-08-25",
            "url": "https://hotcharts.ru/europaplus/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 18
          },
          {
            "id": "rusradio-2017-08-25-nedelimy",
            "label": "Русское радио: #10 · 2017-08-25",
            "url": "https://hotcharts.ru/rusradio/archive/25-08-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-09-01-nedelimy",
            "label": "Русское радио: #11 · 2017-09-01",
            "url": "https://hotcharts.ru/rusradio/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-09-05",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 171,
        "shazamRank": 2,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-09-05-rozovoe",
            "label": "Shazam Россия: #2 · 2017-09-05",
            "url": "https://hotcharts.ru/shazam/archive/05-09-2017.htm",
            "kind": "Shazam",
            "rank": 2
          },
          {
            "id": "loveradio-2017-09-03-rozovoe",
            "label": "Love Radio: #13 · 2017-09-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-09-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 116,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-09-05-uleti",
            "label": "Shazam Россия: #14 · 2017-09-05",
            "url": "https://hotcharts.ru/shazam/archive/05-09-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-09-03-uleti",
            "label": "Love Radio: #4 · 2017-09-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-09-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 92,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-05-moya_lubov",
            "label": "Shazam Россия: #20 · 2017-09-05",
            "url": "https://hotcharts.ru/shazam/archive/05-09-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-09-03-moya_lubov",
            "label": "Love Radio: #1 · 2017-09-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-09-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "europaplus-2017-09-01-moya_lubov",
            "label": "Европа Плюс: #16 · 2017-09-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-09-08-moya_lubov",
            "label": "Европа Плюс: #19 · 2017-09-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "rusradio-2017-09-08-moya_lubov",
            "label": "Русское радио: #20 · 2017-09-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 20
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 90,
        "shazamRank": 15,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-05-igotlove",
            "label": "Shazam Россия: #15 · 2017-09-05",
            "url": "https://hotcharts.ru/shazam/archive/05-09-2017.htm",
            "kind": "Shazam",
            "rank": 15
          },
          {
            "id": "loveradio-2017-09-03-igotlove",
            "label": "Love Radio: #9 · 2017-09-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-09-2017.htm",
            "kind": "радио",
            "rank": 9
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-09-03-nedelimy",
            "label": "Love Radio: #19 · 2017-09-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-01-nedelimy",
            "label": "Европа Плюс: #17 · 2017-09-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "europaplus-2017-09-08-nedelimy",
            "label": "Европа Плюс: #23 · 2017-09-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 23
          },
          {
            "id": "rusradio-2017-09-01-nedelimy",
            "label": "Русское радио: #11 · 2017-09-01",
            "url": "https://hotcharts.ru/rusradio/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "rusradio-2017-09-08-nedelimy",
            "label": "Русское радио: #12 · 2017-09-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 56,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-09-08-dni_nochi",
            "label": "Русское радио: #4 · 2017-09-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-09-01-dni_nochi",
            "label": "Русское радио: #5 · 2017-09-01",
            "url": "https://hotcharts.ru/rusradio/archive/01-09-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-09-12",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 177,
        "shazamRank": 2,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-09-12-rozovoe",
            "label": "Shazam Россия: #2 · 2017-09-12",
            "url": "https://hotcharts.ru/shazam/archive/12-09-2017.htm",
            "kind": "Shazam",
            "rank": 2
          },
          {
            "id": "loveradio-2017-09-10-rozovoe",
            "label": "Love Radio: #7 · 2017-09-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-09-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 118,
        "shazamRank": 14,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-09-12-uleti",
            "label": "Shazam Россия: #14 · 2017-09-12",
            "url": "https://hotcharts.ru/shazam/archive/12-09-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-09-10-uleti",
            "label": "Love Radio: #2 · 2017-09-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-09-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 95,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-12-moya_lubov",
            "label": "Shazam Россия: #19 · 2017-09-12",
            "url": "https://hotcharts.ru/shazam/archive/12-09-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-09-10-moya_lubov",
            "label": "Love Radio: #1 · 2017-09-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-09-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "europaplus-2017-09-15-moya_lubov",
            "label": "Европа Плюс: #12 · 2017-09-15",
            "url": "https://hotcharts.ru/europaplus/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "europaplus-2017-09-08-moya_lubov",
            "label": "Европа Плюс: #19 · 2017-09-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "rusradio-2017-09-15-moya_lubov",
            "label": "Русское радио: #15 · 2017-09-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "rusradio-2017-09-08-moya_lubov",
            "label": "Русское радио: #20 · 2017-09-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 20
          }
        ]
      },
      {
        "artist": "MiyaGi & Эндшпиль feat. Рем Дигга",
        "title": "I Got Love",
        "score": 81,
        "shazamRank": 17,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-12-igotlove",
            "label": "Shazam Россия: #17 · 2017-09-12",
            "url": "https://hotcharts.ru/shazam/archive/12-09-2017.htm",
            "kind": "Shazam",
            "rank": 17
          },
          {
            "id": "loveradio-2017-09-10-igotlove",
            "label": "Love Radio: #12 · 2017-09-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-09-2017.htm",
            "kind": "радио",
            "rank": 12
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-09-10-nedelimy",
            "label": "Love Radio: #19 · 2017-09-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-15-nedelimy",
            "label": "Европа Плюс: #21 · 2017-09-15",
            "url": "https://hotcharts.ru/europaplus/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 21
          },
          {
            "id": "europaplus-2017-09-08-nedelimy",
            "label": "Европа Плюс: #23 · 2017-09-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 23
          },
          {
            "id": "rusradio-2017-09-08-nedelimy",
            "label": "Русское радио: #12 · 2017-09-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-09-15-nedelimy",
            "label": "Русское радио: #14 · 2017-09-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 57,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-09-15-dni_nochi",
            "label": "Русское радио: #3 · 2017-09-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-09-08-dni_nochi",
            "label": "Русское радио: #4 · 2017-09-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-09-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-09-19",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 191,
        "shazamRank": 1,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-09-19-rozovoe",
            "label": "Shazam Россия: #1 · 2017-09-19",
            "url": "https://hotcharts.ru/shazam/archive/19-09-2017.htm",
            "kind": "Shazam",
            "rank": 1
          },
          {
            "id": "loveradio-2017-09-17-rozovoe",
            "label": "Love Radio: #2 · 2017-09-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-09-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-22-rozovoe",
            "label": "Европа Плюс: #27 · 2017-09-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 27
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 111,
        "shazamRank": 16,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-09-19-uleti",
            "label": "Shazam Россия: #16 · 2017-09-19",
            "url": "https://hotcharts.ru/shazam/archive/19-09-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "loveradio-2017-09-17-uleti",
            "label": "Love Radio: #3 · 2017-09-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-09-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 95,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-19-moya_lubov",
            "label": "Shazam Россия: #19 · 2017-09-19",
            "url": "https://hotcharts.ru/shazam/archive/19-09-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-09-17-moya_lubov",
            "label": "Love Radio: #1 · 2017-09-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-09-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "europaplus-2017-09-22-moya_lubov",
            "label": "Европа Плюс: #10 · 2017-09-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "europaplus-2017-09-15-moya_lubov",
            "label": "Европа Плюс: #12 · 2017-09-15",
            "url": "https://hotcharts.ru/europaplus/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 12
          },
          {
            "id": "rusradio-2017-09-22-moya_lubov",
            "label": "Русское радио: #11 · 2017-09-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "rusradio-2017-09-15-moya_lubov",
            "label": "Русское радио: #15 · 2017-09-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 15
          }
        ]
      },
      {
        "artist": "MONATIK",
        "title": "Упали в любовь и ударились в танцы",
        "score": 88,
        "shazamRank": 15,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-19-upali",
            "label": "Shazam Россия: #15 · 2017-09-19",
            "url": "https://hotcharts.ru/shazam/archive/19-09-2017.htm",
            "kind": "Shazam",
            "rank": 15
          },
          {
            "id": "loveradio-2017-09-17-upali",
            "label": "Love Radio: #11 · 2017-09-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-09-2017.htm",
            "kind": "радио",
            "rank": 11
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 62,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-09-17-nedelimy",
            "label": "Love Radio: #19 · 2017-09-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-15-nedelimy",
            "label": "Европа Плюс: #21 · 2017-09-15",
            "url": "https://hotcharts.ru/europaplus/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 21
          },
          {
            "id": "europaplus-2017-09-22-nedelimy",
            "label": "Европа Плюс: #25 · 2017-09-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 25
          },
          {
            "id": "rusradio-2017-09-15-nedelimy",
            "label": "Русское радио: #14 · 2017-09-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "rusradio-2017-09-22-nedelimy",
            "label": "Русское радио: #19 · 2017-09-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 59,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-09-22-dni_nochi",
            "label": "Русское радио: #1 · 2017-09-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-09-15-dni_nochi",
            "label": "Русское радио: #3 · 2017-09-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-09-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-09-26",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 192,
        "shazamRank": 2,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-09-26-rozovoe",
            "label": "Shazam Россия: #2 · 2017-09-26",
            "url": "https://hotcharts.ru/shazam/archive/26-09-2017.htm",
            "kind": "Shazam",
            "rank": 2
          },
          {
            "id": "loveradio-2017-09-24-rozovoe",
            "label": "Love Radio: #1 · 2017-09-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-09-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-29-rozovoe",
            "label": "Европа Плюс: #22 · 2017-09-29",
            "url": "https://hotcharts.ru/europaplus/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "europaplus-2017-09-22-rozovoe",
            "label": "Европа Плюс: #27 · 2017-09-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 27
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 99,
        "shazamRank": 20,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-09-26-uleti",
            "label": "Shazam Россия: #20 · 2017-09-26",
            "url": "https://hotcharts.ru/shazam/archive/26-09-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-09-24-uleti",
            "label": "Love Radio: #3 · 2017-09-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-09-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 86,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-09-26-moya_lubov",
            "label": "Shazam Россия: #22 · 2017-09-26",
            "url": "https://hotcharts.ru/shazam/archive/26-09-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "loveradio-2017-09-24-moya_lubov",
            "label": "Love Radio: #2 · 2017-09-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-09-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "europaplus-2017-09-22-moya_lubov",
            "label": "Европа Плюс: #10 · 2017-09-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "europaplus-2017-09-29-moya_lubov",
            "label": "Европа Плюс: #13 · 2017-09-29",
            "url": "https://hotcharts.ru/europaplus/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-09-22-moya_lubov",
            "label": "Русское радио: #11 · 2017-09-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "rusradio-2017-09-29-moya_lubov",
            "label": "Русское радио: #8 · 2017-09-29",
            "url": "https://hotcharts.ru/rusradio/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 8
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 59,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-09-22-dni_nochi",
            "label": "Русское радио: #1 · 2017-09-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-09-29-dni_nochi",
            "label": "Русское радио: #2 · 2017-09-29",
            "url": "https://hotcharts.ru/rusradio/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Artik & Asti",
        "title": "Неделимы",
        "score": 48,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "loveradio-2017-09-24-nedelimy",
            "label": "Love Radio: #20 · 2017-09-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-09-2017.htm",
            "kind": "радио",
            "rank": 20
          },
          {
            "id": "vk-2017-nedelimy",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-09-22-nedelimy",
            "label": "Европа Плюс: #25 · 2017-09-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 25
          },
          {
            "id": "rusradio-2017-09-22-nedelimy",
            "label": "Русское радио: #19 · 2017-09-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-09-2017.htm",
            "kind": "радио",
            "rank": 19
          },
          {
            "id": "yandex-2017-nedelimy",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-10-03",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 192,
        "shazamRank": 2,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-10-03-rozovoe",
            "label": "Shazam Россия: #2 · 2017-10-03",
            "url": "https://hotcharts.ru/shazam/archive/03-10-2017.htm",
            "kind": "Shazam",
            "rank": 2
          },
          {
            "id": "loveradio-2017-10-01-rozovoe",
            "label": "Love Radio: #1 · 2017-10-01",
            "url": "https://hotcharts.ru/loveradio/archive/01-10-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-10-06-rozovoe",
            "label": "Европа Плюс: #15 · 2017-10-06",
            "url": "https://hotcharts.ru/europaplus/archive/06-10-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "europaplus-2017-09-29-rozovoe",
            "label": "Европа Плюс: #22 · 2017-09-29",
            "url": "https://hotcharts.ru/europaplus/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 22
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Макс Барских",
        "title": "Моя любовь",
        "score": 77,
        "shazamRank": 25,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-10-03-moya_lubov",
            "label": "Shazam Россия: #25 · 2017-10-03",
            "url": "https://hotcharts.ru/shazam/archive/03-10-2017.htm",
            "kind": "Shazam",
            "rank": 25
          },
          {
            "id": "loveradio-2017-10-01-moya_lubov",
            "label": "Love Radio: #2 · 2017-10-01",
            "url": "https://hotcharts.ru/loveradio/archive/01-10-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "europaplus-2017-09-29-moya_lubov",
            "label": "Европа Плюс: #13 · 2017-09-29",
            "url": "https://hotcharts.ru/europaplus/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "europaplus-2017-10-06-moya_lubov",
            "label": "Европа Плюс: #7 · 2017-10-06",
            "url": "https://hotcharts.ru/europaplus/archive/06-10-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "rusradio-2017-10-06-moya_lubov",
            "label": "Русское радио: #5 · 2017-10-06",
            "url": "https://hotcharts.ru/rusradio/archive/06-10-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "rusradio-2017-09-29-moya_lubov",
            "label": "Русское радио: #8 · 2017-09-29",
            "url": "https://hotcharts.ru/rusradio/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 8
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 77,
        "shazamRank": 27,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-10-03-uleti",
            "label": "Shazam Россия: #27 · 2017-10-03",
            "url": "https://hotcharts.ru/shazam/archive/03-10-2017.htm",
            "kind": "Shazam",
            "rank": 27
          },
          {
            "id": "loveradio-2017-10-01-uleti",
            "label": "Love Radio: #4 · 2017-10-01",
            "url": "https://hotcharts.ru/loveradio/archive/01-10-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 58,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-09-29-dni_nochi",
            "label": "Русское радио: #2 · 2017-09-29",
            "url": "https://hotcharts.ru/rusradio/archive/29-09-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "rusradio-2017-10-06-dni_nochi",
            "label": "Русское радио: #3 · 2017-10-06",
            "url": "https://hotcharts.ru/rusradio/archive/06-10-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-10-10",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 186,
        "shazamRank": 4,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-10-10-rozovoe",
            "label": "Shazam Россия: #4 · 2017-10-10",
            "url": "https://hotcharts.ru/shazam/archive/10-10-2017.htm",
            "kind": "Shazam",
            "rank": 4
          },
          {
            "id": "loveradio-2017-10-08-rozovoe",
            "label": "Love Radio: #1 · 2017-10-08",
            "url": "https://hotcharts.ru/loveradio/archive/08-10-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-10-06-rozovoe",
            "label": "Европа Плюс: #15 · 2017-10-06",
            "url": "https://hotcharts.ru/europaplus/archive/06-10-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "europaplus-2017-10-13-rozovoe",
            "label": "Европа Плюс: #21 · 2017-10-13",
            "url": "https://hotcharts.ru/europaplus/archive/13-10-2017.htm",
            "kind": "радио",
            "rank": 21
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 57,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-06-dni_nochi",
            "label": "Русское радио: #3 · 2017-10-06",
            "url": "https://hotcharts.ru/rusradio/archive/06-10-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-10-13-dni_nochi",
            "label": "Русское радио: #4 · 2017-10-13",
            "url": "https://hotcharts.ru/rusradio/archive/13-10-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 44,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-10-08-uleti",
            "label": "Love Radio: #4 · 2017-10-08",
            "url": "https://hotcharts.ru/loveradio/archive/08-10-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-13-uleti",
            "label": "Русское радио: #20 · 2017-10-13",
            "url": "https://hotcharts.ru/rusradio/archive/13-10-2017.htm",
            "kind": "радио",
            "rank": 20
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-10-17",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 183,
        "shazamRank": 5,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-10-17-rozovoe",
            "label": "Shazam Россия: #5 · 2017-10-17",
            "url": "https://hotcharts.ru/shazam/archive/17-10-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "loveradio-2017-10-15-rozovoe",
            "label": "Love Radio: #1 · 2017-10-15",
            "url": "https://hotcharts.ru/loveradio/archive/15-10-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-10-20-rozovoe",
            "label": "Европа Плюс: #16 · 2017-10-20",
            "url": "https://hotcharts.ru/europaplus/archive/20-10-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-10-13-rozovoe",
            "label": "Европа Плюс: #21 · 2017-10-13",
            "url": "https://hotcharts.ru/europaplus/archive/13-10-2017.htm",
            "kind": "радио",
            "rank": 21
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 56,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-13-dni_nochi",
            "label": "Русское радио: #4 · 2017-10-13",
            "url": "https://hotcharts.ru/rusradio/archive/13-10-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "rusradio-2017-10-20-dni_nochi",
            "label": "Русское радио: #5 · 2017-10-20",
            "url": "https://hotcharts.ru/rusradio/archive/20-10-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 47,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-10-15-uleti",
            "label": "Love Radio: #7 · 2017-10-15",
            "url": "https://hotcharts.ru/loveradio/archive/15-10-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-20-uleti",
            "label": "Русское радио: #17 · 2017-10-20",
            "url": "https://hotcharts.ru/rusradio/archive/20-10-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "rusradio-2017-10-13-uleti",
            "label": "Русское радио: #20 · 2017-10-13",
            "url": "https://hotcharts.ru/rusradio/archive/13-10-2017.htm",
            "kind": "радио",
            "rank": 20
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-10-24",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 183,
        "shazamRank": 5,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-10-24-rozovoe",
            "label": "Shazam Россия: #5 · 2017-10-24",
            "url": "https://hotcharts.ru/shazam/archive/24-10-2017.htm",
            "kind": "Shazam",
            "rank": 5
          },
          {
            "id": "loveradio-2017-10-22-rozovoe",
            "label": "Love Radio: #1 · 2017-10-22",
            "url": "https://hotcharts.ru/loveradio/archive/22-10-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-10-27-rozovoe",
            "label": "Европа Плюс: #14 · 2017-10-27",
            "url": "https://hotcharts.ru/europaplus/archive/27-10-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "europaplus-2017-10-20-rozovoe",
            "label": "Европа Плюс: #16 · 2017-10-20",
            "url": "https://hotcharts.ru/europaplus/archive/20-10-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 76,
        "shazamRank": 30,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-10-24-uleti",
            "label": "Shazam Россия: #30 · 2017-10-24",
            "url": "https://hotcharts.ru/shazam/archive/24-10-2017.htm",
            "kind": "Shazam",
            "rank": 30
          },
          {
            "id": "loveradio-2017-10-22-uleti",
            "label": "Love Radio: #8 · 2017-10-22",
            "url": "https://hotcharts.ru/loveradio/archive/22-10-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-27-uleti",
            "label": "Русское радио: #13 · 2017-10-27",
            "url": "https://hotcharts.ru/rusradio/archive/27-10-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-10-20-uleti",
            "label": "Русское радио: #17 · 2017-10-20",
            "url": "https://hotcharts.ru/rusradio/archive/20-10-2017.htm",
            "kind": "радио",
            "rank": 17
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 55,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-20-dni_nochi",
            "label": "Русское радио: #5 · 2017-10-20",
            "url": "https://hotcharts.ru/rusradio/archive/20-10-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "rusradio-2017-10-27-dni_nochi",
            "label": "Русское радио: #5 · 2017-10-27",
            "url": "https://hotcharts.ru/rusradio/archive/27-10-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-10-31",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 174,
        "shazamRank": 8,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-10-31-rozovoe",
            "label": "Shazam Россия: #8 · 2017-10-31",
            "url": "https://hotcharts.ru/shazam/archive/31-10-2017.htm",
            "kind": "Shazam",
            "rank": 8
          },
          {
            "id": "loveradio-2017-10-29-rozovoe",
            "label": "Love Radio: #1 · 2017-10-29",
            "url": "https://hotcharts.ru/loveradio/archive/29-10-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-10-27-rozovoe",
            "label": "Европа Плюс: #14 · 2017-10-27",
            "url": "https://hotcharts.ru/europaplus/archive/27-10-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "europaplus-2017-11-03-rozovoe",
            "label": "Европа Плюс: #14 · 2017-11-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 107,
        "shazamRank": 21,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-10-31-uleti",
            "label": "Shazam Россия: #21 · 2017-10-31",
            "url": "https://hotcharts.ru/shazam/archive/31-10-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "loveradio-2017-10-29-uleti",
            "label": "Love Radio: #7 · 2017-10-29",
            "url": "https://hotcharts.ru/loveradio/archive/29-10-2017.htm",
            "kind": "радио",
            "rank": 7
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-03-uleti",
            "label": "Европа Плюс: #23 · 2017-11-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 23
          },
          {
            "id": "rusradio-2017-11-03-uleti",
            "label": "Русское радио: #10 · 2017-11-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-10-27-uleti",
            "label": "Русское радио: #13 · 2017-10-27",
            "url": "https://hotcharts.ru/rusradio/archive/27-10-2017.htm",
            "kind": "радио",
            "rank": 13
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 55,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-10-27-dni_nochi",
            "label": "Русское радио: #5 · 2017-10-27",
            "url": "https://hotcharts.ru/rusradio/archive/27-10-2017.htm",
            "kind": "радио",
            "rank": 5
          },
          {
            "id": "rusradio-2017-11-03-dni_nochi",
            "label": "Русское радио: #6 · 2017-11-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-11-07",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 156,
        "shazamRank": 14,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-11-07-rozovoe",
            "label": "Shazam Россия: #14 · 2017-11-07",
            "url": "https://hotcharts.ru/shazam/archive/07-11-2017.htm",
            "kind": "Shazam",
            "rank": 14
          },
          {
            "id": "loveradio-2017-11-05-rozovoe",
            "label": "Love Radio: #1 · 2017-11-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-11-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-03-rozovoe",
            "label": "Европа Плюс: #14 · 2017-11-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "europaplus-2017-11-10-rozovoe",
            "label": "Европа Плюс: #8 · 2017-11-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 83,
        "shazamRank": 29,
        "signalTypes": 3,
        "sources": [
          {
            "id": "shazam-2017-11-07-uleti",
            "label": "Shazam Россия: #29 · 2017-11-07",
            "url": "https://hotcharts.ru/shazam/archive/07-11-2017.htm",
            "kind": "Shazam",
            "rank": 29
          },
          {
            "id": "loveradio-2017-11-05-uleti",
            "label": "Love Radio: #9 · 2017-11-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-11-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-10-uleti",
            "label": "Европа Плюс: #11 · 2017-11-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-11-03-uleti",
            "label": "Европа Плюс: #23 · 2017-11-03",
            "url": "https://hotcharts.ru/europaplus/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 23
          },
          {
            "id": "rusradio-2017-11-03-uleti",
            "label": "Русское радио: #10 · 2017-11-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-11-10-uleti",
            "label": "Русское радио: #6 · 2017-11-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 6
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 82,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-11-07-gipnozy",
            "label": "Shazam Россия: #20 · 2017-11-07",
            "url": "https://hotcharts.ru/shazam/archive/07-11-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-11-05-gipnozy",
            "label": "Love Radio: #2 · 2017-11-05",
            "url": "https://hotcharts.ru/loveradio/archive/05-11-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 54,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-11-03-dni_nochi",
            "label": "Русское радио: #6 · 2017-11-03",
            "url": "https://hotcharts.ru/rusradio/archive/03-11-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-11-10-dni_nochi",
            "label": "Русское радио: #9 · 2017-11-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-11-14",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 150,
        "shazamRank": 16,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-11-14-rozovoe",
            "label": "Shazam Россия: #16 · 2017-11-14",
            "url": "https://hotcharts.ru/shazam/archive/14-11-2017.htm",
            "kind": "Shazam",
            "rank": 16
          },
          {
            "id": "loveradio-2017-11-12-rozovoe",
            "label": "Love Radio: #1 · 2017-11-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-11-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-10-rozovoe",
            "label": "Европа Плюс: #8 · 2017-11-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "europaplus-2017-11-17-rozovoe",
            "label": "Европа Плюс: #8 · 2017-11-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 88,
        "shazamRank": 18,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-11-14-gipnozy",
            "label": "Shazam Россия: #18 · 2017-11-14",
            "url": "https://hotcharts.ru/shazam/archive/14-11-2017.htm",
            "kind": "Shazam",
            "rank": 18
          },
          {
            "id": "loveradio-2017-11-12-gipnozy",
            "label": "Love Radio: #2 · 2017-11-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-11-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 51,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-11-17-dni_nochi",
            "label": "Русское радио: #10 · 2017-11-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-11-10-dni_nochi",
            "label": "Русское радио: #9 · 2017-11-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-11-12-uleti",
            "label": "Love Radio: #9 · 2017-11-12",
            "url": "https://hotcharts.ru/loveradio/archive/12-11-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-10-uleti",
            "label": "Европа Плюс: #11 · 2017-11-10",
            "url": "https://hotcharts.ru/europaplus/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "europaplus-2017-11-17-uleti",
            "label": "Европа Плюс: #16 · 2017-11-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "rusradio-2017-11-17-uleti",
            "label": "Русское радио: #3 · 2017-11-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-11-10-uleti",
            "label": "Русское радио: #6 · 2017-11-10",
            "url": "https://hotcharts.ru/rusradio/archive/10-11-2017.htm",
            "kind": "радио",
            "rank": 6
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-11-21",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 153,
        "shazamRank": 15,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-11-21-rozovoe",
            "label": "Shazam Россия: #15 · 2017-11-21",
            "url": "https://hotcharts.ru/shazam/archive/21-11-2017.htm",
            "kind": "Shazam",
            "rank": 15
          },
          {
            "id": "loveradio-2017-11-19-rozovoe",
            "label": "Love Radio: #1 · 2017-11-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-11-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-24-rozovoe",
            "label": "Европа Плюс: #16 · 2017-11-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-11-17-rozovoe",
            "label": "Европа Плюс: #8 · 2017-11-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 79,
        "shazamRank": 21,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-11-21-gipnozy",
            "label": "Shazam Россия: #21 · 2017-11-21",
            "url": "https://hotcharts.ru/shazam/archive/21-11-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "loveradio-2017-11-19-gipnozy",
            "label": "Love Radio: #2 · 2017-11-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-11-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "Джиган",
        "title": "Дни и ночи",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 3,
        "sources": [
          {
            "id": "vk-2017-dni_nochi",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "rusradio-2017-11-17-dni_nochi",
            "label": "Русское радио: #10 · 2017-11-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "rusradio-2017-11-24-dni_nochi",
            "label": "Русское радио: #15 · 2017-11-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "yandex-2017-dni_nochi",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-11-19-uleti",
            "label": "Love Radio: #11 · 2017-11-19",
            "url": "https://hotcharts.ru/loveradio/archive/19-11-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-17-uleti",
            "label": "Европа Плюс: #16 · 2017-11-17",
            "url": "https://hotcharts.ru/europaplus/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-11-24-uleti",
            "label": "Европа Плюс: #8 · 2017-11-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "rusradio-2017-11-24-uleti",
            "label": "Русское радио: #1 · 2017-11-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-11-17-uleti",
            "label": "Русское радио: #3 · 2017-11-17",
            "url": "https://hotcharts.ru/rusradio/archive/17-11-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-11-28",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 141,
        "shazamRank": 19,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-11-28-rozovoe",
            "label": "Shazam Россия: #19 · 2017-11-28",
            "url": "https://hotcharts.ru/shazam/archive/28-11-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-11-26-rozovoe",
            "label": "Love Radio: #1 · 2017-11-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-11-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-11-24-rozovoe",
            "label": "Европа Плюс: #16 · 2017-11-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "europaplus-2017-12-01-rozovoe",
            "label": "Европа Плюс: #25 · 2017-12-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-12-2017.htm",
            "kind": "радио",
            "rank": 25
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 65,
        "shazamRank": 25,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-11-28-gipnozy",
            "label": "Shazam Россия: #25 · 2017-11-28",
            "url": "https://hotcharts.ru/shazam/archive/28-11-2017.htm",
            "kind": "Shazam",
            "rank": 25
          },
          {
            "id": "loveradio-2017-11-26-gipnozy",
            "label": "Love Radio: #4 · 2017-11-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-11-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-11-26-uleti",
            "label": "Love Radio: #10 · 2017-11-26",
            "url": "https://hotcharts.ru/loveradio/archive/26-11-2017.htm",
            "kind": "радио",
            "rank": 10
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-01-uleti",
            "label": "Европа Плюс: #15 · 2017-12-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-12-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "europaplus-2017-11-24-uleti",
            "label": "Европа Плюс: #8 · 2017-11-24",
            "url": "https://hotcharts.ru/europaplus/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 8
          },
          {
            "id": "rusradio-2017-11-24-uleti",
            "label": "Русское радио: #1 · 2017-11-24",
            "url": "https://hotcharts.ru/rusradio/archive/24-11-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-12-01-uleti",
            "label": "Русское радио: #2 · 2017-12-01",
            "url": "https://hotcharts.ru/rusradio/archive/01-12-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-12-05",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 165,
        "shazamRank": 11,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-12-05-rozovoe",
            "label": "Shazam Россия: #11 · 2017-12-05",
            "url": "https://hotcharts.ru/shazam/archive/05-12-2017.htm",
            "kind": "Shazam",
            "rank": 11
          },
          {
            "id": "loveradio-2017-12-03-rozovoe",
            "label": "Love Radio: #2 · 2017-12-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-12-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-01-rozovoe",
            "label": "Европа Плюс: #25 · 2017-12-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-12-2017.htm",
            "kind": "радио",
            "rank": 25
          },
          {
            "id": "europaplus-2017-12-08-rozovoe",
            "label": "Европа Плюс: #26 · 2017-12-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-12-2017.htm",
            "kind": "радио",
            "rank": 26
          },
          {
            "id": "record-2017-12-09-rozovoe",
            "label": "Радио Record: #30 · 2017-12-09",
            "url": "https://hotcharts.ru/record/archive/09-12-2017.htm",
            "kind": "радио",
            "rank": 30
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 80,
        "shazamRank": 20,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-12-05-gipnozy",
            "label": "Shazam Россия: #20 · 2017-12-05",
            "url": "https://hotcharts.ru/shazam/archive/05-12-2017.htm",
            "kind": "Shazam",
            "rank": 20
          },
          {
            "id": "loveradio-2017-12-03-gipnozy",
            "label": "Love Radio: #4 · 2017-12-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-12-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-12-03-uleti",
            "label": "Love Radio: #14 · 2017-12-03",
            "url": "https://hotcharts.ru/loveradio/archive/03-12-2017.htm",
            "kind": "радио",
            "rank": 14
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-08-uleti",
            "label": "Европа Плюс: #13 · 2017-12-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-12-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "europaplus-2017-12-01-uleti",
            "label": "Европа Плюс: #15 · 2017-12-01",
            "url": "https://hotcharts.ru/europaplus/archive/01-12-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "rusradio-2017-12-08-uleti",
            "label": "Русское радио: #1 · 2017-12-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-12-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-12-01-uleti",
            "label": "Русское радио: #2 · 2017-12-01",
            "url": "https://hotcharts.ru/rusradio/archive/01-12-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-12-12",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 153,
        "shazamRank": 15,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-12-12-rozovoe",
            "label": "Shazam Россия: #15 · 2017-12-12",
            "url": "https://hotcharts.ru/shazam/archive/12-12-2017.htm",
            "kind": "Shazam",
            "rank": 15
          },
          {
            "id": "loveradio-2017-12-10-rozovoe",
            "label": "Love Radio: #2 · 2017-12-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-12-2017.htm",
            "kind": "радио",
            "rank": 2
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-08-rozovoe",
            "label": "Европа Плюс: #26 · 2017-12-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-12-2017.htm",
            "kind": "радио",
            "rank": 26
          },
          {
            "id": "europaplus-2017-12-15-rozovoe",
            "label": "Европа Плюс: #26 · 2017-12-15",
            "url": "https://hotcharts.ru/europaplus/archive/15-12-2017.htm",
            "kind": "радио",
            "rank": 26
          },
          {
            "id": "record-2017-12-16-rozovoe",
            "label": "Радио Record: #28 · 2017-12-16",
            "url": "https://hotcharts.ru/record/archive/16-12-2017.htm",
            "kind": "радио",
            "rank": 28
          },
          {
            "id": "record-2017-12-09-rozovoe",
            "label": "Радио Record: #30 · 2017-12-09",
            "url": "https://hotcharts.ru/record/archive/09-12-2017.htm",
            "kind": "радио",
            "rank": 30
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 82,
        "shazamRank": 19,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-12-12-gipnozy",
            "label": "Shazam Россия: #19 · 2017-12-12",
            "url": "https://hotcharts.ru/shazam/archive/12-12-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-12-10-gipnozy",
            "label": "Love Radio: #5 · 2017-12-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-12-2017.htm",
            "kind": "радио",
            "rank": 5
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-12-10-uleti",
            "label": "Love Radio: #16 · 2017-12-10",
            "url": "https://hotcharts.ru/loveradio/archive/10-12-2017.htm",
            "kind": "радио",
            "rank": 16
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-08-uleti",
            "label": "Европа Плюс: #13 · 2017-12-08",
            "url": "https://hotcharts.ru/europaplus/archive/08-12-2017.htm",
            "kind": "радио",
            "rank": 13
          },
          {
            "id": "rusradio-2017-12-08-uleti",
            "label": "Русское радио: #1 · 2017-12-08",
            "url": "https://hotcharts.ru/rusradio/archive/08-12-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "rusradio-2017-12-15-uleti",
            "label": "Русское радио: #3 · 2017-12-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-12-2017.htm",
            "kind": "радио",
            "rank": 3
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-12-19",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 126,
        "shazamRank": 24,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-12-19-rozovoe",
            "label": "Shazam Россия: #24 · 2017-12-19",
            "url": "https://hotcharts.ru/shazam/archive/19-12-2017.htm",
            "kind": "Shazam",
            "rank": 24
          },
          {
            "id": "loveradio-2017-12-17-rozovoe",
            "label": "Love Radio: #1 · 2017-12-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-12-2017.htm",
            "kind": "радио",
            "rank": 1
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-22-rozovoe",
            "label": "Европа Плюс: #17 · 2017-12-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-12-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "europaplus-2017-12-15-rozovoe",
            "label": "Европа Плюс: #26 · 2017-12-15",
            "url": "https://hotcharts.ru/europaplus/archive/15-12-2017.htm",
            "kind": "радио",
            "rank": 26
          },
          {
            "id": "record-2017-12-16-rozovoe",
            "label": "Радио Record: #28 · 2017-12-16",
            "url": "https://hotcharts.ru/record/archive/16-12-2017.htm",
            "kind": "радио",
            "rank": 28
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 74,
        "shazamRank": 22,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-12-19-gipnozy",
            "label": "Shazam Россия: #22 · 2017-12-19",
            "url": "https://hotcharts.ru/shazam/archive/19-12-2017.htm",
            "kind": "Shazam",
            "rank": 22
          },
          {
            "id": "loveradio-2017-12-17-gipnozy",
            "label": "Love Radio: #4 · 2017-12-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-12-2017.htm",
            "kind": "радио",
            "rank": 4
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-12-17-uleti",
            "label": "Love Radio: #11 · 2017-12-17",
            "url": "https://hotcharts.ru/loveradio/archive/17-12-2017.htm",
            "kind": "радио",
            "rank": 11
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-22-uleti",
            "label": "Европа Плюс: #9 · 2017-12-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-12-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-12-15-uleti",
            "label": "Русское радио: #3 · 2017-12-15",
            "url": "https://hotcharts.ru/rusradio/archive/15-12-2017.htm",
            "kind": "радио",
            "rank": 3
          },
          {
            "id": "rusradio-2017-12-22-uleti",
            "label": "Русское радио: #6 · 2017-12-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-12-2017.htm",
            "kind": "радио",
            "rank": 6
          }
        ]
      }
    ]
  },
  {
    "chartDate": "2017-12-26",
    "candidates": [
      {
        "artist": "Элджей & Feduk",
        "title": "Розовое вино",
        "score": 135,
        "shazamRank": 19,
        "signalTypes": 5,
        "sources": [
          {
            "id": "shazam-2017-12-26-rozovoe",
            "label": "Shazam Россия: #19 · 2017-12-26",
            "url": "https://hotcharts.ru/shazam/archive/26-12-2017.htm",
            "kind": "Shazam",
            "rank": 19
          },
          {
            "id": "loveradio-2017-12-24-rozovoe",
            "label": "Love Radio: #4 · 2017-12-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-12-2017.htm",
            "kind": "радио",
            "rank": 4
          },
          {
            "id": "flow-2017-rozovoe",
            "label": "The Flow: редакционный топ-10 треков 2017",
            "url": "https://the-flow.ru/bestof2017/50-luchshih-trekov-2017-final",
            "kind": "редакционный список"
          },
          {
            "id": "vk-2017-rozovoe",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-22-rozovoe",
            "label": "Европа Плюс: #17 · 2017-12-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-12-2017.htm",
            "kind": "радио",
            "rank": 17
          },
          {
            "id": "yandex-2017-rozovoe",
            "label": "Яндекс Музыка: топ русскоязычных треков 2017",
            "url": "https://yandex.ru/company/news/2017-1206",
            "kind": "стриминг"
          }
        ]
      },
      {
        "artist": "Мальбэк & Сюзанна",
        "title": "Гипнозы",
        "score": 79,
        "shazamRank": 21,
        "signalTypes": 2,
        "sources": [
          {
            "id": "shazam-2017-12-26-gipnozy",
            "label": "Shazam Россия: #21 · 2017-12-26",
            "url": "https://hotcharts.ru/shazam/archive/26-12-2017.htm",
            "kind": "Shazam",
            "rank": 21
          },
          {
            "id": "loveradio-2017-12-24-gipnozy",
            "label": "Love Radio: #2 · 2017-12-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-12-2017.htm",
            "kind": "радио",
            "rank": 2
          }
        ]
      },
      {
        "artist": "T-Fest",
        "title": "Улети",
        "score": 50,
        "shazamRank": null,
        "signalTypes": 2,
        "sources": [
          {
            "id": "loveradio-2017-12-24-uleti",
            "label": "Love Radio: #15 · 2017-12-24",
            "url": "https://hotcharts.ru/loveradio/archive/24-12-2017.htm",
            "kind": "радио",
            "rank": 15
          },
          {
            "id": "vk-2017-uleti",
            "label": "VK Music Awards: топ-30 по прослушиваниям 2017",
            "url": "https://kanobu.ru/news/obyavlenyi-laureatyi-vkmusic-awards-top-30-samyih-populyarnyih-pesen-2017-goda-poversii-sotsseti-400541/",
            "kind": "соцсеть"
          },
          {
            "id": "europaplus-2017-12-22-uleti",
            "label": "Европа Плюс: #9 · 2017-12-22",
            "url": "https://hotcharts.ru/europaplus/archive/22-12-2017.htm",
            "kind": "радио",
            "rank": 9
          },
          {
            "id": "rusradio-2017-12-22-uleti",
            "label": "Русское радио: #6 · 2017-12-22",
            "url": "https://hotcharts.ru/rusradio/archive/22-12-2017.htm",
            "kind": "радио",
            "rank": 6
          },
          {
            "id": "rusradio-2017-12-29-uleti",
            "label": "Русское радио: #9 · 2017-12-29",
            "url": "https://hotcharts.ru/rusradio/archive/29-12-2017.htm",
            "kind": "радио",
            "rank": 9
          }
        ]
      }
    ]
  }
]
;
