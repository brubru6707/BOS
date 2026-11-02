// a silicon wafer built from css 3d transforms. the red dies are bos projects.
const GRID = 14;
const PROJECT_DIES = new Set([46, 103, 150]);

const dies = Array.from({ length: GRID * GRID }, (_, i) => i);
const edge = Array.from({ length: 8 }, (_, i) => i);

export default function Wafer3D({ size = 480 }: { size?: number }) {
  const scale = size / 480;

  return (
    <div
      role="img"
      aria-label="spinning 3d silicon wafer with three highlighted bos project dies"
      className="relative overflow-hidden"
      style={{ width: size, height: size, perspective: 1400 }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ width: 480, height: 480, margin: "-240px 0 0 -240px", transform: `scale(${scale})`, transformStyle: "preserve-3d" }}
      >
        <div
          className="bos-spin absolute left-1/2 top-1/2"
          style={{
            width: 380,
            height: 380,
            margin: "-190px 0 0 -190px",
            transformStyle: "preserve-3d",
            animation: "bos-wafer-spin 32s linear infinite",
          }}
        >
          <div className="absolute inset-5 rounded-full bg-black/25 blur-2xl" style={{ transform: "translateZ(-30px)" }} />
          {edge.map((z) => (
            <div key={z} className="absolute inset-0 rounded-full bg-[#8d939b]" style={{ transform: `translateZ(${z}px)` }} />
          ))}
          <div className="absolute inset-0 overflow-hidden rounded-full bg-[#b9c0c8]" style={{ transform: "translateZ(8px)" }}>
            <div className="absolute inset-3 grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${GRID}, minmax(0, 1fr))` }}>
              {dies.map((i) => (
                <span key={i} className={PROJECT_DIES.has(i) ? "bg-brown-red" : "bg-[#7a828c]"} />
              ))}
            </div>
            {/* thin-film shimmer */}
            <div
              className="absolute inset-0 rounded-full mix-blend-screen"
              style={{
                background:
                  "conic-gradient(from 30deg, rgba(255,120,200,0.22), rgba(120,200,255,0.22), rgba(140,255,170,0.18), rgba(255,220,120,0.22), rgba(255,120,200,0.22))",
              }}
            />
            {/* flat notch */}
            <span className="absolute -bottom-[2px] left-1/2 -ml-6 h-2.5 w-12 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
