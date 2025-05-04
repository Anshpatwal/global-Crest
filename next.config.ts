/** @type {import('next').NextConfig} */
import { i18n } from './next-i18next.config'
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    // 1. List any simple hostnames here:
    domains: [
      'images.unsplash.com',
      'img.icons8.com',
      'kitabkidukan.in',
      'i.pravatar.cc',
    ],
    // 2. If you need more fine-grained control (path, port, etc.), use remotePatterns:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // optional: specify pathname, port, etc.
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      // …any additional patterns
    ],
  },
};

module.exports = nextConfig;
