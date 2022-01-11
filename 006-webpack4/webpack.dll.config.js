const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    iframe: ["react", "react-dom", "react-router", "vue"]
  },
  output: {
    filename: '_ddl_[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '_ddl_[name]'
  },
  plugins: [
    // name 要等于output.library的name
    new webpack.DllPlugin({
      name: '_ddl_[name]',
    path: path.resolve(__dirname, 'dist', 'manifest.json')
    }),
  ]
}