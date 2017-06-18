

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './src/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loaders: 'style-loader!css-loader?modules!less-loader'
      }, {
        test: /\.css$/,
        loaders: 'style-loader!css-loader?modules'
      },
      {
        test: /\.(png|jpg)$/,
        loaders: 'url-loader?limit=50000'
      },   
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.css', '.less', '.js']
  },
  devServer: {
    port: 8090,
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}


