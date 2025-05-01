import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/dilunirmal" : "",
  assetPrefix: isProd ? "/dilunirmal/" : "",
  /* config options here */
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
