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
      this.$store.commit({ type: 'onSetState', key: 'currentIndex', value: index })
      this.$store.commit({ type: 'onSetState', key: 'currentFoodList', value: this.foodList[this.currentIndex].spuList })
    }
  }
};
</script>

<style>
</style>