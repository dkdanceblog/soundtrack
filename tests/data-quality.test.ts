import assert from "node:assert/strict";
import test from "node:test";
import { getBirthdayHit } from "../app/hits";
import { isSupportedDate } from "../app/date-policy";
import { extraSources, culturalScore } from "../app/cultural-sources-2018-2020";
import { canonical, publicPlatforms, isEligibleRussianLanguageTrack } from "../app/evidence-policy";
import { HISTORICAL_BROADCASTS_1970_2003 } from "../app/historical-broadcasts-1986-1987";

test("impossible, future and out-of-range dates cannot produce a result", () => {
  for (const date of ["1969-12-31", "2023-02-29", "2024-02-30", "2026-09-10", "2024-13-01", "invalid"]) {
    assert.equal(getBirthdayHit(date, "2026-09-09"), null, date);
  }
  assert.equal(isSupportedDate("2024-02-29", "2026-09-09"), true);
  assert.ok(getBirthdayHit("1970-01-01"));
  assert.ok(getBirthdayHit("2026-09-09", "2026-09-09"));
});

test("evidence cannot leak across artists or recording versions", () => {
  assert.equal(extraSources(2019, "Зацепила", "VERBEE").length, 0);
  assert.ok(extraSources(2019, "Зацепила", "Артур Пирожков").length);
  assert.equal(extraSources(2022, "Как ты там?", "Nebezao Feat. Андрей Леницкий").length, 0);
  assert.ok(extraSources(2022, "Как ты там", "Kamazz").length);
  assert.equal(extraSources(2023, "Плохая Девочка (Травма Фонк Remix)", "Винтаж Feat. Елена Корикова").length, 0);
  assert.equal(extraSources(2020, "Луна Не Знает Пути (Demo Version)", "Тайпан & Agunda").length, 0);
});

test("every displayed modern recording keeps exact-version evidence and a stable identity", () => {
  const forbiddenVersions = [
    "тайпан agunda|луна не знает пути demo version",
    "винтаж feat елена корикова|плохая девочка травма фонк remix",
  ];
  const displayAliases = [
    "клава кока нилетто|краш",
    "macan feat branya|пополам",
    "jakomo avg|платина",
    "ap ent|можно я с тобой can i come with you",
  ];

  for (let year = 2018; year <= 2025; year += 1) {
    for (let active = new Date(Date.UTC(year, 0, 1, 12)); active.getUTCFullYear() === year; active.setUTCDate(active.getUTCDate() + 1)) {
      const date = active.toISOString().slice(0, 10);
      const hit = getBirthdayHit(date)!;
      const identity = `${canonical(hit.artist)}|${canonical(hit.title)}`;
      assert.ok(!forbiddenVersions.includes(identity), `${date}: mismatched evidence for ${hit.artist} — ${hit.title}`);
      assert.ok(!displayAliases.includes(identity), `${date}: unnormalized identity ${hit.artist} — ${hit.title}`);
      if (hit.mode === "стриминговый чарт") {
        assert.ok(hit.sources.some((source) => source.kind === "датированный стриминговый чарт" && source.id.includes(hit.chartDate)), `${date}: no exact dated snapshot`);
        assert.equal(publicPlatforms(hit.sources).size, 2);
        assert.ok(hit.sources.some((source) => source.kind === "повторное датированное наблюдение"));
      } else {
        assert.ok(hit.sources.some((source) => source.id.startsWith("shazam-week-")), `${date}: no dated weekly source`);
      }
      assert.ok(publicPlatforms(hit.sources).size > 0, `${date}: no independent public signal`);
      assert.ok(hit.sources.every((source) => !source.id.startsWith("culture-")), `${date}: unverified title-only source survived`);
    }
  }
});

test("multiple publications of one platform do not inflate audience evidence", () => {
  const sources = [
    { id: "vk-one", label: "VK Music", kind: "стриминг", url: "https://example.com/a" },
    { id: "another", label: "ВКонтакте и BOOM", kind: "соцсеть", url: "https://example.com/b" },
    { id: "radio-one", label: "Radio", kind: "радио", url: "https://example.com/c" },
  ];
  assert.equal(publicPlatforms(sources).size, 1);
  const candidate = { artist: "Артист", title: "Песня", score: 0, shazamRank: 10, signalTypes: 1, sources };
  assert.equal(culturalScore(candidate, [...sources, { id: "annual", label: "Shazam", kind: "годовая устойчивость", url: "https://example.com", rank: 1 }]),
    culturalScore(candidate, [...sources, { id: "annual", label: "Shazam", kind: "годовая устойчивость", url: "https://example.com", rank: 100 }]));
});

test("monthly evidence stays in its calendar month, with annual coverage between sources", () => {
  // BETA78: 2002 dates near a «Золотой граммофон» issue are weekly; the claim stays within six days.
  for (const date of ["2002-03-01", "2002-03-31", "2002-04-01", "2002-09-01", "2002-09-30", "2002-10-31"]) {
    const hit = getBirthdayHit(date)!;
    if (hit.precision === "Месяц") assert.equal(hit.chartDate.slice(0, 7), date.slice(0, 7), date);
    else {
      assert.equal(hit.precision, "Неделя", date);
      assert.ok(Math.abs(Date.parse(hit.chartDate) - Date.parse(date)) <= 6 * 86400000, date);
    }
  }
  assert.equal(getBirthdayHit("1978-05-01")!.evidenceMonth, "1978-05");
  const june = getBirthdayHit("1978-06-01")!;
  assert.equal(june.precision, "Месяц");
  assert.equal(june.evidenceMonth, "1978-06");
  assert.equal(june.chartDate, "1978-07-08");
});

test("known language mismatch is excluded while Russian Latin titles remain eligible", () => {
  assert.equal(isEligibleRussianLanguageTrack("Плакала", "KAZKA"), false);
  assert.equal(isEligibleRussianLanguageTrack("Пыяла", "АИГЕЛ"), false);
  assert.equal(isEligibleRussianLanguageTrack("Алия", "Роза Рымбаева"), false);
  assert.equal(isEligibleRussianLanguageTrack("Жужуна цвима", "ВИА «Цицинатела»"), false);
  assert.equal(isEligibleRussianLanguageTrack('Вальс из фильма «Мой ласковый и нежный зверь»', "Евгений Дога"), false);
  assert.equal(isEligibleRussianLanguageTrack("WWW", "Ленинград"), true);
  assert.equal(isEligibleRussianLanguageTrack("Belle", "Вячеслав Петкун, Александр Голубев и Антон Макарский"), true);
  assert.equal(isEligibleRussianLanguageTrack("Life", "Zivert"), true);
  assert.equal(isEligibleRussianLanguageTrack("Life", "Another artist"), false);
});

test("Golden Gramophone anchors use ceremony dates rather than later TV air dates", () => {
  const expected = new Map([
    [1996, "1996-12-14"], [1997, "1997-11-15"], [1998, "1998-11-21"],
    [1999, "1999-12-24"], [2000, "2000-11-18"], [2001, "2001-11-17"],
    [2002, "2002-11-15"], [2003, "2003-12-06"],
  ]);
  for (const [year, chartDate] of expected) {
    const anchor = HISTORICAL_BROADCASTS_1970_2003.find((entry) => entry.archiveYear === year && entry.programLabel.includes("Золотой граммофон"));
    assert.equal(anchor?.chartDate, chartDate, String(year));
    assert.ok(anchor?.candidates.every((candidate) => candidate.sources[0]?.label.includes("церемония")), String(year));
  }
});

test("legacy chart aliases do not split one recording into multiple artists", () => {
  const wideRiverArtists = new Set<string>();
  for (let active = new Date(Date.UTC(2004, 0, 1, 12)); active.getUTCFullYear() === 2004; active.setUTCDate(active.getUTCDate() + 1)) {
    const hit = getBirthdayHit(active.toISOString().slice(0, 10))!;
    if (canonical(hit.title) === "широка река") wideRiverArtists.add(hit.artist);
  }
  assert.deepEqual([...wideRiverArtists], ["Надежда Кадышева и Антон Зацепин"]);
});

test("every complete year keeps a varied catalogue, with stronger historical annual pools", () => {
  const enrichedYears = new Set([1970, 1974, 1975, 1976, 1983, 1984, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004]);
  for (let year = 1970; year <= 2025; year += 1) {
    const counts = new Map<string, number>();
    for (let active = new Date(Date.UTC(year, 0, 1, 12)); active.getUTCFullYear() === year; active.setUTCDate(active.getUTCDate() + 1)) {
      const date = active.toISOString().slice(0, 10);
      const hit = getBirthdayHit(date)!;
      const key = `${hit.artist} — ${hit.title}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    assert.ok(counts.size >= 4, `${year}: only ${counts.size} unique songs`);
    if (enrichedYears.has(year)) {
      const dominantDays = Math.max(...counts.values());
      assert.ok(counts.size >= 10, `${year}: only ${counts.size} unique songs after enrichment`);
      // Concentration is an editorial audit warning, not a calendar invariant:
      // a sourced hit may legitimately appear in several different months.
      // audit:coverage reports every year over 60 dates for follow-up research.
      assert.ok(dominantDays < 180, `${year}: one song occupies half the year`);
    }
  }
});


test("historical main results and alternatives obey the recording exclusions", () => {
  for (let day = 1; day <= 31; day += 1) {
    const hit = getBirthdayHit(`1978-10-${String(day).padStart(2, "0")}`)!;
    assert.ok(hit);
    assert.ok(isEligibleRussianLanguageTrack(hit.title, hit.artist));
    assert.ok(hit.alternatives.every((candidate) => isEligibleRussianLanguageTrack(candidate.title, candidate.artist)));
    if (hit.precision === "Месяц") assert.equal(hit.evidenceMonth ?? hit.chartDate.slice(0, 7), "1978-10");
  }
});

test("2026 streaming snapshots keep exact observations, repeated tracks and three candidates", () => {
  for (const date of ["2026-01-19", "2026-01-26", "2026-08-31", "2026-09-08", "2026-09-14"]) {
    const hit = getBirthdayHit(date)!;
    assert.equal(hit.mode, "стриминговый чарт");
    assert.equal(hit.chartDate, date);
    assert.equal(hit.precision, "Неделя");
    assert.equal(hit.alternatives.length, 2);
    assert.equal(publicPlatforms(hit.sources).size, 2);
    assert.ok(hit.sources.some((source) => source.kind === "повторное датированное наблюдение"));
    assert.ok(hit.sources.every((source) => !source.id.startsWith("shazam")));
    assert.match(hit.method, /непрерывное присутствие не установлено/);
  }
  const earlyJanuary = getBirthdayHit("2026-01-01")!;
  assert.equal(earlyJanuary.precision, "Месяц");
  assert.equal(earlyJanuary.evidenceMonth, "2026-01");
  const lateSeptember = getBirthdayHit("2026-09-30")!;
  assert.equal(lateSeptember.precision, "Неделя");
  assert.equal(lateSeptember.chartDate, "2026-09-28");
  assert.equal(getBirthdayHit("2026-10-01")!.mode, "стриминговый чарт");
  const midAugust = getBirthdayHit("2026-08-15")!;
  assert.equal(midAugust.precision, "Месяц");
  assert.equal(midAugust.evidenceMonth, "2026-08");
  assert.notEqual(getBirthdayHit("2026-01-19", "2026-01-19")!.mode, "стриминговый чарт");
});

test("December 2025 uses same-year listener observations and keeps the late-month precision honest", () => {
  for (let day = 1; day <= 31; day += 1) {
    const date = `2025-12-${String(day).padStart(2, "0")}`;
    const hit = getBirthdayHit(date)!;
    assert.equal(hit.mode, "стриминговый чарт");
    assert.equal(hit.year, 2025);
    assert.ok(hit.chartDate.startsWith("2025-12-"));
    assert.equal(hit.alternatives.length, 2);
    assert.equal(publicPlatforms(hit.sources).size, 2);
    assert.match(hit.method, /непрерывное присутствие не установлено/);
    assert.ok(hit.sources.every((source) => !source.label.includes("2026")));
    assert.ok(isEligibleRussianLanguageTrack(hit.title, hit.artist));
  }
  const lastDay = getBirthdayHit("2025-12-31")!;
  assert.equal(lastDay.precision, "Месяц");
  assert.equal(lastDay.chartDate, "2025-12-22");
  assert.equal(lastDay.evidenceMonth, "2025-12");
  assert.notEqual(getBirthdayHit("2025-12-01", "2025-12-01")!.mode, "стриминговый чарт");
  const asOf8 = getBirthdayHit("2025-12-08", "2025-12-08")!;
  assert.equal(asOf8.mode, "стриминговый чарт");
  assert.ok(asOf8.sources.every((source) => !/15\.12|22\.12/.test(source.label)));
  assert.notEqual(getBirthdayHit("2025-11-30")!.mode, "стриминговый чарт");
});

test("1981 reader charts distinguish poll month from later publication and recording aliases", () => {
  for (let month = 1; month <= 12; month += 1) {
    for (const day of [1, 15, 28]) {
      const date = `1981-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const hit = getBirthdayHit(date)!;
      assert.equal(hit.mode, "месячный чарт");
      assert.equal(hit.precision, "Месяц");
      assert.equal(hit.evidenceMonth, date.slice(0, 7));
      assert.equal(hit.evidenceYear, 1981);
      assert.equal(hit.alternatives.length, 4);
      assert.equal(publicPlatforms(hit.sources).size, 1);
      assert.match(hit.method, /вторичный источник/);
      assert.ok([hit, ...hit.alternatives].every((candidate) => candidate.artist !== "33 1/3"));
    }
  }
  const december = getBirthdayHit("1981-12-15")!;
  assert.equal(december.chartDate, "1982-01-31");
  assert.equal(december.evidenceMonth, "1981-12");
  assert.equal(december.artist, "Алла Пугачёва");
  assert.equal(december.title, "Песня на бис");
  assert.equal(december.chartRank, 3);
  const may = getBirthdayHit("1981-05-15")!;
  assert.equal(may.title, "Снег");
  assert.equal(may.chartRank, 4);
  assert.notEqual(getBirthdayHit("1981-12-15", "1981-12-31")!.sourceId, december.sourceId);
});

test("1998 autumn archives keep weekly proximity, chart duration and radio-only limits separate", () => {
  for (const date of ["1998-09-01", "1998-09-13", "1998-09-30", "1998-10-11", "1998-10-18", "1998-10-31"]) {
    const hit = getBirthdayHit(date)!;
    assert.equal(hit.mode, "недельный чарт");
    assert.equal(hit.alternatives.length, 2);
    assert.match(hit.sourceLabel, /недел[ьи] в чарте/);
    assert.match(hit.method, /массовая популярность вне аудитории/);
    assert.equal(publicPlatforms(hit.sources).size, 0);
    assert.ok([hit, ...hit.alternatives].every((candidate) => isEligibleRussianLanguageTrack(candidate.title, candidate.artist)));
  }
  // BETA78: the full Maximum archive has an issue on 1998-11-01, one day away.
  const end = getBirthdayHit("1998-10-31")!;
  assert.equal(end.precision, "Неделя");
  assert.equal(end.chartDate, "1998-11-01");
  const early = getBirthdayHit("1998-09-01")!;
  assert.equal(early.precision, "Неделя");
  assert.equal(early.chartDate, "1998-09-06");
  assert.notEqual(getBirthdayHit("1998-08-31")!.sourceId, early.sourceId);
});


test("2009 gap uses dated radio issues with three candidates and honest audience limits", () => {
  for (let value = Date.parse("2009-07-02T12:00:00Z"); value <= Date.parse("2009-08-04T12:00:00Z"); value += 86400000) {
    const date = new Date(value).toISOString().slice(0,10);
    const hit = getBirthdayHit(date)!;
    assert.equal(hit.precision, "Неделя", date);
    assert.equal(hit.alternatives.length, 2, date);
    assert.ok(hit.distanceDays <= 6, date);
    assert.equal(publicPlatforms(hit.sources).size, 0, date);
    assert.match(hit.method, /не доказывает непрерывные 14 дней/);
  }
});

test("February and April 2026 use exact recordings on two national listener platforms", () => {
  for (const month of ["02", "04"]) {
    const count = month === "02" ? 28 : 30;
    for (let day = 1; day <= count; day += 1) {
      const date = `2026-${month}-${String(day).padStart(2, "0")}`;
      const hit = getBirthdayHit(date, "2026-10-01")!;
      assert.equal(hit.mode, "стриминговый чарт", date);
      assert.equal(hit.alternatives.length, 2, date);
      assert.equal(publicPlatforms(hit.sources).size, 2, date);
      assert.ok(hit.sources.some(source => source.kind === "повторное датированное наблюдение"), date);
    }
  }
});


test("2026 has three listener-backed candidates throughout the available calendar", () => {
  for (let value = Date.parse("2026-01-01T12:00:00Z"); value <= Date.parse("2026-10-01T12:00:00Z"); value += 86400000) {
    const date = new Date(value).toISOString().slice(0, 10);
    const hit = getBirthdayHit(date, "2026-10-01")!;
    assert.equal(hit.mode, "стриминговый чарт", date);
    assert.equal(hit.alternatives.length, 2, date);
    assert.equal(publicPlatforms(hit.sources).size, 2, date);
    assert.ok(hit.sources.some(source => source.kind === "повторное датированное наблюдение"), date);
  }
  for (const date of ["2026-01-13", "2026-04-14"]) {
    const hit = getBirthdayHit(date, "2026-10-01")!;
    const platforms = publicPlatforms(hit.sources);
    assert.ok(platforms.has("vk"), date);
    assert.equal(platforms.has("yandex"), false, date);
  }
});

test("1980 monthly polls preserve later publication and existing weekly anchors", () => {
  const december = getBirthdayHit("1980-12-15")!;
  assert.equal(december.precision, "Месяц");
  assert.equal(december.evidenceMonth, "1980-12");
  assert.equal(december.evidenceYear, 1980);
  assert.equal(december.chartDate, "1981-01-01");
  assert.equal(december.alternatives.length, 4);
  for (let month = 1; month <= 12; month += 1) {
    const date = `1980-${String(month).padStart(2, "0")}-15`;
    const hit = getBirthdayHit(date)!;
    if (hit.mode === "месячный чарт") {
      assert.equal(hit.evidenceMonth, date.slice(0,7), date);
      assert.equal(hit.alternatives.length, 4, date);
      assert.equal(publicPlatforms(hit.sources).size, 1, date);
    }
  }
});

test("small annual gaps get same-year dated radio evidence without false weekly precision", () => {
  for (const date of ["2006-10-31", "2006-11-08", "2007-04-25", "2007-05-02", "2010-01-01", "2011-01-01", "2012-01-01", "2014-01-01", "2015-01-06"]) {
    const hit = getBirthdayHit(date)!;
    assert.notEqual(hit.precision, "Год", date);
    assert.equal(hit.chartDate.slice(0,4), date.slice(0,4), date);
    assert.equal(hit.alternatives.length, 2, date);
    assert.equal(publicPlatforms(hit.sources).size, 0, date);
    if (hit.distanceDays > 6) assert.equal(hit.precision, "Месяц", date);
  }
});


test("early reader polls fill weak months without replacing complete historical results", () => {
  for (const date of ["1977-09-15", "1977-11-15", "1978-03-15", "1978-06-15", "1978-10-30", "1979-02-15", "1979-12-15", "1982-01-15", "1982-02-15"]) {
    const hit = getBirthdayHit(date)!;
    assert.equal(hit.mode, "месячный чарт", date);
    assert.equal(hit.precision, "Месяц", date);
    assert.equal(hit.evidenceMonth, date.slice(0,7), date);
    assert.equal(hit.alternatives.length, 2, date);
    assert.equal(publicPlatforms(hit.sources).size, 1, date);
  }
  assert.equal(getBirthdayHit("1979-12-15")!.chartDate, "1980-01-01");
  assert.equal(getBirthdayHit("1972-01-15")!.precision, "Год");
  assert.equal(getBirthdayHit("1982-12-15")!.precision, "Месяц");
});

test("ambiguous 1977 recordings stay out of annual results and alternatives", () => {
  for (let active = new Date("1977-01-01T12:00:00Z"); active.getUTCFullYear() === 1977; active.setUTCDate(active.getUTCDate() + 1)) {
    const date = active.toISOString().slice(0, 10);
    const hit = getBirthdayHit(date)!;
    for (const candidate of [hit, ...hit.alternatives]) {
      assert.notEqual(canonical(candidate.title), "последний лист", date);
    }
  }
});

test("December 1982 performance is dated without claiming a popularity peak", () => {
  const titles = new Set<string>();
  for (let day = 1; day <= 31; day++) {
    const hit = getBirthdayHit(`1982-12-${String(day).padStart(2, "0")}`)!;
    assert.equal(hit.precision, "Месяц");
    assert.equal(hit.chartDate, "1982-12-30");
    assert.equal(hit.chartRank, null);
    assert.equal(hit.chartMetric, "МЕСЯЦ ВЫСТУПЛЕНИЯ");
    assert.equal(publicPlatforms(hit.sources).size, 0);
    assert.equal(hit.alternatives.length, 2);
    assert.match(hit.proximity, /пик популярности не установлен/);
    assert.match(hit.method, /января 1983/);
    assert.match(hit.method, /14 дней популярности не установлены/);
    titles.add(hit.title);
  }
  assert.deepEqual([...titles].sort(), ["Мама, я попал в беду", "Мячик", "По-прежнему вдвоём"].sort());
  for (const date of ["1982-11-30", "1983-01-01"]) {
    const hit = getBirthdayHit(date)!;
    assert.ok(!hit.sources.some(source => source.id.startsWith("kirov-1982-12-30-official-")), date);
  }
});

test("2018 September gap has month-level evidence with distinct observation periods", () => {
  const hit = getBirthdayHit("2018-09-07")!;
  assert.equal(hit.precision, "Месяц");
  assert.equal(hit.evidenceMonth, "2018-09");
  assert.equal(hit.alternatives.length, 2);
  assert.equal(publicPlatforms(hit.sources).size, 2);
  assert.match(hit.sources[0].label, /17–23.09.2018/);
  assert.match(hit.sources[1].label, /26.09.2018/);
  assert.match(hit.method, /Периоды площадок различаются/);
});

test("2004 radio additions keep distant dates monthly and preserve listener-backed results", () => {
  const early = getBirthdayHit("2004-01-01")!;
  assert.equal(early.precision, "Месяц");
  assert.equal(early.alternatives.length, 2);
  const january = getBirthdayHit("2004-01-18")!;
  assert.equal(january.precision, "Неделя");
  assert.equal(january.chartDate, "2004-01-18");
  assert.equal(january.alternatives.length, 2);
  assert.equal(publicPlatforms(january.sources).size, 0);
  assert.notEqual(getBirthdayHit("2004-04-10")!.sourceId.startsWith("gramophone-2004-"), true);
});

// Actual interval membership is stricter than nearest-publication proximity.
test("2018 month fallback supplies three candidates without inventing birthday weeks", async () => {
  const { verifiedStreamingWeek2018 } = await import("../app/streaming-weeks-2018");
  for (const date of ["2018-07-31", "2018-08-01", "2018-09-10"]) {
    assert.equal(verifiedStreamingWeek2018(date, "2026-10-02"), null);
    const hit = verifiedStreamingWeek2018(date, "2026-10-02", true)!;
    assert.equal(hit.precision, "Месяц");
    assert.equal(hit.evidenceMonth, date.slice(0,7));
    assert.equal(hit.chartDate.slice(0,7), date.slice(0,7));
    assert.equal(hit.alternatives.length, 2);
    assert.equal(publicPlatforms(hit.sources).size, 2);
    assert.match(hit.proximity, /в неделю рождения не установлена/);
    assert.ok(hit.distanceDays >= 0);
  }
  for (let day=1; day<=30; day++) {
    const hit = getBirthdayHit(`2018-09-${String(day).padStart(2,"0")}`)!;
    assert.equal(hit.alternatives.length, 2);
  }
});

test("May 2020 keeps coherent source intervals and excludes the contradictory next issue", async () => {
  const { streamingMay2020 } = await import("../app/streaming-may-2020");
  assert.equal(streamingMay2020("2020-05-04","2020-05-20"), null);
  for (let day=1; day<=31; day++) {
    const date=`2020-05-${String(day).padStart(2,"0")}`;
    const hit=getBirthdayHit(date)!;
    assert.equal(hit.alternatives.length, 2, date);
    assert.equal(publicPlatforms(hit.sources).size, 2);
    if(day>=4 && day<=17) assert.equal(hit.precision,"Неделя");
    else { assert.equal(hit.precision,"Месяц"); assert.equal(hit.evidenceMonth,"2020-05"); }
    assert.ok(hit.sources.every(source=>!source.url.includes("151804030491438")));
    assert.match(hit.method,/Перепубликация не считается независимым измерением/);
    const repeat=hit.sources.find(source=>source.id.startsWith("repeat-snapshot-"))!;
    assert.equal(Math.abs(Date.parse(repeat.id.slice(16,26))-Date.parse(hit.chartDate))/86400000,7);
  }
  assert.equal(streamingMay2020("2020-06-01","2026-10-02"),null);
});

test("2018 listener enrichment stays inside observed weeks and preserves complete results", async () => {
  const { verifiedStreamingWeek2018 } = await import("../app/streaming-weeks-2018");
  const { VERIFIED_STREAMING_WEEKS_2018 } = await import("../app/streaming-weeks-2018-data");
  for (const week of VERIFIED_STREAMING_WEEKS_2018) {
    for (let value = Date.parse(week.start); value <= Date.parse(week.end); value += 86400000) {
      const date = new Date(value).toISOString().slice(0,10);
      const hit = verifiedStreamingWeek2018(date, "2026-10-01")!;
      assert.equal(hit.precision, "Неделя");
      assert.equal(hit.chartDate, week.end);
      assert.equal(hit.alternatives.length, 2);
      assert.equal(publicPlatforms(hit.sources).size, 2);
      assert.ok(hit.distanceDays >= 0 && hit.distanceDays <= 6);
    }
    assert.equal(verifiedStreamingWeek2018(week.start, week.start), null, "publication and repeat observations must be available");
    for (const candidate of week.candidates) {
      const gap = Math.abs(Date.parse(candidate.repeat.end) - Date.parse(week.end)) / 86400000;
      assert.ok(gap >= 7 && gap <= 31);
      assert.ok(isEligibleRussianLanguageTrack(candidate.title, candidate.artist));
    }
  }
  assert.equal(verifiedStreamingWeek2018("2018-09-07", "2026-10-01"), null);
  assert.equal(getBirthdayHit("2018-09-07")!.precision, "Месяц");
  assert.equal(getBirthdayHit("2018-01-01")!.mode, "стриминговый чарт");
  assert.equal(getBirthdayHit("2018-07-02")!.mode, "мультичарт", "complete existing pool stays unchanged");
});


test("June 1977 reader letters establish publication and film-wide resonance, without a fabricated poll", () => {
  for (let day = 1; day <= 30; day++) {
    const hit = getBirthdayHit(`1977-06-${String(day).padStart(2, "0")}`)!;
    assert.equal(hit.title, "Прощальный вальс");
    assert.equal(hit.precision, "Месяц");
    assert.equal(hit.mode, "месячный релиз");
    assert.equal(hit.chartRank, null);
    assert.equal(publicPlatforms(hit.sources).size, 0);
    // BETA85: other songs of «Кругозор» № 6 · 1977 are listed as same-month alternatives only.
    assert.ok(hit.alternatives.length <= 3);
    assert.ok(hit.alternatives.every((alternative) => ["Первопроходцы", "Материнская любовь", "Мелодия надежды"].includes(alternative.title)));
    assert.match(hit.proximity, /пик популярности не установлены/);
    assert.match(hit.sources.find(source => source.kind === "культурный след")!.label, /фильма в целом/);
  }
  for (const date of ["1977-05-31", "1977-07-01", "1977-07-31"]) {
    assert.equal(getBirthdayHit(date)!.sources.some(source => source.id === "krugozor-1977-06-rozygrysh-scan"), false);
  }
});


test("July 1977 clipping supports local reception without a false exact event date", () => {
  for (let day = 1; day <= 31; day++) {
    const hit = getBirthdayHit(`1977-07-${String(day).padStart(2, "0")}`)!;
    assert.equal(hit.precision, "Месяц");
    assert.equal(hit.mode, "датированный концерт");
    assert.equal(hit.chartMetric, "МЕСЯЦ КОНЦЕРТНОГО ОТКЛИКА");
    assert.equal(hit.chartRank, null);
    // The other concert song stays first; later entries are other July 1977 publications.
    assert.ok(["Арлекино", "Приезжай"].includes(hit.alternatives[0].title));
    assert.ok(hit.alternatives.length <= 3);
    assert.equal(publicPlatforms(hit.sources).size, 0);
    assert.match(hit.method, /Скан газетной вырезки сверён/);
    assert.match(hit.method, /Полный номер газеты не проверен/);
    assert.match(hit.proximity, /пик не установлен/);
    assert.ok(["Арлекино", "Приезжай"].includes(hit.title));
  }
  for (const date of ["1977-06-30", "1977-08-01"]) {
    assert.equal(getBirthdayHit(date)!.chartMetric === "МЕСЯЦ КОНЦЕРТНОГО ОТКЛИКА", false);
  }
});

test("«Кругозор» issues add same-month alternatives without changing the chosen song", async () => {
  const { KRUGOZOR_ISSUES } = await import("../app/krugozor-issues");
  for (const [key, tracks] of Object.entries(KRUGOZOR_ISSUES)) {
    assert.match(key, /^19(7\d|8[2-5]|9[01])-(0[1-9]|1[0-2])$/);
    for (const [artist, title] of tracks) assert.ok(isEligibleRussianLanguageTrack(title, artist), `${key} ${artist} — ${title}`);
  }
  const april = getBirthdayHit("1983-04-10", "2026-10-03")!;
  assert.equal(april.title, "Полёт на дельтаплане");
  assert.ok(april.alternatives.some((alternative) => alternative.title === "Сердце человека"));
  assert.ok(april.alternatives.length <= 3);
  const may = getBirthdayHit("1971-05-10", "2026-10-03")!;
  assert.equal(may.title, "Любовь, как песня");
  assert.ok(may.alternatives.every((alternative) => alternative.title !== may.title));
});

test("weekly radio hit-parades 1995–2003 drive the main choice near a dated issue", () => {
  for (const date of ["1999-05-10", "2000-07-15", "2001-06-20", "2002-03-01", "2003-09-10"]) {
    const hit = getBirthdayHit(date, "2026-10-03")!;
    assert.equal(hit.precision, "Неделя", date);
    assert.equal(hit.mode, "недельный чарт", date);
    assert.ok(Math.abs(Date.parse(hit.chartDate) - Date.parse(date)) <= 6 * 86400000, date);
    assert.ok(hit.sources.every((source) => source.url.startsWith("https://chartoteka.com/charts/")), date);
    assert.ok(isEligibleRussianLanguageTrack(hit.title, hit.artist), date);
  }
  // Curated weekly evidence is kept as it was.
  assert.match(getBirthdayHit("1999-07-04", "2026-10-03")!.title, /Туда/);
  // Before 1999 a single Russian entry on Радио Максимум does not replace the curated month.
  const lone = getBirthdayHit("1996-01-28", "2026-10-03")!;
  assert.notEqual(lone.title, "Дворник");
});

// BETA81 data pass.
import { HISTORICAL_MONTHLY_CHARTS_1985_1991 } from "../app/historical-monthly-charts-1985-1991";
import { listenLinks } from "../app/listen";
import { chartovaNear } from "../app/chartoteka";

test("1987–1991 MK reader polls carry up to five ranked songs from the same poll", () => {
  const polls = HISTORICAL_MONTHLY_CHARTS_1985_1991.filter((chart) => chart.chartDate >= "1987-02-01");
  // November 1990 is garbled in the source transcription and keeps its three curated rows.
  assert.deepEqual(polls.filter((chart) => chart.candidates.length !== 5).map((chart) => chart.chartDate), ["1990-11-15"]);
  for (const chart of polls.filter((entry) => entry.candidates.length === 5)) {
    const ranks = chart.candidates.map((candidate) => candidate.sources[0].rank!);
    assert.equal(new Set(chart.candidates.map((candidate) => canonical(candidate.title))).size, 5, chart.chartDate);
    assert.ok(ranks.every((rank) => rank >= 1 && rank <= 10), chart.chartDate);
  }
});

test("«Чартова дюжина» adds a dated listener vote without changing the selected song", () => {
  const hit = getBirthdayHit("2000-09-15", "2026-10-26")!;
  const vote = hit.sources.find((source) => source.id.startsWith("chartova-"))!;
  assert.equal(vote.kind, "голосование слушателей");
  assert.match(vote.url, /chartoteka\.com\/charts\/chartova-duzhina\/2000-09-15$/);
  assert.ok(publicPlatforms(hit.sources).has("audience-poll"));
  assert.equal(chartovaNear(hit.artist, hit.title, "2000-12-31"), null, "no vote far from the issue");
  for (let value = Date.parse("1970-01-01T12:00:00Z"); value < Date.parse("1999-06-27T12:00:00Z"); value += 30 * 86400000) {
    const date = new Date(value).toISOString().slice(0, 10);
    assert.ok(getBirthdayHit(date, "2026-10-26")!.sources.every((source) => !source.id.startsWith("chartova-")), date);
  }
});

test("listen links open the exact Yandex Music track when the chart archive names it", () => {
  assert.equal(listenLinks("Земфира", "Хочешь")[0].url, "https://music.yandex.ru/track/732405");
  assert.match(listenLinks("Неизвестный артист", "Песня")[0].url, /music\.yandex\.ru\/search\?text=/);
});

test("October 2026 uses the latest dated radio issues instead of a year-level fallback", () => {
  for (const date of ["2026-10-05", "2026-10-19", "2026-10-26"]) {
    const hit = getBirthdayHit(date, "2026-10-26")!;
    assert.equal(hit.precision, "Неделя", date);
    assert.ok(hit.distanceDays <= 6, date);
    assert.match(hit.sourceId, /^gramophone-weekly-2026-10-/, date);
  }
  assert.equal(getBirthdayHit("2026-08-15", "2026-10-26")!.mode, "стриминговый чарт");
});

// BETA82 data pass.
test("late-December radio picks never borrow the next year's issue", () => {
  for (const date of ["1996-12-30", "1996-12-31", "1998-12-28", "1998-12-31", "2000-12-31"]) {
    const hit = getBirthdayHit(date, "2026-10-26")!;
    assert.equal(hit.chartDate.slice(0, 4), date.slice(0, 4), date);
  }
});

test("the hotcharts «Наше радио» mirror is labelled as the «Чартова дюжина» listener vote, not duplicated", () => {
  const hit = getBirthdayHit("2010-05-10", "2026-10-26")!;
  const votes = hit.sources.filter((source) => source.kind === "голосование слушателей");
  assert.equal(votes.length, 1);
  assert.match(votes[0].label, /Чартова дюжина/);
  assert.ok(hit.sources.every((source) => !source.id.startsWith("chartova-")));
});

test("thin weeks get same-week radio alternatives without changing the selected song", () => {
  for (const date of ["2019-09-15", "2020-08-28", "2023-04-11"]) {
    const hit = getBirthdayHit(date, "2026-10-26")!;
    assert.equal(hit.alternatives.length, 2, date);
    assert.ok(!hit.alternatives.some((alt) => canonical(alt.title) === canonical(hit.title) && canonical(alt.artist) === canonical(hit.artist)), date);
  }
});

// BETA84: eras without any all-Union monthly song chart are labelled as such.
test("no-chart eras follow Sychev's dates for the «Звуковая дорожка» chart", async () => {
  const { noChartEra } = await import("../app/evidence-policy");
  for (const date of ["1970-01-01", "1975-06-15", "1977-08-31", "1982-03-01", "1983-07-10", "1984-02-03", "1985-08-31"]) {
    assert.ok(noChartEra(date), date);
  }
  for (const date of ["1977-09-01", "1980-05-05", "1982-02-28", "1985-09-01", "1992-06-01", "2005-01-01", undefined]) {
    assert.equal(noChartEra(date), null, String(date));
  }
});

// BETA85: «Кругозор» issues missing from the first pass (1971–1990) add same-month songs.
test("new «Кругозор» issues add alternatives for thin months without changing the choice", () => {
  const march82 = getBirthdayHit("1982-03-10", "2026-11-12")!;
  assert.equal(march82.title, "Старинные часы");
  assert.ok(march82.alternatives.some((alternative) => alternative.title === "Лестница"));
  const july90 = getBirthdayHit("1990-07-15", "2026-11-12")!;
  assert.ok(july90.alternatives.length >= 2);
  assert.ok(july90.alternatives.some((alternative) => alternative.artist === "Игорь Тальков"));
});
