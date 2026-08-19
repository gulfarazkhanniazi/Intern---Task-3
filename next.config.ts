import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve files from /public directly instead of through the hosted image
  // optimizer, which returns 402 once its quota is exhausted.
  images: { unoptimized: true },
};

export default nextConfig;
