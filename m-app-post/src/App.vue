<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
    axios({
      url: "/api/login",
      data: {
        username: 'admin',
        password: '123456'
      },
      method: "post"
    }).then(res => {
      if (res.data.code === 200) {
        alert(res.data.message);
        this.$router.push("/about/" + this.username);
      } else {
        alert(res.data.message);
      }
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
