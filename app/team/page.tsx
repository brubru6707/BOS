import type { Metadata } from "next";
import TeamRoster from "@/components/TeamRoster";
import { currentYear } from "@/src/data/years";

export const metadata: Metadata = {
  title: `Team ${currentYear.label} | Brown Open Silicon`,
  description: `The ${currentYear.label} officers, founding members and faculty advisor of Brown Open Silicon.`,
};

export default function TeamPage() {
  return <TeamRoster year={currentYear} />;
}
