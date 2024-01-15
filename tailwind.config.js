/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
          fontVariationSettings: '"normal"',
        },
      ]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
