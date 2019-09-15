<template>
  <div>
    <div id="nav">
      <router-link to="/index/home" class="m-nav-item">首页</router-link>
      <router-link to="/index/my_book" class="m-nav-item">我的书架</router-link>
      <div class="m-login-state">
        <span>
          {{username}}
        </span>
        <el-button @click="handleQuit">退出</el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleQuit() {
      localStorage.setItem('username', '')
      this.username = ''
    }
  },
  mounted() {
    this.username = localStorage.getItem('username')
  }
};
</script>

<style>
</style>