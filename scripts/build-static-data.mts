// Precomputes every supported date into static JSON so the site can run without a server
// (GitHub Pages). Usage: node --import tsx scripts/build-static-data.mts [YYYY-MM-DD]
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { getBirthdayHit, MULTICHART_WEEK_COUNT, HISTORICAL_MONTHLY_CHART_COUNT } from "../app/hits.ts";
import { FIRST_SUPPORTED_DATE, todayUtc } from "../app/date-policy.ts";

const snapshot = process.argv[2] ?? todayUtc();
const out = new URL("../static/public/data/", import.meta.url).pathname;
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const DAY = 86400000;
const years = new Map<number, { sources: string[]; sourceIndex: Map<string, number>; strings: string[]; stringIndex: Map<string, number>; days: Record<string, unknown> }>();
const life: Record<string, [string, string, string, string]> = {};
const songs = new Set<string>();
const songKey = (entry: { artist: string; title: string }) => `${entry.artist}|${entry.title}`.toLocaleLowerCase("ru-RU").replace(/ё/g, "е").replace(/[^a-zа-я0-9|]+/g, "");
const intern = (list: string[], index: Map<string, number>, value: string) => {
  let i = index.get(value);
  if (i === undefined) { i = list.length; list.push(value); index.set(value, i); }
  return i;
};

for (let t = Date.parse(`${FIRST_SUPPORTED_DATE}T12:00:00Z`); t <= Date.parse(`${snapshot}T12:00:00Z`); t += DAY) {
  const date = new Date(t).toISOString().slice(0, 10);
  const hit = getBirthdayHit(date, snapshot);
  if (!hit) continue;
  const year = Number(date.slice(0, 4));
  if (!years.has(year)) years.set(year, { sources: [], sourceIndex: new Map(), strings: [], stringIndex: new Map(), days: {} });
  const bucket = years.get(year)!;
  const { sources, method, proximity, ...rest } = hit;
  bucket.days[date.slice(5)] = {
    ...rest,
    m: intern(bucket.strings, bucket.stringIndex, method),
    p: intern(bucket.strings, bucket.stringIndex, proximity),
    s: sources.map((source) => intern(bucket.sources, bucket.sourceIndex, JSON.stringify(source))),
  };
  life[date] = [hit.title, hit.artist, hit.precision, hit.color];
  for (const entry of [hit, ...hit.alternatives, ...(hit.yearContext ?? [])]) songs.add(songKey(entry));
}

let bytes = 0;
for (const [year, bucket] of years) {
  const body = JSON.stringify({ sources: bucket.sources.map((s) => JSON.parse(s)), strings: bucket.strings, days: bucket.days });
  bytes += body.length;
  writeFileSync(`${out}${year}.json`, body);
}
const lifeBody = JSON.stringify(life);
writeFileSync(`${out}life.json`, lifeBody);
writeFileSync(`${out}meta.json`, JSON.stringify({ snapshot, weekCount: MULTICHART_WEEK_COUNT, monthlyCount: HISTORICAL_MONTHLY_CHART_COUNT, songCount: songs.size }));
console.log(`snapshot ${snapshot}: ${years.size} year files, ${(bytes / 1e6).toFixed(1)} MB, life ${(lifeBody.length / 1e6).toFixed(1)} MB`);
