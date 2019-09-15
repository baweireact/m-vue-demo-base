import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Cart from './views/Cart'
import Me from './views/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/cart',
      component: Cart
    }, {
      path: '/me',
      component: Me
    }
  ]
})
