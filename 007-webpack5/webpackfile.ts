import { Configuration } from "webpack";
import { merge } from "webpack-merge";
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require('./webpack.config.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = merge<Configuration>(baseConfig, {
  entry: {
    app: './src/main_client.tsx',
    pageA: './src/multi-page/pageA.tsx',
    pageB: './src/multi-page/pageB.tsx'
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: 'app.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: 'pageA.html',
      chunks: ['pageA']
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: 'pageB.html',
      chunks: ['pageB']
    }),
    new CleanWebpackPlugin()
  ],
});

module.exports = config