/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      colors: {
        "brand-mustard": "#F2B42C",
        "brand-blue": "#5F87FF",
        "brand-dark": "#242122",
        "brand-light": "#EEEDEA",
        "brand-accent": "#5FE7FF",
        "brand-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
}

