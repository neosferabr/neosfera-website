/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EEE9E1",
        primary: "#1A1A1A",
        secondary: "#4A4A4A",
        accent: "#33906E",
      },
      fontFamily: {
        sans: ["var(--font-albert-sans)"],
        serif: ["var(--font-roboto-serif)"],
      },
    },
  },
  plugins: [],
}; 