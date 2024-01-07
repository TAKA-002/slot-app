/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "slot-pattern": "url('assets/img/dot_pink.png')",
      },
    },
  },
  plugins: [],
};
