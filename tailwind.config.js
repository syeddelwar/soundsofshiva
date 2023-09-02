/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#101130',
        'secondary': '#ec167f',
        'yellow': '#ffc20b',
      },
    },
  },
  plugins: [],
}

