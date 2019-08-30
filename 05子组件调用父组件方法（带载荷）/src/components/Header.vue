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
  props: {
    count: Number,
    onSub: Function,
    onAdd: Function,
  },
  methods: {
    handleSub() {
      this.$emit('onSub', 2)
    },
    handleAdd() {
      this.$emit('onAdd', 2)
    }
  }
}
</script>