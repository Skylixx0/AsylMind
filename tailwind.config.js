// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        shadowPulse: {
          '0%, 100%': { transform: 'scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1.4)', opacity: '0.3' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out forwards',
        shadowPulse: 'shadowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
