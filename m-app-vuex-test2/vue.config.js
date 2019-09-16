const { bookNavData } = require('./data.js')

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.get('/api/nav_list', (req, res) => {
        res.send({
          code: 200,
          data: bookNavData,
          message: '导航'
        })
      })
    }
  }
}