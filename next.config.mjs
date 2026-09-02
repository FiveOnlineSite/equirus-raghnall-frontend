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
      {
        protocol: "https",
        hostname: "d15zngbzwsyml4.cloudfront.net",
        pathname: "/testimonials/**",
      },
      {
        protocol: "https",
        hostname: "d15zngbzwsyml4.cloudfront.net",
        pathname: "/blogs/**",
      },
    ],
  },
};

export default nextConfig;
