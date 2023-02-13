/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '320px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        orange: ' #F66B0E',
        white: '#FFFFFF',
        bg:'#F5F5F5',
        darkBlue:'#112B3C',
        content: '#FFF8F0',
        gray:'#D9D9D9',
        para: '#828282',
        about: '#BDBDBD;',
        test: 'rgba(255, 255, 255, 0.8)'
      }
    },
  },
  plugins: [],
}
