import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import HeBei from './views/HeBei'
import ShanXi from './views/ShanXi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',component: Home},
    {
      path: '/about/:username',
      component: About,
      children: [{
        path: 'hebei',
        component: HeBei
      }, {
        path: 'shanxi',
        component: ShanXi
      }]
    }
  ],
  //在火狐浏览器下有效，在chrome浏览器下都是保持之前滚动的位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {   //保持之前滚动的位置
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
    //return { x: 0, y: 0 }   //滚动到顶
  }
})
