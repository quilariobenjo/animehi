/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
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
