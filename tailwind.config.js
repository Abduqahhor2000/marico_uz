/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(50, 108, 249)",
        border: "rgb(112, 112, 112)",
        light: "rgb(145, 145, 145)",
        gradient: "linear-gradient(-50deg, #904e95, #b05fb6, #e73c7e, #ee7752)",
        darker: "rgb(13, 13, 13)",
      },
      animation: {
        gradient: "flow 3s ease-in-out infinite",
        move: "slide 1200s linear infinite",
        moveSlow: "slide 600s linear infinite",
      },
      keyframes: {
        flow: {
          "0%": {
            "background-position": "0 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0 50%",
          },
        },
        slide: {
          "0%": { "background-position": "10000% 0" },
          "100%": { "background-position": "0 0" },
        },
      },
    },
  },
  plugins: [],
};
