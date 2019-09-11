<template>
  <div class="m-home">
    <BookNav :bookNav="bookNav" :currentIndex="currentIndex" @onNav="handleNav"></BookNav>
    <List :bookList="bookList" @onUpdate="handleUpdate"></List>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import BookNav from "../components/BookNav";
import List from "../components/List";

export default {
  data() {
    return {
      bookNav: [],
      currentIndex: 0,
      bookList: []
    };
  },
  components: {
    BookNav,
    List
  },
  methods: {
    handleNav(index, id) {
      this.currentIndex = index;
      localStorage.setItem("currentIndex", index);
      localStorage.setItem("id", id);
      axios({
        url: `/api/book_list?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.bookList = res.data.data;
        }
      });
    },
    handleUpdate() {
      let id = localStorage.getItem("id") ? localStorage.getItem("id") : "0";
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

    let id = localStorage.getItem("id") ? localStorage.getItem("id") : "0";
    axios({
      url: `/api/book_list?id=${id}`
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data;
      }
    });
    this.currentIndex = localStorage.getItem("currentIndex")
      ? Number(localStorage.getItem("currentIndex"))
      : 0;
  }
};
</script>
