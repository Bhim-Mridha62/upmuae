import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#0d2218",
        forest: "#0d2218",
        "forest-light": "#143026",
        "forest-mid": "#1a3524",
        "green-accent": "#7db85c",
        "green-line": "#5a8a3c",
        cream: "#f4efe8",
        "warm-cream": "#f5f0e8",
        "warm-beige": "#e8e0d4",
        "dark-charcoal": "#181a18",
        charcoal: "#2a2a24",
        "off-white": "#f4f3ed",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
