import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  //history hash
  base: '/',
  routes: [
    {
      path: '/',   //匹配路由路径
      redirect: '/home'   //重定向
    },
    {
      path: '/home',
      component: Home   //组件
    }, {
      path: '/detail/:id',  //动态路由
      name: 'detail',
      component: Detail
    }
  ]
})
