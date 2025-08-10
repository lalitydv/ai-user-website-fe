/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'vercel.app', 
      'localhost', 
      'vercel.com',
      '*.vercel.app',
      '*.vercel.com'
    ],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Ensure static assets are properly served
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  // Enable static optimization
  staticPageGenerationTimeout: 120,
  // Ensure proper handling of public assets
  trailingSlash: false,
}

module.exports = nextConfig
