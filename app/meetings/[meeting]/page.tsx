"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getMeeting } from "@/src/data/years";


export default function MeetingPage() {
  const params = useParams();
  const router = useRouter();
  const meetingSlug = params.meeting as string;

  const meeting = getMeeting(meetingSlug);

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