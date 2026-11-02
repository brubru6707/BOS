import { CURRENT_YEAR } from "@/src/data/years";

export function isClassic(pathname: string): boolean {
  return pathname === "/classic" || pathname.startsWith("/classic/");
}

/** the same page in the other look. */
export function lookHref(pathname: string): string {
  if (isClassic(pathname)) return pathname.slice("/classic".length) || "/";
  return pathname === "/" ? "/classic" : `/classic${pathname}`;
}

/** the current year's team lives on /team; every earlier year is shown in the 2025-2026 look. */
export function teamHref(slug: string): string {
  return slug === CURRENT_YEAR ? "/team" : "/classic/team";
}
