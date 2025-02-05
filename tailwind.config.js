/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(205, 83%, 53%)",
        "light-blue": "hsl(205, 80%, 95%)",
        // "light-blue": "hsl(206, 80%, 90%)",
        "hover-blue": "hsl(206, 80%, 90%)",
        "dark-blue": "hsl(222, 47%, 11%)",
        "darkest-blue": "hsl(223, 83%, 5%)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
