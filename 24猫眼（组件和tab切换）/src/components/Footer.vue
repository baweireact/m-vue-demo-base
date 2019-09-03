<template>
  <div class="m-footer">
    <span :class="{active: currentIndex === 0 ? true : false}" class="m-footer-nav-item" @click="handleNav(0)">电影</span>
    <span :class="{active: currentIndex === 1 ? true : false}" class="m-footer-nav-item" @click="handleNav(1)">影院</span>
    <span :class="{active: currentIndex === 2 ? true : false}" class="m-footer-nav-item" @click="handleNav(2)">我的</span>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: Number,
    onNavClick: Function,
  },
  methods: {
    handleNav(index) {
      this.$emit('onNavClick', index)
    }
  }
}
</script>

<style>

</style>