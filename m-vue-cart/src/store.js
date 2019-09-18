import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '西少爷点餐系统',
    foodList: [],
    currentIndex: 0,
    currentFoodList: [],
    myCart: [],
    foodCategoryCount: 0,
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    //获取菜单列表
    getFoodList({ commit }) {
      axios({
        url: '/api/food_list'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'foodList', value: res.data.data })
          commit({ type: 'onSetState', key: 'currentFoodList', value: res.data.data[0].spuList })
        }
      })
    },
    //添加购物车
    addToMyCart({ commit, state, dispatch }, payload) {
      axios({
        url: '/api/add_to_my_cart',
        data: {
          currentItem: payload.currentItem,
          categoryName: state.foodList[state.currentIndex].categoryName
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'myCart', value: res.data.data })

          //回调函数用于关闭对话框
          payload.callback && payload.callback()

          dispatch({ type: 'foodCategoryCount' })
        }
      })
    },
    //获取购物车列表
    getMyCart({ commit }) {
      axios({
        url: '/api/get_my_cart'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'myCart', value: res.data.data })
        }
      })
    },
    //更新购物车列表
    updateMyCart({ commit, dispatch }, payload) {
      axios({
        url: '/api/update_my_cart',
        data: {
          myNewCart: payload.myNewCart
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'myCart', value: res.data.data })
          dispatch({ type: 'foodCategoryCount' })
        }
      })
    },
    //计算购车礼商品类别数
    foodCategoryCount({ commit, state }) {
      //购物车里商品类别数
      let myCart = state.myCart
      let foodCategoryCount = 0
      myCart.forEach(myCartItem => {
        foodCategoryCount += myCartItem.list.length
      });
      commit({ type: 'onSetState', key: 'foodCategoryCount', value: foodCategoryCount })
    }
  }
})
