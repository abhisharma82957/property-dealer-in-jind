/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16130F',
        inksoft: '#241F19',
        gold: '#B8912A',
        goldlight: '#E7CA74',
        ivory: '#F5F3F0',
        sand: '#E4DDD0',
        clay: '#6E6455',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '68rem', prose: '42rem' },
      boxShadow: { lift: '0 18px 40px -28px rgba(22,19,15,0.55)' },
    },
  },
  plugins: [],
};
