import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Winnie Lin | Senior Backend Engineer',
  description: 'Professional resume of Shi Ting (Winnie) Lin, Senior Backend Engineer specializing in core banking and high-concurrency systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 可愛又專業的 SVG Favicon (黑色圓圈 + 白色 W + 藍色亮點)
  const faviconSvg = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='50' fill='black'/><text y='65' x='50' text-anchor='middle' font-size='50' fill='white' font-family='Arial, sans-serif' font-weight='900'>W</text><circle cx='75' cy='75' r='10' fill='%233b82f6'/></svg>`;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconSvg} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
