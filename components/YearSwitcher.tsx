import Link from "next/link";
import { academicYears, CURRENT_YEAR } from "@/src/data/years";

/** path a given academic year lives at. the current year owns the bare /team url. */
export function teamHref(slug: string): string {
  return slug === CURRENT_YEAR ? "/team" : `/team/${slug}`;
}

export default function YearSwitcher({ activeSlug }: { activeSlug: string }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="text-white/40 text-sm mr-2">academic year</span>
      {academicYears.map((year) => {
        const isActive = year.slug === activeSlug;
        return (
          <Link
            key={year.slug}
            href={teamHref(year.slug)}
            aria-current={isActive ? "page" : undefined}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
              isActive
                ? "bg-brown-red border-brown-red text-white"
                : "border-white/15 text-white/60 hover:text-white hover:border-brown-red/50 hover:bg-white/5"
            }`}
          >
            {year.label}
            {year.slug === CURRENT_YEAR && (
              <span className={`ml-2 text-xs ${isActive ? "text-white/70" : "text-white/30"}`}>
                current
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
