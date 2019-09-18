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
    myCart: []
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
    addToMyCart({ commit, state }, payload) {
      axios({
        url: '/api/add_to_my_cart',
        data: {
          currentItem: payload.currentItem,
          categoryName: state.foodList[state.currentIndex].categoryName
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          payload.callback && payload.callback()
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
    updateMyCart({ commit }, payload) {
      axios({
        url: '/api/update_my_cart',
        data: {
          myNewCart: payload.myNewCart
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'myCart', value: res.data.data })
        }
      })
    }
  }
})
