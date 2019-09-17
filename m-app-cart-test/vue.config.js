const { foodList } = require('./data.js')

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.get('/api/food_list', (req, res) => {
        res.send({
          code: 200,
          data: foodList,
          message: '列表'
        })
      })
    }
  }
}