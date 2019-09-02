const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin.js")

module.exports = {
  mode: "development", //production,
  devtool: "source-map",
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "main-[hash].js"
  },
  devServer: {
    contentBase: __dirname + "/dist",
    inline: true,
    hot: true,
    open: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': __dirname + '/src'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: "css-loader"
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000,
              name: '[path][name]-[hash].[ext]'
            }
          }
        ]
      }, {
        test: /\.vue$/,
        use: [{
          loader: "vue-loader"
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin()
  ]
}