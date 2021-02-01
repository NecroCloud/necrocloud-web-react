module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
  },
  variants: {
    extend: {
      display: ['dark', 'hover', 'focus']
    },
  },
}
