/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': '#08333d',
        "background": "#191f2b",
      },
    },
  },
  plugins: [],
}