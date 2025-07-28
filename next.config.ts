import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async() => {
    return [
      {
        source: '/',
        destination: '/home',
        statusCode: 302,
      },
    ]
  },
}

export default nextConfig
