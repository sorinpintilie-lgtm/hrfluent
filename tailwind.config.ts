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
        // Brand colors - premium HR / executive
        background: {
          DEFAULT: "#FBFBF7", // warm off-white (as specified)
          alt: "#F3F5F6", // very subtle contrast (as specified)
        },
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#121417", // primary text
          muted: "#4B5563", // muted text
          light: "#9CA3AF", // light text
        },
        muted: "#4B5563", // muted text
        border: "rgba(17,24,39,0.10)", // hairline borders
        primary: {
          DEFAULT: "#0F3D3E", // deep teal accent
          hover: "#0C2D2E", // slightly darker hover
          light: "rgba(15,61,62,0.10)", // soft fill (as specified)
        },
        secondary: "#64748B", // slate-500
      },
      fontFamily: {
        sans: ["Inter", "Source Sans 3", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        card: "20px",
        button: "999px",
        lg: "24px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 4px 16px rgba(0, 0, 0, 0.06)",
        "soft-xl": "0 8px 32px rgba(0, 0, 0, 0.08)",
      },
      spacing: {
        "section-desktop": "120px",
        "section-mobile": "72px",
        "container": "1200px",
      },
      maxWidth: {
        container: "1200px",
        readable: "70ch",
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};

export default config;
