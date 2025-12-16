/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ضروري جداً لظهور الصور في GitHub Pages
  },
  // هذا يجعل الموقع يعمل داخل المجلد الفرعي للمستودع
  basePath: '/landing-page-template',
  assetPrefix: '/landing-page-template',
};

export default nextConfig;
