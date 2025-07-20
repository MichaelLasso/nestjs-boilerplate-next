import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ensure compatibility with Tailwind CSS v4
    optimizePackageImports: ['@repo/ui'],
  },
  // Configure webpack
  webpack: (config) => {
    // Configure path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'),
      '@repo/icons': path.resolve('../../packages/ui/src/assets/icons'),
    };

    // Configure SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /react/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                typescript: true,
                ext: 'tsx',
              },
            },
          ],
        },
        {
          type: 'asset/resource',
        },
      ],
    });

    return config;
  },
  // Configure proxy for API during development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

export default nextConfig;