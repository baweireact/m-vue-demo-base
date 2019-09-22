import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import Index from './views/Index'
import Detail from './views/Detail'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/index',
      component: Index,
      children: [{
        path: '/index/home', component: Home
      }, {
        path: '/index/about', 
        component: About,
        meta: {
          needLogin: true,
          about: '我的书架'
        }
      }, {
        path: '/index/home/detail/:id', component: Detail
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if(localStorage.getItem('username')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})


export default router