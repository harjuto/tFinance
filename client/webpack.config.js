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
      //Transpile ES6
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets:['es2015']
        }
      },
      //Compile css
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      //Include angular templates
      {
         test: /\.html$/,
         loader: "ng-cache?prefix=[dir]/[dir]",
         exclude: /node_modules/,
       },
       //Include fonts
       {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
       {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
       {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
       {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

    ]
  },
  // plugins: [new BowerWebpackPlugin(
  //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
  // )]

};
