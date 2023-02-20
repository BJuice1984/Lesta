const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ["index", "aboutNews", "compare", "aboutGame"]

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
        publicPath: ''
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8030,
    open: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    ),
    [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
    ]
  ),
 }
