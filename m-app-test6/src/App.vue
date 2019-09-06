<template>
  <div id="app">
    <Header :bookNav="bookNav" :currentIndex="currentIndex" @onNav="handleNav"></Header>
    <List :bookList="bookList"></List>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";

export default {
  name: "app",
  data() {
    return {
      bookNav: [],
      currentIndex: 0,
      bookList: []
    };
  },
  components: {
    Header,
    List
  },
  methods: {
    handleNav(index, id) {
      this.currentIndex = index;
      axios({
        url: `/api/book_list?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.bookList = res.data.data.list;
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
      url: "/api/book_list?id=0"
    }).then(res => {
      if (res.data.code === 200) {
        this.bookList = res.data.data.list;
      }
    });
  }
};
</script>