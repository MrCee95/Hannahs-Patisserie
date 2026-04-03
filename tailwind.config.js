/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF5',
        rose: {
          DEFAULT: '#DCAE96',
          dark: '#C8967B',
          light: '#E8C4B8',
          hover: '#B88469',
        },
        charcoal: '#333333',
      },
      fontFamily: {
        heading: ['DynaPuff', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}