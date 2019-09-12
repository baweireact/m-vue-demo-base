<template>
  <div>
    <div class="m-nav-wrap" id="nav">
      <router-link to="/index/home" class="m-nav-item">首页</router-link>
      <router-link to="/index/mybook" class="m-nav-item">我的书架</router-link>
      <div class="m-user-state-wrap">
        <span v-if="username">
          <span>用户名：</span>
          <span>{{username}}</span>
          <el-button @click="handleQuit" class="m-user-state-quit-btn">退出</el-button>
        </span>
        <el-button v-else @click="handleLogin">登录</el-button>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    handleQuit(){
      this.username = ''
      localStorage.setItem('username', '')
    },
    handleLogin() {
      this.$router.push('/login')
    }
  },
  mounted() {
    let username = localStorage.getItem('username')
    this.username = username
  }
};
</script>

<style>
</style>