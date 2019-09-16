<template>
  <div>
    <button @click="handleSub">减</button>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSub() {
      this.$store.commit({ type: 'onSub', step: 2 })
    },
    handleAdd() {
      this.$store.commit({ type: 'onAdd', step: 2, a: 1 })
      //this.$store.commit( { type: 'navList', navList: [{id: 0, title: '武侠'}]})
    }
  }
};
</script>

<style>
</style>