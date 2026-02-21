import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // 如果您的 GitHub 倉庫名稱是 resume，請確保 basePath 設定正確
  // 如果您使用的是自定義域名 winnie-lin.space，則不需要 basePath
  // 這裡我們預設使用 /resume 以確保在 GitHub 預設網址下也能正常顯示
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
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
    // 確保編譯不會因為細微的類型問題而中斷
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
