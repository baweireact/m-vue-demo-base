<template>
  <div class="m-main">
    <div v-for="(item, index) in myCart" :key="index">
      菜名：{{item.spuName}},份数：{{item.count}},价格：{{item.currentPrice}}元
    </div>
    总数:{{totalCount}}, 总价：{{totalPrice}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCart: [],
      totalPrice: 0,
      totalCount: 0
    }
  },
  methods: {
  },
  mounted() {
    this.myCart = JSON.parse(localStorage.getItem('myCart'))
    let totalCount = 0
    let totalPrice = 0
    this.myCart.forEach(item => {
      totalCount += item.count
      totalPrice += item.count * item.currentPrice
    })
    this.totalCount = totalCount
    this.totalPrice = totalPrice
  }
};
</script>

<style>
</style>