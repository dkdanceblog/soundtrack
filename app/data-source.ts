// Where the client gets results: the site's API (server build) or precomputed JSON
// files next to the page (static build for GitHub Pages, VITE_STATIC=1).
import type { BirthdayHit, HitSource } from "./hits";
import { buildLife, type LifeEntry } from "./life-shared";

const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};
export const STATIC_MODE = env.VITE_STATIC === "1";

type YearFile = { sources: HitSource[]; strings: string[]; days: Record<string, Omit<BirthdayHit, "sources" | "method" | "proximity"> & { m: number; p: number; s: number[] }> };
export type StaticMeta = { snapshot: string; weekCount: number; monthlyCount: number; songCount?: number };

const cache = new Map<string, Promise<unknown>>();
function json<T>(path: string, signal?: AbortSignal): Promise<T> {
  if (!cache.has(path)) {
    const request = fetch(`data/${path}`).then((response) => {
      if (!response.ok) throw new Error(`data/${path}: ${response.status}`);
      return response.json();
    });
    request.catch(() => cache.delete(path));
    cache.set(path, request);
  }
  const pending = cache.get(path) as Promise<T>;
  if (!signal) return pending;
  return new Promise<T>((resolve, reject) => {
    signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")), { once: true });
    pending.then(resolve, reject);
  });
}

export const loadMeta = () => json<StaticMeta>("meta.json");

export async function fetchHit(date: string, signal?: AbortSignal): Promise<BirthdayHit> {
  if (!STATIC_MODE) {
    const response = await fetch(`/api/hit?date=${date}`, { signal });
    const data = await response.json();
    if (!response.ok || !data.hit) throw new Error("Unable to load result");
    return data.hit;
  }
  const file = await json<YearFile>(`${date.slice(0, 4)}.json`, signal);
  const day = file.days[date.slice(5)];
  if (!day) throw new Error("No result for date");
  const { m, p, s, ...rest } = day;
  return { ...rest, method: file.strings[m], proximity: file.strings[p], sources: s.map((index) => file.sources[index]) } as BirthdayHit;
}

export async function fetchLife(birth: string, signal?: AbortSignal): Promise<LifeEntry[]> {
  if (!STATIC_MODE) {
    const response = await fetch(`/api/life?date=${birth}`, { signal });
    if (!response.ok) throw new Error("life");
    return (await response.json()).entries;
  }
  const [meta, life] = await Promise.all([loadMeta(), json<{ from: string; songs: [string, string][]; colors: string[]; days: number[] }>("life.json", signal)]);
  const start = Date.parse(`${life.from}T12:00:00Z`);
  const precisions: BirthdayHit["precision"][] = ["Неделя", "Месяц", "Год"];
  return buildLife(birth, meta.snapshot, (date) => {
    const value = life.days[Math.round((Date.parse(`${date}T12:00:00Z`) - start) / 86400000)];
    if (value === undefined) return null;
    const [title, artist] = life.songs[Math.floor(value / 256)];
    return { title, artist, precision: precisions[value % 4], color: life.colors[Math.floor((value % 256) / 4)] };
  });
}
