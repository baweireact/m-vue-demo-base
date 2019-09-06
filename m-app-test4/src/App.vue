<template>
  <div>
    <div class="m-nav-wrap">
      <span
        v-for="(item, index) in bookNav"
        :key="item.id"
        class="m-nav-item"
        :class="{active: index === currentIndex}"
        @click="handleNav(index, item.id)"
      >{{item.title}}</span>
    </div>
    <div>
      <div v-for="item in bookList.list" :key="item.id" class="m-list-item">
        <img :src="item.avatar" class="m-list-item-img">
        <div class="m-list-item-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bookNav: [],
      currentIndex: 0,
      bookList: []
    };
  },
  methods: {
    handleNav(index, id) {
      this.currentIndex = index;
      axios({
        url: `/api/book_list?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.bookList = res.data.data;
        }
      });
    }
  },
  mounted() {
    axios({
      url: "/api/book_nav"
    }).then(res => {
      if (res.data.code === 200) {
        this.bookNav = res.data.data;
      }
    });

    axios({
      url: `/api/book_list?id=0`
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data;
      }
    });
  }
};
</script>

<style>
.m-banner-img {
  width: 100%;
}
</style>
