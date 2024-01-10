/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'slot-pattern': "url('assets/img/bg-slot.png')",
        'palece-pattern': "url('assets/img/bg-palece.png')",
      },
    },
  },
  plugins: [],
};
