import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Cart from './views/Cart'
import Me from './views/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home },
    { path: '/cart', component: Cart },
    { path: '/me', component: Me },
  ]
})
