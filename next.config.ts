import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder (there is a stray lockfile higher up).
  turbopack: { root: __dirname },
};

export default nextConfig;
