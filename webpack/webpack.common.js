const Path = require('path');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const Config = require('../config.json');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' },
    ]),
    new Webpack.ProvidePlugin({
      config: '~/../config.json',
    }),
    new Webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html'),
    }),
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     'babel-loader',
      //     {
      //       loader: 'react-svg-loader',
      //       options: {
      //         jsx: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(js|jsx)$/,
        include: [
          Path.resolve(__dirname, '../src'),
          /**
           * add ES6 modules that should be transpiled here. For example:
           * Path.resolve(__dirname, '../node_modules/query-string'),
           */
        ],
        loader: 'babel-loader',
      },
    ],
  },
};
