module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        geistmono: ['var(--font-geist-mono)'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}