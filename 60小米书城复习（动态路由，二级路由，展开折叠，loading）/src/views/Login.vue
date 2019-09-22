<template>
  <div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      console.log(1)
      localStorage.setItem('username', 'admin')
      this.$router.push('/index/home')
    }
  }
}
</script>

<style>

</style>