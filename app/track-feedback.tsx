"use client";

import { useState } from "react";
import type { BirthdayHit } from "./hits";

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch { /* Keep the visible text available for manual copying. */ }
  return false;
}

export function TrackFeedback({ hit, date }: { hit: BirthdayHit; date: string }) {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const report = `Замечание к «Саундтреку рождения»\nДата: ${date}\nПесня: ${hit.artist} — ${hit.title}\nТочность: ${hit.precision}\nЧто стоит проверить: ${note || "Не уверен в выборе песни"}\nИсточники:\n${hit.sources.map((source) => `${source.label}: ${source.url}`).join("\n")}`;

  return <details className="feedback-note">
    <summary>Сомневаюсь в треке</summary>
    <p>Не та песня, версия или время? Подготовь замечание для редакции ДК ДАНС. Оно не отправляется автоматически.</p>
    <label htmlFor="track-note">Что стоит проверить? Можно добавить ссылку на источник.</label>
    <textarea id="track-note" rows={3} maxLength={2000} value={note} onChange={(event) => { setNote(event.target.value); setStatus(""); }} />
    <button className="source-link" type="button" onClick={async () => setStatus(await copyText(report) ? "Скопировано. Теперь можно отправить редакции." : "Выдели и скопируй текст ниже вручную.")}>Скопировать замечание</button>
    <p role="status">{status}</p>
    <details><summary>Текст замечания</summary><textarea aria-label="Готовое замечание для копирования" rows={7} readOnly value={report} onFocus={(event) => event.target.select()} /></details>
  </details>;
}
