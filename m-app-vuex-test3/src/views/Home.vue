<template>
  <div class="home">
    <div>{{count}}</div>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.task.count;
    }
  },
  methods: {
    handleAdd() {
      this.$store.commit("task/increment");
    }
  }
};
</script>
