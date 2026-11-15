"use client";

import { FormEvent, useEffect, useState } from "react";
import type { BirthdayHit } from "./hits";
import { fetchHit } from "./data-source";
import { FIRST_SUPPORTED_DATE, isSupportedDate } from "./date-policy";
import { copyText } from "./track-feedback";

type Pair = { a: BirthdayHit; b: BirthdayHit; dateA: string; dateB: string };

const pad = (n: number) => String(n).padStart(2, "0");
function display(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  return `${pad(d)}.${pad(m)}.${y}`;
}

function plural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

const norm = (s: string) => s.toLocaleLowerCase("ru-RU").replace(/ё/g, "е").replace(/[^a-zа-я0-9]+/g, " ").trim();

function verdict({ a, b, dateA, dateB }: Pair) {
  if (norm(a.title) === norm(b.title) && norm(a.artist) === norm(b.artist)) return "Вы родились под одну и ту же песню!";
  if (norm(a.artist) === norm(b.artist)) return `Один и тот же исполнитель — ${a.artist}!`;
  const days = Math.round(Math.abs(Date.parse(dateA) - Date.parse(dateB)) / 86_400_000);
  if (days < 60) return `Между вашими днями рождения всего ${days} ${plural(days, "день", "дня", "дней")} — а песни уже разные.`;
  const years = Math.abs(Number(dateA.slice(0, 4)) - Number(dateB.slice(0, 4)));
  if (years === 0) return "Один год рождения — разные хиты.";
  return `Между вашими песнями ${years} ${plural(years, "год", "года", "лет")}.`;
}

function shareLink(mine: string) {
  const url = new URL(window.location.href);
  url.search = `?vs=${mine}`;
  url.hash = "compare";
  return url.toString();
}

export function CompareSection({ myDate, today }: { myDate: string; today: string }) {
  const [dateA, setDateA] = useState(myDate);
  const [dateB, setDateB] = useState("");
  const [fromFriend, setFromFriend] = useState(false);
  const [pair, setPair] = useState<Pair | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // A link like ?vs=1999-09-29 means a friend invited you: their date goes into the second slot.
  useEffect(() => {
    const vs = new URLSearchParams(window.location.search).get("vs");
    if (vs && isSupportedDate(vs, today)) {
      setDateB(vs); setFromFriend(true); setDateA("");
      // Content above (song, life soundtrack) loads in the background; re-align until the user scrolls.
      let userMoved = false;
      const stop = () => { userMoved = true; };
      window.addEventListener("wheel", stop, { once: true }); window.addEventListener("touchstart", stop, { once: true });
      const align = () => { if (!userMoved) document.getElementById("compare")?.scrollIntoView({ block: "start" }); };
      [100, 900, 1800, 3000].forEach((ms) => setTimeout(align, ms));
    }
  }, [today]);

  useEffect(() => {
    const invited = new URLSearchParams(window.location.search).has("vs");
    if (!fromFriend && !invited && myDate) setDateA(myDate);
  }, [myDate, fromFriend]);

  async function compare(event: FormEvent) {
    event.preventDefault();
    setError(""); setCopied(false);
    if (!isSupportedDate(dateA, today) || !isSupportedDate(dateB, today)) {
      setError(`Нужны две даты с ${display(FIRST_SUPPORTED_DATE)} по ${display(today)}.`);
      return;
    }
    setBusy(true);
    try {
      const [a, b] = await Promise.all([fetchHit(dateA), fetchHit(dateB)]);
      setPair({ a, b, dateA, dateB });
    } catch {
      setError("Не получилось найти песни. Попробуй ещё раз.");
    } finally { setBusy(false); }
  }

  async function copyInvite() {
    const mine = pair?.dateA ?? dateA;
    const text = `В день моего рождения самой популярной песней была «${pair?.a.title}» — ${pair?.a.artist}. Сравним, какая была у тебя? ${shareLink(mine)}`;
    setCopied(await copyText(pair ? text : shareLink(mine)));
  }

  return (
    <section className="compare" id="compare" aria-labelledby="compare-title">
      <h2 id="compare-title">Сравни с другом</h2>
      <p className="compare-lead">{fromFriend
        ? <>Тебя позвали сравнить песни. Друг родился {display(dateB)} — введи свою дату.</>
        : "Введи свою дату и дату друга, подруги, мамы или любимого — и посмотри, под какие песни вы родились."}</p>

      <form className="compare-form" onSubmit={compare}>
        <label>
          <span>Твоя дата</span>
          <input type="date" value={dateA} min={FIRST_SUPPORTED_DATE} max={today} onChange={(event) => setDateA(event.target.value)} required />
        </label>
        <span className="compare-vs" aria-hidden="true">VS</span>
        <label>
          <span>Дата друга</span>
          <input type="date" value={dateB} min={FIRST_SUPPORTED_DATE} max={today} onChange={(event) => setDateB(event.target.value)} required />
        </label>
        <button type="submit" disabled={busy}>{busy ? "Ищем…" : "Сравнить"}</button>
      </form>
      {error && <p className="compare-error" role="alert">{error}</p>}

      {pair && (
        <div className="compare-result" aria-live="polite">
          <div className="compare-cards">
            {([[pair.a, pair.dateA, "Ты"], [pair.b, pair.dateB, "Друг"]] as const).map(([hit, date, who]) => (
              <article className="compare-card" key={who}>
                <p className="compare-who">{who} · {display(date)}</p>
                <h3>«{hit.title}»</h3>
                <p className="compare-artist">{hit.artist}</p>
              </article>
            ))}
          </div>
          <p className="compare-verdict">{verdict(pair)}</p>
          <div className="compare-actions">
            <button className="btn-cta" type="button" onClick={copyInvite}>{copied ? "Скопировано ✓" : "Позвать друга сравнить"}</button>
            <span>Друг откроет ссылку — и твоя дата уже будет в сравнении.</span>
          </div>
        </div>
      )}
    </section>
  );
}
