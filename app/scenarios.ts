// Occasions: the song lookup is the same, only the words around it change.
export type ScenarioId = "birthday" | "wedding" | "prom" | "meet";

export type Scenario = {
  id: ScenarioId;
  chip: string;
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
    id: "birthday", eyebrow: "Саундтрек твоего дня рождения", chip: "День рождения",
    h1: ["Под какую ", "песню", " ты родился?"],
    lede: "Выбери дату и мы найдём песню, которая была на пике популярности и чартов в твой день рождения.",
    label: "Дата рождения", resultLead: "В твой день рождения",
    cardLines: ["В день", "моего рождения"], sleeve: "саундтрек дня рождения",
    shareIntro: "В день моего рождения", cardQuestion: "А под какую родился ты?", shareQuestion: "А какая у тебя?",
  },
  {
    id: "wedding", eyebrow: "Саундтрек вашей свадьбы", chip: "Свадьба",
    h1: ["Под какую ", "песню", " вы поженились?"],
    lede: "Выбери дату свадьбы и мы найдём песню, которая была на пике популярности и чартов в ваш день.",
    label: "Дата свадьбы", resultLead: "В день вашей свадьбы",
    cardLines: ["В день", "нашей свадьбы"], sleeve: "саундтрек свадьбы",
    shareIntro: "В день нашей свадьбы", cardQuestion: "А какая была на вашей свадьбе?", shareQuestion: "А какая была на вашей?",
  },
  {
    id: "prom", eyebrow: "Саундтрек твоего выпускного", chip: "Выпускной",
    h1: ["Под какую ", "песню", " был твой выпускной?"],
    lede: "Выбери дату выпускного и мы найдём песню, которая была на пике популярности и чартов в тот день.",
    label: "Дата выпускного", resultLead: "В день твоего выпускного",
    cardLines: ["В день", "моего выпускного"], sleeve: "саундтрек выпускного",
    shareIntro: "В день моего выпускного", cardQuestion: "А какая была на твоём выпускном?", shareQuestion: "А какая была на твоём?",
  },
  {
    id: "meet", eyebrow: "Саундтрек вашего знакомства", chip: "Знакомство",
    h1: ["Под какую ", "песню", " вы познакомились?"],
    lede: "Выбери день, когда вы познакомились, и мы найдём песню, которая была на пике популярности и чартов в тот день.",
    label: "Дата знакомства", resultLead: "В день вашего знакомства",
    cardLines: ["В день", "нашего знакомства"], sleeve: "саундтрек знакомства",
    shareIntro: "В день нашего знакомства", cardQuestion: "А под какую познакомились вы?", shareQuestion: "А какая была у вас?",
  },
];

export function scenarioById(id: string | null | undefined): Scenario {
  return SCENARIOS.find((scenario) => scenario.id === id) ?? SCENARIOS[0];
}
