<template>
  <div>
    <div>
      <input type="text" v-model="username" placeholder="请输入用户名">
    </div>
    <div>
      <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <button @click="handleLogin">
      登录
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if (this.username === 'admin' && this.password === '123456') {
        this.$router.push('/index/home')
      } else {
        alert('用户名或密码错误')
      }
    }
  }
}
</script>