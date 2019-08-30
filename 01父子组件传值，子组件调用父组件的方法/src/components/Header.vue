<template>
  <div>
    <div>子组件的count：{{count}}</div>
    <div>父组件的count：{{count2}}</div>
    <button @click="handleSub">减</button>
    <button @click="handleAdd">加</button>
    <button @click="handleAddFather">调父组件的方法</button>
  </div>
</template>

<script>
export default {
  props: {
    count2: Number,
    onAdd: Function,
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleSub() {
      this.count = this.count - 1
    },
    handleAdd() {
      this.count = this.count + 1
    },
    handleAddFather() {
      this.$emit('onAdd', 2)
    }
  }
};
</script>