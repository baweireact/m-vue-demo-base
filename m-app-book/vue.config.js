const { bookNavData, bookMallData } = require('./data.js')

module.exports = {
  devServer: {
    open: true,
    before(app) {
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
        res.send({
          code: 200,
          data: data,
          message: '列表'
        })
      })
    }
  }
}