/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ]
  },
  // output: 'export',
  // distDir: 'build',
}

module.exports = nextConfig
