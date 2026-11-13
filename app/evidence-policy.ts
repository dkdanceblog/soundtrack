import type { PilotSource } from "./pilot-2017";

export function canonical(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase("ru-RU").replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

// Reposts of one measurement do not become independent evidence.
export function sourcePlatform(source: PilotSource): string {
  const label = source.label.toLocaleLowerCase("ru-RU");
  if (source.kind === "Shazam" || source.kind === "годовая устойчивость") return "shazam";
  if (source.kind === "радио") return "radio";
  if (/\bvk\b|вконтакте|boom/.test(label) || source.id.startsWith("vk-")) return "vk";
  if (/youtube/.test(label) || source.id.startsWith("youtube-")) return "youtube";
  if (/apple music|itunes/.test(label) || source.id.startsWith("apple-")) return "apple";
  if (/яндекс музык/.test(label) || source.id.startsWith("yandex-")) return "yandex";
  if (source.kind === "цифровые продажи") return "digital-sales";
  if (/читательский|голосование|звонки|слушательск/.test(source.kind)) return "audience-poll";
  if (source.kind === "культурный след") return "culture";
  if (source.kind === "стриминг") return "streaming";
  if (source.kind === "соцсеть") return "social";
  return "archive";
}

const PUBLIC_PLATFORMS = new Set(["vk", "youtube", "apple", "yandex", "digital-sales", "audience-poll", "streaming", "social"]);
export function publicPlatforms(sources: readonly PilotSource[]) {
  return new Set(sources.map(sourcePlatform).filter((platform) => PUBLIC_PLATFORMS.has(platform)));
}

// Periods for which no all-Union monthly song chart was published, so a missing
// listener measurement is a fact of the era, not a gap in this project.
// Source: S. Sychev, «Хит-парады в СССР» (ridero.ru/books/khit-parady_v_sssr_1/freeText/):
// the first «Звуковая дорожка» song chart (MK) covers September 1977 (issue 15.10.1977);
// the reader chart ran until February 1982, the column was closed, the 1984 expert poll
// led to its suppression, and the song chart returned with September 1985 (issue 17.10.1985).
const NO_CHART_ERAS: readonly { from: string; to: string; label: string; detail: string }[] = [
  {
    from: "1970-01-01", to: "1977-08-31",
    label: "Хит-парадов в эти годы не публиковали",
    detail: "До осени 1977 года в СССР не было помесячных песенных хит-парадов: первый читательский чарт «Звуковой дорожки» «МК» вышел 15 октября 1977 года. Поэтому массовость песни измерить нечем. Песня подтверждена датированным источником своего месяца: журналом, эфиром, концертом или релизом.",
  },
  {
    from: "1982-03-01", to: "1985-08-31",
    label: "Хит-парадов в эти годы не публиковали",
    detail: "С марта 1982 по август 1985 года общесоюзного песенного хит-парада не выходило: рубрику «Звуковая дорожка» «МК» закрыли после февраля 1982 года, а после опроса 1984 года разгромили. Чарт вернулся только с сентября 1985 года. Поэтому массовость песни измерить нечем. Песня подтверждена датированным источником своего месяца: журналом, эфиром, концертом или релизом.",
  },
];

export function noChartEra(date: string | undefined) {
  if (!date) return null;
  return NO_CHART_ERAS.find((era) => date >= era.from && date <= era.to) ?? null;
}

export function assessPopularity(sources: readonly PilotSource[]) {
  const count = publicPlatforms(sources).size;
  const hasDatedChart = sources.some((source) => source.kind === "Shazam" || source.kind === "цифровые продажи" || source.kind === "радио" || source.kind === "датированный стриминговый чарт");
  if (count >= 2) return { label: "Датированный чарт и несколько площадок", detail: `${hasDatedChart ? "Позиция привязана к выпуску чарта; " : ""}популярность независимо подтверждают разные слушательские площадки. Годовые итоги не считаются доказательством пика в выбранный день.`, level: "supported" };
  if (count === 1) return { label: hasDatedChart ? "Датированный чарт и одна площадка" : "Есть слушательское подтверждение", detail: `${hasDatedChart ? "Позиция привязана к выпуску чарта; " : ""}масштаб популярности подтверждает одна слушательская площадка или опрос. Дополнительный независимый источник повысит уверенность.`, level: "partial" };
  if (sources.some((source) => sourcePlatform(source) === "culture")) return { label: "Есть культурный резонанс", detail: "Сохранилось описание общественного отклика. Данные о массовом прослушивании ещё уточняются.", level: "partial" };
  return { label: "Популярность требует перепроверки", detail: "Источник подтверждает чарт, эфир, релиз или награду. Этого недостаточно, чтобы уверенно назвать песню массовым хитом.", level: "review" };
}

// Explicit recording identities: Cyrillic titles alone do not prove the language.
// This registry is intentionally partial; remaining Cyrillic records need review.
const LATIN_RUSSIAN = new Set([
  "zivert|gaz", "zivert|life", "gazirovka|black", "the limba andro|x o", "bearwolf|godzilla",
  "ленинград|www", "дискотека авария|disco superstar",
  "вячеслав петкун александр голубев и антон макарский|belle",
]);
const EXCLUDED_RECORDINGS = new Set([
  "kazka|плакала", // Ukrainian original.
  "виа цицинатела|жужуна цвима", // Russian version and claimed January issue are unconfirmed.
  "роза рымбаева|алия", // Kazakh recording; Russian version is not established by these sources.
  "аигел|пыяла", // Tatar original; excluded from a Russian-language catalogue.
  // Instrumental soundtrack: https://notes.tarakanov.net/katalog/kompozitsii/moi-laskovii-i-nezhnii-zveri/
  "евгений дога|вальс из фильма мой ласковый и нежный зверь",
]);
export function isEligibleRussianLanguageTrack(title: string, artist: string) {
  const identity = `${canonical(artist)}|${canonical(title)}`;
  if (EXCLUDED_RECORDINGS.has(identity)) return false;
  // The 1977 chart conflates Latvian and later Russian recordings under a translated title.
  // Do not infer a Russian recording from that combined artist credit.
  // https://history.retroportal.ru/vstrecha_s_pesnej_0998.html distinguishes the two recordings.
  if (canonical(title) === "последний лист"
    && /бумбиере|лапч[её]нок|вилцане|гринберг/.test(canonical(artist))) return false;
  return /[А-Яа-яЁё]/.test(title) || LATIN_RUSSIAN.has(identity);
}
