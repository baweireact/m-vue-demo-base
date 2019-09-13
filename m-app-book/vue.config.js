const { bookNavData, bookMallData } = require('./data.js')
const bodyParser = require('body-parser')

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.use(bodyParser.json())
      let myBook = []

      //导航的数据
      app.get('/api/book_nav', (req, res) => {
        res.send({
          code: 200,
          data: bookNavData,
          message: '导航'
        })
      })

      //列表数据
      app.get('/api/book_list', (req, res) => {
        let { id } = req.query
        let data = bookMallData.find(item => item.id == id).list
        data = data.map(item => {
          if (myBook.find(book => book.id === item.id)) {
            item.is_in_my_book = true   //在我的书架
          } else {
            item.is_in_my_book = false  //不在我的书架
          }
          return item
        })
        res.send({
          code: 200,
          data: data,
          message: '列表'
        })
      })

      //详情页的数据
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
        res.send({
          code: 200,
          data: data,
          message: '详情'
        })
      })

      //添加到我的书架
      app.post('/api/add_book', (req, res) => {
        let { item } = req.body
        myBook.push(item)
        res.send({
          code: 200,
          message: '添加成功'
        })
      })

      //获取我的书架
      app.get('/api/get_my_book', (req, res) => {
        res.send({
          code:200,
          data: myBook,
          message: '我的书架'
        })
      })

      //删除，可以删除一个或多个
      app.post('/api/delete', (req, res) => {
        let { ids } = req.body
        myBook = myBook.filter(item => !ids.find(id => id === item.id))
        res.send({
          code: 200,
          message: '删除成功'
        })
      })

    }
  }
}