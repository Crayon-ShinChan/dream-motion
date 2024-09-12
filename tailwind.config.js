/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./theme.config.jsx",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};