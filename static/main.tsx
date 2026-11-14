import { createRoot } from "react-dom/client";
import "../app/fonts.css";
import "../app/globals.css";
import BirthdayApp from "../app/birthday-app";
import { fetchHit, fetchLife, loadMeta } from "../app/data-source";
import { isSupportedDate } from "../app/date-policy";
import type { BirthdayHit } from "../app/hits";
import type { LifeEntry } from "../app/life-shared";

// Static entry for GitHub Pages: everything is read from data/*.json next to the page.
async function start() {
  const meta = await loadMeta();
  const requested = new URLSearchParams(window.location.search).get("date") ?? "1985-06-12";
  const date = isSupportedDate(requested, meta.snapshot) ? requested : "";
  let hit: BirthdayHit | null = null;
  let life: LifeEntry[] = [];
  if (date) {
    [hit, life] = await Promise.all([fetchHit(date).catch(() => null), fetchLife(date).catch(() => [])]);
    if (hit) document.title = `«${hit.title}» — ${hit.artist} · ${date.split("-").reverse().join(".")}`;
  }
  createRoot(document.getElementById("root")!).render(
    <BirthdayApp initialHit={hit} initialDate={date} initialToday={meta.snapshot} maxDate={meta.snapshot}
      weekCount={meta.weekCount} monthlyCount={meta.monthlyCount} initialLife={life} />,
  );
}

start().catch(() => {
  document.getElementById("root")!.innerHTML = "<p style=\"padding:40px;font:700 18px Arial,sans-serif\">Чёт не то. Обнови страницу.</p>";
});
