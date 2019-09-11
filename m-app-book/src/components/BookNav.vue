<template>
  <ul class="m-book-nav">
    <li v-for="(item, index) in bookNav" :key="item.id" 
      class="m-book-nav-item" 
      :class="{active: currentIndex === index}"
      @click="handleNav(index, item.id)">
      {{item.title}}
    </li>
  </ul>
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