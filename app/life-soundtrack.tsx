"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CardModal } from "./card-modal";
import type { LifeEntry } from "./life-shared";
import { fetchLife } from "./data-source";
import { ServiceLinks } from "./service-links";
import { siteAddress } from "./eras";
import { canvasToBlob, drawLifeCard, ensureCardFonts } from "./share-card";
import { copyText } from "./track-feedback";

const COLLAPSED = 12;
const CARD_AGES = [0, 7, 18, 30, 40, 50, 60];

function display(date: string) {
  const [y, m, d] = date.split("-");
  return `${d}.${m}.${y}`;
}

function songsWord(n: number) {
  const m100 = n % 100, m10 = n % 10;
  if (m100 >= 11 && m100 <= 14) return "песен";
  if (m10 === 1) return "песня";
  if (m10 >= 2 && m10 <= 4) return "песни";
  return "песен";
}

// Milestones first, then the latest birthday; at most seven rows fit the story card.
function cardRows(entries: readonly LifeEntry[]) {
  const picked = entries.filter((entry) => CARD_AGES.includes(entry.age));
  const last = entries[entries.length - 1];
  if (last && !picked.includes(last)) picked.push(last);
  return picked.slice(-7);
}

export function LifeSoundtrack({ birth, initialEntries }: { birth: string; initialEntries: LifeEntry[] }) {
  const [entries, setEntries] = useState(initialEntries);
  const [loadedFor, setLoadedFor] = useState(initialEntries.length ? birth : "");
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("");
  const [fallback, setFallback] = useState("");
  const [cardUrl, setCardUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const cardBlob = useRef<Blob | null>(null);
  const [canShareFiles, setCanShareFiles] = useState(false);

  useEffect(() => {
    if (!birth || loadedFor === birth) return;
    const controller = new AbortController();
    fetchLife(birth, controller.signal)
      .then((loaded) => {
        setEntries(loaded); setLoadedFor(birth); setExpanded(false);
        setStatus(""); setFallback(""); setCardUrl(""); cardBlob.current = null;
      })
      .catch(() => { /* keep the section hidden on network errors */ });
    return () => controller.abort();
  }, [birth, loadedFor]);

  useEffect(() => () => { if (cardUrl) URL.revokeObjectURL(cardUrl); }, [cardUrl]);

  const closeCard = useCallback(() => setCardUrl(""), []);
  if (loadedFor !== birth || entries.length < 2) return null;
  const shown = expanded ? entries : entries.slice(0, COLLAPSED);
  const shareUrl = () => `${window.location.origin}${window.location.pathname}?date=${birth}#life`;

  async function copyPlaylist() {
    const text = `Саундтрек моей жизни (${display(birth)})\n${entries.map((e) => `${e.age} — ${e.artist} — ${e.title}`).join("\n")}\n\n${shareUrl()}`;
    const ok = await copyText(text);
    setStatus(ok ? "Список скопирован. Его можно вставить в сервис переноса плейлистов или отправить другу." : "");
    setFallback(ok ? "" : text);
  }

  async function makeCard() {
    setBusy(true);
    try {
      const canvas = document.createElement("canvas");
      await ensureCardFonts();
      drawLifeCard(canvas, {
        birth: display(birth), total: entries.length, totalWord: songsWord(entries.length), site: siteAddress(),
        rows: cardRows(entries).map((e) => ({ age: e.age, year: Number(e.date.slice(0, 4)), title: e.title, artist: e.artist, milestone: e.milestone })),
      });
      const blob = await canvasToBlob(canvas);
      if (!blob) return;
      cardBlob.current = blob;
      try {
        setCanShareFiles(typeof navigator.canShare === "function" && navigator.canShare({ files: [new File([blob], "life.png", { type: "image/png" })] }));
      } catch { setCanShareFiles(false); }
      setCardUrl(URL.createObjectURL(blob));
    } finally { setBusy(false); }
  }

  async function shareCard() {
    if (!cardBlob.current) return;
    const file = new File([cardBlob.current], `saundtrek-zhizni-${birth}.png`, { type: "image/png" });
    try { await navigator.share({ files: [file], text: `Саундтрек моей жизни: ${shareUrl()}` }); } catch { /* cancelled */ }
  }

  return (
    <section className="life" id="life" aria-labelledby="life-title">
      <div className="life-head">
                <div>
          <h2 id="life-title">Саундтрек<br />твоей жизни</h2>
          <p>Песни, которые были на вершинах чартов в твои дни рождения.</p>
        </div>
      </div>

      <ol className="life-list">
        {shown.map((entry) => (
          <li key={entry.date} className={entry.milestone ? "life-row life-milestone" : "life-row"}>
            <span className="life-age">{entry.age}</span>
            <span className="life-when">{entry.date.slice(0, 4)}{entry.milestone && <b>{entry.milestone}</b>}</span>
            <span className="life-song"><b>«{entry.title}»</b>{entry.artist}</span>
            <ServiceLinks artist={entry.artist} title={entry.title} className="life-play" />
          </li>
        ))}
      </ol>
      {entries.length > COLLAPSED && (
        <button className="source-link life-more" type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "СВЕРНУТЬ" : `ПОКАЗАТЬ ВСЕ ${entries.length}`}
        </button>
      )}

      <div className="life-actions">
        <button className="share-button" type="button" onClick={makeCard} disabled={busy}>{busy ? "РИСУЕМ…" : "КАРТОЧКА «САУНДТРЕК ЖИЗНИ»"}</button>
        <button className="source-link" type="button" onClick={copyPlaylist}>СКОПИРОВАТЬ ПЛЕЙЛИСТ</button>
      </div>
      {status && <p className="life-status" role="status">{status}</p>}
      {fallback && <textarea aria-label="Плейлист для копирования" rows={8} readOnly value={fallback} onFocus={(event) => event.target.select()} />}
      {cardUrl && (
        <CardModal url={cardUrl} alt={`Саундтрек жизни с ${display(birth)}`} fileName={`saundtrek-zhizni-${birth}.png`}
          canShare={canShareFiles} onShare={shareCard} onClose={closeCard} title="Саундтрек жизни готов!" />
      )}
      <p className="life-note">Каждая песня подобрана так же, как основной результат: с той точностью, которую дают источники для этой даты.</p>
    </section>
  );
}
