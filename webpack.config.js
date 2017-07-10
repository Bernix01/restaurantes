const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./scripts",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: '[name].[hash].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules",
        options: {
          presets: [
            "es2015", "react"
          ],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']

        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: 'css-loader?url=false'
        })
      }, {
        // ASSET LOADER Reference: https://github.com/webpack/file-loader Copy png, jpg,
        // jpeg, gif, svg, woff, woff2, ttf, eot files to output Rename the file using
        // the asset hash Pass along the updated reference to your code You can add here
        // any file extension you want to get copied to your output
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    // options for resolving module requests (does not apply to resolving to
    // loaders)
    modules: [
      "node_modules", path.resolve(__dirname, "src")
    ],
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".css", ".scss"]
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function (assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devServer: {
    proxy: { // proxy URLs to backend development server
      //'/api': 'http://localhost:3000'
    },
    open: true,
    contentBase: path.join(__dirname, 'docs'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
    // build optimization plugins
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"deveopment"'
  }),
    new webpack
      .optimize
      .CommonsChunkPlugin({name: 'vendor', filename: 'vendor-[hash].min.js'}),
    new webpack
      .optimize
      .UglifyJsPlugin({
        compress: {
          warnings: true,
          drop_console: true
        }
      }),
    new ExtractTextPlugin({filename: 'app-[hash].min.css', allChunks: true}),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // compile time plugins
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({template: 'index.html', inject: 'body'}),
    // webpack-dev-server enhancement plugins
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // list of additional plugins

  watch: true, // boolean
  // enables watching
}
