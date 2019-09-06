const htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'production',  //development production
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main-[hash].js'
  },
  devServer: {
    contentBase: [__dirname + '/dist', __dirname + '/public'],
    port: 8080,
    inline: true,
    open: true,
    hot: true,
    before(app) {
      app.get('/api/getCarouselList', (req, res) => {
        res.send({
          code: 200,
          data: [{
            id: '0',
            image: '/banner01.jpg'
          }, {
            id: '1',
            image: 'http://localhost:8080/banner02.jpg'
          }, {
            id: '2',
            image: 'https://b3-q.mafengwo.net/s14/M00/25/84/wKgE2l1s1MKAUWQJAArsD4Zz1WA499.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
          }],
          message: 'banner'
        })
      })
    }
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: '[path][name]-[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ]
}