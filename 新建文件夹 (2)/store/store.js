import Vue from 'vue'
import Vuex from 'vuex'
import list from './list/list.js'
import user from './user/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        list: list,
        user,
    }
})
window.store = store;
export default store