import { readFile } from "node:fs/promises";

const sourcePath = process.argv[2];
if (!sourcePath) {
  throw new Error("Usage: node scripts/extract-ridero-charts.mjs <ridero-html>");
}

const html = await readFile(sourcePath, "utf8");

const sourceUrl = "https://ridero.ru/books/khit-parady_v_sssr_1/freeText/";
const annualArchiveUrls = {
  1985: "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1985god/",
  1986: "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1986god/",
  1987: "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1987god/",
  1988: "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1988god/",
  1989: "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1989god/",
  1990: "https://music-press-archive.com/khitparadsssr/khitparadsssr19901991god/",
  1991: "https://music-press-archive.com/khitparadsssr/khitparadsssr19901991god/",
};

const monthNumbers = new Map([
  ["ЯНВАРЯ", 1],
  ["ФЕВРАЛЯ", 2],
  ["МАРТА", 3],
  ["АПРЕЛЯ", 4],
  ["МАЯ", 5],
  ["ИЮНЯ", 6],
  ["ИЮНЬ", 6],
  ["ИЮЛЯ", 7],
  ["АВГУСТА", 8],
  ["СЕНТЯБРЯ", 9],
  ["ОКТЯБРЯ", 10],
  ["ОКТЯБРЬ", 10],
  ["НОЯБРЯ", 11],
  ["ДЕКАБРЯ", 12],
]);

function decodeHtml(value) {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&laquo;|&#171;/gi, "«")
    .replace(/&raquo;|&#187;/gi, "»")
    .replace(/&mdash;|&#8212;/gi, "—")
    .replace(/&ndash;|&#8211;/gi, "–")
    .replace(/&amp;/gi, "&")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

const paragraphs = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map((match) => decodeHtml(match[1]))
  .filter(Boolean);

let activeYear = null;
let activeChart = null;
const charts = [];

function closeChart() {
  if (activeChart?.rows.length) charts.push(activeChart);
  activeChart = null;
}

for (const paragraph of paragraphs) {
  if (/^(198[5-9]|199[01])$/.test(paragraph)) {
    closeChart();
    activeYear = Number(paragraph);
    continue;
  }

  const heading = paragraph.match(/^ПЕСНИ\s+(.+?)(?:\s*\(Выпуск\s+([^)]+)\))?$/i);
  if (heading && activeYear && activeYear >= 1985 && activeYear <= 1991) {
    closeChart();
    const explicitYear = heading[1].match(/\b(198[5-9]|199[01])\b/);
    activeChart = {
      year: explicitYear ? Number(explicitYear[1]) : activeYear,
      heading: heading[1].trim(),
      issue: heading[2]?.trim() ?? null,
      rows: [],
    };
    continue;
  }

  if (!activeChart) continue;
  if (/^(ИТОГИ|ЛУЧШ|ПЕВИЦА|ПЕВЕЦ|ГРУППА|АНСАМБЛЬ|ПЛАСТИНКИ|ДИСКИ|АЛЬБОМ)/i.test(paragraph)) {
    closeChart();
    continue;
  }

  const row = paragraph.match(/^(\d+)(?:\s+\([^)]+\))?\s+«([^»]+)»(?:\s+\([^)]*\))?\s*[—–-]\s*(.+)$/);
  if (!row) continue;
  const artist = row[3]
    .split(/\s+\d+\s+(?:\([^)]+\)\s+)?«/)[0]
    .replace(/\s+\(\d+\)(?:\s+\(с\)\s+.*)?$/i, "")
    .trim();
  activeChart.rows.push({
    rank: Number(row[1]),
    title: row[2].trim(),
    artist,
  });
}

closeChart();

function canonical(value) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseIssueDate(value, fallbackYear) {
  if (!value) return null;
  const match = value.match(/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/);
  if (!match) return null;
  const rawYear = Number(match[3]);
  const year = rawYear < 100 ? 1900 + rawYear : rawYear || fallbackYear;
  return `${year}-${String(Number(match[2])).padStart(2, "0")}-${String(Number(match[1])).padStart(2, "0")}`;
}

function chartMonths(heading) {
  const normalized = heading.toLocaleUpperCase("ru-RU").replace(/[.,]/g, " ");
  const words = normalized.split(/\s+/).filter(Boolean);
  const result = words.map((word) => monthNumbers.get(word)).filter(Boolean);
  return [...new Set(result)].sort((left, right) => left - right);
}

function uniqueTopRows(rows) {
  const selected = [];
  const seen = new Set();
  for (const row of rows) {
    if (!row.artist || !row.title || row.rank > 10) continue;
    const key = canonical(`${row.artist} ${row.title}`);
    if (seen.has(key)) continue;
    seen.add(key);
    selected.push(row);
    if (selected.length === 3) break;
  }
  return selected;
}

const monthlyCharts = charts.flatMap((chart) => {
  const issueDate = parseIssueDate(chart.issue, chart.year);
  const rows = uniqueTopRows(chart.rows);
  return chartMonths(chart.heading).map((month) => ({
    year: chart.year,
    month,
    issueDate,
    rows,
  }));
}).filter((chart) => chart.rows.length >= 3);

if (!process.argv.includes("--module")) {
  process.stdout.write(`${JSON.stringify(monthlyCharts, null, 2)}\n`);
  process.exit(0);
}

const q = (value) => JSON.stringify(value);
const lines = [
  'import type { HistoricalBroadcast } from "./historical-broadcasts-1986-1987";',
  "",
  `const chartSourceUrl = ${q(sourceUrl)};`,
  "const annualArchiveUrls: Readonly<Record<number, string>> = {",
];

for (const [year, url] of Object.entries(annualArchiveUrls)) {
  lines.push(`  ${year}: ${q(url)},`);
}

lines.push(
  "};",
  "",
  "const monthLabels = [\"январь\", \"февраль\", \"март\", \"апрель\", \"май\", \"июнь\", \"июль\", \"август\", \"сентябрь\", \"октябрь\", \"ноябрь\", \"декабрь\"] as const;",
  "",
  "type ChartRow = readonly [artist: string, title: string, rank: number];",
  "",
  "function slug(value: string) {",
  "  return value",
  '    .normalize("NFKC")',
  '    .toLocaleLowerCase("ru-RU")',
  '    .replace(/ё/g, "е")',
  '    .replace(/[^a-zа-я0-9]+/g, "-")',
  '    .replace(/^-|-$/g, "");',
  "}",
  "",
  "function monthlyChart(year: number, month: number, issueDate: string, rows: readonly ChartRow[]): HistoricalBroadcast {",
  "  const monthValue = String(month).padStart(2, \"0\");",
  "  const monthLabel = monthLabels[month - 1];",
  "  const issueLabel = issueDate.split(\"-\").reverse().join(\".\");",
  "  return {",
  "    chartDate: `${year}-${monthValue}-15`,",
  "    dateLabel: `${monthLabel} ${year} · опубликовано ${issueLabel}` ,",
  "    archiveYear: year,",
  '    programLabel: "«Звуковая дорожка» МК",',
  '    anchorKind: "месячный чарт",',
  "    candidates: rows.map(([artist, title, rank]) => {",
  "      const rowSlug = slug(`${artist}-${title}`);",
  "      return {",
  "        artist,",
  "        title,",
  "        sources: [",
  "          {",
  "            id: `zd-mk-${year}-${monthValue}-${rank}-${rowSlug}` ,",
  "            label: `«Звуковая дорожка» МК: #${rank} за ${monthLabel} ${year} · выпуск ${issueLabel}` ,",
  "            url: chartSourceUrl,",
  '            kind: "читательский чарт",',
  "            rank,",
  "          },",
  "          {",
  "            id: `press-archive-${year}-${monthValue}-${rowSlug}` ,",
  "            label: `Архив хит-парадов СССР за ${year} год` ,",
  "            url: annualArchiveUrls[year],",
  '            kind: "архив прессы",',
  "          },",
  "        ],",
  "      };",
  "    }),",
  "  };",
  "}",
  "",
  "export const HISTORICAL_MONTHLY_CHARTS_1985_1991: readonly HistoricalBroadcast[] = [",
);

for (const chart of monthlyCharts) {
  lines.push(`  monthlyChart(${chart.year}, ${chart.month}, ${q(chart.issueDate)}, [`);
  for (const row of chart.rows) {
    lines.push(`    [${q(row.artist)}, ${q(row.title)}, ${row.rank}],`);
  }
  lines.push("  ]),");
}

lines.push("];", "", "export const HISTORICAL_MONTHLY_CHART_COUNT = HISTORICAL_MONTHLY_CHARTS_1985_1991.length;", "");
process.stdout.write(lines.join("\n"));
