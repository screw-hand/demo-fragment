const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // 'css-loader?minimize'
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
          // ExtractTextPlugin.extract({
          //   use: ['css-loader']
          // })
        ]
        // use: ExtractTextPlugin.extract({
        //   use: ['css-loader']
        // })
      }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin({
  //     filename: '[name]_[contenthash:8].css'
  //   })
  // ]
}