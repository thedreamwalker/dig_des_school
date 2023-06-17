/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },                                        
    module: {
        rules: [ 
          { 
            test: /\.(html)$/, 
            use: ['html-loader'] 
          },
          {
            test: /\.(c|sa|sc)ss$/i,
            use: [
              MiniCssExtractPlugin.loader, 
              'css-loader',
              'sass-loader'
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },                            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Task Manager', template: './src/index.html' }),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        static: './dist',
    },
};
