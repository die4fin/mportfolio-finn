/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css", // Tambahin ini buat jaga-jaga
  ],
  theme: {
    extend: {
      colors: {
        'finn-purple': '#B57EDC',
      },
    },
  },
  plugins: [],
}