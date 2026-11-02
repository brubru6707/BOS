import { notFound, redirect } from "next/navigation";
import { teamHref } from "@/src/lib/looks";
import { academicYears, getYear } from "@/src/data/years";

type Params = { year: string };

export function generateStaticParams(): Params[] {
  return academicYears.map((y) => ({ year: y.slug }));
}

// old /team/<year> links: each year now lives with its own look, picked from the navbar
export default async function TeamYearRedirect({ params }: { params: Promise<Params> }) {
  const { year: slug } = await params;
  if (!getYear(slug)) notFound();
  redirect(teamHref(slug));
}
