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
        // Brand colors - warm off-white background, near-black text, deep teal accent
        background: {
          DEFAULT: "#FAFAF8", // warm off-white
          alt: "#F5F5F3", // slightly darker for contrast
        },
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#1A1A1A", // near-black
          muted: "#6B7280", // gray-500
          light: "#9CA3AF", // gray-400
        },
        muted: "#6B7280", // gray-500
        border: "#E5E7EB",
        primary: {
          DEFAULT: "#0D9488", // deep teal
          hover: "#0F766E",
          light: "#CCFBF1", // teal-100
        },
        secondary: "#64748B", // slate-500
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        card: "16px",
        button: "999px",
        lg: "20px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 4px 16px rgba(0, 0, 0, 0.06)",
        "soft-xl": "0 8px 32px rgba(0, 0, 0, 0.08)",
      },
      spacing: {
        "section-desktop": "120px",
        "section-mobile": "80px",
        "container": "1200px",
      },
      maxWidth: {
        container: "1200px",
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};

export default config;
