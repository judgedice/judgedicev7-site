/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/judgedicev7-site' : '',
  images: {
    unoptimized: true,  // Required for static export
  },
  // Ensure we can import from the storybook project
  transpilePackages: ['judgedicev7'],
};

export default nextConfig; 