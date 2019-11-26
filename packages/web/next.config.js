// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  target: 'serverless',
  typescript: {
    ignoreDevErrors: true,
  },
  experimental: {
    modern: true,
    granularChunking: true,
  },
})
