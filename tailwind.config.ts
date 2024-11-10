import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F0",
        sidebar: "#0951AB",
        "sidebar-header": "#064089",
        dashboardMainButton: "#759FC9",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        form: "0px 6px 7px 0px rgba(51, 65, 85, 0.12)",
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
