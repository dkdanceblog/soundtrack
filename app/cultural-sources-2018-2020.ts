import { canonical, sourcePlatform, publicPlatforms, isEligibleRussianLanguageTrack } from "./evidence-policy";
import type { PilotCandidate, PilotSource, PilotWeek } from "./pilot-2017";

type RankedTrack = { title: string; rank: number };
type PublicEvidence = {
  title: string;
  chartYears: readonly number[];
  platform: "vk" | "yandex" | "apple" | "youtube" | "culture";
  label: string;
  url: string;
  rank?: number;
};

const VK_2018_URL = "https://www.sobaka.ru/entertainment/music/83827";
const VK_2019_URL = "https://www.vremyan.ru/news/soczset__vkontakte__nazvala_samye_populyarnye_treki_i_albomy_2019_goda.html";
const VK_2020_URL = "https://radiokp.ru/kultura/zvuki-karantina-vkontakte-nazvali-luchshie-treki-2020-goda_nid186033_au21005au";
const YOUTUBE_2019_URL = "https://meduza.io/shapito/2019/12/06/chinily-beslan-svadba-pewdiepie-artur-pirozhkov-youtube-nazval-samye-populyarnye-video-2019-goda";
const YOUTUBE_2020_URL = "https://fonmusic.ru/14388-itogi-goda-top-10-samykh-populyarnykh-klipov-v-rossiiskom-youtube/";
const APPLE_2020_URL = "https://www.rma.ru/news/58996/";
const APPLE_2021_URL = "https://www.iphones.ru/iNotes/apple-music-podvodit-itogi-v-rossii-samye-populyarnye-treki-i-albomy-za-2021-god-11-30-2021";
const APPLE_LATE_2020_ZIVERT_URL = "https://www.thevoicemag.ru/lifestyle/music/zivert-bet-rekordy-v-chartah-apple-music/";
const APPLE_LATE_2020_MEDLYAK_URL = "https://www.thevoicemag.ru/lifestyle/music/pevica-mari-kraymbreri-pokoryaet-apple-music/";
const VK_LATE_2020_SAD_URL = "https://www.facebook.com/ZionMusicOfficial/posts/3494611637262438/";
const VK_2021_URL = "https://www.kp.ru/daily/28368/4517868/";
const WEEKLY_LATE_2021_URL = "https://m.ok.ru/group/59377392287790/topic/154454846872366";
const WEEKLY_DECEMBER_2021_URL = "https://ok.ru/group/59377392287790/topic/154512104889134";
const VK_2022_URL = "https://the-flow.ru/news/vk-muzyka-itogi-2022";
const YANDEX_2022_URL = "https://info.sibnet.ru/article/630213/";
const WEEKLY_2022_URL = "https://prostars.org/news/2022/09/08/muzikal-nie-charti-za-631a03d4a7985/";
const WEEKLY_OCTOBER_2022_URL = "https://prostars.org/news/2022/10/06/muzikal-nie-charti-za-633edf638439e/";
const VK_2023_URL = "https://7days.ru/news/vk-muzyka-podvodit-itogi-2023-goda.htm";
const YANDEX_2023_URL = "https://the-flow.ru/news/yandeks-muzyka-itogi-2023";
const SPARKS_2023_URL = "https://omskzdes.ru/society/83584.html";
const QUEEN_2023_URL = "https://www.pravilamag.ru/news/culture-and-entertainment/31-08-2023/706013-macan-bushido-zho-i-anna-asti-yandeks-muzyka-nazvala-samyh-populyarnyh-ispolnitelei-etogo-leta/";
const REMEMBER_2023_URL = "https://music.apple.com/ru/playlist/топ-100-россии-2024/pl.67287edfa6ac4f5b8750d0b21f6aafa1";
const FAREWELL_2023_URL = "https://nn-afisha.ru/products/tri-dnya-dozhdya";
const YANDEX_2023_PLAYLIST_URL = "https://music.yandex.com/playlists/de06fcad-9dca-167b-9526-6a5b4c682f20";
const WINTER_HEART_2023_URL = "https://www.sports.ru/hockey/blogs/3201922.html";
const VK_2024_URL = "https://t-j.ru/news/vk-music-2024/";
const YANDEX_2024_URL = "https://www.sostav.ru/publication/yandeks-muzyka-podvela-itogi-goda-71756.html";
const PIYALA_URL = "https://daily.afisha.ru/news/82511-pesnya-aigel-pyyala-zanyala-pervye-mesta-v-globalnom-charte-shazam-vkontakte-i-yandeks-muzyki/";
const APSENT_URL = "https://meduza.io/news/2024/03/28/yandeks-muzyka-po-trebovaniyu-roskomnadzora-ogranichila-dostup-k-pesne-mozhno-ya-s-toboy-ona-vhodit-v-charty-vseh-rossiyskih-strimingovyh-servisov";
const SMOKE_URL = "https://el.kz/ru/kurnul-nu-vrode-ne-navoz-o-chyom-zapreschyonnye-v-rf-pesni-lyutogo-deda-iz-kostanaya-itsyka-tsypera_106399/";
const FLOWERS_URL = "https://ru.wikipedia.org/wiki/Lotus_Music";
const VK_2025_URL = "https://www.kp.ru/daily/27748/5176405/";
const YANDEX_2025_URL = "https://the-flow.ru/news/itogi-yandeksa-2025";
const KITCHENS_2025_URL = "https://nsn.fm/music/vanya-dmitrienko-stal-artistom-goda-po-versii-yandeks-muzyki";
const LEGACY_2025_URL = "https://tass.ru/kultura/25212803";
const WAVE_2025_URL = "https://the-flow.ru/videos/tima-ishchet-svet-volna";
const ICEGERGERT_2025_URL = "https://newradio.ru/news/icegergert-poluchil-pervuyu-nagradu-ot-vk-muzyuki-za-samyuy-stremitelnyuy-vzlet";
const VK_RECORDS_SKY_URL = "https://www.instagram.com/p/DLSHAdxoyGa/";
const VK_RECORDS_JORDAN_URL = "https://www.instagram.com/reel/DNqaxgYozqY/";
const CREDO_2018_URL = "https://www.youtube.com/watch?v=O2uikItEY5k";
const CHILDHOOD_2018_URL = "https://www.youtube.com/watch?v=oewANcF6hVY";
const AMIRCHIK_LOVE_URL = "https://ru.wikipedia.org/wiki/Эта_любовь_(сингл)";

const VK_STREAMING: Readonly<Record<number, readonly RankedTrack[]>> = {
  2018: [
    { title: "Медуза", rank: 2 },
    { title: "Минимал", rank: 3 },
    { title: "Пустите меня на танцпол", rank: 4 },
    { title: "Медина", rank: 7 },
    { title: "Ноты", rank: 8 },
    { title: "Под фонарём", rank: 9 },
    { title: "Запах моей женщины", rank: 10 },
    { title: "Мокрые кроссы", rank: 11 },
    { title: "Я хочу", rank: 14 },
    { title: "Дым", rank: 16 },
    { title: "Малиновый свет", rank: 17 },
    { title: "ДНК", rank: 18 },
    { title: "Розовое вино", rank: 20 },
    { title: "Каждый раз", rank: 21 },
    { title: "Плакала", rank: 30 },
  ],
  2019: [
    { title: "Грустный дэнс", rank: 1 },
    { title: "Витаминка", rank: 2 },
    { title: "Девочка-война", rank: 3 },
    { title: "Life", rank: 5 },
    { title: "До встречи на танцполе", rank: 6 },
    { title: "Зацепила", rank: 8 },
    { title: "Один", rank: 9 },
    { title: "Незабудка", rank: 10 },
    { title: "Прятки", rank: 14 },
    { title: "Аллея", rank: 16 },
    { title: "Гюрза", rank: 27 },
    { title: "Сомбреро", rank: 29 },
  ],
  2020: [
    { title: "Луна не знает пути", rank: 1 },
    { title: "Сияй", rank: 4 },
    { title: "X.O", rank: 5 },
    { title: "Девочка танцуй", rank: 7 },
    { title: "Поболело и прошло", rank: 8 },
    { title: "Двигаться", rank: 9 },
    { title: "Юность", rank: 10 },
  ],
};

const YOUTUBE_VIDEO: Readonly<Record<number, readonly RankedTrack[]>> = {
  2019: [
    { title: "Грустный дэнс", rank: 3 },
    { title: "Витаминка", rank: 6 },
  ],
  2020: [
    { title: "Краш", rank: 3 },
    { title: "Покинула чат", rank: 4 },
    { title: "Юность", rank: 8 },
  ],
};

const APPLE_STREAMING: readonly { sourceYear: number; chartYears: readonly number[]; tracks: readonly RankedTrack[] }[] = [
  {
    sourceYear: 2020,
    chartYears: [2019, 2020],
    tracks: [
      { title: "Комета", rank: 1 },
      { title: "Любимка", rank: 2 },
      { title: "Увезите меня на Дип-хаус", rank: 4 },
      { title: "Девочка танцуй", rank: 8 },
      { title: "X.O", rank: 9 },
      { title: "Прятки", rank: 10 },
    ],
  },
  {
    sourceYear: 2021,
    chartYears: [2020],
    tracks: [
      { title: "Снова я напиваюсь", rank: 2 },
      { title: "Сияй", rank: 4 },
    ],
  },
];

const LATE_2020_STREAMING: readonly (RankedTrack & { url: string })[] = [
  { title: "Многоточия", rank: 3, url: APPLE_LATE_2020_ZIVERT_URL },
  { title: "Медляк", rank: 2, url: APPLE_LATE_2020_MEDLYAK_URL },
];

const PUBLIC_EVIDENCE: readonly PublicEvidence[] = [
  { title: "Кредо", chartYears: [2018], platform: "youtube", label: "YouTube: официальный lyric video, более 8 млн просмотров", url: CREDO_2018_URL },
  { title: "Детство", chartYears: [2018], platform: "youtube", label: "YouTube: официальный клип на хит 2018 года", url: CHILDHOOD_2018_URL },
  ...[
    ["Птичка", 1], ["Горький вкус", 2], ["Нету интереса", 3], ["Патрон", 4],
    ["Cristal & МОЁТ", 5], ["Пушка", 6], ["Ягода малинка", 7], ["Венера-Юпитер", 8],
    ["Пополам", 10], ["Сон", 11], ["Я в моменте", 14], ["Истеричка", 15],
    ["Ты горишь как огонь", 17], ["Ратата", 29], ["НЕ ЖАЛЬ", 30],
  ].map(([title, rank]) => ({
    title: String(title), chartYears: [2021], platform: "vk" as const,
    label: `VK Музыка: #${rank} по прослушиваниям за 2021`, url: VK_2021_URL, rank: Number(rank),
  })),
  ...[
    ["Солнце Монако", 1], ["Федерико Феллини", 2], ["Amore Море, Goodbye", 6],
    ["На часах ноль-ноль", 14], ["Стеклянная", 19],
  ].map(([title, rank]) => ({
    title: String(title), chartYears: [2021], platform: "yandex" as const,
    label: `Яндекс Музыка: #${rank} в датированном чарте декабря 2021`, url: WEEKLY_DECEMBER_2021_URL, rank: Number(rank),
  })),
  ...[
    ["Диалоги тет-а-тет", 13], ["Братик", 15], ["Малиновая Лада", 17],
  ].map(([title, rank]) => ({
    title: String(title), chartYears: [2021], platform: "vk" as const,
    label: `VK Музыка: #${rank} в датированном чарте ноября 2021`, url: WEEKLY_LATE_2021_URL, rank: Number(rank),
  })),
  ...[
    ["Гармония", 1], ["По барам", 2], ["Хобби", 3], ["Как ты там", 4], ["Феникс", 5],
    ["Пташка", 7], ["Титры", 8],
  ].map(([title, rank]) => ({
    title: String(title), chartYears: [2022], platform: "yandex" as const,
    label: `Яндекс Музыка: #${rank} по прослушиваниям за 2022`, url: YANDEX_2022_URL, rank: Number(rank),
  })),
  ...[
    ["Пташка", 3], ["Хобби", 4], ["Стрелы", 6], ["Малиновая Лада", 7],
    ["Как ты там", 12], ["Повело", 13], ["Титры", 15], ["По-другому", 18],
  ].map(([title, rank]) => ({
    title: String(title), chartYears: [2022], platform: "yandex" as const,
    label: `Яндекс Музыка: #${rank} в датированном чарте сентября 2022`, url: WEEKLY_2022_URL, rank: Number(rank),
  })),
  ...[
    ["Позвони", 1], ["Стрелы", 2], ["Движ", 6], ["Плакал Голливуд", 8], ["Повело", 9],
  ].map(([title, rank]) => ({
    title: String(title), chartYears: [2022], platform: "apple" as const,
    label: `Apple Music Россия: #${rank} в датированном чарте октября 2022`, url: WEEKLY_OCTOBER_2022_URL, rank: Number(rank),
  })),
  { title: "Стрелы", chartYears: [2022, 2023], platform: "vk", label: "VK Музыка: один из главных треков 2022", url: VK_2022_URL },
  { title: "Платина", chartYears: [2022], platform: "vk", label: "VK Музыка: фит года 2022", url: VK_2022_URL },
  { title: "За деньги да", chartYears: [2023], platform: "vk", label: "VK Музыка: трек года 2023 · более 140 млн прослушиваний", url: VK_2023_URL, rank: 1 },
  { title: "Где прошла ты", chartYears: [2023], platform: "vk", label: "VK Музыка: фит года 2023 · более 120 млн прослушиваний", url: VK_2023_URL },
  { title: "Танцы", chartYears: [2023], platform: "vk", label: "VK Музыка: трек группы-прорыва 2023", url: VK_2023_URL },
  { title: "Плохая девочка", chartYears: [2023], platform: "vk", label: "VK Музыка: ремикс года 2023 · более 70 млн прослушиваний", url: VK_2023_URL },
  { title: "Плохая девочка", chartYears: [2023], platform: "yandex", label: "Яндекс Музыка: трек года 2023", url: YANDEX_2023_URL, rank: 1 },
  { title: "Ножевой", chartYears: [2023], platform: "yandex", label: "Яндекс Музыка: главный взлёт 2023 в Моей волне", url: YANDEX_2023_URL },
  { title: "Давай сбежим (Искорки)", chartYears: [2023, 2024], platform: "youtube", label: "YouTube: более 27 млн просмотров к декабрю 2023; хит VK и Яндекс Музыки", url: SPARKS_2023_URL },
  { title: "Царица", chartYears: [2023], platform: "yandex", label: "Яндекс Музыка: самый популярный релиз лета 2023", url: QUEEN_2023_URL, rank: 1 },
  { title: "Не вспоминай", chartYears: [2023], platform: "apple", label: "Apple Music Россия: #27 по итогам 2024", url: REMEMBER_2023_URL, rank: 27 },
  { title: "Прощание", chartYears: [2023, 2024], platform: "apple", label: "Apple Music: топ-10; Яндекс Музыка и VK: топ-20", url: FAREWELL_2023_URL, rank: 10 },
  { title: "По весне", chartYears: [2023], platform: "yandex", label: "Яндекс Музыка: включена в официальный итоговый плейлист 2023", url: YANDEX_2023_PLAYLIST_URL },
  { title: "Зима в сердце", chartYears: [2023], platform: "culture", label: "Вирусный культурный хит осени 2023: один из главных мемов спортивного сезона", url: WINTER_HEART_2023_URL },
  { title: "Эта любовь", chartYears: [2023], platform: "youtube", label: "YouTube: клип вошёл в Top 100 и набрал более 64 млн просмотров", url: AMIRCHIK_LOVE_URL },
  { title: "Пыяла", chartYears: [2023, 2024], platform: "vk", label: "VK и Яндекс Музыка: #1; более 140 тыс. роликов TikTok", url: PIYALA_URL, rank: 1 },
  { title: "Можно я с тобой", chartYears: [2024], platform: "yandex", label: "Яндекс Музыка: #2; VK Музыка: #4; YouTube Россия: #6", url: APSENT_URL, rank: 2 },
  { title: "Дымок", chartYears: [2024], platform: "vk", label: "VK Музыка и Apple Music Россия: #1", url: SMOKE_URL, rank: 1 },
  { title: "Godzilla", chartYears: [2024], platform: "yandex", label: "Яндекс Музыка: хит фрешмена года 2024", url: YANDEX_2024_URL },
  { title: "Харизма", chartYears: [2024], platform: "yandex", label: "Яндекс Музыка: главный взлёт 2024 в Моей волне", url: YANDEX_2024_URL },
  { title: "Поезда", chartYears: [2024], platform: "yandex", label: "Яндекс Музыка: трек года 2024", url: YANDEX_2024_URL, rank: 1 },
  { title: "Асфальт", chartYears: [2024, 2025], platform: "yandex", label: "Яндекс Музыка: 80 дней на первом месте чарта", url: YANDEX_2024_URL, rank: 1 },
  { title: "Дорога дальняя", chartYears: [2024], platform: "vk", label: "VK Музыка: трек года 2024", url: VK_2024_URL, rank: 1 },
  { title: "Матушка", chartYears: [2024], platform: "vk", label: "VK Музыка: прорыв года 2024", url: VK_2024_URL },
  { title: "Горы (Remix)", chartYears: [2024], platform: "vk", label: "VK Музыка: ремикс года 2024", url: VK_2024_URL },
  { title: "Дарите женщинам цветы", chartYears: [2024], platform: "youtube", label: "Вирусный хит: более 167 млн прослушиваний на YouTube", url: FLOWERS_URL },
  { title: "Худи", chartYears: [2024, 2025], platform: "vk", label: "VK Музыка: самый прослушиваемый трек 2025", url: VK_2025_URL, rank: 1 },
  { title: "Наследство", chartYears: [2025], platform: "vk", label: "VK Музыка: главный хит лета 2025 и #1 общего чарта", url: LEGACY_2025_URL, rank: 1 },
  { title: "Пахнешь как", chartYears: [2025], platform: "vk", label: "VK Музыка: фит года 2025", url: VK_2025_URL },
  { title: "Базовый минимум", chartYears: [2025], platform: "vk", label: "VK Музыка: один из главных хитов лета и итогового топ-50", url: VK_2025_URL },
  { title: "Быть счастливой", chartYears: [2025], platform: "vk", label: "VK Музыка: все треки альбома артистки года вошли в чарт", url: VK_2025_URL },
  { title: "Кухни", chartYears: [2025], platform: "yandex", label: "Яндекс Музыка: 85 дней в топе чарта", url: KITCHENS_2025_URL },
  { title: "Шёлк", chartYears: [2025], platform: "yandex", label: "Яндекс Музыка: хит артиста года 2025", url: YANDEX_2025_URL },
  { title: "Волна", chartYears: [2025], platform: "vk", label: "VK и Яндекс Музыка: устойчивый вирусный хит начала 2025", url: WAVE_2025_URL },
  { title: "Гектор", chartYears: [2025], platform: "vk", label: "VK Музыка: несколько недель в чарте и топ-5 поисковых запросов", url: ICEGERGERT_2025_URL },
  { title: "С неба", chartYears: [2025], platform: "vk", label: "VK Музыка: #10 в датированном чарте июня 2025", url: VK_RECORDS_SKY_URL, rank: 10 },
  { title: "Иордан", chartYears: [2025], platform: "vk", label: "VK Музыка: более семи месяцев в чартах", url: VK_RECORDS_JORDAN_URL },
];

// Explicit recording identities: a shared title is not evidence of the same song.
const RECORDING_IDENTITIES = new Set(
[
  "Медуза|MATRANG",
  "Минимал|Элджей",
  "Пустите меня на танцпол|HammAli & Navai",
  "Медина|Jah Khalib",
  "Ноты|HammAli & Navai",
  "Под фонарём|RASA",
  "Запах моей женщины|Адлер Коцба & Timran",
  "Мокрые кроссы|Тима Белорусских",
  "Я хочу|Grivina",
  "Дым|Леша Свик",
  "Малиновый свет|Леша Свик",
  "ДНК|Джиган Feat. Артем Качер",
  "Розовое вино|Элджей & Feduk",
  "Каждый раз|Монеточка",
  "Кредо|GAYAZOV$ BROTHER$",
  "Детство|Rauf & Faik",
  "Грустный дэнс|Artik & Asti Feat. Артем Качер",
  "Витаминка|Тима Белорусских",
  "Девочка-война|HammAli & Navai",
  "Life|Zivert",
  "До встречи на танцполе|GAYAZOV$ BROTHER$",
  "Зацепила|Артур Пирожков",
  "Один|VERBEE",
  "Незабудка|Тима Белорусских",
  "Прятки|HammAli & Navai",
  "Аллея|JONY",
  "Гюрза|LIRANOV",
  "Сомбреро|Gidayyat & Hovannii",
  "Луна не знает пути|Тайпан & Agunda",
  "Сияй|Ramil'",
  "X.O|The Limba & Andro",
  "Девочка танцуй|Artik & Asti",
  "Поболело и прошло|HENSY",
  "Двигаться|Raim",
  "Юность|Dabro",
  "Краш|Клава Кока & NILETTO",
  "Краш|Клава Кока & НИЛЕТТО",
  "Покинула чат|Клава Кока",
  "Комета|JONY",
  "Любимка|NILETTO",
  "Увезите меня на дип-хаус|GAYAZOV$ BROTHER$",
  "Снова я напиваюсь|SLAVA MARLOW",
  "Многоточия|Zivert",
  "Медляк|HammAli & Мари Краймбрери",
  "Если тебе будет грустно|Rauf & Faik & NILETTO",
  "Птичка|HammAli & Navai",
  "Горький вкус|Султан Лагучев",
  "Нету интереса|10AGE",
  "Патрон|Miyagi & Andy Panda",
  "Cristal & МОЁТ|MORGENSHTERN",
  "Пушка|10AGE",
  "Ягода малинка|Хабиб",
  "Венера-Юпитер|Ваня Дмитриенко",
  "Пополам|BRANYA, MACAN",
  "Пополам|MACAN Feat. BRANYA",
  "Сон|Ramil'",
  "Я в моменте|Джарахов",
  "Истеричка|Artik & Asti",
  "Ты горишь как огонь|SLAVA MARLOW",
  "Ратата|Konfuz",
  "НЕ ЖАЛЬ|104 Feat. Miyagi & Скриптонит",
  "Солнце Монако|Люся Чеботина",
  "Федерико Феллини|Galibri & Mavik",
  "Amore Море, Goodbye|Filatov & Karas & Мумий Тролль",
  "На часах ноль-ноль|Dabro",
  "Стеклянная|GUMA",
  "Диалоги тет-а-тет|ALEKS ATAMAN & Finik.Finya",
  "Братик|BITTUEV",
  "Малиновая Лада|GAYAZOV$ BROTHER$",
  "Гармония|Artik & Asti",
  "По барам|ANNA ASTI",
  "Хобби|ANNA ASTI & Филипп Киркоров",
  "Как ты там|Kamazz",
  "Феникс|ANNA ASTI",
  "Пташка|Моя Мишель & Dose",
  "Титры|JONY",
  "Стрелы|Markul & Тося Чайкина",
  "Повело|ANNA ASTI",
  "По-другому|Лолита & Коста Лакоста",
  "Позвони|DJ SMASH & NIVESTA",
  "Движ|Filatov & Karas",
  "Плакал Голливуд|Люся Чеботина",
  "Платина|Jakomo & A.V.G",
  "Платина|Jakomo & AVG",
  "За деньги да|INSTASAMKA",
  "Где прошла ты|Кравц & Гио ПиКа",
  "Танцы|NLO",
  "Плохая девочка|Винтаж, ТРАВМА, SKIDRI & DVRKLXGHT",
  "Ножевой|A.V.G & Tatar",
  "Давай сбежим (Искорки)|5UTRA",
  "Царица|ANNA ASTI",
  "Не вспоминай|NILETTO, Олег Майами & Леша Свик",
  "Прощание|Три дня дождя & MONA",
  "По весне|Jakone & SCIRENA",
  "Зима в сердце|Моя Мишель",
  "Эта любовь|Amirchik",
  "Пыяла|АИГЕЛ",
  "Можно я с тобой|AP$ENT",
  "Дымок|Ицык Цыпер",
  "Godzilla|Bearwolf",
  "Харизма|Wallem",
  "Поезда|Женя Трофимов & Комната культуры",
  "Асфальт|Jakone & Kiliana",
  "Дорога дальняя|Jakone",
  "Матушка|Татьяна Куртукова",
  "Горы (Remix)|BLIZKEY",
  "Дарите женщинам цветы|Jazzdauren",
  "Худи|Джиган, Artik & Asti & NILETTO",
  "Наследство|Icegergert & SKY RAE",
  "Пахнешь как|SOLIDNAYA & SAKXRA",
  "Базовый минимум|SABI & MIA BOYKA",
  "Быть счастливой|Artik & Asti",
  "Кухни|Бонд с кнопкой",
  "Шёлк|Ваня Дмитриенко",
  "Волна|тима ищет свет",
  "Гектор|Icegergert",
  "С неба|ELMAN",
  "Иордан|MONA"
].map((entry) => entry.split("|").map(canonical).join("|")),
);

const TITLE_ALIASES: Record<string, string> = {
  [canonical("Можно Я С Тобой (Can I Come With You)")]: "Можно я с тобой",
  [canonical("Дымок (feat. Игорь Цыба)")]: "Дымок",
  [canonical("С неба (feat. TRIDA)")]: "С неба",
};

const DISPLAY_IDENTITIES = new Map<string, { title: string; artist: string }>([
  ["Краш|Клава Кока & НИЛЕТТО", { title: "Краш", artist: "Клава Кока & NILETTO" }],
  ["Пополам|MACAN Feat. BRANYA", { title: "Пополам", artist: "BRANYA, MACAN" }],
  ["Платина|Jakomo & AVG", { title: "Платина", artist: "Jakomo & A.V.G" }],
].map(([identity, display]) => {
  const [title, artist] = identity.split("|");
  return [`${canonical(title)}|${canonical(artist)}`, display] as const;
}));

function normalizeModernIdentity(title: string, artist: string) {
  const aliasedTitle = TITLE_ALIASES[canonical(title)] ?? title;
  return DISPLAY_IDENTITIES.get(`${canonical(aliasedTitle)}|${canonical(artist)}`)
    ?? { title: aliasedTitle, artist };
}

export function extraSources(year: number, title: string, artist: string): PilotSource[] {
  const normalizedTitle = canonical(TITLE_ALIASES[canonical(title)] ?? title);
  if (!RECORDING_IDENTITIES.has(`${normalizedTitle}|${canonical(artist)}`)) return [];
  const sources: PilotSource[] = [];
  const vk = VK_STREAMING[year]?.find((track) => canonical(track.title) === normalizedTitle);
  if (vk) {
    sources.push({
      id: `vk-boom-${year}-${vk.rank}-${normalizedTitle.replace(/ /g, "-")}`,
      label: `VK Music и BOOM: #${vk.rank} по прослушиваниям за ${year}`,
      url: year === 2018 ? VK_2018_URL : year === 2019 ? VK_2019_URL : VK_2020_URL,
      kind: "стриминг",
      rank: vk.rank,
    });
  }
  const youtube = YOUTUBE_VIDEO[year]?.find((track) => canonical(track.title) === normalizedTitle);
  if (youtube) {
    sources.push({
      id: `youtube-${year}-${youtube.rank}-${normalizedTitle.replace(/ /g, "-")}`,
      label: `YouTube Россия: #${youtube.rank} среди музыкальных видео ${year}`,
      url: year === 2019 ? YOUTUBE_2019_URL : YOUTUBE_2020_URL,
      kind: "соцсеть",
      rank: youtube.rank,
    });
  }
  for (const ranking of APPLE_STREAMING.filter((item) => item.chartYears.includes(year))) {
    const apple = ranking.tracks.find((track) => canonical(track.title) === normalizedTitle);
    if (!apple) continue;
    sources.push({
      id: `apple-music-${ranking.sourceYear}-${apple.rank}-${normalizedTitle.replace(/ /g, "-")}`,
      label: `Apple Music Россия: #${apple.rank} по итогам ${ranking.sourceYear}`,
      url: ranking.sourceYear === 2020 ? APPLE_2020_URL : APPLE_2021_URL,
      kind: "стриминг",
      rank: apple.rank,
    });
  }
  if (year === 2020) {
    const lateApple = LATE_2020_STREAMING.find((track) => canonical(track.title) === normalizedTitle);
    if (lateApple) {
      sources.push({
        id: `apple-music-late-2020-${lateApple.rank}-${normalizedTitle.replace(/ /g, "-")}`,
        label: `Apple Music Россия: #${lateApple.rank} в датированном чарте конца 2020`,
        url: lateApple.url,
        kind: "стриминг",
        rank: lateApple.rank,
      });
    }
    if (normalizedTitle === canonical("Если тебе будет грустно")) {
      sources.push({
        id: "vk-live-2020-4-esli-tebe-budet-grustno",
        label: "ВКонтакте: #4 в датированном чарте осени 2020",
        url: VK_LATE_2020_SAD_URL,
        kind: "стриминг",
        rank: 4,
      });
    }
  }
  for (const evidence of PUBLIC_EVIDENCE.filter((item) => item.chartYears.includes(year) && canonical(item.title) === normalizedTitle)) {
    sources.push({
      id: `${evidence.platform}-culture-${year}-${evidence.rank ?? "award"}-${normalizedTitle.replace(/ /g, "-")}`,
      label: evidence.label,
      url: evidence.url,
      kind: evidence.platform === "culture"
        ? "культурный след"
        : evidence.platform === "vk" || evidence.platform === "youtube"
          ? "соцсеть"
          : "стриминг",
      rank: evidence.rank,
    });
  }
  return sources;
}

export function culturalScore(candidate: PilotCandidate, sources: readonly PilotSource[]) {
  const weeklyDiscovery = candidate.shazamRank == null ? 0 : Math.max(5, 110 - candidate.shazamRank * 2.4);
  const audience = publicPlatforms(sources).size;
  const culture = sources.some((source) => sourcePlatform(source) === "culture");
  const radio = sources.some((source) => sourcePlatform(source) === "radio");
  // Annual rank establishes context; it cannot decide the exact week of a peak.
  return Math.round(weeklyDiscovery + Math.min(audience, 3) * 24 + (culture ? 12 : 0) + (radio ? 4 : 0));
}

function calibrateCandidate(year: number, candidate: PilotCandidate): PilotCandidate {
  const identity = normalizeModernIdentity(candidate.title, candidate.artist);
  // Culture sources in the generated chart were matched by title only. Rebuild
  // them against the explicit title + artist recording identity below so that
  // a demo, remix or cover never inherits evidence for another recording.
  const trustedSources = candidate.sources.filter((source) => !source.id.startsWith("culture-"));
  const normalizedCandidate = { ...candidate, ...identity, sources: trustedSources };
  const additions = extraSources(year, identity.title, identity.artist).filter(
    (source) => !trustedSources.some((existing) => existing.id === source.id),
  );
  const sources = [...trustedSources, ...additions];
  const platforms = new Set(sources.map(sourcePlatform));
  return {
    ...normalizedCandidate,
    sources,
    score: culturalScore(normalizedCandidate, sources),
    signalTypes: platforms.size,
  };
}

function hasIndependentPublicSignal(candidate: PilotCandidate) {
  return publicPlatforms(candidate.sources).size > 0;
}

export function calibrateModernCharts(dataset: readonly PilotWeek[]): readonly PilotWeek[] {
  return dataset.map((week) => {
    const year = Number(week.chartDate.slice(0, 4));
    if (year < 2018 || year > 2025) return week;
    const calibrated = week.candidates
      .filter((candidate) => isEligibleRussianLanguageTrack(candidate.title, candidate.artist))
      .map((candidate) => calibrateCandidate(year, candidate))
      .filter(hasIndependentPublicSignal)
      .sort((left, right) => right.score - left.score)
      .slice(0, 5);
    return { chartDate: week.chartDate, candidates: calibrated };
  });
}

export const CULTURAL_AUDIT_YEAR_COUNT = 8;
export const CULTURAL_SOURCE_SERIES_COUNT = 7;
