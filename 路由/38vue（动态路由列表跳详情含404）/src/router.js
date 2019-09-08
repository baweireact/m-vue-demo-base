import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home,
    }, {
      path: '/detail/:id',
      component: () => import('./views/Detail')
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
