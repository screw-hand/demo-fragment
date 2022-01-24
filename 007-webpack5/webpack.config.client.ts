import { Configuration } from "webpack";
import { merge } from "webpack-merge";

const baseConfig = require('./webpack.config.base')

const config = merge<Configuration>(baseConfig, {
  entry: "./src/main_client.tsx",
  output: {
    filename: "bundle_client.js"
  }
});

module.exports = config