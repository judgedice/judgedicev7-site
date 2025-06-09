import { fileURLToPath } from 'url';
import path from 'path';
import { dirname, resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    const fs = require('fs');
    const libPath = path.resolve(process.cwd(), './lib/stories');
    console.log('Lib path exists:', fs.existsSync(libPath));
    console.log('Files in lib/stories:', fs.readdirSync(libPath).filter(f => f.endsWith('.css')));
  
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
       //'@storybook': resolve(process.cwd(), 'lib'),
       '@storybook': libPath,
       '@storybook/stories': libPath,
    };
    console.log('Webpack alias configured:', config.resolve.alias['@storybook'])

    return config;
  },
};

export default nextConfig; 