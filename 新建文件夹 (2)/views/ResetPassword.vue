<template>
  <div class="m-login">
    <div class="m-register">{{$t('resetPassword.title')}}</div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="password" :placeholder="$t('register.passwordPlaceholder')" />
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="confirmPassword" :placeholder="$t('register.confirmPasswordPlaceholder')" />
    </div>         
    <div class="m-login-row">
      <button class="m-login-btn" @click="handleResetPassword()">{{$t('resetPassword.title')}}</button>
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
      password: "",
      confirmPassword: '',
    };
  },
  methods: {
    handleResetPassword() {
      let temp = jsEncrypt(this.password)       
      console.log(temp)
      if (this.password != this.confirmPassword) {
        alert('两次输入的密码不一样')
      }
      let data = {
        uid: this.$route.params.token,
        password: jsEncrypt(this.password),
      };
      Api.resetPassword(data).then(res => {
        if (res.code === 200) {
          alert(res.message)
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
