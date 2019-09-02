import Vue from "vue"
import Index from "@/pages/Index.vue"
import "./index.css"
import "./index.scss"

new Vue({
  render: function (createElement) {
    return createElement(Index)
  }
}).$mount("#app")