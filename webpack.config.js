const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: './dist/bundle.js',
    chunkFilename: './dist/[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=50000'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './dist/bundle.css',
    }),
    new VueLoaderPlugin(),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/service-worker.js',
      swDest: 'service-worker-dist.js'
    })
  ]
};
