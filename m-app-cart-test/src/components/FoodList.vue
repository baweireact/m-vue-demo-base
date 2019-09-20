<template>
  <div class="m-food-list">
    <div class="m-food-list-item" v-for="item in currentList" :key="item.spuId">
      <img :src="item.bigImageUrl" class="m-food-list-item-img" />
      <div class="m-food-list-item-info">
        <div>{{item.spuName}}</div>
        <div>{{item.currentPrice}}</div>
        <el-button @click="handleShowDialog(item)">加入购物车</el-button>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>

    <el-dialog title="添加" :visible="visible" @close="handleHideDialog">
      <div>
        <el-button @click="handleSub">-</el-button>
        {{currentItem.count}}
        <el-button @click="handleAdd">+</el-button>
      </div>
      <span slot="footer">
        <el-button @click="handleHideDialog">取消</el-button>
        <el-button @click="handleAddToCart">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      currentItem: {},
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  computed: {
    currentList() {
      return this.$store.state.currentList;
    }
  },
  methods: {
    handleShowDialog(item) {
      this.visible = true;
      item.count = 1;
      this.currentItem = JSON.parse(JSON.stringify(item));
    },
    handleHideDialog() {
      this.visible = false;
    },
    handleAddToCart() {
      let foodList = this.$store.state.foodList;
      let currentIndex = this.$store.state.currentIndex; //当前的下标
      this.$store.dispatch({
        type: "addToMyCart",
        categoryName: foodList[currentIndex].categoryName,
        currentItem: this.currentItem
      });
      this.handleHideDialog();
    },
    handleAdd() {
      this.currentItem.count++;
    },
    handleSub() {
      if (this.currentItem.count > 1) {
        this.currentItem.count--;
      }
    }
  }
};
</script>

<style>
</style>