import Vue from 'vue'
import Vuex from 'vuex'
import task from './task/task'
import game from './game/game'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    task,
    game,
  }
})
