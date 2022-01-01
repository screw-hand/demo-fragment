module.exports = {
  // webpack模块入口文件，将从这个文件查找模块依赖
  entry: './src/index.js',
  output: {
    // 输出的文件名，默认目录为'./dist', index.html需要对文件做正确的路径引用
    filename: 'bundle.js',
  },
  mode: 'development',
  // webpack-dev-server的配置
  devServer: {
    // 配置浏览器资源请求路径，若匹配，从webpack打包结果寻行自源，否则返回硬盘的资源文件
    publicPath: '/dist',
  }
}