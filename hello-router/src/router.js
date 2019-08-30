import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: Foo },
    { path: '/main', name: 'Main', component: Foo },
    { path: '/header',  name: 'Header', component: Bar},
  ]
})