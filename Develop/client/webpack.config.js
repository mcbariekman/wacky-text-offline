const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // HTML Webpack Plugin for generating HTML file
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['main'],
        filename: 'index.html',
      }),

      // Webpack PWA Manifest Plugin for generating manifest file
      new WebpackPwaManifest({
        name: 'My PWA',
        short_name: 'PWA',
        description: 'My Progressive Web App',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: path.resolve('src/images/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
        fingerprints: false,
      }),

      // Workbox Inject Manifest Plugin for injecting the service worker file
      new InjectManifest({
        swSrc: './src/service-worker.js',
      }),
    ],

    module: {
      rules: [
        // CSS loader configuration
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

        // Babel loader configuration
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
