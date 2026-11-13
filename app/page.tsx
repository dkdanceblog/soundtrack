import type { Metadata } from "next";
import BirthdayApp from "./birthday-app";
import { getBirthdayHit, MULTICHART_WEEK_COUNT, HISTORICAL_MONTHLY_CHART_COUNT } from "./hits";
import { todayUtc, isSupportedDate } from "./date-policy";
import { lifeSoundtrack } from "./life";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// A shared link ?date=… previews the song itself in messengers.
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const requested = typeof params?.date === "string" ? params.date : "";
  const today = todayUtc();
  const hit = requested && isSupportedDate(requested, today) ? getBirthdayHit(requested, today) : null;
  if (!hit) return {};
  const [y, m, d] = requested.split("-");
  const title = `«${hit.title}» — ${hit.artist} · ${d}.${m}.${y}`;
  const description = "Саундтрек дня рождения от ДК ДАНС. А какая песня звучала, когда родился ты?";
  return { title, description, openGraph: { title, description, type: "website" }, twitter: { card: "summary", title, description } };
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const today = todayUtc();
  const requested = typeof params?.date === "string" ? params.date : "2024-01-05";
  const date = isSupportedDate(requested, today) ? requested : "";
  return <BirthdayApp initialHit={date ? getBirthdayHit(date, today) : null} initialDate={date} initialToday={today}
    weekCount={MULTICHART_WEEK_COUNT} monthlyCount={HISTORICAL_MONTHLY_CHART_COUNT}
    initialLife={date ? lifeSoundtrack(date, today) : []} />;
}
