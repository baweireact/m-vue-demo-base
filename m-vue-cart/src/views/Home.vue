<template>
  <div class="m-main">
    <div class="m-home-wrap">
      <div class="m-search-wrap">
        <el-input v-model="searchValue" placeholder="请输入喜欢吃的食物名称"/>
        <el-button @click="handleSearch">搜索</el-button>
      </div>
      <div class="m-home">
        <Sidebar></Sidebar>
        <FoodList></FoodList>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import FoodList from "../components/FoodList";

export default {
  data() {
    return {
      searchValue: ""
    };
  },
  components: {
    Sidebar,
    FoodList
  },
  methods: {
    handleSearch() {
      this.$store.dispatch({
        type: "getFoodList",
        searchValue: this.searchValue
      });
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getFoodList" });
  }
};
</script>
