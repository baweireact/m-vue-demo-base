<template>
  <div class="m-food-list">
    <div v-for="item in currentFoodList" :key="item.spuId" class="m-food-list-item">
      <img :src="item.bigImageUrl" class="m-food-list-img" />
      <div class="m-food-list-info">
        <div class="m-name">{{item.spuName}}</div>
        <div class="m-price">¥{{item.originPrice}}</div>
        <div>
          <el-button @click="handleShowDialog(item)">加入购物车</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="添加" :visible="visible" @close="handleClose">
      <div class="m-dialog-content">
        <span class="m-sub-btn" @click="handleSub">-</span>
        <span class="m-count">{{count}}</span>
        <span class="m-add-btn" @click="handleAdd">+</span>
      </div>
      <div slot="footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button @click="handleConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      count: 1,
      currentItem: {},
    };
  },
  computed: {
    currentFoodList() {
      return this.$store.state.currentFoodList;
    }
  },
  methods: {
    handleClose() {
      this.visible = false;
    },
    handleShowDialog(item) {
      this.visible = true;
      this.count = 1
      this.currentItem = item
    },
    handleConfirm() {
      this.currentItem.count = this.count
      this.$store.dispatch({ type: 'addToMyCart', currentItem: this.currentItem, callback: this.handleClose })
    },
    handleSub() {
      if (this.count > 1) {
        this.count = this.count - 1
      }
    },
    handleAdd() {
      this.count = this.count + 1
    }
  }
};
</script>

<style>
</style>