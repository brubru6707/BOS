import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChipPackage3D from "@/components/ChipPackage3D";
import Wafer3D from "@/components/Wafer3D";

const curriculum = [
  {
    level: "physical level",
    color: "from-red-600 to-red-400",
    courses: [
      {
        code: "engn 0510",
        name: "electromagnetism",
        description: "foundation in electromagnetic theory"
      }
    ]
  },
  {
    level: "device level",
    color: "from-orange-600 to-orange-400",
    courses: [
      {
        code: "engn 0520",
        name: "circuits & signals",
        description: "basic circuit analysis and signal processing"
      }
    ]
  },
  {
    level: "circuit level",
    color: "from-yellow-600 to-yellow-400",
    courses: [
      {
        code: "engn 1570",
        name: "linear systems",
        description: "linear system analysis and design"
      },
      {
        code: "engn 1620",
        name: "analog electronics",
        description: "analog circuit design fundamentals"
      }
    ]
  },
  {
    level: "logic level",
    color: "from-green-600 to-green-400",
    courses: [
      {
        code: "engn 1630",
        name: "digital electronics",
        description: "digital logic and circuit design"
      }
    ]
  },
  {
    level: "system level",
    color: "from-blue-600 to-blue-400",
    courses: [
      {
        code: "engn 1650",
        name: "embedded systems",
        description: "microcontroller programming and hardware integration"
      },
      {
        code: "engn 2912e",
        name: "low power vlsi",
        description: "includes tapeout project - design to fabrication",
        highlight: true
      },
      {
        code: "engn 2912k",
        name: "mixed-signal",
        description: "analog and digital circuit integration"
      }
    ]
  },
  {
    level: "architecture level",
    color: "from-purple-600 to-purple-400",
    courses: [
      {
        code: "engn 1640",
        name: "computer architecture",
        description: "cpu design and computer organization"
      }
    ]
  }
];

const pins = [
  { pin: "pin 1 · tapeout-ready", title: "8-bit SAR ADC", detail: "833 kS/s · DRC/LVS clean" },
  { pin: "pin 2 · 1 year", title: "On-chip monitor", detail: "temperature, timing, aging" },
  { pin: "pin 3 · 3 years", title: "8-bit accelerator", detail: "quantized ML inference" },
];

const projectDies = [
  { die: "die a · tapeout-ready", title: "8-bit SAR ADC", detail: "Hungry Chippos · 833 kS/s" },
  { die: "die b · intro", title: "On-chip monitor", detail: "temperature, timing, aging" },
  { die: "die c · flagship", title: "8-bit accelerator", detail: "quantized ML inference" },
];

const pillars = [
  { title: "open source tools", body: "we design with xschem, ngspice, klayout and magic, so anyone can follow along without a license." },
  { title: "hands-on learning", body: "from your first schematic to a tapeout-ready layout, you learn by building real blocks." },
  { title: "community driven", body: "we connect students with industry engineers and researchers who have shipped silicon." },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* hero: the package */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
              Brown
              <br />
              Open
              <br />
              Silicon
            </h1>
            <p className="mb-3 text-xl font-medium sm:text-2xl">Designing open chips, together.</p>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-ink/75">
              Every chip starts as a student&apos;s question. We help you turn it into a schematic, a layout and, eventually, a die you can hold.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects#register" className="inline-flex items-center rounded-full bg-ink px-6 py-3.5 font-bold text-paper transition-colors hover:bg-brown-red">
                Join BOS
              </Link>
              <Link href="#inside" className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 font-bold transition-colors hover:border-brown-red hover:text-brown-red">
                What&apos;s inside
              </Link>
            </div>
          </div>

          <figure className="flex flex-col items-center gap-3">
            <div className="flex h-[322px] w-full items-center justify-center overflow-hidden sm:h-[460px]">
              <div className="shrink-0 scale-[0.7] sm:scale-100">
                <ChipPackage3D />
              </div>
            </div>
            <figcaption className="text-center font-mono text-xs text-ink/70">
              Die: Hungry Chippos 8-bit SAR ADC, 514 × 550 µm
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pins.map((p) => (
            <Link key={p.pin} href="/projects" className="rounded-xl bg-white p-5 transition-shadow hover:shadow-[0_0_0_2px_#141517]">
              <div className="mb-2 font-mono text-xs uppercase text-brown-red">{p.pin}</div>
              <div className="text-lg font-bold">{p.title}</div>
              <div className="mt-1 text-ink/70">{p.detail}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* the wafer */}
      <section id="inside" className="scroll-mt-16 border-y border-ink bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl">
              open
              <br />
              chips.
              <br />
              <span className="text-brown-red">together.</span>
            </h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed">
              One wafer holds hundreds of dies. One club holds a lot of ideas. Bring yours. We&apos;ll help you put it on silicon.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/projects#register" className="inline-flex items-center bg-ink px-6 py-3.5 font-bold text-white transition-colors hover:bg-brown-red">
                Claim a die <ArrowRight className="ml-2" size={18} />
              </Link>
              <span>Sundays 4–5pm · ERC 125</span>
            </div>
          </div>

          <figure className="flex flex-col items-center gap-4">
            <div className="flex h-[336px] w-full items-center justify-center overflow-hidden sm:h-[480px]">
              <div className="shrink-0 scale-[0.7] sm:scale-100">
                <Wafer3D />
              </div>
            </div>
            <figcaption className="flex flex-wrap justify-center gap-5 text-sm">
              <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 bg-brown-red" />BOS project dies</span>
              <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 bg-[#7a828c]" />open: your idea here</span>
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 border-t border-ink md:grid-cols-3">
          {projectDies.map((d, i) => (
            <Link
              key={d.die}
              href="/projects"
              className={`px-6 py-6 transition-colors hover:bg-paper sm:px-10 ${i < projectDies.length - 1 ? "border-b border-ink md:border-b-0 md:border-r" : ""}`}
            >
              <div className="text-xs font-bold uppercase text-brown-red">{d.die}</div>
              <div className="mt-1.5 text-xl font-bold">{d.title}</div>
              <div className="mt-1">{d.detail}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* mission */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">our mission</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl bg-white p-6">
              <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
              <p className="text-ink/75">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* curriculum as a layer stack */}
      <section className="border-t border-ink bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">courses, bottom to top</h2>
            <p className="text-lg text-ink/75">
              A chip is built in layers, and so is the curriculum. Start at the physics and work your way up to architecture. ENGN 2912E ends in a real tapeout.
            </p>
          </div>

          <ol className="border-t border-ink">
            {curriculum.map((level, i) => (
              <li key={level.level} className="grid grid-cols-1 gap-3 border-b border-ink py-5 md:grid-cols-[220px_1fr]">
                <div className="font-mono text-sm">
                  <span className="text-brown-red">L{i + 1}</span> · {level.level}
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {level.courses.map((course) => (
                    <div key={course.code}>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-mono text-xs uppercase text-ink/60">{course.code}</span>
                        <span className="font-bold">{course.name}</span>
                        {course.highlight && (
                          <span className="bg-brown-red px-1.5 py-0.5 font-mono text-[10px] uppercase text-white">tapeout</span>
                        )}
                      </div>
                      <p className="text-sm text-ink/70">{course.description}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* cta */}
      <section className="border-t border-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">no experience required.</h2>
            <p className="text-lg text-ink/75">Come to a general meeting, Sundays 4–5pm in ERC 125, or sign up below.</p>
          </div>
          <Link href="/projects#register" className="inline-flex items-center rounded-full bg-ink px-7 py-4 font-bold text-paper transition-colors hover:bg-brown-red">
            Join BOS <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
