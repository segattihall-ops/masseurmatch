import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  eslint: {
    dirs: ["app"],
  },
  poweredByHeader: false,
};

export default nextConfig;
