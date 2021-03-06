import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
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
      }
    }
  ]
})
