<template>
  <div class="m-login">
    <div class="m-language-warp">
      <el-select v-model="language" @change="handleChangeLanguage">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>      
    </div>
    <div class="m-login-title">{{$t('login.login')}}</div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="input" v-model="username"  :placeholder="$t('login.usernamePlaceholder')" />
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="password" :placeholder="$t('login.passwordPlaceholder')" />
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input-captcha" type="input" v-model="captcha"  :placeholder="$t('login.captchaPlaceholder')" />
      <div class="m-captcha" v-html="captchaSvg" @click="getCaptcha()"></div> 
    </div>     
    <div class="m-login-row">
      <button class="m-login-btn" @click="handleLogin()">{{$t('login.login')}}</button>
    </div>
    <div>
      <router-link to="/register" class="m-register">{{$t('login.register')}}</router-link>
      <router-link to="/forgot_password" class="m-register">{{$t('login.forgotPassword')}}</router-link>
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
      captcha: '',
      captchaSvg: '',
      language: '中文',
      options: [{
        value: 'zh-CN',
        label: '中文'
      }, {
        value: 'en-US',
        label: 'English'
      }, {
        value: 'zh-TW',
        label: '繁體'
      }]
    };
  },
  methods: {
    handleLogin() {
      let temp = jsEncrypt(this.password)       
      console.log(temp)
      let data = {
        username: this.username,
        password: jsEncrypt(this.password),
        captcha: this.captcha
      };
      Api.login(data).then(res => {
        if (res.code === 200) {
          console.log("登陆成功");
          this.$store.commit('user/setToken', res.data)
          localStorage.setItem('token', res.data.token)
          this.$router.push('/list')
        } else {
          this.getCaptcha()
        }
      }).catch((e) => {
        this.getCaptcha()
      });
    },
    handleChangeLanguage(value) {
      console.log(value)
      localStorage.setItem('language_type', value)
      window.location.reload()
    },
    getCaptcha() {
      Api.captcha().then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.captchaId)
        this.captchaSvg = res.data.captcha
      })
    },
  },
  created() {
    let language = localStorage.getItem('language_type')
    if (language === 'zh-CN') {
      this.language = '中文'
    } else if (language === 'en-US') {
      this.language = 'English'
    } else if (language === 'zh-TW') {
      this.language = '繁體'
    }
    console.log('created')
    this.getCaptcha()
  }
};
</script>

<style scoped>
.m-login {
  margin: 20px 20px;
  padding: 0;
}
.m-language-warp{
  margin: 0 0 20px 0;
  text-align: right;
}
.m-login-title{
  font-size: 30px;
  text-align: center;
  color: #f66f0c;
}
.m-login-row {
  position: relative;
  margin: 20px 0;
  height: 40px;
}
.m-login-row-input {
  width: 100%;
  height: 40px;
}
.m-login-row-input-captcha{
  margin: 0 180px 0 0;
  width: 70%;
  height: 40px;;
}
.m-captcha{position: absolute;top: 0;right: 0;width: 30%;cursor: pointer;}
.m-login-btn {
  width: 100%;
  height: 40px; 
}
.m-register:hover{color: #f66f0c;}
</style>
