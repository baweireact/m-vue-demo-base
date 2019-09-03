<template>
  <div>
    <div>{{message}}</div>
    <img :src="clothes_45kb">
    <img :src="clothes_80kb">
    <div class="m-clothes-45kb"></div>
    <div class="m-clothes-80kb"></div>
  </div>
</template>

<script>
import clothes_45kb from '../static/images/clothes_45kb.png'
import clothes_80kb from '../static/images/clothes_80kb.png'

export default {
  data() {
    return {
      message: "hello vue!",
      clothes_45kb: clothes_45kb,
      clothes_80kb: clothes_80kb
    }
  }
}
</script>

<style>

</style>