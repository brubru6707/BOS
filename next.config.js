/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  
  // 1. Turbopack Configuration (for dev)
  experimental: {
    turbopack: {
      resolveExternals: {
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      },
    },
  },

  // 2. Webpack Configuration (for build)
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

module.exports = nextConfig;