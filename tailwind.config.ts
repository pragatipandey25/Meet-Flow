import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#1C1F2E",
          2: "#161925",
          3: "#252A41",
          4: "#1E2757",
        },
        blue: {
          1: "#0E78F9",
        },
        sky: {
          1: "#C9DDFF",
        },
        orange: {
          1: "#FF742E",
        },
        yellow: {
          1: "#F9A90E",
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
