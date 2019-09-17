import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    bookNav: [],
  },
  mutations: {
    onAdd(state, payload) {
      state.count = a.count + payload.step
    },
    onSub(state) {
      state.count--
    },
    bookNav(state, payload) {
      state.bookNav = payload.bookNav
    }
  }, 
  actions: {
    getBookNav({commit, state}, payload) {
      axios({
        url: '/api/nav_list'
      }).then(res => {
        if (res.data.code === 200) {
          context.commit({type: 'bookNav', bookNav: res.data.data})
        }
      })
    }
  }
})
