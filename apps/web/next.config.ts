import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img-cdn.hltv.org',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
