import Vue from 'vue'
import Index from '@/pages/Index'
import './reset.css'
import './index.css'
import './static/font/iconfont.css'

new Vue({
  render: h => h(Index)
}).$mount('#app')