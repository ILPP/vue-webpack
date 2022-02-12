const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const devConfig = {
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    open: true,
  },
};
module.exports = merge(baseConfig, devConfig);
