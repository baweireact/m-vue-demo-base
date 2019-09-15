import Vue from 'vue'
import Vuex from 'vuex'
import task from './task/task'
import game from './game/game'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    task,
    game,
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

export default store
