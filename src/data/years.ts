/**
 * year-scoped club data.
 *
 * everything that changes from one academic year to the next lives here: the
 * roster and the meeting slides. pages read from this file instead of holding
 * their own copies, so archiving a year is a matter of adding an entry rather
 * than duplicating pages.
 *
 * to roll over to a new year:
 *   1. add a new AcademicYear at the TOP of `academicYears`
 *   2. point CURRENT_YEAR at its slug
 * the previous year stays reachable at /team/<slug> automatically.
 */

export type MemberGroup = "faculty" | "founding" | "officer";

export type Member = {
  name: string;
  /** short label shown under the name, e.g. "president" */
  role: string;
  /** class year or position, e.g. "3rd year undergraduate" */
  title?: string;
  /** focus area or accolade */
  credentials?: string;
  description?: string;
  group: MemberGroup;
  image: string;
  linkedin?: string;
};

export type Meeting = {
  title: string;
  date: string;
  description: string;
  pdf: string;
  slug: string;
};

export type AcademicYear = {
  /** url segment, e.g. "2025-2026" */
  slug: string;
  label: string;
  /** one-line summary shown on the archived roster */
  blurb: string;
  members: Member[];
  meetings: Meeting[];
};

const MEHDI: Member = {
  name: "Mehdi Saligane",
  role: "faculty advisor",
  title: "assistant professor in ece",
  credentials: "ieee sscs tc-ose chair",
  description: "leading expert in open-source chip design and vlsi education.",
  group: "faculty",
  image: "/mehdi.png",
};

const XINTING: Member = {
  name: "Xinting Jiang",
  role: "founding member",
  title: "1st year phd student",
  credentials: "research focus: ai for chip design",
  description: "pioneering machine learning applications in vlsi layout automation.",
  group: "founding",
  image: "/xinting.png",
};

const WILSON: Member = {
  name: "Wilson Vo",
  role: "founding member",
  title: "4th year undergraduate",
  credentials: "focus: open-source vlsi tools",
  description: "leading student initiatives in open chip design and community building.",
  group: "founding",
  image: "/wilson.png",
};

const OFFICERS_2026_2027: Member[] = [
  {
    name: "Emily Zhang",
    role: "officer",
    group: "officer",
    image: "/emily.png",
    linkedin: "https://www.linkedin.com/in/emzhly/",
  },
  // linkedin headline: "Engineering @ Brown University"
  {
    name: "Samuel Song",
    role: "officer",
    group: "officer",
    image: "/samuel.png",
    linkedin: "https://www.linkedin.com/in/samuelsong581/",
  },
  // linkedin headline: "Electrical Engineering at Brown University, Class of 2028
  // | Prev. @ BGE Inc. | UTRA Fellow | QuestBridge Scholar"
  {
    name: "Exiquio Salinas",
    role: "officer",
    group: "officer",
    image: "/exiquio.png",
    linkedin: "https://www.linkedin.com/in/exiquio-salinas-3b6148279/",
  },
  // linkedin headline: "Brown '29 | Gates Scholar"
  {
    name: "Bruno Rodriguez-Mendez",
    role: "officer",
    group: "officer",
    image: "/bruno.png",
    linkedin: "https://www.linkedin.com/in/bruno-rodriguez-mendez-18723725b/",
  },
];

const MEETINGS_2025_2026: Meeting[] = [
  {
    title: "BOS Info Session",
    date: "December 13, 2025",
    description: "Information session introducing BOS and chip design opportunities",
    pdf: "/meetings/BOS Dec 13, 2025 Info Session.pdf",
    slug: "bos-info-session-dec-13-2025",
  },
  {
    title: "BOS Kickoff Meeting",
    date: "February 7, 2026",
    description: "Kickoff meeting for the semester's activities and projects",
    pdf: "/meetings/BOS February 7th, 2026 Kickoff Meeting.pdf",
    slug: "bos-kickoff-meeting-feb-7-2026",
  },
  {
    title: "BOS Meeting",
    date: "February 27, 2026",
    description: "Regular BOS meeting with project updates and discussions",
    pdf: "/meetings/BOS February 27th, 2026 Meeting.pdf",
    slug: "bos-meeting-feb-27-2026",
  },
  {
    title: "BOS Meeting",
    date: "March 6, 2026",
    description: "Regular BOS meeting with project updates and discussions",
    pdf: "/meetings/BOS February March 6th, 2026.pdf",
    slug: "bos-meeting-mar-6-2026",
  },
  {
    title: "Brown Open Silicon Meeting",
    date: "March 14, 2026",
    description: "Brown Open Silicon meeting covering open-source chip design",
    pdf: "/meetings/Brown Open Silicon March 14, 2026.pdf",
    slug: "brown-open-silicon-mar-14-2026",
  },
];

/** newest year first. */
export const academicYears: AcademicYear[] = [
  {
    slug: "2026-2027",
    label: "2026-2027",
    blurb: "student-run, faculty-mentored. building the future of open silicon together.",
    members: [MEHDI, XINTING, WILSON, ...OFFICERS_2026_2027],
    meetings: [],
  },
  {
    slug: "2025-2026",
    label: "2025-2026",
    blurb: "the founding year — where brown open silicon got started.",
    members: [MEHDI, XINTING, WILSON],
    meetings: MEETINGS_2025_2026,
  },
];

export const CURRENT_YEAR = "2026-2027";

export const currentYear: AcademicYear =
  academicYears.find((y) => y.slug === CURRENT_YEAR) ?? academicYears[0];

export function getYear(slug: string): AcademicYear | undefined {
  return academicYears.find((y) => y.slug === slug);
}

export function isCurrentYear(slug: string): boolean {
  return slug === CURRENT_YEAR;
}

/** every meeting across every year, used by the /meetings/[meeting] route. */
export const allMeetings: Meeting[] = academicYears.flatMap((y) => y.meetings);

export function getMeeting(slug: string): Meeting | undefined {
  return allMeetings.find((m) => m.slug === slug);
}

export function membersByGroup(year: AcademicYear, group: MemberGroup): Member[] {
  return year.members.filter((m) => m.group === group);
}
