"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const meetings = [
  {
    title: "BOS Info Session",
    date: "December 13, 2025",
    description: "Information session introducing BOS and chip design opportunities",
    pdf: "/meetings/BOS Dec 13, 2025 Info Session.pdf",
    slug: "bos-info-session-dec-13-2025"
  },
  {
    title: "BOS Kickoff Meeting",
    date: "February 7, 2026",
    description: "Kickoff meeting for the semester's activities and projects",
    pdf: "/meetings/BOS February 7th, 2026 Kickoff Meeting.pdf",
    slug: "bos-kickoff-meeting-feb-7-2026"
  },
  {
    title: "BOS Meeting",
    date: "February 27, 2026",
    description: "Regular BOS meeting with project updates and discussions",
    pdf: "/meetings/BOS February 27th, 2026 Meeting.pdf",
    slug: "bos-meeting-feb-27-2026"
  },
  {
    title: "BOS Meeting",
    date: "March 6, 2026",
    description: "Regular BOS meeting with project updates and discussions",
    pdf: "/meetings/BOS February March 6th, 2026.pdf",
    slug: "bos-meeting-mar-6-2026"
  },
  {
    title: "Brown Open Silicon Meeting",
    date: "March 14, 2026",
    description: "Brown Open Silicon meeting covering open-source chip design",
    pdf: "/meetings/Brown Open Silicon March 14, 2026.pdf",
    slug: "brown-open-silicon-mar-14-2026"
  }
];

export default function MeetingPage() {
  const params = useParams();
  const router = useRouter();
  const meetingSlug = params.meeting as string;

  const meeting = meetings.find(m => m.slug === meetingSlug);

  if (!meeting) {
    return (
      <div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Meeting Not Found</h1>
          <p className="text-white/70 mb-8">The meeting you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/projects')}
            className="inline-flex items-center px-6 py-3 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Header */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{meeting.title}</h1>
              <p className="text-white/70">{meeting.date}</p>
            </div>
            <button
              onClick={() => router.push('/projects')}
              className="inline-flex items-center px-6 py-3 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </button>
          </div>
          <p className="text-white/70 mt-4">{meeting.description}</p>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <embed
              src={meeting.pdf}
              type="application/pdf"
              width="100%"
              height="800px"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}