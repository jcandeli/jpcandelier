var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack/hot/only-dev-server',
    './src/app.js',
    './src/styles/styles.scss',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        loader: 'url-loader?prefix=img/',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
