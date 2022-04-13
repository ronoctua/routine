import { themeColors } from '@routine/ui-themes';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    opacity: 'opacity',
    borderRadius: 'redii',
  },

  theme: {
    colors: {
      ...themeColors.woodTheme,
    },

    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      18: '4.5rem',
      19: '4.75rem',
      20: '5rem',
      40: '10rem',
      80: '20rem',
    },

    fontSizes: {
      xs: '0.075rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
      '9xl': '6rem',
    },

    fonts: {
      default: '"Nunito Sans", sans-serif',
      highlight: '"Nunito Sans", sans-serif',
      code: 'monospace',
    },

    fontWeights: {
      regular: '400',
      medium: '600',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    redii: {
      xs: '2.5px',
      sm: '4px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
      transparent: '0%',
    },

    zIndices: {
      overlay: '9995',
      footer: '9997',
      modal: '9999',
    },

    shadows: {
      default: '0px 2px 2px $colors$shadow',
      small: '0px 2px 2px $colors$shadow',
      topStrong: '0px -3px 10px $colors$shadow-strong',
    },

    media: {
      sm: '(max-width: 400px)',
      md: '(max-width: 700px)',
    },
  },
});

const woodTheme = createTheme('wood-theme', {
  colors: { ...themeColors.woodTheme },
});

const futurismTheme = createTheme('futurism-theme', {
  colors: { ...themeColors.futurismTheme },
});

const reptilianTheme = createTheme('reptilian-theme', {
  colors: { ...themeColors.reptilianTheme },
});

export const themes = { woodTheme, futurismTheme, reptilianTheme };

export const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: '$default',
    letterSpacing: '0.02rem',
  },

  'html, body, #__next': {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    height: '100%',
  },

  html: {
    fontSize: '100%',
  },

  body: {
    fontSize: '$md',
    fontWeight: '$regular',

    color: '$text',
    background: '$background',
  },

  'pre, code': {
    fontFamily: '$code',
  },

  'ul, ol': {
    listStylePosition: 'inside',
  },

  '::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
  },

  '::-webkit-scrollbar-track, ::-webkit-scrollbar-corner': {
    background: '$colors$scrollbar-background',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$colors$scrollbar-thumb',
  },
});
