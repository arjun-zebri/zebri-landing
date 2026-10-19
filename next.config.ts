import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // A lockfile further up the folder tree made Next guess the wrong workspace root.
  turbopack: { root: process.cwd() },
  // Next's dev badge sits fixed bottom left, over whichever product picture scrolls under it, and read as part of the picture.
  devIndicators: false,
  // The old blog's posts are Guides now; the news post is gone, so its links go home.
  async redirects() {
    return [
      { source: '/blog', destination: '/guides', permanent: true },
      { source: '/blog/:slug', destination: '/guides/:slug', permanent: true },
      { source: '/news', destination: '/', permanent: true },
      { source: '/news/:slug', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
