const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TampermonkeyPlugin = require('./src/build/tamperMonkeyPlugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
  let config = {
    mode: process.env.NODE_ENV || 'production',
    devtool: process.env.NODE_ENV == 'production' ? false : 'source-map',
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [],
    devServer: {
      host: 'localhost',
      port: 8080,
      hot: false,
      client: {
        reconnect: false
      }
    }
  };
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.plugins.push(new HtmlWebpackPlugin());
    config.plugins.push(new VueLoaderPlugin());
  }

  if (argv.mode === 'production') {
    config.plugins.push(new TampermonkeyPlugin());
    config.plugins.push(new VueLoaderPlugin());
    config.devtool = false;
  }
  return config;
};
