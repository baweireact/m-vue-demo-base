<template>
  <div class="m-footer">
    <router-link to="/home" class="m-footer-nav-item" @click.native="handleNav('西少爷点餐系统')">首页</router-link>
    <router-link to="/cart" class="m-footer-nav-item" @click.native="handleNav('购物车')">购物车</router-link>
    <router-link to="/me" class="m-footer-nav-item" @click.native="handleNav('我的')">我的</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    handleNav(title) {
      this.$store.commit({ type: 'onSetState', key: 'title', value: title })
    }
  }
 }
</script>

<style>

</style>