/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ea4437",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
