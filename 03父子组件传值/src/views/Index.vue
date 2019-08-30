<template>
  <div>
    <Header :count="count"></Header>
    <div>
      <button @click="handleSub">减</button>
      <button @click="handleAdd">加</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    Header
  },
  methods: {
    handleSub() {
      this.count = this.count - 1
    },
    handleAdd() {
      this.count = this.count + 1
    }
  }
}
</script>

