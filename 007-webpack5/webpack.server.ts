const webpack = require('webpack')
const args = process.argv.slice(2)
const config = require(args[0] || './webpack.config.base.ts')

const compiler = webpack(config)

compiler.watch(
  {
    // Example [watchOptions](/configuration/watch/#watchoptions)
    aggregateTimeout: 300,
    poll: undefined
  },
  (err: unknown, stats: { hasErrors: () => {} }) => {
    // [Stats Object](#stats-object)
    // Print watch/build result here...
    console.error(err)
    console.error(stats)
  }
)
