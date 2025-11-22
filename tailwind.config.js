/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        "light-secondary": "#F5F5F5",
        dark: "#0A0A0A",
        "dark-secondary": "#1A1A1A",
        red: "#DC2626",
        "red-hover": "#EF4444",
        "red-dark": "#B91C1C",
        gray: "#6B7280",
        "gray-light": "#9CA3AF",
        "border-light": "#E5E7EB",
        "border-dark": "#D1D5DB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
