import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

const baseConfig = require('./webpack.config.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = merge<Configuration>(baseConfig, {
  entry: {
    bundle_client: './src/main_client.tsx'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

module.exports = config
