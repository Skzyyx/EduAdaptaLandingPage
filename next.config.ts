import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/prototipo", destination: "/prototipo/index.html" },
    ];
  },
};

export default nextConfig;
