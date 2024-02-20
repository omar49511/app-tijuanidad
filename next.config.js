/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
      {
        hostname: "www.mexicoenfotos.com",
      },
    ],
  },
};

module.exports = nextConfig;
