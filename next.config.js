/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'static.bunnycdn.ru',
      'gogocdn.net',
      's4.anilist.co',
      'img.zorores.com',
      'images.weserv.nl',
    ],
  },
};

module.exports = nextConfig;
