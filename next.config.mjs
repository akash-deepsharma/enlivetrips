/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.enlivetrips.com",
      },
    ],
  },
};

export default nextConfig;
