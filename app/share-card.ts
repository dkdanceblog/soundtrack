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
  ctx.fillStyle = era.bg; ctx.font = `800 40px ${DISPLAY}`; ctx.fillText(question, 96, H - 112, W - 260);
  ctx.font = `600 28px ${BODY}`; ctx.fillText(`→ ${site}`, 96, H - 68);
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
  // Two short display lines, the date in mono, the verb in plain text: caps stay short.
  let leadSize = 96;
  do { ctx.font = `800 ${leadSize}px ${DISPLAY}`; leadSize -= 2; } while (ctx.measureText("моего рождения").width > W - 192 && leadSize > 40);
  ctx.fillText("В день", 92, 330);
  ctx.fillText("моего рождения", 92, 330 + leadSize * 1.05);
  ctx.fillStyle = era.muted; ctx.font = `700 30px ${MONO}`;
  ctx.fillText(longDate(d.date).toLocaleUpperCase("ru-RU"), 96, 330 + leadSize * 1.05 + 62);
  ctx.fillStyle = era.ink; ctx.font = `600 40px ${BODY}`;
  ctx.fillText(d.verb ?? "самой популярной песней была", 96, 330 + leadSize * 1.05 + 122);

  drawRecord(ctx, W / 2, 900, 280, era.accent);

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
  footer(ctx, era, "А под какую родился ты?", d.site);
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
  header(ctx, era, "");

  // Same rhythm as the main card: two short display lines, date in mono, a plain sentence.
  ctx.fillStyle = era.ink;
  let leadSize = 96;
  do { ctx.font = `800 ${leadSize}px ${DISPLAY}`; leadSize -= 2; } while (ctx.measureText("моей жизни").width > W - 192 && leadSize > 40);
  ctx.fillText("Саундтрек", 92, 330);
  ctx.fillText("моей жизни", 92, 330 + leadSize * 1.05);
  ctx.fillStyle = era.muted; ctx.font = `700 30px ${MONO}`;
  ctx.fillText(`С ${longDate(data.birth).toLocaleUpperCase("ru-RU")}`, 96, 330 + leadSize * 1.05 + 62);
  ctx.fillStyle = era.ink; ctx.font = `600 40px ${BODY}`;
  ctx.fillText("самые популярные песни в мои дни рождения", 96, 330 + leadSize * 1.05 + 122, W - 192);

  const top = 640, bottom = H - 230;
  const rows = data.rows;
  const step = (bottom - top) / Math.max(rows.length, 1);
  const k = Math.max(.72, Math.min(1, step / 262));
  const textX = 250, maxW = W - textX - 96;
  rows.forEach((row, i) => {
    const y = top + i * step;
    if (i > 0) { ctx.fillStyle = "rgba(252,223,204,.18)"; ctx.fillRect(96, y - 28 * k, W - 192, 2); }
    // Age: big outlined number on the left, accent for milestones.
    ctx.textAlign = "right"; ctx.font = `800 ${Math.round(120 * k)}px ${DISPLAY}`;
    ctx.fillStyle = row.milestone || i === 0 ? era.accent : era.ink;
    ctx.fillText(String(row.age), textX - 40, y + 112 * k);
    ctx.textAlign = "left";
    ctx.fillStyle = era.muted; ctx.font = `700 ${Math.round(26 * Math.max(k, .85))}px ${MONO}`;
    const label = i === 0 ? "ДЕНЬ РОЖДЕНИЯ" : row.milestone ? row.milestone.toLocaleUpperCase("ru-RU") : `${row.age} ${ageWord(row.age)}`.toLocaleUpperCase("ru-RU");
    ctx.fillText(`${row.year} · ${label}`, textX, y + 22);
    ctx.fillStyle = era.ink;
    const title = fit(ctx, `«${row.title}»`, DISPLAY, 800, Math.round(76 * k), Math.round(44 * k), maxW, 1);
    ctx.font = `800 ${title.size}px ${DISPLAY}`; ctx.fillText(title.lines[0], textX - 4, y + 24 * k + title.size * 0.95);
    ctx.fillStyle = era.muted;
    const artist = fit(ctx, row.artist, BODY, 600, Math.round(38 * Math.max(k, .75)), 24, maxW, 1);
    ctx.font = `600 ${artist.size}px ${BODY}`; ctx.fillText(artist.lines[0], textX, y + 24 * k + title.size * 0.95 + artist.size * 1.4);
  });
  footer(ctx, era, "А какой саундтрек у тебя?", data.site);
}

function ageWord(n: number) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "год";
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "года";
  return "лет";
}

export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), "image/png"));
}
