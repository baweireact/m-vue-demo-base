const bodyParser = require('body-parser')
const { list } = require('./data.js')

module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      before(app) {
        app.use(bodyParser.json())
  
        app.get('/api/list', (req, res) => {
          res.send({
            code: 200,
            data: list,
            message: '列表'
          })
        })
  
        app.post('/api/login', (req, res) => {
          let { username, password } = req.body
          if (username === 'admin' && password === '123456') {
            res.send({
              code: 200,
              data: {
                username
              },
              message: '登录成功'
            })
          } else {
            res.send({
              code: 400,
              data: {
                username
              },
              message: '登录失败'
            })
          }
        })
      }
    }
  }
}
