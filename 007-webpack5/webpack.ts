const webpack = require('webpack')
const args = process.argv.slice(2)
const config = require(args[0] || './webpack.config.base.ts')

webpack(
  config,
  (err: unknown, stats: { hasErrors: () => {} }) => {
    // [Stats Object](#stats-object)
    if (err || stats.hasErrors()) {
      // [Handle errors here](#error-handling)
      console.error(err)
      console.error(stats)
    }
    // Done processing
    console.log('done!')
  }
)
