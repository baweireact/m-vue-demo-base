<template>
  <div class="m-sidebar">
    <div
      v-for="(item, index) in foodList"
      :key="index"
      class="m-sidebar-nav-item"
      :class="{active: currentIndex === index}"
      @click="handleNav(index)"
    >{{item.categoryName}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    foodList() {
      return this.$store.state.foodList;
    },
    currentIndex() {
      return this.$store.state.currentIndex;
    }
  },
  methods: {
    handleNav(index) {
      this.$store.commit({
        type: "onSetState",
        key: "currentIndex",
        value: index
      });
      let foodList = this.$store.state.foodList;
      this.$store.commit({ type: 'onSetState', key: 'currentList', value: foodList[index].spuList })
    }
  }
};
</script>

<style>
</style>