/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/static/**',
      },
    ],
    // Disable image optimization to bypass private IP restrictions for localhost
    // In production, images should be served from S3/CDN where this isn't needed
    unoptimized: true,
  },
};

export default nextConfig;
