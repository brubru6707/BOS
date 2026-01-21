export default function Head() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
      </style>
      {/* Primary Meta Tags */}
      <title>Brown Open Silicon | Designing Open Chips. Together.</title>
      <meta 
        name="description" 
        content="Brown Open Silicon (BOS) is a student research group at Brown University School of Engineering dedicated to open-source VLSI, reproducible chip design, and hands-on tapeout experiences." 
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      {/* Keywords */}
      <meta 
        name="keywords" 
        content="Brown University, Chip Design, VLSI, Open Source Silicon, IEEE SSCS, PICO, Tapeout, RISC-V, Engineering, BOS" 
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Brown Open Silicon (BOS)" />
      <meta 
        property="og:description" 
        content="Designing open chips, together. Join the movement for open-source silicon and reproducible hardware design at Brown." 
      />
      <meta property="og:site_name" content="Brown Open Silicon" />

      {/* Twitter */}
      <meta name="twitter:title" content="Brown Open Silicon | Designing Open Chips. Together." />
      <meta 
        name="twitter:description" 
        content="Designing open chips, together. Join the movement for open-source silicon and reproducible hardware design at Brown." 
      />
    </>
  );
}