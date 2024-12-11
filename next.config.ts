import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname:'asgfdpixkggsqepzroge.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ]
  }
};

export default nextConfig;
