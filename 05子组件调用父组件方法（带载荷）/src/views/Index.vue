<template>
  <div>
    <Header :count="count" @onSub="handleSub" @onAdd="handleAdd"></Header>
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
    handleSub(step) {
      this.count = this.count - step
    },
    handleAdd(step) {
      this.count = this.count + step
    }
  }
}
</script>

