/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      blue: '#4F63AC',
      white: '#FFFFFF',
      orange: '#FCA34D',
      black: '#000000'
  }},
  },
  plugins: [],
}

