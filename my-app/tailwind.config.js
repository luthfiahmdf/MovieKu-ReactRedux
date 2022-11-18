/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#101820ff",
        200: "#282F36",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
