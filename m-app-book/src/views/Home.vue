<template>
  <div class="m-home">
    <BookNav :bookNav="bookNav" :currentIndex="currentIndex" @onNav="handleNav"></BookNav>
    <List :bookList="bookList" @onListUpdate="handleListUpdate"></List>
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
    //点击导航会触发这个函数，点击添加高亮，axios请求数据发出的是id，通过id找到数据
    handleNav(index, id) {
      this.currentIndex = index; //高亮
      axios({
        url: `/api/book_list?id=${id}`
      }).then(res => {
        if (res.data.code === 200) {
          this.bookList = res.data.data;  //列表数据更新
        }
      });
      localStorage.setItem("currentIndex", index);  //本地存储，高亮
      localStorage.setItem("id", id);  //本地存储，id
    }, 
    //加入我的书架后，会触发这个函数，更新数据
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
