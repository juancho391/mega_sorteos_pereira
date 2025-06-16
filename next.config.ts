/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgsredsocial.s3.amazonaws.com"],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
