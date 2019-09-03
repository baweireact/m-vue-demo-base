const bodyParser = require('body-parser')
const { bookNav, bookList } = require('./data.js')

module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      before(app) {
        app.use(bodyParser.json())
  
        app.get('/api/book_nav', (req, res) => {
          res.send({
            code: 200,
            data: bookNav,
            message: '导航'
          })
        })

        app.get('/api/book_list', (req, res) => {
          let { id } = req.query
          let data = bookList.find(item => item.id === id)
          res.send({
            code: 200,
            data: data,
            message: '列表'
          })
        })
      }
    }
  }
}
