const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "development", //production
  devtool: "none",
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main-[hash].js'
  },
  devServer: {
    contentBase: __dirname + "/dist",
    port: 8080,
    inline: true,
    hot: true,
    open: true
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new CleanWebpackPlugin(),
  ]
}