// One house style for every date: dark card, paper record sleeve, acid accent.
export const CARD = {
  bg: "#393939",
  ink: "#fcdfcc",
  muted: "#c9b2a6",
  accent: "#d26471",
  onAccent: "#fcdfcc",
  paper: "#fcdfcc",
  paperInk: "#393939",
} as const;

// Quick examples in the hero: one representative date per decade.
export const DECADES = [
  { label: "70-е", sample: "1977-11-05" },
  { label: "80-е", sample: "1985-06-12" },
  { label: "90-е", sample: "1996-09-20" },
  { label: "00-е", sample: "2003-09-10" },
  { label: "10-е", sample: "2014-06-15" },
  { label: "20-е", sample: "2022-06-15" },
] as const;
