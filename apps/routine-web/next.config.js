const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const { i18n } = require('./next-i18next.config');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Svgr reference: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  env: {
    HOST: process.env.HOST,
  },
};

const pwaConfig = [
  withPWA,
  {
    pwa: {
      dest: 'public',
      register: true,
      sw: 'service-worker.js',
      disable: process.env.NODE_ENV === 'development',
    },
  },
];

const i18nConfig = [{ i18n }];

module.exports = withPlugins([[withNx(nextConfig)], pwaConfig, i18nConfig]);
