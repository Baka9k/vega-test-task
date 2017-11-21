const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new GhPagesWebpackPlugin({
      path: './dist',
      options: {
        message: 'Update gh-pages'
      }
    })
  ]
})
