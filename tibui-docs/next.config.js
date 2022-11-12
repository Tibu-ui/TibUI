/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: { appDir: true },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
