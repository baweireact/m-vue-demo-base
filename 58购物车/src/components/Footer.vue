<template>
  <div class="m-footer">
    <router-link to="/home" class="m-footer-nav-item" @click.native="handleNav('西少爷点餐系统')">
      <Icon type="shouye" class="m-footer-icon"></Icon>
      <div class="m-footer-text">首页</div>
    </router-link>
    <router-link to="/cart" class="m-footer-nav-item" @click.native="handleNav('购物车')">
      <Icon type="gouwuchekong" class="m-footer-icon"></Icon>
      <div class="m-footer-text">
        <span class="m-cart-text">
          <span
            class="m-food-category-count"
            :class="{active: foodCategoryCount > 0}"
          >{{foodCategoryCount}}</span>
          首页
        </span>
      </div>
    </router-link>
    <router-link to="/me" class="m-footer-nav-item" @click.native="handleNav('我的')">
      <Icon type="wode" class="m-footer-icon"></Icon>
      <div class="m-footer-text">我的</div>
    </router-link>
  </div>
</template>

<script>
import Icon from "../components/Icon";

export default {
  computed: {
    foodCategoryCount() {
      return this.$store.state.foodCategoryCount;
    }
  },
  components: {
    Icon
  },
  methods: {
    handleNav(title) {
      this.$store.commit({ type: "onSetState", key: "title", value: title });
    }
  }
};
</script>

<style>
</style>