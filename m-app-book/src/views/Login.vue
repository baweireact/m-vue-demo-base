<template>
  <div>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$router.push('/index/home')
      localStorage.setItem('username', 'admin')
    }
  }
}
</script>

<style>

</style>