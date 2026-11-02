import type { Metadata } from "next";
import TeamRoster from "@/components/classic/TeamRoster";
import { CLASSIC_YEAR, currentYear, getYear } from "@/src/data/years";

const year = getYear(CLASSIC_YEAR) ?? currentYear;

export const metadata: Metadata = {
  title: `Team ${year.label} | Brown Open Silicon`,
  description: `The ${year.label} officers, founding members and faculty advisor of Brown Open Silicon.`,
};

export default function TeamPage() {
  return <TeamRoster year={year} />;
}
