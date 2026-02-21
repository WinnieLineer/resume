import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure basePath is correctly set for GitHub Pages repository 'resume'
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  // Use assetPrefix to fix CSS loading issues on GitHub Pages subdirectories
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
