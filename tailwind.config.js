// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          '0%, 100%': { transform: 'scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1.4)', opacity: '0.3' },
        },
      },
      animation: {
        shadowPulse: 'shadowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
