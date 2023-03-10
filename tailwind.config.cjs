/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          pale: 'hsl(25, 100%, 94%)',
        },
        neutral: {
          darkBlue: 'hsl(220, 13%, 13%)',
          darkGrayBlue: 'hsl(219, 9%, 45%)',
          grayBlue: 'hsl(220, 14%, 75%)',
          lightGrayBlue: 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'hsl(0, 0%, 0%)',
        },
      },
    },
  },
  plugins: [],
};
