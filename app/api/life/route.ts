import { lifeSoundtrack } from "../../life";
import { isSupportedDate } from "../../date-policy";

export function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  if (!isSupportedDate(date)) return Response.json({ error: "Проверь дату" }, { status: 400 });
  return Response.json({ entries: lifeSoundtrack(date) }, { headers: { "Cache-Control": "private, max-age=300" } });
}
