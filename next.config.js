/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public', // L'endroit où les fichiers générés seront placés
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
});

module.exports = withPWA({
    // webpack5: true,
    output: 'standalone',
    reactStrictMode: true,
    webpack: (config) => {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        };
        config.resolve.fallback = { fs: false };
        return config;
    },
    env: {
        HOSTNAME: process.env.HOSTNAME || '0.0.0.0',
        PORT: process.env.PORT || 3000,
    },
})
