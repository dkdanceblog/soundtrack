"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { CardModal } from "./card-modal";
import { confidentText } from "./confident-text";
import type { BirthdayHit } from "./hits";
import { FIRST_SUPPORTED_DATE, isSupportedDate, todayUtc } from "./date-policy";
import { assessPopularity, noChartEra } from "./evidence-policy";
import { copyText } from "./track-feedback";
import { listenLinks } from "./listen";
import { ServiceLinks } from "./service-links";
import { siteAddress } from "./eras";
import { canvasToBlob, drawShareCard, ensureCardFonts } from "./share-card";
import { LifeSoundtrack } from "./life-soundtrack";
import type { LifeEntry } from "./life-shared";
import { fetchHit } from "./data-source";
import { DECADES, TELEGRAM_URL, randomDateBetween } from "./eras";
import { RecordObject } from "./era-object";

const pad = (value: number) => String(value).padStart(2, "0");

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${pad(day)}.${pad(month)}.${year}`;
}

// One plain-language badge per result; the detailed evidence labels stay in "Почему эта песня".
function badgeFor(hit: BirthdayHit) {
  if (hit.precision === "Неделя") return { text: "В чарте недели твоего рождения", short: "ЧАРТ НЕДЕЛИ РОЖДЕНИЯ" };
  if (hit.precision === "Месяц") return { text: "Из месяца твоего рождения", short: "МЕСЯЦ РОЖДЕНИЯ" };
  return { text: "Из года твоего рождения", short: "ГОД РОЖДЕНИЯ" };
}

// Keeps the closing quote on the same line as the last word.
function titleParts(title: string) {
  const words = title.trim().split(/\s+/);
  const last = words.pop() ?? "";
  return <>«{words.length ? `${words.join(" ")} ` : ""}<span className="nowrap">{last}»</span></>;
}

// One lead sentence everywhere (editor's decision).
export function leadVerb(hit: BirthdayHit) {
  void hit; return "самой популярной песней была";
}

function detailLabel(hit: BirthdayHit) {
  if (hit.precision === "Год") return "Месяц не подтверждён";
  if (hit.mode === "месячный релиз") return "Месяц публикации";
  if (hit.chartMetric === "МЕСЯЦ ВЫСТУПЛЕНИЯ") return "Месяц выступления";
  if (hit.chartMetric === "МЕСЯЦ КОНЦЕРТНОГО ОТКЛИКА") return "Месяц концертного отклика";
  return hit.precision;
}

export default function BirthdayApp({ initialHit, initialDate, initialToday, weekCount, monthlyCount, initialLife, maxDate, songCount, pendingDate }: { initialHit: BirthdayHit | null; initialDate: string; initialToday: string; weekCount: number; monthlyCount: number; initialLife: LifeEntry[]; maxDate?: string; songCount?: number; pendingDate?: string }) {
  const [date, setDate] = useState(initialDate);
  const [submittedDate, setSubmittedDate] = useState(initialDate);
  const [hit, setHit] = useState(initialHit);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const activeRequest = useRef<AbortController | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFallback, setCopyFallback] = useState("");
  const [today, setToday] = useState(initialToday);
  const [cardUrl, setCardUrl] = useState("");
  const [cardBusy, setCardBusy] = useState(false);
  const [canShareFiles, setCanShareFiles] = useState(false);
  const cardBlob = useRef<Blob | null>(null);

  useEffect(() => () => { if (cardUrl) URL.revokeObjectURL(cardUrl); }, [cardUrl]);

  useEffect(() => {
    // A static snapshot cannot answer dates after it was built.
    const refreshToday = () => setToday(maxDate && maxDate < todayUtc() ? maxDate : todayUtc());
    const interval = window.setInterval(refreshToday, 60_000);
    window.addEventListener("focus", refreshToday);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", refreshToday);
      activeRequest.current?.abort();
      activeRequest.current = null;
    };
  }, [maxDate]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void loadDate(String(new FormData(event.currentTarget).get("birthdate") ?? date));
  }

  function showEra(sample: string) {
    setDate(sample);
    void loadDate(sample);
  }

  // Static build: the page shows at once and the shared date loads right after.
  useEffect(() => { if (pendingDate) void loadDate(pendingDate, false); }, [pendingDate]); // eslint-disable-line react-hooks/exhaustive-deps

  async function loadDate(selectedDate: string, scroll = true) {
    if (!isSupportedDate(selectedDate, today)) return;
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 12_000);
    setLoading(true);
    setError("");
    try {
      const loaded = await fetchHit(selectedDate, controller.signal);
      if (activeRequest.current !== controller) return;
      setHit(loaded);
      setSubmittedDate(selectedDate);
      setCopied(false);
      setCopyFallback("");
      setCardUrl("");
      cardBlob.current = null;
      try { window.history.replaceState({}, "", `?date=${selectedDate}`); } catch { /* sandboxed preview */ }
      if (scroll) requestAnimationFrame(() => document.getElementById("result")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }));
    } catch {
      if (activeRequest.current === controller) setError("Не удалось загрузить песню. Проверь интернет и попробуй ещё раз, предыдущий результат сохранён.");
    } finally {
      window.clearTimeout(timeout);
      if (activeRequest.current === controller) { setLoading(false); activeRequest.current = null; }
    }
  }

  function shareUrl() {
    return `${window.location.origin}${window.location.pathname}?date=${submittedDate}`;
  }

  function shareText() {
    if (!hit) return "";
    return `В день моего рождения, ${formatDate(submittedDate)}, ${leadVerb(hit)} «${hit.title}» — ${hit.artist}. А какая у тебя?`;
  }

  async function copyResult() {
    if (!hit) return;
    const url = shareUrl();
    const text = `${shareText()} ${url}`;
    if (typeof navigator.share === "function") {
      try { await navigator.share({ title: "Саундтрек твоего рождения", text: shareText(), url }); return; }
      catch (error) { if ((error as Error)?.name === "AbortError") return; }
    }
    const success = await copyText(text);
    setCopied(success);
    setCopyFallback(success ? "" : text);
  }

  async function makeCard() {
    if (!hit) return;
    setCardBusy(true);
    try {
      const canvas = document.createElement("canvas");
      await ensureCardFonts();
      drawShareCard(canvas, {
        date: formatDate(submittedDate), title: hit.title, artist: hit.artist, year: hit.year, month: hit.month,
        badge: badgeFor(hit).short, site: siteAddress(), verb: leadVerb(hit),
      });
      const blob = await canvasToBlob(canvas);
      if (!blob) return;
      cardBlob.current = blob;
      try {
        const probe = new File([blob], "card.png", { type: "image/png" });
        setCanShareFiles(typeof navigator.canShare === "function" && navigator.canShare({ files: [probe] }));
      } catch { setCanShareFiles(false); }
      setCardUrl(URL.createObjectURL(blob));
    } finally { setCardBusy(false); }
  }

  const closeCard = useCallback(() => setCardUrl(""), []);

  async function shareCard() {
    if (!cardBlob.current) return;
    const file = new File([cardBlob.current], `saundtrek-${submittedDate}.png`, { type: "image/png" });
    try { await navigator.share({ files: [file], text: `${shareText()} ${shareUrl()}` }); } catch { /* user cancelled */ }
  }

  const assessed = hit ? assessPopularity(hit.sources) : null;
  const era = assessed?.level === "review" ? noChartEra(submittedDate) : null;
  const popularity = assessed && era ? { ...assessed, label: era.label, detail: era.detail } : assessed;

  const links = hit ? listenLinks(hit.artist, hit.title) : [];

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="На главную"><img className="brand-logo" src="brand/logo-cream.webp" alt="" width="40" height="40" /> ДК ДАНС</a>
        <nav className="topnav" aria-label="Разделы">
          <a href="#result">Песня</a>
          <a href="#life">Саундтрек жизни</a>
          <a href="#how">Как мы выбираем песню</a>
        </nav>
        <a className="tg-link" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram ↗</a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Саундтрек твоего дня рождения · <span className="nowrap">1970 — {today.slice(0, 4)}</span></p>
        <img className="hero-logo" src="brand/logo-cream.webp" alt="" aria-hidden="true" />
        <h1>Под какую <mark>песню</mark> ты&nbsp;родился?</h1>
        <p className="lede">Выбери дату и мы найдём песню, которая была на пике популярности и чартов в твой день рождения.</p>

        <form className="date-form" onSubmit={handleSubmit}>
          <label htmlFor="birthdate">Дата рождения</label>
          <div className="input-row">
            <input id="birthdate" name="birthdate" type="date" min={FIRST_SUPPORTED_DATE} max={today} value={date} onChange={(event) => setDate(event.target.value)} required />
            <button type="submit" disabled={loading}>{loading ? "Ищем песню…" : "Узнать песню"}</button>
          </div>
          <p className="form-hint">Можно ввести не только день рождения: выпускной, свадьбу, первое свидание.</p>
          {loading && <div className="dk-says dk-loading" role="status"><img src="brand/sticker-dark.webp" alt="" aria-hidden="true" /><p>Копаюсь в архивах хит-парадов…</p></div>}
          {error && <p className="form-error" role="alert">{error}</p>}
        </form>

        <div className="decades">
          <p>Или посмотри пример:</p>
          <div>
            {DECADES.map((decade) => (
              <button key={decade.label} type="button" className={`decade${submittedDate.slice(0, 3) === decade.sample.slice(0, 3) ? " is-active" : ""}`} aria-pressed={submittedDate.slice(0, 3) === decade.sample.slice(0, 3)} onClick={() => showEra(randomDateBetween(decade.from, decade.to, today))}>{decade.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="result-wrap" id="result" aria-live="polite" aria-busy={loading}>
        {hit ? (
          <article className="result-card is-entering" key={submittedDate}>
            <h2 className="result-lead">В твой день рождения {leadVerb(hit)}</h2>
            <div className="carrier-stage">
              <RecordObject title={hit.title} artist={hit.artist} year={hit.year} date={formatDate(submittedDate)} />
            </div>
            <div className="song-copy">
              <h2>{titleParts(hit.title)}</h2>
              <h3>{hit.artist}</h3>

              <div className="actions" aria-label="Слушать и поделиться">
                <p className="listen-caption"><span aria-hidden="true">▶</span> Слушать</p>
                <div className="listen-row">
                  {links.map((link) => (
                    <a key={link.id} className={`btn-service btn-${link.id}`} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                  ))}
                </div>
                <div className="actions-row">
                  <button className="btn-cta btn-story" type="button" onClick={makeCard} disabled={cardBusy}>{cardBusy ? "Делаем карточку…" : "Карточка для сторис"}</button>
                  <button className="btn-quiet" type="button" onClick={copyResult}>{copied ? "Ссылка скопирована ✓" : "Поделиться ссылкой"}</button>
                </div>
              </div>
              <a className="dk-says dk-tg" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><img src="brand/sticker-rose.webp" alt="" aria-hidden="true" /><p>Больше музыкальных историй — у меня в Telegram ↗</p></a>
              {copyFallback && <div className="copy-fallback"><p>Не удалось скопировать автоматически. Выдели текст:</p><textarea aria-label="Результат для копирования" rows={4} readOnly value={copyFallback} onFocus={(event) => event.target.select()} /></div>}

              {cardUrl && (
                <CardModal url={cardUrl} alt={`Карточка: «${hit.title}» — ${hit.artist}, ${formatDate(submittedDate)}`} fileName={`saundtrek-${submittedDate}.png`}
                  canShare={canShareFiles} onShare={shareCard} onClose={closeCard}
                  extra={<>
                    <a className="card-modal-link" href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl())}&text=${encodeURIComponent(shareText())}`} target="_blank" rel="noreferrer">Telegram</a>
                    <a className="card-modal-link" href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl())}&title=${encodeURIComponent(shareText())}`} target="_blank" rel="noreferrer">ВКонтакте</a>
                  </>} />
              )}

              {hit.alternatives.length > 0 && (
                <div className="song-list">
                  <p>Что ещё шумело в эти дни</p>
                  <ul>
                    {hit.alternatives.map((alternative) => (
                      <li key={`${alternative.artist}-${alternative.title}`}><span className="song-name"><b>«{alternative.title}»</b> {alternative.artist}</span><ServiceLinks artist={alternative.artist} title={alternative.title} /></li>
                    ))}
                  </ul>
                </div>
              )}

              {hit.yearContext && hit.yearContext.length > 0 && (
                <div className="song-list year-context">
                  <p>Хиты года твоего рождения</p>
                  <ul>
                    {hit.yearContext.map((song) => (
                      <li key={`${song.artist}-${song.title}`}><span className="song-name"><b>«{song.title}»</b> {song.artist}</span><ServiceLinks artist={song.artist} title={song.title} /></li>
                    ))}
                  </ul>
                  <small>Подтверждены архивом {hit.year} года, без привязки к месяцу.</small>
                </div>
              )}

              <details className="why-note">
                <summary>Почему эта песня и насколько это точно</summary>
                <div className="why-body">
                  <div className={`hit-badge hit-badge-${hit.precision.toLowerCase()}`}><b>{badgeFor(hit).text}</b><span>{hit.period}</span></div>
                  <div className="result-details">
                    <div className="chart-note"><span>{hit.chartRank ? `#${hit.chartRank}` : "✓"}</span><p>{hit.chartMetric}<br /><b>{hit.period}</b></p></div>
                    <div className={`precision precision-${hit.precision.toLowerCase()}`}><span>{detailLabel(hit)}</span><p>{confidentText(hit.proximity)}</p></div>
                  </div>
                  {popularity && <div className={`confidence confidence-${popularity.level}`}><p className="confidence-caption">ЧЕМ ПОДТВЕРЖДЕНО</p><strong>{popularity.label}</strong>{popularity.detail && <p>{popularity.detail}</p>}</div>}
                  {confidentText(hit.method) && <p>{confidentText(hit.method)}</p>}
                  <p className="sources-caption">Источники ({hit.sources.length + 1})</p>
                  <div className="source-list">
                    {hit.sources.map((source) => (
                      <a href={source.url} target="_blank" rel="noreferrer" key={source.id}>
                        <span>{source.kind}</span><b>{source.label}</b><i>↗</i>
                      </a>
                    ))}
                    <a href={hit.archiveUrl} target="_blank" rel="noreferrer">
                      <span>архив</span><b>{hit.archiveLabel}</b><i>↗</i>
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </article>
        ) : (
          loading ? <article className="empty-card loading-card"><p>Ищем песню…</p></article> :
          <article className="empty-card">
            <p>Проверь дату</p>
            <small>Сервис принимает даты с 1 января 1970 года по {formatDate(today)}.</small>
            <a href="#top">Ввести другую дату ↑</a>
          </article>
        )}
        {hit && submittedDate && <LifeSoundtrack birth={submittedDate} initialEntries={submittedDate === initialDate ? initialLife : []} />}
      </section>

      <section className="how" id="how">
        <h2>Как мы выбираем песню</h2>
        <p className="how-lead">Ты вводишь дату — мы находим хит-парад, который вышел ближе всего к этому дню, и берём песню, стоявшую в нём выше всех из русскоязычных. Под каждой песней есть источник.</p>
        <h3 className="how-sub">Откуда берём чарты</h3>
        <ul className="how-sources">
          <li><b>1970–1977, 1982–1985</b>берём песню из журналов, телеэфиров или концертов</li>
          <li><b>1977–1991</b>хит-парады «Московского комсомольца»</li>
          <li><b>1992–1994</b>опросы читателей, чарты продаж, релизы и эфиры месяца</li>
          <li><b>1995–2010</b>еженедельные радиочарты: «Хит-парад двух столиц» «Радио Максимум», «Золотой граммофон» «Русского радио», «Чартова дюжина» «Нашего радио»</li>
          <li><b>2010–2014</b>продажи: цифровой чарт 2М и iTunes Россия</li>
          <li><b>2015 — сегодня</b>Shazam и стриминги: Apple Music, Яндекс Музыка, VK Музыка</li>
        </ul>
        <p className="how-note">Точность и все источники для твоей даты — в блоке «Почему эта песня и насколько это точно» под результатом.</p>
        {songCount ? <p className="how-facts"><b>{songCount.toLocaleString("ru-RU")}</b> песен в базе · хиты с 1970 года до сегодня</p> : null}
      </section>

      <footer><p className="footer-sign"><img src="brand/sticker-rose.webp" alt="" aria-hidden="true" /><span>Сервис придумал ДК ДАНС · <a className="nowrap" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram-канал ↗</a></span></p><a href="#top">Ввести другую дату ↑</a></footer>
    </main>
  );
}
