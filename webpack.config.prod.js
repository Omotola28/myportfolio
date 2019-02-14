import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';


// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

//const GLOBALS = {
//  'process.env.NODE_ENV': JSON.stringify('production')
//};

//  'babel-polyfill',

export default {
  devtool: 'source-map',
  noInfo: false,
  entry: [
    //'eventsource-polyfill',
    'babel-polyfill',
  path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  },
  plugins: [
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.DefinePlugin(envKeys),
     new ExtractTextPlugin('styles.css'),
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.UglifyJsPlugin(),
     new HtmlWebpackPlugin({
       template: 'public/index.html',
       favicon: 'public/favicon.ico'    
     })

  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /(\.html)$/, loader: 'html-loader'},
      //      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(jpeg|png|gif|ico|jpg)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
