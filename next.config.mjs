/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If your repo is not at the root of your Pages site, set the basePath:
  // basePath: '/judgedicev7-site',
  // assetPrefix: '/judgedicev7-site',
  images: {
    unoptimized: true,  // Required for static export
  },
  // Ensure we can import from the storybook project
  transpilePackages: ['judgedicev7'],
};

export default nextConfig; 