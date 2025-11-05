/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // importante para React + TSX
  ],
  theme: {
    extend: {},
  },
plugins: [require('@tailwindcss/typography')],
}
