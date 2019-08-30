<template>
  <div class="m-login">
    <div class="m-register">{{$t('forgotPasswordd.title')}}</div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="input" v-model="username" :placeholder="$t('register.usernamePlaceholder')" />
    </div>     
    <div class="m-login-row">
      <button class="m-login-btn" @click="handleForgotPassword()">{{$t('forgotPasswordd.title')}}</button>
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
    };
  },
  methods: {
    handleForgotPassword() {
      let temp = jsEncrypt(this.password)       
      console.log(temp)
      if ( this.username.trim() === '') {
        alert('用户名不能为空')
      }
      Api.forgotPassword(`?username=${this.username}`).then((res) => {
        console.log(res)
        if (res.code === 200) {
          alert(res.message)
        }
      })
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
