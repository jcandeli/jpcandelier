var path = require('path');

module.exports = {
    context: __dirname,
    entry: [
      'webpack/hot/only-dev-server',
      "./src/app.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['react', 'es2015']
              }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extenstions: ['', '.js', '.jsx']
    }
}
