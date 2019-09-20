<template>
  <div class="m-main">
    <div v-for="(item, index) in myCart" :key="index">
      菜名：{{item.spuName}},价格：{{item.currentPrice}},
      <el-button @click="handleSub(index)">-</el-button>
      {{item.count}}
      <el-button @click="handleAdd(index)">+</el-button>
    </div>
    总价：{{totalPrice}},总数：{{totalCount}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCart: [],
      totalPrice: 0,
      totalCount: 0
    };
  },

  methods: {
    handleSub(index) {
      if (this.myCart[index].count > 1) {
        this.myCart[index].count--;
        this.total()
      }
    },
    handleAdd(index) {
      this.myCart[index].count++;
      this.total()
    },
    total() {
      let totalPrice = 0;
      let totalCount = 0;
      this.myCart.forEach(item => {
        totalPrice += item.currentPrice * item.count;
        totalCount += item.count;
      });
      this.totalPrice = totalPrice;
      this.totalCount = totalCount;
      localStorage.setItem("myCart", JSON.stringify(this.myCart));
    }
  },
  mounted() {
    this.myCart = JSON.parse(localStorage.getItem("myCart"));
    this.total()
  }
};
</script>

<style>
</style>