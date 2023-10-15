const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/js/index.js', 
  
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),

        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/icon'),
              to: path.resolve(__dirname, 'dist/icon')
            },
            {
              from: path.resolve(__dirname, 'src/image'),
              to: path.resolve(__dirname, 'dist/image')
            },
            {
              from: path.resolve(__dirname, 'src/fonts'),
              to: path.resolve(__dirname, 'dist/fonts')
            }
          ]
        })
    ],

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.(svg|gif|jpg|png)$/,
            type: 'asset/inline'
          },
          {
            test: /\.(ttf|woff|woff2|eot)$/,
            type: 'asset/inline'
          }
        ]
      },
}