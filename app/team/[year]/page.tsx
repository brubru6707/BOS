import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import TeamRoster from "@/components/TeamRoster";
import { academicYears, CURRENT_YEAR, getYear } from "@/src/data/years";

type Params = { year: string };

export function generateStaticParams(): Params[] {
  return academicYears.map((y) => ({ year: y.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year: slug } = await params;
  const year = getYear(slug);
  if (!year) return { title: "Team | Brown Open Silicon" };

  return {
    title: `Team ${year.label} | Brown Open Silicon`,
    description: `The ${year.label} roster of Brown Open Silicon.`,
  };
}

export default async function ArchivedTeamPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year: slug } = await params;

  // the current year owns the bare /team url; keep a single canonical page for it
  if (slug === CURRENT_YEAR) redirect("/team");

  const year = getYear(slug);
  if (!year) notFound();

  return <TeamRoster year={year} />;
}
