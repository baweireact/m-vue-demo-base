<template>
  <div class="m-footer">
    <router-link to="/home" class="m-footer-nav-item" @click.native="handleNav('西少爷点餐系统')">
      <Icon type="home" class="m-footer-icon"></Icon>首页
    </router-link>
    <router-link to="/cart" class="m-footer-nav-item" @click.native="handleNav('购物车')">
      <Icon type="gouwuche" class="m-footer-icon"></Icon>购物车<span class="m-my-cart-food-count" v-show="count > 0">{{count}}</span>
    </router-link>
    <router-link to="/me" class="m-footer-nav-item" @click.native="handleNav('我的')">
      <Icon type="wode3" class="m-footer-icon"></Icon>我的
    </router-link>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  components: {
    Icon
  },
  computed: {
    count() {
      return this.$store.state.myCart.length
    }
  },
  methods: {
    handleNav(title) {
      this.$store.commit({ type: 'onSetState', key: 'title', value: title })
    }
  }
};
</script>

<style>
</style>