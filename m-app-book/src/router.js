import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyBook from './views/MyBook'
import Detail from './views/Detail'
import Login from './views/Login'
import Index from './views/Index'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login},
    { 
      path: '/index', 
      component: Index,
      children: [
        { path: '/index/home', component: Home},
        { path: '/index/my_book', component: MyBook},
        { path: '/index/home/detail/:id', component: Detail}
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/index/my_book') {
    if (localStorage.getItem('username')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
  next()
})

export default router
