/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "d15zngbzwsyml4.cloudfront.net",
        pathname: "/banners/**",
      },
    ],
  },
};

export default nextConfig;
