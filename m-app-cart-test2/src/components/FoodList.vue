<template>
  <div class="m-food-list">
    <div class="m-food-list-item" v-for="item in currentList" :key="item.spuId">
      <img :src="item.bigImageUrl" class="m-food-list-item-img" />
      <div class="m-food-list-item-info">
        <div>{{item.spuName}}</div>
        <div>{{item.currentPrice}}</div>
        <el-button @click="handleShowDialog(item)">加入购物车</el-button>
      </div>
    </div>
    <el-dialog title="添加" :visible="visible" @close="handleHideDialog">
      <el-button @click="handleSub">-</el-button>
      {{currentItem.count}}
      <el-button @click="handleAdd">+</el-button>
      <div>
        <el-button @click="handleHideDialog">取消</el-button>
        <el-button @click="handleAddToCart">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      currentItem: {}
    };
  },
  computed: {
    currentList() {
      return this.$store.state.currentList;
    }
  },
  methods: {
    handleHideDialog() {
      this.visible = false;
    },
    handleShowDialog(item) {
      this.visible = true;
      item.count = 1;
      this.currentItem = JSON.parse(JSON.stringify(item));
    },
    handleAdd() {
      this.currentItem.count++;
    },
    handleSub() {
      if (this.currentItem.count > 1) {
        this.currentItem.count--;
      }
    },
    handleAddToCart() {
      let food = this.currentItem;
      let myCart = JSON.parse(localStorage.getItem("myCart"))
        ? JSON.parse(localStorage.getItem("myCart"))
        : [];
      let index = myCart.findIndex(item => item.spuId === food.spuId);
      if (index >= 0) {
        myCart[index].count += food.count;
      } else {
        myCart.push(food);
      }
      localStorage.setItem("myCart", JSON.stringify(myCart));
      this.$store.commit({ type: "onSetState", key: "myCart", value: myCart });
      this.handleHideDialog();
    }
  },
  mounted() {
    this.myCart = JSON.parse(localStorage.getItem("myCart"));
    this.$store.commit({
      type: "onSetState",
      key: "myCart",
      value: this.myCart
    });
  }
};
</script>

<style>
</style>