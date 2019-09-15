import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '西少爷点餐系统',
    foodList: [],
    currentIndex: 0,
    currentFoodList: []
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
          commit({ type: 'onSetState', key: 'currentFoodList', value: res.data.data[0].spuList })
        }
      })
    }
  }
})
