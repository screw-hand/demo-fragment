import { Configuration } from "webpack";
import { merge } from "webpack-merge";
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base')

const config = merge<Configuration>(baseConfig, {
  entry: "./src/main_server.tsx",
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: "bundle_server.js",
  },
  externals: [nodeExternals()]
});

module.exports = config