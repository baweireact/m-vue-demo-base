// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/utils/interceptors.js'
import store from '@/store/store.js'
import VueI18n from 'vue-i18n'
import zhCN from '@/i18n/zh-CN.js'
import enUS from '@/i18n/en-US.js'
import zhTW from '@/i18n/zh-TW.js'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueI18n)


const messages = {
  'en-US': {...enUS},
  'zh-CN': {...zhCN},
  'zh-TW': {...zhTW}
}

let currentLocale = localStorage.getItem('language_type') || 'zh-CN'

const i18n = new VueI18n({
  locale: currentLocale, // 设置地区
  messages, // 设置地区信息
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
