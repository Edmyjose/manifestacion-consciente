/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./politica-de-privacidad.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        emerald: {
          950: '#022c22',
          900: '#064e3b',
          800: '#065f46',
          700: '#047857',
          500: '#10b981',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
          400: '#fbbf24',
        }
      }
    }
  },
  plugins: [],
}
