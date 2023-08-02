/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { stylePaths } = require('./stylePaths');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '1337';

module.exports = merge(common('development'), {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    client: {
      overlay: true,
    },
    allowedHosts: ['all'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [...stylePaths],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
