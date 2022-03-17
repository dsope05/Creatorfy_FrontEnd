module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/query/graphql',
        destination: 'http://localhost:8080/:path*' // Proxy to Backend
      }
    ]
  }
}
