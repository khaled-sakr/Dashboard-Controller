/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vanilla: {
          50: "##ccb69b",
          100: "#b8a48c",
          200: "#a3927c",
          300: "#8f7f6d",
          400: "#7a6d5d",
          500: "#665b4e",
          600: "#52493e",
          700: "#3d372f",
          800: "#29241f",
          900: "#14120f",
        },
      },
    },
    plugins: [],
  },
};
