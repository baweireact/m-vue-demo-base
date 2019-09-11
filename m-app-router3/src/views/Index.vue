<template>
  <div>
    <div id="nav">
      <router-link to="/index/home" class="m-nav-item">首页</router-link>
      <router-link to="/index/mybook" class="m-nav-item">我的书架</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>