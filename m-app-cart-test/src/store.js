import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodList: [],
    currentIndex: 0,
    currentList: []
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    },
    onFoodList(state, payload) {
      state.foodList = payload.foodList
    }
  },
  actions: {
    getFoodList({ commit }) {
      axios({
        url: '/api/food_list'
      }).then(res => {
        if (res.data.code === 200) {
          //commit({ type: 'onSetState', key: 'foodList', value: res.data.data })
          commit({ type: 'onFoodList', foodList: res.data.data })
          commit({ type: 'onSetState', key: 'currentList', value: res.data.data[0].spuList })
        }
      })
    }
  }
})
