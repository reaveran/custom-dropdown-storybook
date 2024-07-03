/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    fontSize: {
      xs: '0.55rem',
      sm: '0.75rem'
    },
    extend: {
      zIndex: {
        '1001': '1001',
      }
    },
  },
  plugins: [],
}

