/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#BF32E4",
        secondary: "#14E9F1",
        light: "#EDF7F6",
        dark: "#0A090C",
        ferrari: {
          50: "#fff3f4",
          100: "#fee7e8",
          200: "#fdc3c6",
          300: "#fc9ea3",
          400: "#f9565f",
          500: "#f70d1a",
          600: "#de0c17",
          700: "#b90a14",
          800: "#940810",
          900: "#79060d",
        },
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
