// The resolver writes careful research notes. On the site we show only what the
// sources confirm and drop the self-doubting caveats ("не установлено", "не доказывает"…).
const HEDGE = new RegExp([
  "не установлен", "не установлены", "не доказ", "не заменяет", "не сверен", "не сверены",
  "не подтвержда", "не подтверждён", "не проверен", "недостаточ", "не итог", "не считают", "не считается",
  "ещё не", "пока не", "пока нет", "не заявля", "не приписыва", "не выда[её]тся", "не представлены",
  "а не (к |доказ|точн)", "перепровер", "вторичный источник", "не измеренный", "требует",
  "только месячн", "^Точность только", "тройки нет", "различаются", "перепубликаци", "одним издателем", "противоречив",
].join("|"), "i");

const REWRITES: readonly [RegExp, string][] = [
  [/\(не дальше (\d+) (дн\S*) от даты\)/g, "(до $1 $2 от даты)"],
  [/каждая не меньше (\S+ \S+) в чарте/g, "каждая — от $1 в чарте"],
];

function weeksWord(n: number) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "неделя";
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "недели";
  return "недель";
}

function capitalize(text: string) {
  return text ? text[0].toLocaleUpperCase("ru-RU") + text.slice(1) : text;
}

export function confidentText(text: string | undefined): string {
  if (!text) return "";
  let value = text.replace(/Для этой записи указано (\d+) недел[а-яё]*/g, (_, n) => `В чарте — ${n} ${weeksWord(Number(n))}`)
    .replace(/в пределах (\d+) дн\. от/g, (_, n) => n === "1" ? "в пределах дня от" : `в пределах ${n} дней от`);
  for (const [pattern, replacement] of REWRITES) value = value.replace(pattern, replacement);
  const sentences = value.split(/(?<=[.!?])\s+/).map((sentence) => {
    const end = /[.!?]$/.test(sentence) ? sentence.slice(-1) : "";
    const body = end ? sentence.slice(0, -1) : sentence;
    const clauses = body.split(/;\s+/).filter((clause) => !HEDGE.test(clause));
    if (!clauses.length) return "";
    return capitalize(clauses.join("; ").replace(/[,:]\s*$/, "")) + (end || ".");
  }).filter(Boolean);
  return sentences.join(" ");
}
