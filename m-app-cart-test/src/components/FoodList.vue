<template>
  <div class="m-food-list">
    <div v-for="item in currentList" :key="item.spuId">
      {{item.spuName}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentList() {
      return this.$store.state.currentList
    }
  }
}
</script>

<style>

</style>