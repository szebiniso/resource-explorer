import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['rickandmortyapi.com'], // allow images from this hostname
  },
};

export default nextConfig;
