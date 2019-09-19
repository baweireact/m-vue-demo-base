import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodList: [],
    currentIndex: 0,
    currentList: [],
    myCart: [],
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getFoodList({ commit }) {
      axios({
        url: '/api/food_list'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'foodList', value: res.data.data })
          commit({ type: 'onSetState', key: 'currentList', value: res.data.data[0].spuList })
        }
      })
    },
    addToMyCart({ commit }, payload) {
      axios({
        url: '/api/add_to_my_cart',
        data: {
          categoryName: payload.categoryName,
          currentItem: payload.currentItem
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {

        }
      })
    },
    getMyCart({ commit }) {
      axios({
        url: '/api/my_cart'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'onSetState', key: 'myCart', value: res.data.data })
        }
      })
    },
    updateMyCart({state}) {
      axios({
        url: '/api/update_my_cart',
        data: {
          newMyCart: state.myCart
        },
        method: 'post'
      }).then(res => {
        
      })
    }
  }
})
