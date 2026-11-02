// a qfn package built from css 3d transforms, with the hungry chippos layout as the die.
const PINS_PER_SIDE = 12;
const BODY = 300;
const THICKNESS = 22;

const pins = Array.from({ length: PINS_PER_SIDE }, (_, i) => i);
const sides = [0, 90, 180, 270];
const layers = Array.from({ length: THICKNESS }, (_, i) => i);

export default function ChipPackage3D({ size = 460 }: { size?: number }) {
  const scale = size / 460;

  return (
    <div
      role="img"
      aria-label="spinning 3d chip package with the hungry chippos 8-bit sar adc layout on the die"
      className="relative overflow-hidden"
      style={{ width: size, height: size, perspective: 1400 }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ width: 460, height: 460, margin: "-230px 0 0 -230px", transform: `scale(${scale})`, transformStyle: "preserve-3d" }}
      >
        <div
          className="bos-spin absolute left-1/2 top-1/2"
          style={{
            width: BODY,
            height: BODY,
            margin: `-${BODY / 2}px 0 0 -${BODY / 2}px`,
            transformStyle: "preserve-3d",
            animation: "bos-chip-spin 28s linear infinite",
          }}
        >
          {/* shadow */}
          <div className="absolute -inset-6 rounded-3xl bg-black/30 blur-2xl" style={{ transform: "translateZ(-20px)" }} />

          {/* body, stacked slices give it thickness */}
          {layers.map((z) => (
            <div key={z} className="absolute inset-0 rounded-lg bg-[#1b1c1f]" style={{ transform: `translateZ(${z}px)` }} />
          ))}

          {/* pins on all four sides */}
          {sides.map((deg) => (
            <div key={deg} className="absolute inset-0" style={{ transform: `rotateZ(${deg}deg) translateZ(2px)`, transformStyle: "preserve-3d" }}>
              <div className="absolute -bottom-2 left-6 right-6 flex justify-between">
                {pins.map((i) => (
                  <span key={i} className="block h-4 w-3 rounded-[2px] bg-[#c9ccd1]" />
                ))}
              </div>
            </div>
          ))}

          {/* top face */}
          <div
            className="absolute inset-0 rounded-lg bg-[#202124]"
            style={{ transform: `translateZ(${THICKNESS}px)` }}
          >
            <span className="absolute left-4 top-4 h-3 w-3 rounded-full bg-[#3a3c40]" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-wider text-[#8a8d93]">BOS · HC-01</span>
            <div className="absolute inset-[64px] overflow-hidden rounded-[3px] border-[6px] border-[#c9ccd1] bg-[#0e0f11]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hungry_chippos_sar_adc.png" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
