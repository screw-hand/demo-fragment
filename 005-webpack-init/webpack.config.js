const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]@[contenthash].js',
    chunkFilename: '[name]@[contenthash].async.js'
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    client: {
      overlay: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
}

module.exports = config