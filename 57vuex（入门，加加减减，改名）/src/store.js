import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    gameName: '绝地求生'
  },
  mutations: {
    onSetState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    onSub({ commit }, payload) {
      setTimeout(() => {
        console.log('减')
        commit( { type: 'onSetState', key: payload.key, value: payload.value })
      }, 1000)
    }
  }
})
