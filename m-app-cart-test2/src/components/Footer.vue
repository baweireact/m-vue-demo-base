<template>
  <div class="m-footer">
    <router-link to="/home" class="m-footer-nav-item"><Icon type="home" class="m-footer-icon"></Icon>首页</router-link>
    <router-link to="/cart" class="m-footer-nav-item"><Icon type="gouwuche" class="m-footer-icon"></Icon>购物车</router-link>
    <router-link to="/me" class="m-footer-nav-item"><Icon type="wode3" class="m-footer-icon"></Icon>我的</router-link>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  components: {
    Icon
  }
}
</script>

<style>

</style>