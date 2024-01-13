/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'slot-pattern': "url('assets/img/bg-slot.png')",
        palece: "url('assets/img/palece.png')",
        paripi: "url('assets/img/bg-paripi.png')",
      },
    },
  },
  plugins: [],
};
