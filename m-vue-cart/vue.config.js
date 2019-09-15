const { footList } = require('./data.js')
const bodyParser = require('body-parser')

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.use(bodyParser.json())
      app.get('/api/food_list', (req, res) => {
        res.send({
          code: 200,
          data: footList,
          message: '列表'
        })
      })
    }
  }
}