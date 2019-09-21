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
      this.$router.push('/index/home')
      localStorage.setItem('username', 'admin')
    }
  }
}
</script>

<style>

</style>