import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyBook from './views/MyBook'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home},
    { path: '/my_book', component: MyBook}
  ]
})
