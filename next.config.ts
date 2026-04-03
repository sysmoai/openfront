import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ['graphql'],
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // Workaround since we diverged from Keystone reltionship and document views
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['next/font/google/target.css'] = require.resolve('./styles/font-shim.css');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.S3_ENDPOINT ? process.env.S3_ENDPOINT.replace(/^https?:\/\//, '').replace(/:\d+$/, '') : '/',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;