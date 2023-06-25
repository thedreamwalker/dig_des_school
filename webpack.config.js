/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');

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
            test: /\.vue$/,
            loader: 'vue-loader'
        },
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
            test: /\.(png|jpe?g|gif|webp|ico)$/i,
            type: 'asset/resource',
            generator: {
              filename: "assets/img/[name][ext]",
            },
          },
            {
              test: /\.svg$/,
              loader: 'svg-sprite-loader',
          }, 
          {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
              filename: "assets/fonts/[name][ext]",
            },
          },                            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Task Manager', template: './src/index.html' }),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: './dist',
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
};
