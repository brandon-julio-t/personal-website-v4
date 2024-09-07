/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "coin-images.coingecko.com" }],
  },
};

module.exports = nextConfig;
