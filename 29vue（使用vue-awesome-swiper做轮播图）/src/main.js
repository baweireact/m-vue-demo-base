import Vue from 'vue'
import VueAweSomeSwiper from "vue-awesome-swiper"
import App from './App.vue'
import 'swiper/dist/css/swiper.css'
import './index.css'

Vue.config.productionTip = false

//Vue.use(VueAweSomeSwiper)

new Vue({
  render: h => h(App),
}).$mount('#app')
