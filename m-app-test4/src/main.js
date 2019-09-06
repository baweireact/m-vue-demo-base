import Vue from 'vue'
import VueAweSomeSwiper from "vue-awesome-swiper"
import App from './App.vue'
import 'swiper/dist/css/swiper.css'
import './index.css'

Vue.config.productionTip = false

//Vue.use(VueAweSomeSwiper)

// Vue.component('button-counter', {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   template: '<span>{{count}}</span>'
// })

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
