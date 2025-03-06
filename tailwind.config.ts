import {heroui} from "@heroui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      heading: "Inter",
      body: "Inter",
    },
    extend: {
      colors: {
        background: "#eff1f5",
        foreground: "#4c4f69",
      },
    },
  },
  plugins: [heroui()],
};
export default config;
