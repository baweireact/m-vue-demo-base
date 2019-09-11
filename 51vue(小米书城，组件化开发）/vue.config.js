const { bookNavData, bookMallData } = require('./data.js')
const bodyParser = require('body-parser')

module.exports = {
  devServer: {
    contentBase: [__dirname + '/img'],
    open: true,
    before(app) {
      app.use(bodyParser.json())
      let myBook = []
      app.get('/api/book_nav', (req, res) => {
        res.send({
          code: 200,
          data: bookNavData,
          message: '导航'
        })
      })
      app.get('/api/book_list', (req, res) => {
        let { id } = req.query
        let data = bookMallData.find(item => item.id == id).list
        data = data.map(item => {
          if (myBook.find(book => book.id === item.id)) {
            item.is_in_my_book = true
            return item
          } else {
            item.is_in_my_book = false
            return item
          }
        })
        res.send({
          code: 200,
          data: data,
          message: '列表'
        })
      })
      app.get('/api/detail', (req, res) => {
        let { id } = req.query
        let data
        for (let i = 0; i < bookMallData.length; i++) {
          for (let j = 0; j < bookMallData[i].list.length; j++) {
            if (bookMallData[i].list[j].id == id) {
              data = bookMallData[i].list[j]
            }
          }
        }
        if (myBook.find(book => book.id === data.id)) {
          data.is_in_my_book = true
        } else {
          data.is_in_my_book = false
        }
        res.send({
          code : 200,
          data: data,
          message: '详情'
        })
      })
      app.post('/api/add_book', (req, res) => {
        let { item } = req.body
        myBook.push(item)
        res.send({
          code: 200,
          message: '添加成功'
        })
      })
    }
  }
}