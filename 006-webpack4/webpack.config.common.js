const path = require('path')
const htmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HappyPack =  require('happypack')
const DashboardPlugin = require("webpack-dashboard/plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const SizePlugin = require('size-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
 
const smp = new SpeedMeasurePlugin();
const outputPath = path.join(__dirname, 'dist')
const publicPath = './'

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
  //   pageA: './multi-page/pageA.js',
  //   pageB: './multi-page/pageB.js', 
  //   PageC: './multi-page/pageC.js',
  //   /* 提取公共模块 (optimization.splitChunks) */
  //   vendor: ['react', 'react-dom']
  // },
  /* entry end */
  entry: {
    app: './app.ts',
    // lib: ["react", "react-dom", "react-router","vue"]
  },
  output: {
    path: outputPath,
    filename: '[name]@[chunkhash].js',
    chunkFilename: '[name]@[chunkhash].async.js',
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
            loader: 'happypack/loader?id=js'
          },
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
        use: 'ts-loader',
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
              name: 'img/[name].[ext]',
              publicPath: './'
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
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js']
  // },
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  // devtool: 'cheap-module-source-map', // recommend dev
  // devtool: 'eval-source-map',
  devServer: {
    publicPath: '/dist/',
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
    new htmlPlugin({
      title: path.basename(__dirname),
      template: './template.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
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
            presets: [[
              '@babel/preset-env',
              {
                modules: false
              }
            ]]
          }
        }
      ]
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
    // new webpack.DllReferencePlugin({
    //   manifest: require(path.join(__dirname, 'dll/manifest.json')),
    // }),
    // new webpack.HashedModuleIdsPlugin()
    new DashboardPlugin(),
    new SizePlugin(),
    new CleanWebpackPlugin()
  ]
})