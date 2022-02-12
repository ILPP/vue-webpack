const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const prodConfig = {
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'production',
};
module.exports = merge(baseConfig, prodConfig);
