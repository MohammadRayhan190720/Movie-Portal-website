/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#E74C3C",
        accent: "#1ABC9C",
        background: "#1C1C1C",
        text: "#FDFEFE",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Cinzel: ["Cinzel Decorative", "serif"],
      },
    },
  },
  plugins: [daisyui],
};

