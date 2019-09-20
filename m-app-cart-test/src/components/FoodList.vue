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
      <div>
        <el-button @click="handleSub">-</el-button>
        {{currentItem.count}}
        <el-button @click="handleAdd">+</el-button>
        <div>
          <el-button @click="handleAddToCart">确定</el-button>
        </div>
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
    //显示对话框，并保存这道菜的所有信息到currentItem
    handleShowDialog(item) {
      this.visible = true;
      item.count = 1;
      this.currentItem = JSON.parse(JSON.stringify(item));
    },
    handleSub() {
      if (this.currentItem.count > 1) {
        this.currentItem.count--;
      }
    },
    handleAdd() {
      this.currentItem.count++;
    },
    //加入购物车
    handleAddToCart() {
      let currentItem = this.currentItem
      let myCart = JSON.parse(localStorage.getItem("myCart"))
        ? JSON.parse(localStorage.getItem("myCart"))
        : [];
      let index = myCart.findIndex(food => food.spuId === currentItem.spuId);
      currentItem.checked = true
      if (index >= 0) {
        myCart[index].count += currentItem.count;
      } else {
        myCart.push(currentItem);
      }

      localStorage.setItem("myCart", JSON.stringify(myCart));
      this.handleHideDialog()
    }
  }
};
</script>

<style>
</style>