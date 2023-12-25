const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  theme: {
    fontFamily: {
      sans: ['Jost', 'Jockey One', 'sans-serif'],
    },
    extend: {
      height: {
        92: '92%',
      },
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
