// Draws 1080×1920 story cards on a canvas. Client-only.
import { CARD } from "./eras";

export type ShareCardData = {
  date: string; // DD.MM.YYYY
  title: string;
  artist: string;
  year: number;
  month?: number;
  badge: string;
  site: string;
  verb?: string; // "самой популярной песней была" | "звучала песня"
};

const W = 1080;
const H = 1920;
const DISPLAY = "Nozhik, Unbounded, 'Arial Black', Arial, sans-serif";
const BODY = "'Golos Text', Arial, Helvetica, sans-serif";
const MONO = "'JetBrains Mono', Menlo, Consolas, monospace";

// Brand images drawn on the card (same-origin files from /brand). Loaded once.
const BRAND: Record<string, HTMLImageElement | null> = { logo: null, ring: null };
function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => resolve(null); img.src = src; });
}
async function ensureBrandImages() {
  if (typeof document === "undefined" || BRAND.logo) return;
  const [logo, ring] = await Promise.all(["brand/logo-cream.webp", "brand/ring-cream.webp"].map(loadImage));
  Object.assign(BRAND, { logo, ring });
}

// Canvas does not wait for web fonts; make sure the faces are ready before drawing.
export async function ensureCardFonts() {
  await ensureBrandImages();
  if (typeof document === "undefined" || !document.fonts) return;
  await Promise.all([
    "700 80px Nozhik", "800 80px Unbounded", "600 40px 'Golos Text'", "700 40px 'Golos Text'", "700 30px 'JetBrains Mono'",
  ].map((font) => document.fonts.load(font, "АБВабв").catch(() => undefined)));
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth || !line) line = next;
    else { lines.push(line); line = word; }
  }
  if (line) lines.push(line);
  return lines;
}

// Largest font size (step 4px) at which the text fits in maxLines without overflowing.
function fit(ctx: CanvasRenderingContext2D, text: string, font: string, weight: number, max: number, min: number, maxWidth: number, maxLines: number) {
  for (let size = max; size >= min; size -= 4) {
    ctx.font = `${weight} ${size}px ${font}`;
    const lines = wrap(ctx, text, maxWidth);
    if (lines.length <= maxLines && lines.every((l) => ctx.measureText(l).width <= maxWidth)) return { size, lines };
  }
  ctx.font = `${weight} ${min}px ${font}`;
  const lines = wrap(ctx, text, maxWidth);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/\s*\S*$/, "")}…`;
  }
  for (let i = 0; i < lines.length; i += 1) {
    while (ctx.measureText(lines[i]).width > maxWidth && lines[i].length > 2) lines[i] = `${lines[i].slice(0, -2)}…`;
  }
  return { size: min, lines };
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// One vinyl record: the single visual hero of the story card.
function drawRecord(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, label: string) {
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,.55)"; ctx.shadowBlur = 60; ctx.shadowOffsetY = 24;
  ctx.fillStyle = "#0d0c10"; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  for (let rr = r - 14; rr > r * 0.4; rr -= 9) {
    ctx.strokeStyle = rr % 3 ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.04)"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.strokeStyle = "rgba(255,255,255,.24)"; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.78, -1.15, -0.35); ctx.stroke();
  ctx.fillStyle = label; ctx.beginPath(); ctx.arc(cx, cy, r * 0.34, 0, Math.PI * 2); ctx.fill();
  if (BRAND.ring) {
    const d = r * 0.7; ctx.drawImage(BRAND.ring, cx - d / 2, cy - d / 2, d, d);
    ctx.fillStyle = "#1f1f1f"; ctx.beginPath(); ctx.arc(cx, cy, r * 0.03, 0, Math.PI * 2); ctx.fill();
    return;
  }
  ctx.fillStyle = "#17151c"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  let labelSize = Math.round(r * 0.1);
  do { ctx.font = `800 ${labelSize}px ${DISPLAY}`; labelSize -= 1; } while (ctx.measureText("ДК ДАНС").width > r * 0.5 && labelSize > 10);
  ctx.fillText("ДК ДАНС", cx, cy - r * 0.13);
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.035, 0, Math.PI * 2); ctx.fill();
  ctx.font = `600 ${Math.round(r * 0.06)}px ${MONO}`; ctx.fillText("33⅓", cx, cy + r * 0.15);
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
}

const MONTHS_GEN = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
function longDate(ddmmyyyy: string) {
  const [d, m, y] = ddmmyyyy.split(".").map(Number);
  return `${d} ${MONTHS_GEN[m - 1]} ${y}`;
}

type Palette = typeof CARD;
function frame(ctx: CanvasRenderingContext2D, era: Palette) {
  ctx.fillStyle = era.bg; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = era.ink; ctx.lineWidth = 6; ctx.strokeRect(48, 48, W - 96, H - 96);
}

function header(ctx: CanvasRenderingContext2D, era: Palette, right: string) {
  if (BRAND.logo) {
    ctx.drawImage(BRAND.logo, 92, 84, 108, 108);
    ctx.fillStyle = era.ink; ctx.font = `700 54px ${DISPLAY}`; ctx.textBaseline = "middle"; ctx.fillText("ДК ДАНС", 220, 140);
    ctx.textAlign = "right"; ctx.font = `700 22px ${MONO}`; ctx.fillText(right, W - 96, 140);
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic"; ctx.fillRect(96, 216, W - 192, 3);
    return;
  }
  ctx.fillStyle = era.ink; ctx.beginPath(); ctx.arc(128, 136, 34, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = era.bg; ctx.font = `800 20px ${DISPLAY}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText("ДК", 128, 138);
  ctx.fillStyle = era.ink; ctx.textAlign = "left"; ctx.font = `800 36px ${DISPLAY}`; ctx.fillText("ДАНС", 176, 138);
  ctx.textAlign = "right"; ctx.font = `700 22px ${MONO}`; ctx.fillText(right, W - 96, 138);
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillRect(96, 200, W - 192, 3);
}

function footer(ctx: CanvasRenderingContext2D, era: Palette, question: string, site: string) {
  ctx.fillStyle = era.ink; ctx.fillRect(48, H - 180, W - 96, 132);
  ctx.fillStyle = era.bg; ctx.font = `800 28px ${DISPLAY}`; ctx.fillText(question, 96, H - 116);
  ctx.font = `600 26px ${BODY}`; ctx.fillText(site, 96, H - 72);
  ctx.fillStyle = era.accent; ctx.textAlign = "right"; ctx.font = `800 56px ${DISPLAY}`; ctx.fillText("↗", W - 96, H - 88); ctx.textAlign = "left";
}

// Simple story card: brand, one sentence, one date, one record, the song once.
export function drawShareCard(canvas: HTMLCanvasElement, d: ShareCardData) {
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const era = CARD;
  frame(ctx, era);
  header(ctx, era, "");

  ctx.fillStyle = era.ink;
  // «В мой день рождения — 12 июня 1985 — самой популярной песней была»: the date sits
  // inside the sentence so "день рождения" reads as the day of birth, not a yearly party.
  const lead = fit(ctx, `В мой день рождения — ${longDate(d.date)} — ${d.verb ?? "самой популярной песней была"}`, DISPLAY, 800, 84, 44, W - 184, 4);
  ctx.font = `800 ${lead.size}px ${DISPLAY}`;
  let ly = 330;
  for (const line of lead.lines) { ctx.fillText(line, 92, ly); ly += lead.size * 1.08; }

  drawRecord(ctx, W / 2, 860, 300, era.accent);

  ctx.fillStyle = era.ink;
  const title = fit(ctx, `«${d.title}»`, DISPLAY, 800, 124, 60, W - 192, 3);
  ctx.font = `800 ${title.size}px ${DISPLAY}`;
  let y = 1240 + title.size * 0.85;
  for (const line of title.lines) { ctx.fillText(line, 92, y); y += title.size * 1.05; }
  ctx.fillStyle = era.muted;
  const artist = fit(ctx, d.artist, BODY, 600, 52, 32, W - 192, 2);
  ctx.font = `600 ${artist.size}px ${BODY}`;
  y += 14;
  for (const line of artist.lines) { ctx.fillText(line, 96, y); y += artist.size * 1.15; }
  footer(ctx, era, "А КАКАЯ ПЕСНЯ У ТЕБЯ?", d.site);
}

export type LifeCardData = {
  birth: string; // DD.MM.YYYY
  rows: { age: number; year: number; title: string; artist: string; milestone?: string }[];
  total: number;
  totalWord: string;
  site: string;
};

export function drawLifeCard(canvas: HTMLCanvasElement, data: LifeCardData) {
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const era = CARD;
  frame(ctx, era);
  header(ctx, era, data.birth);
  ctx.fillStyle = era.ink; ctx.font = `800 96px ${DISPLAY}`;
  ctx.fillText("САУНДТРЕК", 90, 330); ctx.fillText("МОЕЙ ЖИЗНИ", 90, 438);
  ctx.fillStyle = era.muted; ctx.font = `600 30px ${BODY}`;
  ctx.fillText(`${data.total} ${data.totalWord} — по одной на каждый день рождения`, 96, 504);

  const top = 580, bottom = H - 220;
  const step = (bottom - top) / Math.max(data.rows.length, 1);
  ctx.fillStyle = era.ink; ctx.fillRect(176, top - 10, 4, bottom - top);
  data.rows.forEach((row, i) => {
    const y = top + i * step;
    ctx.fillStyle = row.milestone ? era.accent : era.bg; ctx.beginPath(); ctx.arc(178, y + 34, 17, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = era.ink; ctx.lineWidth = 3; ctx.stroke();
    ctx.fillStyle = era.ink; ctx.textAlign = "right"; ctx.font = `800 56px ${DISPLAY}`;
    ctx.fillText(String(row.age), 140, y + 56);
    ctx.textAlign = "left"; ctx.fillStyle = era.muted; ctx.font = `700 21px ${MONO}`;
    ctx.fillText(`${row.year}${row.milestone ? ` · ${row.milestone.toLocaleUpperCase("ru-RU")}` : ""}`, 220, y + 18);
    ctx.fillStyle = era.ink;
    const title = fit(ctx, `«${row.title}»`, DISPLAY, 800, 40, 26, W - 316, 1);
    ctx.font = `800 ${title.size}px ${DISPLAY}`; ctx.fillText(title.lines[0], 220, y + 66);
    ctx.fillStyle = era.muted;
    const artist = fit(ctx, row.artist, BODY, 600, 28, 20, W - 316, 1);
    ctx.font = `600 ${artist.size}px ${BODY}`; ctx.fillText(artist.lines[0], 220, y + 104);
  });
  footer(ctx, era, "А КАКОЙ САУНДТРЕК У ТЕБЯ?", data.site);
}

export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), "image/png"));
}
