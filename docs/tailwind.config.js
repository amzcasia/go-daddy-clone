/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        'myblk': '#111111',
        'mygray': '#EBEBEB',
        'primary': {
          'light': '#D8EFEF',
          'dark' : '#09757A',
          DEFAULT: '#00838C'
        }
        
      }
    },
   // "colors": colors,
  },
  plugins: [],
}

