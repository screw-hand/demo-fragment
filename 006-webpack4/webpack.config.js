const path = require('path')
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  context:  path.join(__dirname, './src'),
  /* entry start */
  // entry: './index.js',
  // entry: [ 'babel-polyfill', './index.js'],
  // entry: {
  //   index: ['babel-polyfill', './index.js'],
  // },
  // entry: {
  //   index: ['babel-polyfill', './index.js'],
  //   lib: './lib.js'
  // },
  // entry: {
  //   pageA: './pageA.js',
  //   pageB: './pageB.js', 
  //   PageC: './pageC.js',
  //   /* 提取公共模块 (optimization.splitChunks) */
  //   vendor: ['react', 'react-dom']
  // },
  /* entry end */
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name]@[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: './'
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist',
  },
  plugins: [
    new htmlPlugin({
      title: path.basename(__dirname)
    })
  ]
}