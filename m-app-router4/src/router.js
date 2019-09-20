import Vue from 'vue'
import Router from 'vue-router'
import Test from './views/Test'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Test}
  ]
})
