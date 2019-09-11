<template>
  <div class="home">
    <div>
      <input v-model="username" placeholder="请输入用户名" ref="username" id="username"/>
    </div>
    <div>
      <input v-model="password" @keyup.enter="handleEnter" type="password" placeholder="请输入密码"/>
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
          //alert(res.data.message)
          this.$router.push('/about/' + this.username + '/hebei')
        } else {
          alert(res.data.message)
        }
      })
    },
    handleEnter(e) {
      if (e.keyCode === 13) {
        this.login()
      }
    }
  },
  mounted() {
    //this.$refs.username.focus()
    document.getElementById('username').focus()
  }
}
</script>
