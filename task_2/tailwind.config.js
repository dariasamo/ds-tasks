/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        20: '5rem',
        24: '6rem',
        32: '8rem'
      },
      colors: {
        candy: {
          DEFAULT: '#f14d1d',
          dark: '#b53c18'
        },
        sand: '#f0f0eb'
      }
    }
  },
  plugins: []
}
