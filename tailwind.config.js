module.exports = {
  purge: [`./src/**/*.{js,jsx,ts,tsx}`],
  darkMode: `media`, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        // We disable TailWind Prose `code` and `pre` formatting
        DEFAULT: {
          css: {
            code: null,
            'code::before': null,
            'code::after': null,
            pre: null,
            'pre code': null,
          },
        },
        sm: {
          css: {
            code: null,
            'code::before': null,
            'code::after': null,
            pre: null,
            'pre code': null,
          },
        },
        lg: {
          css: {
            code: null,
            'code::before': null,
            'code::after': null,
            pre: null,
            'pre code': null,
          },
        },
        xl: {
          css: {
            code: null,
            'code::before': null,
            'code::after': null,
            pre: null,
            'pre code': null,
          },
        },
        '2xl': {
          css: {
            code: null,
            'code::before': null,
            'code::after': null,
            pre: null,
            'pre code': null,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require(`@tailwindcss/typography`)],
};
