<template>
  <div class="m-main">
    <div v-for="(item, index) in myCart" :key="index">
      <el-checkbox v-model="myCart[index].checked" >菜名：{{item.spuName}}</el-checkbox>
      ,价格：{{item.currentPrice}},
      <el-button @click="handleSub(index)">-</el-button>
      {{item.count}}
      <el-button @click="handleAdd(index)">+</el-button>
      <el-button @click="handleDelete(index)">删除</el-button>
    </div>
    <el-checkbox v-model="selectAll" @change="handleSelectAll"></el-checkbox>
    总价：{{totalPrice}},总数：{{totalCount}}
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
      let totalPrice = 0;
      let totalCount = 0;
      this.myCart.filter(item => item.checked).forEach(item => {
        totalPrice += item.currentPrice * item.count;
        totalCount += item.count;
      });
      this.totalPrice = totalPrice;
      this.totalCount = totalCount;
      localStorage.setItem("myCart", JSON.stringify(this.myCart));
    },
    handleDelete(index) {
      this.myCart.splice(index, 1)
    },
    handleSelectAll(checked) {
      this.selectAll = checked
      this.myCart.forEach(item => {
        item.checked = checked
      })
    }
  },
  updated() {
    localStorage.setItem("myCart", JSON.stringify(this.myCart));
    this.selectAll = this.myCart.filter(item => item.checked).length === this.myCart.length
    this.$store.commit({ type: 'onSetState', key: 'myCart', value: this.myCart })
    this.total()
  },
  mounted() {
    this.myCart = JSON.parse(localStorage.getItem("myCart")) ? JSON.parse(localStorage.getItem("myCart")) : [];
    this.total()
    this.selectAll = this.myCart.filter(item => item.checked).length === this.myCart.length
  }
};
</script>

<style>
</style>