import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import HeBei from './views/HeBei'
import ShanXi from './views/ShanXi'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {
      path: '/about',
      component: About,
      children: [{
        path: 'hebei',
        component: HeBei
      }, {
        path: 'shanxi',
        component: ShanXi
      }]
    }
  ]
})
