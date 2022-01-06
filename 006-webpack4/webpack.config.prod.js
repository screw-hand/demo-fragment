const commonConfig = require('./webpack.config.common.js')
const devConfig = require('./webpack.config.dev.js')
const merge = require('webpack-merge')

module.exports = merge.smart(commonConfig, devConfig, {
  mode: 'production',
})
