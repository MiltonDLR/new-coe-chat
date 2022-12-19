/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "public-sans": ["Public Sans", "sans-serif"],
      staatliches: ["Staatliches", "cursive"],
    },
  },
  plugins: [],
};