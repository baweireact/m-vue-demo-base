<template>
  <div>
    <div>{{message}}</div>
    <div>{{count}}</div>
    <div>
      <button @click="handleSub()">减</button>
      <button @click="handleAdd()">加</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'hello vue!',
      count: 0,
    }
  },
  methods: {
    handleAdd() {
      this.count = this.count + 1
    },
    handleSub() {
      this.count = this.count - 1
    }
  }
}
</script>