/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './**/*.liquid', './assets/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
