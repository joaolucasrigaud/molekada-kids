/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com", "placehold.co"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
