/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    server: {
      host: true,
    },
    colors: {
      'dark-blue': '#5956E9',
      'blue': '#83A2FF',
      'light-blue': '#B4BDFF',
      'white': '#ffffff',
      'light': '9AFFF3',
    },
    listStyleImage: {
      checkmark: 'url("/images/checkmark.png")',
    },
  },
};