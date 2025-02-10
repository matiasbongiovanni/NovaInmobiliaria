import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "mir-s3-cdn-cf.behance.net",
      }
    ],
  },
};

export default nextConfig;
