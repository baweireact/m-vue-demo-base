import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',  //history hash
  base: '/',
  routes: [
    {
      path: '/',   //匹配路由路径
      //redirect: '/home'   //重定向
      //redirect: { name: 'home' }
      redirect: (to) => {
        console.log(to)
        //return '/home'
        return {
          name: 'home'
        }
      }
    },
    {
      path: '/home',
      name: 'home',
      alias: '/xutongbao',
      components: {
        default: Home,   //组件
        header: Header
      }
    }, {
      path: '/detail/:id',  //动态路由
      name: 'detail',
      components: {
        default: Detail,
        header: Header
      },
      beforeEnter(to, from, next) {
        console.log(to, from)
        next()
      },
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.matched.some(item => item.meta.requiresAuth)) {
    if (false) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
  next()
})

router.afterEach((to, from) => {
  console.log(to, from)
})

export default router
