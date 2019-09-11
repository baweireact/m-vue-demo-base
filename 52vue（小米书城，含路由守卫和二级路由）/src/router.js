import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Index from './views/Index'
import Home from './views/Home'
import MyBook from './views/MyBook'
import Detail from './views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/index',
      component: Index,
      children: [{
        path: '/index/home',
        component: Home
      }, {
        path: '/index/mybook',
        component: MyBook,
        beforeEnter(to, from, next) {
          let username = localStorage.getItem('username')
          if (username) {
            next()
          } else {
            next('/login')
          }
        }
      }, {
        path: '/index/home/detail/:id',
        component: Detail
      }]
    },
  ]
})
