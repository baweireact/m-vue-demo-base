<template>
  <div class="m-home">
    <BookNav :bookNav="bookNav" :currentIndex="currentIndex" @onNav="handleNav"></BookNav>
    <List :bookList="bookList" @listUpdate="handleListUpdate"></List>
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
      axios({
        url: `/api/book_list?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.bookList = res.data.data;
        }
      });
      localStorage.setItem("currentIndex", index);
      localStorage.setItem("id", id);
    },
    handleListUpdate() {
      let id = localStorage.getItem("id") || "0";
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
    let id = localStorage.getItem("id") || "0";
    this.currentIndex = localStorage.getItem("currentIndex") * 1 || 0;
    axios({
      url: `/api/book_list?id=${id}`
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data;
      }
    });
  }
};
</script>
