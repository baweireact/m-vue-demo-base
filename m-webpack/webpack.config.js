const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',  //production
  entry: './src/index.js',
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    inline: true
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      // minify: {
      //   //去除引号
      //   removeAttributeQuotes: true,
      //   //去除注释
      //   removeComments: true,
      //   //去除空属性
      //   removeEmptyAttributes: true,
      //   //去除空格
      //   collapseWhitespace: true
      // }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader'
        }]
      }, {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: "./src/[name].[ext]"
          }
        }]
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        //正则匹配
        test:/\.js$/,
        //排除不转换的目录
        exclude: /node_modules/,
        use:{
            //引用loader
            loader: 'babel-loader',
            options:{
                presets:["env"]
            }
        }
    },
    ]
  }
};
