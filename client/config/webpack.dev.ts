/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:no-implicit-dependencies */

import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as common from './webpack.common';

module.exports = merge(common, {
  devtool: 'eval',

  devServer: {
    hot: true,
    port: process.env.CLIENT_PORT || 8080,
  },

  module: {
    rules: [
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['src/scss'],
            },
          }],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      disable: true,
      filename: 'style.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
