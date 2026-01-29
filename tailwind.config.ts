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
        background: "#FBFBFA",
        surface: "#FFFFFF",
        text: "#0B1220",
        muted: "#475569",
        border: "#E5E7EB",
        primary: {
          DEFAULT: "#0F766E",
          hover: "#115E59",
        },
        secondary: "#C7A76C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "16px",
        button: "999px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(11, 18, 32, 0.04)",
        "soft-lg": "0 4px 16px rgba(11, 18, 32, 0.06)",
      },
      spacing: {
        "section-desktop": "96px",
        "section-mobile": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
