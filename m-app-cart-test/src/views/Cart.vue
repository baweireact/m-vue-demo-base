<template>
  <div class="m-main">
    <div v-for="(item, index) in myCart" :key="index">
      <el-checkbox v-model="item.checked">{{item.spuName}}</el-checkbox>
      ,价格：{{item.currentPrice}}元,份数：
      <el-button @click="handleSub(index)">-</el-button>
      {{item.count}}
      <el-button @click="handleAdd(index)">+</el-button>
    </div>
    <el-checkbox v-model="selectAll" @change="handleSelectAll">全选</el-checkbox>
    总数:{{totalCount}}, 总价：{{totalPrice}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCart: [],
      totalPrice: 0,
      totalCount: 0,
      selectAll: false
    };
  },
  methods: {
    handleSub(index) {
      if (this.myCart[index].count > 1) {
        this.myCart[index].count--;
      }
    },
    handleAdd(index) {
      this.myCart[index].count++;
    },
    total() {
      let totalCount = 0;
      let totalPrice = 0;
      this.myCart.forEach(item => {
        totalCount += item.count;
        totalPrice += item.count * item.currentPrice;
      });
      this.totalCount = totalCount;
      this.totalPrice = totalPrice;
    },
    handleSelectAll(checked) {
      this.myCart.forEach(item => {
        item.checked = checked
      })
    }
  },
  //vue的生命周期
  updated() {
    console.log("更新完成了！");
    this.total();
    localStorage.setItem("myCart", JSON.stringify(this.myCart));
    this.selectAll = this.myCart.filter(item => item.checked).length === this.myCart.length
  },
  mounted() {
    this.myCart = JSON.parse(localStorage.getItem("myCart"));
    this.total();
    this.selectAll = this.myCart.filter(item => item.checked).length === this.myCart.length
  }
};
</script>

<style>
</style>