/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6a55fa',
        background: {
          DEFAULT: '#0e0e0e',
          900: '#343a40',
          800: '#171717',
          700: '#212121',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')]
  ,
};
