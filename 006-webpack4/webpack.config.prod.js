const commonConfig = require('./webpack.config.common.js')
const devConfig = require('./webpack.config.dev.js')
const merge = require('webpack-merge')

module.exports = merge.smart(devConfig, {
  mode: 'production',
  // devtool: 'cheap-module-source-map', // recommend dev
})
