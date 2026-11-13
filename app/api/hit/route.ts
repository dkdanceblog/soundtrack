import { getBirthdayHit } from "../../hits";
import { isSupportedDate } from "../../date-policy";

export function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  if (!isSupportedDate(date)) return Response.json({ error: "Проверь дату" }, { status: 400 });
  const hit = getBirthdayHit(date);
  if (!hit) return Response.json({ error: "Источник для даты ещё не добавлен" }, { status: 503 });
  return Response.json({ hit }, { headers: { "Cache-Control": "private, max-age=300" } });
}
