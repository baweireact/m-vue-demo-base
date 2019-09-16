<template>
  <div class="m-main">
    <div v-for="(item, index) in myCart" :key="index">
      <el-checkbox :checked="item.checked" @change="handleGroup(index, $event)">{{item.categoryName}}</el-checkbox>
      <div>
        <div v-for="innerItem in item.list" :key="innerItem.spuId">
          <el-checkbox :checked="innerItem.checked">
            <div>{{innerItem.spuName}}</div>
          </el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    myCart() {
      return this.$store.state.myCart;
    }
  },
  methods: {
    handleGroup(index, checked) {
      this.myCart[index].checked = checked;
      for (let i = 0; i < this.myCart[index].list.length; i++) {
        this.myCart[index].list[i].checked = checked;
      }
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getMyCart" });
  }
};
</script>

<style>
</style>