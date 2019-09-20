const { foodList } = require('./data.js')
const bodyParser = require('body-parser')

let myCart = []

//加入购物车主体代码
const addToMyCart = (categoryName, currentItem) => {
  const categoryIndex = myCart.findIndex(item => item.categoryName === categoryName)

  //有一级类别
  if (categoryIndex >= 0) {
    let listIndex = myCart[categoryIndex].list.findIndex(item => item.spuId === currentItem.spuId)
    if (listIndex >= 0) {
      currentItem.checked = true
      myCart[categoryIndex].list[listIndex].count += currentItem.count
    } else {
      currentItem.checked = true
      myCart[categoryIndex].list.push(currentItem)
    }
  } else {
    //一级类别都没有
    currentItem.checked = true  //二级菜品复选框的勾选状态
    let temp = {
      checked: true,  //一级类别复选框的勾选状态
      categoryName: categoryName,
      list: [currentItem]
    }
    myCart.push(temp)
  }
}

module.exports = {
  lintOnSave:false, //禁用eslint语法验证功能
  devServer: {
    open: true,
    before(app) {
      app.use(bodyParser.json())
      app.get('/api/food_list', (req, res) => {
        res.send({
          code: 200,
          data: foodList,
          message: '列表'
        })
      })
      app.post('/api/add_to_my_cart', (req, res) => {
        let { categoryName, currentItem } = req.body
        addToMyCart(categoryName, currentItem)
        res.send({
          code: 200,
          data: myCart,
          message: '添加成功'
        })
      })

      app.get('/api/my_cart', (req, res) => {
        res.send({
          code: 200,
          data: myCart,
          message: '我的购物车'
        })
      })

      app.post('/api/update_my_cart', (req, res) => {
        let { newMyCart } = req.body
        myCart = newMyCart
        res.send({
          code: 200,
          data: myCart,
          message: '更新成功'
        })
      })
    }
  }
}