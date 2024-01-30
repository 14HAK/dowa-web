/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Hind Siliguri'],
        arabic_utman: ['KFGQPC Uthmanic Script HAFS'],
      }, //end of fontFamily
    },
  },
  plugins: [],
}