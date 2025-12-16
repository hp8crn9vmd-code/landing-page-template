/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/landing-page-template',
  assetPrefix: '/landing-page-template',
  trailingSlash: true, // مهم جداً: يضيف / في نهاية الروابط لضمان تحميل المجلدات بشكل صحيح
};

export default nextConfig;
