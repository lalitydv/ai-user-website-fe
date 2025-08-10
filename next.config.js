/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Temporarily disable image optimization to test
    unoptimized: true,
    // Remove problematic wildcard domains and add proper ones
    domains: [
      'vercel.app', 
      'localhost', 
      'vercel.com',
      'buildro.ai',
      'www.buildro.ai'
    ],
    // Enable image optimization for better performance
    // unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Remove the problematic wildcard remote patterns
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**',
    //   },
    // ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Remove assetPrefix as it can cause issues
  // assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  // Enable static optimization
  staticPageGenerationTimeout: 120,
  // Ensure proper handling of public assets
  trailingSlash: false,
  // Remove duplicate headers function since it's already in vercel.json
  // async headers() {
  //   return [
  //     {
  //       source: '/videos/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //         {
  //           key: 'Accept-Ranges',
  //           value: 'bytes',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/images/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // Add webpack configuration to handle image files
  webpack: (config, { isServer }) => {
    // Handle image files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      type: 'asset/resource',
    })

    return config
  },
  // Add output configuration for better static asset handling
  output: 'standalone',
}

module.exports = nextConfig
