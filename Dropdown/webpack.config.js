var nodeExternals = require('webpack-node-externals');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'index.js',
      library: '@zefr/dropdown',
      libraryTarget: 'umd'
    },
    target: 'node',
    externals: [nodeExternals()],
    module : {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css?sourceMap!sass?sourceMap'
            )
          }
        ]
    },
    
    plugins: [
      new ExtractTextPlugin('Dropdown.css', {allChunks: true})
    ]
    
}
