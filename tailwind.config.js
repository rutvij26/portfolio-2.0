/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3399FF",

          "secondary": "#FF8C00",

          "accent": "#66635B",

          "neutral": "#191D24",

          "base-100": "#FFFDFA",

          "info": "#0F89FF",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("daisyui")
  ],
}

