// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   turbopack: {
//     root: "/Users/abdalla/nextjs-projects/marn-store/marn-store", // adjust this path if needed
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
