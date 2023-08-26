const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssEXtractPlugin = require('mini-css-extract-plugin')
// const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   '@templates': path.resolve(__dirname, 'src/templates'),
    //   '@styles': path.resolve(__dirname, 'src/styles'),
    //   '@images': path.resolve(__dirname, 'src/assets/images'),
    //   '@utils': path.resolve(__dirname, 'src/utils')
    // }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpge)/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssEXtractPlugin({
      filename: 'assets/[name].css'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src', 'assets/images'),
    //       to: 'assets/images'
    //     }
    //   ]
    // }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005
  }
}
