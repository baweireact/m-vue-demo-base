<template>
  <div class="m-list-item">
    <img :src="item.avatar" class="m-list-item-img" />
    <div class="m-list-item-info">
      <div class="m-list-item-title">{{item.title}}</div>
      <span class="m-detail-btn" @click="handleDetail(item.id)">书籍详情</span>
      <span class="m-add-btn" v-show="!item.is_in_my_book" @click="handleAdd(item)">加入书架</span>
      <span class="m-add-btn-disable" v-show="item.is_in_my_book">已在书架</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["item", "onListUpdate"],
  methods: {
    handleDetail(id) {
      this.$router.push(`/home/detail/${id}`);
    },
    handleAdd(item) {
      if (localStorage.getItem("username")) {
        axios({
          url: "/api/add_book",
          data: {
            item
          },
          method: "post"
        }).then(res => {
          if (res.data.code === 200) {
            this.$emit("onListUpdate");
          }
        });
      } else {
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style>
</style>