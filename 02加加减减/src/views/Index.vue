<template>
  <div>
    <div>{{count}}</div>
    <div>
      <button @click="handleSub">减</button>
      <button @click="handleAdd">加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
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

