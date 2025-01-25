import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  //basePath: '/omniventus-gh-pages',
  //assetPrefix: '/omniventus-gh-pages/',
};

export default nextConfig;
