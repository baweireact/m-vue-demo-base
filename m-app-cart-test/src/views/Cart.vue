<template>
  <div class="m-main">
    <div v-for="(item, index) in myCart" :key="index">
      <el-checkbox v-model="item.checked" @change="handleCategory">{{item.categoryName}}</el-checkbox>
      <div class="m-cart-food">
        <div v-for="(food, foodIndex) in item.list" :key="food.spuId">
          <el-checkbox v-model="food.checked" @change="handleFood">{{food.spuName}}</el-checkbox>
          价格：{{food.currentPrice}},份数：
          <el-button @click="handleSub(index, foodIndex)">-</el-button>
          {{food.count}}
          <el-button @click="handleAdd(index, foodIndex)">+</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    myCart() {
      return this.$store.state.myCart;
    }
  },
  methods: {
    handleAdd(index, foodIndex) {
      let myCart = this.$store.state.myCart;
      myCart[index].list[foodIndex].count++;
      this.$store.commit({ type: "onSetState", key: "myCart", value: myCart });
      this.$store.dispatch( { type: 'updateMyCart'})
    },
    handleSub(index, foodIndex) {
      let myCart = this.$store.state.myCart;
      if (myCart[index].list[foodIndex].count > 1) {
        myCart[index].list[foodIndex].count--;
        this.$store.commit({
          type: "onSetState",
          key: "myCart",
          value: myCart
        });
        this.$store.dispatch( { type: 'updateMyCart'})
      }
    },
    handleCategory(checked) {
      console.log(checked)
    },
    handleFood(checked) {
      console.log(checked)
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getMyCart" });
  }
};
</script>

<style>
</style>