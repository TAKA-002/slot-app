/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'slot-pattern': "url('assets/img/bg-slot.png')",
        paripi: "url('assets/img/bg-paripi.png')",
        ashiato: "url('assets/img/ashiato.png')",
      },
      keyframes: {
        swingVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
        swingHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        pendulum: {
          '0%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        swingVertical: 'swingVertical 5s ease-in-out infinite', // 縦方向の揺れ
        swingHorizontal: 'swingHorizontal 3s ease-in-out infinite', // 横方向の揺れ
        pendulum: 'pendulum 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
