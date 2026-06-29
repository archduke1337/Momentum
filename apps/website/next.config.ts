import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui', '@workspace/types', '@workspace/utils'],
  turbopack: {
    root: path.resolve(__dirname, '../..'),
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;