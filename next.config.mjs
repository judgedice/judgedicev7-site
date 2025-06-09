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
  basePath: '/judgedicev7-site',
  assetPrefix: '/judgedicev7-site',
  
  images: {
    unoptimized: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => !ext.includes('storybook-repo')),
  webpack: (config, { isServer }) => {
    const fs = require('fs');
    const libPath = path.resolve(process.cwd(), './lib/stories');
    console.log('Lib path exists:', fs.existsSync(libPath));
   // console.log('Files in lib/stories:', fs.readdirSync(libPath).filter(f => f.endsWith('.css')));
  
    // Exclude storybook repo from compilation
    config.module.rules.push({
      test: /\.(tsx|ts|jsx|js)$/,
      exclude: /storybook-repo/,
    });

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
       'judgedicev7/index': path.resolve(process.cwd(), './lib/index.js'),
       'judgedicev7/index.js': path.resolve(process.cwd(), './lib/index.js'),
    };

    // Add module resolution - make sure lib is first
    config.resolve.modules = [
      path.resolve(process.cwd(), './lib'),
      ...config.resolve.modules,
    ];

    // Add file extensions
    config.resolve.extensions = [
      ...config.resolve.extensions,
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ];

    // Add mainFields to ensure proper resolution
    config.resolve.mainFields = ['module', 'main'];

    console.log('judgesitev7 alias configured:', config.resolve.alias['judgedicev7']);
    //var jls = config.resolve.alias['judgedicev7'];
   // console.log('Contents of judgedicev7:', fs.readdirSync(jls));
   // console.log('Full alias config:', config.resolve.alias);

    return config;
  },
};

export default nextConfig; 