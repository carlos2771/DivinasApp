/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA9BE",
        letras: "#773E4C",
        parrafo: "#FAAFC1",
        blackBackground: "#1E1E1E",
      }

    },
  },
  plugins: [],
}

