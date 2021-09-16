module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#0A4443',
        secondary: '#FEFFD3',
        third: '#ADAE7F'
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      blur: ['hover', 'focus'],
      borderColor: ['focus-visible'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}