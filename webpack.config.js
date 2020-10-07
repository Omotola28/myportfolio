const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');
const dotenv =  require('dotenv');

// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;


// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html', 
    favicon: './public/favicon.ico'
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
 output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
 },   
 devServer: {
    contentBase: path.resolve(__dirname, 'src'), 
    port: 3000
 },
 module: {
    rules: [
        {test: /\.(js|jsx)$/, exclude: /node_modules/, use: [{loader: 'babel-loader'}]},
        {
            test: /\.(sc|c)ss$/,
            sideEffects: true,
            use: [ "style-loader", "css-loader"]
        },
        {test: /\.(png|jpg|gif|webp)$/, loader: 'url-loader?limit=8192'},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
      ]
 },
 plugins: [
     htmlWebpackPlugin,
     miniCssExtractPlugin, 
     new webpack.DefinePlugin(envKeys),
 ],
 resolve: {
   extensions: ['.js', '.jsx', '.json'],
   modules: ['node_modules'],
 },
};