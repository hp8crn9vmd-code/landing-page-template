/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // إعدادات المسار الفرعي لـ GitHub Pages
  basePath: '/landing-page-template',
  assetPrefix: '/landing-page-template',
};

export default nextConfig;
