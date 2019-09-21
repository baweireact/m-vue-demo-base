<template>
  <div>
    <div id="nav">
      <router-link to="/index/home">首页</router-link>
      <router-link to="/index/about">我的书架</router-link>
      <button @click="quit">退出</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    quit() {
      localStorage.setItem('username', '')
    }
  }
}
</script>

<style>

</style>