/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Simplified color naming for Tailwind v3
        dark: "#0A0A0A",
        "dark-lighter": "#1A1A1A",
        indigo: "#6366F1",
        emerald: "#10B981",
        lightgray: "#FAFAFA",
        gray: "#A1A1AA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
