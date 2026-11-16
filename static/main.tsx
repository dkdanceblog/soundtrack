import { createRoot } from "react-dom/client";
import "../app/fonts.css";
import "../app/globals.css";
import BirthdayApp from "../app/birthday-app";
import { loadMeta } from "../app/data-source";
import { isSupportedDate } from "../app/date-policy";

// Static entry for GitHub Pages: everything is read from data/*.json next to the page.
async function start() {
  const meta = await loadMeta();
  const requested = new URLSearchParams(window.location.search).get("date") ?? "1985-06-12";
  const date = isSupportedDate(requested, meta.snapshot) ? requested : "";
  // Render at once; the song (one year file) and the life soundtrack load in the background.
  createRoot(document.getElementById("root")!).render(
    <BirthdayApp initialHit={null} initialDate={date} pendingDate={date || undefined} initialToday={meta.snapshot} maxDate={meta.snapshot}
      weekCount={meta.weekCount} monthlyCount={meta.monthlyCount} songCount={meta.songCount} initialLife={[]} />,
  );
}

start().catch(() => {
  document.getElementById("root")!.innerHTML = "<p style=\"padding:40px;font:700 18px Arial,sans-serif\">Чёт не то. Обнови страницу.</p>";
});
