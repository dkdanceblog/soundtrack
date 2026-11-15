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

// Quick examples in the hero: each click opens a random date inside the decade.
export const DECADES = [
  { label: "70-е", sample: "1977-11-05", from: "1970-01-01", to: "1979-12-31" },
  { label: "80-е", sample: "1985-06-12", from: "1980-01-01", to: "1989-12-31" },
  { label: "90-е", sample: "1996-09-20", from: "1990-01-01", to: "1999-12-31" },
  { label: "00-е", sample: "2003-09-10", from: "2000-01-01", to: "2009-12-31" },
  { label: "10-е", sample: "2014-06-15", from: "2010-01-01", to: "2019-12-31" },
  { label: "20-е", sample: "2022-06-15", from: "2020-01-01", to: "2029-12-31" },
] as const;

export const TELEGRAM_URL = "https://t.me/dkdanceblog";

export function randomDateBetween(from: string, to: string, max: string) {
  const start = Date.parse(`${from}T12:00:00Z`);
  const end = Date.parse(`${(to < max ? to : max)}T12:00:00Z`);
  const days = Math.max(0, Math.floor((end - start) / 86400000));
  return new Date(start + Math.floor(Math.random() * (days + 1)) * 86400000).toISOString().slice(0, 10);
}

// The address printed on story cards: the public site, never a local preview host.
export function siteAddress() {
  if (typeof window === "undefined") return "dkdanceblog.github.io/soundtrack";
  const { hostname, host, pathname } = window.location;
  if (!hostname.includes(".") || /^(localhost|127\.|\[)/.test(hostname)) return "dkdanceblog.github.io/soundtrack";
  return `${host}${pathname.replace(/\/(index\.html)?$/, "")}`;
}
