import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          red: "#C00404",
        },
        ink: "#141517",
        paper: "#DCDFE2",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": 
          "linear-gradient(to right, rgba(20, 21, 23, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 21, 23, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
    },
  },
  plugins: [],
};

export default config;
