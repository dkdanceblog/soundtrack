// Occasions: the song lookup is the same, only the words around it change.
export type ScenarioId = "birthday" | "school" | "wedding" | "prom";

export type Scenario = {
  id: ScenarioId;
  chip: string;
  link: string; // "Или узнай песню: …" wording
  input: "date" | "year";
  yearLabel?: string;
  eyebrow: string;
  h1: [string, string, string]; // before / highlighted word / after
  lede: string;
  label: string;
  resultLead: string; // "В твой день рождения" + "самой популярной песней была"
  cardLines: [string, string];
  sleeve: string;
  shareIntro: string;
  cardQuestion: string;
  shareQuestion: string;
};

export const SCENARIOS: readonly Scenario[] = [
  {
    id: "birthday", eyebrow: "Саундтрек твоего дня рождения", chip: "День рождения", link: "дня рождения", input: "date",
    h1: ["Под какую ", "песню", " ты\u00a0родился?"],
    lede: "Выбери дату и мы найдём песню, которая была на пике популярности и чартов в твой день рождения.",
    label: "Дата рождения", resultLead: "В твой день рождения",
    cardLines: ["В день", "моего рождения"], sleeve: "саундтрек дня рождения",
    shareIntro: "В день моего рождения", cardQuestion: "А под какую родился ты?", shareQuestion: "А какая у тебя?",
  },
  {
    id: "school", eyebrow: "Саундтрек первого звонка", chip: "1 сентября", link: "1 сентября", input: "year",
    h1: ["Под какую ", "песню", " ты\u00a0пошёл в\u00a0школу?"],
    lede: "Выбери год, когда ты пошёл в первый класс, и мы найдём песню, которая была главным хитом 1 сентября.",
    label: "Год первого класса", yearLabel: "1 сентября", resultLead: "В твой первый школьный день",
    cardLines: ["В мой первый", "школьный день"], sleeve: "саундтрек 1 сентября",
    shareIntro: "В мой первый школьный день", cardQuestion: "А с какой песней в школу шёл ты?", shareQuestion: "А какая была у тебя?",
  },
  {
    id: "wedding", eyebrow: "Саундтрек вашей свадьбы", chip: "Свадьба", link: "свадьбы", input: "date",
    h1: ["Под какую ", "песню", " вы\u00a0поженились?"],
    lede: "Выбери дату свадьбы и мы найдём песню, которая была на пике популярности и чартов в ваш день.",
    label: "Дата свадьбы", resultLead: "В день вашей свадьбы",
    cardLines: ["В день", "нашей свадьбы"], sleeve: "саундтрек свадьбы",
    shareIntro: "В день нашей свадьбы", cardQuestion: "А какая была на вашей свадьбе?", shareQuestion: "А какая была на вашей?",
  },
  {
    id: "prom", eyebrow: "Саундтрек твоего выпускного", chip: "Выпускной", link: "выпускного", input: "year",
    h1: ["Под какую ", "песню", " был твой\u00a0выпускной?"],
    lede: "Выбери год выпускного, и мы найдём песню, которая была главным хитом в конце июня. Помнишь точную дату — введи её.",
    label: "Год выпускного", yearLabel: "выпускной", resultLead: "На твоём выпускном",
    cardLines: ["На моём", "выпускном"], sleeve: "саундтрек выпускного",
    shareIntro: "На моём выпускном", cardQuestion: "А какая была на твоём выпускном?", shareQuestion: "А какая была на твоём?",
  },
];

/** The day a year-only occasion stands for: 1 September, or the last Saturday of June for a prom. */
export function dateForYear(id: ScenarioId, year: number): string {
  if (id === "school") return `${year}-09-01`;
  const d = new Date(Date.UTC(year, 5, 30));
  d.setUTCDate(30 - ((d.getUTCDay() + 1) % 7));
  return d.toISOString().slice(0, 10);
}

/** Suggested year from a birth date: first grade at 7 (born after 1 Sept → a year later), prom 11 years on. */
export function suggestedYear(id: ScenarioId, birth: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birth)) return null;
  const y = Number(birth.slice(0, 4)) + (birth.slice(5) > "09-01" ? 8 : 7);
  return id === "school" ? y : id === "prom" ? y + 11 : null;
}

export function scenarioById(id: string | null | undefined): Scenario {
  return SCENARIOS.find((scenario) => scenario.id === id) ?? SCENARIOS[0];
}
