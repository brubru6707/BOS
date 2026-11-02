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
        // brown's official palette: red, brown, yellow, gray
        ink: "#2A1E17",
        bear: "#4E3629",
        gold: "#FFC72C",
        slate: "#98A4AE",
        paper: "#F3EEE6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "2px",
        md: "3px",
        lg: "3px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "6px",
      },
      backgroundImage: {
        "grid-pattern": 
          "linear-gradient(to right, rgba(42, 30, 23, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 30, 23, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
    },
  },
  plugins: [],
};

export default config;
