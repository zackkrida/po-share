module.exports = {
  target: 'serverless',
  typescript: {
    ignoreDevErrors: true,
  },
  experimental: {
    modern: true,
    granularChunking: true,
  },
}
