<template>
  <div>
    <div>{{message}}</div>
    <div style="font-size:36px;">{{count}}</div>
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
      message: 'hello vue12!',
      count: 0
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

<style>
.m-count{color: #f66f0c;}
</style>