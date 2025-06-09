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
      ],
    });

    // Add resolve alias for the storybook project
    config.resolve.alias = {
      ...config.resolve.alias,
       //'@storybook': resolve(process.cwd(), 'lib'),
       '@storybook': libPath,
       '@storybook/stories': libPath,
       'judgedicev7': path.resolve(process.cwd(), './lib'),
    };

    // Add module resolution
    config.resolve.modules = [
      ...config.resolve.modules,
      path.resolve(process.cwd(), './lib'),
    ];

    console.log('judgev7 alias configured:', config.resolve.alias['judgedicev7']);
    var jls = config.resolve.alias['judgedicev7'];
    console.log('Contents of judgedicev7:', fs.readdirSync(jls));
    console.log('Full alias config:', config.resolve.alias);

    return config;
  },
};

export default nextConfig; 