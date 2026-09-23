/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  allowedDevOrigins: ["192.168.1.*"],
  turbopack: {
    resolveAlias: {
      // See src/lib/stubs/spz-loader.js — the real package breaks the minified Cesium chunk.
      "@spz-loader/core": "./src/lib/stubs/spz-loader.js",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
