/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "coin-images.coingecko.com",
      },
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
