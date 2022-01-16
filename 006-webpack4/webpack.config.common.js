const path = require('path')
const htmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HappyPack = require('happypack')
const DashboardPlugin = require("webpack-dashboard/plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const SizePlugin = require('size-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const outputPath = path.join(__dirname, 'dist')
const publicPath = '/'

console.log(process.env.NODE_ENV)

module.exports = smp.wrap({
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
  //   pageA: './multi-page-react/pageA.js',
  //   pageB: './multi-page-react/pageB.js', 
  //   PageC: './multi-page-react/pageC.js',
  //   /* 提取公共模块 (optimization.splitChunks) */
  //   vendor: ['react', 'react-dom']
  // },
  /* entry end */
  entry: {
    app: './app.ts',
    page: './multi-page-react/index.ts',
    pageA: './multi-page-react/pageA.tsx', 
    pageB: './multi-page-react/pageB.tsx', 
    PageC: './multi-page-react/pageC.tsx',
  },
  output: {
    path: outputPath,
    filename: 'script/[name]@[hash].js',
    chunkFilename: 'script/[name]@[hash].async.js',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     // options: {
        //     //   publicPath: '../'
        //     // }
        //   },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       sourceMap: true,
        //       modules: true,
        //       localIdentName: '[name]__[local]__[hash:base64:5]',
        //     },
        //   },
        //   'postcss-loader'
        // ],
        // exclude: /node_modules/,
        // include: /src/,
        // resource: {
        //   test: /\.css$/,
        //   exclude: /node_moduels/,
        // },
        // issuer: {
        //   test: /\.js$/,
        //   include: /src/,
        // },
        // enforce: 'pre' / 'post'
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: 'css-loader',
        // })
      },
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   exclude: /node_modules/,
      //   include: /src/,
      //   use: ["source-map-loader"],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     cacheDirectory: true,
          //   }
          // },
          // {
          //   loader: 'force-strict-loader-name',
          //   options: {
          //     sourceMap: true
          //   }
          // },
          {
            loader: 'happypack/loader?id=js'
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            // 自动将所有.vue文件转化为.vue.tsx文件
            appendTsSuffixTo: [/\.vue$/]
          },
        },
        exclude: /node_modules/,
        include: /src/,
        // TODO bug
        // use: 'happypack/loader?id=ts'
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
              limit: 1024,
              name: '[name]_[hash].[ext]',
              outputPath: 'img',
              // request url path
              publicPath: '/img'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '../'
            // }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '../'
            // }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js', 'json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  // devtool: 'cheap-module-source-map', // recommend dev
  // devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    // url path
    publicPath: '/',
    // static path
    contentBase: path.join(__dirname, "public"),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        // exclude: '/node_modules/'
      }),
      new UglifyJsPlugin({

      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        cssPrint: true
      })
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new htmlPlugin({
      chunks: 'all',
      title: path.basename(__dirname),
      template: './template.html'
    }),
    // new htmlPlugin({
    //   excludeChunks: ['app'],
    //   title: path.basename(__dirname),
    //   template: './app.html',
    //   filename: 'app.html'
    // }),
    // new htmlPlugin({
    //   chunks: ['page'],
    //   title: path.basename(__dirname),
    //   template: './page.html',
    //   filename: 'page.html'
    // }),
    // new htmlPlugin({
    //   chunks: ['pageA'],
    //   title: path.basename(__dirname),
    //   template: './page.html',
    //   filename: 'pageA.html'
    // }),
    // new htmlPlugin({
    //   chunks: ['pageB'],
    //   title: path.basename(__dirname),
    //   template: './page.html',
    //   filename: 'pageB.html'
    // }),
    // new htmlPlugin({
    //   chunks: ['pageC'],
    //   title: path.basename(__dirname),
    //   template: './page.html',
    //   filename: 'pageC.html'
    // }),
    new MiniCssExtractPlugin({
      filename: 'style/[name]@[hash].css',
      chunkFilename: 'style/[id]@[hash].css',
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: true,
      ENV_ID: 130912098,
      CONSTANTS: {
        TYPES: JSON.stringify(['foo', 'bar']),
      },
    }),
    // Note: This command was run via npm module 'win-node-env'
    // new Analyzer({
    //   openAnalyzer: false
    // }),
    new HappyPack({
      id: 'js',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
        {
          loader: 'force-strict-loader-name',
          options: {
            sourceMap: true
          }
        },
      ],
    }),
    // new HappyPack({
    //   id: 'ts',
    //   loaders: [
    //     {
    //       loader: 'ts-loader',
    //       options: { }
    //     }
    //   ]
    // }),
    // webpack.vendor.config.js
    // new webpack.DllReferencePlugin({
    //   manifest: require(path.join(__dirname, 'dll/manifest.json')),
    // }),
    // webpack.dll.config.js
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // }),
    // new webpack.HashedModuleIdsPlugin()
    new DashboardPlugin(),
    new SizePlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})