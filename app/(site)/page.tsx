import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import NextMeeting from "@/components/NextMeeting";
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

const numbers = [
  { value: "6", label: "students on the team" },
  { value: "0/660", label: "DRC violations" },
  { value: "862/862", label: "LVS: netlists match" },
  { value: "833 kS/s", label: "sample rate (sim)" },
  { value: "7.2", label: "ENOB (projected)" },
];

const steps = [
  {
    n: "01",
    title: "Draw the circuit",
    tool: "xschem",
    body: "Every block starts as a schematic. This is our StrongARM comparator, the part of the ADC that decides 1 or 0, eight times per conversion.",
    src: "/images/hc/strongarm_schematic.svg",
    alt: "xschem schematic of the strongarm comparator",
    w: 1597,
    h: 805,
  },
  {
    n: "02",
    title: "Prove it works",
    tool: "ngspice",
    body: "Before anything gets drawn, it gets simulated. Orange is the DAC homing in on the input, one bit per clock, until it lands on the right code.",
    src: "/images/hc/adc_closed_loop_conversions.png",
    alt: "ngspice simulation of the sar adc converging on five input voltages",
    w: 1600,
    h: 1024,
  },
  {
    n: "03",
    title: "Draw the polygons",
    tool: "klayout · magic",
    body: "Then the schematic becomes geometry: wells, poly and metal on GlobalFoundries' 180nm process, the same layers a fab prints.",
    src: "/images/hc/strongarm_layout.png",
    alt: "klayout layout of the strongarm comparator",
    w: 1572,
    h: 957,
  },
  {
    n: "04",
    title: "Check it like a fab would",
    tool: "drc · lvs",
    body: "Design-rule checks catch shapes the fab can't print. LVS proves the layout is the circuit we simulated. Ours: 0 of 660 DRC checks failing, and LVS 862/862, netlists match.",
    src: "/images/hc/sar_logic_layout.png",
    alt: "layout of the sar logic block with 17 flip-flops",
    w: 1573,
    h: 483,
  },
];

const projectDies = [
  { die: "die a · tapeout-ready", title: "8-bit SAR ADC", detail: "Hungry Chippos, Chipathon 2026" },
  { die: "die b · intro project", title: "On-chip monitor", detail: "temperature, timing and aging sensors · 1 year" },
  { die: "die c · flagship", title: "8-bit accelerator", detail: "quantized ML inference · 3 years" },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:pt-20">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-wide text-ink/60">Brown University · Providence, RI</p>
          <h1 className="mb-6 text-6xl leading-[0.95] sm:text-7xl">
            We design real chips, <em className="text-brown-red">in the open.</em>
          </h1>
          <p className="mb-8 max-w-lg text-xl leading-relaxed text-ink/80">
            Brown Open Silicon is a student club that builds integrated circuits with free, open-source tools. Last summer six of us took an 8-bit ADC from a blank schematic to a layout ready for the fab.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <Link href="/projects#register" className="inline-flex items-center bg-brown-red px-6 py-3.5 font-semibold text-white transition-colors hover:bg-bear">
              Join BOS <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link href="#process" className="inline-flex items-center border border-ink px-6 py-3.5 font-semibold transition-colors hover:bg-ink hover:text-paper">
              See how we build one
            </Link>
          </div>
          <NextMeeting />
        </div>

        <figure className="border border-ink bg-white">
          <div className="flex items-center justify-between gap-4 border-b border-ink px-3 py-2 font-mono text-[11px] text-ink/70">
            <span>adc_top.gds</span>
            <span className="hidden sm:inline">gf180mcuD · 514.25 × 549.70 µm</span>
          </div>
          <Image
            src="/images/hc/adc_chip_top_layout_annotated.png"
            alt="annotated layout of the hungry chippos 8-bit sar adc: cap-dac, strongarm comparator and sar logic"
            width={1600}
            height={1600}
            priority
            className="h-auto w-full"
          />
          <figcaption className="border-t border-ink px-3 py-2 text-sm text-ink/75">
            <span className="font-mono text-[11px] uppercase text-brown-red">Fig. 1</span> Hungry Chippos, our 8-bit SAR ADC for the IEEE SSCS Chipathon. Every box is a block a student designed.
          </figcaption>
        </figure>
      </section>

      {/* numbers */}
      <section className="bg-bear text-paper">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {numbers.map((n) => (
            <div key={n.label} className="py-8 pr-4">
              <dt className="mb-1 font-mono text-xs uppercase text-paper/70">{n.label}</dt>
              <dd className="font-serif text-4xl font-semibold text-gold">{n.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* process */}
      <section id="process" className="scroll-mt-16 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-5xl leading-none sm:text-6xl">From a sketch to silicon, in four steps.</h2>
          <p className="text-lg text-ink/75">
            No experience needed. These are the real files from our ADC, and the same steps every new member learns on Sundays.
          </p>
        </div>

        <ol className="grid grid-cols-1 border-l border-t border-ink md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col border-b border-r border-ink bg-white">
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-ink/15 p-5">
                <Image src={s.src} alt={s.alt} width={s.w} height={s.h} className="max-h-full w-auto object-contain" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-baseline justify-between gap-4 font-mono text-xs">
                  <span className="text-brown-red">{s.n}</span>
                  <span className="text-ink/60">{s.tool}</span>
                </div>
                <h3 className="mb-2 font-serif text-2xl font-semibold">{s.title}</h3>
                <p className="text-ink/75">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* the wafer */}
      <section className="border-y border-ink bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-5xl leading-none sm:text-6xl">
              One wafer, hundreds of dies. <em className="text-brown-red">Claim one.</em>
            </h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-ink/80">
              Three of the dies are ours already. The rest are open. Bring an idea, or join a team that needs hands.
            </p>
            <Link href="/projects#register" className="inline-flex items-center bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-brown-red">
              Claim a die <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <figure className="flex flex-col items-center gap-4">
            <div className="flex h-[336px] w-full items-center justify-center overflow-x-clip sm:h-[480px]">
              <div className="shrink-0 scale-[0.7] sm:scale-100">
                <Wafer3D />
              </div>
            </div>
            <figcaption className="flex flex-wrap justify-center gap-5 font-mono text-xs">
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-brown-red" />BOS project dies</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-slate" />open: your idea here</span>
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
              <div className="font-mono text-xs uppercase text-brown-red">{d.die}</div>
              <div className="mt-1.5 font-serif text-2xl font-semibold">{d.title}</div>
              <div className="mt-1 text-ink/75">{d.detail}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* curriculum as a layer stack */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-4 text-5xl leading-none">Courses, bottom to top.</h2>
          <p className="text-lg text-ink/75">
            A chip is built in layers, and so is the curriculum. Start at the physics and work up to architecture. ENGN 2912E ends in a real tapeout.
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
                      <span className="font-semibold">{course.name}</span>
                      {course.highlight && (
                        <span className="bg-gold px-1.5 py-0.5 font-mono text-[10px] uppercase text-ink">tapeout</span>
                      )}
                    </div>
                    <p className="text-sm text-ink/70">{course.description}</p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* cta */}
      <section className="bg-brown-red text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="mb-2 text-4xl sm:text-5xl">No experience required.</h2>
            <p className="text-lg text-white/85">Come to a general meeting, Sundays 4–5pm in ERC 125, or sign up and we&apos;ll reach out.</p>
          </div>
          <Link href="/projects#register" className="inline-flex items-center bg-white px-7 py-4 font-semibold text-brown-red transition-colors hover:bg-gold hover:text-ink">
            Sign up <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
