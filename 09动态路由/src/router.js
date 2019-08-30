import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Detail from './views/Detail'

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})
