const Dotenv = require('dotenv-webpack')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([[withSass], [optimizedImages, { handleImages: ['jpeg', 'png', 'svg', 'webp', 'ico'] }]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config;
  },
});
