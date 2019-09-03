const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: './dist/bundle.js',
    chunkFilename: './dist/[name].bundle.js',
    path: path.join(__dirname, './public'),
    publicPath: './'
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
          "css-loader"
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=50000'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        }
      }),
      new OptimizeCSSAssetsPlugin
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
