/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF",
        azure: {
          100: "#374151",
          200: "#1F2937",
          300: "#64748B",
          400: "#0F172A"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
};