const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontSize: {
        'h1': '40px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '40px',
            },
            fontFamily: 'var(--font-inter)',
          },
        },
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}