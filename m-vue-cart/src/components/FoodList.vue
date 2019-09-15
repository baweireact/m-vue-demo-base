<template>
  <div class="m-food-list">
    <div v-for="item in currentFoodList" :key="item.spuId" class="m-food-list-item">
      <img :src="item.bigImageUrl" class="m-food-list-img">
      <div class="m-food-list-info"> 
        <div class="m-name">{{item.spuName}}</div>
        <div class="m-price">¥{{item.originPrice}}</div>
        <div>
          <el-button>加入购物车</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentFoodList() {
      return this.$store.state.currentFoodList
    }
  },
}
</script>

<style>

</style>