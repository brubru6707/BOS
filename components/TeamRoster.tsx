import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Linkedin, User, Users } from "lucide-react";
import type { AcademicYear, Member } from "@/src/data/years";
import { isCurrentYear, membersByGroup } from "@/src/data/years";
import YearSwitcher from "@/components/YearSwitcher";

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="border border-white/10 rounded-xl p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm group">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-brown-red/70 to-brown-red/40 rounded-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="object-cover w-20 h-20 rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-brown-red text-sm font-semibold mb-2">{member.role}</p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-brown-red transition-colors text-sm"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={16} />
              linkedin
            </a>
          )}
        </div>
      </div>

      {(member.title || member.credentials) && (
        <div className="space-y-2 mb-4">
          {member.title && (
            <div className="px-3 py-2 bg-black/30 rounded-lg border border-white/5">
              <p className="text-white/90 text-sm">{member.title}</p>
            </div>
          )}
          {member.credentials && (
            <div className="px-3 py-2 bg-black/30 rounded-lg border border-white/5">
              <p className="text-white/70 text-sm">{member.credentials}</p>
            </div>
          )}
        </div>
      )}

      {member.description && <p className="text-white/60 text-sm">{member.description}</p>}
    </div>
  );
}

export default function TeamRoster({ year }: { year: AcademicYear }) {
  const faculty = membersByGroup(year, "faculty");
  const founding = membersByGroup(year, "founding");
  const officers = membersByGroup(year, "officer");
  const archived = !isCurrentYear(year.slug);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-bg border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            meet our <span className="text-brown-red">team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">{year.blurb}</p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8 mb-10" />

          <YearSwitcher activeSlug={year.slug} />

          {archived && (
            <p className="mt-6 text-white/50 text-sm">
              you&apos;re viewing the {year.label} archive.{" "}
              <Link href="/team" className="text-brown-red hover:underline">
                see the current team →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Team Structure Banner */}
      <section className="py-12 bg-brown-red/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-3">
              <GraduationCap className="text-brown-red" size={32} />
              <div className="text-left">
                <div className="text-white font-bold text-lg">student-run</div>
                <div className="text-white/60 text-sm">by students, for students</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center space-x-3">
              <Award className="text-brown-red" size={32} />
              <div className="text-left">
                <div className="text-white font-bold text-lg">faculty-mentored</div>
                <div className="text-white/60 text-sm">expert guidance and support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Faculty Advisor */}
          {faculty.map((advisor) => (
            <div className="mb-16" key={advisor.name}>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Award className="text-brown-red mr-3" size={32} />
                faculty advisor
              </h2>

              <div className="border-2 border-brown-red rounded-xl p-8 bg-gradient-to-br from-brown-red/10 to-transparent backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-brown-red to-red-800 rounded-xl flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 overflow-hidden">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={128}
                      height={128}
                      className="object-cover w-32 h-32 rounded-xl"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{advisor.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-brown-red/20 border border-brown-red rounded-full text-brown-red text-sm font-semibold">
                        {advisor.title}
                      </span>
                      <span className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-white/80 text-sm">
                        {advisor.credentials}
                      </span>
                    </div>
                    <p className="text-white/70 text-lg">{advisor.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Officers */}
          {officers.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Users className="text-brown-red mr-3" size={32} />
                officers
                <span className="ml-3 text-base font-normal text-white/40">{year.label}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {officers.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Founding Members */}
          {founding.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <User className="text-brown-red mr-3" size={32} />
                founding members
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {founding.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Meetings archived under this year */}
      {year.meetings.length > 0 && (
        <section className="py-20 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-2">{year.label} meetings</h2>
            <p className="text-white/60 mb-8">slides from every meeting this year.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {year.meetings.map((meeting) => (
                <Link
                  key={meeting.slug}
                  href={`/meetings/${meeting.slug}`}
                  className="border border-white/10 rounded-xl p-5 hover:border-brown-red/50 transition-all bg-white/5 group"
                >
                  <h3 className="text-white font-bold group-hover:text-brown-red transition-colors mb-1">
                    {meeting.title}
                  </h3>
                  <p className="text-white/50 text-sm">{meeting.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">want to join our team?</h2>
          <p className="text-lg text-white/70 mb-8">
            we&apos;re always looking for passionate students interested in chip design and open-source hardware.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all"
          >
            learn more
          </a>
        </div>
      </section>
    </div>
  );
}
