/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'card-bg':'#343434',
        'card-bg-hover':'#262626',
        'newblue': '#06f',
      }
    },
  },
  plugins: [],
}