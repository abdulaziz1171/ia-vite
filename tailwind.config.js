/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brighColor: "#F4511F",
        backgroundColor: "#b7bca9",
        lightText: "#959595"
      }
    },
  },
  plugins: [],
}

