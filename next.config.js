/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "imagedelivery.net", "cdn.aframe.io","unpkg.com"
    ],
  }
}

module.exports = nextConfig