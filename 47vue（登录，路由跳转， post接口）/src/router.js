import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/about/:username',component: About}
  ]
})
