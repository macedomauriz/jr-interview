/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@emotion/react", "@emotion/styled"],
};

export default nextConfig;
