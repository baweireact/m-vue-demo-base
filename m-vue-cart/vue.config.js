const { footList } = require('./data.js')
const bodyParser = require('body-parser')

let myCart = []

//加入购物主体代码
const addToMyCart = (categoryName, currentItem) => {
  let categoryIndex = myCart.findIndex(item => item.categoryName === categoryName)

  //该分类是否在购物车
  if (categoryIndex >= 0) {
    //该分类在购物车
    let listIndex = myCart[categoryIndex].list.findIndex(item => item.spuId === currentItem.spuId)

    //该商品是否在购物车
    if (listIndex >= 0) {
      //若该商品已在购物车，则把数量加以上即可
      myCart[categoryIndex].list[listIndex].checked = true
      myCart[categoryIndex].list[listIndex].count = myCart[categoryIndex].list[listIndex].count + currentItem.count
    } else {
      //若该商品并不在购物车，则把昌平添加到购物车
      currentItem.checked = true
      myCart[categoryIndex].list.push(currentItem)
    }

    //列表选中的个数
    let listCheckedCount = myCart[categoryIndex].list.filter(item => item.checked).length

    //设置组是否选中
    myCart[categoryIndex].checked = listCheckedCount === myCart[categoryIndex].list.length
  } else {
    //该分类不在购物车
    currentItem.checked = true
    let temp = {
      checked: true,
      categoryName: categoryName,
      list: [currentItem]
    }
    myCart.push(temp)
  }
}

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    before(app) {
      app.use(bodyParser.json())

      //获取商品列表
      app.get('/api/food_list', (req, res) => {
        res.send({
          code: 200,
          data: footList,
          message: '列表'
        })
      })

      //加入购物车
      app.post('/api/add_to_my_cart', (req, res) => {
        let { currentItem, categoryName } = req.body
        addToMyCart(categoryName, currentItem)
        res.send({
          code: 200,
          message: '添加成功'
        })
      })

      //获取购物车
      app.get('/api/get_my_cart', (req, res) => {
        res.send({
          code: 200,
          data: myCart,
          message: '我的购物车'
        })
      })

      //更新购物车
      app.post('/api/update_my_cart', (req, res) => {
        let { myNewCart } = req.body
        myCart = myNewCart
        res.send({
          code: 200,
          data: myCart,
          message: '更新成功'
        })
      })
    }
  }
}