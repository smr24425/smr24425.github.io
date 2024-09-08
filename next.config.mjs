/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/smr24425.github.io/" : "",
  basePath: isProd ? "/smr24425.github.io" : "",
};

export default nextConfig;
