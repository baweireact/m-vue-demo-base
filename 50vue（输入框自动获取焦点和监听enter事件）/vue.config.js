const bodyParser = require('body-parser')

// const user = [
//   {
//     id: 0,
//     username: 'admin',
//     password: '123456'
//   }, {
//     id: 1,
//     username: 'xu',
//     password: '12345'
//   }
// ]

module.exports = {
  devServer: {
    before(app) {
      app.use(bodyParser.json())
      console.log('11')
      app.post('/api/login', (req, res) => {
        let { username, password } = req.body
        //let tempUser = user.find(item => item.username === username && item.password === password)
        if (username === 'admin' && password === '123456') {
          // if (tempUser.password === password) {
          //   res.send({
          //     code: 200,
          //     data: {
          //       username
          //     },
          //     message: '登录成功'
          //   })
          // } else {
          //   res.send({
          //     code: 400,
          //     message: '密码错误'
          //   })
          // }
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
            message: '登录失败'
          })
        }
      })
    }
  }
}