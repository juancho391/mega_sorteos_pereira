/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgsredsocial.s3.amazonaws.com"], // aquí agregas tu dominio S3
  },
};

module.exports = nextConfig;
