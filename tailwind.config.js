/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "animate-roll": "",
      },
      keyframes: {
        "animate-roll": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
