import { getBirthdayHit } from "../app/hits";
import { assessPopularity } from "../app/evidence-policy";
import { todayUtc } from "../app/date-policy";
const today = todayUtc();
const months = new Map<string, { month: string; dates: number; yearOnly: number; monthOnly: number; fewerThanThree: number; popularityReview: number }>();
const yearSpans: { start: string; end: string; days: number }[] = [];
const currentMonthOnly: string[] = [];
let previousYearOnly = false;
for (let value = Date.parse("1970-01-01T12:00:00Z"); value <= Date.parse(`${today}T12:00:00Z`); value += 86400000) {
  const date = new Date(value).toISOString().slice(0,10);
  const hit = getBirthdayHit(date, today);
  if (!hit) throw new Error(`Empty date: ${date}`);
  const key = date.slice(0,7);
  const row = months.get(key) ?? { month:key, dates:0, yearOnly:0, monthOnly:0, fewerThanThree:0, popularityReview:0 };
  row.dates++;
  if (hit.precision === "Месяц") { row.monthOnly++; if(date.startsWith(`${today.slice(0,4)}-`)) currentMonthOnly.push(date); }
  if (hit.precision === "Год") {
    row.yearOnly++;
    if (previousYearOnly) { const span = yearSpans.at(-1)!; span.end=date; span.days++; }
    else yearSpans.push({start:date,end:date,days:1});
  }
  previousYearOnly = hit.precision === "Год";
  if(hit.alternatives.length < 2) row.fewerThanThree++;
  if(assessPopularity(hit.sources).level === "review") row.popularityReview++;
  months.set(key,row);
}
console.log(JSON.stringify({through:today, caveat:"Automated classification; weekly proximity does not prove a daily peak or continuous fourteen-day popularity.", yearSpans, currentYearMonthOnlyDates:currentMonthOnly, months:[...months.values()].filter(m=>m.yearOnly || m.monthOnly || m.fewerThanThree || m.popularityReview)},null,2));
