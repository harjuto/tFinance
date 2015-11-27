var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.min.js'
  },
  devtool: 'inline-source-map',
  watch: true,
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets:['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/,
      },
      {
         test: /\.html$/,
         loader: "ng-cache?prefix=[dir]/[dir]",
         exclude: /node_modules/,
       }

    ]
  },
  // plugins: [new BowerWebpackPlugin(
  //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
  // )]

};
