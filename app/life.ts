import { getBirthdayHit } from "./hits";
import { todayUtc } from "./date-policy";
import { buildLife, type LifeEntry } from "./life-shared";

export type { LifeEntry } from "./life-shared";

export function lifeSoundtrack(birth: string, today = todayUtc()): LifeEntry[] {
  return buildLife(birth, today, (date) => getBirthdayHit(date, today));
}
