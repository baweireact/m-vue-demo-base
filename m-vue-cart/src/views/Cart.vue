<template>
  <div class="m-main">
    <div class="m-cart">
      <div v-for="(item, categoryIndex) in myCart" :key="categoryIndex" class="m-cart-list-item">
        <el-checkbox
          v-model="item.checked"
          @change="handleGroup(categoryIndex, $event)"
          class="m-cart-category-name"
        >{{item.categoryName}}</el-checkbox>
        <div class="m-cart-food-list">
          <div
            v-for="(innerItem, listIndex) in item.list"
            :key="innerItem.spuId"
            class="m-cart-food-list-item"
          >
            <el-checkbox
              v-model="innerItem.checked"
              @change="handleChecked(categoryIndex, listIndex, $event)"
            >{{innerItem.spuName}}</el-checkbox>
            <span class="m-cart-price">¥{{innerItem.originPrice}}</span>
            <div class="m-cart-control">
              <span class="m-sub-btn" @click="handleSub(categoryIndex, listIndex)">-</span>
              <span class="m-count">{{innerItem.count}}</span>
              <span class="m-add-btn" @click="handleAdd(categoryIndex, listIndex)">+</span>
              <el-button
                class="m-cart-delete-btn"
                @click="handleDelete(categoryIndex, listIndex)"
              >删除</el-button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-checkbox class="m-select-all" v-model="selectAll" @change="handleSelectAll($event)">全选</el-checkbox>
      </div>
      <div class="m-total-wrap">
        <span>总价：</span>
        <span class="m-total-num">¥{{totalPrice}}</span>
        <span>总数：</span>
        <span class="m-total-num">{{totalNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectAll: false,
      totalPrice: 0,
      totalNum: 0
    };
  },
  computed: {
    //myCart改变时计算总价总数和全选按钮的状态
    myCart() {
      let myCart = this.$store.state.myCart;

      let totalPrice = 0;
      let totalNum = 0;

      //全选按钮的状态
      let groupCheckedCount = myCart.filter(item => item.checked).length;
      this.selectAll = groupCheckedCount === myCart.length;

      //总价和总数
      myCart.forEach(myCartItem => {
        myCartItem.list
          .filter(item => item.checked)
          .forEach(item => {
            totalPrice += item.currentPrice * item.count;
            totalNum += item.count;
          });
      });
      this.totalPrice = totalPrice;
      this.totalNum = totalNum;

      return myCart;
    }
  },
  methods: {
    //选择一级复选框
    handleGroup(categoryIndex, checked) {
      this.myCart[categoryIndex].checked = checked;
      this.myCart[categoryIndex].list.forEach(item => {
        item.checked = checked;
      });
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },
    //选择二级复选框
    handleChecked(categoryIndex, listIndex, checked) {
      this.myCart[categoryIndex].list[listIndex].checked = checked;

      //根据二级列表选中的数量，设置一级类别的选中状态
      let checkedCount = this.myCart[categoryIndex].list.filter(
        item => item.checked
      ).length;
      this.myCart[categoryIndex].checked =
        checkedCount === this.myCart[categoryIndex].list.length;

      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },
    //减
    handleSub(categoryIndex, listIndex) {
      if (this.myCart[categoryIndex].list[listIndex].count > 1) {
        this.myCart[categoryIndex].list[listIndex].count--;
        this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
      }
    },

    //加
    handleAdd(categoryIndex, listIndex) {
      this.myCart[categoryIndex].list[listIndex].count++;
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },

    //删除
    handleDelete(categoryIndex, listIndex) {
      this.myCart[categoryIndex].list.splice(listIndex, 1);

      //二级列表列表为空时，删除一级类别
      if (this.myCart[categoryIndex].list.length === 0) {
        this.myCart.splice(categoryIndex, 1);
      }
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },

    //全选
    handleSelectAll(checked) {
      let myCart = this.$store.state.myCart;
      myCart.forEach(myCartItem => {
        myCartItem.checked = checked;
        myCartItem.list.forEach(listItem => {
          listItem.checked = checked;
        });
      });
      this.$store.dispatch({ type: "updateMyCart", myNewCart: myCart });
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getMyCart" });
  }
};
</script>

<style>
</style>