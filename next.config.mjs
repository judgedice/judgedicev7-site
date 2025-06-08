import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Add a rule to handle CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: false,
          },
        },
        'postcss-loader',
      ],
      include: [
        resolve(__dirname, 'src'),
        resolve(__dirname, 'lib'),
        resolve(__dirname, '../judgedicev7-storybook/src'),
      ],
    });

    // Add resolve alias for the storybook project
    config.resolve.alias = {
      ...config.resolve.alias,
      '@storybook': resolve(__dirname, '../judgedicev7-storybook/src'),
    };

    return config;
  },
};

export default nextConfig; 