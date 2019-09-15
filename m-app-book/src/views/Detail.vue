<template>
  <div class="m-detail">
    <img :src="detail.avatar" />
    <span class="m-add-btn" v-show="!detail.is_in_my_book" @click="handleAdd(detail)">加入书架</span>
    <span class="m-add-btn-disable" v-show="detail.is_in_my_book">已在书架</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    handleAdd(item) {
      axios({
        url: "/api/add_book",
        data: {
          item
        },
        method: "post"
      }).then(res => {
        if (res.data.code === 200) {
          this.detail.is_in_my_book = true
        }
      });
    }
  },
  mounted() {
    let id = this.$route.params.id;
    axios({
      url: `/api/detail?id=${id}`
    }).then(res => {
      if (res.data.code === 200) {
        this.detail = res.data.data;
      }
    });
  }
};
</script>

<style>
</style>