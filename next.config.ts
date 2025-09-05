import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  output: 'export', // Static export for Netlify
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: '/Users/zishan/Downloads/zish-blog',
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
