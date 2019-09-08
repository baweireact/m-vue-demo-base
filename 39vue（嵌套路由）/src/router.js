import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'
import Index from './views/Index'
import Me from './views/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    }, {
      path: '/home',
      component: Home,
      children: [{
        path: 'index',
        component: Index
      }, {
        path: 'me',
        component: Me
      }]
    }, {
      path: '/detail/:id',
      component: () => import('./views/Detail')
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
