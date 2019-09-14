<template>
  <div class="m-detail">
    <img :src="detail.avatar" class="m-detail-img" />
    <div>{{detail.title}}</div>
    <span class="m-add-btn-disable" v-show="detail.is_in_my_book">已在书架</span>
    <span class="m-add-btn" v-show="!detail.is_in_my_book" @click="handleAdd">加入书架</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    detail() {
      return this.$store.state.task.detail
    }
  },
  methods: {
    handleAdd() {
      let id = this.$route.params.id;
      this.$store.dispatch({ type: 'task/addBookInDetailPage', detail: this.detail, id })
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch({ type: 'task/getDetail', id })
  }
};
</script>

<style>
</style>