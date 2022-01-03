const path = require('path')
const htmlPlugin = require('html-webpack-plugin');

const outputPath = path.join(__dirname, 'dist')
const publicPath = './'

module.exports = {
  context: path.join(__dirname, './src'),
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
  //   pageA: './multi-page/pageA.js',
  //   pageB: './multi-page/pageB.js', 
  //   PageC: './multi-page/pageC.js',
  //   /* 提取公共模块 (optimization.splitChunks) */
  //   vendor: ['react', 'react-dom']
  // },
  /* entry end */
  entry: {
    app: './app.ts'
  },
  output: {
    path: outputPath,
    filename: '[name]@[chunkhash].js',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // 'css-lodaer',
          {
            loader: 'css-loader',
            options: {

            }
          }
        ],
        exclude: /node_modules/,
        include: /src/,
        // resource: {
        //   test: /\.css$/,
        //   exclude: /node_moduels/,
        // },
        // issuer: {
        //   test: /\.js$/,
        //   include: /src/,
        // },
        // enforce: 'pre' / 'post'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     cacheDirectory: true,
          //     presets: [[
          //       '@babel/preset-env',
          //       {
          //         modules: false
          //       }
          //     ]]
          //   }
          // },
          {
            loader: 'force-strict-loader-name',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'img/[name].[ext]',
      //         publicPath: './'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'img/[name].[ext]',
              publicPath: './'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js']
  // },
  mode: 'development',
  devServer: {
    publicPath: '/dist/',
  },
  plugins: [
    new htmlPlugin({
      title: path.basename(__dirname)
    })
  ]
}