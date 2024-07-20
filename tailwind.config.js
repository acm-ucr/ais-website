/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--nunito-font)", "sans-serif"],
      },
      colors: {
        ais: {
          "blue-100": "#051D40",
          "blue-200": "#03125E",
          "blue-300": "#010580",
          red: "#CA064D",
          gray: "#DCE6F9",
        },
      },
    },
  },
  plugins: [],
};
