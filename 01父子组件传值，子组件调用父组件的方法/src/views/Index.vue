<template>
  <div id="app">
    <Header :count2="count" @onAdd="handleAddToChild"/>
    <button @click="handleAdd">父组件的按钮</button>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'index',
  data() {
    return {
      count: 0
    }
  },
  components: {
    Header
  },
  methods: {
    handleAdd() {
      this.count = this.count + 1
    },
    handleAddToChild(step) {
      this.count = this.count + step
    }
  }
}
</script>

<style>
</style>
