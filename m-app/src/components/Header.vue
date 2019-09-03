<template>
  <div class="m-header">
    <span 
      v-for="item in bookNav" 
      :key="item.id" 
      class="m-header-nav-item" 
      :class="{active: currentIndex === item.id ? true : false}"
      @click="handleNav(item.id)">
      {{item.name}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    bookNav: Array,
    currentIndex: String,
    onNav: Function,
  },
  methods: {
    handleNav(id) {
      this.$emit('onNav', id)
    }
  }
}
</script>

<style>

</style>