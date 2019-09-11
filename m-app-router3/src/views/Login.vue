<template>
  <div class="m-login">
    <div class="m-input-row">
      <input v-model="username" placeholder="请输入用户名" ref="username" class="m-input"/>
    </div>
    <div class="m-input-row">
      <input v-model="password" @keyup.enter="login" type="password" class="m-input" placeholder="请输入密码"/>
    </div>
    <div class="m-input-row">
      <button class="m-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      //调后端登录接口
      if (this.username.trim() === '') {
        alert('用户名不能为空！')
        return
      }
      axios({
        url: '/api/login',
        data: {
          username: this.username,
          password: this.password
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          this.$router.push('/index/home')
          localStorage.setItem('username', res.data.data.username)
        } else {
          alert(res.data.message)
        }
      })
    }
  },
  mounted() {
    //document.getElementById('username').focus()
    this.$refs.username.focus()
  }
}
</script>
</script>

<style>

</style>