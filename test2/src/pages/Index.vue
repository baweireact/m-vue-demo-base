<template>
  <div>
    <div>{{message}}</div>
    <img :src="clothes_45kb">
  </div>
</template>

<script>
import clothes_45kb from "../static/images/clothes_45kb.png"

export default {
  data() {
    return {
      message: "hello vue!",
      clothes_45kb: clothes_45kb
    }
  }
}
</script>

<style>

</style>