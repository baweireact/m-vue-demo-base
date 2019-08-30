<template>
  <div class="m-login">
    <div class="m-register">{{$t('register.userRegister')}}</div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="input" v-model="username" :placeholder="$t('register.usernamePlaceholder')" />
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="password" :placeholder="$t('register.passwordPlaceholder')" />
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="confirmPassword" :placeholder="$t('register.confirmPasswordPlaceholder')" />
    </div>    
    <div class="m-login-row">
      <input class="m-login-row-input" type="input" v-model="email" :placeholder="$t('register.email')" />
    </div>      
    <div class="m-login-row">
      <button class="m-login-btn" @click="handleRegister()">{{$t('register.register')}}</button>
    </div>
  </div>
</template>

<script>
import Api from "@/api/index.js";
import { jsEncrypt } from '@/utils/index.js';

export default {
  name: "home",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: '',
      email: '',
    };
  },
  methods: {
    handleRegister() {
      let temp = jsEncrypt(this.password)       
      console.log(temp)
      if ( this.username.trim() === '') {
        alert('用户名不能为空')
      } else if (this.password != this.confirmPassword) {
        alert('两次输入的密码不一样')
      }
      let data = {
        username: this.username,
        password: jsEncrypt(this.password),
        email: this.email
      };
      Api.register(data).then(res => {
        if (res.code === 200) {
          console.log("注册成功");
          this.$router.push('/login')
        }
      });
    }
  }
};
</script>

<style scoped>
.m-login {
  margin: 0 20px;
  padding: 0;
}
.m-login-row {
  margin: 20px 0;
  height: 40px;
}
.m-login-row-input {
  width: 100%;
  height: 40px;
}
.m-login-btn {
  width: 100%;
  height: 40px;
}
.m-register{font-size: 30px; text-align: center;}
</style>
