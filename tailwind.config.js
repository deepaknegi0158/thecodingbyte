/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
        noto: ['Noto Sans'],
        inter: ['inter'],
        space: ['Space Grotesk'],
        consolas: ['Consolas'],
        open: ['Open Sans']
      }
    },
  },
  plugins: [],
}
