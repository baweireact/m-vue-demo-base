<template>
  <ul class="m-book-nav">
    <li
      v-for="(item, index) in bookNav"
      :key="item.id"
      class="m-book-nav-item"
      :class="{active: currentIndex === index}"
      @click="handleNav(index, item.id)"
    >{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    bookNav() {
      return this.$store.state.task.bookNav;
    },
    currentIndex() {
      return this.$store.state.task.currentIndex;
    }
  },
  methods: {
    handleNav(index, id) {
      this.$store.dispatch({ type: 'task/getBookList', index, id })
    }
  },
  mounted() {
    this.$store.dispatch({ type: 'task/getBookNav' });
  }
};
</script>

<style>
</style>