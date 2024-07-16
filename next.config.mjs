/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['www.admin786.pnytrainings.com'],
    unoptimized: true,
  },
  trailingSlash: false, // Add this line
};

export default nextConfig;
