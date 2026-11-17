"use client";

import { useEffect, useRef, useState, type ClipboardEvent } from "react";

const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const MONTHS_NOM = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const MONTHS_PREP = ["январе", "феврале", "марте", "апреле", "мае", "июне", "июле", "августе", "сентябре", "октябре", "ноябре", "декабре"];
const pad = (value: number) => String(value).padStart(2, "0");

type Parts = { d: string; m: string; y: string };

function split(value: string): Parts {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  return match ? { d: String(Number(match[3])), m: String(Number(match[2])), y: match[1] } : { d: "", m: "", y: "" };
}

function daysIn(month: number, year: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function display(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** Checks the typed parts; returns the ISO date or a short, specific hint. */
function resolve({ d, m, y }: Parts, min: string, max: string): { iso: string; hint: string } {
  if (!d || !m || y.length < 4) return { iso: "", hint: "" };
  const day = Number(d), month = Number(m), year = Number(y);
  const limit = daysIn(month, year);
  if (day < 1 || day > limit) return { iso: "", hint: `В ${MONTHS_PREP[month - 1]} ${year} года ${limit} ${limit === 31 ? "день" : "дней"}` };
  const iso = `${year}-${pad(month)}-${pad(day)}`;
  if (iso < min) return { iso: "", hint: `Песни есть с ${display(min)}` };
  if (iso > max) return { iso: "", hint: `Песни есть по ${display(max)}` };
  return { iso, hint: "" };
}

/** Parses "20.07.1998", "20/07/1998", "1998-07-20" or "20071998". */
function parsePasted(text: string): Parts | null {
  const clean = text.trim();
  let match = /^(\d{1,2})[.\/\-\s](\d{1,2})[.\/\-\s](\d{4})$/.exec(clean);
  if (match) return { d: String(Number(match[1])), m: String(Number(match[2])), y: match[3] };
  match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(clean);
  if (match) return { d: String(Number(match[3])), m: String(Number(match[2])), y: match[1] };
  match = /^(\d{2})(\d{2})(\d{4})$/.exec(clean);
  if (match) return { d: String(Number(match[1])), m: String(Number(match[2])), y: match[3] };
  return null;
}

type Props = {
  id: string;
  name?: string;
  value: string;
  min: string;
  max: string;
  onChange: (iso: string) => void;
  label?: string;
};

/**
 * Day · month · year. A birth date is remembered, not looked up, so it is typed (numeric
 * keyboard on phones) instead of paged through a calendar; the calendar stays one tap away.
 */
export function DateFields({ id, name, value, min, max, onChange, label }: Props) {
  const [parts, setParts] = useState<Parts>(() => split(value));
  const lastEmitted = useRef(value);
  const monthRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLInputElement>(null);
  // iPhone/iPad: the system date wheels are already quick, keep them.
  const [wheels, setWheels] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent;
    setWheels(/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1));
  }, []);

  // A date set from outside (example buttons, a shared link) refills the fields.
  useEffect(() => {
    if (value !== lastEmitted.current) { setParts(split(value)); lastEmitted.current = value; }
  }, [value]);

  const { iso, hint } = resolve(parts, min, max);

  function update(next: Parts) {
    setParts(next);
    const result = resolve(next, min, max).iso;
    if (result !== lastEmitted.current) { lastEmitted.current = result; onChange(result); }
  }

  function onPaste(event: ClipboardEvent<HTMLInputElement>) {
    const parsed = parsePasted(event.clipboardData.getData("text"));
    if (!parsed) return;
    event.preventDefault();
    update(parsed);
  }

  function openPicker() {
    const picker = pickerRef.current;
    if (!picker) return;
    try { picker.showPicker(); } catch { picker.focus(); picker.click(); }
  }

  if (wheels) {
    return (
      <div className="date-fields date-fields-native">
        {name && <input type="hidden" name={name} value={iso} />}
        <input
          id={id} type="date" aria-label={label ?? "Дата"} min={min} max={max} value={iso}
          onChange={(event) => update(split(event.target.value))}
        />
        {hint && <p className="df-hint" role="alert">{hint}</p>}
      </div>
    );
  }

  return (
    <div className="date-fields" role="group" aria-label={label ?? "Дата"}>
      {name && <input type="hidden" name={name} value={iso} />}
      <input
        id={id} className="df-day" inputMode="numeric" autoComplete="bday-day" placeholder="ДД" aria-label="День"
        maxLength={2} value={parts.d} onPaste={onPaste}
        onChange={(event) => {
          const d = event.target.value.replace(/\D/g, "").slice(0, 2);
          update({ ...parts, d });
          if (d.length === 2 || Number(d) > 3) monthRef.current?.focus();
        }}
      />
      <select
        ref={monthRef} className={`df-month${parts.m ? "" : " is-empty"}`} autoComplete="bday-month" aria-label="Месяц" value={parts.m}
        onChange={(event) => { update({ ...parts, m: event.target.value }); yearRef.current?.focus(); }}
      >
        <option value="" disabled>Месяц</option>
        {MONTHS_NOM.map((month, index) => <option key={month} value={String(index + 1)}>{month}</option>)}
      </select>
      <input
        ref={yearRef} className="df-year" inputMode="numeric" autoComplete="bday-year" placeholder="ГГГГ" aria-label="Год"
        maxLength={4} value={parts.y} onPaste={onPaste}
        onChange={(event) => update({ ...parts, y: event.target.value.replace(/\D/g, "").slice(0, 4) })}
      />
      <button type="button" className="df-calendar" onClick={openPicker} aria-label="Выбрать в календаре" title="Выбрать в календаре">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2Zm12 8H5v9h14v-9ZM5 8h14V6H5v2Z" /></svg>
      </button>
      <input
        ref={pickerRef} className="df-picker" type="date" tabIndex={-1} aria-hidden="true" min={min} max={max} value={iso}
        onChange={(event) => { if (event.target.value) update(split(event.target.value)); }}
      />
      {hint && <p className="df-hint" role="alert">{hint}</p>}
    </div>
  );
}
