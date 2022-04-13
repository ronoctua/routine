import { colorSystem } from '../colors';

const commonThemeValues = {
  text: '#ffffff',
  'text-secondary': '#cdcdcd',

  'background-down': '#0b0b0b',

  'outline-discreet': '#72727236 solid 2px',

  'scrollbar-thumb': '#555555',
  'scrollbar-background': '#373737',

  shadow: '#13131352',
  'shadow-strong': '#0d0d0da8',

  'discreet-up': '#9e9e9e',
  discreet: '#424242',
  'discreet-down': '#262626',

  'positive-up': colorSystem['green-d-9'],
  positive: colorSystem['green-d-1'],
  'positive-down': colorSystem['green-d-0'],

  'attention-up': colorSystem['golden-d-11'],
  attention: colorSystem['golden-d-1'],
  'attention-down': colorSystem['golden-d-0'],

  'negative-up': colorSystem['burgundy-d-11'],
  negative: colorSystem['burgundy-d-2'],
  'negative-down': colorSystem['burgundy-d-0'],
};

const woodTheme = {
  ...commonThemeValues,

  background: '#141414',

  hover: '#1e1a18',

  'surface-up': '#222222',
  surface: '#1d1d1d',
  'surface-down': '#161616',

  'primary-up': colorSystem['brown-d-9'],
  primary: colorSystem['brown-d-2'],
  'primary-down': colorSystem['brown-d-0'],

  'secondary-up': colorSystem['blue-d-8'],
  secondary: colorSystem['blue-d-1.5'],
  'secondary-down': colorSystem['blue-d-0'],
};

const futurismTheme = {
  ...commonThemeValues,

  background: '#0c1218',

  hover: '#101f26',

  'surface-up': '#1e212a',
  surface: '#181b22',
  'surface-down': '#12151a',

  'primary-up': colorSystem['blue-d-8'],
  primary: colorSystem['blue-d-1.5'],
  'primary-down': colorSystem['blue-d-0'],

  'secondary-up': colorSystem['brown-d-8'],
  secondary: colorSystem['brown-d-2'],
  'secondary-down': colorSystem['brown-d-0'],
};

const reptilianTheme = {
  ...commonThemeValues,

  background: '#0c1518',

  hover: '#0f2823',

  'surface-up': '#1f2626',
  surface: '#181e1e',
  'surface-down': '#131818',

  'primary-up': colorSystem['teal-d-8'],
  primary: colorSystem['teal-d-1'],
  'primary-down': colorSystem['teal-d-0'],

  'secondary-up': colorSystem['purple-d-8'],
  secondary: colorSystem['purple-d-1.5'],
  'secondary-down': colorSystem['purple-d-0'],
};

export const themeColors = {
  woodTheme,
  futurismTheme,
  reptilianTheme,
};
