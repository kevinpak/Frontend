const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const rootPath = path.resolve(__dirname)
const devPath = path.resolve(__dirname, 'App/resources')
const prodPath = path.resolve(__dirname, 'App/dist')
const ASSET_PATH = process.env.ASSET_PATH || (isDev)? '/':'./'

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');



const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll:true,
        //sourceMap: true
      }
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 , sourceMap: true},
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }
  ]
  if(extra){
    loaders.push(extra)
  }

  return loaders
}
const filesLoaders = (selectFolder) => {
  const options = [
    {
      loader:'file-loader',
      options: {
        //name: '[path][name].[ext]',
        name: '[folder]/[name].[ext]',
        outputPath: 'assets/'+selectFolder,
        //publicPath: 'images',
        emitFile: true,
        sModule: false,
      }
    }
  ]

  return options
}
const optimization = () =>{
  const config = {
    splitChunks:{
      chunks: 'all'
    }
  }
  if(isProd){
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}
const babelOptions = preset =>{
  const opts = {
    presets:[
      '@babel/preset-env'
    ],
    plugins:[
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-react-jsx'
    ]
  }
  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}
const jsLoaders = () => {
  const loaders = [{
    loader: "babel-loader",
    options: babelOptions()
  }]
  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}
const plugins = () => {
  const allPlugins = [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    /*new CopyWebpackPlugin({
      patterns: [
        {
          from: rootPath+('/spw'),
          to: devPath+('/images')
        }
      ]
    }),*/
    new BrowserSyncPlugin(),
    new StylelintPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ]
  if (isProd) {
    //allPlugins.push(new BundleAnalyzerPlugin())
  }

  return allPlugins
}

module.exports = {
  context: devPath,
  mode: 'development',
  devServer: {
    port: 4200,
    hot: isDev
  },
  //devtool: isProd ? 'source-map':'',
  resolve:{
    extensions:['.js','.json','.scss','.png','.jpg','.svg'],
    alias:{
      '@images': devPath+'/images',
      '@js': devPath+'/js',
      '@components': devPath+'/js/components',
      '@scss': devPath+'/scss',
      '@': devPath+'/images'
    }
  },
  entry: ['@babel/polyfill', './js/index.js'],
  output: {
    filename: '[name].bundle.js',
    path: prodPath,
    publicPath: ASSET_PATH,
  },
  plugins: plugins(),
  module:{
    rules:[
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: filesLoaders('images')
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: filesLoaders('fonts')
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: [{
          loader: 'csv-loader',
        }]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions('@babel/preset-react')
          },
          'astroturf/loader'
      ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions('@babel/preset-typescript')
        }
      },
      
    ]
  },
  optimization: optimization()

}