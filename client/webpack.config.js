const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: path.join(__dirname + '/public/dist'),
    filename: 'bundle.js',
  },
  mode: 'production', // development, production
    plugins: [
    new WebpackPwaManifest({
      filename: 'manifest.json',
      inject: false,
      fingerprints: false,

      name: 'Panda Bets app',
      short_name: 'Budget',
      description: 'An application that allows you to keep track of your bets both on and offline',
      background_color: '#000000',
      theme_color: '#ffffff',
      start_url: '/',
      display: 'standalone',
    }),
  ],
};

module.exports = config;