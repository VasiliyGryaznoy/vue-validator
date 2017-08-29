'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');


module.exports = {
  entry: './assets/js/index',
  output: {
    path: __dirname + '/public/js',
    filename: 'build.js'
  },

  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};