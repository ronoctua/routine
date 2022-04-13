const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.join(
    process.cwd(),
    'apps',
    'routine-web',
    'public',
    'locales',
  ),
};
