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
    handleSub() {
      this.count = this.count - 1
    },
    handleAdd() {
      this.count = this.count + 1
    }
  }
}
</script>

