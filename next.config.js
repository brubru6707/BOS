/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],

  // 1. Turbopack Configuration (for dev)
  // root pins the workspace to this directory. Without it, Next walks up to
  // the stray lockfile in bat_cave/ and watches every sibling project.
  turbopack: {
    root: __dirname,
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
