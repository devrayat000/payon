const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,json}', "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(0, 100%, 66%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'light-grayish-violet': 'hsl(270, 3%, 87%)',
          'dark-grayish-violet': 'hsl(279, 6%, 55%)',
          'very-dark-violet': 'hsl(278, 68%, 11%)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'main-mobile': "url('/bg/bg-main-mobile.png')",
        'main-desktop': "url('/bg/bg-main-desktop.png')",
      },
      flex: {
        side: '0 0 280px',
      },
    },
  },
  plugins: [],
}
