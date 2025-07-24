/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// next.config.js
module.exports = {
  images: {
    unoptimized: true, // Netlify doesn't support Next.js image optimization by default
  },
};
