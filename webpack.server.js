/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'scripts/pageBuilder.jsx'),
  target: 'node',
  output: {
    filename: 'scripts/pageBuilder.compiled.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'scripts')],
      },
      {
        test: /\.s?css$/,
        loader: 'null',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
};
