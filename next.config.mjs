/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/nextjs-blog/" : "",
  basePath: isProd ? "/nextjs-blog" : "",
};

export default nextConfig;
