var path = require('path');
var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin")

module.exports = {
  entry: './ele_entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './ele_index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
]

};