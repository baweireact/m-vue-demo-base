<template>
  <div class="home">
    <div>
      <input v-model="username" placeholder="请输入用户名"/>
    </div>
    <div>
      <input v-model="password" type="password" placeholder="请输入密码"/>
    </div>
    <button @click="login">登录</button>
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
          alert(res.data.message)
          this.$router.push('/about/' + this.username)
        } else {
          alert(res.data.message)
        }
      })
    }
  }
}
</script>
