const VueLoaderPlugin = require('vue-loader/lib/plugin.js')

module.exports = {
  mode: 'development', //development, production
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',  //服务器文件目录
    port: 8080,
    open: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader'
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}