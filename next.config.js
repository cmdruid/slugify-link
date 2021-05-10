module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug((?!404|500)\\w{1,})',
        destination: `/api/:slug`,
        permanent: false
      }
    ]
  }
}