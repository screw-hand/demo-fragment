// Generated using webpack-cli https://github.com/webpack/webpack-cli

import { Configuration } from "webpack";
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const webpack = require('webpack')
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config: Configuration = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]@[contenthash].js",
    chunkFilename: "[name]@[contenthash].async.js",
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name]@[contenthash].css",
      chunkFilename: "[name]@[contenthash].async.css",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.styl$/i,
        use: [
          /* stylesHandler, */
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};