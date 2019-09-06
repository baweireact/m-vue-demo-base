<template>
  <div>
    <span 
      v-for="(item, index) in bookNav" 
      :key="item.id"
      class="m-nav-item"
      :class="{active: currentIndex === index}"
      @click="handleNav(index, item.id)">
      {{item.title}}
    </span>
  </div>
</template>

<script>
export default {
  props: ['bookNav', 'currentIndex', 'onNav'],
  methods: {
    handleNav(index, id) {
      this.$emit('onNav', index, id)
    }
  }
}
</script>

<style>

</style>