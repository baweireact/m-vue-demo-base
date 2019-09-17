<template>
  <div class="m-main">
    <div class="m-cart">
      <div v-for="(item, index) in myCart" :key="index" class="m-cart-list-item">
        <el-checkbox
          v-model="item.checked"
          @change="handleGroup(index, $event)"
          class="m-cart-category-name"
        >{{item.categoryName}}</el-checkbox>
        <div class="m-cart-food-list">
          <div
            v-for="(innerItem, innerIndex) in item.list"
            :key="innerItem.spuId"
            class="m-cart-food-list-item"
          >
            <el-checkbox
              v-model="innerItem.checked"
              @change="handleChecked(index, innerIndex, $event)"
            >{{innerItem.spuName}}</el-checkbox>
            <span class="m-cart-price">¥{{innerItem.originPrice}}</span>
            <div class="m-cart-control">
              <span class="m-sub-btn" @click="handleSub(index, innerIndex)">-</span>
              <span class="m-count">{{innerItem.count}}</span>
              <span class="m-add-btn" @click="handleAdd(index, innerIndex)">+</span>
              <el-button class="m-cart-delete-btn" @click="handleDelete(index, innerIndex)">删除</el-button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-checkbox class="m-select-all" v-model="selectAll" @change="handleSelectAll($event)">全选</el-checkbox>
      </div>
      <div class="m-total-wrap">
        <span>总价：</span>
        <span class="m-total-num">¥{{total.totalPrice}}</span>
        <span>总数：</span>
        <span class="m-total-num">{{total.totalNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectAll: false
    }
  },
  computed: {
    myCart() {
      let myCart = this.$store.state.myCart;
      let groupCheckedCount = 0;
      for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].checked) {
          groupCheckedCount++;
        }
      }
      this.selectAll = groupCheckedCount === myCart.length;
      return this.$store.state.myCart;
    },
    total() {
      let myCart = this.$store.state.myCart;
      let totalPrice = 0,
        totalNum = 0;
      for (let i = 0; i < myCart.length; i++) {
        for (let j = 0; j < myCart[i].list.length; j++) {
          if (myCart[i].list[j].checked) {
            totalPrice =
              totalPrice +
              myCart[i].list[j].currentPrice * myCart[i].list[j].count;
            totalNum = totalNum + myCart[i].list[j].count;
          }
        }
      }
      return {
        totalPrice,
        totalNum
      };
    }
  },
  methods: {
    //选择某一类
    handleGroup(index, checked) {
      this.myCart[index].checked = checked;
      for (let i = 0; i < this.myCart[index].list.length; i++) {
        this.myCart[index].list[i].checked = checked;
      }
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },
    //选择某一项
    handleChecked(index, innerIndex, checked) {
      this.myCart[index].list[innerIndex].checked = checked;
      let checkedCount = 0;
      for (let i = 0; i < this.myCart[index].list.length; i++) {
        if (this.myCart[index].list[i].checked) {
          checkedCount++;
        }
      }
      this.myCart[index].checked =
        checkedCount === this.myCart[index].list.length;
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },
    //减
    handleSub(index, innerIndex) {
      if (this.myCart[index].list[innerIndex].count > 1) {
        this.myCart[index].list[innerIndex].count =
          this.myCart[index].list[innerIndex].count - 1;
        this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
      }
    },

    //加
    handleAdd(index, innerIndex) {
      this.myCart[index].list[innerIndex].count =
        this.myCart[index].list[innerIndex].count + 1;
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },

    //删除
    handleDelete(index, innerIndex) {
      this.myCart[index].list.splice(innerIndex, 1);
      if (this.myCart[index].list.length === 0) {
        this.myCart.splice(index, 1);
      }
      this.$store.dispatch({ type: "updateMyCart", myNewCart: this.myCart });
    },

    //全选
    handleSelectAll(checked) {
      let myCart = this.$store.state.myCart;
      for (let i = 0; i < myCart.length; i++) {
        myCart[i].checked = checked;
        for (let j = 0; j < myCart[i].list.length; j++) {
          myCart[i].list[j].checked = checked;
        }
      }
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