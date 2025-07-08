/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com", // O domínio correto para imagens diretas
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // Para placeholders
      },
    ],
  },
};

module.exports = nextConfig;
