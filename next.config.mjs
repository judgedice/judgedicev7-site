/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set the basePath to match your repository name
  basePath: '/judgedicev7-site',
  // Set assetPrefix to match basePath for static assets
  assetPrefix: '/judgedicev7-site/',
  images: {
    unoptimized: true,  // Required for static export
  },
  // Ensure we can import from the storybook project
  transpilePackages: ['judgedicev7'],
};

export default nextConfig; 