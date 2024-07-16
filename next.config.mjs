/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.admin786.pnytrainings.com'],
    unoptimized: true,
  },
  trailingSlash: false, // Add this line
};

export default nextConfig;
