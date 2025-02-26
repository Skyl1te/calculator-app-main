/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../src/css/style.css",
    "../src/js/calculator.js",
    "../src/js/themes.js",
    "../index.html"
  ],
  theme: {
    extend: {
      colors: {
        'theme-1': {
          'main-bg': 'hsl(222, 26%, 31%)',
          'toggle-bg': 'hsl(223, 31%, 20%)',
          'screen-bg': 'hsl(224, 36%, 15%)',
          'key-bg': 'hsl(225, 21%, 49%)',
          'key-shadow': 'hsl(224, 28%, 35%)',
          'key-red-bg': 'hsl(6, 63%, 50%)',
          'key-red-shadow': 'hsl(6, 70%, 34%)',
          'key-light-bg': 'hsl(30, 25%, 89%)',
          'key-light-shadow': 'hsl(28, 16%, 65%)',
          'text-dark': 'hsl(221, 14%, 31%)',
          'text-white': 'hsl(0, 0%, 100%)',
        },
        'theme-2': {
          'main-bg': 'hsl(0, 0%, 90%)',
          'toggle-bg': 'hsl(0, 5%, 81%)',
          'screen-bg': 'hsl(0, 0%, 93%)',
          'key-bg': 'hsl(185, 42%, 37%)',
          'key-shadow': 'hsl(185, 58%, 25%)',
          'key-orange-bg': 'hsl(25, 98%, 40%)',
          'key-orange-shadow': 'hsl(25, 99%, 27%)',
          'key-light-bg': 'hsl(45, 7%, 89%)',
          'key-light-shadow': 'hsl(35, 11%, 61%)',
          'text-dark': 'hsl(60, 10%, 19%)',
          'text-white': 'hsl(0, 0%, 100%)',
        },
        'theme-3': {
          'main-bg': 'hsl(268, 75%, 9%)',
          'toggle-bg': 'hsl(268, 71%, 12%)',
          'screen-bg': 'hsl(268, 71%, 12%)',
          'key-bg': 'hsl(281, 89%, 26%)',
          'key-shadow': 'hsl(285, 91%, 52%)',
          'key-cyan-bg': 'hsl(176, 100%, 44%)',
          'key-cyan-shadow': 'hsl(177, 92%, 70%)',
          'key-dark-bg': 'hsl(268, 47%, 21%)',
          'key-dark-shadow': 'hsl(290, 70%, 36%)',
          'text-yellow': 'hsl(52, 100%, 62%)',
          'text-dark-blue': 'hsl(198, 20%, 13%)',
          'text-white': 'hsl(0, 0%, 100%)',
        },
      }
    },
  },
  plugins: [],
}