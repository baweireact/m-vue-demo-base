const VueLoaderPlugin = require('vue-loader/lib/plugin.js') 
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main-[hash].js'
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    contentBase: __dirname + '/dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: __dirname + '/dist/index.html'
    })
  ]
}