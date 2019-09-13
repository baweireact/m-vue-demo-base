<template>
  <div class="home">
    {{count}}
    <div>
      <button @click="handleSub">减</button>
      <button @click="handleAdd">加</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    handleAdd() {
      let value = this.count + 1
      this.$store.commit({ type: 'onSetState', key: 'count', value });
    },
    handleSub() {
      let value = this.count - 1
      this.$store.commit({ type: 'onSetState', key: 'count', value })
    }
  }
};
</script>
